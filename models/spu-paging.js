/**
 * @作者 7七月
 * @创建时间 2019-10-12 18:07
 */
import {Paging} from "../utils/paging";

class SpuPaging{
    static getLatestPaging() {
        return new Paging({
            url:`spu/latest`
        },5)
    }

  static getByCategoryPaging(cid, isRoot) {
    return new Paging({
      url: `spu/by/category/${cid}?is_root=${isRoot}`
    })
  }
}

export {
    SpuPaging
}