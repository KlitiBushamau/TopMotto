import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrivacyComponent } from './orivacy.component';

describe('OrivacyComponent', () => {
  let component: OrivacyComponent;
  let fixture: ComponentFixture<OrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrivacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
