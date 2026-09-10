// 한가위 기록실 사건 데이터
// 각 사건은 독립적인 구조로 설계되어 있어, 사건 02, 03 추가 시에도 동일한 구조 사용 가능

const ARCHIVE_CASES = {
  case_01: {
    id: "case-01",
    number: "01",
    title: "추석은 아주 오래전부터 지금과 같은 모습이었을까?",
    claim: "오늘날의 추석은 신라 시대부터 지금과 거의 같은 모습으로 이어져 왔다.",
    sources: [
      {
        id: "source-a",
        icon: "📜",
        title: "자료 A",
        category: "옛 기록",
        type: "역사 기록",
        summary: "신라 시대의 기록을\n살펴봅니다.",
        detailTitle: "『삼국사기』의 기록",
        content: `신라 유리왕 때에는
음력 7월부터 길쌈을 하고,
8월 15일에 그 결과를 살폈다는 기록이 있습니다.

이때 노래와 춤을 즐겼다는 내용도
함께 기록되어 있습니다.`,
        sourceName: "『삼국사기』 신라본기 유리이사금 9년"
      },
      {
        id: "source-b",
        icon: "🏛️",
        title: "자료 B",
        category: "박물관 자료",
        type: "박물관 해설 자료",
        summary: "오늘날 우리가 알고 있는\n추석에 대해 설명합니다.",
        detailTitle: "박물관에서 설명하는 추석",
        content: `추석은 음력 8월 15일로,
가을의 수확과 관련된 우리나라의 중요한 명절입니다.

추석에는 햇곡식과 햇과일을 준비하고
가족과 함께 명절을 보내기도 합니다.`,
        sourceName: "국립민속박물관"
      },
      {
        id: "source-c",
        icon: "📷",
        title: "자료 C",
        category: "오늘날의 추석",
        type: "현대 자료",
        summary: "현재 사람들이 추석을\n어떻게 보내는지 살펴봅니다.",
        detailTitle: "오늘날의 추석",
        content: `오늘날에도 추석에는
가족이 함께 명절을 보내고,

음식을 나누거나 성묘를 하는 등
다양한 모습으로 추석을 보냅니다.

가족과 지역에 따라
추석을 보내는 모습은 서로 다를 수 있습니다.`,
        sourceName: "현대의 추석 모습"
      }
    ],
    judgments: [
      {
        id: "judgment-01",
        statement: "신라 시대에 8월 15일과 관련된 가배 기록이 있었다.",
        correctAnswer: "supported",
        relatedSources: ["source-a"],
        supportedExplanation: "자료 A의 기록에서 신라 유리왕 때 8월 15일에 가배와 관련된 일이 있었다는 내용을 확인할 수 있습니다.",
        notSupportedFeedback: "자료 A를 다시 살펴보세요. 신라 시대의 기록에 무엇이 있었나요?"
      },
      {
        id: "judgment-02",
        statement: "오늘날의 추석은 가족과 함께 보내는 경우가 있다.",
        correctAnswer: "supported",
        relatedSources: ["source-c"],
        supportedExplanation: "자료 C에서 오늘날 사람들이 가족과 함께 명절을 보내는 모습을 확인할 수 있습니다.",
        notSupportedFeedback: "자료 C를 다시 살펴보세요. 현대의 추석 모습에 무엇이 있었나요?"
      },
      {
        id: "judgment-03",
        statement: "신라 시대의 가배와 오늘날의 추석은 모든 면에서 거의 같았다.",
        correctAnswer: "not-supported",
        relatedSources: ["source-a", "source-c"],
        supportedFeedback: "자료들을 다시 살펴보세요. 신라 시대와 오늘날의 추석이 정말 모든 면에서 같다고 확실히 말할 수 있을까요?",
        notSupportedExplanation: "자료 A에서는 신라 시대의 기록을 확인할 수 있고, 자료 C에서는 오늘날의 추석 모습을 확인할 수 있습니다. 하지만 두 자료만으로 신라 시대와 오늘날의 추석이 모든 면에서 거의 같았다고 단정할 수는 없습니다."
      }
    ]
  }

  // 향후 추가될 사건들을 위한 구조 예시:
  // case_02: { id: "case-02", ... },
  // case_03: { id: "case-03", ... }
};

// 특정 사건 데이터 가져오기
function getArchiveCase(caseId) {
  return ARCHIVE_CASES[caseId];
}

// 현재는 case-01만 제공
function getCurrentCase() {
  return ARCHIVE_CASES.case_01;
}
