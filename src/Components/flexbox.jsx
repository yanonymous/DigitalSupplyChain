import react from "react";
import reactDom from "react-dom";
import Header from "./Header";
import SubHeading from "./subHeading";
import DisplayChain from "./DisplayChain";
import BC from "../blockchain.json";
import Form from "./Form";

function createChain(chain) {
  return(
    <div className="roundedBorder">
      <DisplayChain key={chain.hash}
      index={chain.id}
      timestamp={chain.timestamp}
      data={chain.data}
      />
    </div>
  );
}



function FlexBOX(props) {
  return (
    <div className="flex-container">
      <div className="flex-child">
        <SubHeading heading="ADD BLOCK" />
        <Form />
      </div>
      <div className="flex-child">
        <SubHeading heading="BLOCKCHAIN" />
          {BC.chain.map(createChain)}          
      </div>
    </div>
    );
}

export default FlexBOX;