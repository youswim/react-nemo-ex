import React from "react";
import Nemo from "./Nemo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.div = React.createRef();
  }

  hoverEvent = (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.className === "App") {
      e.target.style.background = "#eee";
      return;
    }
    if (e.target.className === "Nemo") {
      e.target.style.background = "red";
    }
    const r1 = e.target.closest(".App");
    r1.style.background = "#eee"
    return;
  };

  hoverEndEvnet = (e) => {
    if (e.target.className === "App") {
      e.target.style.background = "#fff";
      return
    }
    if (e.target.className === "Nemo") {
      e.target.style.background = "grey";
    }
    const r1 = e.target.closest(".App");
    r1.style.background = "#fff"
    return;
  };

  componentDidMount() {
    this.div.current.addEventListener("mouseover", this.hoverEvent);
    this.div.current.addEventListener("mouseout", this.hoverEndEvnet);
  }

  componentWillUnmount() {
    this.div.current.removeEventListener("mouseover", this.hoverEvent);
    this.div.current.removeEventListener("mouseout", this.hoverEndEvnet);
  }

  render() {
    const nemo_count = Array.from({ length: this.state.count }, (v, i) => i);
    console.log(nemo_count);
    return (
      <div className="App" ref={this.div}>
        <Nemo />
      </div>
    );
  }
}

export default App;
