// pages/classify/classify.js
import {
  listNav,
  queryProduct
} from "../../api/apis"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navActive: 0,
    navArr: [],
    productArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getNavList()
    this.getProductList()
  },
  //获取分类导航
  getNavList() {
    listNav().then(res => {
      // console.log('res: ', res);
      this.setData({
        navArr: res.data
      })
      this.selectComponent("#myTabs").resize()

    })
  },
  //获取产品列表
  getProductList() {
    queryProduct({
      navid:"63b9600be1a35c358c18483b"
    }).then(res=>{
      console.log('res: ', res);
      this.setData({
        productArr:res.data
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