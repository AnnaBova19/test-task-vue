<template>
  <el-row type="flex" class="row-bg" justify="space-between">
    <el-col :span="12" :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="reg-title">
      Please tell us about the open position you are looking to hire for? ({{registrationStep}}/3)
    </el-col>
    <el-col :span="12" :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="text-right">
      Skip for now
    </el-col>
    <el-col :span="24" class="progress-bar">
      <el-progress :percentage="percentage" :color="customColor" :show-text="false"></el-progress>
    </el-col>
  </el-row>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'regHeader',
    data() {
      return {
        customColor: '#409eff',
      }
    },

    computed: {
      ...mapGetters(['registrationStep']),
      percentage() {
        return (100/3)*this.registrationStep;
      }
    },
  }
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.row-bg {
  padding: 20px 0;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
}
.reg-title {
  font-weight: bold;
}
.text-right{
  text-align: right;
}
.progress-bar {
  padding: 20px 0;
}
</style>

