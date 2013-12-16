## personal-api

API server to publish personal info. Example API: [api.azer.io](http://api.azer.io)

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
  "male": true,
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
