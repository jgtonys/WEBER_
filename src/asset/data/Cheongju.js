/*
1주일 단위의 데이터
배열(0~6)마다 월요일~일요일까지 항목이 나열
img는 경로 그대로 넣고 파일명만 작성

json 파일 모델
http://www.objgen.com/json/models/Xd6z

예시 파일이라 1주만 만들어 놓았습니다
js 파일을 추가하셔서 만드셔도 되고, 변수를 추가하셔도 됩니다
*/

let cheongjuData = [
  [{
      "name": "별헤는날",
      "img": "src/asset/img/Cheongju/img1.png",
      "contents": {
        "fullname": "별 헤는 날: 나와 당신의 이야기",
        "date": "2019.05.06 ~ 2019.05.12",
        "author": "김을, 정연두 외 13인",
        "numOfWorks": "23점",
        "price": "무료",
        "host": "국립현대미술관",
        "content": "이 전시는 회화, 사진, 조각, 영상 설치 등 다양한 매체를 통해 작은 일상의 이야기에 주목하고, 그 속에 감춰진 보석같이 반짝이는 소중한 순간을 드러내는 15작가의 작품 23점으로 구성되어있다. 전시 출품작들은 국립현대미술관이 소장하고 있는 8,100여점의 한국현대미술 소장품 중에서 주제에 맞게 엄선된 대표작들이다."
      }
    },
    {
      "name": "#보다",
      "img": "src/asset/img/Cheongju/img2.png",
      "contents": {
        "fullname": "#보다",
        "date": "2019.05.06 ~ 2019.05.15",
        "author": "김범, 세자르 발다치니 외 4인",
        "numOfWorks": "9점",
        "price": "무료",
        "host": "국립현대미술관",
        "content": "‘보다’는 무엇을 보는 행동 말고도 상황에 따라 다양한 의미로 해석됩니다. 우리 주변에서 쉽게 만날 수 있는 여러가지의 사물이나 현상 역시 작가의 생각과 의도에 따라 다양한 의미로 우리에게 다가옵니다. 이것이 우리가 함께 살펴보고, 되어 보고, 해 보고, 더 보아야 하는 이유입니다. 국립현대미술관 개관 50주년 기념 특별 전시 <#보다>는 공간별 작품을 감상하고 활동에 참여하면서 작품을 만나는 즐거움과 새로운 생각을 나누는 경험을 제공합니다. "
      }
    },
  ],
  [{
    "name": "별헤는날",
    "img": "src/asset/img/Cheongju/img1.png",
    "contents": {
      "fullname": "별 헤는 날: 나와 당신의 이야기",
      "date": "2019.05.06 ~ 2019.05.12",
      "author": "김을, 정연두 외 13인",
      "numOfWorks": "23점",
      "price": "무료",
      "host": "국립현대미술관",
      "content": "이 전시는 회화, 사진, 조각, 영상 설치 등 다양한 매체를 통해 작은 일상의 이야기에 주목하고, 그 속에 감춰진 보석같이 반짝이는 소중한 순간을 드러내는 15작가의 작품 23점으로 구성되어있다. 전시 출품작들은 국립현대미술관이 소장하고 있는 8,100여점의 한국현대미술 소장품 중에서 주제에 맞게 엄선된 대표작들이다."
    }
  },
  {
    "name": "#보다",
    "img": "src/asset/img/Cheongju/img2.png",
    "contents": {
      "fullname": "#보다",
      "date": "2019.05.06 ~ 2019.05.15",
      "author": "김범, 세자르 발다치니 외 4인",
      "numOfWorks": "9점",
      "price": "무료",
      "host": "국립현대미술관",
      "content": "‘보다’는 무엇을 보는 행동 말고도 상황에 따라 다양한 의미로 해석됩니다. 우리 주변에서 쉽게 만날 수 있는 여러가지의 사물이나 현상 역시 작가의 생각과 의도에 따라 다양한 의미로 우리에게 다가옵니다. 이것이 우리가 함께 살펴보고, 되어 보고, 해 보고, 더 보아야 하는 이유입니다. 국립현대미술관 개관 50주년 기념 특별 전시 <#보다>는 공간별 작품을 감상하고 활동에 참여하면서 작품을 만나는 즐거움과 새로운 생각을 나누는 경험을 제공합니다. "
    }
  },
],
[{
  "name": "별헤는날",
  "img": "src/asset/img/Cheongju/img1.png",
  "contents": {
    "fullname": "별 헤는 날: 나와 당신의 이야기",
    "date": "2019.05.06 ~ 2019.05.12",
    "author": "김을, 정연두 외 13인",
    "numOfWorks": "23점",
    "price": "무료",
    "host": "국립현대미술관",
    "content": "이 전시는 회화, 사진, 조각, 영상 설치 등 다양한 매체를 통해 작은 일상의 이야기에 주목하고, 그 속에 감춰진 보석같이 반짝이는 소중한 순간을 드러내는 15작가의 작품 23점으로 구성되어있다. 전시 출품작들은 국립현대미술관이 소장하고 있는 8,100여점의 한국현대미술 소장품 중에서 주제에 맞게 엄선된 대표작들이다."
  }
},
{
  "name": "#보다",
  "img": "src/asset/img/Cheongju/img2.png",
  "contents": {
    "fullname": "#보다",
    "date": "2019.05.06 ~ 2019.05.15",
    "author": "김범, 세자르 발다치니 외 4인",
    "numOfWorks": "9점",
    "price": "무료",
    "host": "국립현대미술관",
    "content": "‘보다’는 무엇을 보는 행동 말고도 상황에 따라 다양한 의미로 해석됩니다. 우리 주변에서 쉽게 만날 수 있는 여러가지의 사물이나 현상 역시 작가의 생각과 의도에 따라 다양한 의미로 우리에게 다가옵니다. 이것이 우리가 함께 살펴보고, 되어 보고, 해 보고, 더 보아야 하는 이유입니다. 국립현대미술관 개관 50주년 기념 특별 전시 <#보다>는 공간별 작품을 감상하고 활동에 참여하면서 작품을 만나는 즐거움과 새로운 생각을 나누는 경험을 제공합니다. "
  }
},
],
[{
  "name": "별헤는날",
  "img": "src/asset/img/Cheongju/img1.png",
  "contents": {
    "fullname": "별 헤는 날: 나와 당신의 이야기",
    "date": "2019.05.06 ~ 2019.05.12",
    "author": "김을, 정연두 외 13인",
    "numOfWorks": "23점",
    "price": "무료",
    "host": "국립현대미술관",
    "content": "이 전시는 회화, 사진, 조각, 영상 설치 등 다양한 매체를 통해 작은 일상의 이야기에 주목하고, 그 속에 감춰진 보석같이 반짝이는 소중한 순간을 드러내는 15작가의 작품 23점으로 구성되어있다. 전시 출품작들은 국립현대미술관이 소장하고 있는 8,100여점의 한국현대미술 소장품 중에서 주제에 맞게 엄선된 대표작들이다."
  }
},
{
  "name": "#보다",
  "img": "src/asset/img/Cheongju/img2.png",
  "contents": {
    "fullname": "#보다",
    "date": "2019.05.06 ~ 2019.05.15",
    "author": "김범, 세자르 발다치니 외 4인",
    "numOfWorks": "9점",
    "price": "무료",
    "host": "국립현대미술관",
    "content": "‘보다’는 무엇을 보는 행동 말고도 상황에 따라 다양한 의미로 해석됩니다. 우리 주변에서 쉽게 만날 수 있는 여러가지의 사물이나 현상 역시 작가의 생각과 의도에 따라 다양한 의미로 우리에게 다가옵니다. 이것이 우리가 함께 살펴보고, 되어 보고, 해 보고, 더 보아야 하는 이유입니다. 국립현대미술관 개관 50주년 기념 특별 전시 <#보다>는 공간별 작품을 감상하고 활동에 참여하면서 작품을 만나는 즐거움과 새로운 생각을 나누는 경험을 제공합니다. "
  }
},
],
[{
  "name": "별헤는날",
  "img": "src/asset/img/Cheongju/img1.png",
  "contents": {
    "fullname": "별 헤는 날: 나와 당신의 이야기",
    "date": "2019.05.06 ~ 2019.05.12",
    "author": "김을, 정연두 외 13인",
    "numOfWorks": "23점",
    "price": "무료",
    "host": "국립현대미술관",
    "content": "이 전시는 회화, 사진, 조각, 영상 설치 등 다양한 매체를 통해 작은 일상의 이야기에 주목하고, 그 속에 감춰진 보석같이 반짝이는 소중한 순간을 드러내는 15작가의 작품 23점으로 구성되어있다. 전시 출품작들은 국립현대미술관이 소장하고 있는 8,100여점의 한국현대미술 소장품 중에서 주제에 맞게 엄선된 대표작들이다."
  }
},
{
  "name": "#보다",
  "img": "src/asset/img/Cheongju/img2.png",
  "contents": {
    "fullname": "#보다",
    "date": "2019.05.06 ~ 2019.05.15",
    "author": "김범, 세자르 발다치니 외 4인",
    "numOfWorks": "9점",
    "price": "무료",
    "host": "국립현대미술관",
    "content": "‘보다’는 무엇을 보는 행동 말고도 상황에 따라 다양한 의미로 해석됩니다. 우리 주변에서 쉽게 만날 수 있는 여러가지의 사물이나 현상 역시 작가의 생각과 의도에 따라 다양한 의미로 우리에게 다가옵니다. 이것이 우리가 함께 살펴보고, 되어 보고, 해 보고, 더 보아야 하는 이유입니다. 국립현대미술관 개관 50주년 기념 특별 전시 <#보다>는 공간별 작품을 감상하고 활동에 참여하면서 작품을 만나는 즐거움과 새로운 생각을 나누는 경험을 제공합니다. "
  }
},
],
[{
  "name": "별헤는날",
  "img": "src/asset/img/Cheongju/img1.png",
  "contents": {
    "fullname": "별 헤는 날: 나와 당신의 이야기",
    "date": "2019.05.06 ~ 2019.05.12",
    "author": "김을, 정연두 외 13인",
    "numOfWorks": "23점",
    "price": "무료",
    "host": "국립현대미술관",
    "content": "이 전시는 회화, 사진, 조각, 영상 설치 등 다양한 매체를 통해 작은 일상의 이야기에 주목하고, 그 속에 감춰진 보석같이 반짝이는 소중한 순간을 드러내는 15작가의 작품 23점으로 구성되어있다. 전시 출품작들은 국립현대미술관이 소장하고 있는 8,100여점의 한국현대미술 소장품 중에서 주제에 맞게 엄선된 대표작들이다."
  }
},
{
  "name": "#보다",
  "img": "src/asset/img/Cheongju/img2.png",
  "contents": {
    "fullname": "#보다",
    "date": "2019.05.06 ~ 2019.05.15",
    "author": "김범, 세자르 발다치니 외 4인",
    "numOfWorks": "9점",
    "price": "무료",
    "host": "국립현대미술관",
    "content": "‘보다’는 무엇을 보는 행동 말고도 상황에 따라 다양한 의미로 해석됩니다. 우리 주변에서 쉽게 만날 수 있는 여러가지의 사물이나 현상 역시 작가의 생각과 의도에 따라 다양한 의미로 우리에게 다가옵니다. 이것이 우리가 함께 살펴보고, 되어 보고, 해 보고, 더 보아야 하는 이유입니다. 국립현대미술관 개관 50주년 기념 특별 전시 <#보다>는 공간별 작품을 감상하고 활동에 참여하면서 작품을 만나는 즐거움과 새로운 생각을 나누는 경험을 제공합니다. "
  }
},
],
[{
  "name": "별헤는날",
  "img": "src/asset/img/Cheongju/img1.png",
  "contents": {
    "fullname": "별 헤는 날: 나와 당신의 이야기",
    "date": "2019.05.06 ~ 2019.05.12",
    "author": "김을, 정연두 외 13인",
    "numOfWorks": "23점",
    "price": "무료",
    "host": "국립현대미술관",
    "content": "이 전시는 회화, 사진, 조각, 영상 설치 등 다양한 매체를 통해 작은 일상의 이야기에 주목하고, 그 속에 감춰진 보석같이 반짝이는 소중한 순간을 드러내는 15작가의 작품 23점으로 구성되어있다. 전시 출품작들은 국립현대미술관이 소장하고 있는 8,100여점의 한국현대미술 소장품 중에서 주제에 맞게 엄선된 대표작들이다."
  }
},
{
  "name": "#보다",
  "img": "src/asset/img/Cheongju/img2.png",
  "contents": {
    "fullname": "#보다",
    "date": "2019.05.06 ~ 2019.05.15",
    "author": "김범, 세자르 발다치니 외 4인",
    "numOfWorks": "9점",
    "price": "무료",
    "host": "국립현대미술관",
    "content": "‘보다’는 무엇을 보는 행동 말고도 상황에 따라 다양한 의미로 해석됩니다. 우리 주변에서 쉽게 만날 수 있는 여러가지의 사물이나 현상 역시 작가의 생각과 의도에 따라 다양한 의미로 우리에게 다가옵니다. 이것이 우리가 함께 살펴보고, 되어 보고, 해 보고, 더 보아야 하는 이유입니다. 국립현대미술관 개관 50주년 기념 특별 전시 <#보다>는 공간별 작품을 감상하고 활동에 참여하면서 작품을 만나는 즐거움과 새로운 생각을 나누는 경험을 제공합니다. "
  }
},
],
];

