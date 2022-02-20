import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeilsComponent } from './deils.component';

describe('DeilsComponent', () => {
  let component: DeilsComponent;
  let fixture: ComponentFixture<DeilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
