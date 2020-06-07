# Configuration

ProTable is really customizable, you can set it to match your style or your css framework easily.

::: tip
ProTable provided some [templateOptions](/guide/styling/templates) for popular css frameworks to get you started without even wasting your time.
:::

## THead

The `<thead>` tag contains (some) `<tr>` and also `<th>`. You can setting the classes of each of those tags by passing `options.thead` object.

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

The `<tbody>` tag contains `<tr>`s and also `<td>`s. You can setting the classes of each of those tags by passing `options.tbody` object.

### classes

The `options.tbody.classses` array will set `classList` of `<tbody>` tag.

```js
const options = {
  tbody: {
    classes: ['p-2', 'mt-2']
  }
}
```

The result of above options looks like:

```html
<table>
  <!-- ... -->
  <tbody class="p-2 mt-2">
    <!-- ... -->
  </tbody>
  <!-- ... -->
</table>
```

### trClasses

You can pass `options.tbody.trClasses` array to set the `classList` of each `tbody > tr` tags.

```js
const options = {
  tbody: {
    trClasses: ['p-2', 'bg-gray-200']
  }
}
```

The result of above options looks like:

```html
<table>
  <!-- ... -->
  <tbody>
    <tr class="p-2 bg-gray-200">
      <!-- ... -->
    </tr>
  </tbody>
  <!-- ... -->
</table>
```

### tdClasses

You can pass `options.tbody.tdClasses` array to set the `classList` of each `tbody > tr` tags.

```js
const options = {
  tbody: {
    tdClasses: ['p-2', 'bg-gray-200']
  }
}
```

The result of above options looks like:

```html
<table>
  <!-- ... -->
  <tbody>
    <tr>
      <td class="p-2 bg-gray-200" colspan="..">
        <!-- Pagination -->
      </td>
    </tr>
  </tbody>
  <!-- ... -->
</table>
```

## TFoot

The `<tfoot>` tag contains (some) `<tr>` and also `<td>`. You can setting the classes of each of those tags by passing `options.tfoot` object.

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

## Search

With no configuration, the generated DOM structure of ProTable search input will look like this:

```html
<input type="text" placeholder="Search" style="width: fit-content; display: inline-block;">
```

### Classes

You can add `classes` to the input by passing `options.search.classes` array to ProTable instance.

```js
const options = {
  search: {
    classes: ['form-control', 'form-control-sm']
  }
}
```

```html
<input
  type="text"
  class="form-control form-control-sm"
  placeholder="Search"
  style="width: fit-content; display: inline-block;">
```

### Wrapper

If you need a wrapper element. You can add it by passing `options.search.wrapperElement` string and `options.search.wrapperClasses` array.

```js
const options = {
  search: {
    classes: ['form-control', 'form-control-sm'],
    wrapperElement: 'section',
    wrapperClasses: ['p-2']
  }
}
```

The result of above options will look like this:

```html
<section class="p-2">
  <input
    type="text"
    class="form-control form-control-sm"
    placeholder="Search"
    style="width: fit-content; display: inline-block;">
</section>
```

## Pagination

By default, the generated DOM structure of ProTable pagination looks like this:

```html
<div>
  <button>Prev</button>
  <button>1</button>
  <button>2</button>
  <button>2</button>
  <button>Next</button>
</div>
```

By using several options, you can change the DOM structure and its styling.

Use `containerElement` and `containerClasses` to modify the default `<div>` container of pagination.

```js
fromArray('#table-id', data, {
  pagination: {
    type: 'default',
    containerElement: 'ul',
    containerClasses: [
      'pagination', 'pagination-sm'
    ]
  }
})
```

Now your generated DOM will look like this:

```html
<ul class="pagination pagination-sm">
  <button>Prev</button>
  <button>1</button>
  <button>2</button>
  <button>2</button>
  <button>Next</button>
</ul>
```

And to wrap the buttons with another element, you set the `btnWrapper`, `btnWrapperClasses`, `btnWrapperActiveClasses` attributes of pagination options object.

```js
fromArray('#table-id', data, {
  pagination: {
    type: 'default',
    containerElement: 'ul',
    containerClasses: [
      'pagination', 'pagination-sm'
    ],
    btnWrapper: 'li',
    btnWrapperClasses: [
      'page-item'
    ],
    btnWrapperActiveClasses: [
      'active'
    ],
  }
})
```

The last thing, you can also change button element add classes for the button elements by using `btnElement` and `btnClasses` attributes.

```js
fromArray('#table-id', data, {
  pagination: {
    type: 'default',
    containerElement: 'ul',
    containerClasses: [
      'pagination', 'pagination-sm'
    ],
    btnWrapper: 'li',
    btnWrapperClasses: [
      'page-item'
    ],
    btnWrapperActiveClasses: [
      'active'
    ],
    btnElement: 'a',
    btnClasses: [
      'page-link'
    ]
  }
})
```

Now, your generated DOM will completely match the Bootstrap 4 pagination structure:

```html
<ul class="pagination pagination-sm">
  <li class="page-item">
    <a class="page-link">Prev</a>
  </li>
  <li class="page-item active">
    <a class="page-link">1</a>
  </li>
  <li class="page-item">
    <a class="page-link">2</a>
  </li>
  <li class="page-item">
    <a class="page-link">2</a>
  </li>
  <li class="page-item">
    <a class="page-link">Next</a>
  </li>
</ul>
```