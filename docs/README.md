# Welcome to...

> `VueJS` & `Typescript` Component system.

### Installation

```shell script
$ yarn add @apploud/core
```

* you can use `npm` instead of `yarn`:

```shell script
$ npm install @apploud/core --save
```

### Example usage

```
<template>
    <v-row :classes="['layout', 'layout--custom']">
        <v-column v-for="i in 3" :large="4">{{i.}}</v-column>
    </v-row>
</template>

<script lang="ts">
    import {Column, Row, Component, Vue} from '@apploud/core';
    
    @Component({
        components: {'v-column': Column, 'v-row': Row}
    })
    export default class CustomLayout extends Vue {
    }
</script> 
```
