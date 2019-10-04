import {IdentifiableWorkout} from "../../../../models/workout.models";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import * as database from "../../../../firebase/database";
import {
	UPDATE_ACTIVE_WORKOUT_FAIL,
	UPDATE_ACTIVE_WORKOUT_START,
	UPDATE_ACTIVE_WORKOUT_SUCCESS,
	UpdateActiveWorkoutFailAction,
	UpdateActiveWorkoutStartAction,
	UpdateActiveWorkoutSuccessAction
} from "./types";

const updateActiveWorkoutStart = (identifiableWorkout : IdentifiableWorkout): UpdateActiveWorkoutStartAction => {
	return {
		type: UPDATE_ACTIVE_WORKOUT_START,
		identifiableWorkout: identifiableWorkout,
	};
};

const updateActiveWorkoutSuccess = (): UpdateActiveWorkoutSuccessAction => {
	return {
		type: UPDATE_ACTIVE_WORKOUT_SUCCESS,
	};
};

const updateActiveWorkoutFail = (error: string): UpdateActiveWorkoutFailAction => {
	return {
		type: UPDATE_ACTIVE_WORKOUT_FAIL,
		error,
	};
};

export const updateActiveWorkout = (identifiableWorkout: IdentifiableWorkout) => {
	return (dispatch: ThunkDispatch<null, null, AnyAction>) => {
		dispatch(updateActiveWorkoutStart(identifiableWorkout));
		database
			.updateWorkout(identifiableWorkout.id, identifiableWorkout.element)
			.then(() => {
				dispatch(updateActiveWorkoutSuccess());
			})
			.catch((error : {message : string}) => {
				dispatch(updateActiveWorkoutFail(error.message));
			});
	};
};