import {IdentifiableWorkout} from "../../../../models/workout.models";

export const FETCH_ACTIVE_WORKOUT_START = 'FETCH_ACTIVE_WORKOUT_START';
export type FETCH_ACTIVE_WORKOUT_START = typeof FETCH_ACTIVE_WORKOUT_START;

export const FETCH_ACTIVE_WORKOUT_SUCCESS = 'FETCH_ACTIVE_WORKOUT_SUCCESS';
export type FETCH_ACTIVE_WORKOUT_SUCCESS = typeof FETCH_ACTIVE_WORKOUT_SUCCESS;

export const FETCH_ACTIVE_WORKOUT_FAIL = 'FETCH_ACTIVE_WORKOUT_FAIL';
export type FETCH_ACTIVE_WORKOUT_FAIL = typeof FETCH_ACTIVE_WORKOUT_FAIL;

export interface FetchActiveWorkoutStartAction {
    type: FETCH_ACTIVE_WORKOUT_START;
}

export interface FetchActiveWorkoutSuccessAction {
    type: FETCH_ACTIVE_WORKOUT_SUCCESS;
	identifiableWorkout: IdentifiableWorkout;
}

export interface FetchActiveWorkoutFailAction {
    type: FETCH_ACTIVE_WORKOUT_FAIL;
    error: string;
}
