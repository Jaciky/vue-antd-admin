import Vue from 'vue'
import VeLine from 'v-charts/lib/line.common' // 折线
import VeHistogram from 'v-charts/lib/histogram.common' // 柱状
import VeRing from 'v-charts/lib/ring.common' // 环形
import VePie from 'v-charts/lib/pie.common' // 饼形

Vue.component(VeLine.name, VeLine)
Vue.component(VeHistogram.name, VeHistogram)
Vue.component(VeRing.name, VeRing)
Vue.component(VePie.name, VePie)
