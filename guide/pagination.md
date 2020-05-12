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

## Rows Per Page

## Info