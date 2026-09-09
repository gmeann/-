// Chuseok Adventure - Fact Check System
// 게임의 각 팩트 관련 버튼을 클릭하면 팩트 상세 정보를 표시합니다

const FACTS = {
    'hanagawi': {
        title: '한가위',
        category: '유래·어원',
        fact: '음력 8월 15일을 부르는 명칭',
        detail: '"하나(한) + 가위(제일 높은)"라는 뜻으로, 가을의 가장 큰 명절을 의미합니다.',
        source: '국립국어원 표준국어대사전',
        url: 'https://www.korean.go.kr/',
        credibility: '⭐⭐⭐⭐⭐',
        usedIn: ['트랙 A 전체', '트랙 B 01', '트랙 C 01']
    },
    'chuseok': {
        title: '추석 (음력 8월 15일)',
        category: '유래·어원',
        fact: '한국의 전통 명절',
        detail: '새로 난 곡식을 먹으며 풍요로움을 감사하는 명절입니다.',
        source: '문화재청 한국민족문화대백과',
        url: 'https://www.heritage.go.kr/',
        credibility: '⭐⭐⭐⭐⭐',
        usedIn: ['트랙 A 전체', '트랙 B 전체']
    },
    'gaebae': {
        title: '가배 (신라시대)',
        category: '유래·어원',
        fact: '신라 시대에 음력 8월 15일에 행했던 명절',
        detail: '여인들이 달맞이를 하며 길쌈 기술을 겨루던 행사. 현대 추석의 뿌리입니다.',
        source: '삼국사기, 문화재청 자료',
        url: 'https://www.heritage.go.kr/',
        credibility: '⭐⭐⭐⭐⭐',
        usedIn: ['트랙 B 01']
    },
    'songpyeon': {
        title: '송편',
        category: '음식',
        fact: '추석을 대표하는 음식',
        detail: '반달 모양이 보름달을 닮았음. 팥소나 밤을 넣어 만듭니다. 반달 모양은 보름달 상징으로, 조상들의 달에 대한 마음을 표현합니다.',
        source: '국립민속박물관, 한국음식문화연구원',
        url: 'https://www.nfm.go.kr/',
        credibility: '⭐⭐⭐⭐⭐',
        usedIn: ['트랙 A 02', '트랙 B 02', '트랙 C 01']
    },
    'newgrain': {
        title: '햇곡식',
        category: '음식',
        fact: '그해에 새로 난 곡식',
        detail: '추석은 새로 난 곡식을 먹으며 풍요로움을 감사하는 명절입니다. 햇쌀, 햇보리, 햇콩, 햇감자, 햇팥 등이 포함됩니다.',
        source: '농림축산식품부 전통음식 자료',
        url: 'https://www.mafra.go.kr/',
        credibility: '⭐⭐⭐⭐⭐',
        usedIn: ['트랙 A 04', '트랙 B 02']
    },
    'yut': {
        title: '윷놀이',
        category: '놀이',
        fact: '네 개의 막대를 던져 나온 모양으로 말을 움직이는 전통 놀이',
        detail: '추석 때 가족과 함께 즐기는 대표 민속 놀이입니다. 결과: Do, Gae, Geol, Yut, Mo (도, 개, 걸, 윷, 모)',
        source: '국립민속박물관 한국민속 교육자료',
        url: 'https://www.nfm.go.kr/',
        credibility: '⭐⭐⭐⭐⭐',
        usedIn: ['트랙 A 03', '트랙 B 03']
    },
    'ganggangsullae': {
        title: '강강술래',
        category: '놀이',
        fact: '손을 잡고 원을 그리며 노래하고 도는 여인들의 집단 놀이',
        detail: '주로 여성들이 달밤에 즐기는 전통 춤입니다. 단합과 공동체 정신을 표현합니다.',
        source: '유네스코 인류무형문화유산 등재 자료',
        url: 'https://ich.unesco.org/',
        credibility: '⭐⭐⭐⭐⭐',
        usedIn: ['트랙 A 03', '트랙 B 03']
    },
    'jegi': {
        title: '제기차기',
        category: '놀이',
        fact: '깃털이 달린 제기를 발로 차서 떨어뜨리지 않는 놀이',
        detail: '정교한 발끝의 감각을 기르는 전통 운동입니다.',
        source: '국립민속박물관',
        url: 'https://www.nfm.go.kr/',
        credibility: '⭐⭐⭐⭐⭐',
        usedIn: ['트랙 A 03', '트랙 B 03']
    },
    'tugging': {
        title: '줄다리기',
        category: '놀이',
        fact: '지역 주민들이 함께 참여하여 풍년을 기원하는 집단 놀이',
        detail: '우리 문화에서 매우 중요한 의미를 가진 활동입니다.',
        source: '국립민속박물관 전승공예',
        url: 'https://www.nfm.go.kr/',
        credibility: '⭐⭐⭐⭐⭐',
        usedIn: ['트랙 A 03', '트랙 B 03']
    },
    'charye': {
        title: '차례',
        category: '의례',
        fact: '조상을 모시는 의식',
        detail: '추석 아침에 지냄. 지역과 가정에 따라 다양한 형태로 행해집니다. 정해진 하나의 규칙이 아니라 지역과 시대에 따라 변합니다.',
        source: '문화재청, 국립민속박물관',
        url: 'https://www.heritage.go.kr/',
        credibility: '⭐⭐⭐⭐⭐',
        usedIn: ['트랙 B 04', '트랙 C 01']
    },
    'seongmyo': {
        title: '성묘',
        category: '의례',
        fact: '조상의 묘를 찾아가 성의를 표하고 풀을 제거하는 의식',
        detail: '조상을 추모하고 가족의 유대를 다지는 시간입니다.',
        source: '문화재청 전통예절 자료',
        url: 'https://www.heritage.go.kr/',
        credibility: '⭐⭐⭐⭐⭐',
        usedIn: ['트랙 B 도감']
    },
    'hongdongbaekseo': {
        title: '홍동백서',
        category: '의례',
        fact: '차례상 배치에 관한 관례 중 하나',
        detail: '"동쪽에 빨간 색 음식, 서쪽에 흰 색 음식"이라는 규칙이지만, 모든 지역과 시대에 적용된 절대적 규칙은 아닙니다. 차례 방식은 지역과 가정에 따라 다양합니다.',
        source: '문화재청, 국립민속박물관 다양성 자료',
        url: 'https://www.heritage.go.kr/',
        credibility: '⭐⭐⭐⭐⭐',
        usedIn: ['트랙 C 01']
    },
    'korea-vs-china': {
        title: '한국 추석 vs 중국 중추절',
        category: '오늘날의 추석',
        fact: '같은 날짜 (음력 8월 15일)이지만 다른 명절',
        detail: '공통점: 같은 날짜, 같은 보름달 축하, 가을 수확 감사의 의미. 차이점: 추석은 신라 시대부터, 중추절은 중국 고대부터. 추석은 조상 추모 중심, 중추절은 단원(단합) 중심. 추석은 송편, 중추절은 월병.',
        source: '국립민속박물관 국제비교 자료',
        url: 'https://www.nfm.go.kr/',
        credibility: '⭐⭐⭐⭐⭐',
        usedIn: ['트랙 C 02']
    },
    'korea-vs-thanksgiving': {
        title: '추석 vs 추수감사절',
        category: '오늘날의 추석',
        fact: '같은 수확 감사이지만 완전히 다른 명절',
        detail: '공통점: 계절 수확 감사의 의미, 가족 모임. 차이점: 추석은 1000년 이상의 동양 역사, 추수감사절은 1621년 미국. 추석은 세속적 명절, 추수감사절은 종교 의식. 추석은 제사 중심, 추수감사절은 신 감사 중심.',
        source: '한국학중앙연구원, 미국 문화원 자료',
        url: 'https://www.aks.ac.kr/',
        credibility: '⭐⭐⭐⭐⭐',
        usedIn: ['트랙 C 03']
    },
    'changing-chuseok': {
        title: '변화하는 추석 문화',
        category: '오늘날의 추석',
        fact: '전통문화는 고정된 것이 아니라 시간과 함께 변함',
        detail: '현대 사회에서 많은 가정들이 차례를 간소화하고 있습니다. 가족 구성원이 흩어져 있고, 명절 연휴가 단축되며, 전통 제사의 의미를 묻는 세대들이 늘고 있습니다. 중요한 것은 규칙을 따르는 것이 아니라, 함께하는 것입니다.',
        source: '통계청 시대별 명절문화 변화 자료, 사회과학 연구',
        url: 'https://www.kostat.go.kr/',
        credibility: '⭐⭐⭐⭐⭐',
        usedIn: ['트랙 C 04']
    }
};

