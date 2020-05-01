const template = document.createElement('template');

template.innerHTML = `
    <style>
        div {
            font-family: Helvetica, sans-serif;
            flex: 1;
        }
        .sheet {
            height: 2.3em;
        }
        .token {
            height: 2.3em;
        }
        .dice {
            height: 2.3em;
        }
    </style>
    
    <div class="sheet">sheet</div>
    <div class="token">token</div>
    <div class="dice">dice</div>
    `

class UserTools extends HTMLElement {
    constructor() {
        super();

        this._shadowRoot = this.attachShadow({mode: 'open'});
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$sheet = this._shadowRoot.querySelector('.sheet');
        this.$token = this._shadowRoot.querySelector('.token');
        this.$dice = this._shadowRoot.querySelector('.dice');

        this.$sheet.addEventListener('click', () => {
            alert("hello from sheet")
        });

        this.$token.addEventListener('click', () => {
            alert("hello from token")
        });

        this.$dice.addEventListener('click', () => {
            alert("hello from dice")
        });
    }
}

window.customElements.define('user-tools', UserTools);