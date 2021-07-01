const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    lintOnSave: true,//是否启用eslint
    chainWebpack: config => {
        config.resolve.alias.set("@", resolve("src"));
    },
	configureWebpack: config => {
	    if (process.env.NODE_ENV === 'production') {
	      // 为生产环境修改配置...
	    } else {
	      // 为开发环境修改配置...
	    }
	  }
};