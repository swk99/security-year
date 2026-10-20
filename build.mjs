import {stripTypeScriptTypes} from 'node:module';
import {readFileSync,writeFileSync,mkdirSync,copyFileSync} from 'node:fs';
mkdirSync('dist',{recursive:true});
for(const file of ['game','missions','adventure','app']) writeFileSync(`dist/${file}.js`,stripTypeScriptTypes(readFileSync(`${file}.ts`,'utf8'),{mode:'strip'}));
for(const file of ['index.html','style.css']) copyFileSync(file,`dist/${file}`);
