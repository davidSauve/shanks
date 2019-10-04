import {IdentifiableExerciseType} from "../../models/exercise.model";
import {ExerciseTypeActionType} from "./actions";
import {FETCH_EXERCISE_TYPES_FAIL, FETCH_EXERCISE_TYPES_START, FETCH_EXERCISE_TYPES_SUCCESS} from "./actions/fetch/types";


interface ExerciseTypeState {
	identifiableExerciseTypes: IdentifiableExerciseType[],
	fetching: boolean,
	fetchingErrorMessage: string | null,
}

const initialState: ExerciseTypeState = {
	identifiableExerciseTypes: [ {
		id : "789798jkhjk",
		element : {
			name : "Bench"
		}
	}],
	fetching: false,
	fetchingErrorMessage: null,
};

const exerciseTypeReducer = (state: ExerciseTypeState = initialState, action: ExerciseTypeActionType): ExerciseTypeState => {
	switch (action.type) {

		case FETCH_EXERCISE_TYPES_START:
			return {
				...state,
				fetching: true
			};
		case FETCH_EXERCISE_TYPES_SUCCESS:
			return {
				...state,
				identifiableExerciseTypes: action.identifiableExerciseTypes,
				fetching: false
			};
		case FETCH_EXERCISE_TYPES_FAIL:
			return {
				...state,
				fetchingErrorMessage: action.error,
				fetching: false
			};
		default:
			return state
	}
};

export default exerciseTypeReducer



