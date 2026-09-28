import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseStudentsDialogComponent } from './course-students-dialog.component';

describe('CourseStudentsDialogComponent', () => {
  let component: CourseStudentsDialogComponent;
  let fixture: ComponentFixture<CourseStudentsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseStudentsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseStudentsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
