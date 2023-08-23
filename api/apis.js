import {request} from "../utils/request"
//获取首页导航
export const listNav = () => request({url:"/nav/get",method:"post"})

//获取新闻列表
export const queryNews = data => request({url:"/news/get",method:"post",data})

