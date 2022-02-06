import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailconfirmComponent } from './mailconfirm.component';

describe('MailconfirmComponent', () => {
  let component: MailconfirmComponent;
  let fixture: ComponentFixture<MailconfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailconfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
