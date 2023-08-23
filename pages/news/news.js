// pages/news/news.js
import {
  queryNews
} from "../../api/apis"
import {formatNumber,formatTime} from "../../utils/common"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsArr: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getNewsData()
  },
  getNewsData() {
    queryNews({
      limit: 8,
      size: 0
    }).then(res => {
      // console.log('res: ', res);
      res.data.forEach(item => item.view_count = formatNumber(item.view_count))
      res.data.forEach(item => item.publish_date = formatTime(item.publish_date, 5))
      this.setData({
        newsArr: res.data
      })
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})