const { RESTDataSource } = require("apollo-datasource-rest");
 class ChuckAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = "https://api.chucknorris.io/jokes/"
    }
    joke(data){
        return{
            id: data.id,
            value: data.value,
            url: data.url,
            icon_url: data.icon_url,
            categories: data.categories,
            created_at: data.created_at,
            updated_at: data.updated_at
        }
    }
    category(data){
        return{
            name: data
        }
    }
    async random(){
        return this.joke( await this.get("random") )
    }
    async getJoke(category){
        return this.joke( await this.get("random", {category}) )
    }
    async categories(){
        let data  = await this.get("categories")
        return data.map((category_name) => this.category(category_name))
    }
    async search(searchTerm){
        let data =  await this.get("search", {query: searchTerm})
        const total = data.total;
        const result = Array.isArray(data.result) ? data.result.map((item) =>this.joke(item)) : []
        return {
            total,
            result
        }
    }
}
module.exports = {ChuckAPI}