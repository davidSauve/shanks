import React, {Component} from "react";

import {RouteComponentProps, withRouter} from "react-router-dom";
import {IdentifiableWorkout} from "../../../../models/workout.models";
import DataFetchingPlaceholder from "../../../components/DataFetchingPlaceholder/DataFetchingPlaceholder";
import ExerciseCard from "./ExerciseCard/ExerciseCard";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {AppState} from "../../../../store";
import {AnyAction} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {connect} from "react-redux";
import {fetchActiveWorkout} from "../../../../store/workouts/actions/fetch-active-workout/actions";

interface WorkoutDetailProperties extends RouteComponentProps<{ workoutId: string }> {
	workout: IdentifiableWorkout | null;
	fetchActiveWorkout: (workoutId: string) => void;
	fetching: boolean;
}

interface WorkoutDetailState {
}

class WorkoutDetail extends Component<WorkoutDetailProperties, WorkoutDetailState> {
	componentDidMount(): void {
		this.props.fetchActiveWorkout(this.props.match.params.workoutId);
	}

	render(): JSX.Element {
		return (
			<div className="WorkoutDetail">
				<DataFetchingPlaceholder fetching={this.props.fetching}>
					{this.renderPageContent()}
				</DataFetchingPlaceholder>
			</div>
		);
	}

	private renderPageContent() {
		if (this.props.workout !== null) {
			let workout: IdentifiableWorkout = this.props.workout;

			return (
				<div>
					<h1>{workout.element.title}</h1>
					<Container fluid>
						<Row>
							<Col sm={12}><ExerciseCard/></Col>
							<Col sm={12}><ExerciseCard/></Col>
							<Col sm={12}><ExerciseCard/></Col>
						</Row>
					</Container>
				</div>
			)
		} else
			return
	}
}

function mapStateToProps(state: AppState) {
	return {
		workout: state.workoutsReducer.activeWorkout,
		fetching: state.workoutsReducer.fetching,
	}
}

function mapDispatchToProps(dispatch: ThunkDispatch<null, null, AnyAction>) {
	return {
		fetchActiveWorkout: (workoutId: string) => dispatch(fetchActiveWorkout(workoutId))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(WorkoutDetail));
