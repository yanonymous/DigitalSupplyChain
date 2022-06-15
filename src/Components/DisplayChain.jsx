import react from "react";
import reactDom from "react-dom";
import BC from "../blockchain.json";

function DisplayChain(props){
    return(
        <div>
            <h3>Index: {props.index}</h3>
            <h3>TimeStamp: {props.timestamp}</h3>
            <h3>Description: "{props.data}"</h3>
        </div>
    );
}

export default DisplayChain;