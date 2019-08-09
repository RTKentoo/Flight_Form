import React, {Component} from 'react'

function FormComponent(props) {
	return(
		<div className="formDiv">
			
			<form className="form">
				<h3>Please fill out your information below</h3>
				<input
					className="boxField" 
					type="text" 
					placeholder="First Name" 
					name="firstName" 
					value={props.data.firstName} 
					onChange={props.handleChange} 
				/><br /><br />
				<input 
					className="boxField" 
					type="text" 
					placeholder="Last Name" 
					name="lastName" 
					value={props.data.lastName} 
					onChange={props.handleChange} 
				/><br /><br />

				<input 
					className="boxField" 
					type="text" 
					placeholder="Age" 
					name="age" 
					value={props.age} 
					onChange={props.handleChange} 
				/><br /><br />
				<label>
					<input 
						type="radio" 
						checked={props.data.sex === "Male"}
						name="sex" 
						value="Male" 
						onChange={props.handleChange} 
					/> Male<br />
				</label>

				<label>
					<input 
						type="radio" 
						checked={props.data.sex === "Female"}
						name="sex" 
						value="Female" 
						onChange={props.handleChange} 
					/> Female<br /><br />
				</label>

				<select 
					className="boxField"
					name="destination" 
					value={props.data.destination} 
					onChange={props.handleChange}
				>
					<option value="">-- Please Choose a Destination</option>
					<option value="Chicago">Chicago</option>
					<option value="Seattle">Seattle</option>
					<option value="Phoenix">Phoenix</option>
				</select><br />

				<h4>Dietary Restrictions</h4>
				<label className="dietary">
					<input type="checkbox" 
					name="isVegan" 
					onChange={props.handleChange}
					checked={props.data.isVegan}
				/> Vegan
				</label>
				<label className="dietary">
					<input type="checkbox" 
					name="isKosher" 
					onChange={props.handleChange}
					checked={props.data.isKosher}
				/> Kosher
				</label>
				<label className="dietary">
					<input type="checkbox" 
					name="isLactoseFree" 
					onChange={props.handleChange}
					checked={props.data.isLactoseFree}
				/> Lactose Free
				</label><hr />
			
				<h1>Confirmation Details</h1>
				<p>Your name: {props.data.firstName} {props.data.lastName}</p>
				<p>Your age: {props.data.age}</p>
				<p>Your sex: {props.data.sex}</p>
				<p>Your destination: {props.data.destination}</p>
				<p>
					Your dietary preferences:<br />
					Vegan: {props.data.isVegan ? "Yes" : "No"}<br />
					Kosher: {props.data.isKosher ? "Yes" : "No"}<br />
					Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}<br />
				</p>
				<button>Submit</button>
			</form>
		</div>
	)
}

export default FormComponent