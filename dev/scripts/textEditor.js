import React from 'react';

class TextEditor extends React.Component {
    constructor(){
        super();
        this.state ={
            editMode: false,
            txtValue: 'placeholder',
            updatedTxt: ''
        }
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateData = this.updateData.bind(this);
    }

    toggleEditMode(e) {
        this.state.editMode?
        this.setState({editMode: false})
        : this.setState({editMode: true})
    }

    handleChange(e, field) {
        const newState = Object.assign({}, this.state);
        newState[field] = e.target.value;
        this.setState(newState);
    }

    updateData(event) {
        const Updates = {
            text: this.state.updatedTxt
        }
        const dbref = firebase.database().ref(`/${this.props.lang}/${this.props.txtFrmt}`);
        dbref.set(Updates);
        this.setState({
            editMode: false
        })
    }

    render() {
        return(
            this.state.editMode?
            <div>
                <input type="text" defaultValue={this.state.txtValue} onChange={(event) => this.handleChange(event, "updatedTxt")} />
                <button onClick={(event) => this.updateData(event)}>Save Changes</button>
                <button onClick = {(event) => this.toggleEditMode(event)}>Discard Changes</button>
            </div>
            : 
            <div>
                <p>Plain Text Mode</p>
                <button onClick={(event) => this.toggleEditMode(event)}>Edit Text</button>
            </div>
        )
    }
}

export default TextEditor;