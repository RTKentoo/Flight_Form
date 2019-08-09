import React, {Component} from 'react'

function FormComponent(props) {
	return(
		<div>
			<form className="form">
				<input 
					type="text" 
					placeholder="First Name" 
					name="firstName" 
					value={props.data.firstName} 
					onChange={props.handleChange} 
				/><br /><br />
				<input 
					type="text" 
					placeholder="Last Name" 
					name="lastName" 
					value={props.data.lastName} 
					onChange={props.handleChange} 
				/><br /><br />

				<input 
					type="text" 
					placeholder="Age" 
					name="age" 
					value={props.age} 
					onChange={props.handleChange} 
				/><br /><br />
				<label>
					<input 
						type="radio" 
						checked={props.data.sex === "male"}
						name="sex" 
						value="male" 
						onChange={props.handleChange} 
					/> Male<br />
				</label>

				<label>
					<input 
						type="radio" 
						checked={props.data.sex === "female"}
						name="sex" 
						value="female" 
						onChange={props.handleChange} 
					/> Female<br /><br />
				</label>

				<select 
					name="destination" 
					value={props.data.destination} 
					onChange={props.handleChange}
				>
					<option value="">-- Please Choose a Destination</option>
					<option value="Chicago">Chicago</option>
					<option value="Seattle">Seattle</option>
					<option value="Phoenix">Phoenix</option>
					<option value="Jersey">Jersey</option>
				</select><hr />

				<br /><br />
				<h4>Dietary Restrictions</h4>
				<label>
					<input type="checkbox" 
					name="isVegan" 
					onChange={props.handleChange}
					checked={props.data.isVegan}
				/> Vegan
				</label>
				<label>
					<input type="checkbox" 
					name="isKosher" 
					onChange={props.handleChange}
					checked={props.data.isKosher}
				/> Kosher
				</label>
				<label>
					<input type="checkbox" 
					name="isLactoseFree" 
					onChange={props.handleChange}
					checked={props.data.isLactoseFree}
				/> Lactose Free
				</label>
			
				<br /><br /><br /><br />
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