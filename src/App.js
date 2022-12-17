import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";
import "./App.css";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 200),
    };
  }

  handleSearchChange = (event) => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 200),
    });
  };

  render() {
    return (
      <div className="main">
        <Header />
        <div className="content-wrap">
          <SearchInput textChange={this.handleSearchChange} />
          <EmojiResults emojiData={this.state.filteredEmoji} />
        </div>
      </div>
    );
  }
}
