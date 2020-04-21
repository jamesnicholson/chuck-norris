const Query = {
  randomJoke: async(_source, { id }, { dataSources }) => {
      return dataSources.chuckAPI.randomJoke()
    }
  }
module.exports = {Query}