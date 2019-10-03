import {FETCH_WORKOUTS_FAIL, FETCH_WORKOUTS_START, FETCH_WORKOUTS_SUCCESS, FetchWorkoutsFailAction, FetchWorkoutsStartAction, FetchWorkoutsSuccessAction,} from "./types";
import * as database from "../../../../firebase/database";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {IdentifiableWorkout} from "../../../../models/workout.models";

const fetchWorkoutsStart = (): FetchWorkoutsStartAction => {
    return {
        type: FETCH_WORKOUTS_START,
    };
};

const fetchWorkoutsSuccess = (fetchedWorkouts: IdentifiableWorkout[]): FetchWorkoutsSuccessAction => {
    return {
        type: FETCH_WORKOUTS_SUCCESS,
		identifiableWorkouts: fetchedWorkouts,
    };
};

const fetchWorkoutsFail = (error: string): FetchWorkoutsFailAction => {
    return {
        type: FETCH_WORKOUTS_FAIL,
        error: error,
    };
};

export const fetchWorkouts = () => {
    return (dispatch: ThunkDispatch<null, null, AnyAction>) => {
        dispatch(fetchWorkoutsStart());
        database
            .fetchWorkouts()
            .then(response => {
                dispatch(fetchWorkoutsSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchWorkoutsFail(error.message));
            });
    };
};
