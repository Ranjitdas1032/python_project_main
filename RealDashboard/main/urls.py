from django.urls import path
from .views import DashBoardView

urlpatterns = [
    path('dashboard-data/',DashBoardView.as_view(),name = 'dashboard-analytics'),
]