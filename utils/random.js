/**
 * @作者 7七月
 * @微信公号 林间有风
 * @开源项目 $ http://7yue.pro
 * @免费专栏 $ http://course.7yue.pro
 * @我的课程 $ http://imooc.com/t/4294850
 * @创建时间 2019-08-09 03:35
 */

const randomArray = function (size) {
    const array = []
    for (let i = 0; i < size; i++) {
        const r = Math.random()
        if (r >= 0.5) {
            array.push(1)
        } else {
            array.push(-1)
        }
    }
    return array
}

export {
    randomArray
}