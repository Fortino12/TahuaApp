import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CanastPage } from './canast.page';

describe('CanastPage', () => {
  let component: CanastPage;
  let fixture: ComponentFixture<CanastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanastPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CanastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
