import assert from 'node:assert/strict';
import {fresh,simulate,scenarios,controls,costFor} from './game.ts';
assert.equal(scenarios.length,12);
for(const s of scenarios)assert.equal(Object.values(s.weights).reduce((a,b)=>a+b,0),10);
let s=fresh();for(let i=0;i<12;i++){let ids:string[]=[];let budget=s.bank;for(const c of [...controls].sort((a,b)=>(scenarios[i].weights[b.id]||0)-(scenarios[i].weights[a.id]||0))){if((s.levels[c.id]||0)<3&&budget>=costFor(c.id,s)){ids.push(c.id);budget-=costFor(c.id,s)}}s=simulate(s,ids).state;assert.ok(s.bank>=0);assert.ok(s.results[i].score<=100);assert.ok(s.results[i].score>=0)}assert.equal(s.bank+s.results.reduce((a,r)=>a+r.cost,0),63);assert.equal(s.results.length,12);assert.throws(()=>simulate(s,[]));assert.throws(()=>simulate(fresh(),['iam','iam']));assert.throws(()=>simulate(fresh(),['iam','sast','secret']));
let empty=fresh();for(let i=0;i<12;i++)empty=simulate(empty,[]).state;assert.equal(empty.bank,63);assert.equal(empty.results.reduce((a,r)=>a+r.score,0),120);
const one=simulate(fresh(),['iam']).state;assert.equal(one.levels.iam,1);assert.equal(costFor('iam',one),1);assert.equal(simulate(one,[]).state.levels.iam,1);console.log('PASS: 12-month simulation, bounds, budget conservation, persistence of controls, invalid choices.');
