import React from 'react';

class LanguagePreference extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedLanguage: 'en'
        }
        this.toggleLanguage = this.toggleLanguage.bind(this);
    }

    toggleLanguage(e) {
        e.preventDefault();
        this.state.selectedLanguage === 'en'?
        this.setState({
            selectedLanguage:'fr'
        })
        :this.setState({
            selectedLanguage:'en'
        })
    }

    render() {
        return(
            <button onClick={(event) => this.toggleLanguage(event)}>{this.state.selectedLanguage}</button>
        )
    }
}

export default LanguagePreference;