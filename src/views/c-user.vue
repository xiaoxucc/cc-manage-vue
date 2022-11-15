<template>
  <div>
    <el-button type="primary" size="medium" @click="dialogVisible = true" icon="el-icon-plus">新增</el-button>
    <el-dialog :title="isAddUser ? '新增用户' : '编辑用户'" :visible.sync="dialogVisible" :before-close="handleClose">
      <el-form ref="form" :rules="rules" label-position="right" label-width="80px" :inline="true" :model="formInline"
        size="medium" :hide-required-asterisk="true">
        <el-form-item label="姓名" prop="name">
          <el-input clearable :maxlength="10" v-model.trim="formInline.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input-number :precision="0" :controls="false" :min="1" v-model="formInline.age" placeholder="请输入年龄">
          </el-input-number>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select clearable v-model="formInline.sex" placeholder="请选择性别">
            <el-option label="女" :value="0"></el-option>
            <el-option label="男" :value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="生日" prop="birth">
          <el-date-picker clearable v-model="formInline.birth" type="date" placeholder="请选择日期" format="yyyy 年 MM 月 dd 日"
            value-format="yyyy 年 MM 月 dd 日">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="地址" prop="addr">
          <el-input clearable v-model="formInline.addr" placeholder="请输入地址"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="handleCancel" size="medium">取 消</el-button>
        <el-button type="primary" @click="handleSubmit" size="medium">确 定</el-button>
      </span>
    </el-dialog>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      isAddUser: true,
      formInline: {
        name: '',
        age: undefined,
        sex: '',
        birth: '',
        addr: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入名字', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        age: [
          { required: true, message: '请输入年龄', trigger: 'blur' },
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        birth: [
          { required: true, message: '请选择生日', trigger: 'change' }
        ],
        addr: [
          { required: true, message: '请输入地址', trigger: 'blur' }
        ],
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$message({ message: '添加用户成功！', type: 'success' })
          this.handleCancel()
        } else {
          this.$message({ message: '请填写完整用户信息', type: 'warning' })
        }
      })
    },
    handleCancel() {
      this.handleClose()
      this.dialogVisible = false
    },
    handleClose() {
      this.$refs.form.resetFields()
    },
  }
}
</script>
<style>
.el-input-number .el-input__inner {
  text-align: left !important;
  width: 220px;
}
</style>

<style lang="less" scoped>

</style>
