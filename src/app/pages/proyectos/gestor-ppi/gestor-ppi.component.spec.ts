import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorPPIComponent } from './gestor-ppi.component';

describe('GestorPPIComponent', () => {
  let component: GestorPPIComponent;
  let fixture: ComponentFixture<GestorPPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestorPPIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorPPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
