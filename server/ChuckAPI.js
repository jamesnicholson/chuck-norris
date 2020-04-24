const { RESTDataSource } = require("apollo-datasource-rest");
 class ChuckAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = "https://api.chucknorris.io/jokes/"
    }
    async randomJoke(){
        return await this.get("random")
    }
    async getJoke(id){
        return await this.get("random?category="+id)
    }
    async categories(){
        return await this.get("categories")
    }
    async search(id){
        return await this.get("search?query="+id)
    }
}
module.exports = {ChuckAPI}