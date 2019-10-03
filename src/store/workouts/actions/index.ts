import { FetchActiveWorkoutStartAction, FetchActiveWorkoutSuccessAction, FetchActiveWorkoutFailAction } from './fetch-active-workout/types';
import { FetchWorkoutsStartAction, FetchWorkoutsSuccessAction, FetchWorkoutsFailAction } from './fetch-workouts/types';
import { CreateWorkoutStartAction, CreateWorkoutSuccessAction, CreateWorkoutFailAction } from './upsert/types';

export type WorkoutActionType =
    | FetchActiveWorkoutStartAction
    | FetchActiveWorkoutSuccessAction
    | FetchActiveWorkoutFailAction
    | FetchWorkoutsStartAction
    | FetchWorkoutsSuccessAction
    | FetchWorkoutsFailAction
    | CreateWorkoutStartAction
    | CreateWorkoutSuccessAction
    | CreateWorkoutFailAction;
