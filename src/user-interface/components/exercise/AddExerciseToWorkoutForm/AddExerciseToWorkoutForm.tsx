import React, {FormEvent, FunctionComponent, useState} from "react";
import {Button, Form, FormControl} from "react-bootstrap";
import {IdentifiableExerciseType} from "../../../../models/exercise.model";
import {connect} from "react-redux";
import {AppState} from "../../../../store";
import DataFetchingPlaceholder from "../../DataFetchingPlaceholder/DataFetchingPlaceholder";
import _ from "lodash";

interface AddExerciseToWorkoutFormProperties {
	identifiableExerciseTypes: IdentifiableExerciseType[],
	fetching: boolean,
	fetchingErrorMessage: string | null,
	onSubmit: (identifiableExerciseType: IdentifiableExerciseType) => void
}

const AddExerciseToWorkoutForm: FunctionComponent<AddExerciseToWorkoutFormProperties> = (props) => {

	const [exerciseType, setExerciseType] = useState<IdentifiableExerciseType>(props.identifiableExerciseTypes[0]);

	let handlerOnChangeSelectedExerciseType =  (event: React.ChangeEvent<FormControl>) => {
		const castEvent = event as unknown as React.ChangeEvent<HTMLInputElement>;
		setExerciseType(_.find(props.identifiableExerciseTypes, el => el.id === castEvent.target.value)!)
	};

	return (
		<div className="AddExerciseToWorkout">

			<DataFetchingPlaceholder fetching={props.fetching} fetchingDataErrorMessage={props.fetchingErrorMessage}>

			</DataFetchingPlaceholder>

			<Form onSubmit={(event : FormEvent) => {event.preventDefault(); props.onSubmit(exerciseType)}}>
				<Form.Group controlId="exampleForm.ControlSelect1">
					<Form.Label column={true}>Choose your exercise</Form.Label>
					<Form.Control as="select" onChange={handlerOnChangeSelectedExerciseType}>
						{
							props.identifiableExerciseTypes.map(identifiableExerciseType =>
								<option value={identifiableExerciseType.id}
										key={identifiableExerciseType.id}>
									{identifiableExerciseType.element.name}
								</option>
							)
						}
					</Form.Control>
				</Form.Group>

				<Button variant="primary" type="submit">Add</Button>
			</Form>
		</div>
	);
};

function mapStateToProps(appState: AppState) {
	return appState.exerciseTypeReducer
}

export default connect(mapStateToProps)(AddExerciseToWorkoutForm);