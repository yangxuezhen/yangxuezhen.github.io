Vue.component('no1', {
	template: "#no1",
	props: ['box_arr'],
	data() {
		return {
			arr: this.box_arr,
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
Vue.component('no2',{
	template:'#no2',
	props:['text_arr'],
	data() {
		return {
			json:this.text_arr
		}
	},
})
new Vue({
	el: "#box",
	data: {
		arr: [
			'https://54d4a4629fb6b.t73.qifeiye.com/qfy-content/uploads/2015/06/27f237e6b7f96587b6202ff3607ad88a.jpg',
			'https://54d4a4629fb6b.t73.qifeiye.com/qfy-content/uploads/2015/06/c6bdf6f65f3845da9085e9ae5790b494.jpg',
			'https://54d4a4629fb6b.t73.qifeiye.com/qfy-content/uploads/2015/06/6593d7b12fd418cdb35bbf438de72f66.jpg'
		],
		arr1: [
			{
				img:'https://ccdn.goodq.top/caches/569b046fc16663a994ea33d5a2a60b54/aHR0cHM6Ly81NGQ0YTQ2MjlmYjZiLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTUvMDYvZDVkNGNjN2IwOWQxODQzNTE3YWNjOTM2MWY4ZjY2NWUtNDUweDQ1MC5qcGc_p_p100_p_3D.jpg',
				t1:'岁月',
				t2:'哪知岁月总是催人老，等到知时已迟了'
			},
			{ 
				img:'https://ccdn.goodq.top/caches/569b046fc16663a994ea33d5a2a60b54/aHR0cHM6Ly81NGQ0YTQ2MjlmYjZiLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTUvMDYvYzk1MTI1NjVlZjYxOTRjYTY2NGRjNDFlYzBkZTdhNTMtNDUweDQ1MC5qcGc_p_p100_p_3D.jpg',
				t1:'风景',
				t2:'再美的风景，也需要欣赏他的人'
			},
			{
				img:'https://ccdn.goodq.top/caches/569b046fc16663a994ea33d5a2a60b54/aHR0cHM6Ly81NGQ0YTQ2MjlmYjZiLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTUvMDYvYmJkOTdiMDBjNTM5ODAxZTMyMzE3YWI1NTA4NjdlYzQtNDUweDQ1MC5qcGc_p_p100_p_3D.jpg',
				t1:'旅游日记',
				t2:'旅行重要的不是终点，而是过程'
			},
			{
				img:'https://ccdn.goodq.top/caches/569b046fc16663a994ea33d5a2a60b54/aHR0cHM6Ly81NGQ0YTQ2MjlmYjZiLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTUvMDYvNTI4OTUzNzI3ZWYzYTRlMWM0NDFjNjA3ODUzNGMzOWItNDUweDQ1MC5qcGc_p_p100_p_3D.jpg',
				t1:'相爱的人',
				t2:'犹如黑暗中的烛光，照亮了整个人类的历史'
			},
			{
				img:' https://ccdn.goodq.top/caches/569b046fc16663a994ea33d5a2a60b54/aHR0cHM6Ly81NGQ0YTQ2MjlmYjZiLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTUvMDYvNWRiNThlN2IyMWI5MDY0Y2E1YWY0OWVmZTdiN2E4YjItNDUweDQ1MC5qcGc_p_p100_p_3D.jpg',
				t1:'建筑',
				t2:'不同的是外形，相同的是内在'
			},
			{
				img:'https://ccdn.goodq.top/caches/569b046fc16663a994ea33d5a2a60b54/aHR0cHM6Ly81NGQ0YTQ2MjlmYjZiLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTUvMDYvZDVkNGNjN2IwOWQxODQzNTE3YWNjOTM2MWY4ZjY2NWUtNDUweDQ1MC5qcGc_p_p100_p_3D.jpg',
				t1:'神奇的自然',
				t2:'有一种神奇叫做孤独的孕育'
			}
		]
	}
})