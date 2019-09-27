<template>
  <el-form :model="regStep1" :rules="rules" ref="regStep1" label-position="top">
    <el-row>
      <el-col :span="12" :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
        <el-form-item label="Position Type" prop="position">
          <el-select v-model="regStep1.position" placeholder="">
            <el-option label="Position one" value="pos1"></el-option>
            <el-option label="Position two" value="pos2"></el-option>
            <el-option label="Position three" value="pos3"></el-option>
          </el-select>
        </el-form-item>      
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <label for="responsibility" class="control-label">Job Responsibilities*</label>
        <el-form-item prop="responsibility">
          <el-checkbox-group v-model="regStep1.responsibility">
            <el-checkbox v-for="item in responsibilityItems" :label="item" :key="item" name="responsibility"></el-checkbox>
          </el-checkbox-group>
          <label class="sublabel">Please check all that apply</label> 
        </el-form-item>   
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12" :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
        <el-form-item label="Position experience" prop="experience">
          <el-select v-model="regStep1.experience" placeholder="">
            <el-option label="Experience one" value="exp1"></el-option>
            <el-option label="Experience two" value="exp2"></el-option>
            <el-option label="Experience three" value="exp3"></el-option>
          </el-select>
        </el-form-item>      
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12" :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
        <el-form-item label="How many openings do you want to fill?" prop="openings">
          <el-input v-model.number="regStep1.openings"></el-input>
        </el-form-item>   
      </el-col>
      <el-col :span="12" :xs="24" :sm="24" :md="10" :lg="10" :xl="10" :offset="1">
        <el-form-item label="What is your timeline to fill these openeings?" prop="timeline">
          <el-select v-model="regStep1.timeline" placeholder="">
            <el-option label="Timeline one" value="tl1"></el-option>
            <el-option label="Timeline two" value="tl2"></el-option>
            <el-option label="Timeline three" value="tl3"></el-option>
          </el-select>
        </el-form-item>      
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <label for="workingFrom" class="control-label">What will the candidate be working from?*</label>
        <el-form-item prop="workingFrom">
          <el-radio-group v-model="regStep1.workingFrom">
            <el-radio label="Office"></el-radio>
            <el-radio label="Office with ability to work remotely form home"></el-radio>
            <el-radio label="Position is fully remote"></el-radio>
          </el-radio-group>
        </el-form-item>   
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12" :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
        <el-form-item label="Office ZIP Code" prop="officeZIP">
          <el-input v-model="regStep1.officeZIP"></el-input>
        </el-form-item>   
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12" :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
        <el-form-item label="Education/Degree" prop="education">
          <el-select v-model="regStep1.education" placeholder="">
            <el-option label="Education one" value="edu1"></el-option>
            <el-option label="Education two" value="edu2"></el-option>
            <el-option label="Education three" value="edu3"></el-option>
          </el-select>
        </el-form-item>      
      </el-col>
    </el-row>

    <el-row>
      <el-form-item>
        <el-switch v-model="regStep1.seekingBilingual" active-text="Instant delivery"></el-switch>
      </el-form-item>
    </el-row>

    <el-row>
      <el-form-item>
        <el-button type="primary" round @click="goToNextStep('regStep1', 1)">Continue</el-button>
      </el-form-item>
    </el-row>
  </el-form>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    data() {
      return {
        responsibilityItems: ['Lead Generation', 'New Client Acquisition', 'Managing & Growing Existing Accounts', 'Sales Leadership'],
        rules: {
          position: [
            { required: true, message: 'The Position Type field is required', trigger: 'change' }
          ],
          responsibility: [
            { type: 'array', required: true, message: 'Please select at least one Job Responsibility', trigger: 'change' }
          ],
          experience: [
            { required: true, message: 'The Position Experience field is required', trigger: 'change' }
          ],
          openings: [
            { required: true, message: 'This field is required', trigger: 'blur' },
            { type: 'number', message: 'This field should be a number', trigger: 'blur' }
          ],
          timeline: [
            { required: true, message: 'This field is required', trigger: 'change' }
          ],
          workingFrom: [
            { required: true, message: 'Please select place where candidate will be working from', trigger: 'change' }
          ],
          officeZIP: [
            { required: true, message: 'This Office ZIP code field field is required', trigger: 'blur' },
          ],
          education: [
            { required: true, message: 'The Education/Degree field is required', trigger: 'change' }
          ],
        }
      };
    },

    computed: {
      ...mapGetters(['registrationStep', 'regStep1']),
    },

    methods: {
      ...mapActions(['changeRegStep', 'saveStepOneRes', 'validRegStepOne']),

      goToNextStep(formName, val) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.validRegStepOne(true);
            this.saveStepOneRes(this.regStep1);
            this.changeRegStep(val);
            this.$router.push('/registration/step2');
          } else {
            return false;
          }
        });
      },
    },
  }
</script>