import './js/components/participant/participants-bar.js'
import './js/components/sidetools/my-toolbar.js'

const template = document.createElement('template');

template.innerHTML = `
    <style>
        div.content {
            display: block;
        }
        div.participants {
        }
        div.toolbar {
        }
    </style>

    <participants-bar class="participants"></participants-bar>
    <tools-bar class="toolbar"></tools-bar>
`

class Table extends HTMLElement {
    constructor() {
        super();

        this._shadowRoot = this.attachShadow({mode: 'open'});
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('virtual-table', Table);
