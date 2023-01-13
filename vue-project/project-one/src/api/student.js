import service from "@/utils/service";
import qs from 'qs'
// 学生列表查询
export function students(params) {
    return service.get('/students', params)
}
//学生列表删除
export function studentDel(id) {
    return service.delete(`/students/${id}`)
}
// 信息列表新增和修改接口
export function info(type, data) {
    data = qs.stringify(data)
    let obj = { method: type, url: '/info', data }
    return service(obj)
}
//信息列表查询接口
export function getInfo() {
    return service.get('/info')
}
//信息列表删除
export function infoDel(id) {
    return service.delete(`/info/${id}`)
}


