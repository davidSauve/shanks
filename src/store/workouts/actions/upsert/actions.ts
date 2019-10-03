import * as database from "../../../../firebase/database";
import appHistory from "../../../../router/history";
import {CREATE_WORKOUT_FAIL, CREATE_WORKOUT_START, CREATE_WORKOUT_SUCCESS, CreateWorkoutFailAction, CreateWorkoutStartAction, CreateWorkoutSuccessAction,} from "./types";
import {Workout} from "../../../../models/workout.models";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {IdentifiableElement} from "../../../../models/key";

const createWorkoutStart = (): CreateWorkoutStartAction => {
	return {
		type: CREATE_WORKOUT_START,
	};
};

const createWorkoutSuccess = (identifiableWorkout: IdentifiableElement<Workout>): CreateWorkoutSuccessAction => {
	return {
		type: CREATE_WORKOUT_SUCCESS,
		identifiableWorkout: identifiableWorkout,
	};
};

const createWorkoutFail = (error: string): CreateWorkoutFailAction => {
	return {
		type: CREATE_WORKOUT_FAIL,
		error,
	};
};

export const createNewWorkout = (workout: Workout) => {
	return (dispatch: ThunkDispatch<null, null, AnyAction>) => {
		dispatch(createWorkoutStart());
		database
			.createWorkout(workout)
			.then(response => {
				dispatch(createWorkoutSuccess(response.data));
				appHistory.push(`/workouts/${response.data.id}`);
			})
			.catch(error => {
				dispatch(createWorkoutFail(error.message));
			});
	};
};
