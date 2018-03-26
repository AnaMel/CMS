import React from 'react';
import LanguagePreference from './languagePreference';
import TextEditor from './textEditor';

class Hero extends React.Component {
    constructor() {
        super();
        this.state ={
            selectedLanguage: 'en',
            txtFrmt: 'hero'
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
        return (
            <div>
                <LanguagePreference toggleLanguage={this.toggleLanguage} selectedLanguage={this.state.selectedLanguage} />
                <section>
                    <TextEditor lang={this.state.selectedLanguage} txtFrmt={this.state.txtFrmt} />
                    <input type="file" />

                </section>
            </div>
        )
    }
}

export default Hero;