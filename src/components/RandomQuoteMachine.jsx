import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'
// import axios from "axios";
// const twitterQuote = `http://www.twitter.com/intent/tweet?text=Hello`;
const colors = [
  "#D99AAB",
  "#1FA675",
  "#0D688C",
  "#0889A6",
  "#BF9411",
  "#D99AAB",
  "#BF9411",
  "#0D688C",
  "#1FA675",
  "#0889A6",
  "#F27C38",
  "#F27C38",
];
const quotes = [
  {
    text: "There is nothing impossible to they who will try.",
    author: "Alexander the Great",
  },
  {
    text: "Nothing is impossible. The word itself says 'I'm possible!",
    author: "Audrey Hepburn",
  },
  {
    text: "When something is important enough, you do it even if the odds are not in your favor.",
    author: "Elon Musk",
  },
  {
    text: "The bad news is time flies. The good news is you're the pilot.",
    author: "Michael Altshuler",
  },
  {
    text: "If you're going through hell, keep going.",
    author: "Winston Churchill",
  },
];

class RandomQuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "When you have a dream, you've got to grab it and never let go.",
      author: "Carol Burnett",
      color: "#F27C38",
    };
    this.handleNewQuote = this.handleNewQuote.bind(this);
  }

  handleNewQuote = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length) + 0;
    this.setState({
      quote: quotes[randomNumber].text,
      author: quotes[randomNumber].author,
      color: colors[randomNumber],
    });
  };

  render() {
    return (
      <header className="App-header">
        <div className="container" id="quote-box">
          <p
            id="text"
            style={{
              transition: "background-color 1s",
              color: this.state.color,
            }}
          >
            " {this.state.quote} "
          </p>
          <h2
            id="author"
            className="authorBaby"
            style={{
              color: this.state.color,
              transition: "background-color 1s",
            }}
          >
            {" "}
            - {this.state.author}
          </h2>

          <div>
            <a
              id="tweet-quote"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://twitter.com/intent/tweet/?text=${this.state.quote} - ${this.state.author}`}
            >
              <button
                id="button"
                style={{
                  backgroundColor: this.state.color,
                  transition: "background-color 1s",
                }}
              >
                <i
                  id="twitter-icon"
                  className="fab fa-twitter"
                  style={{
                    color: "#ffffff",
                    borderRadius: 5,
                  }}
                />
              </button>
            </a>
          </div>
          <div className="actions">
            <button
              id="new-quote"
              className="btn btn-primary"
              onClick={this.handleNewQuote}
              style={{
                backgroundColor: this.state.color,
                transition: "background-color 1s",
                color: "white",
                alignContent: "center",
                marginLeft: 100,
              }}
            >
              New Quote
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default RandomQuoteMachine;
