/**
 * @作者 7七月
 * @微信公号 林间有风
 * @开源项目 $ http://7yue.pro
 * @免费专栏 $ http://course.7yue.pro
 * @我的课程 $ http://imooc.com/t/4294850
 * @创建时间 2020-04-21 15:15
 */
import {accAdd, accMultiply} from "../utils/number";


class Calculator {
    totalPrice = 0
    totalSkuCount = 0
    cartItems = []

    constructor(cartItems) {
        this.cartItems = cartItems
    }

    calc() {
        this.cartItems.forEach(item => {
            this.push(item)
        })
    }

    getTotalPrice() {
        return this.totalPrice
    }

    getTotalSkuCount() {
        return this.totalSkuCount
    }

    push(cartItem) {
        let partTotalPrice = 0
        if (cartItem.sku.discount_price) {
            partTotalPrice = accMultiply(cartItem.count, cartItem.sku.discount_price)
        } else {
            partTotalPrice = accMultiply(cartItem.count, cartItem.sku.price)
        }
        this.totalPrice = accAdd(this.totalPrice, partTotalPrice)
        this.totalSkuCount += cartItem.count
    }
}

export {
    Calculator
}