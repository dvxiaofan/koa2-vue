/*
 * @Author: zhang
 * @Date: 2019-09-04 16:31:56
 * @Last Modified by: zhang
 * @Last Modified time: 2019-09-04 16:33:03
 */

<template>
  <div>
    <a-card>
      <a-table
        bordered
        :columns="columns"
        :dataSource="dataSource"
        :rowSelection="rowSelection"
        :pagination="false"
      />

      <template>
        <a-pagination
          showQuickJumper
          :defaultCurrent="params.page"
          :total="total"
          @change="onChangePage"
          style="float: right;margin: 10px -9px 0 0;"
        />
      </template>
    </a-card>
  </div>
</template>

<script>
import dataSource from './data'

export default {
  name: 'UserTable',
  props: ['requestList', 'updateData', 'searchParams'],
  data () {
    return {
      dataSource: [],
      selectedRows: [],
      selectedRowKesy: [],
      pagination: {},
      columns: dataSource.columns,
      total: null,
      params: {
        page: 1,
        pageSize: 10
      },
      requestListFlag: this.requestList
    }
  },
  watch: {
    requestList () {
      this.request()
    },
    updateData () {
      this.$emit('receiveTable', this.updateData)
    },
    searchParams () {
      let _this = this
      this$http.post('api/searchOperator', this.searchParams).then(res => {
        res.data.result.map((item, index) => {
          item.key = index
        })
        _this.dataSource = res.data.result
      })
    }
  },
  computed: {
    rowSelection () {
      let _this = this
      return {
        type: 'radio',
        onChange: (selectedRowKesy, selectedRows) => {
          _this.selectedRowKesy = selectedRowKesy
          _this.selectedRows = selectedRows
          console.log(`selectedRowKesy: ${selectedRowKesy}`, `selectedRows: ${selectedRows}`)
        },
        onSelect: (record, selected, selectedRows, nativeEvent) => {
          this.$emit('reveiveTable', record)
        }
      }
    }
  },
  methods: {
    request () {},
    onChangePage (pageNumber) {
      this.params.page = pageNumber
      this.request()
    }
  },
  mounted () {
    this.request()
  }
}
</script>

<style scoped>

</style>
