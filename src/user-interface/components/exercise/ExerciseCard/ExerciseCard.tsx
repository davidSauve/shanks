import React, {FunctionComponent} from "react";
import Card from 'react-bootstrap/Card';

interface ExerciseCardProperties {

}

const ExerciseCard: FunctionComponent<ExerciseCardProperties> = () => {
	return (

		<div className="ExerciseCard">
			<Card>
				<Card.Body>
					<Card.Title>Hey</Card.Title>
				</Card.Body>
			</Card>
		</div>
	);
};

export default ExerciseCard