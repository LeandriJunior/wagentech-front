import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadCarroComponent } from './cad-carro.component';

describe('CadCarroComponent', () => {
  let component: CadCarroComponent;
  let fixture: ComponentFixture<CadCarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadCarroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
