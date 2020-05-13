# Pagination

ProTable provides you a pagination feature out of the box.

## Disable Pagination

Without any configuration, the pagination is enabled by default. However, if you want to disable it, you can pass an options like this:

```js
import { fromArray } from 'pro-table'

const data = [
  // data
]

fromArray('#table-id', data, {
  pagination: false
})
```

## Simple Pagination

ProTable has two pagination types. If you don't set any of them, it will give you the default one. But, if you prefer a simple pagination that only contains two buttons (prev and next button), you can explicitly set the type like this:

```js
fromArray('#table-id', data, {
  pagination: 'simple'
})
```

Or like this:

```js
fromArray('#table-id', data, {
  pagination: {
    type: 'simple'
  }
})
```

## Structure & Styling

By default, the DOM-generated of the pagination looks like this:

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

The last thing, you can also add classes for the button elements by using `btnClasses` attribute.

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
    <button class="page-link">Prev</button>
  </li>
  <li class="page-item active">
    <button class="page-link">1</button>
  </li>
  <li class="page-item">
    <button class="page-link">2</button>
  </li>
  <li class="page-item">
    <button class="page-link">2</button>
  </li>
  <li class="page-item">
    <button class="page-link">Next</button>
  </li>
</ul>
```

## Rows Per Page

## Info