import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PawnComponent } from './pawn.component';

describe('PawnComponent', () => {
  let component: PawnComponent;
  let fixture: ComponentFixture<PawnComponent>;
  let pieces: any[] = [{"colour": "White", "location": ["B", 3]}, {"colour": "Black", location: ["A", 5]}]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PawnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PawnComponent);
    component = fixture.componentInstance;
    component.colour = "White";
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to move at most 2 spaces', () => {
    component.myLocation = ["A", 2];
    component.getMoves(pieces);
    expect(component.moveLocations).toEqual([["A", 3], ["A", 4]]);
  })

  it('should only be able to move at most 1 space', () => {
    component.myLocation = ["A", 3];
    component.getMoves(pieces);
    expect(component.moveLocations).toEqual([["A", 4]]);
  })

  it('should not be able to move as it is blocked', () => {
    component.myLocation = ["A", 4];
    component.getMoves(pieces);
    expect(component.moveLocations).toEqual([]);
  })

});
