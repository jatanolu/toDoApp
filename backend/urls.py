from django.urls import path
from . import views

urlpatterns = [
        path('', views.home),
        path('getTasks/', views.getTasks, name='getTasks'),
        path('addTask/', views.addTask, name='addTask'),
        path('updateTask/', views.updateTask, name='updateTask'),
        ]

