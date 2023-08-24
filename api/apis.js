import {request} from "../utils/request"
//获取首页导航
export const listNav = () => request({url:"/nav/get",method:"post"})

//获取新闻列表
export const queryNews = data => request({url:"/news/get",method:"post",data})
//获取新闻详情
export const newDetail = data => request({url:"/news/detail",method:"post",data})
//获取产品列表
export const queryProduct = data => request({url:"/product/getlist",method:"post",data})
//获取产品详情
export const getProDetailAPI = data => request({url:"/product/detail",method:"post",data})