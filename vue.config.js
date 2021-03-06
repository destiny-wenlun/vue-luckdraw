const path = require('path');

module.exports = {
    publicPath: '/vue-luckdraw-demo/',
    // 修改 src 目录 为 examples 目录
    pages: {
        index: {
            entry: 'example/main.ts',
            template: 'public/index.html',
            filename: 'index.html',
        },
    },
    productionSourceMap: false,
    // 扩展 webpack 配置，使 packages 加入编译
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
            .add(path.join(__dirname, 'packages'))
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options;
            });
    },
};
