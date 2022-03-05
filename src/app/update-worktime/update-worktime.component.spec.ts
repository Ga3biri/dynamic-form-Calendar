import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWorktimeComponent } from './update-worktime.component';

describe('UpdateWorktimeComponent', () => {
  let component: UpdateWorktimeComponent;
  let fixture: ComponentFixture<UpdateWorktimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateWorktimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWorktimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
