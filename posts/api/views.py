from rest_framework import viewsets, permissions
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from .serializers import PostSerializer
from posts.models import Post


class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [JSONRenderer]

    def get_queryset(self):  
        return self.request.user.posts.all().order_by('-id')

    def perform_create(self, serializer):  
        serializer.save(owner=self.request.user)
        

