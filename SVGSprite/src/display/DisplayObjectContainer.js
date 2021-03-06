(function (SVGSprite){

    /**
     * SVGSprite.display.DisplayObjectContainer を初期化する
     * 
     * @class SVGSprite.display.DisplayObjectContainer は、子要素をもつことができる表示オブジェクトの基本要素です。<br />
     * 子要素の追加、削除、リストの参照などが行えます。
     * 
     * @param {SVGElement} svgElement	SVGElement名
     * @return {Void}
     */
    SVGSprite.display.DisplayObjectContainer = function(svgElement) {

        this.constructor(svgElement);
            
	};

    SVGSprite.display.DisplayObjectContainer.prototype = new SVGSprite.display.DisplayObject();

    /**
      * 子要素を追加する
      *
      * @param {SVGSprite.display.DisplayObject} child 追加する子要素
      *
      */
    SVGSprite.display.DisplayObjectContainer.prototype.addChild = function(child) {

        throw new Error("未実装です。");
        
	};

    /**
    * 子要素として追加する
    *
    * @param {SVGElement} content 追加先の要素
    *
    */
    SVGSprite.display.DisplayObjectContainer.prototype.appendTo = function(content) {

	   content.appendChild(this.svgElement);

    };

}(SVGSprite));
