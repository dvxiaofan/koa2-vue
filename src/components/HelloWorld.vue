/*
 * @Author: zhang
 * @Date: 2019-09-04 16:03:50
 * @Last Modified by: zhang
 * @Last Modified time: 2019-09-04 17:37:47
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
      v-if="hackReset"
      v-on:receiveTable="receiveTable"
      :requestList="requestList"
      :updateData="updateData"
      :searchParams="searchParams"
    ></user-table>
    <user-form
      :visible="visible"
      :userInfo="userInfo"
      :requestList="requestList"
      :title="title"
      v-on:hideForm="hideForm"
    ></user-form>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm'
import UserTable from '@/components/UserTable'
import SearchForm from '@/components/SearchForm'
import { Modal } from 'ant-design-vue';
import { async } from 'q';

export default {
  name: 'HelloWorld',
  components: {
    UserForm,
    UserTable,
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
      let self = this.$http
      let _this = this
      let deletedId
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

        _this.title = type === 'edit' ? '编辑用户' : '用户详情'
        _this.visible = true
        deletedId = _this.selectItem.id
      } else if (type === 'delete') {
        if (!_this.selectItem.id) {
          Modal.info({
            title: '信息',
            content: '请选择一个用户'
          })
          return
        }

        Modal.confirm({
          content: '确定要删除此用户吗',
          onOk: async () => {
            let options = {
              url: 'api/deletePersonnelTable',
              method: 'post'
            }
            let params = {
              id: deletedId
            }
            const result = await axios.getData(self, options, params)
            if (result === '删除成功') {
              _this.requestList = !_this.requestList
            }
          }
        })
      }
    },
    hideForm (data, params) {
      this.visible = false
      if (data === 'update' && params !== undefined) {
        this.requestList = !this.requestList
        this.updateData = params
      }
      if (data === 'update' && params === undefined) {
        this.requestList = !this.requestList
      }
    }
  },
  receiveTable (data) {
    console.log(11)
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
