import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActualizarEmpleoPage } from './actualizar-empleo.page';

describe('ActualizarEmpleoPage', () => {
  let component: ActualizarEmpleoPage;
  let fixture: ComponentFixture<ActualizarEmpleoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarEmpleoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActualizarEmpleoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
