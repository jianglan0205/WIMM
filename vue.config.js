const path = require('path')

module.exports = {
  lintOnSave: false,
  chainWebpack:config =>{
    const dir = path.resolve(__dirname,'src/assets/icons')

    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)  //所有svg走这个规则
      .include.add(dir).end()  //设置只包含 icons 目录的svg走这个规则
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract:false}).end()
      //设置需要使用的loader,并且不要把它解析出文件来
      .use('svgo-loader').loader('svgo-loader')
      .tap(options => ({...options,plugin:[{removeAttrs:{attrs:'fill'}}]})).end()
      //防止svg里有fill属性导致不能换颜色,删除svg里的fill属性
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
      //设置需要使用的插件
    config.module.rule('svg').exclude.add(dir)
      //其他svg loader 排除 icon 目录(这个目录里的svg已经走过规则)

  }
}
