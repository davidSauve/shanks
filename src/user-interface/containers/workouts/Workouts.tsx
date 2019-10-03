import React, { Component } from 'react';
import { Switch, Route, RouteComponentProps, withRouter } from 'react-router-dom';
import WorkoutDetail from './WorkoutDetail/WorkoutDetail';


interface WorkoutsProperties extends RouteComponentProps{

}

interface WorkoutsState {}

class Workouts extends Component<WorkoutsProperties, WorkoutsState> {

    render(): JSX.Element {
        return <div className="Workouts">
			<Switch>
				<Route exact path={`${this.props.match.url}/:workoutId`} render={() => <WorkoutDetail/>}/>
			</Switch>
		</div>;
    }
}

export default withRouter(Workouts);
