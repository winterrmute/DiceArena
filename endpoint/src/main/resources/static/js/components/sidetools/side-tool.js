const template = document.createElement('template');

template.innerHTML = `
    <style>
        div.content{
            padding: 10px;
        }
        div.button {
            border: 2px solid black;
            border-radius: 50%;
            width: 3em;
            height: 3em;
        }
    </style>
    
    <div class="content">
        <div class="button"></div>
    </div>
`

class SideTool extends HTMLElement {
    constructor() {
        super();

        this._shadowRoot = this.attachShadow({mode: 'open'});
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$button = this._shadowRoot.querySelector('.button');
        this.$button.addEventListener('click', () => {
            alert('hello from side tool')
        });
    }
}

window.customElements.define('side-tool', SideTool);