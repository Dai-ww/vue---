<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>通用后台管理系统</span>
      </div>
      <el-form label-width="80px" :model="form" ref="form" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import { nameRule, passwordRule } from '../utils/validate';
import { setToken } from '../utils/setToken';
import { login } from '@/api/api';
export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [{ validator: nameRule, trigger: 'blur' }],
        password: [{ validator: passwordRule, trigger: 'blur' }],
      },
    };
  },
  methods: {
    login(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          console.log(this.form);
          // 登录封装成API
          login(this.form).then((res) => {
            if (res.data.status === 200) {
              setToken('username', res.data.username);
              setToken('token', res.data.token);
              this.$message({ message: res.data.message, type: 'success' });
              this.$router.push('/home');
            }
            console.log(res.data.token);
          });
        } else {
          console.error(this.form);
        }
      });
    },
  },
};
</script>
<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url('../assets/landscape.png') center no-repeat;
  .el-card{
    background: #65768557;
  }
  .box-card {
    max-width: 450px;
    margin: 300px auto;
    color: #fff;
    .el-form .el-form-item__label{
      width: 80px;
      color: #fff;
    }
    .el-card__header {
      font-size: 20px;
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>
