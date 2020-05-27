<template>
  <div class="ma-2">
    <v-container v-if="loading">
      <v-row>
        <v-col>
          <v-skeleton-loader class="mx-auto mb-2" max-width="500" type="heading"></v-skeleton-loader>
          <v-skeleton-loader class="mx-auto mb-2" max-width="500" type="image"></v-skeleton-loader>
          <v-skeleton-loader class="mx-auto mb-2" max-width="500" type="heading"></v-skeleton-loader>
          <v-skeleton-loader class="mx-auto" max-width="500" type="list-item@10"></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
    <v-card v-else class="px-3 mx-auto deep-purple black--text d-inline-block">
      <v-row>
        <div class="d-inline-block">
          <div class="d-flex">
            <v-icon class="black--text ml-2">mdi-gauge</v-icon>
            <v-card-subtitle class="headline black--text">CPU Speed</v-card-subtitle>
          </div>
          <div class="d-inline-block container mx-auto">
            <v-card class="black-lighten-2 mx-auto">
              <barchart
              :chartdata="getChartData"/>
            </v-card>
          </div>
        </div>
      </v-row>
      <v-row>
      <div class="d-inline-flex">
        <v-icon class="black--text ml-2">mdi-desktop-classic</v-icon>
        <v-card-title class="headline">{{ systemStaticData.osInfo.hostname }}</v-card-title>
      </div>
        <v-expansion-panels inset hover tile class="ma-2">
          <v-expansion-panel
            v-for="(system,name) in systemStaticData"
            :key="name"
          >
            <v-expansion-panel-header class="blue-grey--text">{{ name.toUpperCase() }}</v-expansion-panel-header>
            <div  v-if="typeof(system) == 'string'">
              <v-expansion-panel-content>
                <v-chip
                class="amber--text"
                v-for="i in system.split(' ')"
                :key="i">{{ i }}</v-chip>
              </v-expansion-panel-content>
            </div>
            <div v-else-if="system.length > 0">
              <v-expansion-panel-content
              v-for="(group,i) in system"
              :key="Math.random()*2+i"
              class="teal--text">
                <p v-for="(tag,name,i) in group" :key=i+name>
                  {{ name }}: {{ tag }}
                </p>
              </v-expansion-panel-content>
            </div>
            <div v-else >
              <v-expansion-panel-content class="teal--text">
                <p v-for="(tag,name,i) in system"
                :key="i">{{ name }}: {{ tag }}</p>
              </v-expansion-panel-content>
            </div>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
import barchart from '../components/BarChart'

export default {
  name: 'SystemDashboard',
  data () {
    return {
      systemStaticData: {},
      systemDynamicData: {},
      loading: true,
      interval: null
    }
  },
  inject: ['theme'],
  components: {
    barchart
  },
  computed: {
    getAvgSpeed: function () {
      return this.systemDynamicData.cpuCurrentspeed.avg
    },
    getChartData: function () {
      console.log(`cpu cores: ${this.systemDynamicData.cpuCurrentspeed.cores}`)
      const cores = this.systemDynamicData.cpuCurrentspeed.cores // grab the data for the chart
      cores.push(this.systemStaticData.cpu.speedmax) // add a nother datapoint to the dataset, this is the maximum y value
      cores.push(0.0)
      const ds = {
        labels: ['CPU-1', 'CPU-2', 'CPU-3', 'CPU-4'],
        datasets: [{
          data: cores,
          backgroundColor: 'rgba(94,120,143,0.5)',
          label: 'CPU Cores Speed'
        }]
      }
      return ds
    },
    getCPURatedSpeed: function () {
      return this.systemStaticData.cpu.speed
    }
  },
  methods: {
    pollDynamicAPI () {
      this.interval = setInterval(() => {
        const durl = this.$store.getters.getDynamicAPIURL
        axios.get(durl).then((res) => {
          this.systemDynamicData = res.data
          this.loading = false
          // this.$data._chart.update()
        }).catch(e => {
          this.systemDynamicData = `Failed to get data from ${durl}`
        })
      }, 5000)
    },
    pollStaticAPI () {
      const surl = this.$store.getters.getStaticAPIURL
      axios.get(surl).then((res) => {
        this.systemStaticData = res.data
      }).catch(e => { this.systemStaticData = `Failed to get data from ${surl}` })
    }
  },
  mounted () {
    this.pollDynamicAPI()
    this.pollStaticAPI()
  }
}
</script>
