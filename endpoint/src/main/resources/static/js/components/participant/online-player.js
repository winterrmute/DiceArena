import './user-avatar.js';
import './user-tools.js';

const template = document.createElement('template');

template.innerHTML = `
    <style>
        div {
            font-family: Helvetica, sans-serif;
        }
        div.content{
            display: flex;
        }
    </style>
    
    <div class="content">
        <user-avatar class="avatar"></user-avatar>
        <user-tools class="tools"></user-tools>
    </div>
`

class Player extends HTMLElement {
    constructor() {
        super();

        this._shadowRoot = this.attachShadow({mode: 'open'});
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('online-player', Player);