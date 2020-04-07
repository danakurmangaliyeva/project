import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademListComponent } from './academ-list.component';

describe('AcademListComponent', () => {
  let component: AcademListComponent;
  let fixture: ComponentFixture<AcademListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
