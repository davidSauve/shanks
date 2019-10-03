import {
	FETCH_ACTIVE_WORKOUT_FAIL,
	FETCH_ACTIVE_WORKOUT_START,
	FETCH_ACTIVE_WORKOUT_SUCCESS,
	FetchActiveWorkoutFailAction,
	FetchActiveWorkoutStartAction,
	FetchActiveWorkoutSuccessAction,
} from "./types";
import * as database from "../../../../firebase/database";
import {IdentifiableWorkout} from "../../../../models/workout.models";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

const fetchActiveWorkoutStart = (): FetchActiveWorkoutStartAction => {
	return {
		type: FETCH_ACTIVE_WORKOUT_START,
	};
};

const fetchActiveWorkoutSuccess = (fetchedActiveWorkout: IdentifiableWorkout): FetchActiveWorkoutSuccessAction => {
	return {
		type: FETCH_ACTIVE_WORKOUT_SUCCESS,
		identifiableWorkout: fetchedActiveWorkout,
	};
};

const fetchActiveWorkoutFail = (error: string): FetchActiveWorkoutFailAction => {
	return {
		type: FETCH_ACTIVE_WORKOUT_FAIL,
		error: error,
	};
};

export const fetchActiveWorkout = (id: string) => {
	return (dispatch: ThunkDispatch<null, null, AnyAction>) => {
		dispatch(fetchActiveWorkoutStart());
		database
			.fetchActiveWorkout(id)
			.then(response => {
				dispatch(fetchActiveWorkoutSuccess(response.data));
			})
			.catch(error => {
				dispatch(fetchActiveWorkoutFail(error.message));
			});
	};
};
