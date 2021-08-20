import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
// WebComponents
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '@polymer/app-layout/app-layout.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
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
        .tleft{
          text-align: left;
        }
        .tright{
          text-align: right;
        }
        .div-logo{
          padding: 1em;
          width: 5%;
          float: left;
        }
        .div-titulo{
          padding: 1.2em;
          width: 50%;
          float: left;
          font-size: 1.5em;
        }
        app-toolbar{
          height: 5em;
        }
        app-header {
          color: #fff;
          background: rgb(63,94,251);
          background: linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
        }
        [main-title] {
          font-size: 5em;
        }        
      </style>    
      
      <app-header-layout>
        <app-header condenses="condenses" fixed="fixed" reveals="reveals" shadow="shadow" effects="waterfall" slot="header">
          <app-toolbar>
            <div condensed-title class="tleft">
              <div class="div-logo">
              <img src="src/assets/img/logo.png" alt="Snippet Code App" title="Snippet Code App" /></div>
              <div class="div-titulo">
                Code Snippet App
              </div>
            </div>
            <div condensed-title class="tright">
              <p><i>by Polymer</i></p>
            </div> 
          </app-toolbar>
        </app-header>
        <app-localstorage-document key="impresion.collection" data="{{collection}}"></app-localstorage-document>

        <div class="layout horizontal">
          <form-collection class="iron-flex" collection="{{collection}}"></form-collection>
          <form-app class="iron-flex" collection="{{collection}}"></form-app>
        </div> 
      </app-header-layout>
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
