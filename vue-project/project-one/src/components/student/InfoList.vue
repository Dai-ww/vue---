<template>
  <div class="infoList">
    <el-form :inline="true" class="demo-form-inline" size="small">
      <el-form-item>
        <el-button type="primary" @click="add">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="sex_text" label="性别" align="center">
      </el-table-column>
      <el-table-column prop="age" label="年龄" align="center">
      </el-table-column>
      <el-table-column prop="father" label="父亲" align="center">
      </el-table-column>
      <el-table-column prop="mother" label="母亲" align="center">
      </el-table-column>
      <el-table-column prop="address" label="家庭住址" align="center">
      </el-table-column>
      <el-table-column prop="time" label="入校时间" align="center">
      </el-table-column>
      <el-table-column prop="phone" label="联系方式" align="center">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-edit"
            @click="handleEdit(scope.row)"
          ></el-button>
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      :title="state ? '添加学生信息' : '修改学生信息'"
      :visible.sync="dialogTableVisible"
      width="500px"
    >
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="姓名" prop="name" :label-width="formLabelWidth">
          <el-input v-model="form.name" prop="name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex" :label-width="formLabelWidth">
          <el-radio v-model="form.sex" prop="sex" label="1">男</el-radio>
          <el-radio v-model="form.sex" prop="sex" label="2">女</el-radio>
        </el-form-item>
        <el-form-item label="年龄" prop="age" :label-width="formLabelWidth">
          <el-input v-model="form.age" prop="age"></el-input>
        </el-form-item>
        <el-form-item
          label="父亲姓名"
          prop="father"
          :label-width="formLabelWidth"
        >
          <el-input v-model="form.father" prop="father"></el-input>
        </el-form-item>
        <el-form-item
          label="母亲姓名"
          prop="mother"
          :label-width="formLabelWidth"
        >
          <el-input v-model="form.mother" prop="mother"></el-input>
        </el-form-item>
        <el-form-item
          label="家庭住址"
          prop="address"
          :label-width="formLabelWidth"
        >
          <el-input v-model="form.address" prop="address"></el-input>
        </el-form-item>
        <el-form-item
          label="入校时间"
          prop="time"
          :label-width="formLabelWidth"
        >
          <el-date-picker
            v-model="form.time"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item
          label="联系方式"
          prop="phone"
          :label-width="formLabelWidth"
        >
          <el-input v-model="form.phone" prop="phone"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel(form)">取 消</el-button>
        <el-button type="primary" @click="sure(form)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { info, getInfo, infoDel } from '@/api/student';
export default {
  data() {
    return {
      tableData: [],
      total: 0,
      dialogTableVisible: false,
      form: {
        name: '',
        sex: '',
        age: '',
        father: '',
        mother: '',
        address: '',
        time: '',
        phone: '',
      },
      formLabelWidth: '150px',
      rules: {
        name: [{ required: true, message: '请输入姓名' }],
        sex: [{ required: true }],
        age: [{ required: true, message: '请输入年龄' }],
        address: [{ required: true, message: '请输入地址' }],
        time: [{ required: true, message: '请输入入学时间' }],
        phone: [{ required: true, message: '请输入联系方式' }],
      },
      state: true,
    };
  },
  methods: {
    getData() {
      getInfo().then((res) => {
        this.tableData = res.data.data;
        this.total = res.data.total;
      });
    },
    handleEdit(row) {
      console.log(row);
      this.form = { ...row };
      this.state = false;
      this.dialogTableVisible = true;
    },
    handleDelete(row) {
      this.$alert('确定要删除吗？', '提示', {
        confirmButtonText: '确定',
        callback: () => {
          infoDel(row.id).then((res) => {
            if (res.data.status === 200) {
              this.getData();
              this.$message({ type: 'success', message: '删除成功' });
            }
          });
        },
      });
    },
    add() {
      this.form = {};
      this.dialogTableVisible = true;
      this.state = true;
    },
    sure(form) {
      this.$refs.form.validate((valid) => {
        if (valid) {
          if (this.state) {
            info('get', this.form).then((res) => {
              if (res.data.status === 200) {
                this.getData();
                this.dialogTableVisible = false;
                this.$refs.form.resetFields();
                this.$message({ type: 'success', message: '新增成功' });
              }
            });
          } else {
            info('put', this.form).then((res) => {
              if (res.data.status === 200) {
                this.getData();
                this.dialogTableVisible = false;
                this.$refs.form.resetFields();
                this.$message({ type: 'success', message: '修改成功' });
              }
            });
          }
        }
      });
    },
    cancel(form) {
      this.dialogTableVisible = false;
      this.$refs.form.resetFields();
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style lang="scss" scoped>
.infoList {
  .el-form-item,
  .demo-form-inline {
    text-align: left;
  }
}
</style>
