from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):
    title = models.CharField(max_length=255)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User,
                              related_name="posts",
                              on_delete=models.CASCADE,
                              null=True)

    def __str__(self):
        return self.title