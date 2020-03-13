module.exports = {
  semi: false, // 句尾添加分号
  singleQuote: true, // 使用单引号代替双引号
  printWidth: 180, // 单行代码的最大宽度
  useTabs: false, // 缩进不使用tab，使用空格
  tabWidth: 2, // 缩进级别的空格数
  quoteProps: 'as-needed',
  proseWrap: 'preserve', // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  arrowParens: 'avoid', //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  endOfLine: 'auto', // 结尾是 \n \r \n\r auto
  htmlWhitespaceSensitivity: 'ignore', // 空格被认为是不敏感的
  jsxBracketSameLine: false, // 在jsx中把'>' 是否单独放一行
  jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
  // parser: 'babylon', // 指定要使用的解析器, Prettier 会自动从输入文件路径中推断出解析器，因此不必更改此设置。
  trailingComma: 'none' // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
}
