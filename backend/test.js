// const si = require('systeminformation')
// let systemData = {}

const memtestdata = {
    system: {
    manufacturer: "Microsoft Corporation",
    "model": "Surface Pro 4",
    "version": "D:0B:08F:1C:03P:38",
    "serial": "-",
    "uuid": "",
    "sku": "-"
    },
    "bios": {
    "vendor": "Microsoft Corporation",
    "version": "108.2706.768",
    "releaseDate": "2019-18-04",
    "revision": ""
    },
    "baseboard": {
    "manufacturer": "Microsoft Corporation",
    "model": "Surface Pro 4",
    "version": "",
    "serial": "",
    "assetTag": ""
    },
    "chassis": {
    "manufacturer": "Microsoft Corporation",
    "model": "",
    "type": "Laptop",
    "version": "",
    "serial": "",
    "assetTag": "",
    "sku": ""
    },
    "cpu": {
    "manufacturer": "Intel®",
    "brand": "Core™ i5-6300U",
    "vendor": "GenuineIntel",
    "family": "6",
    "model": "78",
    "stepping": "3",
    "revision": "",
    "voltage": "",
    "speed": "2.40",
    "speedmin": "0.40",
    "speedmax": "3.00",
    "governor": "powersave",
    "cores": 4,
    "physicalCores": 2,
    "processors": 1,
    "socket": "",
    "cache": {
    "l1d": 65536,
    "l1i": 65536,
    "l2": 524288,
    "l3": 3
    }
    },
    "cpuFlags": "fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush dts acpi mmx fxsr sse sse2 ss ht tm pbe syscall nx pdpe1gb rdtscp lm constant_tsc art arch_perfmon pebs bts rep_good nopl xtopology nonstop_tsc cpuid aperfmperf pni pclmulqdq dtes64 monitor ds_cpl vmx smx est tm2 ssse3 sdbg fma cx16 xtpr pdcm pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand lahf_lm abm 3dnowprefetch cpuid_fault epb invpcid_single pti ssbd ibrs ibpb stibp tpr_shadow vnmi flexpriority ept vpid ept_ad fsgsbase tsc_adjust bmi1 hle avx2 smep bmi2 erms invpcid rtm mpx rdseed adx smap clflushopt intel_pt xsaveopt xsavec xgetbv1 xsaves dtherm ida arat pln pts hwp hwp_notify hwp_act_window hwp_epp md_clear flush_l1d",
    "cpuCache": {
    "l1d": 65536,
    "l1i": 65536,
    "l2": 524288,
    "l3": 3
    },
    "memLayout": [
    {
    "size": 8270409728,
    "bank": "",
    "type": "",
    "clockSpeed": 0,
    "formFactor": "",
    "partNum": "",
    "serialNum": "",
    "voltageConfigured": -1,
    "voltageMin": -1,
    "voltageMax": -1
    }
    ],
    "graphics": {
    "controllers": [
    {
    "vendor": "Intel Corporation",
    "model": "Skylake GT2 [HD Graphics 520] ",
    "bus": "Onboard",
    "vram": 256,
    "vramDynamic": false
    }
    ],
    "displays": [
    {
    "vendor": "",
    "model": "",
    "main": true,
    "builtin": true,
    "connection": "eDP-1",
    "sizex": 260,
    "sizey": 173,
    "pixeldepth": 24,
    "resolutionx": 2736,
    "resolutiony": 1824,
    "currentResX": 2736,
    "currentResY": 1824,
    "positionX": 0,
    "positionY": 0,
    "currentRefreshRate": 60
    }
    ]
    },
    "osInfo": {
    "platform": "linux",
    "distro": "Ubuntu",
    "release": "20.04 LTS",
    "codename": "Focal Fossa",
    "kernel": "5.4.0-31-generic",
    "arch": "x64",
    "hostname": "xaqUbuntuDev",
    "codepage": "UTF-8",
    "logofile": "ubuntu",
    "serial": "55730374ab0c483e8c23a3f2cd52543f",
    "build": "",
    "servicepack": "",
    "uefi": true
    }
    }

// // si.memLayout().then (res => {
// //     let temp = {}
// //     console.log (memtestdata)
// //     memtestdata.forEach((module,i) => {
// //         temp = new Object(temp + {
// //             [`module${i+1}`] : module
// //         })
// //     //     systemData.memlayout[`module${i+1}`] = module.size
// //     //     //  systemData.memlayout.[`module${i+1}`].size = module.size
// //     //     //  systemData.memlayout.[`module${i+1}`].bank = module.bank
// //     //     //  systemData.memlayout.[`module${i+1}`].type = module.type
// //     //     //  systemData.memlayout.[`module${i+1}`].clockSpeed = module.clockSpeed
// //     //     //  systemData.memlayout.[`module${i+1}`].formFactor = module.formFactor
// //     //     //  systemData.memlayout.[`module${i+1}`].manufacturer = module.manufacturer
// //     //     //  systemData.memlayout.[`module${i+1}`].partNum = module.partNumber
// //     //     //  systemData.memlayout.[`module${i+1}`].serialNum	= module.serialNum
// //     //     //  systemData.memlayout.[`module${i+1}`].voltageConfigured = module.voltageConfigured
// //     //     //  systemData.memlayout.[`module${i+1}`].voltageMin = module.voltageMin
// //     //     //  systemData.memlayout.[`module${i+1}`].voltageMax = module.voltageMax
// //     });
// //     systemData.memlayout = temp
// //     // Object.keys(systemData.memlayout).forEach((k) =>{
// //     //     console.log(`${k}`)

// //     console.log(Object.keys(systemData.memlayout))
// //     // })
    
// //  });
// vmemtestdata = null
// memtestdata.forEach((v,i,a) =>{
//     let changes = []
//     //  console.log(`keys:${Object.keys(v)}`)
//     //  console.log(`v=${v}, i=${i}, a=${a}`)
//     //  console.log(`${memtestdata[v]}`)
//     if (vmemtestdata === null){
//     vmemtestdata = v
//     console.log(`write all`)
//     }
    

// })

const a = "xxy skdk dkdk dkd kdkd kdkd"
console.log(a.split(' '))

console.log(`memtestdata is: ${typeof memtestdata}`)
//console.log(`memtestdata[0] is: ${typeof memtestdata[0]}`)
let n = []

//iterate through a javascript object
Object.keys(memtestdata).forEach((item,i) => {
    console.log(item.toUpperCase())
    if (typeof memtestdata[item] !== "object") {
        console.log(memtestdata[item])
    }else{
        try {
            if(memtestdata[item].length >= 0) {
                console.log(`--is  an array`)
            }else
            console.log(`--is a JSO`)
        } catch {
            console.error(`that didn't work!`)
        }
    }
})
