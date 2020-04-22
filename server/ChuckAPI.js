const { RESTDataSource } = require("apollo-datasource-rest");
 class ChuckAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = "https://api.chucknorris.io/jokes/"
    }
    async randomJoke(){
        return await this.get("random")
    }
    async categories(){
        return await this.get("categories")
    }
}
module.exports = {ChuckAPI}