import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamEdit extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        if(!this.props.stream) {
            return <div>Loading...</div>;
        }
      
        return <div>Stream Edit</div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
       stream : state.streamReducer[ownProps.match.params.id]
    };
}

export default connect(mapStateToProps, {fetchStream})(StreamEdit);