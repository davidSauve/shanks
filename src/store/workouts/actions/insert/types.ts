import {Workout} from "../../../../models/workout.models";
import {IdentifiableElement} from "../../../../models/key";

export const CREATE_WORKOUT_START = "CREATE_WORKOUT_START";
export type CREATE_WORKOUT_START = typeof CREATE_WORKOUT_START;

export const CREATE_WORKOUT_SUCCESS = "CREATE_WORKOUT_SUCCESS";
export type CREATE_WORKOUT_SUCCESS = typeof CREATE_WORKOUT_SUCCESS;

export const CREATE_WORKOUT_FAIL = "CREATE_WORKOUT_FAIL";
export type CREATE_WORKOUT_FAIL = typeof CREATE_WORKOUT_FAIL;

export interface CreateWorkoutStartAction {
	type: CREATE_WORKOUT_START;
}

export interface CreateWorkoutSuccessAction {
	type: CREATE_WORKOUT_SUCCESS;
	identifiableWorkout: IdentifiableElement<Workout>;
}

export interface CreateWorkoutFailAction {
	type: CREATE_WORKOUT_FAIL;
	error: string;
}
