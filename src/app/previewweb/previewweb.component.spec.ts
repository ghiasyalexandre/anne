import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewwebComponent } from './previewweb.component';

describe('PreviewwebComponent', () => {
  let component: PreviewwebComponent;
  let fixture: ComponentFixture<PreviewwebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewwebComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
