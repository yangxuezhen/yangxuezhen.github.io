// 路由
var router = new VueRouter({
	routes: [
		{ path: '/', component: { template: '#index' } },
		{
			path: '/list', component: { template: '#list' },
			children: [
				{ path: 'type/:list', component: { template: '#lists' } }
			]
		},
		{
			path: '/git', component: { template: '#git' },
			children: [
				{ path: 'type/:git', component: { template: '#gits' } }
			]
		},
		{ path: '/no2', component: { template: '#index2' } },
		{ path: '/no3', component: { template: '#index3' } },

	]
})

// 数据1
Vue.component('l_name', {
	template: `
	<div class="zr_one">
            <div class="d_boder" v-for='i in arr1'>
                <p>{{i.t1}}</p>
                <h5>{{i.t2}}</h5>
            </div>
        </div>`,
	data() {
		return {
			arr1: [
				{ t1: '12000+', t2: '成功案例' },
				{ t1: '010+', t2: '解决方案' },
				{ t1: '200+', t2: '合作伙伴' },
				{ t1: '050+', t2: '技术专利' }
			],
		}
	},
})
// 数据2 产品系列
Vue.component('t_name', {
	template: `
	<div>
	<div style="height: 121px; width: 80%;margin: 0 auto;text-align: center;">
		<div class="t_new">
			<p>NEWS</p>
		</div>
		<div class="t_new2">
			<p>产品系列</p>
		</div>
	</div>
	<!-- 数据二 -->
	<div class="ft">
		<div class="ft_three" v-for='i in arr'>
			<div class="ft_three_a">
				{{i.t1}}
			</div>
			<span class="ler">
				<p></p>
			</span>
			<div class="ft_three_b">
				{{i.t2}}
			</div>
			<div class="ft_btn">
				<p>→</p>
			</div>
		</div>

	</div>
</div>
	`,
	data() {
		return {
			arr: [
				{ t1: '医疗PPP有望成后起之秀 概念股早...', t2: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网...' },
				{ t1: '国产高端医疗设备凭高性价比应对...', t2: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网...' },
				{ t1: '医疗器械国产化命脉：“供应商”...', t2: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网' },
			],
		}
	},
})

// 数据3 产品系列
Vue.component('s_name', {
	template: `
	<div style="height: 550px;padding: 0px 0px;">
			
				<div style="height: 121px; width: 100%;margin: 0 auto;text-align: center;background: #fff;">
					<div class="t_new">
						<p>PRODUCT</p>
					</div>
					<div class="t_new2">
						<p>产品系列</p>
					</div>
				</div>
			
            <div class="th_one">
                <div class="th_thr" v-for='i in arr'>
                    <div>
                        <img :src="i.img" alt="">
                    </div>
                    <div style="height: 50px;line-height: 50px;">
                        {{i.t1}}
                    </div>
                    <div style="height: 50px;">
                        {{i.t2}}
                    </div>
                </div>
            </div>
        </div>`,
	data() {
		return {
			arr: [
				{
					img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvMDdiNzYwNTRjMjQwOWZmN2YwM2MxZTFlMjlmOTk4YTYtMjMweDIzMC5wbmc_p_p100_p_3D.png',
					t1: 'THE PROJECT',
					t2: 'NAME 01'
				},
				{
					img: ' https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvOTAxNzllOTM4ZmFhMTgzZjhiMDFjODgwZjAzNzk3NjctMjMweDIzMC5wbmc_p_p100_p_3D.png',
					t1: 'THE PROJECT',
					t2: 'NAME 02'
				},
				{
					img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvM2JlMmUyNDFkNTM4NjBmZmRkNzMzNjNiOWJiMjdjNTMtMjMweDIzMC5wbmc_p_p100_p_3D.png',
					t1: 'THE PROJECT',
					t2: 'NAME 03'
				},
				{
					img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDcvZjZmODI0YzZlNGJlZWQ1ZDI0ZmRlZGRlZDBkZmY2ZDktMjMweDIzMC5wbmc_p_p100_p_3D.png',
					t1: 'THE PROJECT',
					t2: 'NAME 04'
				},
			],
		}
	},
})
//轮播图组件
Vue.component('no1', {
	template: `
	<div style="position:relative">
                <transition :name="tran" v-for="(i,$index) in arr">
                    <div style="width: 427px;height:392px;margin-left:36%; position:absolute;;" v-show="$index==index">
                        <img :src="i" ref="img"/>
                    </div>
                </transition>
                <div class="l" @click="l">
                    <
                </div>
                <div class="r" @click="r">
                    >
                </div>
            </div>`,
	props: ['box_arr'],
	data() {
		return {
			arr: [
				'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvZmVkNjAyMDAyZTZiNjRkYjVhZDg0MmEwN2U5Yjg5ODYucG5n.png',
				'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvODBkMjY5NjYzNDJmNTM1ZjdkYmEwMjY2OTNmMmQ5ZjcucG5n.png',
				'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvNzY5MDExMmQ0MjIzN2Y5YTg0OWVjNjc0N2NmOGMxYWYucG5n.png',
			],
			index: 0,
			tran: 'l'
		}
	},
	methods: {
		l() {
			this.tran = 'l'
			this.index++
			if (this.index >= this.arr.length) {
				this.index = 0
			}
		},
		r() {
			this.tran = 'r'
			this.index--
			if (this.index <= -1) {
				this.index = this.arr.length - 1
			}
		}
	},
	mounted() {
		var img = this.$refs.img[0]
		img.onload = () => {
			var h = this.$refs.img[0].offsetHeight
			for (var i = 0; i < this.$refs.img.length; i++) {
				this.$refs.img[i].style.height = h + 'px'
			}
			this.$el.style.height = h + 'px'
		}
	}
})

// 头部组件
Vue.component('hear_text', {
	template: `
	<div class="fw_table">
	<div class="fw_le">
	   <a href=""> <img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvYTNkMjAyZDQ0M2I5NzNiYThiYjkyNGUzYWU3N2UzYjYucG5n.png" alt=""></a>
	</div>
	<div class="nav">
		 <a href="#/">首页</a>
		 <a href="#/list/type/all">产品系列</a>
		 <a href="#/git/type/0">新闻中心</a>
		 <a href="#/no2">加入我们</a>
		 <a href="#/no3">联系我们</a>
	</div>
   </div>
	`
})

// 底部组件
Vue.component('foot_text', {
	data() {
		return {
			foot: [
				{
					t1: '关于我们',
					t2: '可视化图文内容编辑让网站制作和维护成为一件',
					t3: '轻松的事。普通用户还是专业制作人员都能使用',
					t4: '起飞页设计出最具专业水准的网站。'
				},
				{
					t1: '联系我们',
					t2: '咨询电话 : 4000-000-100',
					t3: '商务合作 : abc@abcde.com',
					t4: '联系我们 : abcd@abcde.com'
				},
				{
					t1: '帮助与支持',
					t2: '帮助中心',
					t3: '服务条款',
					t4: '常见问题'
				}
			],
		}
	},
	template: `
	<div class="bottom">
	<div style="width: 90%; padding: 20px 40px;margin: 0 auto;display: flex;">
		<div class="fot" style="flex: 1;  color:#a9a9a9;"   v-for='i in foot' > 
		   <div style="font-size: 15px; color: #393939;margin-bottom: 25px;font-weight: bold;">
			   {{i.t1}}
		   </div>
			<div style="font-size: 12px;">
				{{i.t2}}
			</div>
			<div style="font-size: 12px;margin: 10px 0;">
				{{i.t3}}
			</div>
		   <div style="font-size: 13px;">
				{{i.t4}}
		   </div>
		</div>
		<div style=" flex: 1;font-weight: bold;">
		   <div style="margin-bottom: 25px;">关注我们</div>
		   <img style="width: 76px;height: 76px;" src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS84ZjM0YTQ3OWZiZjExZWE5NzUwMmI2ZWUyYWIwODJhNS5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMDg3Mw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
		</div>
	</div>
	<div style="width: 100%;background: none center top repeat rgb(240, 240, 240);">
		<div style="width:95%; height: 30px;text-align: center; padding: 15px 0 0 ;margin: 0 auto;">
			<p style="font-size: 12px;color:#808080;">版权所有 有限公司©2020   地址：苏州市工业园区金鸡湖大道99号    苏ICP备0001000号</p>
		</div>
	</div>
</div>
	`
})
//产品系列模板
Vue.component('list', {
	template: `
	<div>
            <div style="padding-top: 50px; height: 121px; width: 100%;margin: 0 auto;text-align: center;background: #fff;">
                <div class="t_new">
                    <p>PRODUCT</p>
                </div>
                <div class="t_new2">
                    <p>产品系列</p>
                </div>
            </div>
            <div class="t_max">
                <div>
                    <a href="#/list/type/all">全部设备</a>
                </div>

                <div>
                    <a href="#/list/type/0">设备分类一</a>
                </div>

                <div style='width: 200px;'>
                    <a href="#/list/type/1">设备分类二</a>
                </div>
                <div style='width: 200px;'>
                    <a href="#/list/type/2">设备分类三</a>
                </div>
            </div>
            <div style="min-width: 90%;margin: 0 auto;">
                <router-view></router-view>
            </div>
        </div>`
})
// 首页模板
Vue.component('index', {
	template: `
	<div class="max">
            <div class="bag"></div>
            <div class="in1">
                <div class="in_top">
                    <h3> 主推产品 </h3>
                    <p>PRODUCT</p>
                    <span></span>
                </div>
<!-- 轮播图 -->
                <div class="bt">
                    <no1 style="width: 100%;margin: 0 auto;"></no1>
                </div>
                <div class="nt">
                    <span style="font-size: 60px;">U</span>
                    <span style="font-size: 60px;">m</span>
                    <span style="font-size: 26px;">360</span>
                    <p style="font-size: 16px;color: #393939;font-weight: 700;">精细快速低剂量成像，高效安全扫描体验</p>
                </div>

                <div class="zt">
                    <l_name></l_name>
                </div>
            </div>
            <div class="tet-bot">
                <div class="text_two">
                    <t_name></t_name>
                </div>
            </div>
            <div class="three_text">
                <s_name></s_name>
            </div>
        </div>`
})

// 产品导航数据
Vue.component('two_text', {
	data() {
		return {
			arr: [
				{
					id: '0',
					tid: 'all',
					img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvODliOWE1ZWI3YjZhYjZkNWZjZjFiNjEyNDAyOWFhMWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
					t1: '仪器设备Um350c',
					t2: '编辑设备副主题',
				},
				{
					id: '2',
					tid: 'all',
					img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvOTQ3M2MwZWI4ODE4ZmYzM2Y5OGFmYWY1ODg2N2I4ZjgtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
					t1: '仪器设备Um350c',
					t2: '编辑设备副主题',
				},
				{
					id: '1',
					tid: 'all',
					img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvY2Y4YzM5NDJmMjU5YThmYmMzMDA3OWNiMTQ2NjE2MWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
					t1: '仪器设备Um350c',
					t2: '编辑设备副主题',
				},
				{
					id: '0',
					tid: 'all',
					img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvMDE1MmFkNTI5MjBkOWM3YTY4NmM5MjZjOTNhZTczMmMtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
					t1: '仪器设备Um350c',
					t2: '编辑设备副主题',
				},
				{
					id: '2',
					tid: 'all',
					img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvOTVlZjIxODM2NWUyOGJiODdhNjkwNWE3NDI4N2IxNWQtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
					t1: '仪器设备Um350c',
					t2: '编辑设备副主题',
				},
				{
					id: '1',
					tid: 'all',
					img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvMjZmZDhlZTY1YmM4YTcwZWZkNGNhOWI3OWFmMDg1NWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
					t1: '仪器设备Um350c',
					t2: '编辑设备副主题',
				},
				{
					id: '0',
					tid: 'all',
					img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvN2Q4YTg0M2ZjODJjNDE3ODdkNTUxNTI1MGZjOWJjZDQtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
					t1: '仪器设备Um350c',
					t2: '编辑设备副主题',
				},
				{
					id: '2',
					tid: 'all',
					img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvMWM4ODFjMGI3Y2JlMzcwZDUwZjNlOGIzN2U1NzE5ODYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
					t1: '仪器设备Um350c',
					t2: '编辑设备副主题',
				}

			],
		}
	},
	template: `
	<div style="width: 80%;margin: 0 auto; background: red;">
		
			 <div class="two_max" v-for='i in arr' v-if="i.id == $route.params.list||i.tid == $route.params.list">
			 <div class="hit_border"></div>
                <div style=" height: 90%; padding: 3px 5px;background: #e9e9e9;margin: 3px 10px;">
                    <div style="width: 100%; text-align: center;">
                        <img style="width: 210px;height: 210px;" :src="i.img" alt="">
                    </div>
                    <div style="width: 100%;">
                        <p style="text-align: center;font-size: 14px;color: #333;line-height: 50px;">
                            {{i.t1}}
                        </p>
                        <p style="text-align: center;font-size: 12px;color: #999;">
                            {{i.t2}}
                        </p>
                    </div>
                </div>
			</div>
    </div>`

})
// 新闻中心导航
Vue.component('nav_git',{
	template:`
	<div style="min-width: 1200px;width: 80%; margin: 0 auto;">
            <div class="git_tet">
                <li>
                    <a href="#/git/type/0">全部咨询</a>
                </li>

                <li>
                    <a href="#/git/type/1">企业动态</a>
                </li>

                <li>
                    <a href="#/git/type/2">行业资讯</a>
                </li>
            </div>
            <div style="width: 800px;float:left;">
                <router-view></router-view>
            </div>
        </div>`
})
//新闻中心数据
Vue.component('git', {
	template: `
	<div style="margin-top: 50px;">
         <div class="git_text" v-for='i in arr'>
            <div class="hove" style="width: 160px;height: 110px;float: left;margin-right: 20px;position: relative;">
                <img class="gray" :src="i.img" alt="">
            </div>
            <div class="p_col">
                <h5 style="font-size:16px;color:#000;font-weight: 400;">{{i.t1}}</h5>
                <span style="font-size:12px;color:#afafaf;padding: 13px 0;display: inline-block;">{{i.t2}}</span>
                <p style="font-size:12px;color:#8c8c8c;">{{i.t3}}</p>
            </div>
         </div>
        </div>`,
	data() {
		return {
			arr: [
				{
					img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvYjg2MjE5ZjFiZGY5NGI4ZjI1NGJlNzRmM2FmOWYwYTQtMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
					t1: '医疗PPP有望成后起之秀 概念股早盘活跃',
					t2: '发布日期：2017年03月15日',
					t3: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...'
				},
				{
					img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvYjNiYTc5YzZhYWVmOGRmMjQzNmVmNjNlYjY1OWFiODYtMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
					t1: '医疗PPP有望成后起之秀 概念股早盘活跃',
					t2: '发布日期：2017年03月15日',
					t3: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...'
				},
				{
					img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvYjE2N2Y5ZWFhNjZiZWUwMWI3YzAzNzZlODI2OGQxNTYtMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
					t1: '医疗PPP有望成后起之秀 概念股早盘活跃',
					t2: '发布日期：2017年03月15日',
					t3: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...'
				},
				{
					img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvZTY0ZDU0MTRhMzBlMjE5ZjUyNTE3OTVjNmQ1NThhZGMtMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
					t1: '医疗PPP有望成后起之秀 概念股早盘活跃',
					t2: '发布日期：2017年03月15日',
					t3: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...'
				},
				{
					img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDgvZWY5ZGYwNDViYzVmZDE0ZjA4ZTRiMjA1YzYxNjYyZDQtMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
					t1: '医疗PPP有望成后起之秀 概念股早盘活跃',
					t2: '发布日期：2017年03月15日',
					t3: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...'
				},
				{
					img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvNTAzZmQ2N2U3OTkxMDU5NTFmOGUwNDk0ODU1ZTVjNTEtMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
					t1: '医疗PPP有望成后起之秀 概念股早盘活跃',
					t2: '发布日期：2017年03月15日',
					t3: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...'
				},
				{
					img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvOTVlZjIxODM2NWUyOGJiODdhNjkwNWE3NDI4N2IxNWQtMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
					t1: '医疗PPP有望成后起之秀 概念股早盘活跃',
					t2: '发布日期：2017年03月15日',
					t3: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...'
				},
			]
		}
	},
})
//加入我们
Vue.component('index2', {
	template: `
	<div>
			<div class="box">
				<div class="left">加入我们</div>
				<div class="right">
					<div class="right-top">
						<div class="aa">
							<h3>区域销售经理</h3>
							<p>发布日期 : 2016-08-10</p>
						</div>
						<div class="bb">
							<p>公司事业部：<strong>某某公司</strong></p>
							<p class="p">职位性质：<strong>制造/生产/加工</strong></p>
							<p>工作地点：<strong>北京</strong></p>
							<p class="p">招聘人数：<strong>10人</strong></p>
						</div>
						<div class="cc">
							<ul class="one">
								<p>职位概述：</p>
								<li>负责公司全产品华东区域分销工作。</li>
							</ul>
							<ul class="two">
								<p>职位描述：</p>
								<li>1. 负责指定地区设备的市场推广工作，完成各项销售目标；</li>
								<li>2. 负责完成订单并跟进，确保产品能够及时安装，提高客户满意度；</li>
								<li>3. 参与招投标工作，协调市场、产品、销售、物流和服务部门参与项目后期工作；</li>
								<li>4. 参与区域市场营销活动,了解参与此类活动的客户信息和动态；</li>
								<li>5. 定期拜访客户，收集客户需求信息并形成拜访报告,协调相关部门解决客户提出的问题；</li>
								<li>6. 参加销售培训，完成市场信息的收集和分析，周期性向销售经理汇报总结。</li>
							</ul>
							<ul class="three">
								<p>任职条件：</p>
								<li>1. 理工科相关专业，大学本科以上学历；</li>
								<li>2. 5年以上相关行业销售岗位经验，有大型设备销售经验者优先；</li>
								<li>3. 掌握公司所在的行业动态，了解公司所经营的产品技术特点；</li>
								<li>4. 优秀的沟通与执行能力，良好的客户服务意识，高度的敬业精神；</li>
								<li>5. 熟练使用WORD，EXCEL，POWERPOINT等办公软件，良好的英语应用能力。</li>
							</ul>
							<div class="shen">
							<a href="#">申请该职位</a>
							</div>
						</div>
					</div>
					<div class="right-top">
						<div class="aa">
							<h3>区域销售经理</h3>
							<p>发布日期 : 2016-08-10</p>
						</div>
						<div class="bb">
							<p>公司事业部：<strong>某某公司</strong></p>
							<p class="p">职位性质：<strong>制造/生产/加工</strong></p>
							<p>工作地点：<strong>北京</strong></p>
							<p class="p">招聘人数：<strong>10人</strong></p>
						</div>
						<div class="cc">
							<ul class="one">
								<p>职位概述：</p>
								<li>负责公司全产品华东区域分销工作。</li>
							</ul>
							<ul class="two">
								<p>职位描述：</p>
								<li>1. 负责指定地区设备的市场推广工作，完成各项销售目标；</li>
								<li>2. 负责完成订单并跟进，确保产品能够及时安装，提高客户满意度；</li>
								<li>3. 参与招投标工作，协调市场、产品、销售、物流和服务部门参与项目后期工作；</li>
								<li>4. 参与区域市场营销活动,了解参与此类活动的客户信息和动态；</li>
								<li>5. 定期拜访客户，收集客户需求信息并形成拜访报告,协调相关部门解决客户提出的问题；</li>
								<li>6. 参加销售培训，完成市场信息的收集和分析，周期性向销售经理汇报总结。</li>
							</ul>
							<ul class="three">
								<p>任职条件：</p>
								<li>1. 理工科相关专业，大学本科以上学历；</li>
								<li>2. 5年以上相关行业销售岗位经验，有大型设备销售经验者优先；</li>
								<li>3. 掌握公司所在的行业动态，了解公司所经营的产品技术特点；</li>
								<li>4. 优秀的沟通与执行能力，良好的客户服务意识，高度的敬业精神；</li>
								<li>5. 熟练使用WORD，EXCEL，POWERPOINT等办公软件，良好的英语应用能力。</li>
							</ul>
							<div class="shen">
							<a href="#">申请该职位</a>
							</div>
						</div>
					</div><div class="right-top">
						<div class="aa">
							<h3>区域销售经理</h3>
							<p>发布日期 : 2016-08-10</p>
						</div>
						<div class="bb">
							<p>公司事业部：<strong>某某公司</strong></p>
							<p class="p">职位性质：<strong>制造/生产/加工</strong></p>
							<p>工作地点：<strong>北京</strong></p>
							<p class="p">招聘人数：<strong>10人</strong></p>
						</div>
						<div class="cc">
							<ul class="one">
								<p>职位概述：</p>
								<li>负责公司全产品华东区域分销工作。</li>
							</ul>
							<ul class="two">
								<p>职位描述：</p>
								<li>1. 负责指定地区设备的市场推广工作，完成各项销售目标；</li>
								<li>2. 负责完成订单并跟进，确保产品能够及时安装，提高客户满意度；</li>
								<li>3. 参与招投标工作，协调市场、产品、销售、物流和服务部门参与项目后期工作；</li>
								<li>4. 参与区域市场营销活动,了解参与此类活动的客户信息和动态；</li>
								<li>5. 定期拜访客户，收集客户需求信息并形成拜访报告,协调相关部门解决客户提出的问题；</li>
								<li>6. 参加销售培训，完成市场信息的收集和分析，周期性向销售经理汇报总结。</li>
							</ul>
							<ul class="three">
								<p>任职条件：</p>
								<li>1. 理工科相关专业，大学本科以上学历；</li>
								<li>2. 5年以上相关行业销售岗位经验，有大型设备销售经验者优先；</li>
								<li>3. 掌握公司所在的行业动态，了解公司所经营的产品技术特点；</li>
								<li>4. 优秀的沟通与执行能力，良好的客户服务意识，高度的敬业精神；</li>
								<li>5. 熟练使用WORD，EXCEL，POWERPOINT等办公软件，良好的英语应用能力。</li>
							</ul>
							<div class="shen">
							<a href="#">申请该职位</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	`,

})
//底部模板
Vue.component('index3',{
	template:`
	<div style="padding: 0 40px;min-width: 1280px; width:80%;margin: 50px auto;">
           <div class="int_left">
                <div class="int_p" >
                    <i></i>
                    <p>联系我们</p>
                    <i></i>
                </div>
                <div style="line-height: 28px;margin-bottom: 20px;">
                    <p style="font-size:16px ;color: #000;">Um生物科技有限公司</p>
                    <p style="font-size:14px;color:#a9a9a9;">Um biotechnology Co.,Ltd</p>
                </div>
                <div style="font-size:14px;color: #808080;line-height: 28px;margin: 20px 0;">
                    <li>联系电话 :  1000 8000</li>
                    <li>销售热线： 400 8888 8888</li>
                    <li>技术服务： 400 6666 6666</li>
                    <li>公司传真： 1000 8000</li>
                </div>
                <div style="font-size:13px;color: #808080;">
                    <p>苏州市工业园区金鸡湖大道0号某某大厦0室</p>
                </div>
                <div>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
           </div>
           <div class="int_right">

           </div>
        </div>`
})
new Vue({
	el: '#box',
	router,
	data: {

	}
}) 