let cheongjuRecommend = [{
    "name": "별헤는날",
    "img": "src/asset/img/Cheongju/img1.png",
    "contents": {
        "fullname": "별 헤는 날: 나와 당신의 이야기",
        "date": "2019.05.06 ~ 2019.05.12",
        "author": "김을, 정연두 외 13인",
        "numOfWorks": "23점",
        "price": "무료",
        "host": "국립현대미술관",
        "content": "이 전시는 회화, 사진, 조각, 영상 설치 등 다양한 매체를 통해 작은 일상의 이야기에 주목하고, 그 속에 감춰진 보석같이 반짝이는 소중한 순간을 드러내는 15작가의 작품 23점으로 구성되어있다. 전시 출품작들은 국립현대미술관이 소장하고 있는 8,100여점의 한국현대미술 소장품 중에서 주제에 맞게 엄선된 대표작들이다."
    }
  },
  {
      "name": "#보다",
      "img": "src/asset/img/Cheongju/img2.png",
      "contents": {
          "fullname": "#보다",
          "date": "2019.05.06 ~ 2019.05.15",
          "author": "김범, 세자르 발다치니 외 4인",
          "numOfWorks": "9점",
          "price": "무료",
          "host": "국립현대미술관",
          "content": "‘보다’는 무엇을 보는 행동 말고도 상황에 따라 다양한 의미로 해석됩니다. 우리 주변에서 쉽게 만날 수 있는 여러가지의 사물이나 현상 역시 작가의 생각과 의도에 따라 다양한 의미로 우리에게 다가옵니다. 이것이 우리가 함께 살펴보고, 되어 보고, 해 보고, 더 보아야 하는 이유입니다. 국립현대미술관 개관 50주년 기념 특별 전시 <#보다>는 공간별 작품을 감상하고 활동에 참여하면서 작품을 만나는 즐거움과 새로운 생각을 나누는 경험을 제공합니다. "
      }
  },
  {
      "name": "김중업",
      "img": "src/asset/img/Cheongju/img3.png",
      "contents": {
          "fullname": "김중업 다이얼로그",
          "date": "2019.05.13 ~ 2019.05.22",
          "author": "김중업",
          "numOfWorks": "도서, 드로잉, 사진, 필름 등 3000여점",
          "price": "2,000원",
          "host": "국립현대미술관, 김중업건축박물관",
          "content": "《김중업 다이얼로그》전은 한국 현대 건축의 신화적 인물인 건축가 김중업을 조망한다. 하지만 이 전시는 그동안 김중업에 관한 피상적인 진단과 신화화된 측면과는 거리를 두고, 예술과 건축의 관계를 매개로 그동안 논의되지 않았던 다양한 맥락 속에서 작가와 그가 남긴 유산을 살펴보는 전시다. 김중업의 타계 30주기를 기념하기 위해 마련된 이 전시는 한국 현대 건축 전시를 꾸준히 기획해온 국립현대미술관이 김중업건축박물관과 공동으로 준비했다. 건축가 김중업의 생애 전반을 조망하는 첫 대규모 전시로서, 김중업건축박물관의 소장품과 국립현대미술관의 아카이브, 그리고 건물주로부터 대여한 자료들과 사진 및 영상 신작으로 구성했다. "
      }
  }
];


