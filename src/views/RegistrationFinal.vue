<template>
  <el-container>
    {{registrationInfo}}
  </el-container>
</template>

<script>
  export default {
    name: 'registrationFinal',

    computed: {
      registrationInfo() {
        return JSON.parse(localStorage.getItem('registrationInfo'));
      }
    },

    beforeCreate () {
      if (!this.$store.state.registration.isValidRegStep1) {
        this.$router.push('/registration/step1');
      } else if (!this.$store.state.registration.isValidRegStep2) {
        this.$router.push('/registration/step2');
      } else if(!this.$store.state.registration.isValidRegStep3) {
        this.$router.push('/registration/step3');
      }
    },
  }
</script>