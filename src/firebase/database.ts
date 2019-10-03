import * as firebase from "firebase";
import {IdentifiableWorkout, Workout} from "../models/workout.models";

const firebaseConfig = {
	apiKey: "AIzaSyD1okgbcATu2K8cpwqkmUQrRWxVD20xPj4",
	authDomain: "shanks-1992.firebaseapp.com",
	databaseURL: "https://shanks-1992.firebaseio.com",
	projectId: "shanks-1992",
	storageBucket: "shanks-1992.appspot.com",
	messagingSenderId: "442933677499",
	appId: "1:442933677499:web:fad1d73eb067ccea",
};

firebase.initializeApp(firebaseConfig);

export const fetchWorkouts  = () : Promise<{data : IdentifiableWorkout[]}> => {
	return firebase
		.database()
		.ref("/workouts")
		.once("value")
		.then(dataSnapshot => {
			const data = dataSnapshot.val();
			const dataWithKeys = Object.keys(data).map(key => ({
				id: key,
				element : {
					date: "kjkjk",
					...data[key]
				}
			}));

			return {data: dataWithKeys};
		});
};

export function fetchActiveWorkout(id: string) : Promise<{data : IdentifiableWorkout}> {
	return firebase
		.database()
		.ref(`/workouts/${id}`)
		.once("value")
		.then(dataSnapshot => {
			return {data: {id, element : dataSnapshot.val()}};
		});
}

export const createWorkout = (workout: Workout) : Promise<{data : IdentifiableWorkout}> => {
	const newWorkoutRef = firebase
		.database()
		.ref("/workouts")
		.push(workout);

	const newWorkoutKey = newWorkoutRef.key!;

	return newWorkoutRef
		.once("value")
		.then(dataSnapshot => ({
			data: {id: newWorkoutKey, element : (dataSnapshot.val() as Workout)},
		}));
};
