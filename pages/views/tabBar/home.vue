<template>
	<view class="home">
		<!-- 顶部 -->
		<headers :colors="colors" :locations="locations" :swiperList="swiperList"></headers>
		<!-- 推荐分类菜单 与tab分类中不同 -->
		<classList :categoryList="categoryList"></classList>
		<!-- 公告 -->
		<notice :colors="colors" :noticeList="noticeList"></notice>
		<!-- 栏目 -->
		<column></column>
		<!-- 广告图 -->
		<banner></banner>
		<!-- 热门标题 -->
		<hotstitle :colors="colors"></hotstitle>
		<!-- 推荐商品列表 -->
		<recommend :colors="colors" :dataList="dataList" :loading="loading" :bottoms="bottoms"></recommend>
		<!-- 右侧悬浮菜单栏 -->
		<!-- <suspension :scrollShow="scrollShow" :colors="colors"></suspension> -->
	</view>
</template>

<script>
	var app = getApp();
	import headers from '../../commponent/home/header';
	import classList from '../../commponent/home/classList';
	import notice from '../../commponent/home/notice';
	import column from '../../commponent/home/column';
	import banner from '../../commponent/home/banner';
	import hotstitle from '../../commponent/home/hotstitle';
	import recommend from '../../commponent/home/recommend';
	import suspension from '../../commponent/home/suspension';
	import {
		getlocation
	} from '@/utils/auth.js'
	export default {
		data() {
			return {
				colors: '',
				bottoms: '100',
				scrollShow: false, //是否显示悬浮菜单
				categoryList: [{ //分类列表
					id: 1,
					name: '饼干',
					img: "/static/images/class/food-cookie.png"
				}, {
					id: 2,
					name: '布丁',
					img: "/static/images/class/food-pudding.png"
				}, {
					id: 3,
					name: '甜甜圈',
					img: "/static/images/class/food-doughnut.png"
				}, {
					id: 4,
					name: '面包',
					img: "/static/images/class/food-bread.png"
				}, {
					id: 5,
					name: '薯片',
					img: "/static/images/class/food-chips.png"
				}, {
					id: 6,
					name: '热狗',
					img: "/static/images/class/food-hotdog.png"
				}, {
					id: 7,
					name: '冰淇淋',
					img: "/static/images/class/food-popsicle.png"
				}, {
					id: 8,
					name: '奶油草莓',
					img: "/static/images/class/food-strawberry.png"
				}, {
					id: 9,
					name: '披萨',
					img: "/static/images/class/food-pizza.png"
				}, {
					id: 10,
					name: '蛋黄酥',
					img: "/static/images/class/food-eggyolkcake.png"
				}],
				// 商品列表
				dataList: [{
						title: 'DUNKINDONUTS唐恩都乐美国甜甜圈6个礼盒装 随机搭配6款',
						type: 1,
						goods_id: 201,
						money: '35.90',
						number: 1,
						hmoney: '45.90',
						img: '/static/images/goods/one.jpg',
						youhui: true,
						baoyou: false,
						status: 1, //商品过期状态  0正常  1已失效
						stock: 600,
						sku: [{
							sku_id: 1,
							skuname: '口味',
							child: [{
									tagname: '醇黑巧克力【20枚】',
									id: 2011,
									imgs: 'https://picsum.photos/300/200?4',
									money: '175.78'
								},
								{
									tagname: '草莓味【8枚】',
									id: 2012,
									imgs: 'https://picsum.photos/300/200?5',
									money: '35.90'
								}
							]
						}],
						skuArr: [{
								goods_sku_arr: ['2011'],
								goods_sku_text: '醇黑巧克力【20枚】',
								img: 'https://picsum.photos/300/200?6',
								money: '175.78',
								stock: 345
							},
							{
								goods_sku_arr: ['2012'],
								goods_sku_text: '草莓味【8枚】',
								img: 'https://picsum.photos/300/200?7',
								money: '35.90',
								stock: 255
							},
						]
					},
					{
						title: '真巧 巧克力涂层甜甜圈 早餐蛋糕手撕面包休闲小零食办公室小吃零嘴下午茶点心 500g甜甜圈（拉花款）',
						type: 2,
						goods_id: 202,
						money: '29.9',
						number: 75,
						hmoney: '39.90',
						img: '/static/images/goods/two.jpg',
						youhui: false,
						baoyou: true,
						status: 0, //商品过期状态  0正常  1已失效
						stock: 100,
						sku: [{
							sku_id: 1,
							skuname: '口味',
							child: [{
									tagname: '500g甜甜圈（彩针款）',
									id: 2021,
									imgs: 'https://picsum.photos/300/200?8',
									money: '39.90'
								},
								{
									tagname: '500g甜甜圈（拉花款）',
									id: 2022,
									imgs: 'https://picsum.photos/300/200?9',
									money: '39.90'
								}
							]
						}],
						skuArr: [{
								goods_sku_arr: ['2021'],
								goods_sku_text: '500g甜甜圈（彩针款）',
								img: 'https://picsum.photos/300/200?2',
								money: '39.90',
								stock: 50
							},
							{
								goods_sku_arr: ['2022'],
								goods_sku_text: '500g甜甜圈（拉花款）',
								img: 'https://picsum.photos/300/200?2',
								money: '39.90',
								stock: 50
							},
						]

					},
					{
						title: '钟薛高 钟意你系列 特牛乳*4片 丝绒可可*4片 半巧主义*2 冰淇淋生鲜雪糕 10片装',
						type: 3,
						goods_id: 203,
						money: '152.00 ',
						number: 1,
						hmoney: '162.00',
						img: '/static/images/goods/there.jpg',
						youhui: true,
						baoyou: true,
						status: 0, //商品过期状态  0正常  1已失效
						stock: 200,
						sku: [],
						skuArr: []
					},
					{
						title: '农谣人 原味火山石烤肠1000g/约16根台式原味肠地道肠纯肉肠热狗肠台湾烤肠香肠烧烤肠半熟食火腿肠 台式原味地道肠1kg',
						type: 6,
						goods_id: 204,
						money: '52.00 ',
						number: 1,
						hmoney: '99.00 ',
						youhui: false,
						baoyou: false,
						stock: 100,
						img: '/static/images/goods/six.jpg',
						status: 0, //商品过期状态  0正常  1已失效
						sku: [{
							skuname: '口味',
							sku_id: 1,
							child: [{
									tagname: '台式原味地道肠1kg',
									id: 2041,
									imgs: 'https://picsum.photos/300/200?2',
									money: '52.00 '
								},
								{
									tagname: '台式黑椒味地道肠1kg',
									id: 2042,
									imgs: 'https://picsum.photos/300/200?2',
									money: '53.50'
								}
							]
						}, ],
						skuArr: [{
								goods_sku_arr: ['2041'],
								goods_sku_text: '台式原味地道肠1kg',
								img: 'https://picsum.photos/300/200?2',
								money: '52.00',
								stock: 50
							},
							{
								goods_sku_arr: ['2042'],
								goods_sku_text: '台式黑椒味地道肠1kg',
								img: 'https://picsum.photos/300/200?2',
								money: '53.50',
								stock: 50
							},
						]
					},
					{
						title: '巧妈妈 鸡蛋布甸 下午茶休闲零食儿童果冻布丁125g双层果酱味smzdm 4杯鸡蛋布甸（双层）',
						type: 4,
						goods_id: 205,
						money: '25.80',
						number: 1,
						hmoney: 35.00,
						img: '/static/images/goods/four.jpg',
						youhui: true,
						baoyou: false,
						stock: 500,
						status: 0, //商品过期状态  0正常  1已失效
						skuArr: [{
								goods_sku_arr: ['10', '40'],
								goods_sku_text: '鸡蛋布旬 4杯装',
								img: '/static/images/goods/four.jpg',
								money: '25.80',
								stock: 50
							},
							{
								goods_sku_arr: ['10', '50'],
								goods_sku_text: '鸡蛋布旬 6杯装',
								img: '/static/images/goods/four.jpg',
								money: '32.80',
								stock: 10
							},
							{
								goods_sku_arr: ['10', '60'],
								goods_sku_text: '鸡蛋布旬 8杯装',
								img: '/static/images/goods/four.jpg',
								money: '52.80',
								stock: 60
							},
							{
								goods_sku_arr: ['20', '60'],
								goods_sku_text: '乳酸菌布甸（草莓酱 8杯装）',
								img: 'https://picsum.photos/300/200?2',
								money: '52.80',
								stock: 100
							},
							{
								goods_sku_arr: ['30', '50'],
								goods_sku_text: '乳酸菌布甸（蓝莓酱 8杯装）',
								img: 'https://picsum.photos/300/200?2',
								money: '32.80',
								stock: 1300
							},
						],
						sku: [{
								sku_id: 1,
								skuname: '口味',
								child: [{
										tagname: '鸡蛋布旬',
										id: 10,
										imgs: '/static/images/goods/four.jpg',
										money: '25.80'
									},
									{
										tagname: '乳酸菌布甸（草莓酱）',
										id: 20,
										imgs: 'https://picsum.photos/300/200?2',
										money: '14.80'
									},
									{
										tagname: '乳酸菌布甸（蓝莓酱）',
										id: 30,
										imgs: 'https://picsum.photos/300/200?2',
										money: '30.80'
									}
								]
							},
							{
								sku_id: 2,
								skuname: '数量',
								child: [{
										tagname: '4杯装',
										id: 40,
										imgs: '',
										money: '25.80'
									},
									{
										tagname: '6杯装',
										id: 50,
										imgs: '',
										money: '32.80'
									},
									{
										tagname: '8杯装',
										id: 60,
										imgs: '',
										money: '52.80'
									}
								]
							},
						]
					},
					{
						title: '草莓云南夏季草莓新鲜水果3斤礼盒装 露天种植现摘现发 3斤精品装（4盒顺丰空运）',
						type: 5,
						goods_id: 206,
						money: '59.90',
						number: 200,
						hmoney: '70.90',
						youhui: true,
						baoyou: true,
						img: '/static/images/goods/five.jpg',
						status: 0, //商品过期状态  0正常  1已失效
						stock: 140,
						sku: [{
							sku_id: 1,
							skuname: '种类',
							child: [{
									tagname: '3斤精品装',
									id: 2061,
									imgs: 'https://picsum.photos/300/200?2',
									money: '59.90'
								},
								{
									tagname: '5斤精品装',
									id: 2062,
									imgs: 'https://picsum.photos/300/200?2',
									money: '82.90'
								},
							]
						}, ],
						skuArr: [{
								goods_sku_arr: ['2061'],
								goods_sku_text: '3斤精品装',
								img: 'https://picsum.photos/300/200?2',
								money: '59.90',
								stock: 80
							},
							{
								goods_sku_arr: ['2062'],
								goods_sku_text: '5斤精品装',
								img: 'https://picsum.photos/300/200?2',
								money: '82.90',
								stock: 60
							}
						],
					}
				],
				locations: {

				},
				loading: true,
				swiperList: [{
					img: 'https://picsum.photos/300/200?1'
				}, {
					img: 'https://picsum.photos/300/200?2'
				}, {
					img: 'https://picsum.photos/300/200?3'
				}],
				noticeList: [{
						id: 1,
						title: '甜品港湾,恬美生活'
					},
					{
						id: 2,
						title: '将来有太多未知的甜等待你去尝试'
					}
				]
			};
		},
		components: {
			headers,
			classList,
			notice,
			column,
			banner,
			hotstitle,
			recommend,
			suspension
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			// #ifdef APP-PLUS
			this.bottoms = '0'  //在APP下 规格弹窗的位置发生变化
			// #endif
		},

		/**
		 * 生命周期函数--监听页面初次渲染完成
		 */
		onReady: function() {},

		/**
		 * 生命周期函数--监听页面显示
		 */
		onShow: function() {
			this.setData({
				colors: app.globalData.newColor
			});
			uni.setNavigationBarColor({ //设置标题栏颜色
				backgroundColor: app.globalData.newColor,
				frontColor: '#ffffff'
			});
			// #ifdef H5
			let locations = getlocation() //获取位置信息
			if (locations) {
				this.locations = locations
			}
			// #endif
		},

		/**
		 * 生命周期函数--监听页面隐藏
		 */
		onHide: function() {},

		/**
		 * 生命周期函数--监听页面卸载
		 */
		onUnload: function() {},

		/**
		 * 页面相关事件处理函数--监听用户下拉动作
		 */
		onPullDownRefresh: function() {},

		/**
		 * 页面上拉触底事件的处理函数
		 */
		onReachBottom: function() {
			if (this.dataList.length >= 30) { //模拟上拉加载数据
				this.loading = false
				return
			}
			let data = this.dataList;
			setTimeout(() => {
				this.loading = true
				this.dataList.push(...data);
			}, 500)
		},

		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage: function() {},
		methods: {
			onPageScroll: function(e) {
				if (e.scrollTop >= 500) {
					this.setData({
						scrollShow: true
					});
				} else {
					this.setData({
						scrollShow: false
					});
				}
			}
		}
	};
</script>
<style scoped lang="scss">
	.home {
		margin-bottom: 40rpx;
	}
</style>
