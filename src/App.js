import React from 'react';
import axios from 'axios';
import Navbar from './Components/Navbar/Navbar';
import QuoteList from './Components/QuoteList/QuoteList';
import QuoteForm from './Components/QuoteForm/QuoteForm';
import QuoteRandom from './Components/QuoteRandom/QuoteRandom';

const sampleQuote = {
  character: 'Homer Simpson',
  quote: "Mmmmh Donuts !",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
};

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      random: sampleQuote,
    }
    this.getRandom = this.getRandom.bind(this);
  }

  getRandom () {
    axios.get("https://quests.wilders.dev/simpsons-quotes/quotes")
    .then((response) => {
      
      this.setState ({
        random: response.data[0],
      });

      console.log(response);
    })  
  }
 
  render() {
    return (
      <div className="App">
        <Navbar />
        <QuoteForm />
        <QuoteRandom random={this.state.random}/>
        <button type="button" onClick={this.getRandom}>Get random quote</button>
        <QuoteList />
      </div>
    )
  }
}

export default App;
