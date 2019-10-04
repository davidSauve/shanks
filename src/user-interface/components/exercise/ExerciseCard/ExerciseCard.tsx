import React, {FunctionComponent} from "react";
import Card from "react-bootstrap/Card";
import {IdentifiableExerciseType} from "../../../../models/exercise.model";

interface ExerciseCardProperties {
	exercise : IdentifiableExerciseType;
}

const ExerciseCard: FunctionComponent<ExerciseCardProperties> = (props) => {
	return (
		<div className="ExerciseCard">
			<Card>
				<Card.Body>
					<Card.Title>{props.exercise.element.name}</Card.Title>
				</Card.Body>
			</Card>
		</div>
	);
};

export default ExerciseCard