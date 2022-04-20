import { Card } from "../../../modules/share/model/card"
import { StudyScore } from "../../../modules/share/model/studyScore"

export type MapCards = {
  [parentId: string]: Card[];
}

export type GameState = {
  mapCards: MapCards;
  studyScore: StudyScore | null;
}

const initialState: GameState = {
  mapCards: {},
  studyScore: null
}