import React from 'react';

class TextEditor extends React.Component {
    constructor(){
        super();
        this.state ={

        }
    }

    handleChange(e) {
        e.preventDefault();

    }
    render() {
        return(
            <input type="text" placeholder="Some Text"/>
        )
    }
}

export default TextEditor;