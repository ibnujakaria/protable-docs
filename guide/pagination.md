# Pagination

ProTable provides you a pagination feature out of the box. On this guide, we will show you variety ways to customize the pagination.

## Disable Pagination

Without any configuration, the pagination is enabled by default. However, if you want to disable it, you can pass `false` to `pagination` options:

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

ProTable output:

<div id="protable-1"></div>

## Rows Limit

By default, the rows limit for each page is `10`. You can change this behavior by setting `limit` value in options parameter.

```js
ProTable.fromArray('#protable', data, {
  limit: 5
})
```


## Page Ranges

The default value of pagination page ranges is `[5, 10, 25, 50, 100, 250, 500]`. You change this behavior by setting `pagination.ranges` value in options parameter.

```js
ProTable.fromArray('#protable', data, {
  limit: 5,
  pagination: {
    rowsPerPage: {
      ranges: [5, 8, 12, 30]
    }
  }
})
```

## Rows Per Page Label

To change `"Rows Per Page"` label, you pass a string to `pagination.text` attribute.

```js
ProTable.fromArray('#protable', data, {
  limit: 5,
  pagination: {
    rowsPerPage: {
      text: 'Limit',
      ranges: [5, 8, 12, 30]
    }
  }
})
```

Here's the ProTable output of above settings:

<div id="protable-2"></div>


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

<script>
import { fromArray } from 'pro-table'

export default {
  mounted () {
    this.createProTable()  
  },
  methods: {
    async createProTable () {
      const response = await fetch('/data/employee-dummy.json')
      const employees = await response.json()

      fromArray('#protable-1', {
        columns: ['no', 'name', 'gender', 'email', 'phone'],
        rows: employees
      }, {
        limit: 5,
        pagination: {
          type: 'simple',
        },
        contents: {
          no: row => ++row
        }
      })

      fromArray('#protable-2', {
        columns: ['no', 'name', 'gender', 'email', 'phone'],
        rows: employees
      }, {
        limit: 5,
        pagination: {
          rowsPerPage: {
            text: 'Limit',
            ranges: [5, 8, 12, 30]
          }
        },
        contents: {
          no: row => ++row
        }
      })
    }
  }
}
</script>
