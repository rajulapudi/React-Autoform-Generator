import React from 'react';

const FormFields = props => {
	const renderFields = () => {
		const formArray = [];
		for (let elementName in props.formData) {
			formArray.push({
				id: elementName,
				settings: props.formData[elementName]
			});
		}
		return formArray.map((item, i) => {
			return (
				<div key={i} className="form_element">
					{renderTemplate(item)}
				</div>
			);
		});
	};
	const showlabel = (show, label) => {
		return show ? <label>{label} </label> : null;
	};
	const changeHandler = (event, id) => {
		const newState = props.formData;
		newState[id].value = event.target.value;
		props.change(newState);
	};
	const renderTemplate = data => {
		let formTemplate = null;
		let values = data.settings;

		switch (values.element) {
			case 'input':
				formTemplate = (
					<div>
						{showlabel(values.label, values.labelText)}
						<input
							{...values.config}
							value={values.value}
							onChange={event => changeHandler(event, data.id)}
						/>
					</div>
				);
				break;
			default:
				formTemplate = null;
		}

		return formTemplate;
	};

	return <div>{renderFields()}</div>;
};
export default FormFields;
