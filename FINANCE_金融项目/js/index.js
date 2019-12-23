// 路由
var router = new VueRouter({
	routes: [
		{ path: '/', component: { template: '#one' } },
		{ path: '/no2', component: { template: '#two' } },
		{ path: '/no3', component: { template: '#three' } },
		{ path: '/no4', component: { template: '#four' } },
		{
			path: '/git', component: { template: '#git' },
			children: [
				{ path: 'type/:git', component: { template: '#gits' } }
			]
		},

	]
})

// 首页
Vue.component('one',{
	template:`
	<div>
            <div class="one"></div>
            <div class="con">
                <div class="con_t1">
                    <div class="con_t1_a">
                        <h2>借款优势</h2>
                        <p>多种信贷方式、额度高、放款快、利率低</p>
                    </div>
                </div>
                <div class="con_t2">
                    <con_t2></con_t2>
                </div>
                <div class="con_t1">
                    <div class="con_t1_a">
                        <h2>申请借贷</h2>
                        <p>快速放款，为您解决资金周转问题</p>
                    </div>
                </div>
                <div class="con_t3">
                    <con_t3></con_t3>
                </div>
                <div class="con_t1">
                    <div class="con_t1_a">
                        <h2>用户常见问题</h2>
                        <p>看看其他用户 都提了哪些问题</p>
                    </div>
                </div>
                <div>
                    <con_t4></con_t4>
                </div>
            </div>
        </div>`
})

// 导航模板
Vue.component('hear_text', {
	template: `
	<div class="fw_table">
	<div class="fw_le">
	   <a href=""> <img src="https://ccdn.goodq.top/caches/47fb4414ff09f08bf175baf1971aaf14/aHR0cHM6Ly81YThmYTlhMzU1YWE5LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvYzA3NmViNjlkYTU0ZDlmZWI0NWUxNjZjNTM0NjliNmYucG5n.png" alt=""></a>
	</div>
	<div class="nav">
		 <a href="#/">网站首页</a>
		 <a href="#/no2">申请贷款</a>
		 <a href="#/no3">行业资讯</a>
		 <a href="#/no4">常见问题</a>
		 <a href="#/git/type/0">关于我们</a>
	</div>
	<div class="nav_icon">
        <span><i>+</i></span>
        <p>400-200-2200</p>
    </div>
   </div>
	`
})

