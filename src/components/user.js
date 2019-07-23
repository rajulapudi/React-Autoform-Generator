import React, { Component } from 'react';
import FormFields from '../widgets/forms/FormFields';
class User extends Component {
	state = {
		formData: {
			name: {
				element: 'input',
				value: '',
				label: true,
				labelText: 'Name',
				config: {
					name: 'name_input',
					type: 'text',
					placeholder: 'Enter your name'
				}
			},
			lastName: {
				element: 'input',
				value: '',
				label: true,
				labelText: 'Last Name',
				config: {
					name: 'Last_name_input',
					type: 'text',
					placeholder: 'Enter your last name'
				}
			},
			Message: {
				element: 'textarea',
				value: '',
				label: true,
				labelText: 'Message',
				config: {
					name: 'message',
					rows: 3
				}
			},
			Age: {
				element: 'select',
				value: '',
				label: true,
				labelText: 'Age',
				config: {
					name: 'age_input',
					option: [
						{ val: 'Teenage', text: '13-19' },
						{ val: 'Adult', text: '20-40' }
					]
				}
			}
		}
	};
	updateForm = newState => {
		this.setState({
			formData: newState
		});
	};

	onSubmit = event => {
		event.preventDefault();
		let dataToSubmit = {};
		for (let value in this.state.formData) {
			dataToSubmit[value] = this.state.formData[value].value;
		}
		console.log(dataToSubmit);
	};
	render() {
		return (
			<div className="container">
				<form onSubmit={this.onSubmit}>
					<FormFields
						formData={this.state.formData}
						change={newState => this.updateForm(newState)}
					/>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default User;
