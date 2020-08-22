import './header.scss'
import HeaderDom from './index.html'

export default class Header extends HTMLElement {
  constructor() {
    super()
    this.root = this.attachShadow({mode: 'closed'})
  }

  connectedCallback () {
    this.root.innerHTML = HeaderDom
  }
}