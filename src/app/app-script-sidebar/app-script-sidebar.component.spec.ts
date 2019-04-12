import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppScriptSidebarComponent } from './app-script-sidebar.component';

describe('AppScriptSidebarComponent', () => {
  let component: AppScriptSidebarComponent;
  let fixture: ComponentFixture<AppScriptSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppScriptSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppScriptSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
