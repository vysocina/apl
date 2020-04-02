# Contribution

> After implementing a new component, please update the `vuepress` documentation. You can read more about vupress [here](https://vuepress.vuejs.org/guide/#how-it-works).

## Building a fresh bundle

```shell script
$ yarn run bundle:build
```

* development version:

```shell script
$ yarn run bundle:dev
```

* starting docs in development mode:

## Docs

> development mode should run on [http://localhost:8080](http://localhost:8080)

```shell script
$ yarn run docs:dev
```

::: tip
Check `docs/.vuepress/components/` directory, to reference examples used in this documentation.
:::


## Deploy

> before deploying the bundle, please check if you are logged into your npm account using:<br/>`$ npm whoami`

```shell script
# build production version of the bundle
$ yarn run bundle:build

# if you need to log into your npm account use:
$ npm login

# and publish to npm repository
$ npm publish
```
