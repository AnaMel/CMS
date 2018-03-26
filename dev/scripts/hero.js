import React from 'react';
import LanguagePreference from './languagePreference';
import TextEditor from './textEditor';

class Hero extends React.Component {
    constructor() {
        super();
        this.state ={
            selectedLanguage: 'en',
            txtFrmt: 'hero',
            defaultValue: 'placeholder text'
        }
        this.toggleLanguage = this.toggleLanguage.bind(this);
        this.updateDefaultValue = this.updateDefaultValue.bind(this);
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

    updateDefaultValue(text) {
        this.setState({
            defaultValue: text
        })
    }

    componentWillReceiveProps(props) {
        props.dbSnapshot.forEach(element => {
            element.lang === this.state.selectedLanguage?
            // this.updateDefaultValue(element.hero.text)
            console.log(element.hero.text)
            : null
        })
    }

    render() {
        return (
            <div>
                <LanguagePreference toggleLanguage={this.toggleLanguage} selectedLanguage={this.state.selectedLanguage} />
                <section>
                    <TextEditor lang={this.state.selectedLanguage} txtFrmt={this.state.txtFrmt} defaultValue={this.state.defaultValue}/>
                    <input type="file" />
                </section>
            </div>
        )
    }
}

export default Hero;