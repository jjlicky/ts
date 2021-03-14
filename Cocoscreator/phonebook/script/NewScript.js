// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        items : [],

        scrollView: {
            default: null,
            type: cc.ScrollView
        },

        listItem : {
            default : null,
            type: cc.Prefab
        }
    },

    onLoad: function() {
        this.content = this.scrollView.content;

        for (var i=0; i<20; i++) {
            this.addItem();
        }
    },

    addItem: function() {
        var item = cc.instantiate(this.listItem);

        this.content.addChild(item);

        this.items.push(item);
    },

    removeItem: function() {
        this.content.removeChild(this.items.pop());
    }

    //start () {},

    // update (dt) {},
});
