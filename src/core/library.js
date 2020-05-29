import Vue from 'vue'

// base library
import '@/core/antd'
import Viser from 'viser-vue'

// ext library
import VueClipboard from 'vue-clipboard2'
import VueCropper from 'vue-cropper'
import Dialog from '@/components/Dialog'
import MultiTab from '@/components/MultiTab'
import PageLoading from '@/components/PageLoading'

import directives from './directives' // global directives
import * as filters from '@/utils/filter' // global filter

VueClipboard.config.autoSetContainer = true

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(directives)

Vue.use(Viser)
Vue.use(Dialog) // this.$dialog func
Vue.use(MultiTab)
Vue.use(PageLoading)
Vue.use(VueClipboard)
Vue.use(VueCropper)
