import React from "react";
import { Field, formValues, reduxForm } from "redux-form";

class StreamCreate extends React.Component{

  /*  renderInput(formProps){
        // return <input onChange={formProps.input.onChange} value={formProps.input.value} />;
        return <input {...formProps.input} />
    } */


    renderError({error, touched}) {
        if(error && touched){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input, label, meta}) => {
        const className=`field ${meta.touched && meta.error ? 'error': ''}`;
        return (
            <div className={className}>
                 <label>{label}</label>
                 <input {...input} autoComplete="off" />
                 <div>{this.renderError(meta)}</div>
            </div>
        );
    }

  /*  onSubmit(event){
        event.preventDefault();
    } */

    onSubmit(formValues) {
        console.log(formValues);
    }

    render(){
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.title){
        errors.title='Please enter a title';
    }

    if(!formValues.description){
        errors.description='Please enter a description';
    }

    return errors;
}

export default reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate);