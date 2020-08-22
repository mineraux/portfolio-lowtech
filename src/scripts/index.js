const components = {
  home: import('../components/Header.js').then((result) => {
    customElements.define('mineraux-header', result.default)
  }),
}