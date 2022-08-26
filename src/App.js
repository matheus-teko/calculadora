import React, { Component } from "react";

class App extends Component {
  state = {
    contador: 0
  };

  add = () => {
    if (this.state.contador < 10) {
      this.setState({
        contador: this.state.contador + 1
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Calculator!</h1>
        <h2>{this.state.contador}</h2>
        <div className="buttons">
          <button className="btn1">-</button>
          <button className="btn2" onClick={this.add}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default App;
