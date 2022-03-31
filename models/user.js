/**
 * @作者 7七月
 * @微信公号 林间有风
 * @开源项目 $ http://7yue.pro
 * @免费专栏 $ http://course.7yue.pro
 * @我的课程 $ http://imooc.com/t/4294850
 * @创建时间 2019-08-30 20:56
 */
import {Http} from "../utils/http";


class User{

    static async updateUserInfo(data) {
        return Http.request({
            url:`user/wx_info`,
            data,
            method:'POST'
        })
    }
}

export {
    User
}