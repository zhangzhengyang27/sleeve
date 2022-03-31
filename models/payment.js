/**
 * @作者 7七月
 * @微信公号 林间有风
 * @开源项目 $ http://7yue.pro
 * @免费专栏 $ http://course.7yue.pro
 * @我的课程 $ http://imooc.com/t/4294850
 * @创建时间 2020-05-04 22:02
 */
import {Http} from "../utils/http";

class Payment{

    static async getPayParams(orderId) {
        const serverParams = await Http.request({
            url:`payment/pay/order/${orderId}`,
            method:'POST'
        })
        return  serverParams
    }



}

export {
    Payment
}