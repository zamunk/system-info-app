
/** InfluxDB v2 URL */
const url = process.env['INFLUXDB_URL'] || 'http://localhost:9999'
/** InfluxDB authorization token */
const token = process.env['INFLUXDB_TOKEN'] || 'g6uDnZ3r-zH6_1gV0Iq7REEQ1DaTiJ0TQn6BrXL0jEncMaLwiex_j6kA8izw1UPkPTow8UC3wcDBaty2yGb8ew=='
/** Organization within InfluxDB URL  */
const org = process.env['INFLUXDB_ORG'] || 'dev'
/**InfluxDB bucket used in examples  */
const bucket = 'sysinfo'
// ONLY onboarding example
/**InfluxDB user  */
const username = 'my-user'
/**InfluxDB password  */
const password = 'my-password'

module.exports = {
  url,
  token,
  org,
  bucket,
  username,
  password,
}