// 首页第一个模板
Vue.component('con_t2', {
	template: `
	<div>
		<div class="con_t2_a" v-for='i in arr'>
			<div style="width: 56px;height: 56px; margin: 25px auto;">
				<img class="con_t2_a_img"  :src="i.img" alt="">
			</div>
			<p style="font-size: 15px;">
				{{i.t1}}
			</p>
			<p style="font-size: 13px;color: #b2b2b2;">
				{{i.t2}}
			</p>
		</div>
	</div>`,
	data() {
		return {
			arr: [
				{
					img: 'https://ccdn.goodq.top/caches/47fb4414ff09f08bf175baf1971aaf14/aHR0cHM6Ly81YThmYTlhMzU1YWE5LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvYTFlODQ2ZTk4NTk4YmNkM2E3MzYwMjMyMTE4ZGRmMDcucG5n.png',
					t1: '手续简单', t2: '一站式服务'
				},
				{
					img: 'https://ccdn.goodq.top/caches/47fb4414ff09f08bf175baf1971aaf14/aHR0cHM6Ly81YThmYTlhMzU1YWE5LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvYzQ0Y2JkNjJmNTY1YTcyZDdiOGViZjYxNGEwODFjZDYucG5n.png',
					t1: '额度高', t2: '最高额度100万'
				},
				{
					img: 'https://ccdn.goodq.top/caches/47fb4414ff09f08bf175baf1971aaf14/aHR0cHM6Ly81YThmYTlhMzU1YWE5LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvNjUwYzI2OTg1OWEzZGUwZDRhODBhYjM1ZjlkOGQ2YmUucG5n.png',
					t1: '利率低', t2: '利息不超过1.4分'
				},
				{
					img: ' https://ccdn.goodq.top/caches/47fb4414ff09f08bf175baf1971aaf14/aHR0cHM6Ly81YThmYTlhMzU1YWE5LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvNDcxZDY3OTZjYzNlNzEyYjY4YTc0MDRhNzVkMTcwNmEucG5n.png',
					t1: '放款快', t2: '1-3个工作日'
				},
				{
					img: 'https://ccdn.goodq.top/caches/47fb4414ff09f08bf175baf1971aaf14/aHR0cHM6Ly81YThmYTlhMzU1YWE5LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvZmZkN2RiNjllNzkwZTVmNGVhMWI5YzMyMjg3MTU0YTkucG5n.png',
					t1: '服务好', t2: '可提前还款'
				},
				{
					img: 'https://ccdn.goodq.top/caches/47fb4414ff09f08bf175baf1971aaf14/aHR0cHM6Ly81YThmYTlhMzU1YWE5LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvNzcyODcwOTgzMjI5NGJjYTc4YjMzZWEyYmVjZjZjYjEucG5n.png',
					t1: '服务好', t2: '可提前还款'
				}

			]
		}
	},
})
// 首页第二个模板
Vue.component('con_t3', {
	template: `
	<div class="con_t3_div">
            <div class="con_t3_a" v-for='i in arr'>
                <div style="width: 93px;height: 68px;margin: 40px auto;">
                    <img :src="i.img" alt="">
                </div>
                <p style="color: #373A41;font-size: 16px;font-family: 微软雅黑;line-height: 22px;line-height: 50px;">
                    {{i.t1}}
                </p>
                <p style="font-size: 14px;color: #b7b7b7;">
                    {{i.t2}}
                </p>
                <p style="font-size: 14px;color: #b7b7b7;">
                    {{i.t3}}
                </p>
                <a href="#">
                    <div class="chakan">
                        <p>查看详情</p>
                    </div>
                </a>
            </div>
        </div>`,
	data() {
		return {
			arr: [
				{
					img: 'https://ccdn.goodq.top/caches/47fb4414ff09f08bf175baf1971aaf14/aHR0cHM6Ly81YThmYTlhMzU1YWE5LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvNjE1YmEyNWY3YWMxYTdlOTVmMjE2YzQwYWNkODRlZTktOTN4NjgucG5n.png',
					t1: '房押贷', t2: '接收二次抵押', t3: '线上开放'
				},
				{
					img: 'https://ccdn.goodq.top/caches/47fb4414ff09f08bf175baf1971aaf14/aHR0cHM6Ly81YThmYTlhMzU1YWE5LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvN2ZjNThjNDVkYzFjMDBkMjViYmFjOGVhMmJhNTZkNDktOTN4NjgucG5n.png',
					t1: '车压贷', t2: '额度约评估价格60%-80%', t3: '可线上办理'
				},
				
				{
					img: 'https://ccdn.goodq.top/caches/47fb4414ff09f08bf175baf1971aaf14/aHR0cHM6Ly81YThmYTlhMzU1YWE5LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvNTAyOTRlNjA2ODE0NmJkZDA3MjY3MjZmZTU1MmFhYmUtOTN4NjgucG5n.png',
					t1: '手续简单', t2: '最高授信额度可达5万元', t3: '可线上办理'
				},
				{
					img: 'https://ccdn.goodq.top/caches/47fb4414ff09f08bf175baf1971aaf14/aHR0cHM6Ly81YThmYTlhMzU1YWE5LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvNzJjM2RhYzJhZTA5ZmFjY2MyOWRmYTUxMDlkMTYzMzItOTN4NjgucG5n.png',
					t1: '手续简单', t2: '快速授信放款', t3: '无需抵押'
				}
			]
		}
	},
})
// 首页第三个模板
Vue.component('con_t4',{
	template:`
	<div style="width: 80%;height:570px; margin: 0 auto;">
            <div class="con_t4_a" v-for='i in arr'>
                <h3 style="font-weight: 500;">
                    {{i.t1}}
                </h3>
                <p style="font-size: 13px;color: #b7b7b7;">
                    {{i.t2}}
                </p>
            </div>
        </div>`,
	data() {
		return {
			arr:[
				{
					t1:'还款方式有那些？',
					t2:'流线式网页布局设计方案和可视化图文编辑，流线式网页布局设计方案和可视化图文内容编...'
				},
				{
					t1:'借款核审一般需要多长时间？',
					t2:'流线式网页布局设计方案和可视化图文编辑，流线式网页布局设计方案和可视化图文内容编...'
				},
				{
					t1:'借款需要支付那些费用？',
					t2:'流线式网页布局设计方案和可视化图文编辑，流线式网页布局设计方案和可视化图文内容编...'
				},
				{
					t1:'借款额度是多少？',
					t2:'流线式网页布局设计方案和可视化图文编辑，流线式网页布局设计方案和可视化图文内容编...'
				}
			]
		}
	},
})

