from django.urls import path
from .views import Info, SignUp, LogIn, LogOut

urlpatterns=[
    path('', Info.as_view(), name='Info'),
    path('SignUp/', SignUp.as_view(), name='SignUp'),
    path('LogIn/', LogIn.as_view(), name='LogIn'),
    path('LogOut/', LogOut.as_view(), name='LogOut')
]