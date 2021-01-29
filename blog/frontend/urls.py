from django.urls import path
from . import views

# Create your urls here.

urlpatterns = [
    path('get-posts/', views.get_posts, name='get-posts'),
    path('create-post/', views.new_post, name='new-post'),
]
