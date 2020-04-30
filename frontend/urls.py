# frontend/urls.py

from django.urls import path

from .views import index, PostDetailView

urlpatterns = [
    path('', index),
    path('edit/<int:pk>', PostDetailView.as_view()),
    path('delete/<int:pk>', PostDetailView.as_view()),
]