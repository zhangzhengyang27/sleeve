/**
 * @作者 7七月
 * @微信公号 林间有风
 * @开源项目 $ http://7yue.pro
 * @免费专栏 $ http://course.7yue.pro
 * @我的课程 $ http://imooc.com/t/4294850
 */


class CartItem {
    skuId = null
    count = 0
    sku = null
    checked = true

    constructor(sku, count) {
        this.skuId = sku.id
        this.sku = sku
        this.count = count
    }

}

export {
    CartItem
}