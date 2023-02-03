import json
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import *

# Create your views here.

def home(request):
    file = open('static/index.html').read()
    return HttpResponse(file)

def getTasks(request):
    tasks = Task.objects.all()
    taskDict = {'tasks': []}
    for x in tasks:
        taskDict['tasks'].append(x.title)
    return JsonResponse(taskDict)
