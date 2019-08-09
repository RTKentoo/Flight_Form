import React from 'react'
import FormContainer from './FormContainer'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Seperator from './components/Seperator/Seperator'
import './components/FormComponent/FormComponent.css'
import './components/Header/Header.css'
import './components/Footer/Footer.css'
import './components/Seperator/Seperator.css'
import './FormContainer.css'


function App() {
		return(
			<div>
				<Header />
				<Seperator />
				<FormContainer />
				<Footer />
			</div>
		)

}


export default App