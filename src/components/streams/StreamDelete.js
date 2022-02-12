import React from "react";
import { connect } from "react-redux";
import history from "../../history";
import Modal from "../Modal";
import { fetchStream, deleteStream } from "../../actions";
import { Link } from "react-router-dom";

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions() {
        const { id } = this.props.match.params;
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteStream(id)} className='ui negative button'>Delete</button>
                <Link to='/' className='ui button'>Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        if (!this.props.stream) {
            return "Are you sure to delete this stream?";
        }

        return `Are you sure to delete the stream '${this.props.stream.title}'?`;
    }

    render() {
        return (
            <div>
                <Modal
                    header="Delete Stream"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push("/")}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streamReducer[ownProps.match.params.id]
    };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);


/*const StreamDelete = () => {
    const actions = (
        <React.Fragment>
            <button className='ui negative button'>Delete</button>
            <button className='ui button'>Cancel</button>
        </React.Fragment>
    );

    return (
    <div>
        StreamDelete
         <Modal 
            header="Delete Stream" 
            content="Are you sure to delete this stream?"
            actions={actions}
            onDismiss={()=>history.push("/")}
         />
    </div>
    );
}

export default StreamDelete; */