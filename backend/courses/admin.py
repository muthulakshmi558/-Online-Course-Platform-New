from django.contrib import admin
from .models import Course, Module, Lesson, Instructor

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'instructor_list')
    search_fields = ('title', 'description')
    list_filter = ('created_at',)
    ordering = ('title',)

    def instructor_list(self, obj):
        return ", ".join(instructor.name for instructor in obj.instructors.all())
    instructor_list.short_description = 'Instructors'

@admin.register(Module)
class ModuleAdmin(admin.ModelAdmin):
    list_display = ('title', 'course', 'order')
    search_fields = ('title', 'course__title')
    list_filter = ('course',)
    ordering = ('course', 'order')
    list_editable = ('order',)

@admin.register(Lesson)
class LessonAdmin(admin.ModelAdmin):
    list_display = ('title', 'module', 'course', 'order')
    search_fields = ('title', 'module__title', 'module__course__title')
    list_filter = ('module__course', 'module')
    ordering = ('module__course', 'module', 'order')
    list_editable = ('order',)

    def course(self, obj):
        return obj.module.course
    course.short_description = 'Course'

@admin.register(Instructor)
class InstructorAdmin(admin.ModelAdmin):
    list_display = ('name', 'course_list')
    search_fields = ('name', 'bio')
    filter_horizontal = ('courses',)  # Correct: 'courses' is a ManyToManyField on Instructor

    def course_list(self, obj):
        return ", ".join(course.title for course in obj.courses.all())
    course_list.short_description = 'Courses'