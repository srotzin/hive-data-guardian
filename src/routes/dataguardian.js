'use strict';const{Router}=require('express');const e=require('../services/dataguardian-engine');const r=Router();
r.post('/v1/dataguardian/protect',(q,s)=>{const result=e.execute(q.body);s.status(201).json({status:'completed',result})});
r.post('/v1/dataguardian/scan',(q,s)=>{const result=e.execute(q.body);s.status(201).json({status:'completed',result})});
r.get('/v1/dataguardian/stats',(_,s)=>s.json(e.getStats()));
r.get('/v1/dataguardian/records',(_,s)=>s.json({records:e.listRecords()}));
module.exports=r;
