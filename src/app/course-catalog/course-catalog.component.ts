import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-course-catalog',
  templateUrl: './course-catalog.component.html',
  styleUrls: ['./course-catalog.component.css'], // Add a comma here
  animations: [
    trigger('fadeAnimation', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('hidden => visible', animate('500ms ease-in')),
    ]),
  ],
})
export class CourseCatalogComponent implements OnInit {
  courses: Course[] = [
    { id: 1, title: 'Introduction to security', description: 'Learn the basics of security.', date: '2023-09-01' },
    { id: 2, title: 'Security measures', description: 'Deep dive into Security measures concepts.', date: '2023-09-15' },
    // Add more courses
  ];

  courseAnimationState(course: Course): string {
    // You can implement your own logic to determine the animation state
    return 'visible';
  }

  constructor() { }

  ngOnInit(): void {
  }

  registerCourse(courseId: number): void {
    console.log(`Registered for course with ID: ${courseId}`);
  }
}
