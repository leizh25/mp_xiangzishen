// components/xzs-header/xzs-header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    clickPhone(){
      wx.makePhoneCall({
        phoneNumber:"12312341234"
      })
    },
    //跳转到搜索页面
    clickSearch(){
      wx.navigateTo({
        url: '/pages/search/search',
      })
    }
  }
})
