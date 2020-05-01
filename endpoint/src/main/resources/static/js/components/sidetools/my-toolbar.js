import './side-tool.js';

const template = document.createElement('template');

template.innerHTML = `
    <style>
        div.content{
            max-width: 5em;
            position: fixed;
            bottom: 0;
            right: 0;
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