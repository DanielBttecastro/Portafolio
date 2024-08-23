import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoSection3Component } from './proyecto-section-3.component';

describe('ProyectoSection3Component', () => {
  let component: ProyectoSection3Component;
  let fixture: ComponentFixture<ProyectoSection3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectoSection3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoSection3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
