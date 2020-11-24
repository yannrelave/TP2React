import './App.css';
import pereNoel from './pere_noel.png';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.liste = ["Jeux-vidéos", "Baskets", "Voiture télécommandée", "Jeux de sociétés", "Maison Playmobil"];
  }

  render() {
    return (
      <>
        <div className="App">
          <img src={pereNoel} alt="Photo" />
          <section>
            <h1>Cher Papa Noël</h1>
            <p>Pour Noël je voudrais :</p>
            <ul>
              {this.liste.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </section>
        </div>
      </>
    );
  }
}

export default App;
