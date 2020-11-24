import './App.css';
import pereNoel from './pn.png'
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
		<h1><b>Liste pour le Père Noël</b></h1>
          <img src={pereNoel} className="perenoel" alt="Photo" />
          <div>
            <h2>Cher Papa Noël</h2>
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
