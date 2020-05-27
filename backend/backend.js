const sysInfo = require('./ingress/systemInfo');
const express = require('express');
const cors = require('cors');

//set up express app
const app = express()
app.use(cors())
port = 3000

//start data ingestion
sysInfo.getStaticSystemInformation()
sysInfo.startPolling()

app.get('/',(req,res) => res.send('Hello World!'))
app.get('/d/info', (req,res) => res.send(sysInfo.systemData.d))
app.get('/s/info', (req,res) => res.send(sysInfo.systemData.s))

app.listen(port, () => { console.log(`App started on port ${port}`) })
