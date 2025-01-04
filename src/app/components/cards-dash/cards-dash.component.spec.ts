import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDashComponent } from './cards-dash.component';

describe('CardsDashComponent', () => {
  let component: CardsDashComponent;
  let fixture: ComponentFixture<CardsDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsDashComponent]
    });
    fixture = TestBed.createComponent(CardsDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
