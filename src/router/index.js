import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Upload from '../components/Upload'
import ThreeUpload from '../components/ThreeUpload'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          name: 'Upload',
          component: Upload
      },
      {
          path: '/threeupload',
          name: 'ThreeUpload',
          component: ThreeUpload
      },
      {
          path: '/hello',
          name: 'Hello',
          component: Hello
      }
  ]
})
