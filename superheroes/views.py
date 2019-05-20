from superheroes.models import Superheroe
from superheroes.serializers import SuperheroeSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse, JsonResponse
from rest_framework.renderers import TemplateHTMLRenderer

class SuperheroesList(APIView):

    renderer_classes = [TemplateHTMLRenderer]

    def get(self, request, format=None):
        superheroes = Superheroe.objects.all()
        serializer = SuperheroeSerializer(superheroes, many=True)
        return Response({'superheroes':superheroes}, template_name='index.html',status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = SuperheroeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SuperheroesListForFrontEnd(APIView):
    def get(self, request, format=None):
        superheroes = Superheroe.objects.all()
        serializer = SuperheroeSerializer(superheroes, many=True)
        return JsonResponse(serializer.data,safe=False)

class EditHeroView(APIView):
    renderer_classes = [TemplateHTMLRenderer]
    
    def get(self, request, format=None):
        return Response(template_name='editHero.html',status=status.HTTP_200_OK)

class CreateHeroView(APIView):
    renderer_classes = [TemplateHTMLRenderer]
    
    def get(self, request, format=None):
        return Response(template_name='createHero.html',status=status.HTTP_200_OK)

class SuperheroDetail(APIView):

    def get_object(self, pk):
        try:
            return Superheroe.objects.get(pk=pk)
        except Superheroe.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        superhero = self.get_object(pk)
        serializer = SuperheroeSerializer(superhero)
        return JsonResponse(serializer.data)

    def put(self, request, pk, format=None):
        superhero = self.get_object(pk)
        serializer = SuperheroeSerializer(superhero, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        superhero = self.get_object(pk)
        superhero.delete()
        return JsonResponse({"message":"Eliminado correctamente"},status=status.HTTP_204_NO_CONTENT)

    