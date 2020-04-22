const Query = {
  randomJoke: async(_source, { id }, { dataSources }) => {
      return await dataSources.chuckAPI.randomJoke()
    },
    categories:  async(_source, { id }, { dataSources }) => {
      let _categories = [];
      var data = await dataSources.chuckAPI.categories()
      data.map(function(item){
        _categories.push({ "name": item});
      })
      return _categories
    }
  }
module.exports = {Query}