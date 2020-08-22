import HeaderHtml from './index.html'

export default class Header extends HTMLElement {
  constructor() {
    super()
    this.root = this.attachShadow({mode: 'open'})
  }

  connectedCallback () {
    this.root.innerHTML = HeaderHtml
  }
}