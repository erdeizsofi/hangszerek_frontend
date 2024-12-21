import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangszerDetailComponent } from './hangszer.detail.component';

describe('HangszerDetailComponent', () => {
  let component: HangszerDetailComponent;
  let fixture: ComponentFixture<HangszerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HangszerDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HangszerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
