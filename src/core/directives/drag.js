/**
 *  拖拽
 */
export default {
  bind: function (el) {
    // 监听document是因为如果监听元素el的话鼠标太快移出元素后就会失效
    el.onmousedown = event => {
      // 算出鼠标相对元素的位置
      let pointX = event.clientX - el.offsetLeft // 鼠标位置X减去元素距离左边距离（鼠标到元素左边的距离）
      let pointY = event.clientY - el.offsetTop // 鼠标位置Y减去距离顶部距离（鼠标到元素顶部的高度）
      let elWidth = el.offsetWidth
      let elHeight = el.offsetHeight

      let allHeight = document.documentElement.clientHeight
      let allWidth = document.documentElement.clientWidth
      document.onmousemove = e => {
        // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = e.clientX - pointX
        let top = e.clientY - pointY
        // 移动当前元素
        if (left < 0) {
          left = 0
        } else if (left > allWidth - elWidth) {
          left = allWidth - elWidth
        }
        if (top < 60) {
          top = 60
        } else if (top > allHeight - elHeight) {
          top = allHeight - elHeight
        }
        el.style.left = left + 'px'

        el.style.top = top + 'px'
      }
      document.onmouseup = e => {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}
