// pages/classify/classify.js
import {
  listNav,
  queryProduct
} from "../../api/apis"
let navId;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navActive: 0,
    navArr: [],
    productArr: [],
    isAllDataLoaded:false,
    loading:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    const {index} = options
    await this.getNavList()
    if(index){
      this.navChange(index)
    }else{
      navId = this.data.navArr[0]._id
      this.getProductList()
    }
  },
  //获取分类导航
  async getNavList() {
    await listNav().then(res => {
      // console.log('res: ', res);
      this.setData({
        navArr: res.data
      })
      this.selectComponent("#myTabs").resize()

    })
  },
  //获取产品列表
  getProductList(size = 0) {
    this.setData({loading:true})
    queryProduct({
      navid: navId,
      size
    }).then(res => {
      // console.log('res: ', res);
      this.setData({
        productArr: [...this.data.productArr, ...res.data],
        loading:false
      })
      if(res.total == this.data.productArr.length) this.setData({isAllDataLoaded: true})
    })
  },
  //导航条切换的回调
  navChange(e) {
    // console.log(e);
    let index = e?.detail?.index ?? e
    navId = this.data.navArr[index]._id
    // console.log('navId: ', navId);
    this.setData({
      navActive:Number(index),
      productArr: [],
      isAllDataLoaded:false
    })
    this.getProductList()
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
    this.data.isAllDataLoaded || this.getProductList(this.data.productArr.length)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})