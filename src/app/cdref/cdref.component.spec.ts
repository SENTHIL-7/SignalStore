import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdrefComponent } from './cdref.component';

describe('CdrefComponent', () => {
  let component: CdrefComponent;
  let fixture: ComponentFixture<CdrefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdrefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
