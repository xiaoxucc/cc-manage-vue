<template>
  <div>
    <el-card class="box_card" shadow="hover">
      <div class="user">
        <img class="user_logo" src="../assets/images/cc.jpg" alt="">
        <div class="user_info">
          <p class="name">Admin</p>
          <p class="role">超级管理员</p>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="login_info">
        <p>上次登陆时间:<span class="span_left">2022-11-04</span></p>
        <p>上次登陆地点:<span class="span_left">深圳</span></p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.user {
  display: flex;
  align-items: center;
  .user_logo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  .user_info {
    margin-left: 30px;
    .name{
      font-size: 20px;
      font-weight: 600;
    }
    .role{
      font-size: 15px;
      color: #999;
    }
  }
}
.login_info{
  font-size: 14px;
  color: #999;
  .span_left{
    color: #000;
    margin-left: 30px;
  }
}
</style>
