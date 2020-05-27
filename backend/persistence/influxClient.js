const { InfluxDB, Point } = require('@influxdata/influxdb-client')
const { url, token, org, bucket } = require('./env'); //environment variable setuprs

//configure the Influx client for writing and query
const client = new InfluxDB({url, token})
const writeAPI = client.getWriteApi(org,bucket)

//write data to InfluxDB
//expected data format:
//groupName = string
//hostname = string
//data = array (example: [{<pointname>:<value>},{<pointname>:<value>}])
//writing to database so that each point is named <groupName>.<pointname> and each
//pt has a tag of 'system' with the value being the host name of the computer
function writeToInflux (groupName,hostname, data) {
    //construct the line syntax to write to Influx
    //syntax is 'measurement,tag=value,tag2=value field1=value,field2=value ts'
    let w = `${groupName},hostname=${hostname}`
    data.forEach((tag,i) => {
        const k = Object.keys(tag)
        const v = tag[k]
        if (i > 0) {
            w = w + `,${k}=${v}`
        } else {
            w = w + ` ${k}=${v}`
        }
    })

    writeAPI.writeRecord(w)
    // closewrite()
}

function closewrite () {
    writeAPI.close().then(() => {
    }).catch (e =>  {
    })
}

module.exports = {
    writeToInflux
}