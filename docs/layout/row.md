# Row

::: tip
`<v-row></v-row>` can be used in various combinations. See [props](#props) for more info.
:::


## Stack layout

> Most commonly used layout that let's you stack columns directly under each other.

```vue{1-2}
<v-row variant="stack">
    <v-column v-for="i in 4">{{i}}.</v-column>
</v-row>
```

### :robot: Example result

<row-stack.demo/>


## Flex layout

> To use flex layout correctly, you need to take a look at [Column](/layout/column) component

```vue{1,3}
<v-row v-for="i in 12" variant="flex">
    <template v-for="j in 12" v-if="i * j === 12">
        <v-column v-for="k in j" :large="i">{{i}}.</v-column>
    </template>
</v-row>
```

### :robot: Example result

<row-flex.demo/>


## Flex layout - Breakpoints

> List of all available breakpoints can be found in [Props](#props).

```vue{1-2,5}
<v-row variant="flex">
    <v-column :large="6" :tablet="8" :phone="12">
        ...
    </v-column>
    <v-column :large="6" :tablet="8" :phone="12">
        ...
    </v-column>
</v-row>
```

### :robot: Example result

<row-flex-2.demo/>


## Flex layout - Row in Row

> You can stack rows in columns to the infinity and beyond.

```vue{1,3,7}
<v-row variant="flex">
    <v-column :large="12">
        <v-row variant="flex">
            <v-column :large="5">1.</v-column>
            <v-column :large="7">
                2.
                <v-row variant="flex">
                    <v-column :large="10">3.</v-column>
                    <v-column :large="2">4.</v-column>
                </v-row>
            </v-column>
        </v-row>
    </v-column>
</v-row>
```

### :robot: Example result

<row-flex-3.demo/>


## Props

| Name       | Type                   | Default value | Deacription                                     |
|:-----------|:-----------------------|:--------------|:------------------------------------------------|
| variant    | `Variant`              | `'stack'`     |                                                 |
| vertical   | `Alignment | null`     | `null`        | align children on **x-axis**                    |
| horizontal | `Alignmen | null`      | `null`        | align children on **y-axis**                    |
| classes    | `HTMLClass | null`     | `null`        | read more at [@Prop() classes](/props/classes)  |

> [Variant](#variant) <Badge text="enum" type="tip"/> <br/>
> [Alignment](#alignment) <Badge text="enum" type="tip"/> <br/>
> [HTMLClass](#htmlclass) <Badge text="type" type="warning"/> <br/>


## Enums & Types

#### `Variant`

```typescript
enum Variant {
	STACK = 'stack',
	FLEX = 'flex'
}
```

#### `Alignment`

```typescript
enum Alignment {
	CENTER = 'center',
	START = 'start',
	END = 'end',
	REVERSE = 'reverse'
}
```

#### `HTMLClass`

```typescript
type HTMLClass = string | string[] | { [key: string]: boolean };
```
