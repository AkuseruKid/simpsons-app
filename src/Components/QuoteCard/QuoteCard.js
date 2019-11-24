import React from 'react';
import './QuoteCard.css'

class QuoteCard extends React.Component {
  constructor(props){
    super();
    this.state = {
      favorite: false,
    }
  }

  render() {
    return (
      <figure className="QuoteCard">
        <img
        src={this.props.image}
        alt={this.props.character}></img>
        <figcaption>
          <blockquote>
            {this.props.quote}
          </blockquote>
          <p>
            <cite>{this.props.character}</cite>
            <span onClick={event => {
              const newFavorite = !this.state.favorite;
              this.setState({favorite: newFavorite});
            }} className={this.state.favorite ? "is-favorite" : undefined}>&#9733;</span>
          </p>
        </figcaption>
      </figure>
    )
  }
}

export default QuoteCard;

