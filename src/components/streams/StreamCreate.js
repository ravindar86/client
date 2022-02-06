import React from "react";
import { Field, reduxForm } from "redux-form";

/*const StreamCreate = () => {
    return <div>StreamCreate</div>;
}

export default StreamCreate;*/

class StreamCreate extends React.Component{

  /*  renderInput(formProps){
        // return <input onChange={formProps.input.onChange} value={formProps.input.value} />;
        return <input {...formProps.input} />
    } */

    renderInput({input, label}) {
        return (
            <div className="field">
                 <label>{label}</label>
                 <input {...input} />
            </div>
        );
    }

  /*  onSubmit(event){
        event.preventDefault();
    } */

    onSubmit(formProps) {
        console.log(formProps);
    }

    render(){
        return (
            <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);