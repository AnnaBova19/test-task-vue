const state = {
  registration: {
    step1: {
      position: '',
      responsibility: [],
      experience: '',
      openings: '',
      timeline: '',
      workingFrom: '',
      officeZIP: '',
      education: '',
      seekingBilingual: false,
    },
    step2: {
      salesTypes: [],
      selling: [],
      sellIndustries: [],
      salesCycle: [],
      quotas: [],
    },
    step3: {
      dealSize: [],
      compensationStructure: [],
      earnings: [0, 100000],
      benefites: []
    }
  },
  registrationStep: 1,
  isValidRegStep1: false,
  isValidRegStep2: false,
  isValidRegStep3: false,
};

const getters= {
  regStep1: state => state.registration.step1,
  regStep2: state => state.registration.step2,
  regStep3: state => state.registration.step3,
  registrationStep: state => state.registrationStep,
  isValidRegStep1: state => state.isValidRegStep1,
  isValidRegStep2: state => state.isValidRegStep2,
  isValidRegStep3: state => state.isValidRegStep3,
};

const mutations = {
  setRegStep(state, payload) {
    state.registrationStep = state.registrationStep + payload;
  },
  setStepOneRes(state, payload) {
    state.registration.step1 = payload;
  },
  setStepTwoRes(state, payload) {
    state.registration.step2 = payload;
  },
  setStepThreeRes(state, payload) {
    state.registration.step3 = payload;
  },
  setValidRegStepOne(state, payload) {
    state.isValidRegStep1 = payload;
  },
  setValidRegStepTwo(state, payload) {
    state.isValidRegStep2 = payload;
  },
  setValidRegStepThree(state, payload) {
    state.isValidRegStep3 = payload;
  }
};

const actions = {
  changeRegStep({commit}, data) {
    commit('setRegStep', data);
  },
  saveStepOneRes({commit}, data) {
    commit('setStepOneRes', data);
  },
  saveStepTwoRes({commit}, data) {
    commit('setStepTwoRes', data);
  },
  saveStepThreeRes({commit}, data) {
    commit('setStepThreeRes', data);
  },
  validRegStepOne({commit}, data) {
    commit('setValidRegStepOne', data);
  },
  validRegStepTwo({commit}, data) {
    commit('setValidRegStepTwo', data);
  }, 
  validRegStepThree({commit}, data) {
    commit('setValidRegStepThree', data);
  }, 
}

export default {
  state,
  getters,
  mutations,
  actions,
};