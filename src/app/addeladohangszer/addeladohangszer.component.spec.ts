import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeladohangszerComponent } from './addeladohangszer.component';

describe('AddeladohangszerComponent', () => {
  let component: AddeladohangszerComponent;
  let fixture: ComponentFixture<AddeladohangszerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddeladohangszerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddeladohangszerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
