import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoSection1Component } from './proyecto-section-1.component';

describe('ProyectoSection1Component', () => {
  let component: ProyectoSection1Component;
  let fixture: ComponentFixture<ProyectoSection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectoSection1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
