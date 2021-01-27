import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamPageComponent } from './param-page.component';

describe('ParamPageComponent', () => {
  let component: ParamPageComponent;
  let fixture: ComponentFixture<ParamPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParamPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
