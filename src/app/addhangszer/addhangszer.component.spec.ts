import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhangszerComponent } from './addhangszer.component';

describe('AddhangszerComponent', () => {
  let component: AddhangszerComponent;
  let fixture: ComponentFixture<AddhangszerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddhangszerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddhangszerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