// Initialize fact-check modal when page loads
function initFactCheck() {
    if (!document.getElementById('factCheckModal')) {
        createFactCheckModal();
    }
}

// Create modal HTML
function createFactCheckModal() {
    const modal = document.createElement('div');
    modal.id = 'factCheckModal';
    modal.innerHTML = `
        <div class="fact-check-overlay" onclick="closeFactCheck()">
            <div class="fact-check-content" onclick="event.stopPropagation()">
                <button class="fact-check-close" onclick="closeFactCheck()">×</button>
                <div class="fact-check-header">
                    <h2 id="factTitle"></h2>
                    <span class="fact-category" id="factCategory"></span>
                </div>
                <div class="fact-check-body">
                    <div class="fact-section">
                        <strong>팩트:</strong>
                        <p id="factStatement"></p>
                    </div>
                    <div class="fact-section">
                        <strong>상세 정보:</strong>
                        <p id="factDetail"></p>
                    </div>
                    <div class="fact-section">
                        <strong>사용 게임:</strong>
                        <p id="factUsedIn"></p>
                    </div>
                    <div class="fact-source">
                        <strong>출처:</strong>
                        <div id="factSourceInfo"></div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Add CSS
    if (!document.getElementById('factCheckStyles')) {
        const style = document.createElement('style');
        style.id = 'factCheckStyles';
        style.innerHTML = `
            #factCheckModal {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 10000;
            }

            .fact-check-overlay {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.6);
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .fact-check-content {
                background: white;
                border-radius: 12px;
                padding: 30px;
                max-width: 600px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
                position: relative;
            }

            .fact-check-close {
                position: absolute;
                top: 15px;
                right: 15px;
                background: none;
                border: none;
                font-size: 28px;
                cursor: pointer;
                color: #666;
                padding: 0;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .fact-check-close:hover {
                color: #000;
            }

            .fact-check-header {
                margin-bottom: 25px;
            }

            .fact-check-header h2 {
                margin: 0 0 10px 0;
                color: #1a3a52;
                font-size: 1.6em;
            }

            .fact-category {
                display: inline-block;
                background: rgba(255, 215, 0, 0.2);
                color: #d4a020;
                padding: 5px 12px;
                border-radius: 20px;
                font-size: 0.85em;
                font-weight: bold;
            }

            .fact-check-body {
                color: #333;
                line-height: 1.6;
            }

            .fact-section {
                margin-bottom: 20px;
            }

            .fact-section strong {
                color: #1a3a52;
                display: block;
                margin-bottom: 8px;
                font-size: 0.95em;
            }

            .fact-section p {
                margin: 0;
                font-size: 0.95em;
            }

            .fact-source {
                background: rgba(76, 175, 80, 0.1);
                border-left: 4px solid #4caf50;
                padding: 15px;
                border-radius: 6px;
                margin-top: 20px;
            }

            .fact-source strong {
                color: #2e7d32;
            }

            #factSourceInfo {
                font-size: 0.9em;
                margin-top: 10px;
            }

            .fact-source-link {
                display: inline-block;
                color: #1976d2;
                text-decoration: none;
                margin: 5px 0;
            }

            .fact-source-link:hover {
                text-decoration: underline;
            }

            .fact-credibility {
                display: inline-block;
                color: #f39c12;
                font-weight: bold;
                margin-left: 8px;
            }

            @media (max-width: 600px) {
                .fact-check-content {
                    padding: 20px;
                    max-width: 95%;
                }

                .fact-check-header h2 {
                    font-size: 1.3em;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Open fact-check modal
function openFactCheck(factKey) {
    const fact = FACTS[factKey];
    if (!fact) {
        console.error('Fact not found:', factKey);
        return;
    }

    document.getElementById('factTitle').textContent = fact.title;
    document.getElementById('factCategory').textContent = fact.category;
    document.getElementById('factStatement').textContent = fact.fact;
    document.getElementById('factDetail').textContent = fact.detail;
    document.getElementById('factUsedIn').textContent = fact.usedIn.join(', ');

    const sourceInfo = document.getElementById('factSourceInfo');
    sourceInfo.innerHTML = `
        <div>${fact.source}</div>
        <a href="${fact.url}" target="_blank" rel="noopener noreferrer" class="fact-source-link">
            🔗 출처 보기
        </a>
        <span class="fact-credibility">${fact.credibility}</span>
    `;

    document.getElementById('factCheckModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close fact-check modal
function closeFactCheck() {
    const modal = document.getElementById('factCheckModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal on Escape key
document.addEventListener('DOMContentLoaded', function() {
    initFactCheck();
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeFactCheck();
        }
    });
});
