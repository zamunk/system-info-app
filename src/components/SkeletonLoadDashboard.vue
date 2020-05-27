<template>
  <div>
    <v-col class="ma-0 pa-0">
      <v-row class="ma-0 pa-0">
        <v-skeleton-loader
          class="flex mx-auto my-1"
          max-width="300"
          type="card"
          name="a">
        </v-skeleton-loader>
        <v-skeleton-loader
          class="flex mx-auto my-1"
          max-width="300"
          type="card"
          name="b">
        </v-skeleton-loader>
      </v-row>
      <v-row class="ma-0 pa-0">
        <v-skeleton-loader
          class="flex mx-auto my-1"
          max-width="300"
          type="card"
          name="c">
        </v-skeleton-loader>
        <v-skeleton-loader
          class="flex mx-auto my-1"
          max-width="300"
          type="card"
          name="d">
        </v-skeleton-loader>
      </v-row>
    </v-col>
  </div>
</template>

<script>
export default {
  name: 'SkeletonLoadDashboard',
  inject: ['theme']
}
</script>
