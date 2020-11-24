import './App.css';
import pereNoel from './pere_noel.png'
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.liste = ["Des jeux-vidéos", "Des jeux de sociétés", "Des baskets"];
  }

  render() {
    return (
      <>
        <div className="App">
          <img src={pereNoel} alt="Photo" />
          <div>
            <h1>Cher Papa Noël</h1>
            <p>Pour Noël je voudrais :</p>
            <ul>
              {this.liste.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default App;
