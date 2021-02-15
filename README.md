# Chuck Norris Apollo Server
 Apollo Server running on express and consuming api.chucknorris.io.
 
  ~~Demo: http://178.62.94.129:9001/graphql~~.


## New Features!

  - Updated project folder structure
  - Added basic frontend boilertplate 
  - Create docker-compose file

```sh
    $ docker-compose up -d
```

### GraphQL query

Fetch a random joke.

```sh
{
  random{
    id
    value
  }
}
```
 Fetch a joke by category
 ```sh
{
  getJoke(category: "fashion"){
    value,
    id
    value
  }
}
```
  Search for jokes
 ```sh
{
  search(searchTerm: "fight"){
	total
    result{
        id
        value
    }
  }
}
```  

Fetch Category List
 ```sh
{
  categories {
    name
  }
}
```  


Enjoy :)
