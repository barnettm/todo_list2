import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {addItem} from '../actions';


class AddItem extends Component {

    renderInput({input, label, type, meta: {touched, error}}){
       
        return(
            <div>
                <label>{label}</label>
                <input {...input} type={type}/>
                <p className="red-text text-darken-3">{touched && error}</p>
            </div>
        )
    }

    submitItem(values){
        console.log('Form Values: ', values)
        this.props.addItem(values).then( () => {
            this.props.history.push('/');
        })
    }

    render(){
        const { handleSubmit, reset } = this.props;

        return(
            <div>
                <h2 className='center-align'>Add New To Do Item</h2>
                <div className="right-align">
                    <Link className="btn red darken-2" to='/'>Go Back</Link>
                </div>
                <form onSubmit={handleSubmit((vals) => this.submitItem(vals))}>
                    <Field name="title" component={this.renderInput} type="text" label="Title"/> 
                    <Field name="details" component={this.renderInput} type="text" label="Details" />
                    <div className="right-align">
                        <button className="btn cyan lighten-1">Add Item</button>
                        <button style={{marginLeft: '8px'}} type="button" onClick={reset} className="btn orange lighten-2">Reset</button> 
                    </div>
                </form>
            </div>
        )
    }
}

function validation(values){
    const error = {};

    if(!values.title){
        error.title = 'Please enter a title, dum-dum'
    }
    if(!values.details){
        error.details = "Please enter details about this To Do"
    }

    return error;
}



AddItem = reduxForm({
    form: 'add-item',
    validate: validation
})(AddItem);

export default connect(null, {addItem})(AddItem);