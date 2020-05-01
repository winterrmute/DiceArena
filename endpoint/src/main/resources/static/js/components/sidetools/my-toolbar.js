import './side-tool.js';

const template = document.createElement('template');

template.innerHTML = `
    <style>
        div {
            font-family: Helvetica, sans-serif;
        }
        div.content{
            max-width: 5em;
            float: right;
        }
    </style>
    
    <div class="content">
        <side-tool></side-tool>
        <side-tool></side-tool>
        <side-tool></side-tool>
        <side-tool></side-tool>
    </div>
`

class ToolsBar extends HTMLElement {
    constructor() {
        super();

        this._shadowRoot = this.attachShadow({mode: 'open'});
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('tools-bar', ToolsBar);