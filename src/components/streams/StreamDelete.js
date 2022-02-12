import React from "react";
import history from "../../history";
import Modal from "../Modal";

const StreamDelete = () => {
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

export default StreamDelete;