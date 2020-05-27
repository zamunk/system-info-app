<template>
<v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <div dense v-for="item in menuItems" :key="item.label" tag="v-list">
        <v-list-item>
          <v-list-item-action>
            <router-link :to="item.to" @click="toolbarTitle = item.lable" tag="button">
              <v-icon medium>
                {{ item.icon }}
              </v-icon>
            </router-link>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <v-list-item-title>
                <router-link :to="item.to" @click="toolbarTitle = item.lable" tag="button">
                  {{ item.label }}
                </router-link>
              </v-list-item-title>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-navigation-drawer>
    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <router-link to="/" @click="toolbarTitle = 'Home'" tag="button">System Info</router-link>
        <v-icon>mdi-information-variant</v-icon>
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer app>
      <div>&copy; 2020</div>
    </v-footer>
    <v-snackbar :value="this.$store.state.snackBar" @input="clearSnack()" :timeout="3000">{{ getsnackMessage }}</v-snackbar>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: null,
      toolbarTitle: 'Dashboard',
      menuItems: [{
        icon: 'mdi-view-dashboard',
        label: 'Dashboard',
        to: 'systemdashboard'
      },
      {
        icon: 'mdi-cog',
        label: 'Settings',
        to: 'settings'
      }]
    }
  },
  methods: {
    clearSnack () {
      this.$store.commit('setSnackBar', { on: false, msg: '' })
    }
  },
  computed: {
    getsnackMessage () {
      return this.$store.state.snackMessage
    }
  }
}
</script>
