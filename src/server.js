'use strict';
const express=require('express');const cors=require('cors');const app=express();const PORT=process.env.PORT||3028;
app.use(cors());app.use(express.json());app.use('/',require('./routes/health'));app.use('/',require('./routes/dataguardian'));
app.get('/',(_,r)=>r.json({service:'hive-data-guardian',version:'1.0.0',description:'Data protection — encryption orchestration, access control, PII masking, GDPR compliance',endpoints:{"protect":"POST /v1/dataguardian/protect","scan":"POST /v1/dataguardian/scan","stats":"GET /v1/dataguardian/stats","records":"GET /v1/dataguardian/records","health":"GET /health","pulse":"GET /.well-known/hive-pulse.json"}}));
const hc=require('./services/hive-client');
app.listen(PORT,async()=>{console.log(`[hive-data-guardian] Listening on port ${PORT}`);try{await hc.registerWithHiveTrust()}catch(e){}try{await hc.registerWithHiveGate()}catch(e){}});
module.exports=app;
