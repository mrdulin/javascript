;(function(window, document) {

    return {
        /**
         * @description 
         * 1.若使用场景是浏览器，可以：
         *  JavaScript 能力检测，对支持 WebP 的用户输出 WebP 图片
         *  使用 WebP 支持插件： https://github.com/dominikhlbg/vp8-webm-javascript-decoder/
         * 2.若使用场景是app，可以：
         *  Android 4.0以下WebP解析库 https://github.com/alexey-pelykh/webp-android-backport
         *  iOS WebP 解析库 https://github.com/carsonmcdonald/WebP-iOS-example
         */
        isSupportWebp: function() {
            function checkWebp() {
                try{
                    return (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0);
                }catch(err) {
                    return  false;
                }
            }
        },

        isSupportWebp_v2: function() {
            var d = document;
            var check = function() {
                var supportWebp;
                try {
                    var ele = d.createElement('object');
                    ele.type = 'image/webp';
                    ele.innerHTML = '!';
                    d.body.appendChild(ele);
                    //奇妙所在,如果浏览器支持webp,那么这个object是不可见的(offsetWidth为0),
                    //否则就会显示出来,有可视宽度.
                    supportWebp = !ele.offsetWidth;
                    d.body.removeChild(ele);
                }catch (err) {
                    supportWebp = false;
                }
                return supportWebp;
            }
        }
    }
    
})(this, document);