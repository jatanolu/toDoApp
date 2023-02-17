from django.test import TestCase, Client
from django.urls import reverse, resolve
import json
from backend.views import *

class TestViews(TestCase):
    def setUp(self):
        self.client=Client()

    def test_getTasks(self):
        response=self.client.get(reverse("getTasks"))
        body=json.loads(response.content)
        self.assertEquals(body, {'tasks':[]})
        
    def test_addTask_fail(self):
        response=self.client.post(reverse('addTask'))
        body=json.loads(response.content)
        self.assertEquals(body, {'fail': 'Task creation failed'})
    def test_addTask_true(self):
        response=self.client.post(reverse('addTask'),{'task':"test title"})
        body=json.loads(response.content)
        self.assertEquals(body, {'success': True})