let cheongjuData2 = [
  [{
    "name": "#보다",
    "img": "src/asset/img/Cheongju/img2.png",
    "contents": {
      "fullname": "#보다",
      "date": "2019.05.06 ~ 2019.05.15",
      "author": "김범, 세자르 발다치니 외 4인",
      "numOfWorks": "9점",
      "price": "무료",
      "host": "국립현대미술관",
      "content": "‘보다’는 무엇을 보는 행동 말고도 상황에 따라 다양한 의미로 해석됩니다. 우리 주변에서 쉽게 만날 수 있는 여러가지의 사물이나 현상 역시 작가의 생각과 의도에 따라 다양한 의미로 우리에게 다가옵니다. 이것이 우리가 함께 살펴보고, 되어 보고, 해 보고, 더 보아야 하는 이유입니다. 국립현대미술관 개관 50주년 기념 특별 전시 <#보다>는 공간별 작품을 감상하고 활동에 참여하면서 작품을 만나는 즐거움과 새로운 생각을 나누는 경험을 제공합니다. "
    }
  },
    {
      "name": "김중업",
      "img": "src/asset/img/Cheongju/img3.png",
      "contents": {
        "fullname": "김중업 다이얼로그",
        "date": "2019.05.13 ~ 2019.05.22",
        "author": "김중업",
        "numOfWorks": "도서, 드로잉, 사진, 필름 등 3000여점",
        "price": "2,000원",
        "host": "국립현대미술관, 김중업건축박물관",
        "content": "《김중업 다이얼로그》전은 한국 현대 건축의 신화적 인물인 건축가 김중업을 조망한다. 하지만 이 전시는 그동안 김중업에 관한 피상적인 진단과 신화화된 측면과는 거리를 두고, 예술과 건축의 관계를 매개로 그동안 논의되지 않았던 다양한 맥락 속에서 작가와 그가 남긴 유산을 살펴보는 전시다. 김중업의 타계 30주기를 기념하기 위해 마련된 이 전시는 한국 현대 건축 전시를 꾸준히 기획해온 국립현대미술관이 김중업건축박물관과 공동으로 준비했다. 건축가 김중업의 생애 전반을 조망하는 첫 대규모 전시로서, 김중업건축박물관의 소장품과 국립현대미술관의 아카이브, 그리고 건물주로부터 대여한 자료들과 사진 및 영상 신작으로 구성했다. "
      }
    },
  ],
  [{
    "name": "#보다",
    "img": "src/asset/img/Cheongju/img2.png",
    "contents": {
      "fullname": "#보다",
      "date": "2019.05.06 ~ 2019.05.15",
      "author": "김범, 세자르 발다치니 외 4인",
      "numOfWorks": "9점",
      "price": "무료",
      "host": "국립현대미술관",
      "content": "‘보다’는 무엇을 보는 행동 말고도 상황에 따라 다양한 의미로 해석됩니다. 우리 주변에서 쉽게 만날 수 있는 여러가지의 사물이나 현상 역시 작가의 생각과 의도에 따라 다양한 의미로 우리에게 다가옵니다. 이것이 우리가 함께 살펴보고, 되어 보고, 해 보고, 더 보아야 하는 이유입니다. 국립현대미술관 개관 50주년 기념 특별 전시 <#보다>는 공간별 작품을 감상하고 활동에 참여하면서 작품을 만나는 즐거움과 새로운 생각을 나누는 경험을 제공합니다. "
    }
  },
    {
      "name": "김중업",
      "img": "src/asset/img/Cheongju/img3.png",
      "contents": {
        "fullname": "김중업 다이얼로그",
        "date": "2019.05.13 ~ 2019.05.22",
        "author": "김중업",
        "numOfWorks": "도서, 드로잉, 사진, 필름 등 3000여점",
        "price": "2,000원",
        "host": "국립현대미술관, 김중업건축박물관",
        "content": "《김중업 다이얼로그》전은 한국 현대 건축의 신화적 인물인 건축가 김중업을 조망한다. 하지만 이 전시는 그동안 김중업에 관한 피상적인 진단과 신화화된 측면과는 거리를 두고, 예술과 건축의 관계를 매개로 그동안 논의되지 않았던 다양한 맥락 속에서 작가와 그가 남긴 유산을 살펴보는 전시다. 김중업의 타계 30주기를 기념하기 위해 마련된 이 전시는 한국 현대 건축 전시를 꾸준히 기획해온 국립현대미술관이 김중업건축박물관과 공동으로 준비했다. 건축가 김중업의 생애 전반을 조망하는 첫 대규모 전시로서, 김중업건축박물관의 소장품과 국립현대미술관의 아카이브, 그리고 건물주로부터 대여한 자료들과 사진 및 영상 신작으로 구성했다. "
      }
    },
  ],
  [{
    "name": "#보다",
    "img": "src/asset/img/Cheongju/img2.png",
    "contents": {
      "fullname": "#보다",
      "date": "2019.05.06 ~ 2019.05.15",
      "author": "김범, 세자르 발다치니 외 4인",
      "numOfWorks": "9점",
      "price": "무료",
      "host": "국립현대미술관",
      "content": "‘보다’는 무엇을 보는 행동 말고도 상황에 따라 다양한 의미로 해석됩니다. 우리 주변에서 쉽게 만날 수 있는 여러가지의 사물이나 현상 역시 작가의 생각과 의도에 따라 다양한 의미로 우리에게 다가옵니다. 이것이 우리가 함께 살펴보고, 되어 보고, 해 보고, 더 보아야 하는 이유입니다. 국립현대미술관 개관 50주년 기념 특별 전시 <#보다>는 공간별 작품을 감상하고 활동에 참여하면서 작품을 만나는 즐거움과 새로운 생각을 나누는 경험을 제공합니다. "
    }
   },
    {
      "name": "김중업",
      "img": "src/asset/img/Cheongju/img3.png",
      "contents": {
        "fullname": "김중업 다이얼로그",
        "date": "2019.05.13 ~ 2019.05.22",
        "author": "김중업",
        "numOfWorks": "도서, 드로잉, 사진, 필름 등 3000여점",
        "price": "2,000원",
        "host": "국립현대미술관, 김중업건축박물관",
        "content": "《김중업 다이얼로그》전은 한국 현대 건축의 신화적 인물인 건축가 김중업을 조망한다. 하지만 이 전시는 그동안 김중업에 관한 피상적인 진단과 신화화된 측면과는 거리를 두고, 예술과 건축의 관계를 매개로 그동안 논의되지 않았던 다양한 맥락 속에서 작가와 그가 남긴 유산을 살펴보는 전시다. 김중업의 타계 30주기를 기념하기 위해 마련된 이 전시는 한국 현대 건축 전시를 꾸준히 기획해온 국립현대미술관이 김중업건축박물관과 공동으로 준비했다. 건축가 김중업의 생애 전반을 조망하는 첫 대규모 전시로서, 김중업건축박물관의 소장품과 국립현대미술관의 아카이브, 그리고 건물주로부터 대여한 자료들과 사진 및 영상 신작으로 구성했다. "
      }
    },
  ],
[{
  "name": "김중업",
  "img": "src/asset/img/Cheongju/img3.png",
  "contents": {
    "fullname": "김중업 다이얼로그",
    "date": "2019.05.13 ~ 2019.05.22",
    "author": "김중업",
    "numOfWorks": "도서, 드로잉, 사진, 필름 등 3000여점",
    "price": "2,000원",
    "host": "국립현대미술관, 김중업건축박물관",
    "content": "《김중업 다이얼로그》전은 한국 현대 건축의 신화적 인물인 건축가 김중업을 조망한다. 하지만 이 전시는 그동안 김중업에 관한 피상적인 진단과 신화화된 측면과는 거리를 두고, 예술과 건축의 관계를 매개로 그동안 논의되지 않았던 다양한 맥락 속에서 작가와 그가 남긴 유산을 살펴보는 전시다. 김중업의 타계 30주기를 기념하기 위해 마련된 이 전시는 한국 현대 건축 전시를 꾸준히 기획해온 국립현대미술관이 김중업건축박물관과 공동으로 준비했다. 건축가 김중업의 생애 전반을 조망하는 첫 대규모 전시로서, 김중업건축박물관의 소장품과 국립현대미술관의 아카이브, 그리고 건물주로부터 대여한 자료들과 사진 및 영상 신작으로 구성했다. "
  }
},
{
  "name": "약속된미래",
  "img": "src/asset/img/Cheongju/img4.png",
  "contents": {
    "fullname": "약속된 미래",
    "date": "2019.05.16 ~ 2019.06.02",
    "author": "박선민 외 5인",
    "numOfWorks": "사진, 영상, 설치 등 20여점",
    "price": "무료",
    "host": "국립현대미술관",
    "content": "‘약속된 미래’전은 2019년도 창동레지던시 17기로 입주한 4개국 6명의 작가를 소개하고, 입주기간 동안 제작한 신작을 선보이기 위해 기획된 전시다. 마침표가 아닌 과정으로써 레지던시에 머무는 이들은 기존의 언어를 발전시켜 미래의 무언가를 약속하는 증표를 만들게 된다. 거대한 태피스트리처럼 짜인 미래와 연결된 지금 이 순간, 작가들은 각자의 방식으로 끊임없이 약속하며 미래를 그려나간다. "
  }
},
],
[{
  "name": "김중업",
  "img": "src/asset/img/Cheongju/img3.png",
  "contents": {
    "fullname": "김중업 다이얼로그",
    "date": "2019.05.13 ~ 2019.05.22",
    "author": "김중업",
    "numOfWorks": "도서, 드로잉, 사진, 필름 등 3000여점",
    "price": "2,000원",
    "host": "국립현대미술관, 김중업건축박물관",
    "content": "《김중업 다이얼로그》전은 한국 현대 건축의 신화적 인물인 건축가 김중업을 조망한다. 하지만 이 전시는 그동안 김중업에 관한 피상적인 진단과 신화화된 측면과는 거리를 두고, 예술과 건축의 관계를 매개로 그동안 논의되지 않았던 다양한 맥락 속에서 작가와 그가 남긴 유산을 살펴보는 전시다. 김중업의 타계 30주기를 기념하기 위해 마련된 이 전시는 한국 현대 건축 전시를 꾸준히 기획해온 국립현대미술관이 김중업건축박물관과 공동으로 준비했다. 건축가 김중업의 생애 전반을 조망하는 첫 대규모 전시로서, 김중업건축박물관의 소장품과 국립현대미술관의 아카이브, 그리고 건물주로부터 대여한 자료들과 사진 및 영상 신작으로 구성했다. "
  }
},
{
  "name": "약속된미래",
  "img": "src/asset/img/Cheongju/img4.png",
  "contents": {
    "fullname": "약속된 미래",
    "date": "2019.05.16 ~ 2019.06.02",
    "author": "박선민 외 5인",
    "numOfWorks": "사진, 영상, 설치 등 20여점",
    "price": "무료",
    "host": "국립현대미술관",
    "content": "‘약속된 미래’전은 2019년도 창동레지던시 17기로 입주한 4개국 6명의 작가를 소개하고, 입주기간 동안 제작한 신작을 선보이기 위해 기획된 전시다. 마침표가 아닌 과정으로써 레지던시에 머무는 이들은 기존의 언어를 발전시켜 미래의 무언가를 약속하는 증표를 만들게 된다. 거대한 태피스트리처럼 짜인 미래와 연결된 지금 이 순간, 작가들은 각자의 방식으로 끊임없이 약속하며 미래를 그려나간다. "
  }
},
],
[{
  "name": "김중업",
  "img": "src/asset/img/Cheongju/img3.png",
  "contents": {
    "fullname": "김중업 다이얼로그",
    "date": "2019.05.13 ~ 2019.05.22",
    "author": "김중업",
    "numOfWorks": "도서, 드로잉, 사진, 필름 등 3000여점",
    "price": "2,000원",
    "host": "국립현대미술관, 김중업건축박물관",
    "content": "《김중업 다이얼로그》전은 한국 현대 건축의 신화적 인물인 건축가 김중업을 조망한다. 하지만 이 전시는 그동안 김중업에 관한 피상적인 진단과 신화화된 측면과는 거리를 두고, 예술과 건축의 관계를 매개로 그동안 논의되지 않았던 다양한 맥락 속에서 작가와 그가 남긴 유산을 살펴보는 전시다. 김중업의 타계 30주기를 기념하기 위해 마련된 이 전시는 한국 현대 건축 전시를 꾸준히 기획해온 국립현대미술관이 김중업건축박물관과 공동으로 준비했다. 건축가 김중업의 생애 전반을 조망하는 첫 대규모 전시로서, 김중업건축박물관의 소장품과 국립현대미술관의 아카이브, 그리고 건물주로부터 대여한 자료들과 사진 및 영상 신작으로 구성했다. "
  }
},
{
  "name": "약속된미래",
  "img": "src/asset/img/Cheongju/img4.png",
  "contents": {
    "fullname": "약속된 미래",
    "date": "2019.05.16 ~ 2019.06.02",
    "author": "박선민 외 5인",
    "numOfWorks": "사진, 영상, 설치 등 20여점",
    "price": "무료",
    "host": "국립현대미술관",
    "content": "‘약속된 미래’전은 2019년도 창동레지던시 17기로 입주한 4개국 6명의 작가를 소개하고, 입주기간 동안 제작한 신작을 선보이기 위해 기획된 전시다. 마침표가 아닌 과정으로써 레지던시에 머무는 이들은 기존의 언어를 발전시켜 미래의 무언가를 약속하는 증표를 만들게 된다. 거대한 태피스트리처럼 짜인 미래와 연결된 지금 이 순간, 작가들은 각자의 방식으로 끊임없이 약속하며 미래를 그려나간다. "
  }
},
],
[{
  "name": "김중업",
  "img": "src/asset/img/Cheongju/img3.png",
  "contents": {
    "fullname": "김중업 다이얼로그",
    "date": "2019.05.13 ~ 2019.05.22",
    "author": "김중업",
    "numOfWorks": "도서, 드로잉, 사진, 필름 등 3000여점",
    "price": "2,000원",
    "host": "국립현대미술관, 김중업건축박물관",
    "content": "《김중업 다이얼로그》전은 한국 현대 건축의 신화적 인물인 건축가 김중업을 조망한다. 하지만 이 전시는 그동안 김중업에 관한 피상적인 진단과 신화화된 측면과는 거리를 두고, 예술과 건축의 관계를 매개로 그동안 논의되지 않았던 다양한 맥락 속에서 작가와 그가 남긴 유산을 살펴보는 전시다. 김중업의 타계 30주기를 기념하기 위해 마련된 이 전시는 한국 현대 건축 전시를 꾸준히 기획해온 국립현대미술관이 김중업건축박물관과 공동으로 준비했다. 건축가 김중업의 생애 전반을 조망하는 첫 대규모 전시로서, 김중업건축박물관의 소장품과 국립현대미술관의 아카이브, 그리고 건물주로부터 대여한 자료들과 사진 및 영상 신작으로 구성했다. "
  }
},
{
  "name": "약속된미래",
  "img": "src/asset/img/Cheongju/img4.png",
  "contents": {
    "fullname": "약속된 미래",
    "date": "2019.05.16 ~ 2019.06.02",
    "author": "박선민 외 5인",
    "numOfWorks": "사진, 영상, 설치 등 20여점",
    "price": "무료",
    "host": "국립현대미술관",
    "content": "‘약속된 미래’전은 2019년도 창동레지던시 17기로 입주한 4개국 6명의 작가를 소개하고, 입주기간 동안 제작한 신작을 선보이기 위해 기획된 전시다. 마침표가 아닌 과정으로써 레지던시에 머무는 이들은 기존의 언어를 발전시켜 미래의 무언가를 약속하는 증표를 만들게 된다. 거대한 태피스트리처럼 짜인 미래와 연결된 지금 이 순간, 작가들은 각자의 방식으로 끊임없이 약속하며 미래를 그려나간다. "
  }
},
],
];

