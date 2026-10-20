export type Pair=[string,string];
export type Question={kind:string;prompt:Pair;options:Pair[];answer:number[];why:Pair};
export type Chapter={title:Pair;scene:Pair;questions:Question[]};
export const chapters:Chapter[]=[
 {
  "title": [
   "첫 출근과 수상한 로그인",
   "First day, strange login"
  ],
  "scene": [
   "안녕! 난 보안팀 동료 코알리나야. 유칼립투스 페이의 첫 고객이 다음 주에 온대! 그런데 책상에 관리자 비밀번호가 붙어 있어… 같이 첫 달을 정리해 볼까?",
   "Hi! I’m Koalina, your security teammate. Eucalyptus Pay welcomes its first customers next week! But there’s an admin password stuck to a desk… Let’s put our first month in order."
  ],
  "questions": [
   {
    "kind": "choice",
    "prompt": [
     "1주차 · 공유 계정 발견! 가장 좋은 개선은?",
     "Week 1 · You find a shared account. What improves it most?"
    ],
    "options": [
     [
      "비밀번호만 더 길게 바꾼다",
      "Only make the password longer"
     ],
     [
      "개인별 계정과 역할별 권한을 만든다",
      "Create individual accounts with role-based permissions"
     ],
     [
      "관리자를 한 명 더 만든다",
      "Add another administrator"
     ]
    ],
    "answer": [
     1
    ],
    "why": [
     "개인별 계정은 누가 무엇을 했는지 추적하게 해줘. 역할에 필요한 권한만 주는 게 최소 권한이야.",
     "Individual accounts make actions attributable. Giving each role only the permissions it needs is least privilege."
    ]
   },
   {
    "kind": "multi",
    "prompt": [
     "2주차 · 퇴사자가 생겼어. 필요한 조치를 모두 골라줘.",
     "Week 2 · An employee leaves. Select every appropriate action."
    ],
    "options": [
     [
      "계정 비활성화",
      "Disable the account"
     ],
     [
      "활성 세션과 토큰 회수",
      "Revoke active sessions and tokens"
     ],
     [
      "공유 비밀정보에 접근했다면 교체 검토",
      "Review rotation of shared secrets they could access"
     ],
     [
      "메일 주소만 삭제",
      "Only remove the email address"
     ]
    ],
    "answer": [
     0,
     1,
     2
    ],
    "why": [
     "계정만 막아도 이미 발급된 세션이 남을 수 있어. 토큰과 공유 비밀정보까지 범위를 확인하자.",
     "Existing sessions can outlive account changes. Check tokens and any shared secrets as part of offboarding."
    ]
   },
   {
    "kind": "order",
    "prompt": [
     "3주차 · 새 직원에게 권한을 주는 순서를 정해줘.",
     "Week 3 · Put the access onboarding steps in order."
    ],
    "options": [
     [
      "업무와 필요한 자원 확인",
      "Identify tasks and required resources"
     ],
     [
      "필요한 최소 권한 부여",
      "Grant the minimum necessary access"
     ],
     [
      "MFA 등록 및 로그인 확인",
      "Enroll MFA and verify sign-in"
     ],
     [
      "권한 사용을 주기적으로 검토",
      "Review access periodically"
     ]
    ],
    "answer": [
     0,
     1,
     2,
     3
    ],
    "why": [
     "먼저 업무를 알아야 적절한 권한을 정할 수 있어. 부여한 뒤에도 계속 검토해야 해.",
     "Understand the job before choosing permissions. Access review continues after onboarding."
    ]
   },
   {
    "kind": "tf",
    "prompt": [
     "4주차 · MFA가 있으면 모든 계정에 관리자 권한을 줘도 안전하다.",
     "Week 4 · MFA makes it safe to give every account administrator access."
    ],
    "options": [
     [
      "참",
      "True"
     ],
     [
      "거짓",
      "False"
     ]
    ],
    "answer": [
     1
    ],
    "why": [
     "MFA와 최소 권한은 다른 방어 계층이야. MFA를 통과한 계정도 과도한 권한으로 피해를 키울 수 있어.",
     "MFA and least privilege are separate layers. An authenticated account can still cause damage with excessive permissions."
    ]
   }
  ]
 },
 {
  "title": [
   "금요일의 위험한 배포",
   "A risky Friday release"
  ],
  "scene": [
   "코알리나가 결제 코드 리뷰에 초대됐어. 개발자는 “일단 출시하고 고치자!”래. 고객의 돈이 오가는 코드인데… 이번엔 배포 전에 문제를 찾아보자.",
   "Koalina joins a payment code review. “Ship now, fix later!” says a developer. This code handles customer money… Let’s find problems before release."
  ],
  "questions": [
   {
    "kind": "choice",
    "prompt": [
     "1주차 · 입력값을 SQL 문자열에 붙이고 있어. 가장 직접적인 수정은?",
     "Week 1 · User input is concatenated into SQL. What directly fixes this pattern?"
    ],
    "options": [
     [
      "입력칸을 숨긴다",
      "Hide the input field"
     ],
     [
      "오류 메시지만 없앤다",
      "Only hide error messages"
     ],
     [
      "매개변수화된 쿼리를 사용한다",
      "Use parameterized queries"
     ]
    ],
    "answer": [
     2
    ],
    "why": [
     "쿼리 구조와 입력 데이터를 분리해야 해. 화면에서 숨겨도 서버의 취약점은 남아 있어.",
     "Separate query structure from input data. Hiding a field does not fix vulnerable server code."
    ]
   },
   {
    "kind": "multi",
    "prompt": [
     "2주차 · 좋은 CI 보안 게이트를 모두 골라줘.",
     "Week 2 · Select good practices for a CI security gate."
    ],
    "options": [
     [
      "위험한 코드 패턴 검사",
      "Scan for risky code patterns"
     ],
     [
      "심각한 발견 사항의 처리 기준 합의",
      "Agree on handling criteria for serious findings"
     ],
     [
      "실패한 검사를 몰래 무시",
      "Silently ignore failed checks"
     ],
     [
      "수정 후 회귀 테스트",
      "Run regression tests after fixes"
     ]
    ],
    "answer": [
     0,
     1,
     3
    ],
    "why": [
     "검사 결과를 누가 어떻게 처리할지도 정해야 해. 도구 설치만으로 코드가 고쳐지지는 않아.",
     "A team needs a process for findings. Installing a tool does not fix code by itself."
    ]
   },
   {
    "kind": "order",
    "prompt": [
     "3주차 · 취약한 변경의 수정 흐름을 정해줘.",
     "Week 3 · Order the workflow for a vulnerable change."
    ],
    "options": [
     [
      "검사에서 문제 발견",
      "Detect the issue"
     ],
     [
      "위험과 재현 가능성 검토",
      "Assess risk and reproducibility"
     ],
     [
      "코드 수정",
      "Fix the code"
     ],
     [
      "테스트 후 배포",
      "Test and then deploy"
     ]
    ],
    "answer": [
     0,
     1,
     2,
     3
    ],
    "why": [
     "발견 → 검토 → 수정 → 검증. 재발을 잡는 테스트도 남겨두자.",
     "Detect, assess, fix, verify. Keep a test that catches a recurrence."
    ]
   },
   {
    "kind": "tf",
    "prompt": [
     "4주차 · SAST는 실행 중인 서버를 반드시 공격해야만 검사할 수 있다.",
     "Week 4 · SAST must attack a running server to perform its analysis."
    ],
    "options": [
     [
      "참",
      "True"
     ],
     [
      "거짓",
      "False"
     ]
    ],
    "answer": [
     1
    ],
    "why": [
     "SAST는 소스 코드 같은 정적 자료를 분석해. 실행 중인 앱을 대상으로 하는 DAST와 구분하자.",
     "SAST analyzes static artifacts such as source code. DAST tests a running application."
    ]
   }
  ]
 },
 {
  "title": [
   "깃 저장소의 비밀",
   "A secret in Git"
  ],
  "scene": [
   "“앗, 키가 커밋됐어!” 코알리나가 머그잔을 내려놓았어. 파일은 지웠지만 과거 커밋에는 남아 있대. 흔적보다 먼저 막아야 할 것이 있어.",
   "“Oops, a key was committed!” Koalina puts down her mug. The file is deleted, but old commits still contain it. There’s something to stop before cleaning up the evidence."
  ],
  "questions": [
   {
    "kind": "choice",
    "prompt": [
     "1주차 · 공개된 API 키, 가장 먼저 할 일은?",
     "Week 1 · An API key is public. What comes first?"
    ],
    "options": [
     [
      "키 폐기와 교체",
      "Revoke and replace the key"
     ],
     [
      "파일 이름 변경",
      "Rename the file"
     ],
     [
      "README 삭제",
      "Delete the README"
     ]
    ],
    "answer": [
     0
    ],
    "why": [
     "이미 복사됐을 수 있으니 키를 무효화해야 해. 기록 정리는 그 다음이야.",
     "Someone may already have copied it. Invalidate the credential before relying on cleanup."
    ]
   },
   {
    "kind": "multi",
    "prompt": [
     "2주차 · 재발 방지 방법을 모두 골라줘.",
     "Week 2 · Select ways to prevent recurrence."
    ],
    "options": [
     [
      "비밀정보 관리 도구 사용",
      "Use a secrets manager"
     ],
     [
      "커밋 및 CI 비밀정보 검사",
      "Scan commits and CI for secrets"
     ],
     [
      "키를 코드 주석에 저장",
      "Store the key in a code comment"
     ],
     [
      "가능하면 단기 자격 증명 사용",
      "Prefer short-lived credentials where possible"
     ]
    ],
    "answer": [
     0,
     1,
     3
    ],
    "why": [
     "비밀정보를 코드에서 분리하고 노출을 빠르게 탐지하자. 단기 자격 증명도 권한과 수명 관리가 필요해.",
     "Keep secrets out of code and detect leaks quickly. Short-lived credentials still require permission and lifetime management."
    ]
   },
   {
    "kind": "order",
    "prompt": [
     "3주차 · 노출 키의 대응 순서를 정해줘.",
     "Week 3 · Order the response to an exposed key."
    ],
    "options": [
     [
      "노출 키 무효화",
      "Invalidate the exposed key"
     ],
     [
      "새 자격 증명으로 안전하게 교체",
      "Replace it securely"
     ],
     [
      "관련 호출 기록과 피해 범위 조사",
      "Investigate usage and impact"
     ],
     [
      "노출 경로 제거 및 예방 검사 추가",
      "Remove the exposure path and add checks"
     ]
    ],
    "answer": [
     0,
     1,
     2,
     3
    ],
    "why": [
     "실제 대응에서는 조사와 교체를 병행할 수 있어. 여기서는 노출된 권한 차단을 우선하는 흐름이야.",
     "Investigation and replacement may overlap in practice. This learning sequence prioritizes stopping exposed access."
    ]
   },
   {
    "kind": "tf",
    "prompt": [
     "4주차 · 저장소를 비공개로 바꾸면 이미 유출된 키를 계속 써도 된다.",
     "Week 4 · Making a repository private makes an already leaked key safe to keep using."
    ],
    "options": [
     [
      "참",
      "True"
     ],
     [
      "거짓",
      "False"
     ]
    ],
    "answer": [
     1
    ],
    "why": [
     "이전에 누가 복사했는지 알 수 없어. 공개 범위를 줄여도 유출된 키는 교체해야 해.",
     "You cannot know who copied it earlier. Changing visibility does not invalidate leaked credentials."
    ]
   }
  ]
 },
 {
  "title": [
   "패키지의 나비효과",
   "The package butterfly effect"
  ],
  "scene": [
   "아침 알림: 우리가 쓰는 라이브러리에 취약점! 코알리나는 서비스 목록을 펼쳤어. “어디에 어떤 버전이 들어갔는지부터 찾아보자.”",
   "Morning alert: a library we use is vulnerable! Koalina opens the service inventory. “First, let’s find which versions are deployed where.”"
  ],
  "questions": [
   {
    "kind": "choice",
    "prompt": [
     "1주차 · 외부 패키지의 알려진 취약점을 찾는 도구는?",
     "Week 1 · Which analysis finds known vulnerabilities in third-party packages?"
    ],
    "options": [
     [
      "SAST만 사용",
      "SAST only"
     ],
     [
      "SCA",
      "SCA"
     ],
     [
      "화면 캡처 도구",
      "A screenshot tool"
     ]
    ],
    "answer": [
     1
    ],
    "why": [
     "SCA는 의존성의 알려진 취약점을 찾는 데 쓰여. SAST의 코드 분석과 서로 보완해.",
     "SCA helps identify known dependency vulnerabilities. It complements source code analysis."
    ]
   },
   {
    "kind": "multi",
    "prompt": [
     "2주차 · 패치 우선순위를 정할 때 볼 정보를 골라줘.",
     "Week 2 · Select useful inputs for patch priority."
    ],
    "options": [
     [
      "영향받는 버전인지",
      "Whether the version is affected"
     ],
     [
      "실제 노출과 악용 가능성",
      "Actual exposure and exploitability"
     ],
     [
      "패키지 로고의 색",
      "The package logo color"
     ],
     [
      "서비스 중요도와 보완 통제",
      "Service criticality and compensating controls"
     ]
    ],
    "answer": [
     0,
     1,
     3
    ],
    "why": [
     "심각도 숫자만 보지 말고 우리 환경의 노출과 영향을 같이 보자.",
     "Consider exposure and impact in your environment alongside severity ratings."
    ]
   },
   {
    "kind": "order",
    "prompt": [
     "3주차 · 의존성 패치의 순서를 정해줘.",
     "Week 3 · Order the dependency patch workflow."
    ],
    "options": [
     [
      "영향받는 서비스 확인",
      "Identify affected services"
     ],
     [
      "수정 버전과 호환성 확인",
      "Check the fixed version and compatibility"
     ],
     [
      "테스트 환경에서 검증",
      "Validate in a test environment"
     ],
     [
      "배포 후 정상 동작 확인",
      "Deploy and verify operation"
     ]
    ],
    "answer": [
     0,
     1,
     2,
     3
    ],
    "why": [
     "업데이트가 보안을 고쳐도 기능을 깨뜨릴 수 있어. 검증과 배포 후 확인이 필요해.",
     "An update can fix security while breaking behavior. Test it and verify after deployment."
    ]
   },
   {
    "kind": "tf",
    "prompt": [
     "4주차 · 직접 설치하지 않은 간접 의존성도 취약점의 원인이 될 수 있다.",
     "Week 4 · Transitive dependencies can introduce vulnerabilities too."
    ],
    "options": [
     [
      "참",
      "True"
     ],
     [
      "거짓",
      "False"
     ]
    ],
    "answer": [
     0
    ],
    "why": [
     "의존성이 가져오는 다른 패키지도 우리 소프트웨어의 일부야. 전체 의존성 트리를 확인하자.",
     "Packages pulled in by your dependencies are part of your software too. Check the full dependency tree."
    ]
   }
  ]
 },
 {
  "title": [
   "옆집 계좌가 보인다!",
   "Someone else’s account!"
  ],
  "scene": [
   "코알리나가 테스트 계좌 주소의 숫자를 바꿨더니 다른 고객의 명세서가 보여! “로그인은 했는데, 이 문서를 볼 권한도 있는 걸까?”",
   "Koalina changes a number in a test account URL and sees another customer’s statement! “We signed in, but are we allowed to see this document?”"
  ],
  "questions": [
   {
    "kind": "choice",
    "prompt": [
     "1주차 · 이 버그의 핵심은?",
     "Week 1 · What is the core defect?"
    ],
    "options": [
     [
      "폰트 오류",
      "A font error"
     ],
     [
      "비밀번호 길이 부족",
      "A short password"
     ],
     [
      "객체별 인가 누락",
      "Missing object-level authorization"
     ]
    ],
    "answer": [
     2
    ],
    "why": [
     "인증은 누구인지, 인가는 무엇을 해도 되는지 확인하는 거야. 각 객체의 소유권과 권한을 검사해야 해.",
     "Authentication identifies the caller. Authorization checks permitted actions, including access to each object."
    ]
   },
   {
    "kind": "multi",
    "prompt": [
     "2주차 · 효과적인 서버 측 방어를 골라줘.",
     "Week 2 · Select effective server-side defenses."
    ],
    "options": [
     [
      "요청마다 객체 접근 권한 검사",
      "Check object access on each request"
     ],
     [
      "거부가 기본인 권한 정책",
      "Deny access by default"
     ],
     [
      "URL만 숨기기",
      "Only hide the URL"
     ],
     [
      "서로 다른 계정으로 접근 테스트",
      "Test access with different accounts"
     ]
    ],
    "answer": [
     0,
     1,
     3
    ],
    "why": [
     "주소가 추측하기 어렵더라도 인가를 대신할 수 없어. 서버가 권한을 확인해야 해.",
     "Hard-to-guess addresses do not replace authorization. The server must enforce access."
    ]
   },
   {
    "kind": "order",
    "prompt": [
     "3주차 · 두 고객으로 인가 회귀 테스트를 만들어줘.",
     "Week 3 · Order a two-customer authorization regression test."
    ],
    "options": [
     [
      "고객 A와 B의 테스트 자료 준비",
      "Prepare test data for customers A and B"
     ],
     [
      "A 계정으로 로그인",
      "Sign in as A"
     ],
     [
      "B의 객체 접근 요청",
      "Request B’s object"
     ],
     [
      "거부 응답과 데이터 미노출 확인",
      "Verify denial and no data disclosure"
     ]
    ],
    "answer": [
     0,
     1,
     2,
     3
    ],
    "why": [
     "자기 데이터 접근 성공뿐 아니라 남의 데이터 접근 실패도 검사해야 해.",
     "Test both successful access to owned data and denied access to someone else’s data."
    ]
   },
   {
    "kind": "tf",
    "prompt": [
     "4주차 · 유효한 JWT가 있으면 모든 고객 자료를 볼 권한이 보장된다.",
     "Week 4 · A valid JWT guarantees permission to view every customer’s data."
    ],
    "options": [
     [
      "참",
      "True"
     ],
     [
      "거짓",
      "False"
     ]
    ],
    "answer": [
     1
    ],
    "why": [
     "토큰 검증과 객체 권한 확인은 별개야. 유효한 토큰이어도 허용된 자원만 접근해야 해.",
     "Token validation and object authorization are separate checks. A valid token still needs appropriate permissions."
    ]
   }
  ]
 },
 {
  "title": [
   "한 줄로 열린 창고",
   "One line opens the vault"
  ],
  "scene": [
   "새 인프라 계획에 public 설정이 보여. 코알리나가 배포 버튼 앞에서 멈췄어. “이 저장소에 고객 문서가 들어가잖아!”",
   "The infrastructure plan contains a public setting. Koalina stops at the deploy button. “This storage holds customer documents!”"
  ],
  "questions": [
   {
    "kind": "choice",
    "prompt": [
     "1주차 · 가장 이른 차단 지점은?",
     "Week 1 · Where can this risky change be blocked early?"
    ],
    "options": [
     [
      "배포 전 IaC 정책 검사",
      "A pre-deployment IaC policy check"
     ],
     [
      "고객의 신고 이후",
      "After a customer reports it"
     ],
     [
      "연말 회식",
      "At the year-end party"
     ]
    ],
    "answer": [
     0
    ],
    "why": [
     "인프라 설정도 코드 리뷰와 자동 정책 검사로 배포 전에 확인할 수 있어.",
     "Infrastructure configuration can be reviewed and checked against policies before deployment."
    ]
   },
   {
    "kind": "multi",
    "prompt": [
     "2주차 · 차단 또는 엄격한 검토가 필요한 설정은?",
     "Week 2 · Which settings need blocking or strict review?"
    ],
    "options": [
     [
      "고객 문서의 공개 읽기",
      "Public read access to customer documents"
     ],
     [
      "관리 포트의 전체 인터넷 허용",
      "Administrative ports open to the internet"
     ],
     [
      "불필요한 전체 관리자 권한",
      "Unnecessary full administrative access"
     ],
     [
      "승인된 사설 통신만 허용",
      "Only approved private communication"
     ]
    ],
    "answer": [
     0,
     1,
     2
    ],
    "why": [
     "자료 공개, 관리 접속 노출, 과도한 권한은 각각 다른 위험을 만들 수 있어.",
     "Public data, exposed administration, and excessive permissions create distinct risks."
    ]
   },
   {
    "kind": "order",
    "prompt": [
     "3주차 · 안전한 인프라 변경 흐름은?",
     "Week 3 · Order a safe infrastructure change."
    ],
    "options": [
     [
      "변경 계획 생성",
      "Generate the change plan"
     ],
     [
      "정책 검사와 리뷰",
      "Run policy checks and review"
     ],
     [
      "승인된 변경 적용",
      "Apply the approved change"
     ],
     [
      "실제 설정과 드리프트 감시",
      "Monitor live configuration and drift"
     ]
    ],
    "answer": [
     0,
     1,
     2,
     3
    ],
    "why": [
     "계획이 안전해도 운영 중 수동 변경이 생길 수 있어. 배포 후 감시도 이어가자.",
     "Manual changes can occur after a safe deployment. Keep monitoring the live environment."
    ]
   },
   {
    "kind": "tf",
    "prompt": [
     "4주차 · IaC 검사를 통과했으면 운영 환경의 설정 변화는 감시할 필요가 없다.",
     "Week 4 · Passing an IaC scan removes the need to monitor live configuration changes."
    ],
    "options": [
     [
      "참",
      "True"
     ],
     [
      "거짓",
      "False"
     ]
    ],
    "answer": [
     1
    ],
    "why": [
     "코드 밖에서 설정이 바뀌는 드리프트가 생길 수 있어. 사전 검사와 운영 감시는 함께 필요해.",
     "Drift can change configuration outside the code. Pre-deployment checks and runtime monitoring complement each other."
    ]
   }
  ]
 },
 {
  "title": [
   "수상한 컨테이너 배송",
   "A suspicious container delivery"
  ],
  "scene": [
   "출처를 모르는 이미지가 도착했어. 실행 사용자는 root, 패키지는 오래됐네. 코알리나는 배송 상자를 다시 살펴보기로 했어.",
   "An image from an unknown source arrives. It runs as root and has old packages. Koalina decides to inspect the delivery more carefully."
  ],
  "questions": [
   {
    "kind": "choice",
    "prompt": [
     "1주차 · 이미지 서명이 주로 확인해 주는 것은?",
     "Week 1 · What does an image signature primarily help verify?"
    ],
    "options": [
     [
      "취약점이 전혀 없음",
      "The absence of all vulnerabilities"
     ],
     [
      "출처와 무결성",
      "Origin and integrity"
     ],
     [
      "실행 속도",
      "Runtime speed"
     ]
    ],
    "answer": [
     1
    ],
    "why": [
     "서명은 믿는 주체가 서명했는지와 변조 여부를 확인하는 수단이야. 취약점 검사는 별도로 필요해.",
     "A signature supports verifying a trusted signer and detecting modification. Vulnerability checks are still needed."
    ]
   },
   {
    "kind": "multi",
    "prompt": [
     "2주차 · 컨테이너 강화 방법을 골라줘.",
     "Week 2 · Select container hardening measures."
    ],
    "options": [
     [
      "비루트 실행",
      "Run as non-root"
     ],
     [
      "불필요한 패키지와 권한 제거",
      "Remove unnecessary packages and privileges"
     ],
     [
      "항상 privileged 실행",
      "Always run privileged"
     ],
     [
      "신뢰할 수 있는 이미지와 패치",
      "Use trusted images and apply patches"
     ]
    ],
    "answer": [
     0,
     1,
     3
    ],
    "why": [
     "공격할 표면과 실행 권한을 함께 줄이자. 컨테이너라고 자동으로 안전한 건 아니야.",
     "Reduce attack surface and runtime privileges together. A container is not automatically secure."
    ]
   },
   {
    "kind": "order",
    "prompt": [
     "3주차 · 이미지 배포 파이프라인을 정해줘.",
     "Week 3 · Order the image release pipeline."
    ],
    "options": [
     [
      "검토된 소스로 이미지 빌드",
      "Build from reviewed sources"
     ],
     [
      "취약점 검사 및 수정",
      "Scan and remediate vulnerabilities"
     ],
     [
      "이미지 서명",
      "Sign the image"
     ],
     [
      "서명 검증 후 제한된 권한으로 배포",
      "Verify the signature and deploy with restricted privileges"
     ]
    ],
    "answer": [
     0,
     1,
     2,
     3
    ],
    "why": [
     "검사한 산출물과 배포할 산출물이 같아야 해. 서명 검증은 배포 정책과 연결하자.",
     "The deployed artifact should match the inspected artifact. Connect signature verification to deployment policy."
    ]
   },
   {
    "kind": "tf",
    "prompt": [
     "4주차 · 비루트 실행만으로 컨테이너의 모든 취약점이 사라진다.",
     "Week 4 · Running as non-root eliminates every container vulnerability."
    ],
    "options": [
     [
      "참",
      "True"
     ],
     [
      "거짓",
      "False"
     ]
    ],
    "answer": [
     1
    ],
    "why": [
     "비루트는 피해를 제한하는 방어야. 패치, 설정, 네트워크 정책도 필요해.",
     "Non-root execution limits privileges. Patching, configuration, and network controls still matter."
    ]
   }
  ]
 },
 {
  "title": [
   "한 Pod의 탈출 시도",
   "One Pod tries to spread"
  ],
  "scene": [
   "테스트 Pod가 침해됐어. 코알리나의 지도에는 모든 서비스가 선으로 연결돼 있네. “꼭 필요한 연결만 남겨보자!”",
   "A test Pod is compromised. Every service is connected on Koalina’s map. “Let’s keep only the connections we actually need!”"
  ],
  "questions": [
   {
    "kind": "choice",
    "prompt": [
     "1주차 · 옆 서비스로 이동하는 공격을 줄이는 방법은?",
     "Week 1 · What helps reduce lateral movement?"
    ],
    "options": [
     [
      "모든 Pod에 DB 관리자 권한",
      "Give every Pod database admin access"
     ],
     [
      "서비스 이름 변경",
      "Rename the services"
     ],
     [
      "필요한 통신만 허용하는 정책",
      "Allow only necessary communication"
     ]
    ],
    "answer": [
     2
    ],
    "why": [
     "침해된 한 곳에서 다른 곳으로 가는 경로를 줄여야 해. 통신 허용 목록과 권한 제한을 함께 쓰자.",
     "Reduce paths from one compromised component to another. Combine traffic allowlists with limited permissions."
    ]
   },
   {
    "kind": "multi",
    "prompt": [
     "2주차 · mTLS에 대한 올바른 설명은?",
     "Week 2 · Select correct statements about mTLS."
    ],
    "options": [
     [
      "양쪽의 인증을 지원한다",
      "It supports authenticating both peers"
     ],
     [
      "전송 중 암호화를 제공한다",
      "It provides encryption in transit"
     ],
     [
      "모든 API 작업을 자동 허용한다",
      "It automatically authorizes all API actions"
     ],
     [
      "인가 정책은 별도로 필요하다",
      "Authorization policies are still needed"
     ]
    ],
    "answer": [
     0,
     1,
     3
    ],
    "why": [
     "안전한 통신 상대인지 확인하는 것과 특정 작업을 허용하는 것은 달라.",
     "Authenticating a peer is different from allowing a specific operation."
    ]
   },
   {
    "kind": "order",
    "prompt": [
     "3주차 · 네트워크 격리 정책을 적용하는 흐름은?",
     "Week 3 · Order the network isolation rollout."
    ],
    "options": [
     [
      "필수 통신 흐름 식별",
      "Identify required traffic flows"
     ],
     [
      "최소 허용 정책 설계",
      "Design minimal allow policies"
     ],
     [
      "테스트 환경에서 허용·차단 검증",
      "Test allowed and denied traffic"
     ],
     [
      "점진 적용 및 장애 감시",
      "Roll out gradually and monitor failures"
     ]
    ],
    "answer": [
     0,
     1,
     2,
     3
    ],
    "why": [
     "무작정 차단하면 정상 서비스도 멈출 수 있어. 필요한 흐름부터 파악하자.",
     "Blocking blindly can break legitimate services. Understand required flows first."
    ]
   },
   {
    "kind": "tf",
    "prompt": [
     "4주차 · NetworkPolicy는 이를 지원하는 네트워크 플러그인이 실제로 집행해야 한다.",
     "Week 4 · NetworkPolicy requires a supporting network implementation to enforce it."
    ],
    "options": [
     [
      "참",
      "True"
     ],
     [
      "거짓",
      "False"
     ]
    ],
    "answer": [
     0
    ],
    "why": [
     "정책 파일이 존재하는 것과 실제 트래픽이 차단되는 것은 달라. 사용하는 환경에서 꼭 테스트하자.",
     "A policy object existing is different from traffic being blocked. Verify enforcement in your environment."
    ]
   }
  ]
 },
 {
  "title": [
   "너무 조용한 새벽",
   "An unusually quiet night"
  ],
  "scene": [
   "새벽 3시, 실패한 로그인 뒤에 대량 다운로드가 있었어. 코알리나가 졸린 눈으로 로그를 모았어. “알림을 받을 담당자도 정해야겠어.”",
   "At 3 a.m., failed logins are followed by a huge download. Sleepy Koalina gathers the logs. “We also need someone responsible for the alert.”"
  ],
  "questions": [
   {
    "kind": "choice",
    "prompt": [
     "1주차 · 로그는 있는데 아무도 이상을 몰랐어. 무엇이 부족할까?",
     "Week 1 · Logs exist, but nobody noticed the anomaly. What is missing?"
    ],
    "options": [
     [
      "탐지 규칙·알림·담당자",
      "Detection rules, alerts, and ownership"
     ],
     [
      "더 예쁜 로그 글꼴",
      "A prettier log font"
     ],
     [
      "서버 이름 변경",
      "A new server name"
     ]
    ],
    "answer": [
     0
    ],
    "why": [
     "수집한 로그를 의미 있는 사건으로 연결하고 담당자에게 전달해야 탐지와 대응으로 이어져.",
     "Correlate logs into meaningful signals and route them to an owner so detection leads to response."
    ]
   },
   {
    "kind": "multi",
    "prompt": [
     "2주차 · 조사에 도움이 되는 기록을 골라줘.",
     "Week 2 · Select useful investigation records."
    ],
    "options": [
     [
      "인증 시각과 주체",
      "Authentication time and identity"
     ],
     [
      "접근한 자료와 작업",
      "Accessed resources and actions"
     ],
     [
      "모든 사용자의 평문 비밀번호",
      "Every user’s plaintext password"
     ],
     [
      "관련 요청 ID",
      "Related request IDs"
     ]
    ],
    "answer": [
     0,
     1,
     3
    ],
    "why": [
     "조사에 필요한 맥락을 남기되 비밀번호 같은 비밀정보를 로그에 기록하면 안 돼.",
     "Keep useful context without logging secrets such as passwords."
    ]
   },
   {
    "kind": "order",
    "prompt": [
     "3주차 · 경보의 초기 대응 흐름을 정해줘.",
     "Week 3 · Order an initial alert response."
    ],
    "options": [
     [
      "경보 검토 및 범위 확인",
      "Triage the alert and assess scope"
     ],
     [
      "필요한 증거를 보존하며 침해 경로 격리",
      "Contain the path while preserving needed evidence"
     ],
     [
      "원인 조사와 수정",
      "Investigate and remediate the cause"
     ],
     [
      "복구 검증과 대응 절차 개선",
      "Verify recovery and improve procedures"
     ]
    ],
    "answer": [
     0,
     1,
     2,
     3
    ],
    "why": [
     "실제 사고에서는 단계가 반복되거나 겹쳐. 증거와 서비스 영향을 고려하며 피해 확산을 막자.",
     "Real incidents may repeat or overlap steps. Limit damage while considering evidence and service impact."
    ]
   },
   {
    "kind": "tf",
    "prompt": [
     "4주차 · 경보가 많을수록 탐지 체계가 반드시 더 좋다.",
     "Week 4 · More alerts always mean a better detection system."
    ],
    "options": [
     [
      "참",
      "True"
     ],
     [
      "거짓",
      "False"
     ]
    ],
    "answer": [
     1
    ],
    "why": [
     "불필요한 경보는 중요한 사건을 놓치게 만들 수 있어. 탐지 품질과 실제 대응 가능성을 같이 보자.",
     "Excess noise can hide important events. Evaluate signal quality and the ability to respond."
    ]
   }
  ]
 },
 {
  "title": [
   "백업 상자를 열어봐",
   "Open the backup box"
  ],
  "scene": [
   "랜섬웨어 모의훈련 날! 백업은 있는데 복구해 본 사람이 없대. 코알리나가 복구 시계를 눌렀어. “파일이 있다는 것부터 다시 확인하자.”",
   "Ransomware rehearsal day! Backups exist, but nobody has restored them. Koalina starts the recovery timer. “Let’s check what these files can actually do.”"
  ],
  "questions": [
   {
    "kind": "choice",
    "prompt": [
     "1주차 · 백업의 실효성을 가장 잘 확인하는 것은?",
     "Week 1 · What best verifies that a backup is useful?"
    ],
    "options": [
     [
      "파일 이름에 SAFE 추가",
      "Add SAFE to the filename"
     ],
     [
      "실제 복구와 데이터 무결성 검사",
      "Restore it and verify data integrity"
     ],
     [
      "백업 폴더 스크린샷",
      "Take a screenshot of the backup folder"
     ]
    ],
    "answer": [
     1
    ],
    "why": [
     "복구할 수 있고 데이터가 정확한지 확인해야 해. 복구 시간도 측정하자.",
     "Verify that restoration works and the data is correct. Measure recovery time too."
    ]
   },
   {
    "kind": "multi",
    "prompt": [
     "2주차 · 랜섬웨어에 대비한 백업 설계를 골라줘.",
     "Week 2 · Select backup protections against ransomware."
    ],
    "options": [
     [
      "운영 계정과 접근 권한 분리",
      "Separate access from production credentials"
     ],
     [
      "적절한 불변 또는 오프라인 사본",
      "Suitable immutable or offline copies"
     ],
     [
      "운영 계정이 모든 백업을 삭제 가능",
      "Let production credentials delete every backup"
     ],
     [
      "주기적인 복구 훈련",
      "Regular restoration exercises"
     ]
    ],
    "answer": [
     0,
     1,
     3
    ],
    "why": [
     "운영 시스템이 침해돼도 백업까지 함께 지워지지 않도록 분리해야 해.",
     "Separate backups so a production compromise does not automatically destroy all recovery copies."
    ]
   },
   {
    "kind": "order",
    "prompt": [
     "3주차 · 안전한 복구 훈련 순서는?",
     "Week 3 · Order a safe restoration exercise."
    ],
    "options": [
     [
      "격리된 복구 환경 준비",
      "Prepare an isolated recovery environment"
     ],
     [
      "검증할 백업 사본 선택",
      "Select the backup copy to test"
     ],
     [
      "자료와 서비스 복원",
      "Restore data and services"
     ],
     [
      "무결성·기능·소요 시간 확인",
      "Check integrity, behavior, and elapsed time"
     ]
    ],
    "answer": [
     0,
     1,
     2,
     3
    ],
    "why": [
     "복구 훈련은 운영 데이터를 덮어쓰지 않는 안전한 환경에서 시작하자.",
     "Start restoration exercises in a safe environment that does not overwrite production data."
    ]
   },
   {
    "kind": "tf",
    "prompt": [
     "4주차 · 복구에 성공하면 이미 유출된 고객 정보의 비밀성도 회복된다.",
     "Week 4 · A successful restore reverses the confidentiality impact of stolen data."
    ],
    "options": [
     [
      "참",
      "True"
     ],
     [
      "거짓",
      "False"
     ]
    ],
    "answer": [
     1
    ],
    "why": [
     "백업은 가용성 회복에 도움을 줘. 공격자가 가져간 정보까지 회수해 주지는 못해.",
     "Backups help restore availability. They do not retrieve information an attacker has already stolen."
    ]
   }
  ]
 },
 {
  "title": [
   "새 파트너, 새 경계",
   "New partner, new boundary"
  ],
  "scene": [
   "외부 파트너 API가 붙는대. 코알리나는 화이트보드에 고객, 서비스, 파트너를 그렸어. “데이터가 경계를 넘을 때 무슨 일이 생길까?”",
   "A partner API is joining the platform. Koalina sketches customers, services, and the partner. “What happens when data crosses these boundaries?”"
  ],
  "questions": [
   {
    "kind": "choice",
    "prompt": [
     "1주차 · 설계 중 공격 경로를 찾는 활동은?",
     "Week 1 · Which design activity explores possible attack paths?"
    ],
    "options": [
     [
      "화면 색상 선택",
      "Choosing interface colors"
     ],
     [
      "모든 권한 허용",
      "Allowing every permission"
     ],
     [
      "위협 모델링",
      "Threat modeling"
     ]
    ],
    "answer": [
     2
    ],
    "why": [
     "자산과 흐름, 신뢰 경계, 공격 경로를 함께 살피는 활동이야.",
     "Threat modeling examines assets, flows, trust boundaries, and possible attack paths."
    ]
   },
   {
    "kind": "multi",
    "prompt": [
     "2주차 · 파트너 연동 설계에서 질문할 것은?",
     "Week 2 · Select questions for the partner integration design."
    ],
    "options": [
     [
      "어떤 고객 데이터가 나가는가?",
      "Which customer data leaves the system?"
     ],
     [
      "파트너 요청을 어떻게 인증·인가하는가?",
      "How are partner requests authenticated and authorized?"
     ],
     [
      "실패와 이상 요청을 어떻게 탐지하는가?",
      "How are failures and suspicious requests detected?"
     ],
     [
      "파트너 이름이 멋있는가?",
      "Does the partner have a cool name?"
     ]
    ],
    "answer": [
     0,
     1,
     2
    ],
    "why": [
     "데이터의 민감도와 권한 경계, 실패 시 동작을 설계에서 다루자.",
     "Address data sensitivity, permission boundaries, and failure behavior during design."
    ]
   },
   {
    "kind": "order",
    "prompt": [
     "3주차 · 위협 모델링을 실행 가능한 결과로 연결해줘.",
     "Week 3 · Order the path from modeling to action."
    ],
    "options": [
     [
      "자산과 데이터 흐름 정리",
      "Map assets and data flows"
     ],
     [
      "신뢰 경계와 위협 식별",
      "Identify trust boundaries and threats"
     ],
     [
      "위험에 맞는 대응책 선택",
      "Choose mitigations for the risks"
     ],
     [
      "구현과 테스트로 검증",
      "Implement and validate with tests"
     ]
    ],
    "answer": [
     0,
     1,
     2,
     3
    ],
    "why": [
     "그림만 완성하면 끝이 아니야. 대응책을 실제 코드와 정책, 테스트로 연결하자.",
     "A diagram is not the finish line. Turn mitigations into code, policies, and tests."
    ]
   },
   {
    "kind": "tf",
    "prompt": [
     "4주차 · 설계가 바뀌면 기존 위협 모델도 다시 검토해야 한다.",
     "Week 4 · A design change can require revisiting the threat model."
    ],
    "options": [
     [
      "참",
      "True"
     ],
     [
      "거짓",
      "False"
     ]
    ],
    "answer": [
     0
    ],
    "why": [
     "새 데이터 흐름과 연결은 새로운 공격 경로를 만들 수 있어.",
     "New data flows and connections can introduce new attack paths."
    ]
   }
  ]
 },
 {
  "title": [
   "코알리나의 연말 작전",
   "Koalina’s year-end operation"
  ],
  "scene": [
   "마지막 훈련이야! 계정 침해, 취약한 패키지, 서비스 중단이 함께 왔어. 코알리나가 팀 배지를 꺼냈어. “올해 배운 걸 연결할 시간이야!”",
   "The final exercise combines a compromised account, a vulnerable package, and an outage. Koalina takes out the team badge. “Time to connect everything we learned!”"
  ],
  "questions": [
   {
    "kind": "choice",
    "prompt": [
     "1주차 · 여러 사고를 함께 견디는 전략은?",
     "Week 1 · Which strategy helps withstand multiple kinds of incident?"
    ],
    "options": [
     [
      "예방·탐지·대응·복구의 다층 방어",
      "Layer prevention, detection, response, and recovery"
     ],
     [
      "가장 비싼 도구 하나만 구매",
      "Buy only the most expensive tool"
     ],
     [
      "백업이 있으니 인가 제거",
      "Remove authorization because backups exist"
     ]
    ],
    "answer": [
     0
    ],
    "why": [
     "각 방어는 서로 다른 실패를 보완해. 한 도구에 모든 역할을 맡길 수 없어.",
     "Different layers address different failures. One tool cannot perform every role."
    ]
   },
   {
    "kind": "multi",
    "prompt": [
     "2주차 · 좋은 사고 회고에 들어갈 것을 골라줘.",
     "Week 2 · Select useful elements of an incident review."
    ],
    "options": [
     [
      "타임라인과 관측된 사실",
      "A timeline and observed facts"
     ],
     [
      "담당자와 기한이 있는 개선 작업",
      "Improvements with owners and deadlines"
     ],
     [
      "개인을 공개적으로 비난",
      "Public blame of individuals"
     ],
     [
      "탐지·복구 시간과 남은 위험",
      "Detection and recovery times and remaining risks"
     ]
    ],
    "answer": [
     0,
     1,
     3
    ],
    "why": [
     "사람을 탓하기보다 시스템이 같은 실수를 견디도록 개선하자.",
     "Improve systems so they can withstand similar errors instead of focusing on blame."
    ]
   },
   {
    "kind": "order",
    "prompt": [
     "3주차 · 내년 보안 계획을 만드는 순서는?",
     "Week 3 · Order next year’s security planning."
    ],
    "options": [
     [
      "올해 사고와 훈련 결과 모으기",
      "Collect this year’s incident and exercise findings"
     ],
     [
      "남은 위험 우선순위 결정",
      "Prioritize remaining risks"
     ],
     [
      "예산과 담당자를 둔 개선 계획",
      "Create a plan with budget and owners"
     ],
     [
      "후속 훈련으로 효과 검증",
      "Verify improvements in follow-up exercises"
     ]
    ],
    "answer": [
     0,
     1,
     2,
     3
    ],
    "why": [
     "점수보다 중요한 건 다음 행동이야. 결과를 예산과 실행 가능한 계획으로 바꿔보자.",
     "The next action matters more than the score. Turn findings into funded, actionable improvements."
    ]
   },
   {
    "kind": "tf",
    "prompt": [
     "4주차 · 훈련에서 만점을 받으면 실제 시스템의 보안도 완전히 보장된다.",
     "Week 4 · A perfect exercise score guarantees complete real-world security."
    ],
    "options": [
     [
      "참",
      "True"
     ],
     [
      "거짓",
      "False"
     ]
    ],
    "answer": [
     1
    ],
    "why": [
     "이 게임은 개념을 배우는 시뮬레이션이야. 실제 환경에는 새로운 위협과 제약이 계속 생겨.",
     "This game teaches concepts through simulation. Real environments continually face new threats and constraints."
    ]
   }
  ]
 }
];
