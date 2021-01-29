from rest_framework import serializers
from .models import Blog

# Create your serializer here.


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = "__all__"
