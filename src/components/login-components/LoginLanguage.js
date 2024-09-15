import React,{Component, useState, useRef, state} from 'react'; 
import { NavLink } from "react-router-dom";
const MAX_ITEMS = 5;
export class LoginLanguage extends Component {  
  componentWillMount() {
    this.state = {
      isOpen: false,
    };
    this.items = [
     'English',
     'Deutsch',
     'Corsu',
     'Македонски',
     'Spanish',
     'Dutch',
     'English',
     'Deutsch',
     'Corsu',
     'Македонски',
     'Spanish',
     'Dutch',
     'English',
     'Deutsch',
     'Corsu',
     'Македонски',
     'Spanish',
     'Dutch',
     'English',
     'Deutsch',
     'Corsu',
     'Македонски',
     'Spanish',
     'Dutch',
     'English',
     'Deutsch',
     'Corsu',
     'Македонски',
     'Spanish',
     'Dutch',
    ];
  }
  
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  
  getRenderedItems() {
    if (this.state.isOpen) {
      return this.items;
    }
    return this.items.slice(0, MAX_ITEMS);
  }

  render() {
      return (
      <div className="language-selection-section">
        <div className="lang-sel-block">
          <b>Choose Language:</b> 
          <span className="language-list">
            {this.getRenderedItems().map((item, id) => (
              <a href="#" key={id}>{item}</a>
            ))}
          </span>
          <button onClick={this.toggle}>
            {this.state.isOpen ? 'Less' : '...More'}
          </button>
        </div>
      </div>
     );
  }
}

export default LoginLanguage 