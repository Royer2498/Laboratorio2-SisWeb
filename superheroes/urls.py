from django.urls import path
from superheroes import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('superheroes/', views.SuperheroesList.as_view()),
    path('superhero/<int:pk>', views.SuperheroDetail.as_view()),
    path('superHeroes/', views.SuperheroesListForFrontEnd.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)