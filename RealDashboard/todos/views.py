from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Todo
from .serializers import todoserializers
from rest_framework.viewsets import ModelViewSet

# Create your views here.

# @api_view(['GET'])
# def todo_list(request):
#     todo = Todo.objects.all().order_by('-id')
#     serializer = todoserializers(todo,many=True)
#     return Response(serializer.data)

# @api_view(['POST'])
# def todo_create(request):
#     serializer = todoserializers(data = request.data)

#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data,status=status.HTTP_201_CREATED)
#     return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

# @api_view(['DELETE'])
# def todo_delete(request,pk):
#     todo = Todo.objects.get(id=pk)
#     todo.delete()
#     return Response({"message":"todo deleted successfully"})

# @api_view(["PUT"])
# def todo_update(request,pk):
#     todo = Todo.objects.get(id=pk)
#     serializer = todoserializers(todo,data = request.data)

#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data)
#     return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class ApiView(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = todoserializers