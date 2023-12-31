import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 3,
    };
  }

  render() {
    const nemo_count = Array.from({ length: this.state.count }, (v, i) => i);
    console.log(nemo_count);
    return (
      <div className="App">
        {nemo_count.map((num, idx) => {
          return (
            <div key={idx} style={{width: "150px", height: "150px", backgroundColor: "#eee", margin: "10px",}}>
              nemo
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
