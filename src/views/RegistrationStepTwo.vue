<template>
  <el-container>
    <el-main class="dark-theme">
      <reg-header></reg-header>

      <el-row class="card-wrap">
        <el-card>
          <reg-step-two></reg-step-two>
        </el-card>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import regHeader from '../components/registration/regHeader';
import regStepTwo from '../components/registration/regStepTwo';

export default {
  name: 'registration',
  components: {
    regHeader,
    regStepTwo,
  },
}
</script>


