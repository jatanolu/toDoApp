from django.test import TestCase, Client
from django.urls import reverse, resolve
from backend.views import *

class TestUrls(TestCase):
    def setUp(self):
        self.client=Client()

    
