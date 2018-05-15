import Instance from './footer-save-cancel'

export {
  Instance
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(Instance.name, Instance)
}
