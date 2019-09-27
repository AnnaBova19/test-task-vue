<template>
  <el-form ref="regStep3" :model="regStep3" :rules="rules">
    <el-row>
      <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <label for="dealSize" class="control-label">Average Deal Size*</label>
        <el-form-item prop="dealSize">
          <el-checkbox-group v-model="regStep3.dealSize">
            <el-checkbox v-for="item in dealSizeItems" :label="item" :key="item" name="dealSize"></el-checkbox>
          </el-checkbox-group>
          <label class="sublabel">Please check all that apply</label> 
        </el-form-item>   
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <label for="compensationStructure" class="control-label">What are they selling?*</label>
        <el-form-item prop="compensationStructure">
          <el-checkbox-group v-model="regStep3.compensationStructure">
            <el-checkbox v-for="item in compensationStructureItems" :label="item" :key="item" name="compensationStructure"></el-checkbox>
          </el-checkbox-group>
          <label class="sublabel">Please check all that apply</label> 
        </el-form-item>   
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <label for="salesTypes" class="control-label">Total Year 1 On Target Earnings*</label>
          <el-form-item prop="earnings">
            <el-slider
              v-model="regStep3.earnings"
              range
              :max="100000">
            </el-slider>
            <label class="slider-label">${{regStep3.earnings[0]}}-${{regStep3.earnings[1]}}</label> 
          </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <label for="benefites" class="control-label">Benefites Provided*</label>
        <el-form-item prop="benefites">
          <el-checkbox-group v-model="regStep3.benefites">
            <el-checkbox v-for="item in benefitsItems" :label="item" :key="item" name="benefites"></el-checkbox>
          </el-checkbox-group>
          <label class="sublabel">Please check all that apply</label> 
        </el-form-item>   
      </el-col>
    </el-row>

    <el-row>
      <el-form-item>
        <el-button round @click="goBack(-1)">Go back</el-button>
        <el-button type="primary" round @click="goToNextStep('regStep3')">Continue</el-button>
      </el-form-item>
    </el-row>
  </el-form>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'regStepThree',
    data() {
      return {
        dealSizeItems: ['0-5K', '6-10K', '11-25K', '26-50K', '50-100K', '100K+'],
        compensationStructureItems: ['Salary', 'Commission', 'Bonuses', 'Equity'],
        benefitsItems: ['Health', 'Dental', 'Vision', '401K', 'Paid Time Off', 'Car Allowance', 'Cell Allowance', 'Tuition Reimbursement', 
          'Wellness Plan/Gym Membership', 'Short and Long Term Disability', 'Training Program', 'Career Advancement Opportunities'],        rules: {
          dealSize: [
            { type: 'array', required: true, message: 'Please select at least one Deal Size', trigger: 'change' }
          ],
          compensationStructure: [
            { type: 'array', required: true, message: 'Please select at least one Compensation Structure', trigger: 'change' }
          ],
          earnings: [
            { type: 'array', required: true, message: 'Please select Target Earnings', trigger: 'change' }
          ],
          benefites: [
            { type: 'array', required: true, message: 'Please select at least one Benefit', trigger: 'change' }
          ],
        }
      }
    },

    computed: {
      ...mapGetters(['registrationStep', 'regStep3']),
    },

    methods: {
      ...mapActions(['changeRegStep', 'saveStepThreeRes', 'validRegStepThree']),

      goToNextStep(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.validRegStepThree(true);
            this.saveStepThreeRes(this.regStep3);
            localStorage.setItem('registrationInfo', JSON.stringify(this.$store.state.registration.registration));
            this.$router.push('/registration/final');
          } else {
            return false;
          }
        });
      },

      goBack(val) {
        this.changeRegStep(val);
        this.$router.go(-1);
      }
    },

    beforeCreate () {
      if (!this.$store.state.registration.isValidRegStep1) {
        this.$router.push('/registration/step1');
      } else if (!this.$store.state.registration.isValidRegStep2) {
        this.$router.push('/registration/step2');
      }
    },
  }
</script>