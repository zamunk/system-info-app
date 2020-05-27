<template>
  <v-container>
    <form>
      <v-text-field
        v-model="address"
        label="Host Address">
      </v-text-field>
      <v-text-field
        v-model="port"
        label="Port#">
      </v-text-field>
      <v-text-field
        v-model="stat"
        label="Static Data">
      </v-text-field>
      <v-text-field
        v-model="dyn"
        label="Dynamic Data">
      </v-text-field>
      <v-btn class="mr-4 primary" @click.prevent="setConfig()">Set</v-btn>
    </form>
  </v-container>
</template>

<script>
export default {
  name: 'Settings',
  data () {
    return {
      address: '',
      port: '',
      stat: '',
      dyn: ''
    }
  },
  components: {
    //
  },
  computed: {
    baseHostAddress () {
      return this.$store.state.baseHostAddress
    },
    hostAPIPort () {
      return this.$store.state.hostAPIPort
    },
    staticData () {
      return this.$store.state.staticURL
    },
    dynamicData () {
      return this.$store.state.dynamicURL
    }
  },
  methods: {
    setConfig () {
      const hostConfig = {
        base: this.address,
        port: this.port,
        stat: this.stat,
        dyn: this.dyn
      }
      this.$store.commit('setHostConfig', hostConfig)
      this.$store.commit('setSnackBar', { on: true, msg: `Set Host Configuration ${this.address}` })
    }
  },
  mounted () {
    this.address = this.baseHostAddress
    this.port = this.hostAPIPort
    this.stat = this.staticData
    this.dyn = this.dynamicData
  }
}
</script>
