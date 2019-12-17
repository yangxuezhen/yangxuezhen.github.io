
var routes = [
    {
        path:'/',
        component:{template:'#no1'}
    },
    {
        path:'/no2',
        component:{template:'#no2'},
        children:[
            {path:'/',component:{template:'<p>第二</p>'}},
            {path:'no1',component:{template:'<p>第二遍</p>'}}
        ]
    },
    {
        path:'/no3',
        component:{template:'#no3'}
    }
]

var router = new VueRouter({
    routes
})

new Vue({
    el:'#box',
    router,
    mounted() {
        
    },
    watch: {//监听数据
        '$route.path'(a,b){
            console.log(a,b);
        }
    },
})






