import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
// WebComponents
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-input/paper-textarea.js';
import '@polymer/paper-styles/default-theme.js';

class FormApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        #formulario{
          padding: 1.5em;
          border-radius: 1.5em;
          box-shadow: 2px 2px 2px 2px grey;
          margin-top: 1em;
        }
        paper-button {
          background-color: var(--accent-color);
          color: white;
          margin-right: 0px;
          margin-top: 2.5em;
          float: right;
        }  
      </style>    

      <iron-form id="formulario">
          <form>
            <paper-input label="Pequeña descripción ..." id="description"></paper-input>  
            <paper-textarea label="Copia el codigo aquí..." id="code" rows="5"></paper-textarea>
            <paper-input label="Lenguaje..." id="language"></paper-input> 
            <paper-button raised id="botonGuardar">Guardar snippet de código</paper-button>   
          </form>
      </iron-form>
    `;
  }
  static get properties() {
    return { 
      collection: {
        type: Array,
        notify: true
      }      
    };
  }
  static get listeners(){
    return {
      "click" : "addSnippet"
    }
  }  
  ready() {
    super.ready();

    this.$.botonGuardar.addEventListener("click", () => {
      this.addSnippet();
    });
  }  
  addSnippet(){
    var codeObj = {
      description: this.$.description.value,
      code: this.$.code.value,
      language: this.$.language.value
    }
    // Agregar el Snippet ala coleccion
    this.push("collection", codeObj);
  }
}

window.customElements.define('form-app', FormApp);
