import flvJs from "flv.js";
import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {

    constructor(props) {
        super(props);
        this.videoRef=React.createRef();
    }
    
    componentDidMount() {
        const {id} = this.props.match.params;
       
        this.props.fetchStream(id);
        this.buildPlayer();
    }

    componentDidUpdate() {
        this.buildPlayer();
    }

    componentWillUnmount() {
        this.player.destroy();
    }

    buildPlayer() {        
        if(this.player || !this.props.stream) {
            return <div>Loading...</div>;
        }

        const {id} = this.props.match.params;

        this.player =  flvJs.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });

        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    render() {
        if(!this.props.stream) {
            return <div>Loading...</div>;
        }

        const {title, description} = this.props.stream;
        return (
            <div>
                <video ref={this.videoRef} style={{width: '100%'}} controls={true}></video>
                <h1>{title}</h1>
                <h3>{description}</h3>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream : state.streamReducer[ownProps.match.params.id]
    };
};

export default connect(mapStateToProps,{fetchStream})(StreamShow);