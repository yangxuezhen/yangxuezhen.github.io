
Vue.component('lee', {
	template: '#no1',
	props: ['max_arr'],
	data(){
		return{
			json:this.max_arr,
		}
	}
})

new Vue({
	el: '#box',
	data: {
		arr: [
			{
				img: 'https://ccdn.goodq.top/caches/85e9413af2fb7f593b2c9e26f027fb64/aHR0cDovLzVkNmNhYzk1OGU3MWYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC84MzlkODFmYzAxOWZmYzE1ZjM3NmQ3NmM2ZmZkMDVjNC5qcGc_p_p100_p_3D.jpg',
				t1: '音乐唱片设计',
				t2: '更为直接的呈现当下设计与文化·商业·...',
				
			},
			{
				img: 'https://ccdn.goodq.top/caches/85e9413af2fb7f593b2c9e26f027fb64/aHR0cDovLzVkNmNhYzk1OGU3MWYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC82ZjA5NTkwZmExNjlhM2JjOGFmNmM4NzZhYjNhMGUyOS5qcGc_p_p100_p_3D.jpg',
				t1: '名片设计',
				t2: '名片是身份的象征',
				
			},
			{
				img: 'https://ccdn.goodq.top/caches/85e9413af2fb7f593b2c9e26f027fb64/aHR0cDovLzVkNmNhYzk1OGU3MWYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9mYTZjM2U5ZThmODgxZTRkZTNjZDY3MGZkYmY4MGYwNi5qcGc_p_p100_p_3D.jpg',
				t1: '小摆饰',
				t2: '软装饰品托盘小摆件人物艺术陈设家居摆件',
				
			},
			{
				img: 'https://ccdn.goodq.top/caches/85e9413af2fb7f593b2c9e26f027fb64/aHR0cDovLzVkNmNhYzk1OGU3MWYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9lNjU4MjI4YzY2ZjY1N2E4ODJmYzMyMWU1ODZmNzE3ZS5qcGc_p_p100_p_3D.jpg',
				t1: '书籍装帧',
				t2: '我们加入的协会组织',
				
			},
			{
				img: 'https://ccdn.goodq.top/caches/85e9413af2fb7f593b2c9e26f027fb64/aHR0cDovLzVkNmNhYzk1OGU3MWYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC8xMTQ1ZjhiNjVmZTljMjAwZGEwMDc5ZDUyNDU1NTVlYS5qcGc_p_p100_p_3D.jpg',
				t1: '广告商标',
				t2: '我们设计的广告商标'
			},
			{
				img: 'https://ccdn.goodq.top/caches/85e9413af2fb7f593b2c9e26f027fb64/aHR0cDovLzVkNmNhYzk1OGU3MWYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9lYTczZDkyN2I3MmNiOWZkMjZkY2NkMDZlNDBhOWFiMS5qcGc_p_p100_p_3D.jpg',
				t1: '衣架设计',
				t2: '挂衣服这件事，设计师说衣架也大有门道'
			},
			{
				img: 'https://ccdn.goodq.top/caches/85e9413af2fb7f593b2c9e26f027fb64/aHR0cDovLzVkNmNhYzk1OGU3MWYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC83MGM4ZjlmN2Y1NzA2ZjcwNThlMzc5YTlkZTU0ZjgwZi5qcGc_p_p100_p_3D.jpg',
				t1: '标签设计',
				t2: '快捷轻松地设计标签'
			},
			{
				img: 'https://ccdn.goodq.top/caches/85e9413af2fb7f593b2c9e26f027fb64/aHR0cDovLzVkNmNhYzk1OGU3MWYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9lYjA1NjEwN2FlOTBhZDYyZGQ1NWQ5MzIxZWJiYzg5Mi5qcGc_p_p100_p_3D.jpg',
				t1: '衬衫设计',
				t2: '设计的衣服侧重于是一件“艺术品'
			},
			{
				img: 'https://ccdn.goodq.top/caches/85e9413af2fb7f593b2c9e26f027fb64/aHR0cDovLzVkNmNhYzk1OGU3MWYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9mMTA5NmU0OTFmNzg1YTZjYzZmMDdjYTU0Zjc0Y2Y5MC5qcGc_p_p100_p_3D.jpg',
				t1: '短袖设计',
				t2: '设计的衣服侧重于是一件“艺术品'
			},
			{
				img: 'https://ccdn.goodq.top/caches/85e9413af2fb7f593b2c9e26f027fb64/aHR0cDovLzVkNmNhYzk1OGU3MWYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC8wYzc0YmI1ZDQ1MzRhYWI2NDNjZTFkMmVmNjA2NGFkNi5qcGc_p_p100_p_3D.jpg',
				t1: '烛台摆饰',
				t2: '小摆饰，大学问'
			},
			{
				img: 'https://ccdn.goodq.top/caches/85e9413af2fb7f593b2c9e26f027fb64/aHR0cDovLzVkNmNhYzk1OGU3MWYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9jMmFmYTVhYTg2YzU3ZjViMzZkZDE5YmFiNzM5ZTgxZS5qcGc_p_p100_p_3D.jpg',
				t1: 'logo设计',
				t2: '我们设计的广告商标'
			},
			{
				img: 'https://ccdn.goodq.top/caches/85e9413af2fb7f593b2c9e26f027fb64/aHR0cDovLzVkNmNhYzk1OGU3MWYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9lNWU3YWM0NzU2NjkxMTEwNGY2ZDE5ODhkZWEzYTJmNi5qcGc_p_p100_p_3D.jpg',
				t1: '音响摆饰',
				t2: '小摆饰，大学问'
			}
		]
	}
})


















