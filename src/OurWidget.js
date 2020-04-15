// Import the LitElement base class and helper function
import { LitElement, css, html } from 'lit-element';

// Extend the LitElement base class (which extends the native HTMLElement)
class OurWidget extends LitElement {
  constructor() {
    super();
    this.text = "Here is a boring widget.";
  }

  render(){
    return html`
      <!-- template content -->
      <div>
        ${this.text}
      </div>
    `;
  }
    
  static get styles() {
    return css`
      div {
        position: absolute;
        left: 200px;
        top: 200px;
        font: menu;
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        border-radius: 5px;
        background-color: #666;
        padding: 20px;
        user-select: none;
      }
    `;
  }
}

// Register the new element with the browser.
customElements.define('our-widget', OurWidget);

