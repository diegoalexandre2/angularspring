import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDialosComponent } from './error-dialos.component';

describe('ErrorDialosComponent', () => {
  let component: ErrorDialosComponent;
  let fixture: ComponentFixture<ErrorDialosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorDialosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorDialosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
