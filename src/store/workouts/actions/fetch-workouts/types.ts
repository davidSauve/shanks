import {IdentifiableWorkout} from "../../../../models/workout.models";

export const FETCH_WORKOUTS_START = "FETCH_WORKOUTS_START";
export type FETCH_WORKOUTS_START = typeof FETCH_WORKOUTS_START;

export const FETCH_WORKOUTS_SUCCESS = "FETCH_WORKOUTS_SUCCESS";
export type FETCH_WORKOUTS_SUCCESS = typeof FETCH_WORKOUTS_SUCCESS;

export const FETCH_WORKOUTS_FAIL = "FETCH_WORKOUTS_FAIL";
export type FETCH_WORKOUTS_FAIL = typeof FETCH_WORKOUTS_FAIL;

export interface FetchWorkoutsStartAction {
	type: FETCH_WORKOUTS_START;
}

export interface FetchWorkoutsSuccessAction {
	type: FETCH_WORKOUTS_SUCCESS;
	identifiableWorkouts: IdentifiableWorkout[];
}

export interface FetchWorkoutsFailAction {
	type: FETCH_WORKOUTS_FAIL;
	error: string;
}
