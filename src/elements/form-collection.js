import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
// WebComponents
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-styles/default-theme.js';

class FormCollection extends PolymerElement {
  static get template() {
    return html`
        <style>
            :host {
                display: block;
            } 
            paper-card{
                display: block;
                margin-top: 1em;
                box-shadow: 3px 3px 3px 3px grey;
                border-radius: 1.5em;
            }
            .tright{
              text-align: right;
              text-transform: uppercase;
              font-weight: bold 
            }
        </style>   
        <dom-repeat items="{{collection}}" as="code">
            <template>
              <paper-card heading="{{code.description}}" elevation="1">
                  <div class="card-content">
                      <form-code code="{{code.code}}" language="{{code.language}}"></form-code>
                  </div>
                  <div class="card-content tright">
                    <span >{{code.language}}</span>
                  </div>
              </paper-card>
            </template>
        </dom-repeat>      
    `;
  }
  static get properties() {
    return { 
      collection: {
        type: Array
      }      
    };
  }
  static get listeners(){
    return { }
  }  
  ready() {
    super.ready();
  }  
}

window.customElements.define('form-collection', FormCollection);
