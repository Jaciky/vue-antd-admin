import QRCode from 'qrcodejs2'

export default (params, elementId, width = 150) => {
  let qrcode = new QRCode(elementId, {
    width, // 图像宽度
    height: width, // 图像高度
    colorDark: '#000000', // 前景色
    colorLight: '#ffffff', // 背景色
    typeNumber: 4,
    correctLevel: QRCode.CorrectLevel.M // 容错级别 容错级别有：（1）QRCode.CorrectLevel.L （2）QRCode.CorrectLevel.M （3）QRCode.CorrectLevel.Q （4）QRCode.CorrectLevel.H
  })
  qrcode.clear() // 清除二维码
  qrcode.makeCode(params) // 生成另一个新的二维码
}
