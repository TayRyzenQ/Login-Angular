import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Banxico } from './banxico';

describe('Banxico', () => {
  let component: Banxico;
  let fixture: ComponentFixture<Banxico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Banxico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Banxico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
