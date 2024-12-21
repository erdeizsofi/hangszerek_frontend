import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EladohangszerComponent } from './eladohangszer.component';

describe('EladohangszerComponent', () => {
  let component: EladohangszerComponent;
  let fixture: ComponentFixture<EladohangszerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EladohangszerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EladohangszerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