let cheongjuRecommend2 = [{
    "name": "청주불온",
    "img": "src/asset/img/Cheongju/img1.png",
    "contents": {
      "fullname": "풀네임",
      "date": "2019.09.10",
      "author": "누구누구",
      "numOfWorks": "10개",
      "price": "35,000",
      "host": "누구누구주최",
      "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
    }
  },
  {
    "name": "청주대안",
    "img": "src/asset/img/Cheongju/img2.png",
    "contents": {
      "fullname": "풀네임",
      "date": "2019.09.10",
      "author": "누구누구",
      "numOfWorks": "10개",
      "price": "35,000",
      "host": "누구누구주최",
      "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
    }
  },
  {
    "name": "청주신소장품",
    "img": "src/asset/img/Cheongju/img3.png",
    "contents": {
      "fullname": "풀네임",
      "date": "2019.09.10",
      "author": "누구누구",
      "numOfWorks": "10개",
      "price": "35,000",
      "host": "누구누구주최",
      "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
    }
  }
];


let cheongjuData3 = [
[{
  "name": "김중업",
  "img": "src/asset/img/Cheongju/img3.png",
  "contents": {
    "fullname": "김중업 다이얼로그",
    "date": "2019.05.13 ~ 2019.05.22",
    "author": "김중업",
    "numOfWorks": "도서, 드로잉, 사진, 필름 등 3000여점",
    "price": "2,000원",
    "host": "국립현대미술관, 김중업건축박물관",
    "content": "《김중업 다이얼로그》전은 한국 현대 건축의 신화적 인물인 건축가 김중업을 조망한다. 하지만 이 전시는 그동안 김중업에 관한 피상적인 진단과 신화화된 측면과는 거리를 두고, 예술과 건축의 관계를 매개로 그동안 논의되지 않았던 다양한 맥락 속에서 작가와 그가 남긴 유산을 살펴보는 전시다. 김중업의 타계 30주기를 기념하기 위해 마련된 이 전시는 한국 현대 건축 전시를 꾸준히 기획해온 국립현대미술관이 김중업건축박물관과 공동으로 준비했다. 건축가 김중업의 생애 전반을 조망하는 첫 대규모 전시로서, 김중업건축박물관의 소장품과 국립현대미술관의 아카이브, 그리고 건물주로부터 대여한 자료들과 사진 및 영상 신작으로 구성했다. "
  }
},
{
  "name": "약속된미래",
  "img": "src/asset/img/Cheongju/img4.png",
  "contents": {
    "fullname": "약속된 미래",
    "date": "2019.05.16 ~ 2019.06.02",
    "author": "박선민 외 5인",
    "numOfWorks": "사진, 영상, 설치 등 20여점",
    "price": "무료",
    "host": "국립현대미술관",
    "content": "‘약속된 미래’전은 2019년도 창동레지던시 17기로 입주한 4개국 6명의 작가를 소개하고, 입주기간 동안 제작한 신작을 선보이기 위해 기획된 전시다. 마침표가 아닌 과정으로써 레지던시에 머무는 이들은 기존의 언어를 발전시켜 미래의 무언가를 약속하는 증표를 만들게 된다. 거대한 태피스트리처럼 짜인 미래와 연결된 지금 이 순간, 작가들은 각자의 방식으로 끊임없이 약속하며 미래를 그려나간다. "
  }
},
],
[{
  "name": "김중업",
  "img": "src/asset/img/Cheongju/img3.png",
  "contents": {
    "fullname": "김중업 다이얼로그",
    "date": "2019.05.13 ~ 2019.05.22",
    "author": "김중업",
    "numOfWorks": "도서, 드로잉, 사진, 필름 등 3000여점",
    "price": "2,000원",
    "host": "국립현대미술관, 김중업건축박물관",
    "content": "《김중업 다이얼로그》전은 한국 현대 건축의 신화적 인물인 건축가 김중업을 조망한다. 하지만 이 전시는 그동안 김중업에 관한 피상적인 진단과 신화화된 측면과는 거리를 두고, 예술과 건축의 관계를 매개로 그동안 논의되지 않았던 다양한 맥락 속에서 작가와 그가 남긴 유산을 살펴보는 전시다. 김중업의 타계 30주기를 기념하기 위해 마련된 이 전시는 한국 현대 건축 전시를 꾸준히 기획해온 국립현대미술관이 김중업건축박물관과 공동으로 준비했다. 건축가 김중업의 생애 전반을 조망하는 첫 대규모 전시로서, 김중업건축박물관의 소장품과 국립현대미술관의 아카이브, 그리고 건물주로부터 대여한 자료들과 사진 및 영상 신작으로 구성했다. "
  }
},
{
  "name": "약속된미래",
  "img": "src/asset/img/Cheongju/img4.png",
  "contents": {
    "fullname": "약속된 미래",
    "date": "2019.05.16 ~ 2019.06.02",
    "author": "박선민 외 5인",
    "numOfWorks": "사진, 영상, 설치 등 20여점",
    "price": "무료",
    "host": "국립현대미술관",
    "content": "‘약속된 미래’전은 2019년도 창동레지던시 17기로 입주한 4개국 6명의 작가를 소개하고, 입주기간 동안 제작한 신작을 선보이기 위해 기획된 전시다. 마침표가 아닌 과정으로써 레지던시에 머무는 이들은 기존의 언어를 발전시켜 미래의 무언가를 약속하는 증표를 만들게 된다. 거대한 태피스트리처럼 짜인 미래와 연결된 지금 이 순간, 작가들은 각자의 방식으로 끊임없이 약속하며 미래를 그려나간다. "
  }
},
],
[{
  "name": "김중업",
  "img": "src/asset/img/Cheongju/img3.png",
  "contents": {
    "fullname": "김중업 다이얼로그",
    "date": "2019.05.13 ~ 2019.05.22",
    "author": "김중업",
    "numOfWorks": "도서, 드로잉, 사진, 필름 등 3000여점",
    "price": "2,000원",
    "host": "국립현대미술관, 김중업건축박물관",
    "content": "《김중업 다이얼로그》전은 한국 현대 건축의 신화적 인물인 건축가 김중업을 조망한다. 하지만 이 전시는 그동안 김중업에 관한 피상적인 진단과 신화화된 측면과는 거리를 두고, 예술과 건축의 관계를 매개로 그동안 논의되지 않았던 다양한 맥락 속에서 작가와 그가 남긴 유산을 살펴보는 전시다. 김중업의 타계 30주기를 기념하기 위해 마련된 이 전시는 한국 현대 건축 전시를 꾸준히 기획해온 국립현대미술관이 김중업건축박물관과 공동으로 준비했다. 건축가 김중업의 생애 전반을 조망하는 첫 대규모 전시로서, 김중업건축박물관의 소장품과 국립현대미술관의 아카이브, 그리고 건물주로부터 대여한 자료들과 사진 및 영상 신작으로 구성했다. "
  }
},
{
  "name": "약속된미래",
  "img": "src/asset/img/Cheongju/img4.png",
  "contents": {
    "fullname": "약속된 미래",
    "date": "2019.05.16 ~ 2019.06.02",
    "author": "박선민 외 5인",
    "numOfWorks": "사진, 영상, 설치 등 20여점",
    "price": "무료",
    "host": "국립현대미술관",
    "content": "‘약속된 미래’전은 2019년도 창동레지던시 17기로 입주한 4개국 6명의 작가를 소개하고, 입주기간 동안 제작한 신작을 선보이기 위해 기획된 전시다. 마침표가 아닌 과정으로써 레지던시에 머무는 이들은 기존의 언어를 발전시켜 미래의 무언가를 약속하는 증표를 만들게 된다. 거대한 태피스트리처럼 짜인 미래와 연결된 지금 이 순간, 작가들은 각자의 방식으로 끊임없이 약속하며 미래를 그려나간다. "
  }
},
],
[{
  "name": "아시아미술",
  "img": "src/asset/img/Cheongju/img5.png",
  "contents": {
    "fullname": "세상에 눈뜨다 : 아시아 미술과 사회 1960s-1990s",
    "date": "2019.05.23 ~ 2019.06.02",
    "author": "100여명",
    "numOfWorks": "170여점",
    "price": "2,000원",
    "host": "국립현대미술관, 국립싱가포르미술관",
    "content": "이번 전시는 1960년대부터 1990년대까지 30여 년 동안 아시아 각국에서 진행된 사회·정치·문화적인 변화와 이에 따른 아시아 현대미술의 다양한 면모를 조명하는 국제 기획전이다. 국립현대미술관, 도쿄국립근대미술관, 싱가포르국립미술관, 일본국제교류기금아시아센터의 공동 주최로, 4년 여간의 조사 연구를 바탕으로 기획되었다. 한국, 일본, 중국, 타이완, 홍콩, 싱가포르, 말레이시아, 인도네시아, 필리핀, 태국, 인도, 미얀마, 캄보디아 등 아시아 13개국의 주요 작가 100여명의 작품 170여점이 선보이는 이번 전시는 국가적 경계를 넘어선 비교 문화적 관점에서 아시아 아방가르드 미술의 역동적인 면모를 소개한다. "
  }
},
{
  "name": "약속된미래",
  "img": "src/asset/img/Cheongju/img4.png",
  "contents": {
    "fullname": "약속된 미래",
    "date": "2019.05.16 ~ 2019.06.02",
    "author": "박선민 외 5인",
    "numOfWorks": "사진, 영상, 설치 등 20여점",
    "price": "무료",
    "host": "국립현대미술관",
    "content": "‘약속된 미래’전은 2019년도 창동레지던시 17기로 입주한 4개국 6명의 작가를 소개하고, 입주기간 동안 제작한 신작을 선보이기 위해 기획된 전시다. 마침표가 아닌 과정으로써 레지던시에 머무는 이들은 기존의 언어를 발전시켜 미래의 무언가를 약속하는 증표를 만들게 된다. 거대한 태피스트리처럼 짜인 미래와 연결된 지금 이 순간, 작가들은 각자의 방식으로 끊임없이 약속하며 미래를 그려나간다. "
  }
},
],
[{
  "name": "아시아미술",
  "img": "src/asset/img/Cheongju/img5.png",
  "contents": {
    "fullname": "세상에 눈뜨다 : 아시아 미술과 사회 1960s-1990s",
    "date": "2019.05.23 ~ 2019.06.02",
    "author": "100여명",
    "numOfWorks": "170여점",
    "price": "2,000원",
    "host": "국립현대미술관, 국립싱가포르미술관",
    "content": "이번 전시는 1960년대부터 1990년대까지 30여 년 동안 아시아 각국에서 진행된 사회·정치·문화적인 변화와 이에 따른 아시아 현대미술의 다양한 면모를 조명하는 국제 기획전이다. 국립현대미술관, 도쿄국립근대미술관, 싱가포르국립미술관, 일본국제교류기금아시아센터의 공동 주최로, 4년 여간의 조사 연구를 바탕으로 기획되었다. 한국, 일본, 중국, 타이완, 홍콩, 싱가포르, 말레이시아, 인도네시아, 필리핀, 태국, 인도, 미얀마, 캄보디아 등 아시아 13개국의 주요 작가 100여명의 작품 170여점이 선보이는 이번 전시는 국가적 경계를 넘어선 비교 문화적 관점에서 아시아 아방가르드 미술의 역동적인 면모를 소개한다. "
  }
},
{
  "name": "약속된미래",
  "img": "src/asset/img/Cheongju/img4.png",
  "contents": {
    "fullname": "약속된 미래",
    "date": "2019.05.16 ~ 2019.06.02",
    "author": "박선민 외 5인",
    "numOfWorks": "사진, 영상, 설치 등 20여점",
    "price": "무료",
    "host": "국립현대미술관",
    "content": "‘약속된 미래’전은 2019년도 창동레지던시 17기로 입주한 4개국 6명의 작가를 소개하고, 입주기간 동안 제작한 신작을 선보이기 위해 기획된 전시다. 마침표가 아닌 과정으로써 레지던시에 머무는 이들은 기존의 언어를 발전시켜 미래의 무언가를 약속하는 증표를 만들게 된다. 거대한 태피스트리처럼 짜인 미래와 연결된 지금 이 순간, 작가들은 각자의 방식으로 끊임없이 약속하며 미래를 그려나간다. "
  }
},
],
[{
  "name": "아시아미술",
  "img": "src/asset/img/Cheongju/img5.png",
  "contents": {
    "fullname": "세상에 눈뜨다 : 아시아 미술과 사회 1960s-1990s",
    "date": "2019.05.23 ~ 2019.06.02",
    "author": "100여명",
    "numOfWorks": "170여점",
    "price": "2,000원",
    "host": "국립현대미술관, 국립싱가포르미술관",
    "content": "이번 전시는 1960년대부터 1990년대까지 30여 년 동안 아시아 각국에서 진행된 사회·정치·문화적인 변화와 이에 따른 아시아 현대미술의 다양한 면모를 조명하는 국제 기획전이다. 국립현대미술관, 도쿄국립근대미술관, 싱가포르국립미술관, 일본국제교류기금아시아센터의 공동 주최로, 4년 여간의 조사 연구를 바탕으로 기획되었다. 한국, 일본, 중국, 타이완, 홍콩, 싱가포르, 말레이시아, 인도네시아, 필리핀, 태국, 인도, 미얀마, 캄보디아 등 아시아 13개국의 주요 작가 100여명의 작품 170여점이 선보이는 이번 전시는 국가적 경계를 넘어선 비교 문화적 관점에서 아시아 아방가르드 미술의 역동적인 면모를 소개한다. "
  }
},
{
  "name": "약속된미래",
  "img": "src/asset/img/Cheongju/img4.png",
  "contents": {
    "fullname": "약속된 미래",
    "date": "2019.05.16 ~ 2019.06.02",
    "author": "박선민 외 5인",
    "numOfWorks": "사진, 영상, 설치 등 20여점",
    "price": "무료",
    "host": "국립현대미술관",
    "content": "‘약속된 미래’전은 2019년도 창동레지던시 17기로 입주한 4개국 6명의 작가를 소개하고, 입주기간 동안 제작한 신작을 선보이기 위해 기획된 전시다. 마침표가 아닌 과정으로써 레지던시에 머무는 이들은 기존의 언어를 발전시켜 미래의 무언가를 약속하는 증표를 만들게 된다. 거대한 태피스트리처럼 짜인 미래와 연결된 지금 이 순간, 작가들은 각자의 방식으로 끊임없이 약속하며 미래를 그려나간다. "
  }
},
],
[{
  "name": "아시아미술",
  "img": "src/asset/img/Cheongju/img5.png",
  "contents": {
    "fullname": "세상에 눈뜨다 : 아시아 미술과 사회 1960s-1990s",
    "date": "2019.05.23 ~ 2019.06.02",
    "author": "100여명",
    "numOfWorks": "170여점",
    "price": "2,000원",
    "host": "국립현대미술관, 국립싱가포르미술관",
    "content": "이번 전시는 1960년대부터 1990년대까지 30여 년 동안 아시아 각국에서 진행된 사회·정치·문화적인 변화와 이에 따른 아시아 현대미술의 다양한 면모를 조명하는 국제 기획전이다. 국립현대미술관, 도쿄국립근대미술관, 싱가포르국립미술관, 일본국제교류기금아시아센터의 공동 주최로, 4년 여간의 조사 연구를 바탕으로 기획되었다. 한국, 일본, 중국, 타이완, 홍콩, 싱가포르, 말레이시아, 인도네시아, 필리핀, 태국, 인도, 미얀마, 캄보디아 등 아시아 13개국의 주요 작가 100여명의 작품 170여점이 선보이는 이번 전시는 국가적 경계를 넘어선 비교 문화적 관점에서 아시아 아방가르드 미술의 역동적인 면모를 소개한다. "
  }
},
{
  "name": "약속된미래",
  "img": "src/asset/img/Cheongju/img4.png",
  "contents": {
    "fullname": "약속된 미래",
    "date": "2019.05.16 ~ 2019.06.02",
    "author": "박선민 외 5인",
    "numOfWorks": "사진, 영상, 설치 등 20여점",
    "price": "무료",
    "host": "국립현대미술관",
    "content": "‘약속된 미래’전은 2019년도 창동레지던시 17기로 입주한 4개국 6명의 작가를 소개하고, 입주기간 동안 제작한 신작을 선보이기 위해 기획된 전시다. 마침표가 아닌 과정으로써 레지던시에 머무는 이들은 기존의 언어를 발전시켜 미래의 무언가를 약속하는 증표를 만들게 된다. 거대한 태피스트리처럼 짜인 미래와 연결된 지금 이 순간, 작가들은 각자의 방식으로 끊임없이 약속하며 미래를 그려나간다. "
  }
},
],

];

