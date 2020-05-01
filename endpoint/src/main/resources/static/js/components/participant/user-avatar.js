const template = document.createElement('template')

template.innerHTML =
    `<style>
        .picture {
            border: 2px solid black;
            background-color: gray;
            width: 6em;
            height: 7em;
        }
    </style>
    <img class="picture" src="html/avatar.png"/>
    `

class UserAvatar extends HTMLElement {
    constructor() {
        super();

        this._shadowRoot = this.attachShadow({mode: 'open'});
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$container = this._shadowRoot.querySelector('.picture')
        this.$container.addEventListener('click', () => {
            alert("hello from avatar")
        })
    }
}

window.customElements.define('user-avatar', UserAvatar);