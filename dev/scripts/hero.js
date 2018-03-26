import React from 'react';
import LanguagePreference from './languagePreference';
import TextEditor from './textEditor';

class Hero extends React.Component {
    constructor() {
        super();
        this.state ={
            lang: 'en',
            txtFrmt: 'hero'
        }
    }

    render() {
        return (
            <div>
                <LanguagePreference />
                <section>
                    <TextEditor lang={this.state.lang} txtFrmt={this.state.txtFrmt} />
                    <input type="file" />

                </section>
            </div>
        )
    }
}

export default Hero;