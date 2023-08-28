// pages/search/search.js
import {
    queryProduct
} from "../../api/apis"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        historyArr: [],
        productList: [],
        total: 0,
        keyword: ""

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let searchKeyArr = wx.getStorageSync('searchKeyArr') || []
        // console.log('searchKeyArr: ', searchKeyArr);
        if (searchKeyArr) this.setData({
            historyArr: searchKeyArr
        })
    },
    //输入框改变的回调
    onChange(e) {
        // console.log(e);
        this.setData({
            keyword: e.detail
        })
    },
    //清空输入框
    onClear(){
        this.setData({
            keyword:"",
            productList:[],
            total:0
        })
    },
    //点击搜索历史项
    tapHisItem(e){
        // console.log(e);
        this.setData({
            keyword:e.currentTarget.dataset.value
        })
        this.getData()
    },
    //清空搜索历史
    removeHistory(){
        this.setData({
            historyArr:[],
            total:0,
            productList:[]
        })
        wx.removeStorageSync('searchKeyArr')
    },
    //确认搜索    //点击搜索按钮的回调
    onSearch() {
        // console.log(this.data.keyword);
        let historyArr = this.data.historyArr || []
        historyArr.unshift(this.data.keyword)
        historyArr = [...new Set(historyArr)]
        historyArr = historyArr.slice(0, 10)
        this.setData({
            historyArr
        })
        wx.setStorageSync('searchKeyArr', historyArr)
        this.getData()
    },
    getData() {
        queryProduct({
            keyword: this.data.keyword,
            limit: 10
        }).then(res => {
            // console.log(res);
            this.setData({
                total: res.total,
                productList: res.data
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