# Pagination

ProTable provides you a pagination feature out of the box. On this guide, we will show you variety ways to customize the pagination.

## Disable Pagination

Without any configuration, the pagination is enabled by default. However, if you want to disable it, you can pass `false` to `pagination` options:

```js
import { fromArray } from 'protable'

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

<script>
import { fromArray } from 'protable'

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
