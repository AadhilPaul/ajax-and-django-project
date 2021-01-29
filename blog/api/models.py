from django.db import models

# Create your models here.


class Blog(models.Model):
    title = models.CharField(max_length=200, null=False, blank=False)
    content = models.TextField(null=False)
    author = models.CharField(max_length=30)
    date_posted = models.DateField(null=False, auto_now_add=True)

    def __str__(self):
        return self.title
