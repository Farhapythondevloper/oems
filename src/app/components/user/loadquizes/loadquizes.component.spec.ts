import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadquizesComponent } from './loadquizes.component';

describe('LoadquizesComponent', () => {
  let component: LoadquizesComponent;
  let fixture: ComponentFixture<LoadquizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadquizesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadquizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
