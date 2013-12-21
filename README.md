## personal-api

API server to publish personal info. Example APIs: [alperkan.at](http://alperkan.at), [api.azer.io](http://api.azer.io)

```bash
$ personal-api azer.json
```

## Install

```bash
$ npm install -g personal-api
```

## Usage

Create a JSON file of your personal info:

```json
{
  "name": "Azer Koçulu",
  "email": "azer@kodfabrik.com",
  "age": "26",
  "gender": "male",
  "city": "Oakland",
  "hometown": "Kalkan",
  "instagram": "oakazer",
  "photo": "http://farm4.staticflickr.com/3674/8760363780_cdbe567873_o.jpg",
  "favorite food": "mantı",
  "favorite show": "leyla ile mecnun",
  "religious view": "atheist"
}
```

And start the server:

```bash
$ personal-api me.json
```

Run `personal-api -h` or see `docs/man` for command-line options.

## Running Programmatically

```js
var api = require('personal-api')

api.start('me.json', 8000, 'localhost')
```

You can customize the output depending on the Accept type:

```js
api.server.format('/', 'text/plain', function (context, match) {
  return {
    contentType: 'text/plain',
    response: 'Name: ' + context.result.name + ' E-Mail: ' + context.result.email
  };
});
```

## Compatible with cats

It'll work for cats, as well. Example cat API: [blackbear.api.azer.io](http://blackbear.api.azer.io/)

![](http://distilleryimage9.ak.instagram.com/8ab17022616811e38fb612064f8bfb61_6.jpg)
