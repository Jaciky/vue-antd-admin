import axios from 'axios'
import store from '@/store'
import { getToken } from '@/libs/utils'
const BASE_MODEL = '/basic'

var service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 12000
})

// request拦截器
service.interceptors.request.use(
  config => {
    store.getters.token && (config.headers['Authorization'] = getToken())
    return config
  },
  error => {
    Promise.reject(error)
  }
)

/**
 * @description 导出学生详情excel
 */
export const getTaskStuDetailExcel = data => {
  return service({
    url: `${BASE_MODEL}/taskReport/getTaskStuDetailExcel`,
    method: 'get',
    responseType: 'blob',
    params: data
  })
}

/**
 * @description 导出卫检excel
 */
export const getTaskStuDetailExcelToWj = data => {
  return service({
    url: `${BASE_MODEL}/taskReport/getTaskStuDetailExcelToWj`,
    method: 'get',
    responseType: 'blob',
    params: data
  })
}

/**
 * @description 导出未筛查学生excel
 */
export const getTaskUncheckedStuExcel = data => {
  return service({
    url: `${BASE_MODEL}/taskReport/getTaskUncheckedStuExcel`,
    method: 'get',
    responseType: 'blob',
    params: data
  })
}

/**
 * @description 下载复查任务数据对照表
 */
export const downLoadDataComparison = data => {
  return service({
    url: `${BASE_MODEL}/task/review/downLoadDataComparison`,
    method: 'get',
    responseType: 'blob',
    params: data
  })
}
/**
 * @description 下载学生
 */
export const downLoadStuInfoData = data => {
  return service({
    url: '/report/customReport/downLoadStuInfoData',
    method: 'post',
    timeout: 1000 * 60 * 20,
    responseType: 'blob',
    data
  })
}
