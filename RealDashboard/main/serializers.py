from .models import Product, Sale
from rest_framework import serializers

class SalesSerializer(serializers.ModelSerializer):
    product_name = serializers.ReadOnlyField(source="Product.name")
    price = serializers.ReadOnlyField(source='Product.price')

    class Meta:
        model = Sale
        fields = ['id','product_name','price','quantity_sold','sales_date']