const Query = {
    random: async(_source, { }, { dataSources }) => {
      return await dataSources.chuckAPI.random()
    },
    categories:  async(_source, { }, { dataSources }) => {
      return await dataSources.chuckAPI.categories()
    },
    getJoke: async (_source, { category }, { dataSources }) => {
      return await dataSources.chuckAPI.getJoke(category)
    },
    search: async (_source, { searchTerm }, { dataSources }) => {
      return await dataSources.chuckAPI.search(searchTerm)
    }
  }
module.exports = {Query}