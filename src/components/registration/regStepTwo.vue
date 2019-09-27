<template>
  <el-form ref="regStep2" :model="regStep2" :rules="rules">
    <el-row>
      <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <label for="salesTypes" class="control-label">Type of Sales*</label>
        <el-form-item prop="salesTypes">
          <el-checkbox-group v-model="regStep2.salesTypes">
            <el-checkbox v-for="item in salesTypesItems" :label="item" :key="item" name="salesTypes"></el-checkbox>
          </el-checkbox-group>
          <label class="sublabel">Please check all that apply</label> 
        </el-form-item>   
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <label for="selling" class="control-label">What are they selling?*</label>
        <el-form-item prop="selling">
          <el-checkbox-group v-model="regStep2.selling">
            <el-checkbox v-for="item in sellingItems" :label="item" :key="item" name="selling"></el-checkbox>
          </el-checkbox-group>
          <label class="sublabel">Please check all that apply</label> 
        </el-form-item>   
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <label for="sellIndustries" class="control-label">Industries they sell into*</label>
        <el-form-item prop="sellIndustries">
          <el-checkbox-group v-model="regStep2.sellIndustries">
            <el-checkbox v-for="item in industriesItems" :label="item" :key="item" name="sellIndustries"></el-checkbox>
          </el-checkbox-group>
          <label class="sublabel">Please check all that apply</label> 
        </el-form-item>   
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <label for="salesCycle" class="control-label">Industries they sell into*</label>
        <el-form-item prop="salesCycle">
          <el-checkbox-group v-model="regStep2.salesCycle">
            <el-checkbox v-for="item in salesCycleItems" :label="item" :key="item" name="salesCycle"></el-checkbox>
          </el-checkbox-group>
          <label class="sublabel">Please check all that apply</label> 
        </el-form-item>   
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <label for="quotas" class="control-label">Quotas*</label>
        <el-form-item prop="quotas">
          <el-checkbox-group v-model="regStep2.quotas">
            <el-checkbox v-for="item in quotasItems" :label="item" :key="item" name="quotas"></el-checkbox>
          </el-checkbox-group>
          <label class="sublabel">Please check all that apply</label> 
        </el-form-item>   
      </el-col>
    </el-row>

    <el-row>
      <el-form-item>
        <el-button round @click="goBack(-1)">Go back</el-button>
        <el-button type="primary" round @click="goToNextStep('regStep2', 1)">Continue</el-button>
      </el-form-item>
    </el-row>
  </el-form>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'regStepTwo',
    data() {
      return {
        salesTypesItems: ['B2B', 'B2C/Residental', 'Retail', 'Channel Sales/Indirect Sales'],
        sellingItems: ['Product', 'Solution/Service'],
        industriesItems: ['Retail', 'Gov\'t', 'Education', 'Healthcare/Medical/Pharma', 'Financial', 'Technology', 'Commercial Accounts', 'Residental/Individual Consumer Accounts'],
        salesCycleItems: ['0-30 days', '30-60 days', '60-90 days', '3-6 months', '6-9 months', '12 months+'],
        quotasItems: ['Weekly', 'Monthly', 'Quarterly', 'Annual'],
        rules: {
          salesTypes: [
            { type: 'array', required: true, message: 'Please select at least one Type of Sales', trigger: 'change' }
          ],
          selling: [
            { type: 'array', required: true, message: 'This field is required', trigger: 'change' }
          ],
          sellIndustries: [
            { type: 'array', required: true, message: 'Please select at least one Industry', trigger: 'change' }
          ],
          salesCycle: [
            { type: 'array', required: true, message: 'Please select at least one Sales Cycle', trigger: 'change' }
          ],
          quotas: [
            { type: 'array', required: true, message: 'Please select at least one Quotas', trigger: 'change' }
          ],
        }
      }
    },

    computed: {
      ...mapGetters(['registrationStep', 'regStep2', 'isValidRegStep1']),
    },

    methods: {
      ...mapActions(['changeRegStep', 'saveStepTwoRes', 'validRegStepTwo']),

      goToNextStep(formName, val) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.validRegStepTwo(true);
            this.saveStepTwoRes(this.regStep2);
            this.changeRegStep(val);
            this.$router.push('/registration/step3');
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
      }
    },
  }
</script>