import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GlosaryPage } from './glosary.page';

describe('GlosaryPage', () => {
  let component: GlosaryPage;
  let fixture: ComponentFixture<GlosaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlosaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GlosaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
