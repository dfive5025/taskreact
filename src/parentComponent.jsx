import FirstChild from "./firstChild";

const { Component } = require("react");

class ParentComponent extends Component{
    render(){
        return <h1>
            this is my parent
            <FirstChild />
            </h1>
    }
}
export default ParentComponent;