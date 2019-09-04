/*
 * @Author: zhang
 * @Date: 2019-08-23 16:43:55
 * @Last Modified by: zhang
 * @Last Modified time: 2019-09-04 15:44:34
 */

<template>
  <div>
    <a-row>
      <a-col :span='8'></a-col>
      <a-col :span='8'>
        <a-card title="欢迎登陆">
          <a-form
            :form='form'
            @submit="handleSubmit"
          >
            <a-form-item
              label="用户名"
              :labelCol="formItemLayout.labelCol"
              :wrapperCol="formItemLayout.wrapperCol"
            >
              <a-input
                placeholder="username"
                v-decorator="[
                  'username',
                  {rules: [{ required: true, message: 'Please input your username!' }]}
                ]"
              />
            </a-form-item>

            <a-form-item
              label="密码"
              :labelCol="formItemLayout.labelCol"
              :wrapperCol="formItemLayout.wrapperCol"
            >
              <a-input
                type="password"
                placeholder="password"
                v-decorator="[
                  'password',
                  {rules: [{ required: true, message: 'Please input your password!' }]}
                ]"
              />
            </a-form-item>

            <a-form-item :wrapperCol="{span: 16, offset: 4}">
              <a-button type="primary" htmlType="submit">登录</a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
      <a-col :span="8"></a-col>
    </a-row>
  </div>
</template>

<script>
const formItemLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 18 }
}

export default {
  name: 'Login',
  data () {
    return {
      formItemLayout,
      formLayout: 'horizontal',
      form: this.$form.createForm(this)
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
