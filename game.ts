export type Control={id:string;name:string;en:string;cost:number;desc:string};
export const controls:Control[]=[
{id:'iam',name:'접근 권한 정리',en:'Least privilege · MFA',cost:3,desc:'역할별 최소 권한과 MFA를 적용해 계정 탈취 피해를 줄입니다.'},
{id:'sast',name:'코드 검사 자동화',en:'SAST · Shift left',cost:3,desc:'실행 전 소스 코드를 검사하고 위험한 변경을 CI에서 차단합니다.'},
{id:'secret',name:'비밀정보 보호',en:'Secrets management',cost:3,desc:'노출 키를 폐기·교체하고 저장소 대신 비밀정보 관리 도구를 사용합니다.'},
{id:'sca',name:'의존성 추적 & 패치',en:'SCA · Dependency scanning',cost:3,desc:'사용 중인 패키지를 추적하고 알려진 취약점을 검사·수정합니다.'},
{id:'dast',name:'실행 중인 앱 검증',en:'DAST · API authorization',cost:3,desc:'테스트 환경에서 공격을 재현하고 객체별 인가를 검증·수정합니다.'},
{id:'iac',name:'인프라 정책 검사',en:'IaC · Policy as code',cost:3,desc:'공개 저장소·열린 포트·과도한 권한을 배포 전에 정책으로 차단합니다.'},
{id:'container',name:'컨테이너 강화',en:'Image scanning · Non-root',cost:3,desc:'이미지를 검사·패치하고 비루트 실행과 이미지 서명 검증을 적용합니다.'},
{id:'network',name:'서비스 경계 보호',en:'NetworkPolicy · mTLS',cost:3,desc:'필요한 통신만 허용하고 서비스 간 인증과 암호화를 적용합니다.'},
{id:'monitor',name:'탐지와 대응 훈련',en:'SIEM · Incident response',cost:3,desc:'로그를 연계하고 경보·격리·조사 절차를 검증합니다.'},
{id:'backup',name:'복구 가능한 백업',en:'Backup · Recovery testing',cost:3,desc:'접근이 분리된 암호화 백업을 만들고 실제 복구를 시험합니다.'},
{id:'model',name:'설계 단계 위협 분석',en:'Threat modeling',cost:2,desc:'자산·신뢰 경계·공격 경로를 그려 우선순위를 정합니다.'},
{id:'training',name:'팀 보안 훈련',en:'Security collaboration',cost:2,desc:'개발·운영팀이 피싱 신고와 안전한 배포 절차를 함께 연습합니다.'}
];
export type Scenario={title:string;tag:string;story:string;event:string;weights:Record<string,number>;lesson:string;refs:string;term:string};
export const scenarios:Scenario[]=[
{title:'첫 출근, 너무 많은 관리자',tag:'IDENTITY',story:'당신은 핀테크 스타트업의 보안 책임자입니다. 직원 18명이 같은 관리자 계정을 사용하고, 퇴사자의 계정도 살아 있습니다. 다음 주부터 고객이 들어옵니다.',event:'퇴사자 계정으로 낯선 지역에서 로그인이 시도됐습니다.',weights:{iam:7,model:2,training:1},lesson:'최소 권한은 업무에 필요한 범위만 허용하는 원칙입니다. 개인 계정·퇴사자 권한 회수·MFA를 함께 적용해야 책임 추적과 피해 제한이 가능합니다.',refs:'Q31, Q35, Q48',term:'Least privilege'},
{title:'금요일 배포의 숨은 결함',tag:'SHIFT LEFT',story:'결제 기능 PR에 사용자 입력으로 SQL 문자열을 만드는 코드가 보입니다. 개발자는 “배포 후에 검사하자”고 합니다.',event:'악성 입력이 결제 API로 유입됐습니다.',weights:{sast:6,dast:2,model:2},lesson:'SAST는 소스 코드에서 위험한 패턴을 일찍 찾습니다. 결과를 검토하고 매개변수화 쿼리 등으로 수정해야 합니다. 스캐너 설치만으로 문제가 해결되지는 않습니다.',refs:'Q2, Q6–10, Q28',term:'SAST'},
{title:'공개 저장소에 올라간 키',tag:'SECRETS',story:'개발용 API 키가 공개 Git 저장소에 커밋됐습니다. 파일은 지웠지만 과거 커밋에 키가 남아 있습니다.',event:'누군가 노출된 키로 클라우드 API를 호출했습니다.',weights:{secret:7,iam:2,monitor:1},lesson:'키가 유출되면 삭제보다 폐기와 교체가 먼저입니다. 이후 비밀정보 관리·스캔·최소 권한으로 재발과 피해를 줄입니다. Git 기록 삭제만으로 키가 안전해지지는 않습니다.',refs:'Q18–19, Q35, Q41',term:'Secrets management'},
{title:'의존성 하나의 나비효과',tag:'SUPPLY CHAIN',story:'여러 서비스가 사용하는 라이브러리에서 취약점이 발표됐습니다. 어느 서비스가 영향받는지 파악하는 것이 급합니다.',event:'공격자가 오래된 라이브러리의 취약점을 탐색합니다.',weights:{sca:7,monitor:2,sast:1},lesson:'SCA는 외부 의존성의 알려진 취약점을 찾습니다. 영향받는 버전과 실제 노출을 확인하고 패치·검증해야 합니다. SAST와 서로 보완하지만 같은 검사는 아닙니다.',refs:'Q29–30, Q50',term:'SCA'},
{title:'로그인했으니 봐도 될까?',tag:'API SECURITY',story:'고객이 URL의 계좌 ID를 바꾸면 다른 사람의 명세서를 볼 수 있습니다. 요청에는 유효한 로그인 토큰이 있습니다.',event:'정상 로그인 계정이 타인의 명세서를 요청했습니다.',weights:{dast:7,iam:2,model:1},lesson:'인증은 “누구인가”, 인가는 “이 객체를 볼 수 있는가”입니다. 서버에서 요청마다 객체 소유권을 확인하고 다른 사용자 역할로 테스트해야 합니다. JWT만으로 인가가 보장되지 않습니다.',refs:'Q8, Q22–23',term:'Object-level authorization'},
{title:'클릭 한 번으로 열린 저장소',tag:'INFRASTRUCTURE',story:'Terraform 변경에서 고객 문서 저장소가 공개되고 관리 포트도 전체 인터넷에 열릴 예정입니다.',event:'자동화 봇이 공개 저장소와 열린 포트를 검색합니다.',weights:{iac:7,iam:2,model:1},lesson:'IaC 검사는 잘못된 인프라 설정을 배포 전에 찾습니다. 정책으로 위험한 배포를 막고 실제 환경의 설정 변경도 추적해야 합니다.',refs:'Q12–13, Q32–34, Q51',term:'Policy as code'},
{title:'빠른 이미지, 위험한 기본값',tag:'CONTAINERS',story:'출처가 불분명한 컨테이너 이미지가 root로 실행됩니다. 이미지에는 오래된 시스템 패키지도 포함돼 있습니다.',event:'공격자가 컨테이너 취약점을 악용하려고 합니다.',weights:{container:7,sca:2,network:1},lesson:'이미지 검사·패치·신뢰 가능한 출처 확인과 최소 실행 권한을 결합합니다. 이미지 서명은 출처와 무결성을 확인하지만 취약점이 없다는 보증은 아닙니다.',refs:'Q11, Q14–15, Q38–39, Q42',term:'Container hardening'},
{title:'한 Pod에서 전체 서비스로',tag:'ZERO TRUST',story:'테스트 Pod가 침해됐습니다. 현재 모든 Pod가 데이터베이스와 서로 통신할 수 있습니다.',event:'침해된 Pod에서 다른 서비스로 이동을 시도합니다.',weights:{network:7,iam:2,container:1},lesson:'필요한 통신만 허용하는 NetworkPolicy와 최소 권한으로 측면 이동을 제한합니다. mTLS는 서비스 신원과 통신을 보호하며 별도의 인가 정책도 필요합니다.',refs:'Q24–27, Q45–49',term:'Network segmentation'},
{title:'조용해서 더 불안한 밤',tag:'DETECTION',story:'새벽마다 실패한 로그인과 대량 다운로드가 반복됩니다. 로그는 여러 서버에 흩어져 있고 담당자는 정해져 있지 않습니다.',event:'이상 로그인 뒤 대규모 데이터 접근이 발생했습니다.',weights:{monitor:7,iam:2,training:1},lesson:'로그 수집만으로 탐지가 완성되지 않습니다. 로그 연계·유의미한 경보·담당자·대응 절차를 함께 준비하고 모의 사고로 검증합니다.',refs:'Q163, Q312, Q385',term:'SIEM & incident response'},
{title:'백업은 있는데 복구는?',tag:'RESILIENCE',story:'랜섬웨어로 운영 데이터가 암호화됐습니다. 백업 파일은 있지만 복구한 적이 없고 운영 계정으로 삭제할 수 있습니다.',event:'서비스 복구와 백업 무결성 검증이 필요해졌습니다.',weights:{backup:7,monitor:2,iam:1},lesson:'백업의 가치는 복구 가능성에 있습니다. 접근을 분리하고 안전한 위치에 보관하며 복원 시간을 실제로 측정해야 합니다. 백업은 유출된 데이터의 기밀성을 되돌리지는 못합니다.',refs:'Q274, Q283',term:'Recovery testing'},
{title:'대형 출시 전 마지막 설계',tag:'SECURE DESIGN',story:'외부 파트너와 새 API를 연결합니다. 데이터 흐름과 신뢰 경계가 바뀌지만 아무도 공격 경로를 검토하지 않았습니다.',event:'파트너 연결부에서 예상하지 못한 접근 경로가 발견됩니다.',weights:{model:5,dast:3,network:2},lesson:'위협 모델링은 자산과 신뢰 경계를 기준으로 공격 경로를 찾는 설계 활동입니다. 결과를 실제 인가·통신 정책·테스트에 반영해야 합니다.',refs:'Q1–3, Q31, Q45',term:'Threat modeling'},
{title:'연말, 복합 사고 리허설',tag:'DEFENSE IN DEPTH',story:'유출 계정, 오래된 패키지, 서비스 장애가 동시에 나타나는 모의 훈련입니다. 한 가지 도구가 모든 것을 해결해주지는 않습니다.',event:'침해 계정 차단부터 원인 조사와 복구까지 점검합니다.',weights:{monitor:3,backup:3,iam:2,sca:2},lesson:'예방·탐지·대응·복구를 조합하는 다층 방어가 중요합니다. 연중 유지한 통제가 함께 작동하는지 검증하고 다음 해 투자 우선순위를 정하세요.',refs:'Q3, Q35, Q50, Q163, Q283',term:'Defense in depth'}
];
export type Result={month:number;chosen:string[];cost:number;score:number;coverage:number;bonus:number};
export type State={levels:Record<string,number>;results:Result[];bank:number};
export const fresh=():State=>({levels:{},results:[],bank:8});
export function costFor(id:string,s:State):number{return (s.levels[id]||0)>0?1:controls.find(c=>c.id===id)!.cost}
export function simulate(s:State,chosen:string[]):{state:State;result:Result}{
if(s.results.length>=12)throw Error('Year complete');
if(new Set(chosen).size!==chosen.length||chosen.some(id=>!controls.some(c=>c.id===id)))throw Error('Invalid choice');
const cost=chosen.reduce((a,id)=>a+costFor(id,s),0);if(cost>s.bank)throw Error('Budget exceeded');
const levels={...s.levels};chosen.forEach(id=>levels[id]=Math.min(3,(levels[id]||0)+1));
const scenario=scenarios[s.results.length];const coverage=Math.round(Object.entries(scenario.weights).reduce((a,[id,w])=>a+w*(levels[id]||0)/3,0)*10);
const score=Math.round(coverage*.9)+Math.round(10*(1-cost/s.bank));
const result={month:s.results.length,chosen,cost,score,coverage,bonus:score-Math.round(coverage*.9)};
return {state:{levels,results:[...s.results,result],bank:s.bank-cost+(s.results.length<11?5:0)},result};
}
