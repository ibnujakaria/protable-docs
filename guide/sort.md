# Sort

This guide will show you how to disable sorting behavior specific columns.

## Disable

ProTable comes with sorting out of the box. In case you have an unsortable column, you can disable it by using [custom columns](/guide/custom-content.html#custom-column) options. See this example:

```js
ProTable.fromArray('#protable-1', data, {
  limit: 5,
  columns: {
    gender: {
      orderable: false
    },
    phone: {
      orderable: false
    }
  }
})
```

The options above will set `gender` and `phone` columns to be unorderable.

**ProTable output:**

<div id="protable-1"></div>

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
        columns: {
          gender: {
            orderable: false
          },
          phone: {
            orderable: false
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