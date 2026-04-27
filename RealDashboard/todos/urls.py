from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import ApiView

# urlpatterns = [
#     # path("fdv/todos",views.todo_list,name="todo_list"),
#     # path("fdv/todos/create",views.todo_create,name="todo_create"),
#     # path("fdv/todos/delete/<int:pk>",views.todo_delete,name="todo_delete"),
#     # path("fdv/todos/update/<int:pk>",views.todo_update,name="todo_update"),
# ]

router = DefaultRouter()
router.register(r'todos',ApiView)

urlpatterns = [
    path("api/",include(router.urls)),
]

