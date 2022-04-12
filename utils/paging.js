/**
 * @作者 7七月
 * @创建时间 2019-10-13 15:03
 */
import {Http} from "./http";

class Paging {

    start
    count
    req
    locker = false
    url
    moreData = true
    accumulator = []


    constructor(req, count = 10, start = 0) {
        this.start = start
        this.count = count
        this.req = req
        this.url = req.url
    }

    async getMoreData() {
        if(!this.moreData){
            return
        }
        // 判断是否被锁住
        if(!this._getLocker()){
            return
        }
        const data =await this._actualGetData()
        this._releaseLocker()
        return data
    }


    async _actualGetData() {
        const req = this._getCurrentReq()
        let paging = await Http.request(req)
        // 不存在直接返回null
        if(!paging){
            return null
        }
        // 数据为空
        if(paging.total === 0){
            return {
                empty:true,
                items:[], // 当前接口返回的数据
                moreData:false,
                accumulator:[] // 总的数据
            }
        }
        // 判断this.moreData是TRUE 还是FALSE
        this.moreData = Paging._moreData(paging.total_page, paging.page)
        if(this.moreData){
            this.start += this.count
        }
        this._accumulate(paging.items)
        return {
            empty:false,
            items: paging.items,
            moreData:this.moreData,
            accumulator:this.accumulator
        }
    }

    _accumulate(items){
        this.accumulator = this.accumulator.concat(items)
    }

    static _moreData(totalPage, pageNum) {
        return pageNum < totalPage-1
    }

    _getCurrentReq() {
        let url = this.url
        const params = `start=${this.start}&count=${this.count}`
        if(url.includes('?')){
            url += '&' + params
            // contains
        }
        else{
            url += '?' + params
        }
        this.req.url  = url
        return this.req
    }

    _getLocker() {
        // this.locker 为true的时候，获取不到
        if (this.locker) {
            return false
        }
        this.locker = true
        return true
    }
    // 释放锁
    _releaseLocker() {
        this.locker = false
    }

}

export {
    Paging
}
