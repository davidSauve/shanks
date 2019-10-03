import * as React from "react";

interface DataFetchingPlaceholderProperties {
	fetching : boolean
}

const DataFetchingPlaceholder : React.FC<DataFetchingPlaceholderProperties> = (props) => {
	let placeholder = (
		<div className="d-flex justify-content-center align-items-center p-5">
			<div className="spinner-border text-primary" role="status">
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);

	return <div className="DataFetchingPlaceholder">
		{
			props.fetching ? placeholder : props.children
		}
	</div>
};

export default DataFetchingPlaceholder;