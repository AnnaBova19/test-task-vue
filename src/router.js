import Vue from 'vue'
import Router from 'vue-router'

import RegistrationStepOne from './views/RegistrationStepOne.vue'
import RegistrationStepTwo from './views/RegistrationStepTwo.vue'
import RegistrationStepThree from './views/RegistrationStepThree.vue'
import RegistrationFinal from './views/RegistrationFinal.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/registration'
    },
    {
      path: '/registration',
      redirect: '/registration/step1',
    },
    {
      path: '/registration/step1',
      name: 'regStep1',
      component: RegistrationStepOne
    },
    {
      path: '/registration/step2',
      name: 'regStep2',
      component: RegistrationStepTwo
    },
    {
      path: '/registration/step3',
      name: 'regStep3',
      component: RegistrationStepThree
    },
    {
      path: '/registration/final',
      name: 'regFinal',
      component: RegistrationFinal,
    },    
  ]
})
