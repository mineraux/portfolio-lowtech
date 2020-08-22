import '../assets/styles/header.scss'

export default class Header extends HTMLElement {
  constructor() {
    super()
    this.root = this.attachShadow({mode: 'closed'})
  }

  connectedCallback () {
    this.root.innerHTML = `
    <header>My header</header>
    `
  }
}