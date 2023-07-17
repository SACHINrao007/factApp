import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquidgameComponent } from './squidgame.component';

describe('SquidgameComponent', () => {
  let component: SquidgameComponent;
  let fixture: ComponentFixture<SquidgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquidgameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquidgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
