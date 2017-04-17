/**
 * @file 常用工具函数
 * @author dulin <novaline@qq.com>
 * @copyright dulin 2016
 */

;(function (window, document) {

    return {
        /**
         * @desc 检测浏览器是否支持webp格式图片
         * 1.若使用场景是浏览器，可以：
         *  JavaScript 能力检测，对支持 WebP 的用户输出 WebP 图片
         *  使用 WebP 支持插件： https://github.com/dominikhlbg/vp8-webm-javascript-decoder/
         * 2.若使用场景是app，可以：
         *  Android 4.0以下WebP解析库 https://github.com/alexey-pelykh/webp-android-backport
         *  iOS WebP 解析库 https://github.com/carsonmcdonald/WebP-iOS-example
         *
         * @returns {Boolean}
         */
        isSupportWebp: function () {
            function checkWebp() {
                try {
                    return (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0);
                } catch (err) {
                    return false;
                }
            }
        },

        /**
         * @description 检测浏览器是否支持webp格式图片
         * @returns {Boolean}
         */
        isSupportWebp_v2: function () {
            var d = document;
            var check = function () {
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
                } catch (err) {
                    supportWebp = false;
                }
                return supportWebp;
            }
        },

        /**
         * @desc 获取url上的查询字符串的值
         * 支持单页面应用hash路由后面带有查询字符串的情况，类似这样的url
         * http://yao-h5.test.pajkdc.com/home.html?app=pajk#/yao-fillordercard/3?from=undefined&usableCoupon=1
         * hash为#/yao-fillordercard/3，hash前的查询字符串?app=pajk和hash后的查询字符串?from=undefined&usableCoupon=1都支持
         * @example
         * Util.getParameterByName('app', 'http://yao-h5.test.pajkdc.com/home.html?app=pajk#/yao-fillordercard/3?from=undefined&usableCoupon=1')
         * // return pajk
         *
         * window.location.href = 'http://yao-h5.test.pajkdc.com/home.html?app=pajk#/yao-fillordercard/3?from=undefined&usableCoupon=1';
         * Util.getParameterByName('usableCoupon');
         * // return 1
         * @returns {String} 返回查询字符串对应的值
         */
        getParameterByName: function (name, url) {
            if (!url) {
                url = window.location.href;
            }
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
    }

})(this, document);
