import {IdentifiableElement} from "./key";

export interface ExerciseType {
	name: string
}

export type IdentifiableExerciseType = IdentifiableElement<ExerciseType>;