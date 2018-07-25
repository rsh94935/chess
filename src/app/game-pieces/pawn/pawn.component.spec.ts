import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PawnComponent } from './pawn.component';

describe('PawnComponent', () => {
  let component: PawnComponent;
  let fixture: ComponentFixture<PawnComponent>;
  let pieces: any[] = [{"colour": "White", "piece": "Pawn", "location": ["B", 3]}, {"colour": "Black", "piece": "Pawn", "location": ["A", 5]}, {"colour": "Black", "piece": "Pawn", "location": ["E", 7]}]
  let moves: any[] = [{"piece": "Pawn", "colour":"Black", "moveFrom": ["D", 7], "moveTo": ["D", 6]}]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PawnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PawnComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to move at most 2 spaces', () => {
    component.getMoves(pieces, moves, ["A", 2], "White");
    expect(component.moveLocations).toEqual([["A", 4], ["A", 3]]);
  })

  it('should only be able to move at most 1 space', () => {
    component.getMoves(pieces, moves, ["A", 3], "White");
    expect(component.moveLocations).toEqual([["A", 4]]);
  })

  it('should not be able to move as it is blocked', () => {
    component.getMoves(pieces, moves, ["A", 4], "White");
    expect(component.moveLocations).toEqual([]);
  })

  it('should be able to take an opponents piece or move forward one space', () => {
    component.getMoves(pieces, moves, ["B", 4], "White");
    expect(component.moveLocations).toEqual([["B", 5], ["A", 5]]);
  })

  it('should be able to do en passant if the opponent moves forward next to your pawn', () => {
    component.getMoves(pieces, moves, ["E", 6], "White");
    expect(component.moveLocations).toEqual([["D", 7]]);
  })

  it('black should be able to move 2 spaces forward', () => {
    component.getMoves(pieces, moves, ["H", 7], "Black");
    expect(component.moveLocations).toEqual([["H", 5], ["H", 6]]);
  })

  it('black should be able to move 1 space forward', () => {
    component.getMoves(pieces, moves, ["H", 6], "Black");
    expect(component.moveLocations).toEqual([["H", 5]]);
  })

  it('should not be able to move as it is blocked', () => {
    component.getMoves(pieces, moves, ["B", 4], "Black");
    expect(component.moveLocations).toEqual([]);
  })

  it('should be able to take an opponents piece or move forward one space', () => {
    component.getMoves(pieces, moves, ["C", 4], "Black");
    expect(component.moveLocations).toEqual([["C", 3], ["B", 3]]);
  })
});
