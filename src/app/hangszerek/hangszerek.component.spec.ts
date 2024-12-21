import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangszerekComponent } from './hangszerek.component';

describe('HangszerekComponent', () => {
  let component: HangszerekComponent;
  let fixture: ComponentFixture<HangszerekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HangszerekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HangszerekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
