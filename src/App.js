import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='App'>
        <div style={{
          width:'150px',
          height:'150px',
          backgroundColor:'#eee',
          margin:'10px'
        }}>
          nemo
        </div>
      </div>
    )
  }

}

export default App;
