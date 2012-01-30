/***************************
 * jQuery Table TR Highlighter  
 * version 1.1	
 * 
 * Hiroshi Fukuda <dada@sygnas.jp>
 * http://sygnas.jp/
 * 
 * The MIT License
 *
 * Copyright (c) 2011-2012 Hiroshi Fukuda, http://sygnas.jp/
 *
********************************/

( function( jQuery ){
	
	/*************************
	 * コンストラクタ
	 */
	jQuery.sygTrHighlighter = function ( root, config ){
		var t = this;
		t.trList = [];

		// 初期値
		var defaults = {
			hoverTarget : 'td, th',		// hover対象とするタグ
			classA : 'even',		// 偶数<tr>のclass名
			classB : 'odd',			// 奇数<tr>のclass名
			classA_hover : 'even-hover',	// ロールオーバー時のクラス名
			classB_hover : 'odd-hover',
			classA_select : 'even-select',	// クリック時のクラス名
			classB_select : 'odd-select',
		};
		var options = jQuery.extend( defaults, config );
		
		
		var nowTable = "";
		var tableCount = -1;
		var count = 0;
		
		// <tr>を取り出して初期化
		jQuery('tr',root).each( function(i){
			
			// 親となる<table>を取得し、前と違っていたら連番countを初期化
			var table = $(this).parents('table')
			var tableClass = table.prop('class');

			if( tableClass != nowTable ){ 
				count = 0; 
				tableCount ++;
			}

			console.log( tableClass, tableClass == nowTable ? "same" : "chigau" );
			
			table.addClass( "sygTrHighlighterTableID"+tableCount );
			nowTable = table.attr('class');
			
			var trClass = new SygHighlighterTrClass( this, count, options );
			t.trList.push( trClass );
			
			count ++;
		});
		
	}
	
	/*************************
	 * 個数を返す
	 */
	$.sygTrHighlighter.prototype.length = function(){
		return this.trList.length;
	}
	
	/*************************
	 * 外部から選択状態にする
	 */
	$.sygTrHighlighter.prototype.select = function( id ){
		this.trList[id].select();
	}
	
	/*************************
	 * 外部から選択解除
	 */
	$.sygTrHighlighter.prototype.deselect = function( id ){
		this.trList[id].deselect();
	}
	
	/*************************
	 * 外部から選択・解除切り替え
	 */
	jQuery.sygTrHighlighter.prototype.toggle = function( id ){
		this.trList[id].toggle();
	}
	
	
	/*************************
	**************************
	**************************
	* <tr>のクラス
	*/
	var SygHighlighterTrClass = function( tr, id, opt ){
		var t = this;
		t.id = id;
		t.isEven = id % 2 == 0 ? true : false;
		t.tr = tr;
		t.trObj = jQuery( tr );
		t.opt = opt;
		t.isSelected = false;
		
		// 自分のクラス
		t.classNormal = t.isEven ? opt.classA : opt.classB;
		t.classHover = t.isEven ? opt.classA_hover : opt.classB_hover;
		t.classSelect = t.isEven ? opt.classA_select : opt.classB_select;
		
		t.trObj.addClass( t.classNormal );
		
		
		// ロールオーバー
		jQuery( opt.hoverTarget, t.trObj ).hover(
			function(){
				t.trObj.addClass( t.classHover );
			},
			function(){
				t.trObj.removeClass( t.classHover );
			}
		);
	}
	
	/*************************
	 * 選択状態にする
	 */
	SygHighlighterTrClass.prototype.select = function(){
		this.trObj.addClass( this.classSelect );
		this.isSelected = true;
	}
	
	/*************************
	 * 選択解除
	 */
	SygHighlighterTrClass.prototype.deselect = function(){
		this.trObj.removeClass( this.classSelect );
		this.isSelected = false;
	}
	
	/*************************
	 * 選択・解除切り替え
	 */
	SygHighlighterTrClass.prototype.toggle = function(){
		
		
		if( this.isSelected ){
			this.deselect();
		}else{
			this.select();
		}
	}
	
	
})( jQuery );