// 第二页
Vue.component('two',{
	template:`
	<div style="background: rgb(241, 241, 241);padding-bottom: 40px;">
            <no1>
                <span slot="weizhi">申请借款</span>
            </no1>
            <div style="width: 80%;margin: 0 auto;padding: 20px 30px;background: #fff;margin-bottom: 10px;">
                <h4 style="font-size: 24px;font-weight: normal;padding-top: 18px;bottom: 7px;">申请借款</h4>
                <p style="color:#808080;font-size: 14px;padding-top: 4px;padding-bottom: 8px;">快速放贷，为您解决资金周转问题</p>
            </div>
            <div style="width: 85%;margin: 0 auto;">
                <con_t3></con_t3>
            </div>
        </div>`
})
// 第三页
Vue.component('three',{
	template:`
	<div style="background: rgb(241, 241, 241);padding-bottom: 40px;">
            <no1>
                <span slot="weizhi">行业资讯</span>
            </no1>
            <div style="width: 80%;margin: 0 auto;background: #fff;overflow: hidden;">
                <div class="top" style="padding-top: 38px;padding-bottom: 16px;padding-right: 13px;padding-left: 12px;">
                    <div style="width: 455px;height: 43px;border-bottom: 1px #bcbcbc solid;">
                        <p><span style="font-size: 24px;color: #333;">用户常见问题</span><span style="color: #bcbcbc;font-size: 12px;">/
                                十万企业用户的共同选择，查看更多</span></p>
                    </div>
                </div>
                <div class="left" style="width: 75%;float: left;padding-bottom: 60px;">
                    <div style="padding-left: 30px;padding-right: 62px;">
                        <no2></no2>
                        <p style="text-align: center;"><span style="border:1px solid #bcbcbc;color: #aaaaaa;font-size: 12px;line-height: 12px;padding: 4px 18px;">浏览更多</span></p>
                    </div>
                </div>
                <div class="right" style="width: 25%;float: right;">
                    <div style="margin-right: 30px;height: 41px;background: #f4f4f4;padding-left: 21px;font-size: 16px;font-weight: 700;color: #ff6363;line-height: 41px;">阅读更多资讯</div>
                    <no3></no3>
                </div>
            </div>
        </div>`
})
// 第四页
Vue.component('four',{
	template:`
	<div style="background: rgb(241, 241, 241);padding-bottom: 40px;">
            <no1>
                <span slot="weizhi">常见问题</span>
            </no1>
            <div style="width: 80%;margin: 0 auto;background: #fff;overflow: hidden;padding-bottom: 60px;">
                <div class="top" style="padding-top: 38px;padding-bottom: 16px;padding-right: 13px;padding-left: 12px;">
                    <div style="width: 455px;height: 43px;border-bottom: 1px #bcbcbc solid;">
                        <p><span style="font-size: 24px;color: #333;">用户常见问题</span><span style="color: #bcbcbc;font-size: 12px;">/
                                十万企业用户的共同选择，查看更多</span></p>
                    </div>
                </div>
                <no4></no4>
            </div>
        </div>`
})
// 第五页
Vue.component('git',{
	template:`
	<div style="background: rgb(241, 241, 241);padding-bottom: 40px;">
            <no1>
                <span slot="weizhi">关于我们</span>
            </no1>
            <div style="width: 80%;margin: 0 auto;background: #fff;overflow: hidden;padding-bottom: 60px;">
                <div class="top" style="padding-top: 38px;padding-bottom: 16px;padding-right: 13px;padding-left: 12px;">
                    <div style="width: 455px;height: 43px;border-bottom: 1px #bcbcbc solid;">
                        <p><span style="font-size: 24px;color: #333;">关于我们</span><span style="color: #bcbcbc;font-size: 12px;">/
                                ABOUT</span></p>
                    </div>
                </div>
                <div style="width: 60%;float: left;box-sizing: border-box;padding: 0 40px 90px 32px;">
                    <p style="color: rgb(128, 128, 128);font-size: 13px;line-height: 30px;">応损捠捡换朳枛朸桸桹桺奿妀。夲夳夵壱売壳圢圤圥圦圩圪囡団囤囥咍咎，咐咑厺厼厽忝忞帄帇帉帊峢；峣峤屴屵屶屷宓宔宖忟忡，忢忣忥忦忨忩忪忬忭忮忯忰忱忲忳忴念忶汹忸忹忺忻忼忾忿怂，怃怄怅怆怇怈怉怊怋怌怍怏怐怑怓怔，怗怘怙怚怛怞怟怡怢怣怤怫怬怭。怮怯怰，怲怵怶怷怸怹怺怼悙怿。恀恁恂恃恄恅，恒恇恈恉恊恌恍恎恏。恑恒！恓恔恖恗恘恙恚恛恜恝恞恠恡恦，恻悀悃悆悇悊。
                        朲朳枛朸桸桹桺奿妀恂恃恄恅恒恇恈恉恊恌恍恎恏。恑恒！恓恔恖恗恘恙恚恛恜恝恞恡。忣忥忦忨忩忪忬忭忮忯忰。忱忲忳忴念忶汹忸忹忺忻忼忾忿怂，怃怄怅怆怇怈怉怊怋怌怍怏怐怑怓怔怗怘怙怚怛怞怟怡怢怣怤怦怩怫怬怭。怮怯怰，怲怳怴怵怶怷怸怹怺怼悙怿。恀恁恂恃恄恅，恒忢忣忥忦忨忩忪忬忭忮忯忰。忱忲忳忴念忶汹忺忻忼忾忿怂，怃怄怅怆怇怈怉怊怋怌怍応损捠捡换，攴朰朲朳枛桺奿妀。夲夳夵壱売壳圢圤圥圦圧圩圪囡団囤囥咍咎.攴朰朲朳枛朸恂恃恄恅恒恇恈恉恊恌恍恎恏。恑恒恔恖恗恘恙恚恛恜恝恞恠恡。忣忥忦忨忩忪忬忭忮忯忰。</p>
                </div>
                <div style="width: 40%;float: left;box-sizing: border-box;">
                    <div style="width: 397px;height: 291px;">
                        <img style="width: 100%;height: 100%;" src="https://ccdn.goodq.top/caches/47fb4414ff09f08bf175baf1971aaf14/aHR0cHM6Ly81YThmYTlhMzU1YWE5LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvOWM1ZjY5NDc4ZjI4MDY4YzhkODI1YjBhYzkyOWVkMDQtNDcweDMyMS5qcGc_p_p100_p_3D.jpg">
                    </div>
                </div>
            </div>

            <div style="width: 80%;margin: 0 auto;background: #fff;overflow: hidden;padding-bottom: 60px;margin-top: 30px;">
                <div class="top" style="padding-top: 38px;padding-bottom: 16px;padding-right: 13px;padding-left: 12px;">
                    <div style="width: 455px;height: 43px;border-bottom: 1px #bcbcbc solid;">
                        <p><span style="font-size: 24px;color: #333;">发展历程</span><span style="color: #bcbcbc;font-size: 12px;">/
                                history</span></p>
                    </div>
                </div>
                <no5></no5>
            </div>
        </div>`
})

