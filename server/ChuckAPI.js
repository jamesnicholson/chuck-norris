const { RESTDataSource } = require("apollo-datasource-rest");
 class ChuckAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = "https://api.chucknorris.io/jokes/"
    }
    async randomJoke(){
        return await this.get("random")
    }
    random(){
        return "HELLO"
    }
}
module.exports = {ChuckAPI}