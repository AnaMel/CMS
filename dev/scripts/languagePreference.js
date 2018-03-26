import React from 'react';

class LanguagePreference extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return(
            <button onClick={(event) => this.props.toggleLanguage(event)}>{this.props.selectedLanguage}</button>
        )
    }
}

export default LanguagePreference;