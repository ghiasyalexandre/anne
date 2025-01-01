import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavethedComponent } from './savethed.component';

describe('SavethedComponent', () => {
  let component: SavethedComponent;
  let fixture: ComponentFixture<SavethedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavethedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavethedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