Vue.component('no1',{
	template:`<div style="width: 80%;margin: 0 auto;padding-top: 20px;padding-bottom: 20px;">
				<p><span style="color: #7a7a7a;">当前位置：首页 </span>
					<span style="color: #ff7272;">/ <slot name="weizhi"></slot></span></p>
			</div>`
})

Vue.component('no2',{
	template:`<div>
				<div class="lis" style="padding-top: 15px;overflow: hidden;" v-for="i in json">
					<div style="width: 160px;height: 100px;padding-bottom: 25px;padding-right: 25px;float: left;">
						<img style="width: 100%;height: 100%;" :src="i.img">
					</div>
					<div style="width: 600px;float: right;height:100px;padding-bottom: 25px;">
						<h4 style="color: #333333;font-size: 18px;line-height: 18px;margin-bottom: 10px;">{{i.h4}}</h4>
						<p style="padding-top: 5px;padding-bottom: 5px;color: #bababa;font-size: 12px;line-height: 12px;margin-bottom: 5px;">
							<span>发布日期：</span>
							<span>{{i.time}}</span>
							<span>分类：</span>
							<span>常见问题</span>
						</p>
						<p style="color: #999999;font-size: 13px;line-height: 22px;">{{i.p}}</p>
					</div>
				</div>
			</div>`,
	data(){
		return{
			json:[
				{
					img:'https://ccdn.goodq.top/caches/47fb4414ff09f08bf175baf1971aaf14/aHR0cHM6Ly81YThmYTlhMzU1YWE5LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvOWM1ZjY5NDc4ZjI4MDY4YzhkODI1YjBhYzkyOWVkMDQtMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
					h4:'还款方式有那些？',
					time:'2016.08.24',
					p:'流线式网页布局设计方案和可视化图文编辑，流线式网页布局设计方案和可视化图文内容编辑模式让网站制作成为一件轻松的事，流线式网页布局设计方案和可视化图文内容编辑模式...'
				},{
					img:'https://ccdn.goodq.top/caches/47fb4414ff09f08bf175baf1971aaf14/aHR0cHM6Ly81YThmYTlhMzU1YWE5LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvNDI5MWUyMzI3YWQwNTNkYThmYjRkYTk3MTg5NDViNjYtMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
					h4:'借款审核一般需要多长时间？',
					time:'2016.08.24',
					p:'我们是响应式网站的倡导者，流线式网页布局设计方案和可视化图文内容编辑模式让网站制作成为一件轻松的事，流线式网页布局设计方案和可视化图文内容编辑模式让网站制作成为...'
				},{
					img:'https://ccdn.goodq.top/caches/47fb4414ff09f08bf175baf1971aaf14/aHR0cHM6Ly81YThmYTlhMzU1YWE5LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvYmMyZDVlY2YwNmIxMmUxMDYyYTJhNGFmNzhhNTQ5MDItMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
					h4:'借款需要支付那些费用？',
					time:'2016.08.24',
					p:'支持打字传图、自由拖拽，不需要专业编写代码，流线式网页布局设计方案和可视化图文内容编辑模式让网站制作成为一件轻松的事，流线式网页布局设计方案和可视化图文内容编辑...'
				},{
					img:'https://ccdn.goodq.top/caches/47fb4414ff09f08bf175baf1971aaf14/aHR0cHM6Ly81YThmYTlhMzU1YWE5LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvOWM1ZjY5NDc4ZjI4MDY4YzhkODI1YjBhYzkyOWVkMDQtMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
					h4:'还款方式有那些？',
					time:'2016.08.24',
					p:'流线式网页布局设计方案和可视化图文编辑，流线式网页布局设计方案和可视化图文内容编辑模式让网站制作成为一件轻松的事，流线式网页布局设计方案和可视化图文内容编辑模式...'
				},{
					img:'https://ccdn.goodq.top/caches/47fb4414ff09f08bf175baf1971aaf14/aHR0cHM6Ly81YThmYTlhMzU1YWE5LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvNDI5MWUyMzI3YWQwNTNkYThmYjRkYTk3MTg5NDViNjYtMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
					h4:'借款审核一般需要多长时间？',
					time:'2016.08.24',
					p:'我们是响应式网站的倡导者，流线式网页布局设计方案和可视化图文内容编辑模式让网站制作成为一件轻松的事，流线式网页布局设计方案和可视化图文内容编辑模式让网站制作成为...'
				},{
					img:'https://ccdn.goodq.top/caches/47fb4414ff09f08bf175baf1971aaf14/aHR0cHM6Ly81YThmYTlhMzU1YWE5LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvYmMyZDVlY2YwNmIxMmUxMDYyYTJhNGFmNzhhNTQ5MDItMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
					h4:'借款需要支付那些费用？',
					time:'2016.08.24',
					p:'支持打字传图、自由拖拽，不需要专业编写代码，流线式网页布局设计方案和可视化图文内容编辑模式让网站制作成为一件轻松的事，流线式网页布局设计方案和可视化图文内容编辑...'
				}
			]
		}
	}
})

