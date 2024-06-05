NB if you are NOT following the [2019 video tutorial](https://www.youtube.com/watch?v=fgTGADljAeg):

- You need to add a .env file to set DATABASE_URL to (e.g.) mongodb://localhost/subscribers.

- For easy testing, install REST Client VS Code plugin and add a "route.rest" file.

Mongoose is now (2024) at version 8, and two minor changes have been made to the code.

At server.js,

```js
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
```
is now
```js
mongoose.connect(process.env.DATABASE_URL)
```

At routes/subscribers.js

```js
await res.subscriber.remove()
```
is now
```js
await res.subscriber.deleteOne()
```
The core concepts in the tutorial are however still applicable as of June 2024.