# Column

::: tip
To use `<v-column></v-column>` properly, you should check [Row](/layout/row) component as well.
:::


## Default usage

```vue{2-3}
<v-row variant="flex">
    <v-column :large="6" :tablet="10" :phone="12">col</v-column>
    <v-column :large="6" :tablet="10" :phone="12">col</v-column>
</v-row>
```

### :robot: Example result

<column-default.demo/>


## Using Offset

```vue{3}
<v-row variant="flex">
    <v-column :large="6">col</v-column>
    <v-column :large="[1, 5]">col</v-column>
</v-row>
```

### :robot: Example result

<column-offset.demo/>


## Custom breakpoints

> See [Breakpoint](#breakpoint) for more informations.

```vue{4-8}
<v-row variant="flex">
    <v-column
        :large="12"
        :breakpoints="[{
            down: 1400,
            classes: ['custom', 'interesting']
        }]"
    >col</v-column>
</v-row>
```

### :robot: Example result

<column-custom.demo/>


## Props

| Name    | Type                   | Default value     | Deacription                                    |
|:--------|:-----------------------|:------------------|:-----------------------------------------------|
| large       | `number | number[]`    | `12`          | for every breakpoint                           |
| medium      | `number | number[]`    | `null`        | 1501px - 1800px                                |
| desktop     | `number | number[]`    | `null`        | 1201px - 1500px                                |
| tablet      | `number | number[]`    | `null`        | 901px - 1200px                                 |
| small       | `number | number[]`    | `null`        | 601px - 900px                                  |
| phone       | `number | number[]`    | `null`        | 461px - 600px                                  |
| tiny        | `number | number[]`    | `null`        | 0px - 460px                                    |
| breakpoints | `Breakpoint | null`    | `null`        | when you need a custom breakpoint              |
| classes     | `HTMLClass | null`     | `null`        | read more at [@Prop() classes;](/core/classes) |

> [Breakpoint](#breakpoint) <Badge text="interface" type="error"/> <br/>
> [HTMLClass](#htmlclass) <Badge text="type" type="warning"/> <br/>


## Enums & Types

#### `Breakpoint`

```typescript
interface Breakpoint {
    up?: number;
    down?: number;
    classes?: HTMLClass;
}
```

#### `HTMLClass`

```typescript
type HTMLClass = string | string[] | { [key: string]: boolean };
```
