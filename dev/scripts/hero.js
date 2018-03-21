import React from 'react';
import LanguagePreference from './languagePreference';
import TextEditor from './textEditor';

class Hero extends React.Component {
    constructor() {
        super();
        this.state ={
            lang: 'en'
        }
    }

    render() {
        return (
            <div>
                <LanguagePreference />
                <section>
                    <TextEditor />
                </section>
            </div>
        )
    }
}

export default Hero;