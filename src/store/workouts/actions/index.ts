import { FetchActiveWorkoutStartAction, FetchActiveWorkoutSuccessAction, FetchActiveWorkoutFailAction } from './fetch-active-workout/types';
import { FetchWorkoutsStartAction, FetchWorkoutsSuccessAction, FetchWorkoutsFailAction } from './fetch-workouts/types';
import { CreateWorkoutStartAction, CreateWorkoutSuccessAction, CreateWorkoutFailAction } from './insert/types';
import { UpdateActiveWorkoutStartAction, UpdateActiveWorkoutSuccessAction, UpdateActiveWorkoutFailAction } from './update-active-workout/types';

export type WorkoutActionType =
    | FetchActiveWorkoutStartAction
    | FetchActiveWorkoutSuccessAction
    | FetchActiveWorkoutFailAction
	| UpdateActiveWorkoutStartAction
	| UpdateActiveWorkoutSuccessAction
	| UpdateActiveWorkoutFailAction
    | FetchWorkoutsStartAction
    | FetchWorkoutsSuccessAction
    | FetchWorkoutsFailAction
    | CreateWorkoutStartAction
    | CreateWorkoutSuccessAction
    | CreateWorkoutFailAction;
