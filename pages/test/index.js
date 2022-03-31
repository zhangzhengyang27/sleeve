// pages/test/index.js
import {Cart} from "../../models/cart";

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        count: {
            type: Number,
            value: 3
        },
        min: {
            type: Number,
            value: Cart.SKU_MIN_COUNT
        },
        max: {
            type: Number,
            value: Cart.SKU_MAX_COUNT
        }
    },

    /**
     * 组件的初始数据
     */
    data: {},

    lifetimes: {
        attached() {
            const a = [1,2,3,4,5]
            console.log(a)
            console.log(`${a}`)
        }
    },


    observers: {
        'count': function (count) {
            // console.log(count)
            // this.setData({
            //     count:1
            // })
        },
        // 'min': function (min) {
        //     console.log(min)
        // }
    },

    /**
     * 组件的方法列表
     */
    methods: {}
})
