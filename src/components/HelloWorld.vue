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

    <user-table></user-table>
    <user-form></user-form>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm'
import UserTable from '@/components/UserTable'
import SearchForm from '@/components/SearchForm'

export default {
  name: 'HelloWorld',
  components: {
    UserForm,
    UserTable,
    SearchForm
  }
}
</script>

<style scoped>

</style>
