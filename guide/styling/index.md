# Configuration

ProTable is really customizable, you can set it to match your style or your css framework easily.

::: tip
ProTable provided some [templateOptions](/guide/styling/templates) for popular css frameworks to get you started without even wasting your time.
:::

## THead

The `<thead>` tag contains (some) `<tr>` and also `<th>`. You can setting the classes of each of those tags by passing `options.thead`.

### classes

The `options.thead.classses` array will set `classList` of `<thead>` tag.

```js
const options = {
  thead: {
    classes: ['p-2', 'mt-2']
  }
}
```

The result of above options looks like:

```html
<table>
  <thead class="p-2 mt-2">
    <!-- ... -->
  </thead>
  <!-- ... -->
</table>
```

### trClasses

You can pass `options.thead.trClasses` array to set the `classList` of each `thead > tr` tags.

```js
const options = {
  thead: {
    trClasses: ['p-2', 'bg-gray-200']
  }
}
```

The result of above options looks like:

```html
<table>
  <thead>
    <tr class="p-2 bg-gray-200">
      <!-- ... -->
    </tr>
  </thead>
  <!-- ... -->
</table>
```

### thClasses

You can pass `options.thead.thClasses` array to set the `classList` of each `thead > tr` tags.

```js
const options = {
  thead: {
    thClasses: ['p-2', 'bg-gray-200']
  }
}
```

The result of above options looks like:

```html
<table>
  <thead>
    <tr>
      <th class="p-2 bg-gray-200">No</th>
      <th class="p-2 bg-gray-200">Name</th>
      <th class="p-2 bg-gray-200">City</th>
    </tr>
  </thead>
  <!-- ... -->
</table>
```

## TBody

### classes

### trClasses

### tdClasses

## TFoot

The `<tfoot>` tag contains (some) `<tr>` and also `<td>`. You can setting the classes of each of those tags by passing `options.tfoot`.

### classes

The `options.tfoot.classses` array will set `classList` of `<tfoot>` tag.

```js
const options = {
  tfoot: {
    classes: ['p-2', 'mt-2']
  }
}
```

The result of above options looks like:

```html
<table>
  <!-- ... -->
  <tfoot class="p-2 mt-2">
    <!-- ... -->
  </tfoot>
</table>
```

### trClasses

You can pass `options.tfoot.trClasses` array to set the `classList` of each `tfoot > tr` tags.

```js
const options = {
  tfoot: {
    trClasses: ['p-2', 'bg-gray-200']
  }
}
```

The result of above options looks like:

```html
<table>
  <!-- ... -->
  <tfoot>
    <tr class="p-2 bg-gray-200">
      <!-- ... -->
    </tr>
  </tfoot>
</table>
```

### tdClasses

You can pass `options.tfoot.tdClasses` array to set the `classList` of each `tfoot > tr` tags.

```js
const options = {
  tfoot: {
    tdClasses: ['p-2', 'bg-gray-200']
  }
}
```

The result of above options looks like:

```html
<table>
  <!-- ... -->
  <tfoot>
    <tr>
      <td class="p-2 bg-gray-200" colspan="..">
        <!-- Pagination -->
      </td>
    </tr>
  </tfoot>
</table>
```

## Pagination
