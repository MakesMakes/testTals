import React from 'react'
import FormRegistration from './FormRegistration'


class FormRegistrationContainer extends React.Component {

    state = {
        signUpSpinner: false
    }

    activateSignUpSpinner = () => {
        this.setState({
            signUpSpinner: true
        })
    }

    deActivateSignUpSpinner = () => {
        this.setState({
            signUpSpinner: false
        })
    }

    render() {
        return (
            <div>
                <FormRegistration signUpSpinner={this.state.signUpSpinner} activateSignUpSpinner={this.activateSignUpSpinner} deActivateSignUpSpinner={this.deActivateSignUpSpinner} />
            </div>
        )
    }
}

export default FormRegistrationContainer