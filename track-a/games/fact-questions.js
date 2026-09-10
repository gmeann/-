// 추석 팩트 탐정 문제 데이터
const FACT_QUESTIONS = [
  {
    id: "food-01",
    category: "음식",
    statement: "추석에는 송편만 먹는다.",
    answer: false, // 정답: 아니에요
    clues: [
      "송편은 추석의 대표적인 음식이에요.",
      "하지만 추석 무렵에는 햇곡식과 햇과일을 준비하기도 해요."
    ],
    clueExploration: [
      {
        id: "clue-food-01-1",
        icon: "🍡",
        title: "송편",
        preview: "송편은 추석의 대표…",
        detail: "송편은 추석의 대표적인 음식이에요."
      },
      {
        id: "clue-food-01-2",
        icon: "🌾",
        title: "햇곡식과 햇과일",
        preview: "추석 무렵에는…",
        detail: "추석 무렵에는 햇곡식과 햇과일을 준비하기도 해요."
      }
    ],
    explanation: [
      "송편은 추석의 대표 음식이에요.",
      "하지만 추석에는 송편뿐 아니라 햇곡식과 햇과일 등을 준비하기도 해요."
    ],
    hint: "'~만'이라는 말이 맞는지 한 번 더 살펴보세요.",
    source: "국립민속박물관",
    images: {
      clue1: "🍡", // 송편
      clue2: "🌾" // 햇곡식
    }
  },
  {
    id: "grain-01",
    category: "햇곡식",
    statement: "추석 무렵에는 그해에 거둔 곡식과 과일을 준비하기도 한다.",
    answer: true, // 정답: 맞아요
    clues: [
      "추석은 가을에 맞이하는 명절이에요.",
      "추석 무렵에는 햇곡식과 햇과일을 준비하기도 해요."
    ],
    clueType: "observe",
    clueExploration: [
      {
        id: "clue-grain-02-1",
        icon: "🌾",
        title: "벼",
        description: "가을에 거둔 벼예요."
      },
      {
        id: "clue-grain-02-2",
        icon: "🍎",
        title: "가을 과일",
        description: "가을에 익은 과일이에요."
      },
      {
        id: "clue-grain-02-3",
        icon: "🌰",
        title: "밤",
        description: "가을에 만날 수 있는 열매예요."
      }
    ],
    clueInstruction: "가을에 어떤 것들을 만날 수 있는지 살펴보세요.",
    explanation: [
      "추석에는 그해에 거둔 햇곡식과 햇과일을 준비하기도 해요.",
      "가을은 추수의 계절이기도 해요."
    ],
    hint: "추석이 가을에 있는 명절이라는 점을 생각해 보세요.",
    source: "국립민속박물관",
    images: {
      clue1: "🌾", // 곡식
      clue2: "🍎" // 과일
    }
  },
  {
    id: "ritual-01",
    category: "차례상",
    statement: "추석 차례상은 모든 집에서 똑같이 차린다.",
    answer: false, // 정답: 아니에요
    clues: [
      "차례 음식은 집안이나 지역에 따라 달라질 수 있어요.",
      "모든 집에서 정확히 같은 음식을 차리지는 않아요."
    ],
    clueType: "compare",
    clueExploration: [
      {
        id: "clue-ritual-03-a",
        label: "차례상 예시 A",
        image: "[차례상 자료 A]",
        description: "차례 음식은 집안이나 지역에 따라 달라질 수 있어요."
      },
      {
        id: "clue-ritual-03-b",
        label: "차례상 예시 B",
        image: "[차례상 자료 B]",
        description: "차례 음식은 집안이나 지역에 따라 달라질 수 있어요."
      }
    ],
    clueQuestion: "두 상의 모습이 같은가요?",
    clueInstruction: "차례상은 정말 모두 같은 모습일까요?",
    explanation: [
      "추석 차례상은 모든 집에서 똑같은 모습으로 차리는 것이 아니에요.",
      "집안과 지역에 따라 음식 차림이 달라질 수 있어요."
    ],
    hint: "전통이 지역과 가정마다 조금씩 다를 수 있다는 생각을 해보세요.",
    source: "국립민속박물관",
    images: {
      clue1: "🏠", // 집
      clue2: "🗺️" // 지역
    }
  },
  {
    id: "ritual-02",
    category: "제례 방식",
    statement: "차례상에는 홍동백서와 조율이시를 반드시 지켜야 한다.",
    answer: false, // 정답: 아니에요
    clues: [
      "홍동백서와 조율이시는 차례상에 관해 널리 알려진 방식이에요.",
      "하지만 모든 집에서 반드시 지켜야 하는 하나의 규칙이라고 보기는 어려워요."
    ],
    clueType: "keyword",
    keywordToHighlight: "반드시",
    clueQuestion: "이 말처럼 모든 집에서 꼭 지켜야 하는 규칙일까요?",
    clueExploration: [
      {
        id: "clue-ritual-04-1",
        icon: "📜",
        title: "널리 알려진 차례상 차림",
        description: "홍동백서와 조율이시는 차례상에 관해 널리 알려진 방식이에요."
      },
      {
        id: "clue-ritual-04-2",
        icon: "🏠",
        title: "집안마다 다른 차례상",
        description: "하지만 집안마다 조금씩 다르게 차리기도 해요."
      },
      {
        id: "clue-ritual-04-3",
        icon: "📖",
        title: "현대의 차례상 안내",
        description: "모든 집에서 반드시 지켜야 하는 하나의 규칙이라고 보기는 어려워요."
      }
    ],
    clueInstruction: "반드시라는 표현을 탐정처럼 의심해 보세요.",
    explanation: [
      "차례상 차림은 집안과 지역에 따라 다를 수 있어요.",
      "홍동백서와 조율이시를 모든 집에서 반드시 지켜야 하는 규칙으로 볼 수는 없어요."
    ],
    hint: "널리 알려진 방식과 반드시 지켜야 하는 규칙은 다를 수 있어요.",
    source: "국립민속박물관",
    images: {
      clue1: "🍜", // 음식
      clue2: "🤔" // 생각
    }
  },
  {
    id: "play-01",
    category: "전통놀이",
    statement: "강강술래는 사람들이 손을 잡고 둥글게 돌며 노는 전통 놀이이다.",
    answer: true, // 정답: 맞아요
    clues: [
      "사람들이 손을 잡고 원을 이루어 움직이는 모습이 강강술래의 특징이에요.",
      "강강술래는 유네스코 인류무형문화유산으로 등재되어 있어요."
    ],
    clueType: "image",
    clueExploration: {
      image: "[강강술래 자료]",
      caption: "사람들이 손을 잡고 원을 이루어 움직이고 있어요.",
      guideQuestion: "이 모습이 강강술래의 특징과 맞는지 생각해 보세요."
    },
    clueInstruction: "강강술래의 모습을 살펴보세요.",
    explanation: [
      "강강술래는 사람들이 손을 잡고 둥글게 돌며 노는 전통 놀이예요.",
      "강강술래는 유네스코 인류무형문화유산으로 등재되어 있어요."
    ],
    hint: "강강술래의 모습을 떠올려 보세요.",
    source: "유네스코",
    images: {
      clue1: "👥", // 사람들
      clue2: "⭕" // 원
    }
  }
];
