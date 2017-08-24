import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemsComponent } from './edit-items.component';

describe('EditItemsComponent', () => {
  let component: EditItemsComponent;
  let fixture: ComponentFixture<EditItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});