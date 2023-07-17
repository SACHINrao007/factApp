import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RammurtinaiduComponent } from './rammurtinaidu.component';

describe('RammurtinaiduComponent', () => {
  let component: RammurtinaiduComponent;
  let fixture: ComponentFixture<RammurtinaiduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RammurtinaiduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RammurtinaiduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
