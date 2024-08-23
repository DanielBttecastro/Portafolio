import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoSection2Component } from './proyecto-section-2.component';

describe('ProyectoSection2Component', () => {
  let component: ProyectoSection2Component;
  let fixture: ComponentFixture<ProyectoSection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectoSection2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
