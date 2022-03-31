// pages/about-course/about-course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    urlFullStack:'https://class.imooc.com/sale/javafullstack',
    urlOtherCourse:'http://imooc.com/t/4294850',
    urlSleeve:'http://sleeve.7yue.pro'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onCopyCourse() {
    wx.setClipboardData({
      data: this.data.urlFullStack
    })
  },

  onCopyOtherCourse() {
    wx.setClipboardData({
      data: this.data.urlOtherCourse
    })
  },

  onCopySleeve() {
    wx.setClipboardData({
      data: this.data.urlSleeve
    })
  },

  onShareAppMessage: function () {

  }
})