let cheongjuRecommend3 = [{
    "name": "청주불온",
    "img": "src/asset/img/Cheongju/img1.png",
    "contents": {
      "fullname": "풀네임",
      "date": "2019.09.10",
      "author": "누구누구",
      "numOfWorks": "10개",
      "price": "35,000",
      "host": "누구누구주최",
      "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
    }
  },
  {
    "name": "청주대안",
    "img": "src/asset/img/Cheongju/img2.png",
    "contents": {
      "fullname": "풀네임",
      "date": "2019.09.10",
      "author": "누구누구",
      "numOfWorks": "10개",
      "price": "35,000",
      "host": "누구누구주최",
      "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
    }
  },
  {
    "name": "청주신소장품",
    "img": "src/asset/img/Cheongju/img3.png",
    "contents": {
      "fullname": "풀네임",
      "date": "2019.09.10",
      "author": "누구누구",
      "numOfWorks": "10개",
      "price": "35,000",
      "host": "누구누구주최",
      "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
    }
  }
];


let cheongjuData4 = [
[{
  "name": "아시아미술",
  "img": "src/asset/img/Cheongju/img5.png",
  "contents": {
    "fullname": "세상에 눈뜨다 : 아시아 미술과 사회 1960s-1990s",
    "date": "2019.05.23 ~ 2019.06.02",
    "author": "100여명",
    "numOfWorks": "170여점",
    "price": "2,000원",
    "host": "국립현대미술관, 국립싱가포르미술관",
    "content": "이번 전시는 1960년대부터 1990년대까지 30여 년 동안 아시아 각국에서 진행된 사회·정치·문화적인 변화와 이에 따른 아시아 현대미술의 다양한 면모를 조명하는 국제 기획전이다. 국립현대미술관, 도쿄국립근대미술관, 싱가포르국립미술관, 일본국제교류기금아시아센터의 공동 주최로, 4년 여간의 조사 연구를 바탕으로 기획되었다. 한국, 일본, 중국, 타이완, 홍콩, 싱가포르, 말레이시아, 인도네시아, 필리핀, 태국, 인도, 미얀마, 캄보디아 등 아시아 13개국의 주요 작가 100여명의 작품 170여점이 선보이는 이번 전시는 국가적 경계를 넘어선 비교 문화적 관점에서 아시아 아방가르드 미술의 역동적인 면모를 소개한다. "
  }
},
{
  "name": "약속된미래",
  "img": "src/asset/img/Cheongju/img4.png",
  "contents": {
    "fullname": "약속된 미래",
    "date": "2019.05.16 ~ 2019.06.02",
    "author": "박선민 외 5인",
    "numOfWorks": "사진, 영상, 설치 등 20여점",
    "price": "무료",
    "host": "국립현대미술관",
    "content": "‘약속된 미래’전은 2019년도 창동레지던시 17기로 입주한 4개국 6명의 작가를 소개하고, 입주기간 동안 제작한 신작을 선보이기 위해 기획된 전시다. 마침표가 아닌 과정으로써 레지던시에 머무는 이들은 기존의 언어를 발전시켜 미래의 무언가를 약속하는 증표를 만들게 된다. 거대한 태피스트리처럼 짜인 미래와 연결된 지금 이 순간, 작가들은 각자의 방식으로 끊임없이 약속하며 미래를 그려나간다. "
  }
},
],
[{
  "name": "아시아미술",
  "img": "src/asset/img/Cheongju/img5.png",
  "contents": {
    "fullname": "세상에 눈뜨다 : 아시아 미술과 사회 1960s-1990s",
    "date": "2019.05.23 ~ 2019.06.02",
    "author": "100여명",
    "numOfWorks": "170여점",
    "price": "2,000원",
    "host": "국립현대미술관, 국립싱가포르미술관",
    "content": "이번 전시는 1960년대부터 1990년대까지 30여 년 동안 아시아 각국에서 진행된 사회·정치·문화적인 변화와 이에 따른 아시아 현대미술의 다양한 면모를 조명하는 국제 기획전이다. 국립현대미술관, 도쿄국립근대미술관, 싱가포르국립미술관, 일본국제교류기금아시아센터의 공동 주최로, 4년 여간의 조사 연구를 바탕으로 기획되었다. 한국, 일본, 중국, 타이완, 홍콩, 싱가포르, 말레이시아, 인도네시아, 필리핀, 태국, 인도, 미얀마, 캄보디아 등 아시아 13개국의 주요 작가 100여명의 작품 170여점이 선보이는 이번 전시는 국가적 경계를 넘어선 비교 문화적 관점에서 아시아 아방가르드 미술의 역동적인 면모를 소개한다. "
  }
},
{
  "name": "약속된미래",
  "img": "src/asset/img/Cheongju/img4.png",
  "contents": {
    "fullname": "약속된 미래",
    "date": "2019.05.16 ~ 2019.06.02",
    "author": "박선민 외 5인",
    "numOfWorks": "사진, 영상, 설치 등 20여점",
    "price": "무료",
    "host": "국립현대미술관",
    "content": "‘약속된 미래’전은 2019년도 창동레지던시 17기로 입주한 4개국 6명의 작가를 소개하고, 입주기간 동안 제작한 신작을 선보이기 위해 기획된 전시다. 마침표가 아닌 과정으로써 레지던시에 머무는 이들은 기존의 언어를 발전시켜 미래의 무언가를 약속하는 증표를 만들게 된다. 거대한 태피스트리처럼 짜인 미래와 연결된 지금 이 순간, 작가들은 각자의 방식으로 끊임없이 약속하며 미래를 그려나간다. "
  }
},
],
[{
  "name": "아시아미술",
  "img": "src/asset/img/Cheongju/img5.png",
  "contents": {
    "fullname": "세상에 눈뜨다 : 아시아 미술과 사회 1960s-1990s",
    "date": "2019.05.23 ~ 2019.06.02",
    "author": "100여명",
    "numOfWorks": "170여점",
    "price": "2,000원",
    "host": "국립현대미술관, 국립싱가포르미술관",
    "content": "이번 전시는 1960년대부터 1990년대까지 30여 년 동안 아시아 각국에서 진행된 사회·정치·문화적인 변화와 이에 따른 아시아 현대미술의 다양한 면모를 조명하는 국제 기획전이다. 국립현대미술관, 도쿄국립근대미술관, 싱가포르국립미술관, 일본국제교류기금아시아센터의 공동 주최로, 4년 여간의 조사 연구를 바탕으로 기획되었다. 한국, 일본, 중국, 타이완, 홍콩, 싱가포르, 말레이시아, 인도네시아, 필리핀, 태국, 인도, 미얀마, 캄보디아 등 아시아 13개국의 주요 작가 100여명의 작품 170여점이 선보이는 이번 전시는 국가적 경계를 넘어선 비교 문화적 관점에서 아시아 아방가르드 미술의 역동적인 면모를 소개한다. "
  }
},
{
  "name": "약속된미래",
  "img": "src/asset/img/Cheongju/img4.png",
  "contents": {
    "fullname": "약속된 미래",
    "date": "2019.05.16 ~ 2019.06.02",
    "author": "박선민 외 5인",
    "numOfWorks": "사진, 영상, 설치 등 20여점",
    "price": "무료",
    "host": "국립현대미술관",
    "content": "‘약속된 미래’전은 2019년도 창동레지던시 17기로 입주한 4개국 6명의 작가를 소개하고, 입주기간 동안 제작한 신작을 선보이기 위해 기획된 전시다. 마침표가 아닌 과정으로써 레지던시에 머무는 이들은 기존의 언어를 발전시켜 미래의 무언가를 약속하는 증표를 만들게 된다. 거대한 태피스트리처럼 짜인 미래와 연결된 지금 이 순간, 작가들은 각자의 방식으로 끊임없이 약속하며 미래를 그려나간다. "
  }
},
],
[{
  "name": "아시아미술",
  "img": "src/asset/img/Cheongju/img5.png",
  "contents": {
    "fullname": "세상에 눈뜨다 : 아시아 미술과 사회 1960s-1990s",
    "date": "2019.05.23 ~ 2019.06.02",
    "author": "100여명",
    "numOfWorks": "170여점",
    "price": "2,000원",
    "host": "국립현대미술관, 국립싱가포르미술관",
    "content": "이번 전시는 1960년대부터 1990년대까지 30여 년 동안 아시아 각국에서 진행된 사회·정치·문화적인 변화와 이에 따른 아시아 현대미술의 다양한 면모를 조명하는 국제 기획전이다. 국립현대미술관, 도쿄국립근대미술관, 싱가포르국립미술관, 일본국제교류기금아시아센터의 공동 주최로, 4년 여간의 조사 연구를 바탕으로 기획되었다. 한국, 일본, 중국, 타이완, 홍콩, 싱가포르, 말레이시아, 인도네시아, 필리핀, 태국, 인도, 미얀마, 캄보디아 등 아시아 13개국의 주요 작가 100여명의 작품 170여점이 선보이는 이번 전시는 국가적 경계를 넘어선 비교 문화적 관점에서 아시아 아방가르드 미술의 역동적인 면모를 소개한다. "
  }
},
{
  "name": "약속된미래",
  "img": "src/asset/img/Cheongju/img4.png",
  "contents": {
    "fullname": "약속된 미래",
    "date": "2019.05.16 ~ 2019.06.02",
    "author": "박선민 외 5인",
    "numOfWorks": "사진, 영상, 설치 등 20여점",
    "price": "무료",
    "host": "국립현대미술관",
    "content": "‘약속된 미래’전은 2019년도 창동레지던시 17기로 입주한 4개국 6명의 작가를 소개하고, 입주기간 동안 제작한 신작을 선보이기 위해 기획된 전시다. 마침표가 아닌 과정으로써 레지던시에 머무는 이들은 기존의 언어를 발전시켜 미래의 무언가를 약속하는 증표를 만들게 된다. 거대한 태피스트리처럼 짜인 미래와 연결된 지금 이 순간, 작가들은 각자의 방식으로 끊임없이 약속하며 미래를 그려나간다. "
  }
},
],
[{
  "name": "아시아미술",
  "img": "src/asset/img/Cheongju/img5.png",
  "contents": {
    "fullname": "세상에 눈뜨다 : 아시아 미술과 사회 1960s-1990s",
    "date": "2019.05.23 ~ 2019.06.02",
    "author": "100여명",
    "numOfWorks": "170여점",
    "price": "2,000원",
    "host": "국립현대미술관, 국립싱가포르미술관",
    "content": "이번 전시는 1960년대부터 1990년대까지 30여 년 동안 아시아 각국에서 진행된 사회·정치·문화적인 변화와 이에 따른 아시아 현대미술의 다양한 면모를 조명하는 국제 기획전이다. 국립현대미술관, 도쿄국립근대미술관, 싱가포르국립미술관, 일본국제교류기금아시아센터의 공동 주최로, 4년 여간의 조사 연구를 바탕으로 기획되었다. 한국, 일본, 중국, 타이완, 홍콩, 싱가포르, 말레이시아, 인도네시아, 필리핀, 태국, 인도, 미얀마, 캄보디아 등 아시아 13개국의 주요 작가 100여명의 작품 170여점이 선보이는 이번 전시는 국가적 경계를 넘어선 비교 문화적 관점에서 아시아 아방가르드 미술의 역동적인 면모를 소개한다. "
  }
},
{
  "name": "약속된미래",
  "img": "src/asset/img/Cheongju/img4.png",
  "contents": {
    "fullname": "약속된 미래",
    "date": "2019.05.16 ~ 2019.06.02",
    "author": "박선민 외 5인",
    "numOfWorks": "사진, 영상, 설치 등 20여점",
    "price": "무료",
    "host": "국립현대미술관",
    "content": "‘약속된 미래’전은 2019년도 창동레지던시 17기로 입주한 4개국 6명의 작가를 소개하고, 입주기간 동안 제작한 신작을 선보이기 위해 기획된 전시다. 마침표가 아닌 과정으로써 레지던시에 머무는 이들은 기존의 언어를 발전시켜 미래의 무언가를 약속하는 증표를 만들게 된다. 거대한 태피스트리처럼 짜인 미래와 연결된 지금 이 순간, 작가들은 각자의 방식으로 끊임없이 약속하며 미래를 그려나간다. "
  }
},
],
[{
  "name": "아시아미술",
  "img": "src/asset/img/Cheongju/img5.png",
  "contents": {
    "fullname": "세상에 눈뜨다 : 아시아 미술과 사회 1960s-1990s",
    "date": "2019.05.23 ~ 2019.06.02",
    "author": "100여명",
    "numOfWorks": "170여점",
    "price": "2,000원",
    "host": "국립현대미술관, 국립싱가포르미술관",
    "content": "이번 전시는 1960년대부터 1990년대까지 30여 년 동안 아시아 각국에서 진행된 사회·정치·문화적인 변화와 이에 따른 아시아 현대미술의 다양한 면모를 조명하는 국제 기획전이다. 국립현대미술관, 도쿄국립근대미술관, 싱가포르국립미술관, 일본국제교류기금아시아센터의 공동 주최로, 4년 여간의 조사 연구를 바탕으로 기획되었다. 한국, 일본, 중국, 타이완, 홍콩, 싱가포르, 말레이시아, 인도네시아, 필리핀, 태국, 인도, 미얀마, 캄보디아 등 아시아 13개국의 주요 작가 100여명의 작품 170여점이 선보이는 이번 전시는 국가적 경계를 넘어선 비교 문화적 관점에서 아시아 아방가르드 미술의 역동적인 면모를 소개한다. "
  }
},
{
  "name": "약속된미래",
  "img": "src/asset/img/Cheongju/img4.png",
  "contents": {
    "fullname": "약속된 미래",
    "date": "2019.05.16 ~ 2019.06.02",
    "author": "박선민 외 5인",
    "numOfWorks": "사진, 영상, 설치 등 20여점",
    "price": "무료",
    "host": "국립현대미술관",
    "content": "‘약속된 미래’전은 2019년도 창동레지던시 17기로 입주한 4개국 6명의 작가를 소개하고, 입주기간 동안 제작한 신작을 선보이기 위해 기획된 전시다. 마침표가 아닌 과정으로써 레지던시에 머무는 이들은 기존의 언어를 발전시켜 미래의 무언가를 약속하는 증표를 만들게 된다. 거대한 태피스트리처럼 짜인 미래와 연결된 지금 이 순간, 작가들은 각자의 방식으로 끊임없이 약속하며 미래를 그려나간다. "
  }
},
],
[{
  "name": "아시아미술",
  "img": "src/asset/img/Cheongju/img5.png",
  "contents": {
    "fullname": "세상에 눈뜨다 : 아시아 미술과 사회 1960s-1990s",
    "date": "2019.05.23 ~ 2019.06.02",
    "author": "100여명",
    "numOfWorks": "170여점",
    "price": "2,000원",
    "host": "국립현대미술관, 국립싱가포르미술관",
    "content": "이번 전시는 1960년대부터 1990년대까지 30여 년 동안 아시아 각국에서 진행된 사회·정치·문화적인 변화와 이에 따른 아시아 현대미술의 다양한 면모를 조명하는 국제 기획전이다. 국립현대미술관, 도쿄국립근대미술관, 싱가포르국립미술관, 일본국제교류기금아시아센터의 공동 주최로, 4년 여간의 조사 연구를 바탕으로 기획되었다. 한국, 일본, 중국, 타이완, 홍콩, 싱가포르, 말레이시아, 인도네시아, 필리핀, 태국, 인도, 미얀마, 캄보디아 등 아시아 13개국의 주요 작가 100여명의 작품 170여점이 선보이는 이번 전시는 국가적 경계를 넘어선 비교 문화적 관점에서 아시아 아방가르드 미술의 역동적인 면모를 소개한다. "
  }
},
{
  "name": "약속된미래",
  "img": "src/asset/img/Cheongju/img4.png",
  "contents": {
    "fullname": "약속된 미래",
    "date": "2019.05.16 ~ 2019.06.02",
    "author": "박선민 외 5인",
    "numOfWorks": "사진, 영상, 설치 등 20여점",
    "price": "무료",
    "host": "국립현대미술관",
    "content": "‘약속된 미래’전은 2019년도 창동레지던시 17기로 입주한 4개국 6명의 작가를 소개하고, 입주기간 동안 제작한 신작을 선보이기 위해 기획된 전시다. 마침표가 아닌 과정으로써 레지던시에 머무는 이들은 기존의 언어를 발전시켜 미래의 무언가를 약속하는 증표를 만들게 된다. 거대한 태피스트리처럼 짜인 미래와 연결된 지금 이 순간, 작가들은 각자의 방식으로 끊임없이 약속하며 미래를 그려나간다. "
  }
},
],

];

let cheongjuRecommend4 = [{
    "name": "청주불온",
    "img": "src/asset/img/Cheongju/img1.png",
    "contents": {
      "fullname": "풀네임",
      "date": "2019.09.10",
      "author": "누구누구",
      "numOfWorks": "10개",
      "price": "35,000",
      "host": "누구누구주최",
      "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
    }
  },
  {
    "name": "청주대안",
    "img": "src/asset/img/Cheongju/img2.png",
    "contents": {
      "fullname": "풀네임",
      "date": "2019.09.10",
      "author": "누구누구",
      "numOfWorks": "10개",
      "price": "35,000",
      "host": "누구누구주최",
      "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
    }
  },
  {
    "name": "청주신소장품",
    "img": "src/asset/img/Cheongju/img3.png",
    "contents": {
      "fullname": "풀네임",
      "date": "2019.09.10",
      "author": "누구누구",
      "numOfWorks": "10개",
      "price": "35,000",
      "host": "누구누구주최",
      "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
    }
  }
];
