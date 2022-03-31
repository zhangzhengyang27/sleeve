/**
 *
 * @作者 7七月
 * @微信公号 林间有风
 * @开源项目 $ http://7yue.pro
 * @免费专栏 $ http://course.7yue.pro
 * @我的课程 $ http://imooc.com/t/4294850
 * @创建时间 2020-04-17 19:15
 */
import {Joiner} from "./joiner";

const parseSpecValue = function (specs) {
    if(!specs){
        return null
    }
    const joiner = new Joiner('; ', 2)
    specs.map(spec=>{
        joiner.join(spec.value)
    })
    return joiner.getStr()
}


export {
    parseSpecValue
}

