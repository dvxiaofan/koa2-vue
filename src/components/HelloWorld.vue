/*
 * @Author: zhang
 * @Date: 2019-09-04 16:03:50
 * @Last Modified by: zhang
 * @Last Modified time: 2019-09-19 14:11:39
 */

<template>
  <div>
    <search-form></search-form>
    <a-card style="margin-top: 1px; margin-bottom: -1px;">
      <a-button
        class="button"
        type="primary"
        icon="plus"
        @click="handleOperator('create')"
      >创建员工
      </a-button>
      <a-button icon="edit" @click="handleOperator('edit')" class="button">编辑员工</a-button>
      <a-button @click="handleOperator('detail')" class="button">员工详情</a-button>
      <a-button
        class="button"
        type="danger"
        icon="delete"
        @click="handleOperator('delete')"
      >删除员工
      </a-button>
    </a-card>

    <user-table
    ></user-table>
    <user-form
      ref='collectionForm'
      :visible='visible'
      :userInfo='userInfo'
      :requestList='requestList'
      :title='title'
      v-on:hideForm="hideForm"
    >
    </user-form>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm'
import SearchForm from '@/components/SearchForm'
import UserTable from '@/components/UserTable'
import { Modal } from 'ant-design-vue'

export default {
  name: 'HelloWorld',
  components: {
    UserTable,
    UserForm,
    SearchForm
  },
  data () {
    return {
      visible: false,
      userInfo: {},
      selectItem: {},
      title: '',
      requestList: false,
      hackReset: true
    }
  },
  methods: {
    handleOperator (type) {
      // let self = this.$http
      // let _this = this
      // let deleteId
      if (type === 'create') {
        this.title = '创建员工'
        this.visible = true
        this.userInfo = null
      } else if (type === 'edit' || type === 'detail') {
        if (!this.selectItem.id) {
          Modal.info({
            title: '信息',
            content: '请选择一个用户'
          })
          return
        }
        console.log('执行编辑用户')
        // this.title = type === 'edit' ? '编辑用户' : '用户详情'
        // this.visible = true
        // deleteId = this.selectItem.id
      } else if (type === 'delete') {
        if (!this.selectItem.id) {
          Modal.info({
            title: '信息',
            content: '请选择一个用户'
          })
          return
        }
        Modal.confirm({
          content: '确定要删除此用户吗'
        })
      }
    },
    hideForm (data, params) {
      console.log('data：', data, 'params:', params)
      this.visible = false
      // 更新完数据， 通知userTable更新数据
      if (data === 'update' && params !== undefined) {
        this.requestList = !this.requestList
        this.updateData = params
        return
      }
      if (data === 'update' && params === undefined) {
        // 创建完数据，通知userTable更新数据
        this.requestList = !this.requestList
      }
    }
  },
  receiveTable (data) {
    this.userInfo = data
    this.selectItem = data
  }
}
</script>

<style scoped>
  .button {
    float: left;
    margin-left: 10px;
  }

</style>
