> [#] Package.json Commands----------------------
> |- [#]-[npm_start_command]
> |- In the package.json, within the "scripts" 
> |- key, we can use the start command

```json
"scripts": {
  "start": "node app.js"
}
```

> |- By doing this, we can just do npm start.
> ---
> |
> |- [#]-[Custom_script_Names]
> |- For custom script names, you have to use to
> |- use the following:

``` json
"scripts": {
  "start-server": "node app.js"
}

```
> |- Then, in the terminal

``` bash
npm run start-server

```


```