import Autocomplete from './src/Autocomplete'

Autocomplete.install = function (Vue) {
  Vue.component(Autocomplete.name, Autocomplete)
}

export default Autocomplete
