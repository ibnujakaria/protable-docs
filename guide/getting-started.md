---
sidebarDepth: 3
---

# Getting Started

## Installation

You can install ProTable with several ways.

### Using CDN

```html
<script src="https://cdn.jsdelivr.net/npm/pro-table@0.1.2/dist/pro-table.min.js"></script>
```

You can access object `ProTable` globally after the script is being derived.

### Using NPM

```bash
npm i pro-table
```

## Basic Usage

`ProTable` can be used in 2 ways: either with an array or with a usual HTML table DOM. 

### Create From Array

HTML:

```html
<div id="container"></div>
```

Javascript:

```js
import { fromArray } from 'pro-table'

fromArray('#container', [
  {
    name: 'Nurul Huda',
    relationship: 'Married',
    blog: 'https://jagongoding.com'
  },
  {
    name: 'Abdullah Wahid',
    city: 'Bangkalan'
  },
  {
    city: 'Lamongan',
    name: 'Lendis Fabri',
    blog: 'https://kopiding.in'
  },
  {
    name: 'Elmo Bachtiar',
    relationship: 'Single'
  }
])
```

### Create From Complex Array

Or you can build a `ProTable` using **nested object** for more complex table output.

```js
fromArray('#container', [
  {
    name: 'Nurul Huda',
    birth: {
      day: 1,
      month: 'January',
      year: 1996
    },
    city: 'Surabaya'
  },
  {
    name: 'Wahid Abdullah',
    birth: {
      day: 2,
      month: 'February',
      year: 1996
    },
    city: 'Bangkalan'
  },
  {
    name: 'Lendis Fabri',
    birth: {
      day: 3,
      month: 'Maret',
      year: 1996
    },
    city: 'Lamongan'
  }
])
```

### Create From HTML Table

The second way is creating `ProTable` from a DOM HTMl table. This way is just really simple as you don't need to change your
current html.

```html
<table id="table-city">
  <thead>
    <tr>
      <th>Name</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nurul Huda</td>
      <td>Surabaya</td>
    </tr>
    <tr>
      <td>Wahid Abdullah</td>
      <td>Bangkalan</td>
    </tr>
    <tr>
      <td>Arif Subroto</td>
      <td>Bojonegoro</td>
    </tr>
  </tbody>
</table>
```

Here's what the js script looks like:

```js
import { fromTable } from 'pro-table'

fromTable('#table-city')
```
