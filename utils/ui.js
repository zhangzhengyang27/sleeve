/**
 * @作者 7七月
 * @微信公号 林间有风
 * @开源项目 $ http://7yue.pro
 * @免费专栏 $ http://course.7yue.pro
 * @我的课程 $ http://imooc.com/t/4294850
 */

const showToast = function (title) {
    wx.showToast({
        icon: "none",
        duration: 2000,
        title
    })
}

export {
    showToast
}