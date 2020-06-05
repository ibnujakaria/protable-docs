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

ProTable will render the return of your callback as a content to specific cell. The return of your callback can be a `string` or `HTMLElement`.

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

## Working With Existing HTML

Let's say you have this table as an input:

<table id="table-input-1">
  <thead>
    <tr>
      <th>Company</th>
      <th>Contact Person</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Genta Soft</td>
      <td>Agus Priyono</td>
      <td>Indonesia</td>
    </tr>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
    <tr>
      <td>Ernst Handel</td>
      <td>Roland Mendel</td>
      <td>Austria</td>
    </tr>
    <tr>
      <td>Jago Ngoding</td>
      <td>Nurul Huda</td>
      <td>Indonesia</td>
    </tr>
    <tr>
      <td>Island Trading</td>
      <td>Helen Bennett</td>
      <td>UK</td>
    </tr>
    <tr>
      <td>Kopi Dingin</td>
      <td>Lendis Fabri</td>
      <td>Indonesia</td>
    </tr>
    <tr>
      <td>Laughing Bacchus Winecellars</td>
      <td>Yoshi Tannamuri</td>
      <td>Canada</td>
    </tr>
    <tr>
      <td>Aksamedia</td>
      <td>Rizal Jundi</td>
      <td>Indonesia</td>
    </tr>
    <tr>
      <td>Magazzini Alimentari Riuniti</td>
      <td>Giovanni Rovelli</td>
      <td>Italy</td>
    </tr>
    <tr>
      <td>Indev Id</td>
      <td>Hengky</td>
      <td>Indonesia</td>
    </tr>
  </tbody>
</table>

ProTable will use the `innerText` of every `th` as column keys.

So if you want to change the `Contact Person` cell content, you have to pass `['Contact Person']()` as callback.

```js
import { fromTable } from 'protable'

fromTable('#protable-5', {
  contents: {
    ['Contact Person']: content => {
      return `☏ ${content}`
    },
    Country: content => {
      const span = document.createElement('span')

      span.innerText = content
      span.style.fontWeight = 600
      // random color
      span.style.color = `#` + ((1<<24)*Math.random()|0).toString(16)

      return span
    }
  }
})
```

<br />

**ProTable Output:**

<table id="protable-5">
  <thead>
    <tr>
      <th>Company</th>
      <th>Contact Person</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Genta Soft</td>
      <td>Agus Priyono</td>
      <td>Indonesia</td>
    </tr>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
    <tr>
      <td>Ernst Handel</td>
      <td>Roland Mendel</td>
      <td>Austria</td>
    </tr>
    <tr>
      <td>Jago Ngoding</td>
      <td>Nurul Huda</td>
      <td>Indonesia</td>
    </tr>
    <tr>
      <td>Island Trading</td>
      <td>Helen Bennett</td>
      <td>UK</td>
    </tr>
    <tr>
      <td>Kopi Dingin</td>
      <td>Lendis Fabri</td>
      <td>Indonesia</td>
    </tr>
    <tr>
      <td>Laughing Bacchus Winecellars</td>
      <td>Yoshi Tannamuri</td>
      <td>Canada</td>
    </tr>
    <tr>
      <td>Aksamedia</td>
      <td>Rizal Jundi</td>
      <td>Indonesia</td>
    </tr>
    <tr>
      <td>Magazzini Alimentari Riuniti</td>
      <td>Giovanni Rovelli</td>
      <td>Italy</td>
    </tr>
    <tr>
      <td>Indev Id</td>
      <td>Hengky</td>
      <td>Indonesia</td>
    </tr>
  </tbody>
</table>

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
    script.src = 'https://cdn.jsdelivr.net/npm/protable@0.1.3/dist/protable.min.js'
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

      ProTable.fromTable('#protable-5', {
        contents: {
          ['Contact Person']: content => {
            return `☏ ${content}`
          },
          Country: content => {
            const span = document.createElement('span')

            span.innerText = content
            span.style.fontWeight = 600
            // random color
            span.style.color = `#` + ((1<<24)*Math.random()|0).toString(16)

            return span
          }
        }
      })
    }
  }
}
</script>
