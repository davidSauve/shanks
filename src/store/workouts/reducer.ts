import {CREATE_WORKOUT_FAIL, CREATE_WORKOUT_START, CREATE_WORKOUT_SUCCESS} from "./actions/upsert/types";
import {WorkoutActionType} from "./actions";
import {FETCH_ACTIVE_WORKOUT_FAIL, FETCH_ACTIVE_WORKOUT_START, FETCH_ACTIVE_WORKOUT_SUCCESS} from "./actions/fetch-active-workout/types";
import {FETCH_WORKOUTS_FAIL, FETCH_WORKOUTS_START, FETCH_WORKOUTS_SUCCESS} from "./actions/fetch-workouts/types";
import {IdentifiableWorkout} from "../../models/workout.models";

interface WorkoutState {
	identifiableWorkouts: IdentifiableWorkout[],
	activeWorkout: IdentifiableWorkout | null,
	fetching: boolean,
	fetchingErrorMessage: string | null,
	creating: boolean,
	creatingWorkoutErrorMessage: string | null,

}

const initialState: WorkoutState = {
	identifiableWorkouts: [],
	activeWorkout: null,
	fetching: false,
	fetchingErrorMessage: null,
	creating: false,
	creatingWorkoutErrorMessage: null,
};

const workoutsReducer = (state: WorkoutState = initialState, action: WorkoutActionType) : WorkoutState => {
	switch (action.type) {
		case CREATE_WORKOUT_START :
			return {
				...state,
				creating: true
			};
		case CREATE_WORKOUT_SUCCESS:
			return {
				...state,
				creating: false,
				identifiableWorkouts: state.identifiableWorkouts.concat(action.identifiableWorkout)
			};
		case CREATE_WORKOUT_FAIL:
			return {
				...state,
				creating: false,
				creatingWorkoutErrorMessage: action.error,
			};
		case FETCH_WORKOUTS_START:
			return {
				...state,
				fetching: true
			};
		case FETCH_WORKOUTS_SUCCESS:
			return {
				...state,
				identifiableWorkouts: action.identifiableWorkouts,
				fetching: false
			};
		case FETCH_WORKOUTS_FAIL:
			return {
				...state,
				fetchingErrorMessage: action.error,
				fetching: false
			};
		case FETCH_ACTIVE_WORKOUT_START:
			return {
				...state,
				fetching: true,
				activeWorkout: null,
				fetchingErrorMessage: null
			};
		case FETCH_ACTIVE_WORKOUT_SUCCESS:
			return {
				...state,
				fetching: false,
				activeWorkout: action.identifiableWorkout
			};
		case FETCH_ACTIVE_WORKOUT_FAIL:
			return {
				...state,
				fetching: false,
				fetchingErrorMessage: action.error
			};
		default:
			return state
	}
};

export default workoutsReducer


