// import stuff
import { LitElement, html, css } from 'lit';

export class TvChannel extends LitElement {
  // defaults
  constructor() {
    super();
    this.title = '';
    this.presenter = '';
  }
  // convention I enjoy using to define the tag's name
  static get tag() {
    return 'tv-channel';
  }
  // LitElement convention so we update render() when values change
  static get properties() {
    return {
      title: { type: String },
      description: {type: String},
      presenter: { type: String },
      video: {type: String},
    };
  }
  // LitElement convention for applying styles JUST to our element
  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
      .wrapper {
        .wrapper {
        padding: 16px;
        background-color: #e57d7d;
        border-radius: 5px;
        border-color: #1d1c1c;
        border-width: 3px;
      }
    `;
  }
  // LitElement rendering template of your element
  render() {
    return html`
      <div class="wrapper">
        <h3>${this.title}</h3>
        <h4>${this.presenter}</h4>
        <slot></slot>
      </div>  
      `;
  }
}
// tell the browser about our tag and class it should run when it sees it
customElements.define(TvChannel.tag, TvChannel);
