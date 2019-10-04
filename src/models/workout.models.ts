import {IdentifiableElement} from "./key";
import {IdentifiableExerciseType} from "./exercise.model";

export interface Workout {
	title: string,
	date : string,
	exerciseTypes : IdentifiableExerciseType[]
}

export type IdentifiableWorkout = IdentifiableElement<Workout>;
