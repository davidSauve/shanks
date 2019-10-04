import { FetchExerciseTypesStartAction, FetchExerciseTypesFailAction, FetchExerciseTypesSuccessAction } from './fetch/types';

export type ExerciseTypeActionType =
	| FetchExerciseTypesStartAction
	| FetchExerciseTypesSuccessAction
	| FetchExerciseTypesFailAction
