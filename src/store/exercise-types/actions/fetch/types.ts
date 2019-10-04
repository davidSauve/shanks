import {IdentifiableExerciseType} from "../../../../models/exercise.model";

export const FETCH_EXERCISE_TYPES_START = "FETCH_EXERCISE_TYPES_START";
export type FETCH_EXERCISE_TYPES_START = typeof FETCH_EXERCISE_TYPES_START;

export const FETCH_EXERCISE_TYPES_SUCCESS = "FETCH_EXERCISE_TYPES_SUCCESS";
export type FETCH_EXERCISE_TYPES_SUCCESS = typeof FETCH_EXERCISE_TYPES_SUCCESS;

export const FETCH_EXERCISE_TYPES_FAIL = "FETCH_EXERCISE_TYPES_FAIL";
export type FETCH_EXERCISE_TYPES_FAIL = typeof FETCH_EXERCISE_TYPES_FAIL;

export interface FetchExerciseTypesStartAction {
	type: FETCH_EXERCISE_TYPES_START;
}

export interface FetchExerciseTypesSuccessAction {
	type: FETCH_EXERCISE_TYPES_SUCCESS;
	identifiableExerciseTypes: IdentifiableExerciseType[];
}

export interface FetchExerciseTypesFailAction {
	type: FETCH_EXERCISE_TYPES_FAIL;
	error: string;
}

