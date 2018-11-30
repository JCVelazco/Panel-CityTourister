import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateInfoEditModalComponent } from './DateInfoEditModal.component';

describe('EditComponent', () => {
  let component: DateInfoEditModalComponent;
  let fixture: ComponentFixture<DateInfoEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateInfoEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateInfoEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
