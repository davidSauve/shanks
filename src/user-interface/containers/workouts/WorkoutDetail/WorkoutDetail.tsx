import React, {Component} from "react";

import {RouteComponentProps, withRouter} from "react-router-dom";
import {IdentifiableWorkout} from "../../../../models/workout.models";
import DataFetchingPlaceholder from "../../../components/DataFetchingPlaceholder/DataFetchingPlaceholder";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import {AppState} from "../../../../store";
import {AnyAction} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {connect} from "react-redux";
import {fetchActiveWorkout} from "../../../../store/workouts/actions/fetch-active-workout/actions";
import {Button, Modal} from "react-bootstrap";
import AddExerciseToWorkoutForm from "../../../components/exercise/AddExerciseToWorkoutForm/AddExerciseToWorkoutForm";
import {updateActiveWorkout} from "../../../../store/workouts/actions/update-active-workout/actions";
import {IdentifiableExerciseType} from "../../../../models/exercise.model";
import ExerciseCard from "../../../components/exercise/ExerciseCard/ExerciseCard";

interface WorkoutDetailProperties extends RouteComponentProps<{ workoutId: string }> {
	workout: IdentifiableWorkout | null;
	fetchActiveWorkout: (workoutId: string) => void;
	fetching: boolean;
	fetchingErrorMessage: string | null;
	updateActiveWorkout: (identifiableWorkout: IdentifiableWorkout) => void
}

interface WorkoutDetailState {
	displayingModal: boolean
}

class WorkoutDetail extends Component<WorkoutDetailProperties, WorkoutDetailState> {


	constructor(props: Readonly<WorkoutDetailProperties>) {
		super(props);

		this.state = {displayingModal: false}
	}

	componentDidMount(): void {
		this.props.fetchActiveWorkout(this.props.match.params.workoutId);
	}

	render(): JSX.Element {
		return (
			<div className="WorkoutDetail">
				<DataFetchingPlaceholder fetching={this.props.fetching} fetchingDataErrorMessage={this.props.fetchingErrorMessage}>
					{this.props.workout !== null && this.renderPageContent(this.props.workout)}
				</DataFetchingPlaceholder>
			</div>
		);
	}

	private renderPageContent(workout: IdentifiableWorkout) {
		return (
			<div>
				<h1>{workout.element.title}</h1>
				<Container fluid>
					<Row>
						<Col>
							<Button variant={"primary"} onClick={() => this.setState({displayingModal: true})}>Add Exercise</Button>
						</Col>
					</Row>
					<Row>
						{workout.element.exerciseTypes.map(exerciseType => <Col><ExerciseCard exercise={exerciseType}/></Col>)}
					</Row>
				</Container>
				{this.renderAddExerciseTypeToWorkoutModal()}
			</div>
		)
	}

	private renderAddExerciseTypeToWorkoutModal() {
		return <Modal show={this.state.displayingModal}
					  onHide={() => this.setState({displayingModal: false})}
					  animation>
			<Modal.Header closeButton>
				Add New Exercise
			</Modal.Header>
			<Modal.Body>
				<AddExerciseToWorkoutForm onSubmit={(identifiableExerciseType => this.props.updateActiveWorkout(this.updateActiveWorkout(identifiableExerciseType)))}/>
			</Modal.Body>
		</Modal>;
	}

	private updateActiveWorkout(identifiableExerciseType: IdentifiableExerciseType): IdentifiableWorkout {
		return {id: this.props.workout!.id, element: {...this.props.workout!.element, exerciseTypes: [...this.props.workout!.element.exerciseTypes, identifiableExerciseType]}};
	}
}

function mapStateToProps(state: AppState) {
	return {
		workout: state.workoutsReducer.activeWorkout,
		fetching: state.workoutsReducer.fetching,
		fetchingErrorMessage: state.workoutsReducer.fetchingErrorMessage,
	}
}

function mapDispatchToProps(dispatch: ThunkDispatch<null, null, AnyAction>) {
	return {
		fetchActiveWorkout: (workoutId: string) => dispatch(fetchActiveWorkout(workoutId)),
		updateActiveWorkout: (identifiableWorkout: IdentifiableWorkout) => dispatch(updateActiveWorkout(identifiableWorkout))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(WorkoutDetail));
