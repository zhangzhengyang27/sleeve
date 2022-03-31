/**
 * @作者 7七月
 * @微信公号 林间有风
 * @开源项目 $ http://7yue.pro
 * @免费专栏 $ http://course.7yue.pro
 * @我的课程 $ http://imooc.com/t/4294850
 * @创建时间 2020-05-04 05:20
 */


class OrderPost {
    total_price
    final_total_price
    coupon_id
    sku_info_list = []
    address = {}

    constructor(totalPrice, finalTotalPrice, couponId, skuInfoList, address) {
        this.total_price = totalPrice
        this.final_total_price = finalTotalPrice
        this.coupon_id = couponId
        this.sku_info_list = skuInfoList
        this._fillAddress(address)
    }

    _fillAddress(address) {
        this.address.user_name = address.userName
        this.address.national_code = address.nationalCode
        this.address.postal_code = address.postalCode
        this.address.city = address.cityName
        this.address.province = address.provinceName
        this.address.county = address.countyName
        this.address.detail = address.detailInfo
        this.address.mobile = address.telNumber
    }
}

export {
    OrderPost
}