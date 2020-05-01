import './online-player.js'

const template = document.createElement('template');

template.innerHTML = `
    <style>
        div {
            font-family: Helvetica, sans-serif;
        }
        div.content{
            max-width: 6em;
        }
    </style>
    
    <div class="content">
        <online-player></online-player>
    </div>
`

class ParticipantsBar extends HTMLElement {
    constructor() {
        super();

        this._shadowRoot = this.attachShadow({mode: 'open'});
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('participants-bar', ParticipantsBar);