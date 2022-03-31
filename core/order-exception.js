/**
 * @作者 7七月
 * @微信公号 林间有风
 * @开源项目 $ http://7yue.pro
 * @免费专栏 $ http://course.7yue.pro
 * @我的课程 $ http://imooc.com/t/4294850
 * @创建时间 2020-04-26 12:31
 */

class OrderException extends Error {
    type

    constructor(msg, type) {
        super()
        this.message = msg
        this.type = type
    }

}

export {
    OrderException
}