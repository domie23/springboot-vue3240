const base = {
    get() {
        return {
            url : "http://localhost:8080/Blackboardxuexixitong/",
            name: "Blackboardxuexixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/Blackboardxuexixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "中国版Blackboard学习系统"
        } 
    }
}
export default base
