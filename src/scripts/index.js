const components = {
  home: import('../components/Header/index.js').then((result) => {
    customElements.define('mineraux-header', result.default)
  }),
}