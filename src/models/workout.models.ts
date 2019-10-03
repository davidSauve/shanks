import {IdentifiableElement} from "./key";

export interface Workout {
	title: string,
	date : string
}

export type IdentifiableWorkout = IdentifiableElement<Workout>;
