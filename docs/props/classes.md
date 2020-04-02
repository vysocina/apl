# `@Prop Classes: HTMLClass`

## Example usage:

### as `String`

```vue
<v-component classes="layout layout--dark">
    ...
</v-component>
```

### as `Array`

```vue
<v-component :classes="['layout', 'layout--dark']">
    ...
</v-component>
```

### as `Object`

```vue
<v-component :classes="{
    'layout': true,
    'layout--dark': Theme.isDark
}">
    ...
</v-component>
```

## Typescript

#### `HTMLClass` <Badge text="type" type="warning"/>

```typescript
type HTMLClass = string | string[] | { [key: string]: boolean };
```
