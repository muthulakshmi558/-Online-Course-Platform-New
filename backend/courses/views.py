from rest_framework import viewsets
from .models import Course, Module, Lesson, Instructor
from .serializers import CourseSerializer, ModuleSerializer, LessonSerializer, InstructorSerializer

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class ModuleViewSet(viewsets.ModelViewSet):
    queryset = Module.objects.all()
    serializer_class = ModuleSerializer

class LessonViewSet(viewsets.ModelViewSet):
    queryset = Lesson.objects.select_related('module__course')
    serializer_class = LessonSerializer

class InstructorViewSet(viewsets.ModelViewSet):
    queryset = Instructor.objects.all()
    serializer_class = InstructorSerializer