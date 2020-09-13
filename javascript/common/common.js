//默认值，如果cart[shopid]为空，就赋值空对象
let shop = cart[shopid] = (cart[shopid] || {})

//数据拷贝
// Object.assign方法实行的是浅拷贝，而不是深拷贝。也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。
Object.assign({}, state.orderParam, newParam);