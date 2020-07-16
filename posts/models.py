from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):
    title = models.CharField(max_length=100)
    text = models.TextField()
    owner = models.ForeignKey(User,
                              related_name="posts",
                              on_delete=models.CASCADE,
                              null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(null=True, upload_to='post_images')

    def __str__(self):
        return self.title