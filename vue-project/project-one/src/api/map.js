import service from "@/utils/service";
// 数据概览接口
export function dataview() {
    return service.get('/dataview')
}

// 旅游地图接口
export function travel() {
    return service('/travel')
}