import FooterMenu from './footer-menu'

export {
  FooterMenu
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(FooterMenu.name, FooterMenu)
}
