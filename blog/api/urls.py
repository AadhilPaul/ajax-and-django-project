from django.urls import path
from . import views

# Create your urls here.

urlpatterns = [
    path('list/', views.list, name='list'),
    path('post/', views.post, name='post')
]
