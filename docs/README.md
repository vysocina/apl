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

```vue
<template>
    <v-row
        :flex="true"
        align-items="center"
        justify-content="center"
    >
        <v-column
            v-for="col in cols"
            v-html="col"
            :key="col"
            :large="4"
            :medium="6"
            :tiny="12"
        />
    </v-row>
</template>

<script lang="ts">
    import {Component, Vue, Row, Column} from '@apploud/core';
    
    @Component({}, [Row, Column])
    export default class MyComponent extends Vue {
        public cols: string[] = ['col-1', 'col-2', 'col-3'];
    }
</script> 
```
