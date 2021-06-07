import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import router from './router';
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import VueApollo from 'vue-apollo'

const httpLink = new HttpLink({
  uri: 'https://api.waifuwars.madao-king.xyz',
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})

Vue.use(VueApollo)
Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
