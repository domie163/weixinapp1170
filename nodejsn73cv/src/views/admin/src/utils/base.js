const base = {
    get() {
        return {
            url : "http://localhost:8080/nodejsn73cv/",
            name: "nodejsn73cv",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/nodejsn73cv/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序的学生宿舍管理系统"
        } 
    }
}
export default base
