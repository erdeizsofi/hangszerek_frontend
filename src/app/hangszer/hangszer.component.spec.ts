import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangszerComponent } from './hangszer.component';

describe('HangszerComponent', () => {
  let component: HangszerComponent;
  let fixture: ComponentFixture<HangszerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HangszerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HangszerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
