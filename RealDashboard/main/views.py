from django.shortcuts import render,HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Sale
from .serializers import SalesSerializer
import numpy as np
from mylogger import logging_dataload
class DashBoardView(APIView):
    @logging_dataload
    def get(self,request):
        sales_list = Sale.objects.all()

        quantity = np.array(sales_list.values_list("quantity_sold",flat=True))

        if quantity.size == 0:
            return Response({"error":"Empty list ?"},status=400)
        
        mean_of_data = np.mean(quantity)
        std_of_data = np.std(quantity)

        serializer = SalesSerializer(sales_list,many=True)

        return Response(
            {
                'raw_data' : serializer.data,
                'stats' : {
                    'mean' : round(float(mean_of_data),2),
                    'std' : round(float(std_of_data),2)
                }
            }
        )