// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Button,
  Row,
  Col,
  Form,
  Input,
  Card,
  Select,
  DatePicker,
  Table,
  // message,
  Pagination,
  Modal,
  Radio
} from 'ant-design-vue'

Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Form.name, Form)
Vue.component(Input.name, Input)
Vue.component(Card.name, Card)
Vue.component(Select.name, Select)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Table.name, Table)
Vue.component(Pagination.name, Pagination)
Vue.component(Modal.name, Modal)
Vue.component(Radio.name, Radio)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