Vue.component('no3',{
	template:`<div>
				<div style="padding: 10px 0;margin-right: 30px;" v-for="i in json">
					<span style="color: #5e5e5e;font-size: 13px;line-height: 19px;"><i class="el-icon-caret-right" style="font-size: 12px;color: #ff6363;"></i>{{i.p}}</span>
					<span style="color: #b2b2b2;font-size: 12px;float: right;margin-right: 10px;">{{i.time}}</span>
				</div>
			</div>`,
	data(){
		return{
			json:[
				{
					p:'还款方式有那些？',
					time:'2016.08.24 '
				},{
					p:'借款审核一般需要多长时间？',
					time:'2016.08.24 '
				},{
					p:'借款需要支付那些费用？',
					time:'2016.08.24 '
				},{
					p:'借款额度是多少？',
					time:'2016.08.24 '
				},{
					p:'我们是响应式网站的倡导者',
					time:'2016.08.24 '
				},{
					p:'十万家企业正在使用我们研发...',
					time:'2016.08.24 '
				},{
					p:'十年行业经验，海内外10万...',
					time:'2016.08.24 '
				},{
					p:'采用世界前沿的人工智能技术',
					time:'2016.08.24 '
				},{
					p:'流线式网页布局设计方案和可...',
					time:'2016.08.24 '
				},{
					p:'让企业的服务真正发挥商业价...',
					time:'2016.08.24 '
				}
			]
		}
	}
})
Vue.component('no4',{
	template:`<div>
				<div class="no4" v-for="i in json" style="width: 48%;box-sizing: border-box;padding: 30px 25px;margin: 0 10px 10px 10px;float: left;background: #f9f9f9;">
					<h4 style="line-height: 24px;font-size: 18px;color: #373A41;font-weight: normal;margin-bottom: 5px;">{{i.h4}}</h4>
					<p style="color: #b7b7b7;font-size: 13px;line-height: 22px;padding-top: 10px;">{{i.p}}</p>
					<span style="font-size: 13px;color: #ff5a47;">阅读正文</span>
				</div>
			</div>`,
	data(){
		return{
			json:[
				{
					h4:'还款方式有那些？',
					p:'流线式网页布局设计方案和可视化图文编辑，流线式网页布局设计方案和可视化图文内容编...',
				},
				{
					h4:'借款审核一般需要多长时间？',
					p:'我们是响应式网站的倡导者，流线式网页布局设计方案和可视化图文内容编辑模式让网站制...',
				},
				{
					h4:'借款需要支付那些费用？',
					p:'支持打字传图、自由拖拽，不需要专业编写代码，流线式网页布局设计方案和可视化图文内...',
				},
				{
					h4:'借款额度是多少？',
					p:'流线式网页布局设计方案和可视化图文编辑，流线式网页布局设计方案和可视化图文内容编...',
				}
			]
		}
	}
})
Vue.component('no5',{
	template:`<div>
				<div style="padding: 5px;overflow: hidden;margin-bottom: 50px;" v-for="i in 4">
					<div style="width: 15%;float: left;">
						<p style="padding-left: 30px;box-sizing: border-box;"><span style="color: #bdbdbd;font-size: 36px;">08-24</span><span
							 style="color: #bdbdbd;font-size: 12px;">2016</span></p>
					</div>
					<div style="width: 80%;float: left;">
						<p style="color: #444444;font-size: 16px;padding-bottom: 4px;">致力于让办公管理变得更简单，响应式网站的倡导者</p>
						<p style="color: #bcbcbc;font-size: 11px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护...</p>
					</div>
					<div style="width: 5%;float: left;color: #cacaca;">></div>
				</div>
			</div>`
})

