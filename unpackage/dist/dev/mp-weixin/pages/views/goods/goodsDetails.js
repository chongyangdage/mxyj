(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/views/goods/goodsDetails"],{

/***/ 100:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/项目/uniapp项目/mxyj/pages/views/goods/goodsDetails.vue?vue&type=template&id=5f04f9df&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniPopup: function () {
      return Promise.all(/*! import() | components/uni-popup/uni-popup */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uni-popup/uni-popup")]).then(__webpack_require__.bind(null, /*! @/components/uni-popup/uni-popup.vue */ 464))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.goodsEva.length
  var l0 =
    g0 !== 0
      ? _vm.__map(_vm.goodsEva, function (row, index) {
          var $orig = _vm.__get_orig(row)
          var g1 = row.tags.length
          var g2 = row.images.length
          return {
            $orig: $orig,
            g1: g1,
            g2: g2,
          }
        })
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        l0: l0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 101:
/*!***************************************************************************************!*\
  !*** D:/项目/uniapp项目/mxyj/pages/views/goods/goodsDetails.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../软件工具/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../软件工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../软件工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../软件工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../软件工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goodsDetails.vue?vue&type=script&lang=js& */ 102);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 102:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/项目/uniapp项目/mxyj/pages/views/goods/goodsDetails.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var app = getApp();
var uniPopup = function uniPopup() {
  Promise.all(/*! require.ensure | components/uni-popup/uni-popup */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uni-popup/uni-popup")]).then((function () {
    return resolve(__webpack_require__(/*! @/components/uni-popup/uni-popup.vue */ 464));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var navBar = function navBar() {
  __webpack_require__.e(/*! require.ensure | pages/commponent/public/navBar */ "pages/commponent/public/navBar").then((function () {
    return resolve(__webpack_require__(/*! ../../commponent/public/navBar */ 473));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var sku = function sku() {
  Promise.all(/*! require.ensure | pages/commponent/public/sku */[__webpack_require__.e("common/vendor"), __webpack_require__.e("pages/commponent/public/sku")]).then((function () {
    return resolve(__webpack_require__(/*! ../../commponent/public/sku */ 480));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var coupon = function coupon() {
  __webpack_require__.e(/*! require.ensure | pages/commponent/public/coupon */ "pages/commponent/public/coupon").then((function () {
    return resolve(__webpack_require__(/*! ../../commponent/public/coupon */ 487));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var loading = function loading() {
  __webpack_require__.e(/*! require.ensure | pages/commponent/public/loading */ "pages/commponent/public/loading").then((function () {
    return resolve(__webpack_require__(/*! ../../commponent/public/loading */ 457));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var poster = function poster() {
  __webpack_require__.e(/*! require.ensure | pages/commponent/goods/poster */ "pages/commponent/goods/poster").then((function () {
    return resolve(__webpack_require__(/*! ../../commponent/goods/poster.vue */ 494));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var swipers = function swipers() {
  __webpack_require__.e(/*! require.ensure | pages/views/goods/swiper/swiper */ "pages/views/goods/swiper/swiper").then((function () {
    return resolve(__webpack_require__(/*! ./swiper/swiper.vue */ 501));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  data: function data() {
    return {
      colors: '',
      shows: false,
      statusBarHeight: app.globalData.statusHeight + 'px',
      toBar: app.globalData.toBar + 'px',
      showdots: false,
      swiperList: [],
      isColl: false,
      latitude: '',
      longitude: '',
      nowList: {},
      goodsData: {
        title: 'DUNKINDONUTS唐恩都乐美国甜甜圈6个礼盒装 随机搭配6款',
        type: 1,
        goods_id: 201,
        money: '35.90',
        number: 1,
        hmoney: '45.90',
        img: '/static/images/goods/one.jpg',
        youhui: true,
        baoyou: false,
        status: 1,
        //商品过期状态  0正常  1已失效
        stock: 600,
        videos: 'https://fzdz.soft.haoyangsoft.com/uploads/system/videos/20200813/6c819d24ee6868aee33e150c4333329b.mp4',
        imgList: ['/static/images/goods/one.jpg', 'http://img10.360buyimg.com/n1/jfs/t1/86401/35/12206/357766/5e43b59cE5a7aa4dd/0753be765166c195.jpg', 'http://img11.360buyimg.com/n1/jfs/t1/74434/3/6892/331750/5d512febE54e891c4/0096ad20c3c20d23.jpg'],
        sku: [{
          sku_id: 1,
          skuname: '口味',
          child: [{
            tagname: '醇黑巧克力【20枚】',
            id: 2011,
            imgs: 'http://img10.360buyimg.com/n1/jfs/t1/86401/35/12206/357766/5e43b59cE5a7aa4dd/0753be765166c195.jpg',
            money: '175.78'
          }, {
            tagname: '草莓味【8枚】',
            id: 2012,
            imgs: 'http://img11.360buyimg.com/n1/jfs/t1/74434/3/6892/331750/5d512febE54e891c4/0096ad20c3c20d23.jpg',
            money: '35.90'
          }]
        }],
        skuArr: [{
          goods_sku_arr: ['2011'],
          goods_sku_text: '醇黑巧克力【20枚】',
          img: 'http://img10.360buyimg.com/n1/jfs/t1/86401/35/12206/357766/5e43b59cE5a7aa4dd/0753be765166c195.jpg',
          money: '175.78',
          stock: 345
        }, {
          goods_sku_arr: ['2012'],
          goods_sku_text: '草莓味【8枚】',
          img: 'http://img11.360buyimg.com/n1/jfs/t1/74434/3/6892/331750/5d512febE54e891c4/0096ad20c3c20d23.jpg',
          money: '35.90',
          stock: 255
        }]
      },
      showModal: false,
      couponshow: false,
      isshowVideo: true,
      voice: false,
      showVideo: false,
      isShow: true,
      couponList: [
      //优惠券列表
      {
        money: 100,
        reduce: 10,
        date: '2020-02-09 2020-10-02',
        id: 1,
        status: 0,
        condition: ['新人专享', '仅在支付时使用', '可与其他产品共享']
      }, {
        money: 100,
        reduce: 20,
        date: '2020-02-09 2020-10-02',
        id: 2,
        status: 0,
        condition: ['新人专享']
      }, {
        money: 100,
        reduce: 30,
        date: '2020-02-09 2020-10-02',
        id: 3,
        status: 0,
        condition: ['仅在支付时使用', '可与其他产品共享']
      }, {
        money: 100,
        reduce: 40,
        date: '2020-02-09 2020-10-02',
        id: 4,
        status: 0,
        condition: ['新人专享', '可与其他产品共享']
      }, {
        money: 100,
        reduce: 50,
        date: '2020-02-09 2020-10-02',
        id: 5,
        status: 0,
        condition: ['新人专享', '仅在支付时使用']
      }],
      htmlNode: '',
      // 商品详情
      descriptionStr: '<div id="commDesc" hasdata="1" style="line-height: 2; transform-origin: 0px 0px; font-size: 30px;width:100%;"><img style="max-width:640px;" src="https://img30.360buyimg.com/popWaterMark/jfs/t1/99519/11/4669/136444/5de8bbdbE0cba049d/517f1fb75b582456.jpg!q70.dpg.webp" loaded="17"><div class="for_separator"></div><img style="max-width:640px;" src="https://img30.360buyimg.com/popWaterMark/jfs/t1/92267/13/4771/160442/5de8bbdbE50655175/7dd51e0b966aba15.jpg!q70.dpg.webp" loaded="16"><div class="for_separator"></div><img style="max-width:640px;" src="https://img30.360buyimg.com/popWaterMark/jfs/t1/93624/28/4672/131382/5de8bbdbE65d14e5d/81bc1227ec775788.jpg!q70.dpg.webp" loaded="15"><div class="for_separator"></div><img style="max-width:640px;" src="https://img30.360buyimg.com/popWaterMark/jfs/t1/97366/21/4817/101042/5de8bbdbE8854b673/7c4ce7faa45a418b.jpg!q70.dpg.webp" loaded="14"><div class="for_separator"></div><img style="max-width:640px;" src="https://img30.360buyimg.com/popWaterMark/jfs/t1/98311/21/4778/122770/5de8bbdcE13375754/f4324ca9294eef4c.jpg!q70.dpg.webp" loaded="13"><div class="for_separator"></div><img style="max-width:640px;" src="https://img30.360buyimg.com/popWaterMark/jfs/t1/103373/15/4747/118973/5de8bbdcE2058ee8e/d921d5f1a4aa5c89.jpg!q70.dpg.webp" loaded="12"><div class="for_separator"></div><img style="max-width:640px;" src="https://img30.360buyimg.com/popWaterMark/jfs/t1/88841/34/4711/84977/5de8bbdeE0b691b9a/e69796d32a63bbaa.jpg!q70.dpg.webp" loaded="11"><div class="for_separator"></div><img style="max-width:640px;" src="https://img30.360buyimg.com/popWaterMark/jfs/t1/95248/2/4771/99041/5de8bbdfE06b41b3b/3c4a2b1cb97a5262.jpg!q70.dpg.webp" loaded="10"></div>',
      goodsEva: [
      //评价列表
      {
        headimg: '/static/images/face.jpg',
        nickname: '反转',
        create_time: '2020-09-10 15:36',
        goods_name: '醇黑巧克力【20枚】',
        score: 5,
        comment: '产品很不错,赞',
        images: ['/static/images/goods/two.jpg', '/static/images/goods/one.jpg'],
        reply: '感谢您的支持',
        tags: ['价格合理', '味道好', '价格优惠', '态度好']
      }, {
        headimg: '/static/images/face.jpg',
        nickname: '清风',
        create_time: '2020-09-10 13:36',
        goods_name: '草莓味【8枚】',
        score: 4,
        comment: '味道还不错~',
        images: [],
        reply: '',
        tags: []
      }],
      scrollShow: false
    };
  },
  components: {
    navBar: navBar,
    sku: sku,
    coupon: coupon,
    loading: loading,
    poster: poster,
    uniPopup: uniPopup,
    swipers: swipers
  },
  props: {},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(options) {
    var _this2 = this;
    this.setData({
      //设置主题颜色
      colors: app.globalData.newColor
    });
    this.getLocation(); //获取位置信息
    this.setFrom(this.descriptionStr); //处理商品详情
    setTimeout(function () {
      _this2.setData({
        isShow: false
      });
    }, 600);
    this.newVideo = uni.createVideoContext('newVideo');
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {},
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function onHide() {},
  /**
   * 生命周期函数--监听页面滚动
   */
  onPageScroll: function onPageScroll(e) {
    if (e.scrollTop >= 400) {
      this.scrollShow = true;
    } else {
      this.scrollShow = false;
    }
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function onPullDownRefresh() {},
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function onReachBottom() {},
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function onShareAppMessage() {
    return {
      title: this.goodsData.title,
      path: '/pages/views/goods/goodsDetails',
      imageUrl: this.goodsData.img
    };
  },
  /**
   * 用户点击右上角分享到朋友圈
   */
  onShareTimeline: function onShareTimeline() {
    return {
      title: this.goodsData.title,
      path: '/pages/views/goods/goodsDetails',
      imageUrl: this.goodsData.img
    };
  },
  methods: {
    getLocation: function getLocation() {
      var that = this;
      uni.getLocation({
        type: 'wgs84',
        geocode: true,
        success: function success(res) {
          console.log('获取经纬度成功', res);
          that.setData({
            latitude: res.latitude,
            longitude: res.longitude
          });
        },
        fail: function fail() {
          console.log('获取经纬度失败');
          that.setData({
            latitude: '',
            longitude: ''
          });
        },
        complete: function complete() {// 解析地址
        }
      });
    },
    setFrom: function setFrom(html) {
      //处理富文本 让图片居中适应
      var newContent = html.replace(/\<img/gi, '<img class="rich-img" ');
      this.setData({
        htmlNode: newContent
      });
    },
    openPoster: function openPoster() {
      var _this3 = this;
      //生成海报
      this.shows = false;
      uni.showLoading({
        title: '海报绘制中..'
      });
      this.$refs.popup.open();
      setTimeout(function () {
        uni.hideLoading();
        _this3.shows = true;
      }, 600);
    },
    hidePoster: function hidePoster() {
      //关闭海报
      this.$refs.popup.close();
    },
    setisColl: function setisColl() {
      //收藏与取消收藏
      var iscoll = !this.isColl;
      this.setData({
        isColl: iscoll
      });
    },
    openMap: function openMap() {
      //打开地图
      var that = this;
      uni.openLocation({
        latitude: 39.90,
        longitude: 116.40,
        success: function success(e) {}
      });
    },
    nearAddress: function nearAddress() {
      if (this.longitude !== '') {
        this.openMap();
      } else {
        var _this = this; // 处理拒绝再次打开调用设置
        uni.getSetting({
          success: function success(res) {
            if (res && res.authSetting && res.authSetting.hasOwnProperty('scope.userLocation')) {
              uni.openSetting({
                success: function success() {
                  _this.getLocation();
                }
              });
            }
          }
        });
      }
    },
    setShowVideo: function setShowVideo(showVideo, isH5) {
      //操作视频
      this.showVideo = showVideo;
      if (isH5 == true) {
        this.newVideo.play();
      }
    },
    hideShow: function hideShow() {
      this.showVideo = false;
    },
    ondefault: function ondefault() {//阻止事件 抛弃
    },
    onhide: function onhide() {
      this.showModal = false;
    },
    openSku: function openSku() {
      this.nowList = this.goodsData;
      this.showModal = true;
    },
    opencoupon: function opencoupon() {
      this.couponshow = true;
    },
    hidecoupon: function hidecoupon() {
      this.couponshow = false;
    },
    toHome: function toHome() {
      uni.switchTab({
        url: '/pages/views/tabBar/home'
      });
    },
    toCart: function toCart() {
      uni.switchTab({
        url: '/pages/views/tabBar/cart'
      });
    },
    goTop: function goTop() {
      //返回顶部
      uni.pageScrollTo({
        scrollTop: 0
      });
    },
    onReceive: function onReceive(item, index) {
      //领取优惠券
      console.log(item, index);
      if (item.status == 1) {
        return;
      } else {
        this.couponList[index].status = 1; //领取成功
        uni.showToast({
          title: '领取成功',
          icon: 'none'
        });
      }
    },
    seeAll: function seeAll() {
      //查看全部评论
      uni.navigateTo({
        url: '/pages/views/goods/goodsEvaluate'
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 103:
/*!************************************************************************************************************************!*\
  !*** D:/项目/uniapp项目/mxyj/pages/views/goods/goodsDetails.vue?vue&type=style&index=0&id=5f04f9df&scoped=true&lang=scss& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetails_vue_vue_type_style_index_0_id_5f04f9df_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../软件工具/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../软件工具/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../软件工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../软件工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../软件工具/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../软件工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../软件工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../软件工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../软件工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goodsDetails.vue?vue&type=style&index=0&id=5f04f9df&scoped=true&lang=scss& */ 104);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetails_vue_vue_type_style_index_0_id_5f04f9df_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetails_vue_vue_type_style_index_0_id_5f04f9df_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetails_vue_vue_type_style_index_0_id_5f04f9df_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetails_vue_vue_type_style_index_0_id_5f04f9df_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetails_vue_vue_type_style_index_0_id_5f04f9df_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 104:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/项目/uniapp项目/mxyj/pages/views/goods/goodsDetails.vue?vue&type=style&index=0&id=5f04f9df&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 97:
/*!***********************************************************************************!*\
  !*** D:/项目/uniapp项目/mxyj/main.js?{"page":"pages%2Fviews%2Fgoods%2FgoodsDetails"} ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _goodsDetails = _interopRequireDefault(__webpack_require__(/*! ./pages/views/goods/goodsDetails.vue */ 98));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_goodsDetails.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 98:
/*!**************************************************************!*\
  !*** D:/项目/uniapp项目/mxyj/pages/views/goods/goodsDetails.vue ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _goodsDetails_vue_vue_type_template_id_5f04f9df_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goodsDetails.vue?vue&type=template&id=5f04f9df&scoped=true& */ 99);
/* harmony import */ var _goodsDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goodsDetails.vue?vue&type=script&lang=js& */ 101);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _goodsDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _goodsDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _goodsDetails_vue_vue_type_style_index_0_id_5f04f9df_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goodsDetails.vue?vue&type=style&index=0&id=5f04f9df&scoped=true&lang=scss& */ 103);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../软件工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 38);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _goodsDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _goodsDetails_vue_vue_type_template_id_5f04f9df_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _goodsDetails_vue_vue_type_template_id_5f04f9df_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5f04f9df",
  null,
  false,
  _goodsDetails_vue_vue_type_template_id_5f04f9df_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/views/goods/goodsDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 99:
/*!*********************************************************************************************************!*\
  !*** D:/项目/uniapp项目/mxyj/pages/views/goods/goodsDetails.vue?vue&type=template&id=5f04f9df&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetails_vue_vue_type_template_id_5f04f9df_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../软件工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../软件工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../软件工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../软件工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../软件工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../软件工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goodsDetails.vue?vue&type=template&id=5f04f9df&scoped=true& */ 100);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetails_vue_vue_type_template_id_5f04f9df_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetails_vue_vue_type_template_id_5f04f9df_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetails_vue_vue_type_template_id_5f04f9df_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetails_vue_vue_type_template_id_5f04f9df_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ })

},[[97,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/views/goods/goodsDetails.js.map