import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GlosariesPage } from './glosaries.page';

describe('GlosariesPage', () => {
  let component: GlosariesPage;
  let fixture: ComponentFixture<GlosariesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlosariesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GlosariesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
