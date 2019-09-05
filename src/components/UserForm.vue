/*
 * @Author: zhang
 * @Date: 2019-09-04 16:31:59
 * @Last Modified by: zhang
 * @Last Modified time: 2019-09-04 16:33:19
 */

<script>
import { Form, Select, Radio } from 'ant-design-vue'
import moment from 'moment'
const FormItem = Form.Item
const Option = Select.Option
const RadioGroup = Radio.Group
const CollectionCreateForm = Form.create()({
  componets: {
    'a-form': Form,
    'a-form-item': FormItem,
    'a-select': Option,
    'a-radio': Radio,
    'a-radio-group': RadioGroup
  },

  props: ['visible', 'selectData', 'title', 'userInfo'],
  render (h) {
    const { visible, form, title } = this
    const { getFieldDecotator } = form
    const userInfo = this.userInfo || {
      state: 'devzhang',
      sex: 'man',
      birthday: '1999-09-09',
      interest: 'music'
    }
    const formItemLayout = {
      labelCol: {
        xs: { span: 8 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 16 },
        sm: { span: 20 }
      }
    }

    const rowObject = {
      minRows: 4,
      maxRows: 6
    }

    return (
      <a-modal
        visible={visible}
        title={title}
        okText="Create"
        onCancel={() => {
          this.$emit('cancel')
        }}
        onOk={() => {
          this.$emit('create')
        }}
      >
        <a-form layout="vertical">
          <a-form-item {...{ props: formItemLayout }} label="用户名：">
            {title === '用户详情'
              ? userInfo.username
              : getFieldDecotator('username', {
                initialValue: userInfo.username,
                rules: [
                  {
                    type: 'string',
                    message: '该用户名有效'
                  },
                  {
                    required: true,
                    message: '该用户名不能为空'
                  }
                ]
              })(<a-input placeholder="请输入用户名" />)
            }
          </a-form-item>

          <a-form-item {...{ props: formItemLayout }} label="性别">
            {title === '用户详情'
              ? (<p> {userInfo.sex}</p>)
              : getFieldDecotator('sex', {
                initialValue: userInfo.sex
              })(
                <a-radio-group>
                  <a-radio value="男">男</a-radio>
                  <a-radio value="女">女</a-radio>
                </a-radio-group>
              )
            }
          </a-form-item>

          <a-form-item {...{ props: formItemLayout }} label="状态">
            {title === '用户详情'
              ? userInfo.state
              : getFieldDecotator('state', {
                initialValue: userInfo.state
              })(
                <a-select>
                  <a-option value="devzhang">devzhang</a-option>
                  <a-option value="xiaofan">xiaofan</a-option>
                  <a-option value="ming">ming</a-option>
                  <a-option value="somebody">somebody</a-option>
                  <a-option value="youyouyou">youyouyou</a-option>
                </a-select>
              )
            }
          </a-form-item>

          <a-form-item {...{ props: formItemLayout }} label="生日：">
            {title === '用户详情'
              ? moment(userInfo.birthday).format('YYYY-MM-DD')
              : getFieldDecotator('birthday', {
                initialValue: moment(userInfo.birthday).format('YYYY-MM-DD')
              })(<a-date-picker showTime format='YYYY-MM-DD'></a-date-picker>)
            }
          </a-form-item>

          <a-form-item {...{ props: formItemLayout }} label="爱好">
            {title === '用户详情'
              ? userInfo.interest
              : getFieldDecotator('interest', {
                initialValue: userInfo.interest
              })(<a-text-area autosize={rowObject}></a-text-area>)
            }
          </a-form-item>

        </a-form>
      </a-modal>
    )
  }
})

export default {
  name: 'UserForm',
  props: ['visible', 'userInfo', 'title'],
  methods: {
    handleCancel () {
      const form = this.formRef.form
      this.$emit('hideForm', 'noUpdate')
      form.resetFields()
    },
    handleCreate () {
      const form = this.formRef.form
      form.resetFields()
      this.$emit('hideForm', 'upDate')
    },
    saveFormRef (formRef) {
      this.formRef = formRef
    }
  },

  render () {
    return (
      <div>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.visible}
          userInfo={this.userInfo}
          title={this.title}
          onCancel={this.onCancel}
          onCreate={this.onCreate}
        />
      </div>
    )
  }
}
</script>

<style scoped>

</style>
