import{_ as a,c as e,o as l,a6 as i}from"./chunks/framework.DJOiR4ue.js";const _=JSON.parse('{"title":"CSS 基础","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"frontend/css.md","filePath":"frontend/css.md","lastUpdated":1720625412000}'),t={name:"frontend/css.md"},r=i('<h1 id="css-基础" tabindex="-1">CSS 基础 <a class="header-anchor" href="#css-基础" aria-label="Permalink to &quot;CSS 基础&quot;">​</a></h1><h2 id="css3-新特性" tabindex="-1">CSS3 新特性 <a class="header-anchor" href="#css3-新特性" aria-label="Permalink to &quot;CSS3 新特性&quot;">​</a></h2><p>新的选择器：</p><ul><li><p>边框属性： 如 border-radius、box-shadow、border-image</p></li><li><p>背景属性： 如 background-clip、background-origin、background-size 和 background-break</p></li><li><p>文字属性：word-wrap、text-shadow、text-overflow</p></li><li><p>颜色：rgba 分为两部分，rgb 为颜色值，a 为透明度、hsla 分为四部分，h 为色相，s 为饱和度，l 为亮度，a 为透明度</p></li><li><p>transition，transform，animation，渐变，弹性布局网格布局</p></li></ul><h2 id="元素水平、垂直居中" tabindex="-1">元素水平、垂直居中 <a class="header-anchor" href="#元素水平、垂直居中" aria-label="Permalink to &quot;元素水平、垂直居中&quot;">​</a></h2><h3 id="水平居中" tabindex="-1">水平居中 <a class="header-anchor" href="#水平居中" aria-label="Permalink to &quot;水平居中&quot;">​</a></h3><p>行内元素：</p><ul><li>text-align: center;</li></ul><p>块级元素：</p><ul><li>确定宽度的：</li></ul><ol><li><p>margin: 0 auto;</p></li><li><p>父元素 position: relative,子元素绝对定位并设置 margin-left: -width/2</p></li></ol><ul><li>不确定宽度的：</li></ul><ol><li><p>display:table，margin：0 auto</p></li><li><p>display：inline-block，text-align:center</p></li><li><p>display：flex，justify-content:center</p></li><li><p>display：grid，justify-content:center</p></li><li><p>父元素 相对定位，子元素绝对定位，+transform，translateX 可以移动本身元素的 50%。</p></li></ol><h3 id="垂直居中" tabindex="-1">垂直居中 <a class="header-anchor" href="#垂直居中" aria-label="Permalink to &quot;垂直居中&quot;">​</a></h3><ul><li><p>纯文本利用 line-height 设置于元素高度一致实现居中</p></li><li><p>通过设置父容器相对定位，子级设置绝对定位，margin 实现自适应居中</p></li><li><p>父级设置 display: flex; 子级设置 margin 为 auto 实现自适应居中</p></li><li><p>父级设置相对定位，子级设置绝对定位，并且通过位移 transform 实现</p></li><li><p>table 布局，父级通过转换成表格形式，然后子级设置 vertical-align 实现。（需要注意的是： vertical-align: middle 使用的前提条件是内联元素以及 display 值为 table-cell 的元素）</p></li></ul><h2 id="px、em、rem-和-vw、vh" tabindex="-1">px、em、rem 和 vw、vh <a class="header-anchor" href="#px、em、rem-和-vw、vh" aria-label="Permalink to &quot;px、em、rem 和 vw、vh&quot;">​</a></h2><p>px 是固定的像素，一旦设置了就无法因为放大而改变。em 是相对父元素设置的字体大小，rem 是相对根（HTML 根节点）元素设置的字体大小来计算</p><p>vw、vh 是视窗宽度和视窗高度，1vw 是视窗宽度的百分之一，1vh 是视窗高度的百分之一</p><p>注意：百分比是相对于父元素的，而 vw、vh 是相对于视口的，是不一样的</p>',19),o=[r];function n(p,s,d,c,h,u){return l(),e("div",null,o)}const b=a(t,[["render",n]]);export{_ as __pageData,b as default};
