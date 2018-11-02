<template>
  <div class="new">
    <div class="left-side">
      <div class="title">
        题目控件
      </div>
      <ul>
        <li class="type" @click="handleSelectButton('radio')">
          <i class="icon danxuan"></i>
          <span class="name">单选题</span>
        </li>
        <li class="type"  @click="handleSelectButton('check-box')">
          <i class="icon duoxuan"></i>
          <span class="name">多选题</span>
        </li>
        <li class="type"  @click="handleSelectButton('check-box')">
          <i class="icon duoxuan"></i>
          <span class="name">主观题</span>
        </li>
      </ul>
    </div>
    <div class="right-side">
      <div>
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
      <div class="type-content">
        <template v-for="(item, index) in selectForm">
            <div  class="type" :key="index">
              <div v-if="item.type === 'check-box'">
                问题名称： <el-input v-model="form.name"></el-input>
              </div>
              <div v-if="item.type === 'answer'">
              </div>
            </div>
        </template>
      </div>
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
      selectForm: [
        {
          name: '今天这个分享怎么样？',
          type: 'check-box',
          options: [
            {
              name: '满意',
            },
            {
              name: '不满意',
            },
          ],
        },
        {
          name: '今天这个分享怎么样？',
          type: 'answer',
          answer: '',
        },
      ],
    };
  },
  methods: {
    handleSelectButton(data) {
      this.selectForm.push({
        type: data,
        name: '',
      });
    },
  },
};
</script>
<style lang="scss">
  .new {
    .el-form {
      overflow: hidden;
    }
    .el-form-item {
      float: left;
    }
  }
</style>
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
      .type-content {
        .type {
          border: $--border-base;
          padding: 10px 10px;
        }
      }
    }
  }
</style>
