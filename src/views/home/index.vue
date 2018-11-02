<template>
  <div class="home" v-loading="isLoading">
    <el-table
      :ref="tableName"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleTableSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="创建人"
        prop="author">
      </el-table-column>
      <el-table-column
        prop="startTime"
        label="开始时间"
        width="120">
      </el-table-column>
      <el-table-column
        prop="endTime"
        label="结束时间"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        label="统计详情"
        show-overflow-tooltip>
        <template slot-scope="scope">
          <el-button type="primary" @click="handleToggleQRCode(scope.row.author)">统计详情</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="二维码"
        show-overflow-tooltip>
        <template slot-scope="scope">
          <el-button type="primary" @click="handleToggleQRCode(scope.row.author)">主要按钮</el-button>
        </template>
      </el-table-column>
    </el-table>
    <QECode :is-open="isOpenDialog"
            @closeItem="handleCloseDialog"></QECode>
  </div>
</template>

<script>
import TableHelperMixin from '../../mixins/table_helper';
import QECode from './QRCode.vue';

export default {
  name: 'home',
  data() {
    return {
      tableData: [{
        startTime: '2016-05-02',
        endTime: '2016-05-02',
        author: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        startTime: '2016-05-02',
        endTime: '2016-05-02',
        author: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        startTime: '2016-05-02',
        endTime: '2016-05-02',
        author: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        startTime: '2016-05-02',
        endTime: '2016-05-02',
        author: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        startTime: '2016-05-02',
        endTime: '2016-05-02',
        author: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        startTime: '2016-05-02',
        endTime: '2016-05-02',
        author: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        startTime: '2016-05-02',
        endTime: '2016-05-02',
        author: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }],
      isOpenDialog: false,
    };
  },
  methods: {
    handleToggleQRCode() {
      this.isOpenDialog = true;
    },
    handleCloseDialog() {
      this.isOpenDialog = false;
    },
    fetchQuestionnaireList() {
      // this.isLoading = true;
      this.$http(this.$api.getQuestionnaireList)
        .then(
          (res) => {
            console.log(res);
          },
          (error) => {
            console.error(error);
          },
        );
    },
  },
  mixins: [TableHelperMixin],
  components: {
    QECode,
  },
  created() {
    this.fetchQuestionnaireList();
  },
};
</script>

<style lang="scss" scoped>
  .home {
    width: 1366px;
    margin: 50px auto;
    min-height: 300px;
    background: $--background-color-base;
  }
</style>
