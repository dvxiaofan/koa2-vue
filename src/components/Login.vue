/*
 * @Author: zhang
 * @Date: 2019-08-23 16:43:55
 * @Last Modified by: zhang
 * @Last Modified time: 2019-08-23 17:23:59
 */

<template>
  <div>
    <a-row>
      <a-col :span='8'></a-col>
      <a-col :span='8'>
        <a-card title="欢迎登陆">
          <a-form
            @submit="handleSubmit"
            :autoFormCreate="
              form => {
                this.form = form
              }
            "
          >
            <a-form-item
              label="username"
              :labelCol="{span: 4}"
              :wrapperCol="{span: 20}"
              fieldDecoratorId="username"
              :fieldDecotatorOptions="{
                rules: [
                {required: true, message: 'Please input your username!'}]
              }"
            >
              <a-input></a-input>
            </a-form-item>

            <a-form-item
              label="password"
              :labelCol="{span: 4}"
              :wrapperCol="{span: 20}"
              fieldDecoratorId="password"
              :fieldDecotatorOptions="{
                rules: [
                {required: true, message: 'Please input your password!'}]
              }"
            >
              <a-input></a-input>
            </a-form-item>

            <a-form-item :wrapperCol="{span: 16, offset: 4}">
              <a-button type="primary" htmlType="submit">Submit</a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
      <a-col :span="8"></a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      formLayout: 'horizontal'
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Revived values of form: ', values)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
