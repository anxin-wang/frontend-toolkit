1.根据变量的值来动态加载 css

```html
<li :class="isActive ? 'active' : ''">zh</li>
<div v-bind:class="{ active: isActive }"></div>
```

2.多个 class 动态加载，与普通 class 合用

```html
<div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>
```

```javascript
data: {
  isActive: true,
  hasError: false
}
```

3.对象形式，结合计算属性

```html
<div v-bind:class="classObject"></div>
```

```javascript
data: {
  isActive: true,
  error: null
},
computed: {
  classObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
```
