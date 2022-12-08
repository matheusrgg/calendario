import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReservarHoraComponent } from './modal-reservar-hora.component';

describe('ModalReservarHoraComponent', () => {
  let component: ModalReservarHoraComponent;
  let fixture: ComponentFixture<ModalReservarHoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalReservarHoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalReservarHoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
