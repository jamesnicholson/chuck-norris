# Chuck Norris Apollo Server
 Apollo Server running on express and consuming api.chucknorris.io.
 
Demo: http://159.203.110.164:9001/graphql

## New Features!

  -  Chuck Norris Apollo Server has been dockerized

```sh
    $ docker run -p 9001:9000 jam3snicholson/chuck-norris-apollo-server
```

### graphql query

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

:)
