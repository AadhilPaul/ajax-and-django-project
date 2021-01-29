from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import BlogSerializer
from .models import Blog

# Create your views here.


@api_view(["GET"])
def list(request):
    blogs = Blog.objects.all()
    serializer = BlogSerializer(blogs, many=True)
    return Response(serializer.data)


@api_view(["POST"])
def post(request):
    serializer = BlogSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)
