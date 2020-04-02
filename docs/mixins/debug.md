# `@Mixin Debug`

::: tip
Every component should be linked to the debug mixin, you can try it by enabling debug mode:<br/>
```typescript
@Component({})
export default class MyDebug extends Debg {
	public debug: boolean = true;
}
```
:::


## Methods

* `debugLog()`

> Will print component state to console when `this.debug` on is switched from `false` to `true`.

```typescript
debugLog(debugOptions: DebugOptions) => void
```


## Typescript

#### `DebugOptions` <Badge text="interface" type="error"/>

```typescript
interface DebugOptions {
	c?: string;
	m?: string;
	t?: Date;
	debugWithTime?: boolean;
}
```
