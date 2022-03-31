/**
 * @作者 7七月
 * @微信公号 林间有风
 * @开源项目 $ http://7yue.pro
 * @免费专栏 $ http://course.7yue.pro
 * @我的课程 $ http://imooc.com/t/4294850
 */
import {promisic} from "./util";
import {px2rpx} from "../miniprogram_npm/lin-ui/utils/util";


const getSystemSize = async function () {
    const res = await promisic(wx.getSystemInfo)()
    return {
        windowHeight: res.windowHeight,
        windowWidth:res.windowWidth,
        screenWidth: res.screenWidth,
        screenHeight: res.screenHeight,
    }
}

const getWindowHeightRpx = async function() {
    const  res = await getSystemSize()
    return px2rpx(res.windowHeight)
}

export {
    getSystemSize,
    getWindowHeightRpx
}