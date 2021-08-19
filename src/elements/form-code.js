import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../../prism.js';
class FormCode extends PolymerElement {
  static get template() {
    return html`
        <link href="../../prism.css" rel="stylesheet" />
        <pre id="output"></pre>     
    `;
  }
  static get properties() {
    return { 
      code: {
        type: String
      },
      language: {
        type: String
      }        
    };
  }
  ready() {
    super.ready();
    this._render();
  }  
  _render(){
    this.$.output.innerHTML = this._highlight();
  }
  _highlight(){
    return Prism.highlight(this.code, Prism.languages[this.language]);
  }
}

window.customElements.define('form-code', FormCode);
