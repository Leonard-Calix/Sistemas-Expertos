import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisBlogsComponent } from './mis-blogs.component';

describe('MisBlogsComponent', () => {
  let component: MisBlogsComponent;
  let fixture: ComponentFixture<MisBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
