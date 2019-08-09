import React from 'react'
import FormComponent from './components/FormComponent/FormComponent'

class FormContainer extends React.Component {
	state = {
		firstName: "",
		lastName: "",
		age: "",
		sex: "",
		destination: "",
		isVegan: false,
		isKosher: false,
		isLactoseFree: false
	}

	handleChange = (event) => {
		const {name, value, type, checked} = event.target

		type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
	}

	render() {
		return(
			<div className="formContainer">
				<FormComponent 
					handleChange={this.handleChange}
					data={this.state}
				/>
			</div>
		)
	}
}

export default FormContainer