// 尾部
Vue.component('foot',{
	template:`
	<div style="background: #202020 ;">
                <div style="width: 80%;margin: 0 auto;box-sizing: border-box;padding: 40px 83px;overflow: hidden;">
                    <div style="float: left;width: 25%;box-sizing: border-box;padding: 0 20px;">
                        <p style="color: #fff;margin-bottom: 40px;">关于我们</p>
                        <p style="color:#808080;font-size: 12px;line-height: 30px;">
                            売壳圢圤圥圦圩圪囡団囤囥咍咎，咐咑厺厼厽忝忞帄帇帉帊峢；峣峤屴屵屶屷宓宔宖忟忡，忢忣忥忦忨忩忪忬忭忮忯忰忱忲忳忴念忶汹忸忹忺忻忼忾忿怂</p>
                    </div>
                    <div style="float: left;width: 25%;box-sizing: border-box;padding: 0 20px;padding-left: 30px;">
                        <p style="color: #fff;margin-bottom: 40px;">申请贷款</p>
                        <p style="color:#808080;font-size: 12px;line-height: 30px;">房押贷<br>车押贷<br>薪金贷<br>消费分期</p>
                    </div>
                    <div style="float: left;width: 25%;box-sizing: border-box;padding: 0 20px;">
                        <p style="color: #fff;margin-bottom: 40px;">关于我们</p>
                        <p style="color:#808080;font-size: 12px;line-height: 30px;">关于我们<br>联系我们<br>招贤纳士</p>
                    </div>
                    <div style="float: left;width: 25%;box-sizing: border-box;padding: 0 20px;">
                        <p style="color: #fff;margin-bottom: 40px;">联系我们</p>
                        <p style="color:#808080;font-size: 12px;line-height: 30px;">咨询电话 : 4000-000-100 <br>商务合作 :
                            ab@abcdef.com <br>联系我们 : abcd@abcdef.com</p>
                    </div>
                </div>
                <div style="text-align: center;height: 40px;line-height: 40px;color: #474747;font-size: 12px;">
                    <p> 2000-2020 小额信贷有限公司 苏ICP备 00-20000000-0 业务许可：苏01.02-20000000 江苏省苏州市工业园区金鸡湖大道099号大厦
                        0500-60001000-20000</p>
                </div>
            </div>`
})

new Vue({
	el: '#box',
	router,
})