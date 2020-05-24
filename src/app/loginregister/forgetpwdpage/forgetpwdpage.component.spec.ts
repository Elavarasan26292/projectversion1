import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpwdpageComponent } from './forgetpwdpage.component';

describe('ForgetpwdpageComponent', () => {
  let component: ForgetpwdpageComponent;
  let fixture: ComponentFixture<ForgetpwdpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetpwdpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetpwdpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
