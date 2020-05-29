import Vue from 'vue'

const Socket = require('../plugins/reconnecting-websocket') // https://github.com/joewalnes/reconnecting-websocket

export function createSocket(params) {
  if ('WebSocket' in window) {
    const url = ``
    const ws = new Socket(url, null, {
      debug: false, // console.debug()记录调试消息
      automaticOpen: true, // 实例化后立即连接 ws.open()和 ws.close() 可以手动管理
      reconnectInterval: 1000, // 重新连接延迟时间
      maxReconnectInterval: 2000, // 等待重连最长时间
      reconnectDecay: 1, // 延迟重连时间的增加率
      timeoutInterval: 3000, // 在关闭和重试之前等待连接成功的最长时间
      maxReconnectAttempts: null, // 最大尝试重连次数
      binaryType: 'blob' // 二进制类型
    })

    // 发送JSON
    ws.sendObj = data => {
      ws.send(JSON.stringify(data))
    }

    ws.onclose = function () {
      console.log('ws连接关闭!' + new Date().toLocaleString())
    }

    ws.onerror = function () {
      console.log('ws连接错误!')
    }

    ws.onopen = function () {
      console.log('ws连接成功!' + new Date().toLocaleString())
    }

    ws.onmessage = function ({ data }) {
      data = JSON.parse(data)
      console.log('服务器发送了新的消息：' + data.msg)
    }

    Vue.prototype.$socket = ws
  } else {
    alert('您的浏览器不支持 WebSocket!')
  }
}
