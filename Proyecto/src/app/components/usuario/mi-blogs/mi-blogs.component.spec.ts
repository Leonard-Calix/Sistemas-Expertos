import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiBlogsComponent } from './mi-blogs.component';

describe('MiBlogsComponent', () => {
  let component: MiBlogsComponent;
  let fixture: ComponentFixture<MiBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
