
import react from "react";
import reactDom from "react-dom";
import Blockchain from "../blockchain";

function Form(){

    const [id, setId] = react.useState("");
    const [desc, setDesc] = react.useState("");

    function handleClick(){
        var timestamp = new Date().getTime();
        supplychain.addBlock(new Block (id, timestamp, desc));
    }


    return(
        <div>
            <input type="text"
            placeholder="Enter Product ID" 
            onChange={(e) => setId(e.target.value)}
            />
            <br />
            <input type="text"
            placeholder="Enter Descscription" 
            onChange={(e) => setDesc(e.target.value)}
            />
            <br />
            <button onClick={handleClick}>Add to blockchain</button>
        </div>
        
    );
}

export default Form;