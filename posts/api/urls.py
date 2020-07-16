#from rest_framework import routers
from django.urls import path
from .views import PostView

#router = routers.DefaultRouter()
#router.register('posts', PostView.as_view(), 'posts')
# router.register('<The URL prefix>', <The viewset class>, '<The URL name>')

urlpatterns = [
    path('posts/', PostView.as_view(), name='posts'),
]