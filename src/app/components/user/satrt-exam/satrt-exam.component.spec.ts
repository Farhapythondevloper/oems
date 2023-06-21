import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatrtExamComponent } from './satrt-exam.component';

describe('SatrtExamComponent', () => {
  let component: SatrtExamComponent;
  let fixture: ComponentFixture<SatrtExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatrtExamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SatrtExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
