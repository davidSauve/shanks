import React, {Component} from "react";
import {Card} from "react-bootstrap";
import {AppState} from "../../../store";
import {connect} from "react-redux";
import {IdentifiableWorkout} from "../../../models/workout.models";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {fetchWorkouts} from "../../../store/workouts/actions/fetch-workouts/actions";
import DataFetchingPlaceholder from "../../components/DataFetchingPlaceholder/DataFetchingPlaceholder";
import {createNewWorkout} from "../../../store/workouts/actions/insert/actions";
import {Link} from "react-router-dom";

interface DashboardProperties {
	identifiableWorkouts: IdentifiableWorkout[];
	fetching: boolean;
	fetchingErrorMessage: string | null;
	fetchWorkouts: () => void;
	createNewWorkout: () => void;
}

interface DashboardState {
}

class Dashboard extends Component<DashboardProperties, DashboardState> {
	componentDidMount(): void {
		this.props.fetchWorkouts();
	}

	render(): JSX.Element {
		return (
			<div className="Dashboard">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-3">
							<Card>
								<Card.Header>
									<div className="d-flex justify-content-between align-items-center">
										<span>Recent Workouts</span>
										<span>
											<i className="fas fa-plus mr-2 clickable" onClick={() => this.props.createNewWorkout()}/>
											<i className="fas fa-sync-alt clickable"/>
										</span>
									</div>
								</Card.Header>
								<Card.Body>
									<DataFetchingPlaceholder fetching={this.props.fetching} fetchingDataErrorMessage={this.props.fetchingErrorMessage}>
										<table className="table table-sm">
											<tbody>
											{this.props.identifiableWorkouts.map((identifiableWorkout: IdentifiableWorkout) => (
												<tr key={identifiableWorkout.id}>
													<td><Link to={`/workouts/${identifiableWorkout.id}`}>{identifiableWorkout.element.title}</Link></td>
													<td>{identifiableWorkout.element.date}</td>
												</tr>
											))}
											</tbody>
										</table>
									</DataFetchingPlaceholder>
								</Card.Body>
							</Card>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state: AppState) {
	return {
		identifiableWorkouts: state.workoutsReducer.identifiableWorkouts,
		fetching: state.workoutsReducer.fetching,
		fetchingErrorMessage: state.workoutsReducer.fetchingErrorMessage,
	};
}

function mapDispatchToProps(dispatch: ThunkDispatch<null, null, AnyAction>) {
	return {
		fetchWorkouts: () => dispatch(fetchWorkouts()),
		createNewWorkout: () => dispatch(createNewWorkout({title: `Workout of ${new Date().toLocaleDateString()}`, date: new Date().toLocaleDateString(), exerciseTypes : []}))
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard);
