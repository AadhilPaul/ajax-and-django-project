from django.shortcuts import render

# Create your views here.


def get_posts(request):
    return render(request, 'frontend/get-posts.html')


def new_post(request):
    return render(request, 'frontend/new-post.html')
