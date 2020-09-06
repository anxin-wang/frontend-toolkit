# Sass语法


## **例子一** 

```
@mixin box-shadow($shadows...) {

  -moz-box-shadow: $shadows;

  -webkit-box-shadow: $shadows;

  box-shadow: $shadows;

}

.shadows {

  @include box-shadow(0px 4px 5px #666, 2px 6px 10px #999);

}
```

**编译成**

```
.shadows {

  -moz-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;

  -webkit-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;

  box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;

}
```



## **例子二** 

```
@mixin colors($text, $background, $border) {

  color: $text;

  background-color: $background;

  border-color: $border;

}

$values: #ff0000, #00ff00, #0000ff;

.primary {

  @include colors($values...);

}


$value-map: (text: #00ff00, background: #0000ff, border: #ff0000);

.secondary {

  @include colors($value-map...);

}
```

编译成

```
.primary {
  color: #ff0000;
  background-color: #00ff00;
  border-color: #0000ff;
}

.secondary {
  color: #00ff00;
  background-color: #0000ff;
  border-color: #ff0000;
}
```

## **例子三**

```
@mixin wrapped-stylish-mixin($args...) {
  font-weight: bold;  
  @include stylish-mixin($args...);  
}


.stylish {
  // The $width argument will get passed on to "stylish-mixin" as a keyword
  @include wrapped-stylish-mixin(#00ff00, $width: 100px);
}
```

## **例子四：内容块参数**

```
@mixin apply-to-ie6-only {
  * html {
    @content;
  }
}

@include apply-to-ie6-only {
  #logo {
    background-image: url(/logo.gif);
  }
}
```
编译成

```
* html #logo {
  background-image: url(/logo.gif);
}
```

## **例子五：内容块参数**

```
$color: white;
@mixin colors($color: blue) {
  background-color: $color;
  @content;
  border-color: $color;
}

.colors {
  @include colors {
    color: $color;
  }
}
```

编译成



```
.colors {
  background-color: blue;
  color: white;
  border-color: blue;
}
```

## **例子六：内容块参数**

```
#sidebar {
  $sidebar-width: 300px;
  width: $sidebar-width;
  @include smartphone {
    width: $sidebar-width / 3;
  }
}
```



## **例子七: @import**

引入多个scss文件

    @import "rounded-corners", "text-shadow";

引入带参数的scss文件

```
$family: unquote("Droid+Sans");
@import url("http://fonts.googleapis.com/css?family=#{$family}");
```
**编译成**

```
@import url("http://fonts.googleapis.com/css?family=Droid+Sans");
```




