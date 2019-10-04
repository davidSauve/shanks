import {IdentifiableWorkout} from "../../../../models/workout.models";

export const UPDATE_ACTIVE_WORKOUT_START = "UPDATE_ACTIVE_WORKOUT_START";
export type UPDATE_ACTIVE_WORKOUT_START = typeof UPDATE_ACTIVE_WORKOUT_START;

export const UPDATE_ACTIVE_WORKOUT_SUCCESS = "UPDATE_ACTIVE_WORKOUT_SUCCESS";
export type UPDATE_ACTIVE_WORKOUT_SUCCESS = typeof UPDATE_ACTIVE_WORKOUT_SUCCESS;

export const UPDATE_ACTIVE_WORKOUT_FAIL = "UPDATE_ACTIVE_WORKOUT_FAIL";
export type UPDATE_ACTIVE_WORKOUT_FAIL = typeof UPDATE_ACTIVE_WORKOUT_FAIL;

export interface UpdateActiveWorkoutStartAction {
	type: UPDATE_ACTIVE_WORKOUT_START;
	identifiableWorkout: IdentifiableWorkout;
}

export interface UpdateActiveWorkoutSuccessAction {
	type: UPDATE_ACTIVE_WORKOUT_SUCCESS;
}

export interface UpdateActiveWorkoutFailAction {
	type: UPDATE_ACTIVE_WORKOUT_FAIL;
	error: string;
}
