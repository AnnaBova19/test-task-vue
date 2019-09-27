<template>
  <el-container>
    <el-main class="dark-theme">
      <reg-header></reg-header>

      <el-row class="card-wrap">
        <el-card>
          <reg-step-one></reg-step-one>
        </el-card>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import regHeader from '../components/registration/regHeader';
import regStepOne from '../components/registration/regStepOne';

export default {
  name: 'registration',
  components: {
    regHeader,
    regStepOne,
  },
}
</script>

