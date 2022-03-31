/**
 * @作者 7七月
 * @微信公号 林间有风
 * @开源项目 $ http://7yue.pro
 * @免费专栏 $ http://course.7yue.pro
 * @我的课程 $ http://imooc.com/t/4294850
 * @创建时间 2020-04-28 18:41
 */

class HttpException extends Error {
    errorCode = 9999
    statusCode = 500
    message = ''

    constructor(errorCode, message, statusCode) {
        super()
        this.message = message;
        this.errorCode = errorCode;
        this.statusCode = statusCode;
    }
}

export {
    HttpException
}