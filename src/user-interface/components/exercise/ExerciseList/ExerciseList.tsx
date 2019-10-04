import * as React from "react";
import {FunctionComponent} from "react";

interface ExerciseListProperties {

}

const ExerciseList: FunctionComponent<ExerciseListProperties> = (props) => {
	return (<div className="ExerciseList">
		{props.children}
	</div>)
};

export default ExerciseList;