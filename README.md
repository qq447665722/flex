# flex
对flex+栅格系统封装

按需要使用
* standard版:标准24栅格(5+无单数)
* full版:24栅格全尺寸
* tiny版:12栅格(5+无单数)

用法如下

|类名|容器|说明
|:---|:---|:---|
|.flex|父|默认 `水平方向`,`不换行`|
|.vertical|父|垂直排列|
|.gutter-*|父|子元素间隔`N`px|
|.wrap|父|`换行`|
|.wrap-reverse|父|`反转` `换行`|
|.start|父|水平方向,左对齐 `默认`|
|.end|父|水平方向,右对齐|
|.center|父|水平方向,中线对齐|
|.between|父|水平方向,平均对齐,两端不留白|
|.around|父|水平方向,平均对齐,两端留白|
|.top|父|垂直方向,顶部对齐|
|.bottom|父|垂直方向,底端对齐|
|.middle|父|垂直方向,中间对齐|
|.baseline|父|垂直方向,第一行文字的基线对齐|
|.stretch|父|垂直方向,如果未设置高度或设为auto，将占满整个容器的高度|
|---|---|---|
|.span-*|子|`N`单元大小|
|.offset-*|子|向右移动`N`单元|
|.gutter-*|子|间隔`N`px|
|.order-*|子|排序|
|.fill|子|弹性元素,需要配合任意span-*|

```
<div class="flex vertical gutter-8 wrap start bottom">
    <div class="span-7 offset-1 gutter-8 order-2"></div>
    <div class="span-8 order-1"></div>
    <div class="span-8 order-3"></div>
</div>
```
剩下的不想写了,自己看一下flex就会用了,这个css只写封装了一下而已

###其它
另外前端工程化可以使用`import "flex.stylus"`,PS:npm未得闲测试

