import {getSlashYMD} from "../../utils/date";

/**
 * @作者 7七月
 * @微信公号 林间有风
 * @开源项目 $ http://7yue.pro
 * @免费专栏 $ http://course.7yue.pro
 * @我的课程 $ http://imooc.com/t/4294850
 * @创建时间 2019-09-05 18:43
 */

class CouponData {
    startTime
    endTime
    status

    constructor(coupon, status) {
        Object.assign(this, coupon)
        this.startTime = getSlashYMD(coupon.start_time)
        this.endTime = getSlashYMD(coupon.end_time)
    }
}

export {
    CouponData
}