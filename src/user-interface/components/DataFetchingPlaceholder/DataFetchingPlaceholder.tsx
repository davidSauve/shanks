import * as React from "react";
import Spinner from "react-bootstrap/Spinner";
import { Alert } from 'react-bootstrap';

interface DataFetchingPlaceholderProperties {
	fetching: boolean;
	fetchingDataErrorMessage: string | null;
}

const DataFetchingPlaceholder: React.FC<DataFetchingPlaceholderProperties> = (props) => {
	let placeholder = null;

	if (props.fetching)
		placeholder = (
			<div className="d-flex justify-content-center align-items-center p-5">
				<Spinner animation={"border"} variant={"primary"}/>
			</div>
		);

	if (props.fetchingDataErrorMessage)
		placeholder = (
			<div className="d-flex justify-content-center align-items-center p-5">
				<Alert variant={"danger"}>{props.fetchingDataErrorMessage}</Alert>
			</div>
		);

	return (
		<div className="DataFetchingPlaceholder">
			{placeholder || props.children}
		</div>
	)
};

export default DataFetchingPlaceholder;