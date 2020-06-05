# Filter

This guide will show you how to customize ProTable searching feature.

## Placeholder

The default placeholder of search input is `"Search"`.

You can change it by passing `search.placeholder` to the options params.

```js
ProTable.fromArray('#protable', data, {
  limit: 5,
  search: {
    placeholder: 'Search for something..'
  }
})
```

**ProTable output:**
<div id="protable-1"></div>

## Disable Specific Columns

ProTable comes with local filtering feature out of the box. In case you have an unsearchable column, you can disable it by using [custom columns](/guide/custom-content.html#custom-column) options. See this example:

```js
ProTable.fromArray('#protable', data, {
  limit: 5,
  columns: {
    gender: {
      searchable: false
    },
    phone: {
      searchable: false
    }
  }
})
```

The options above will set `gender` and `phone` columns to be unsearchable.


**ProTable output:**

Try to search for `"female"` keyword and the result will be nothing.

<div id="protable-2"></div>

## Disable All Search Functionality

If you decide to completely disable the search functionality, pass `false` to `search` options value instead.

```js
ProTable.fromArray('#protable', data, {
  limit: 5,
  search: false
})
```


**ProTable output:**

<div id="protable-3"></div>

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
        contents: {
          no: row => ++row
        },
        search: {
          placeholder: 'Search for something..'
        }
      })

      fromArray('#protable-2', {
        columns: ['no', 'name', 'gender', 'email', 'phone'],
        rows: employees
      }, {
        limit: 5,
        columns: {
          gender: {
            searchable: false
          },
          phone: {
            searchable: false
          }
        },
        contents: {
          no: row => ++row
        }
      })

      fromArray('#protable-3', {
        columns: ['no', 'name', 'gender', 'email', 'phone'],
        rows: employees
      }, {
        limit: 5,
        search: false,
        contents: {
          no: row => ++row
        }
      })
    }
  }
}
</script>
