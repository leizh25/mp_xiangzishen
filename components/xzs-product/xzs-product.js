// components/xzs-product/xzs-product.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item:{
      type:Object,
      value:{
        title:"默认标题"
      }
    }
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
    clickPro(e){
      // console.log('e: ', e);
      const {id} = e.currentTarget.dataset
      wx.navigateTo({
        url: `/pages/proDetail/proDetail?id=${id}`,
      })
    }
  }
})
