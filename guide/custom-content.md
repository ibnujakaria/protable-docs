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
    city: 'Surabaya'
  },
  {
    name: 'Fulanah binti Fulan',
    city: 'Jakarta'
  }
]
```

ProTable will then generate two columns with label `Name` and `City`.

<div id="protable-1"></div>

You can change the label by passing columns options.

```js
fromArray('#table-container', data, {
  columns: {
    name: {
      label: 'Full Name'
    },
    city: {
      label: 'Addr'
    }
  }
})
```

<div id="protable-2"></div>

## Custom Cell

## Custom Footer

<script>
const data = [
  {
    name: 'Fulan bin Fulan',
    city: 'Surabaya'
  },
  {
    name: 'Fulanah binti Fulan',
    city: 'Jakarta'
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
      ProTable.fromArray('#protable-1', data, { search: false })
      ProTable.fromArray('#protable-2', data, {
        search: false,
        columns: {
          name: {
            label: 'Full Name'
          },
          city: {
            label: 'Addr'
          }
        }
      })
    }
  }
}
</script>