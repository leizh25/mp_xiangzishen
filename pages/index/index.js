Page({

  /**
   * 页面的初始数据
   */
  data: {
    navArr:[],
    newsArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavData()
    this.getNewsData()
  },

  //获取导航数据
  getNavData(){
    wx.request({
      url: 'https://tea.qingnian8.com/nav/get',
      header:{
        "content-type":"application/json"
      },
      method:"POST",
      success:res=>{
        // console.log(res);
        this.setData({
          navArr:res.data.data
        })
      }
    })
  },
  //获取新闻列表
  getNewsData(){
    wx.request({
      url: 'https://tea.qingnian8.com/news/get',
      header:{
        "content-type":"application/json"
      },
      data:{
        limit:3,
        hot:true
      },
      method:"POST",
      success:res=>{
        console.log(res.data.data);
        this.setData({
          newsArr:res.data.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})