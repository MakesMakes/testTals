import React from 'react'
import FormRegistration from './FormRegistration'


class FormRegistrationContainer extends React.Component {

    state = {
        signUpMode: false
    }

    activateSignUpMode = () => {
        this.setState({
            signUpMode: true
        })
    }

     deActivateSignUpMode = () => {
        
        this.setState({
            signUpMode: false
        })
    }

    render() {
        return (
            <div>
                <FormRegistration signUpMode={this.state.signUpMode} activateSignUpMode={this.activateSignUpMode} deActivateSignUpMode = {this.deActivateSignUpMode}/>
            </div>

        )
    }
}

export default FormRegistrationContainer