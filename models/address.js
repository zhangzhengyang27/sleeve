/**
 * @作者 7七月
 * @微信公号 林间有风
 * @开源项目 $ http://7yue.pro
 * @免费专栏 $ http://course.7yue.pro
 * @我的课程 $ http://imooc.com/t/4294850
 * @创建时间 2020-04-24 14:28
 */


class Address {
    static STORAGE_KEY = 'address'

    static getLocal() {
        const address = wx.getStorageSync(Address.STORAGE_KEY)
        return address ? address : null
    }

    static setLocal(address) {
        wx.setStorageSync(Address.STORAGE_KEY, address)
    }
}

export {
    Address
}