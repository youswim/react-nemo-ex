import React from "react";
import Nemo from "./Nemo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 3,
    };
  }

  addNemo = () => {
    this.setState({count: this.state.count + 1});
    console.log("add nemo");
  }
  
  removeNemo = () => {
    if(this.state.count <= 0 ) {
      window.alert("네모가 없어요");
      return;
    }
    this.setState({count: this.state.count - 1});
    console.log("remove nemo");
  }

  render() {
    const nemo_count = Array.from({ length: this.state.count }, (v, i) => i);
    console.log(nemo_count);
    return (
      <div className="App">
        <Nemo/>
      </div>
    );
  }
}

export default App;
