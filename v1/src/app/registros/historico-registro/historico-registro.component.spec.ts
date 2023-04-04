import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoRegistroComponent } from './historico-registro.component';

describe('HistoricoRegistroComponent', () => {
  let component: HistoricoRegistroComponent;
  let fixture: ComponentFixture<HistoricoRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
