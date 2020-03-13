export default {
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: '筛查管理系统',
  /**
   * @description token在Cookie中存储的天数，默认7天
   */
  cookieExpires: 7,
  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: true,
  /**
   * @description api请求基础路径
   */
  baseURL: process.env.VUE_APP_BASE_URL,
  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: 'home'
}
