module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: ['@babel/plugin-proposal-optional-chaining', ['import', { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true }]]
}
