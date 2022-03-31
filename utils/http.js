import {
    config
} from "../config/config";
import {
    promisic
} from "./util";
import {
    Token
} from "../models/token";
import {
    codes
} from "../config/exception-config";
import {
    HttpException
} from "../core/http-exception";

/**
 * @作者 7七月
 * @微信公号 林间有风
 * @开源项目 $ http://7yue.pro
 * @免费专栏 $ http://course.7yue.pro
 * @我的课程 $ http://imooc.com/t/4294850
 * @创建时间 2019-09-22 05:30
 */

class Http {
    static async request({
        url,
        data,
        method = 'GET',
        refetch = true,
        throwError = false
    }) {
        let res;
        try {
            // 传递函数进来 promisic返回的依然是一个函数，用promisic()()调用，里面传递wx.request需要的参数
            res = await promisic(wx.request)({
                url: `${config.apiBaseUrl}${url}`,
                data,
                method,
                header: {
                    'content-type': 'application/json',
                    appkey: config.appkey,
                    'authorization': `Bearer ${wx.getStorageSync('token')}`
                }
            })
        } catch (e) {
            if (throwError) {
                throw new HttpException(-1, codes[-1])
            }
            Http.showError(-1)
            return null
        }
        const code = res.statusCode.toString()
        if (code.startsWith('2')) {
            return res.data
        } else {
            if (code === '401') {
                // 二次重发
                if (data.refetch) {
                    Http._refetch({
                        url,
                        data,
                        method
                    })
                }
            } else {
                if (throwError) {
                    throw new HttpException(res.data.code, res.data.message, code)
                }
                if (code === '404') {
                    if (res.data.code !== undefined) {
                        return null
                    }
                    return res.data
                }
                const error_code = res.data.code;
                Http.showError(error_code, res.data)
            }
            // 403 404 500
        }
        return res.data
    }

    static async _refetch(data) {
        const token = new Token()
        await token.getTokenFromServer()
        data.refetch = false
        return await Http.request(data)
    }

    static showError(error_code, serverError) {
        let tip
        console.log(error_code)

        if (!error_code) {
            tip = codes[9999]
        } else {
            if (codes[error_code] === undefined) {
                tip = serverError.message
            } else {
                tip = codes[error_code]
            }
        }

        wx.showToast({
            icon: "none",
            title: tip,
            duration: 3000
        })
    }
}


export {
    Http
}