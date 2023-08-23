// pages/newsDetail/newsDetail.js
import {
  newDetail
} from "../../api/apis"
import {
  formatTime,
  formatNumber
} from "../../utils/common"
let id = ""
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log('options: ', options);
    id = options.id
    this.getDetail()
  },
  //获取详情
  getDetail() {
    newDetail({
      id
    }).then(res => {
      // console.log('res: ', res);
      res.data.publish_date = formatTime(res.data.publish_date, 6)
      res.data.view_count = formatNumber(res.data.view_count)
      res.data.content = res.data.content.replace(/<p/g, "<p class='pstyle'")
      res.data.content = res.data.content.replace(/<img/g, "<img class='imgstyle'")
      this.setData({
        detail: res.data
      })
      wx.setNavigationBarTitle({
        title:res.data.title
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
    return {
      title: this.data.detail.title,
      path: "/pages/newsDetail/newsDetail?id=" + this.data.detail._id,
      imageUrl: this.data.detail.content.match(/https:\/\/[^ "]+\.(?:jpg|png)/g)
    }
  },
  //分享到朋友圈
  onShareTimeline() {
    return {
      title: this.data.detail.title,
      path: "/pages/newsDetail/newsDetail?id=" + this.data.detail._id,
      imageUrl: this.data.detail.content.match(/https:\/\/[^ "]+\.(?:jpg|png)/g)[0]
    }
  }
})