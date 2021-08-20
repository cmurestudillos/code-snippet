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
          margin-right: 0px;
          margin-top: 2.5em;
          float: right;
        }          
        paper-button.custom {
          --paper-button-ink-color: var(--paper-pink-a200);
          /* These could also be individually defined for each of the
            specific css classes, but we'll just do it once as an example */
          --paper-button-flat-keyboard-focus: {
            background-color: var(--paper-pink-a200) !important;
            color: white !important;
          };
          --paper-button-raised-keyboard-focus: {
            background-color: var(--paper-pink-a200) !important;
            color: white !important;
          };
        }
        paper-button.custom:hover {
          background-color: var(--paper-indigo-100);
        }
        paper-button.indigo {
          background-color: var(--paper-indigo-500);
          color: white;
          --paper-button-raised-keyboard-focus: {
            background-color: var(--paper-pink-a200) !important;
            color: white !important;
          };
        }
        paper-button:disabled,
        paper-button[disabled] {
          color: white;
          background-color: bisque;
        }        
      </style>    

      <iron-form id="formulario">
          <form>
            <paper-input label="Pequeña descripción ..." id="description" on-value-changed="_validarFormulario"  required></paper-input>  
            <paper-textarea label="Copia el codigo aquí..." id="code" rows="5" on-value-changed="_validarFormulario" required></paper-textarea>
            <paper-input label="Lenguaje..." id="language" on-value-changed="_validarFormulario" required></paper-input> 
            <paper-button raised id="botonGuardar" class="custom indigo" disabled >Guardar snippet de código</paper-button>   
          </form>
      </iron-form>
    `;
  }
  static get properties() {
    return { 
      collection: {
        type: Array,
        notify: true
      },
      formDescripcion: {
        type: String
      },
      formCode: {
        type: String
      },
      formLanguage: {
        type: String
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
  _validarFormulario(evt){

    if(evt.target.id === 'description'){
        this.formDescripcion =  evt.target.value
    }

    if(evt.target.id === 'code'){
      this.formCode =  evt.target.value
    }

    if(evt.target.id === 'language'){
      this.formLanguage =  evt.target.value
    }

    if(this.formDescripcion !== "" && this.formCode !== "" && this.formLanguage !== ""){
      this.$.botonGuardar.disabled = false;
    }else{
      this.$.botonGuardar.disabled = true;
    }
  }
  addSnippet(){

    var codeObj = {
      description: this.$.description.value,
      code: this.$.code.value,
      language: this.$.language.value
    }
    // Agregar el Snippet a la coleccion
    this.push("collection", codeObj);

    // Limpiamos el formulario
    this.$.description.value = '';
    this.$.code.value = '';
    this.$.language.value = '';

  }
}

window.customElements.define('form-app', FormApp);
