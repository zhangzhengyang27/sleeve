// components/category-grid/index.js

import { SpuListType } from "../../core/enum";
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    grid:Array
    // grid:{type:Array,value:[]}
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onGoToCategory(event) {
      const cid = event.currentTarget.dataset.cid
      const rid = event.currentTarget.dataset.rid
      const pCid = cid ? cid : rid
      const isRoot = cid ? false : true
      const type = isRoot ? SpuListType.ROOT_CATEGORY : SpuListType.SUB_CATEGORY
      wx.navigateTo({
        url: `/pages/spu-list/spu-list?cid=${pCid}&type=${type}`
      })
    }
  }
})
