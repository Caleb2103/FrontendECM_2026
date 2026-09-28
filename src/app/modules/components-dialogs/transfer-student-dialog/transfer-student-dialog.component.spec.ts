import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferStudentDialogComponent } from './transfer-student-dialog.component';

describe('TransferStudentDialogComponent', () => {
  let component: TransferStudentDialogComponent;
  let fixture: ComponentFixture<TransferStudentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferStudentDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferStudentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
