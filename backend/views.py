import json
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from .models import *


def home(request):
    file = open('static/index.html').read()
    return HttpResponse(file)

@api_view(['GET'])
def getTasks(request):
    tasks = list(Task.objects.all().values())
    return JsonResponse({'tasks':tasks})

@api_view(['POST'])
def addTask(request):
    try:
        addedTask = Task.objects.create(title=request.data['task'])
    except Exception as e:
        return JsonResponse({'fail': 'Task creation failed'})
    return JsonResponse({'success': True})

@api_view(['PUT'])
def updateTask(request):
    try:
        updatedTask = Task.objects.get(id=request.data['id'])
        updatedTask.completed = not updatedTask.completed
        updatedTask.save()
    except Exception as e:
        return JsonResponse({'fail': 'Task update failed'})
    return JsonResponse({'success': True})
