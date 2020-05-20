---
home: true
actionText: Get Started →
actionLink: /guide/
footer: MIT Licensed | Copyright © 2020-present Nurul Huda (Ibnu Zakariyya)
---

<div class="features">
  <div class="feature">
    <h2>Simple</h2>
    <p>Get your rich table with a minimal setup. Pagination, searching, ordering, are all setup for you by default.</p>
  </div>
  <div class="feature">
    <h2>Vannila Js</h2>
    <p>Do you hate jQuery? ProTable is fully written upon modern vanilla javascript. No other addinional dependencies.</p>
  </div>
  <div class="feature">
    <h2>Customizable</h2>
    <p>ProTable is very customizable, it doesn't rely on a specific CSS file/framework. You can customize it as you like.</p>
  </div>
</div>

<script>
export default {
  mounted () {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/pro-table@0.1.0/dist/js/pro-table.min.js'
    script.addEventListener('load', this.onLoad)

    document.body.append(script)
  },
  methods: {
    onLoad () {
      this.buildContainer()
      this.buildProTable()
    },
    buildContainer () {
      const container = document.createElement('div')
      container.id = 'protable'

      document.querySelector('.hero').insertBefore(
        container, document.querySelector('.action')
      )
    },
    async buildProTable () {
      const response = await fetch('/data/employee-dummy.json')
      const employees = await response.json()
      ProTable.fromArray('#protable', {
        columns: ['no', 'name', 'gender', 'email', 'phone'],
        rows: employees
      },
      {
        limit: 10,
        contents: {
          no: content => ++content,
          gender: content => {
            const span = document.createElement('span')
            span.innerText = content
            span.classList.add('badge')

            if (content === 'male') {
              span.classList.add('badge-green')
            } else {
              span.classList.add('badge-red')
            }

            return span
          },
          email: content => `<a href="mailto:${content}" target="_blank">${content}</a>`
        },
        pagination: {
          btnActiveClasses: ['active']
        }
      })
    }
  }
}
</script>

<style lang="styl">
#protable {
  width: 80vw;
  position: relative;
  left: calc(-40vw + 50%);
  padding: 1.5rem;
  box-sizing: border-box;
  border-radius: .4rem;
  /* border: 1px solid #dfe2e5; */
  box-shadow: 0 1rem 8rem rgba(0,0,0,0.06);
  margin: 2rem 0rem;
}

.badge {
  border-radius: .3rem;
  color: white;
  padding: .1rem .3rem;
  font-size: 80%;
  display: inline-block;

  &.badge-green {
    background-color: #3eaf7c;
  }

  &.badge-red {
    background-color: #ff7675;
  }
}
</style>
