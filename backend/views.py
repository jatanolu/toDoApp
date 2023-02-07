import json
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from .models import *


def home(request):
    file = open('static/index.html').read()
    return HttpResponse(file)

@api_view(['GET','POST'])
def getTasks(request):
    if request.method == 'GET':
        tasks = Task.objects.all()
        taskDict = {'tasks': []}
        for x in tasks:
            taskDict['tasks'].append(x.title)
        return JsonResponse(taskDict)
    if request.method == 'POST':
        print(type(request.data['task']))
        try:
            addedTask = Task.objects.create(title=request.data['task'])
        except Exception as e:
            print(e)
            return JsonResponse({'fail': 'Task creation failed'})
        return JsonResponse({'success': True})
