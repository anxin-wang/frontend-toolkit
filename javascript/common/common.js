//默认值，如果cart[shopid]为空，就赋值空对象
let shop = cart[shopid] = (cart[shopid] || {})

//数据拷贝
// Object.assign方法实行的是浅拷贝，而不是深拷贝。也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。
Object.assign({}, state.orderParam, newParam);

// js中判断变量不为空或null
//相当于判断content=""、content=null、content = undefined、content=0
if (!content) {
    alert("请输出内容！");
    return;
}


// 判断字符串为空的方法
var strings = '';
if (string.length === 0) {}

//Boolean类型设相反的值
this.value = !this.value

//字符串false转为Boolean类型
JSON.parse("false")