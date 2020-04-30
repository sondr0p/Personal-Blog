from rest_framework import routers

from .views import PostViewSet

router = routers.DefaultRouter()
router.register('posts', PostViewSet, 'posts')
# router.register('<The URL prefix>', <The viewset class>, '<The URL name>')

urlpatterns = router.urls