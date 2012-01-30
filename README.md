#jQuery Table TR Highlighter 

##NAME
jQuery.sygTrHighlighter

##VERSION
version 1.0

jQuery VERSION  
version 1.4.2

2012.01.30 ver1.0  

* とりあえず作成

##SYNOPSIS

[DEMO](http://sygnas.jp/dl/javascript/jquery.syg_trhighlighter/demo/example.html)
	
###HTML
``` html
<table id="demo">
	<tr><th>AA</th><td>aa</td></tr>
	<tr><th>BB</th><td>bb</td></tr>
	<tr><th>CC</th><td>cc</td></tr>
</table>
```

### JavaScript
``` js
var trHighlighter = new $.sygTrHighlighter('table#demo'{
	hoverTarget: 'th,td'
});
```
###CSS
``` css
.even th{ background-color: #666; }
.even td{ background-color: #ccc; }
.odd th{ background-color: #333; }
.odd td{ background-color: #eee; }

.even-hover th{ background-color: #66c; }
.even-hover td{ background-color: #aaccee; }
.odd-hover th{ background-color: #339; }
.odd-hover td{ background-color: #cde1f5; }

.even-select th{ background-color: #cc33ee; }
.even-select td{ background-color: #e1cdf5; }
.odd-select th{ background-color: #a815c9; }
.odd-select td{ background-color: #ccaaee; }
```

##DESCRIPTION
テーブルの要素にマウスが乗ると、その行をハイライトするjQueryプラグインです。

やっていることは&lt;tr&gt;にクラス名を付与するだけです。

デフォルトでは&lt;th&gt;&lt;td&gt;に反応しますが、hoverTargetオプションで任意の要素に変更することができます。

外部から任意の行を選択状態にすることもできます。

##OPTIONS
**hoverTarget** (th,td)  
マウス反応させる要素。jQueryセレクタ方式で記述。  
exp) hoverTarget:'a,input'

**classA** (even)  
**classA_hover** (even-hover)  
**classA_select** (even-select)  
偶数行に適用するクラス。それぞれ通常、ロールオーバー、選択。

**classB** (odd)  
**classB_hover** (odd-hover)  
**classB_select** (odd-select) 
奇数行に適用するクラス。それぞれ通常、ロールオーバー、選択。 

``` js
var trHighlighter = new $.sygTrHighlighter('table#demo'{
	hoverTarget: 'th,td',
	classA : 'even',
	classB : 'odd',
	classA_hover : 'even-hover',
	classB_hover : 'odd-hover',
	classA_select : 'even-select',
	classB_select : 'odd-select'
});
```

##METHOD
**length**  
列数を返す。

``` js
trHighlighter.length();	// 上記サンプルなら「3」
```

**select**  
任意の列を選択状態にする。

``` js
trHighlighter.select(n);
```

**deselect**  
任意の列を選択解除にする。

``` js
trHighlighter.deselect(n);
```

**toggle**  
任意の列の選択・解除を切り替える。

``` js
trHighlighter.toggle(n);
```


##AUTHOR
Hiroshi Fukuda <dada@sygnas.jp>  
http://sygnas.jp/

##LICENSE
jQuery.sygTrHighlighter

The MIT License

Copyright (c) 2011-2012 Hiroshi Fukuda, http://sygnas.jp/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
