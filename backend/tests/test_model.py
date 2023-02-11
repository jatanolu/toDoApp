from django.test import TestCase
from backend.models import *

# Create your tests here.
class TestModels(TestCase):
    def setUp(self):
        self.task= Task.objects.create(title='Test Title')

    def test_creation(self):
        self.assert_(self.task)

