<template>
  <el-container>
    <el-main class="dark-theme">
      <reg-header></reg-header>

      <el-row class="card-wrap">
        <el-card>
          <reg-step-three></reg-step-three>
        </el-card>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import regHeader from '../components/registration/regHeader';
import regStepThree from '../components/registration/regStepThree';

export default {
  name: 'registration',
  components: {
    regHeader,
    regStepThree,
  },
}
</script>


