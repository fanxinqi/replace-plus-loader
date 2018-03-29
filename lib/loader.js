const loaderUtils=require("loader-utils");

module.exports = function(content) {
    const options = loaderUtils.getOptions(this),
         presets = Array.isArray(options.presets)?options.presets):[options];

         presets.forEach(function(pre){
            if(!pre.test) throw new Error("no find test key in presets or test key is empty");
            if(!pre.target) throw new Error("no find target key in presets  or target key is empty");
            content=content.replace(pre.test,pre.target);
         });

    return content;
};
