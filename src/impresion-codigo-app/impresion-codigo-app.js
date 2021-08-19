import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
// WebComponents
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
// LocalStorage
import '@polymer/app-storage/app-localstorage/app-localstorage-document.js';

class ImpresionCodigoApp extends PolymerElement {
  static get template() {
    return html`
      <style include="iron-flex iron-flex-alignment">
        :host {
          display: block;
        }
        .iron-flex {
          width: 50%;
          margin-right: 1em;
        }  
      </style>    
      
      <app-localstorage-document key="impresion.collection" data="{{collection}}"></app-localstorage-document>

      <div class="layout horizontal">
        <form-collection class="iron-flex" collection="{{collection}}"></form-collection>
        <form-app class="iron-flex" collection="{{collection}}"></form-app>
      </div>      
    `;
  }
  static get properties() {
    return { 
      collection: {
        type: Array,
        value: function() {return [];},
      }      
    };
  }
  static get observers(){
    return [
      "_collectionChanged(collection.*)"
    ]
  }  
  _collectionChanged(){
    // console.log(this.collection);
  }
}

window.customElements.define('impresion-codigo-app', ImpresionCodigoApp);
