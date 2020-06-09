import Mock from 'mockjs'
import data from '../data.json'

//拦截ajax请求
Mock.mock('/word/wordInfo',{
    code:0,
    codeMsg:'成功',
    data:data.wordInfo
})