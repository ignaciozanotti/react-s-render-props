import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src="img/cat.jpg" alt="cat" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

        {/*
          En lugar de proporcionar una representación estática de lo que <Mouse> renderiza,
          usa la `render prop` para determinar dinámicamente qué renderizar.
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Gracias Maxi!!</h1>
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )}/>
      </div>
    );
  }
}
// el render global

ReactDOM.render(
  <MouseTracker />,
  document.getElementById('root')
);
