// pages/proDetail/proDetail.js
import {
  getProDetailAPI
} from "../../api/apis"
let id;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    proData:{},
    isLoading:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const {
      id
    } = options
    this.getProDetail(id)
  },
  //获取产品详情
  getProDetail(id) {
    getProDetailAPI({id}).then(res => {
      // console.log('res: ', res);

      this.setData({
        proData:res.data,
        isLoading:false
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