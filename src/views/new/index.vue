<template>
  <div class="new">
    <div class="left-side">
      <div class="title">
        题目控件
      </div>
      <ul>
        <li class="type">
          <i class="icon danxuan"></i>
          <span class="name">单选题</span>
        </li>
        <li class="type">
          <i class="icon duoxuan"></i>
          <span class="name">多选题</span>
        </li>
      </ul>
    </div>
    <div class="right-side">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="培训人">
          <el-input v-model="form.author"></el-input>
        </el-form-item>
        <el-form-item label="日期">
          <el-date-picker
            v-model="form.time"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        author: '',
        time: '',
      },

    };
  },
};
</script>
<style lang="scss" scoped>
  .new {
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    min-height: 300px;
    background: $--background-color-regular;
    .left-side {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 306px;
      padding: 30px 20px;
      background: $--background-color-hover;
      border: $--border-base;
      box-shadow: $--box-shadow-base;
      .title {
        font-size: $--size-base-small;
        color: $--color-text-regular;
        margin-bottom: 5px;
      }
      .type {
        cursor: pointer;
        height: 38px;
        line-height: 38px;
        border: $--border-base;
        background: $--background-color-base;
        margin-bottom: 3px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        .icon {
          width: 16px;
          height: 16px;
        }
        .name {
          font-size: $--size-base;
          color: $--color-text-primary;
        }
        .danxuan {
          background: url("../../assets/images/danxuan.svg") no-repeat center center;
        }
        .duoxuan {
          background: url("../../assets/images/duoxuan.svg") no-repeat center center;
        }
      }
    }
    .right-side {
      position: fixed;
      top: 80px;
      bottom: 30px;
      left: 321px;
      right: 50px;
      padding: 30px 20px;
      background: $--background-color-hover;
      border: $--border-base;
      box-shadow: $--box-shadow-base;
    }
  }
</style>
