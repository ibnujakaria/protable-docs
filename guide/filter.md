# Filter

This guide will show you how to disable searching feature for specific columns.

## Disable

ProTable comes with local filtering feature out of the box. In case you have an unsearchable column, you can disable it by using [custom columns](/guide/custom-content.html#custom-column) options. See this example:

```js
ProTable.fromArray('#protable-1', data, {
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

<div id="protable-1"></div>

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
    }
  }
}
</script>