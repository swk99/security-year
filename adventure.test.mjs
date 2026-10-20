import assert from 'node:assert/strict';
const memory=new Map();globalThis.localStorage={getItem:k=>memory.get(k)||null,setItem:(k,v)=>memory.set(k,v),removeItem:k=>memory.delete(k)};
const {chapters}=await import('./dist/missions.js');
const {mountAdventure,followCampaign,resetAdventure,adventureStats,isCorrect}=await import('./dist/adventure.js');
class Host{html='';buttons={};set innerHTML(v){this.html=v;this.buttons={};for(const m of v.matchAll(/<(?:button|select)[^>]*id="([^"]+)"[^>]*>/g))this.buttons[m[1]]={};this.options=[...v.matchAll(/data-answer="(\d+)"/g)].map(m=>({dataset:{answer:m[1]}}));this.weeks=[...v.matchAll(/data-week="(\d+)"/g)].map(m=>({dataset:{week:m[1]}}))}querySelector(s){if(s.startsWith('#'))return this.buttons[s.slice(1)];return {scrollIntoView(){}}}querySelectorAll(s){return s==='[data-week]'?this.weeks:s==='[data-answer]'?this.options:[]}}
const host=new Host();assert.equal(chapters.length,12);
for(let m=0;m<12;m++){followCampaign();mountAdventure(host,m,'ko',false);for(let i=0;i<4;i++){const q=chapters[m].questions[i];assert.equal(q.prompt.length,2);assert.equal(q.why.length,2);assert.ok(q.answer.every(n=>q.options[n]));assert.ok(isCorrect(q,q.answer));assert.ok(!isCorrect(q,[]));host.weeks[i].onclick();for(const n of q.answer)host.options.find(b=>+b.dataset.answer===n).onclick();mountAdventure(host,m,'en',false);assert.ok(!/[가-힣]/.test(host.html),'English leaks');host.buttons['check-answer'].onclick();const xp=adventureStats().xp;assert.ok(!host.buttons['check-answer']);mountAdventure(host,m,'ko',false);assert.equal(adventureStats().xp,xp);}}
assert.deepEqual(adventureStats(),{count:48,correct:48,xp:960});
assert.equal(JSON.parse(memory.get('security12-koalina-v1'))['11-3'].correct,true);
resetAdventure();assert.deepEqual(adventureStats(),{count:0,correct:0,xp:0});
mountAdventure(host,0,'en',false);host.options.find(b=>+b.dataset.answer===0).onclick();host.buttons['check-answer'].onclick();assert.deepEqual(adventureStats(),{count:1,correct:0,xp:5});
console.log('PASS: 48 bilingual missions, scoring, language-switch draft preservation, locked rewards, reset, wrong-answer learning reward.');
