import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import workoutsReducer from "./workouts/reducer";
import exerciseTypeReducer from "./exercise-types/reducer";

const rootReducer = combineReducers({
	workoutsReducer: workoutsReducer,
	exerciseTypeReducer : exerciseTypeReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
	const middlewares = [thunkMiddleware];

	const middleWareEnhancer = applyMiddleware(...middlewares);

	return createStore(
		rootReducer,
		composeWithDevTools(middleWareEnhancer)
	);
}




