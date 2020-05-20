# Custom Content

ProTable is fully customizable. You can change many things to match your preferences. This guide will show you how to customize your ProTable.

## Custom Column

There are two ways to instantiate a ProTable instance. Either using `fromArray()` helper to build a rich HTML table from an array, or using `fromTable()` helper to build from an existing HTML table.

By default, ProTable will use the attribute JSON as the lable of columns.

For example, by using this data:

```js
const data = [
  {
    name: 'Fulan bin Fulan',
    city: 'Surabaya',
    gender: 'Male'
  },
  {
    name: 'Fulanah binti Fulan',
    city: 'Jakarta',
    gender: 'Female'
  }
]
```

ProTable will then generate two columns with label `Name` and `City`.

**ProTable Output:**

<div id="protable-1"></div>

You can change the label by passing columns options.

```js
fromArray('#table-container', data, {
  columns: {
    name: {
      label: 'Full Name'
    },
    city: {
      label: 'Address'
    }
  }
})
```

**ProTable Output:**
<div id="protable-2"></div>

### Display Only Some Columns

If you only want to display some columns of your data, you can do that as follows:

```js
fromArray('#protable-3', {
  columns: ['name', 'gender'],
  rows: data
})
```

**ProTable Output:**
<div id="protable-3"></div>

## Custom Cell

You can also custom your cell content by passing a callback to `options.contents`.

```js
fromArray('#protable-4', data, {
  contents: {
    name: content => content.toUpperCase(),
    city: content => content.split('').join('-'),
    gender: content => {
      const span = document.createElement('span')

      span.innerText = content
      span.style.color = content === 'Male' ? '#3eaf7c' : '#ff7675'

      return span
    }
  }
})
```

**ProTable Output:**
<div id="protable-4"></div>

<script>
const data = [
  {
    name: 'Fulan bin Fulan',
    city: 'Surabaya',
    gender: 'Male'
  },
  {
    name: 'Fulanah binti Fulan',
    city: 'Jakarta',
    gender: 'Female'
  }
]

export default {
  mounted () {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/pro-table@0.1.0/dist/js/pro-table.min.js'
    script.addEventListener('load', this.onLoad)

    document.body.append(script)
  },
  methods: {
    onLoad () {
      ProTable.fromArray('#protable-1', data)

      ProTable.fromArray('#protable-2', data, {
        columns: {
          name: {
            label: 'Full Name'
          },
          city: {
            label: 'Address'
          }
        }
      })

      ProTable.fromArray('#protable-3', {
        columns: ['name', 'gender'],
        rows: data
      })

      ProTable.fromArray('#protable-4', data, {
        contents: {
          name: content => content.toUpperCase(),
          city: content => content.split('').join('-'),
          gender: content => {
            const span = document.createElement('span')

            span.innerText = content
            span.style.color = content === 'Male' ? '#3eaf7c' : '#ff7675'

            return span
          }
        }
      })
    }
  }
}
</script>