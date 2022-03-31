/**
 * @作者 7七月
 * @微信公号 林间有风
 * @开源项目 $ http://7yue.pro
 * @免费专栏 $ http://course.7yue.pro
 * @我的课程 $ http://imooc.com/t/4294850
 */
import {Http} from "../utils/http";

class SaleExplain{
    static async getFixed() {
        const explains = await Http.request({
            url:`sale_explain/fixed`
        })
        return explains.map(e=>{
            return e.text
        })
    }
}

export {
    SaleExplain
}