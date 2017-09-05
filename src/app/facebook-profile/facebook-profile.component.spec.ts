import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookProfileComponent } from './facebook-profile.component';

describe('FacebookProfileComponent', () => {
  let component: FacebookProfileComponent;
  let fixture: ComponentFixture<FacebookProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
