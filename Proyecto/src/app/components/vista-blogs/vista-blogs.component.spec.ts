import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaBlogsComponent } from './vista-blogs.component';

describe('VistaBlogsComponent', () => {
  let component: VistaBlogsComponent;
  let fixture: ComponentFixture<VistaBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
