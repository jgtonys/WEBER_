/*
1주일 단위의 데이터
배열(0~6)마다 월요일~일요일까지 항목이 나열
img는 경로 그대로 넣고 파일명만 작성

json 파일 모델
http://www.objgen.com/json/models/Xd6z

예시 파일이라 1주만 만들어 놓았습니다
js 파일을 추가하셔서 만드셔도 되고, 변수를 추가하셔도 됩니다
*/


let seoulData = [
  [{
      "name": "불온한데이터",
      "img": "src/asset/img/Seoul/img1.png",
      "contents": {
        "fullname": "불온한 데이터",
        "date": "2019.05.06 ~ 2019.05.12",
        "author": "김실비, 김웅현 외 8명",
        "numOfWorks": "영상, 설치, 퍼포먼스 등 작품 11점",
        "price": "4,000원",
        "host": "국립현대미술관",
        "content": "4차 산업혁명의 시대가 도래하면서 우리의 삶은 과거의 그 어느 때보다 빅데이터, 블록체인, 인공지능 등의 첨단 기술과 밀접한 관계에 놓이게 되었다. 우리의 사회는 개인의 일상부터 국가 단위의 시스템까지 점차 데이터화 되고 있다.  전시의 참여 작가들은 데이터를 분류하고 체계화하여 예술 표현의 폭을 넓히거나, 첨단 기술을 활용하여 창조적 공공재를 확장하는 방식을 모색하며, 반권위적인 새로운 시스템을 탐색하는 탈중앙화를 시도한다."
      }
    },
    {
      "name": "마르셀뒤샹",
      "img": "src/asset/img/Seoul/img2.png",
      "contents": {
        "fullname": "마르셀 뒤샹",
        "date": "2019.05.06 ~ 2019.05.16",
        "author": "마르셀 뒤샹",
        "numOfWorks": "회화, 사진, 오브제, 필름, 드로잉 등 150여점",
        "price": "4,000원",
        "host": "국립현대미술관, 필라델피아 미술관 공동주최",
        "content": "20세기 개념미술의 선구자 마르셀 뒤샹(Marcel Duchamp, 1887~1968)은 프랑스와 미국을 포함한 국제 미술무대에서 활동하던 아티스트로, 오늘날까지 현대미술의 신화처럼 존재하는 작가이다. 뒤샹 사후 50주년 되는 해를 맞아 열리는 본 전시는 작가의 삶과 작품 세계를 소개하는 아시아태평양 지역 역대 최대 규모의 전시이다. 현대미술의 선구자로 여겨지는 뒤샹을 오늘날의 동시대적 맥락에서 바라보고 지금까지 행해지는 현대미술에 대한 심도 깊은 이해의 장이 되기를 기대한다."
      }
    },
  ],
  [{
    "name": "불온한데이터",
    "img": "src/asset/img/Seoul/img1.png",
    "contents": {
      "fullname": "불온한 데이터",
      "date": "2019.05.06 ~ 2019.05.12",
      "author": "김실비, 김웅현 외 8명",
      "numOfWorks": "영상, 설치, 퍼포먼스 등 작품 11점",
      "price": "4,000원",
      "host": "국립현대미술관",
      "content": "4차 산업혁명의 시대가 도래하면서 우리의 삶은 과거의 그 어느 때보다 빅데이터, 블록체인, 인공지능 등의 첨단 기술과 밀접한 관계에 놓이게 되었다. 우리의 사회는 개인의 일상부터 국가 단위의 시스템까지 점차 데이터화 되고 있다.  전시의 참여 작가들은 데이터를 분류하고 체계화하여 예술 표현의 폭을 넓히거나, 첨단 기술을 활용하여 창조적 공공재를 확장하는 방식을 모색하며, 반권위적인 새로운 시스템을 탐색하는 탈중앙화를 시도한다."
    }
  },
  {
    "name": "마르셀뒤샹",
    "img": "src/asset/img/Seoul/img2.png",
    "contents": {
      "fullname": "마르셀 뒤샹",
      "date": "2019.05.06 ~ 2019.05.16",
      "author": "마르셀 뒤샹",
      "numOfWorks": "회화, 사진, 오브제, 필름, 드로잉 등 150여점",
      "price": "4,000원",
      "host": "국립현대미술관, 필라델피아 미술관 공동주최",
      "content": "20세기 개념미술의 선구자 마르셀 뒤샹(Marcel Duchamp, 1887~1968)은 프랑스와 미국을 포함한 국제 미술무대에서 활동하던 아티스트로, 오늘날까지 현대미술의 신화처럼 존재하는 작가이다. 뒤샹 사후 50주년 되는 해를 맞아 열리는 본 전시는 작가의 삶과 작품 세계를 소개하는 아시아태평양 지역 역대 최대 규모의 전시이다. 현대미술의 선구자로 여겨지는 뒤샹을 오늘날의 동시대적 맥락에서 바라보고 지금까지 행해지는 현대미술에 대한 심도 깊은 이해의 장이 되기를 기대한다."
    }
  },
],
[{
  "name": "불온한데이터",
  "img": "src/asset/img/Seoul/img1.png",
  "contents": {
    "fullname": "불온한 데이터",
    "date": "2019.05.06 ~ 2019.05.12",
    "author": "김실비, 김웅현 외 8명",
    "numOfWorks": "영상, 설치, 퍼포먼스 등 작품 11점",
    "price": "4,000원",
    "host": "국립현대미술관",
    "content": "4차 산업혁명의 시대가 도래하면서 우리의 삶은 과거의 그 어느 때보다 빅데이터, 블록체인, 인공지능 등의 첨단 기술과 밀접한 관계에 놓이게 되었다. 우리의 사회는 개인의 일상부터 국가 단위의 시스템까지 점차 데이터화 되고 있다.  전시의 참여 작가들은 데이터를 분류하고 체계화하여 예술 표현의 폭을 넓히거나, 첨단 기술을 활용하여 창조적 공공재를 확장하는 방식을 모색하며, 반권위적인 새로운 시스템을 탐색하는 탈중앙화를 시도한다."
  }
},
{
  "name": "마르셀뒤샹",
  "img": "src/asset/img/Seoul/img2.png",
  "contents": {
    "fullname": "마르셀 뒤샹",
    "date": "2019.05.06 ~ 2019.05.16",
    "author": "마르셀 뒤샹",
    "numOfWorks": "회화, 사진, 오브제, 필름, 드로잉 등 150여점",
    "price": "4,000원",
    "host": "국립현대미술관, 필라델피아 미술관 공동주최",
    "content": "20세기 개념미술의 선구자 마르셀 뒤샹(Marcel Duchamp, 1887~1968)은 프랑스와 미국을 포함한 국제 미술무대에서 활동하던 아티스트로, 오늘날까지 현대미술의 신화처럼 존재하는 작가이다. 뒤샹 사후 50주년 되는 해를 맞아 열리는 본 전시는 작가의 삶과 작품 세계를 소개하는 아시아태평양 지역 역대 최대 규모의 전시이다. 현대미술의 선구자로 여겨지는 뒤샹을 오늘날의 동시대적 맥락에서 바라보고 지금까지 행해지는 현대미술에 대한 심도 깊은 이해의 장이 되기를 기대한다."
  }
},
],
[{
  "name": "불온한데이터",
  "img": "src/asset/img/Seoul/img1.png",
  "contents": {
    "fullname": "불온한 데이터",
    "date": "2019.05.06 ~ 2019.05.12",
    "author": "김실비, 김웅현 외 8명",
    "numOfWorks": "영상, 설치, 퍼포먼스 등 작품 11점",
    "price": "4,000원",
    "host": "국립현대미술관",
    "content": "4차 산업혁명의 시대가 도래하면서 우리의 삶은 과거의 그 어느 때보다 빅데이터, 블록체인, 인공지능 등의 첨단 기술과 밀접한 관계에 놓이게 되었다. 우리의 사회는 개인의 일상부터 국가 단위의 시스템까지 점차 데이터화 되고 있다.  전시의 참여 작가들은 데이터를 분류하고 체계화하여 예술 표현의 폭을 넓히거나, 첨단 기술을 활용하여 창조적 공공재를 확장하는 방식을 모색하며, 반권위적인 새로운 시스템을 탐색하는 탈중앙화를 시도한다."
  }
},
{
  "name": "마르셀뒤샹",
  "img": "src/asset/img/Seoul/img2.png",
  "contents": {
    "fullname": "마르셀 뒤샹",
    "date": "2019.05.06 ~ 2019.05.16",
    "author": "마르셀 뒤샹",
    "numOfWorks": "회화, 사진, 오브제, 필름, 드로잉 등 150여점",
    "price": "4,000원",
    "host": "국립현대미술관, 필라델피아 미술관 공동주최",
    "content": "20세기 개념미술의 선구자 마르셀 뒤샹(Marcel Duchamp, 1887~1968)은 프랑스와 미국을 포함한 국제 미술무대에서 활동하던 아티스트로, 오늘날까지 현대미술의 신화처럼 존재하는 작가이다. 뒤샹 사후 50주년 되는 해를 맞아 열리는 본 전시는 작가의 삶과 작품 세계를 소개하는 아시아태평양 지역 역대 최대 규모의 전시이다. 현대미술의 선구자로 여겨지는 뒤샹을 오늘날의 동시대적 맥락에서 바라보고 지금까지 행해지는 현대미술에 대한 심도 깊은 이해의 장이 되기를 기대한다."
  }
},
],
[{
  "name": "불온한데이터",
  "img": "src/asset/img/Seoul/img1.png",
  "contents": {
    "fullname": "불온한 데이터",
    "date": "2019.05.06 ~ 2019.05.12",
    "author": "김실비, 김웅현 외 8명",
    "numOfWorks": "영상, 설치, 퍼포먼스 등 작품 11점",
    "price": "4,000원",
    "host": "국립현대미술관",
    "content": "4차 산업혁명의 시대가 도래하면서 우리의 삶은 과거의 그 어느 때보다 빅데이터, 블록체인, 인공지능 등의 첨단 기술과 밀접한 관계에 놓이게 되었다. 우리의 사회는 개인의 일상부터 국가 단위의 시스템까지 점차 데이터화 되고 있다.  전시의 참여 작가들은 데이터를 분류하고 체계화하여 예술 표현의 폭을 넓히거나, 첨단 기술을 활용하여 창조적 공공재를 확장하는 방식을 모색하며, 반권위적인 새로운 시스템을 탐색하는 탈중앙화를 시도한다."
  }
},
{
  "name": "마르셀뒤샹",
  "img": "src/asset/img/Seoul/img2.png",
  "contents": {
    "fullname": "마르셀 뒤샹",
    "date": "2019.05.06 ~ 2019.05.16",
    "author": "마르셀 뒤샹",
    "numOfWorks": "회화, 사진, 오브제, 필름, 드로잉 등 150여점",
    "price": "4,000원",
    "host": "국립현대미술관, 필라델피아 미술관 공동주최",
    "content": "20세기 개념미술의 선구자 마르셀 뒤샹(Marcel Duchamp, 1887~1968)은 프랑스와 미국을 포함한 국제 미술무대에서 활동하던 아티스트로, 오늘날까지 현대미술의 신화처럼 존재하는 작가이다. 뒤샹 사후 50주년 되는 해를 맞아 열리는 본 전시는 작가의 삶과 작품 세계를 소개하는 아시아태평양 지역 역대 최대 규모의 전시이다. 현대미술의 선구자로 여겨지는 뒤샹을 오늘날의 동시대적 맥락에서 바라보고 지금까지 행해지는 현대미술에 대한 심도 깊은 이해의 장이 되기를 기대한다."
  }
},
],
[{
  "name": "불온한데이터",
  "img": "src/asset/img/Seoul/img1.png",
  "contents": {
    "fullname": "불온한 데이터",
    "date": "2019.05.06 ~ 2019.05.12",
    "author": "김실비, 김웅현 외 8명",
    "numOfWorks": "영상, 설치, 퍼포먼스 등 작품 11점",
    "price": "4,000원",
    "host": "국립현대미술관",
    "content": "4차 산업혁명의 시대가 도래하면서 우리의 삶은 과거의 그 어느 때보다 빅데이터, 블록체인, 인공지능 등의 첨단 기술과 밀접한 관계에 놓이게 되었다. 우리의 사회는 개인의 일상부터 국가 단위의 시스템까지 점차 데이터화 되고 있다.  전시의 참여 작가들은 데이터를 분류하고 체계화하여 예술 표현의 폭을 넓히거나, 첨단 기술을 활용하여 창조적 공공재를 확장하는 방식을 모색하며, 반권위적인 새로운 시스템을 탐색하는 탈중앙화를 시도한다."
  }
},
{
  "name": "마르셀뒤샹",
  "img": "src/asset/img/Seoul/img2.png",
  "contents": {
    "fullname": "마르셀 뒤샹",
    "date": "2019.05.06 ~ 2019.05.16",
    "author": "마르셀 뒤샹",
    "numOfWorks": "회화, 사진, 오브제, 필름, 드로잉 등 150여점",
    "price": "4,000원",
    "host": "국립현대미술관, 필라델피아 미술관 공동주최",
    "content": "20세기 개념미술의 선구자 마르셀 뒤샹(Marcel Duchamp, 1887~1968)은 프랑스와 미국을 포함한 국제 미술무대에서 활동하던 아티스트로, 오늘날까지 현대미술의 신화처럼 존재하는 작가이다. 뒤샹 사후 50주년 되는 해를 맞아 열리는 본 전시는 작가의 삶과 작품 세계를 소개하는 아시아태평양 지역 역대 최대 규모의 전시이다. 현대미술의 선구자로 여겨지는 뒤샹을 오늘날의 동시대적 맥락에서 바라보고 지금까지 행해지는 현대미술에 대한 심도 깊은 이해의 장이 되기를 기대한다."
  }
},
],
[{
  "name": "불온한데이터",
  "img": "src/asset/img/Seoul/img1.png",
  "contents": {
    "fullname": "불온한 데이터",
    "date": "2019.05.06 ~ 2019.05.12",
    "author": "김실비, 김웅현 외 8명",
    "numOfWorks": "영상, 설치, 퍼포먼스 등 작품 11점",
    "price": "4,000원",
    "host": "국립현대미술관",
    "content": "4차 산업혁명의 시대가 도래하면서 우리의 삶은 과거의 그 어느 때보다 빅데이터, 블록체인, 인공지능 등의 첨단 기술과 밀접한 관계에 놓이게 되었다. 우리의 사회는 개인의 일상부터 국가 단위의 시스템까지 점차 데이터화 되고 있다.  전시의 참여 작가들은 데이터를 분류하고 체계화하여 예술 표현의 폭을 넓히거나, 첨단 기술을 활용하여 창조적 공공재를 확장하는 방식을 모색하며, 반권위적인 새로운 시스템을 탐색하는 탈중앙화를 시도한다."
  }
},
{
  "name": "마르셀뒤샹",
  "img": "src/asset/img/Seoul/img2.png",
  "contents": {
    "fullname": "마르셀 뒤샹",
    "date": "2019.05.06 ~ 2019.05.16",
    "author": "마르셀 뒤샹",
    "numOfWorks": "회화, 사진, 오브제, 필름, 드로잉 등 150여점",
    "price": "4,000원",
    "host": "국립현대미술관, 필라델피아 미술관 공동주최",
    "content": "20세기 개념미술의 선구자 마르셀 뒤샹(Marcel Duchamp, 1887~1968)은 프랑스와 미국을 포함한 국제 미술무대에서 활동하던 아티스트로, 오늘날까지 현대미술의 신화처럼 존재하는 작가이다. 뒤샹 사후 50주년 되는 해를 맞아 열리는 본 전시는 작가의 삶과 작품 세계를 소개하는 아시아태평양 지역 역대 최대 규모의 전시이다. 현대미술의 선구자로 여겨지는 뒤샹을 오늘날의 동시대적 맥락에서 바라보고 지금까지 행해지는 현대미술에 대한 심도 깊은 이해의 장이 되기를 기대한다."
  }
},
],
];

let seoulRecommend = [{
    "name": "마르셀뒤샹",
    "img": "src/asset/img/Seoul/img2.png",
    "contents": {
        "fullname": "마르셀 뒤샹",
        "date": "2019.05.06 ~ 2019.05.16",
        "author": "마르셀 뒤샹",
        "numOfWorks": "회화, 사진, 오브제, 필름, 드로잉 등 150여점",
        "price": "4,000원",
        "host": "국립현대미술관, 필라델피아미술관",
        "content": "20세기 개념미술의 선구자 마르셀 뒤샹(Marcel Duchamp, 1887~1968)은 프랑스와 미국을 포함한 국제 미술무대에서 활동하던 아티스트로, 오늘날까지 현대미술의 신화처럼 존재하는 작가이다. 뒤샹 사후 50주년 되는 해를 맞아 열리는 본 전시는 작가의 삶과 작품 세계를 소개하는 아시아태평양 지역 역대 최대 규모의 전시이다. 현대미술의 선구자로 여겨지는 뒤샹을 오늘날의 동시대적 맥락에서 바라보고 지금까지 행해지는 현대미술에 대한 심도 깊은 이해의 장이 되기를 기대한다."
    }
  },
  {
      "name": "대안적언어",
      "img": "src/asset/img/Seoul/img3.png",
      "contents": {
          "fullname": "대안적 언어 : 아거스 욘",
          "date": "2019.05.13 ~ 2019.05.23",
          "author": "아거스 욘",
          "numOfWorks": "회화, 조각, 사진 및 아카이브 자료 90여 점",
          "price": "4,000원",
          "host": "국립현대미술관",
          "content": "코브라(CoBrA), 상황주의자 인터내셔널(Situationist International) 등 급진적 아방가르드 그룹을 이끌며 20세기 중반 사회 참여적 예술운동을 주도했던 북유럽의 대표작가 아거스 욘(덴마크, 1914-1973)을 집중 조명하는 전시. 특히 서울박스에서는 작가가 냉전시대 힘의 균형을 주제로 고안한 관객 참여형 설치작업 “삼면 축구(three sided football)” 게임을 선보인다."
      }
  },
  {
      "name": "안톤비도클",
      "img": "src/asset/img/Seoul/img5.png",
      "contents": {
          "fullname": "모두를 위한 불멸 : 안톤 비도클",
          "date": "2019.05.27 ~ 2019.06.02",
          "author": "안톤 비도클",
          "numOfWorks": "영상 3부작",
          "price": "4,000원",
          "host": "국립현대미술관",
          "content": "이 전시는 모스크바에서 태어나 현재 뉴욕과 베를린을 중심으로 활동하는 작가이자 기획자 안톤 비도클이 2014년도부터 2017년도까지 ‘러시아 우주론’에 관한 동시대적 성찰을 중심으로 제작한 영상 3부작을 소개한다."
      }
  }
];

let seoulData2 = [
  [{
      "name": "대안적언어",
      "img": "src/asset/img/Seoul/img3.png",
      "contents": {
        "fullname": "대안적 언어 : 아거스 욘",
        "date": "2019.05.13 ~ 2019.05.23",
        "author": "아거스 욘",
        "numOfWorks": "회화, 조각, 사진 및 아카이브 자료 90여 점",
        "price": "4,000원",
        "host": "국립현대미술관",
        "content": "코브라(CoBrA), 상황주의자 인터내셔널(Situationist International) 등 급진적 아방가르드 그룹을 이끌며 20세기 중반 사회 참여적 예술운동을 주도했던 북유럽의 대표작가 아거스 욘(덴마크, 1914-1973)을 집중 조명하는 전시. 특히 서울박스에서는 작가가 냉전시대 힘의 균형을 주제로 고안한 관객 참여형 설치작업 “삼면 축구(three sided football)” 게임을 선보인다."
      }
    },
    {
      "name": "마르셀뒤샹",
      "img": "src/asset/img/Seoul/img2.png",
      "contents": {
        "fullname": "마르셀 뒤샹",
        "date": "2019.05.06 ~ 2019.05.16",
        "author": "마르셀 뒤샹",
        "numOfWorks": "회화, 사진, 오브제, 필름, 드로잉 등 150여점",
        "price": "4,000원",
        "host": "국립현대미술관, 필라델피아 미술관 공동주최",
        "content": "20세기 개념미술의 선구자 마르셀 뒤샹(Marcel Duchamp, 1887~1968)은 프랑스와 미국을 포함한 국제 미술무대에서 활동하던 아티스트로, 오늘날까지 현대미술의 신화처럼 존재하는 작가이다. 뒤샹 사후 50주년 되는 해를 맞아 열리는 본 전시는 작가의 삶과 작품 세계를 소개하는 아시아태평양 지역 역대 최대 규모의 전시이다. 현대미술의 선구자로 여겨지는 뒤샹을 오늘날의 동시대적 맥락에서 바라보고 지금까지 행해지는 현대미술에 대한 심도 깊은 이해의 장이 되기를 기대한다."
      }
    },
  ],
  [{
    "name": "대안적언어",
    "img": "src/asset/img/Seoul/img3.png",
    "contents": {
      "fullname": "대안적 언어 : 아거스 욘",
      "date": "2019.05.13 ~ 2019.05.23",
      "author": "아거스 욘",
      "numOfWorks": "회화, 조각, 사진 및 아카이브 자료 90여 점",
      "price": "4,000원",
      "host": "국립현대미술관",
      "content": "코브라(CoBrA), 상황주의자 인터내셔널(Situationist International) 등 급진적 아방가르드 그룹을 이끌며 20세기 중반 사회 참여적 예술운동을 주도했던 북유럽의 대표작가 아거스 욘(덴마크, 1914-1973)을 집중 조명하는 전시. 특히 서울박스에서는 작가가 냉전시대 힘의 균형을 주제로 고안한 관객 참여형 설치작업 “삼면 축구(three sided football)” 게임을 선보인다."
    }
  },
  {
    "name": "마르셀뒤샹",
    "img": "src/asset/img/Seoul/img2.png",
    "contents": {
      "fullname": "마르셀 뒤샹",
      "date": "2019.05.06 ~ 2019.05.16",
      "author": "마르셀 뒤샹",
      "numOfWorks": "회화, 사진, 오브제, 필름, 드로잉 등 150여점",
      "price": "4,000원",
      "host": "국립현대미술관, 필라델피아 미술관 공동주최",
      "content": "20세기 개념미술의 선구자 마르셀 뒤샹(Marcel Duchamp, 1887~1968)은 프랑스와 미국을 포함한 국제 미술무대에서 활동하던 아티스트로, 오늘날까지 현대미술의 신화처럼 존재하는 작가이다. 뒤샹 사후 50주년 되는 해를 맞아 열리는 본 전시는 작가의 삶과 작품 세계를 소개하는 아시아태평양 지역 역대 최대 규모의 전시이다. 현대미술의 선구자로 여겨지는 뒤샹을 오늘날의 동시대적 맥락에서 바라보고 지금까지 행해지는 현대미술에 대한 심도 깊은 이해의 장이 되기를 기대한다."
    }
  },
],
[{
  "name": "대안적언어",
  "img": "src/asset/img/Seoul/img3.png",
  "contents": {
    "fullname": "대안적 언어 : 아거스 욘",
    "date": "2019.05.13 ~ 2019.05.23",
    "author": "아거스 욘",
    "numOfWorks": "회화, 조각, 사진 및 아카이브 자료 90여 점",
    "price": "4,000원",
    "host": "국립현대미술관",
    "content": "코브라(CoBrA), 상황주의자 인터내셔널(Situationist International) 등 급진적 아방가르드 그룹을 이끌며 20세기 중반 사회 참여적 예술운동을 주도했던 북유럽의 대표작가 아거스 욘(덴마크, 1914-1973)을 집중 조명하는 전시. 특히 서울박스에서는 작가가 냉전시대 힘의 균형을 주제로 고안한 관객 참여형 설치작업 “삼면 축구(three sided football)” 게임을 선보인다."
  }
},
{
  "name": "마르셀뒤샹",
  "img": "src/asset/img/Seoul/img2.png",
  "contents": {
    "fullname": "마르셀 뒤샹",
    "date": "2019.05.06 ~ 2019.05.16",
    "author": "마르셀 뒤샹",
    "numOfWorks": "회화, 사진, 오브제, 필름, 드로잉 등 150여점",
    "price": "4,000원",
    "host": "국립현대미술관, 필라델피아 미술관 공동주최",
    "content": "20세기 개념미술의 선구자 마르셀 뒤샹(Marcel Duchamp, 1887~1968)은 프랑스와 미국을 포함한 국제 미술무대에서 활동하던 아티스트로, 오늘날까지 현대미술의 신화처럼 존재하는 작가이다. 뒤샹 사후 50주년 되는 해를 맞아 열리는 본 전시는 작가의 삶과 작품 세계를 소개하는 아시아태평양 지역 역대 최대 규모의 전시이다. 현대미술의 선구자로 여겨지는 뒤샹을 오늘날의 동시대적 맥락에서 바라보고 지금까지 행해지는 현대미술에 대한 심도 깊은 이해의 장이 되기를 기대한다."
  }
},
],
[{
  "name": "대안적언어",
  "img": "src/asset/img/Seoul/img3.png",
  "contents": {
    "fullname": "대안적 언어 : 아거스 욘",
    "date": "2019.05.13 ~ 2019.05.23",
    "author": "아거스 욘",
    "numOfWorks": "회화, 조각, 사진 및 아카이브 자료 90여 점",
    "price": "4,000원",
    "host": "국립현대미술관",
    "content": "코브라(CoBrA), 상황주의자 인터내셔널(Situationist International) 등 급진적 아방가르드 그룹을 이끌며 20세기 중반 사회 참여적 예술운동을 주도했던 북유럽의 대표작가 아거스 욘(덴마크, 1914-1973)을 집중 조명하는 전시. 특히 서울박스에서는 작가가 냉전시대 힘의 균형을 주제로 고안한 관객 참여형 설치작업 “삼면 축구(three sided football)” 게임을 선보인다."
  }
},
{
  "name": "마르셀뒤샹",
  "img": "src/asset/img/Seoul/img2.png",
  "contents": {
    "fullname": "마르셀 뒤샹",
    "date": "2019.05.06 ~ 2019.05.16",
    "author": "마르셀 뒤샹",
    "numOfWorks": "회화, 사진, 오브제, 필름, 드로잉 등 150여점",
    "price": "4,000원",
    "host": "국립현대미술관, 필라델피아 미술관 공동주최",
    "content": "20세기 개념미술의 선구자 마르셀 뒤샹(Marcel Duchamp, 1887~1968)은 프랑스와 미국을 포함한 국제 미술무대에서 활동하던 아티스트로, 오늘날까지 현대미술의 신화처럼 존재하는 작가이다. 뒤샹 사후 50주년 되는 해를 맞아 열리는 본 전시는 작가의 삶과 작품 세계를 소개하는 아시아태평양 지역 역대 최대 규모의 전시이다. 현대미술의 선구자로 여겨지는 뒤샹을 오늘날의 동시대적 맥락에서 바라보고 지금까지 행해지는 현대미술에 대한 심도 깊은 이해의 장이 되기를 기대한다."
  }
},
],
[{
  "name": "대안적언어",
  "img": "src/asset/img/Seoul/img3.png",
  "contents": {
    "fullname": "대안적 언어 : 아거스 욘",
    "date": "2019.05.13 ~ 2019.05.23",
    "author": "아거스 욘",
    "numOfWorks": "회화, 조각, 사진 및 아카이브 자료 90여 점",
    "price": "4,000원",
    "host": "국립현대미술관",
    "content": "코브라(CoBrA), 상황주의자 인터내셔널(Situationist International) 등 급진적 아방가르드 그룹을 이끌며 20세기 중반 사회 참여적 예술운동을 주도했던 북유럽의 대표작가 아거스 욘(덴마크, 1914-1973)을 집중 조명하는 전시. 특히 서울박스에서는 작가가 냉전시대 힘의 균형을 주제로 고안한 관객 참여형 설치작업 “삼면 축구(three sided football)” 게임을 선보인다."
  }
},
{
  "name": "안톤비도클",
  "img": "src/asset/img/Seoul/img5.png",
  "contents": {
    "fullname": "모두를 위한 불멸 : 안톤 비도클",
    "date": "2019.05.27 ~ 2019.06.02",
    "author": "안톤 비도클",
    "numOfWorks": "영상 3부작",
    "price": "4,000원",
    "host": "국립현대미술관",
    "content": "이 전시는 모스크바에서 태어나 현재 뉴욕과 베를린을 중심으로 활동하는 작가이자 기획자 안톤 비도클이 2014년도부터 2017년도까지 ‘러시아 우주론’에 관한 동시대적 성찰을 중심으로 제작한 영상 3부작을 소개한다."
  }
},
],
[{
  "name": "대안적언어",
  "img": "src/asset/img/Seoul/img3.png",
  "contents": {
    "fullname": "대안적 언어 : 아거스 욘",
    "date": "2019.05.13 ~ 2019.05.23",
    "author": "아거스 욘",
    "numOfWorks": "회화, 조각, 사진 및 아카이브 자료 90여 점",
    "price": "4,000원",
    "host": "국립현대미술관",
    "content": "코브라(CoBrA), 상황주의자 인터내셔널(Situationist International) 등 급진적 아방가르드 그룹을 이끌며 20세기 중반 사회 참여적 예술운동을 주도했던 북유럽의 대표작가 아거스 욘(덴마크, 1914-1973)을 집중 조명하는 전시. 특히 서울박스에서는 작가가 냉전시대 힘의 균형을 주제로 고안한 관객 참여형 설치작업 “삼면 축구(three sided football)” 게임을 선보인다."
  }
},
{
  "name": "안톤비도클",
  "img": "src/asset/img/Seoul/img5.png",
  "contents": {
    "fullname": "모두를 위한 불멸 : 안톤 비도클",
    "date": "2019.05.27 ~ 2019.06.02",
    "author": "안톤 비도클",
    "numOfWorks": "영상 3부작",
    "price": "4,000원",
    "host": "국립현대미술관",
    "content": "이 전시는 모스크바에서 태어나 현재 뉴욕과 베를린을 중심으로 활동하는 작가이자 기획자 안톤 비도클이 2014년도부터 2017년도까지 ‘러시아 우주론’에 관한 동시대적 성찰을 중심으로 제작한 영상 3부작을 소개한다."
  }
},
],
[{
  "name": "대안적언어",
  "img": "src/asset/img/Seoul/img3.png",
  "contents": {
    "fullname": "대안적 언어 : 아거스 욘",
    "date": "2019.05.13 ~ 2019.05.23",
    "author": "아거스 욘",
    "numOfWorks": "회화, 조각, 사진 및 아카이브 자료 90여 점",
    "price": "4,000원",
    "host": "국립현대미술관",
    "content": "코브라(CoBrA), 상황주의자 인터내셔널(Situationist International) 등 급진적 아방가르드 그룹을 이끌며 20세기 중반 사회 참여적 예술운동을 주도했던 북유럽의 대표작가 아거스 욘(덴마크, 1914-1973)을 집중 조명하는 전시. 특히 서울박스에서는 작가가 냉전시대 힘의 균형을 주제로 고안한 관객 참여형 설치작업 “삼면 축구(three sided football)” 게임을 선보인다."
  }
},
{
  "name": "안톤비도클",
  "img": "src/asset/img/Seoul/img5.png",
  "contents": {
    "fullname": "모두를 위한 불멸 : 안톤 비도클",
    "date": "2019.05.27 ~ 2019.06.02",
    "author": "안톤 비도클",
    "numOfWorks": "영상 3부작",
    "price": "4,000원",
    "host": "국립현대미술관",
    "content": "이 전시는 모스크바에서 태어나 현재 뉴욕과 베를린을 중심으로 활동하는 작가이자 기획자 안톤 비도클이 2014년도부터 2017년도까지 ‘러시아 우주론’에 관한 동시대적 성찰을 중심으로 제작한 영상 3부작을 소개한다."
  }
},
],
];

let seoulRecommend2 = [{
    "name": "서울불온",
    "img": "src/asset/img/Seoul/img1.png",
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
    "name": "서울대안",
    "img": "src/asset/img/Seoul/img2.png",
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
    "name": "서울신소장품",
    "img": "src/asset/img/Seoul/img3.png",
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


let seoulData3 = [
[{
  "name": "대안적언어",
  "img": "src/asset/img/Seoul/img3.png",
  "contents": {
    "fullname": "대안적 언어 : 아거스 욘",
    "date": "2019.05.13 ~ 2019.05.23",
    "author": "아거스 욘",
    "numOfWorks": "회화, 조각, 사진 및 아카이브 자료 90여 점",
    "price": "4,000원",
    "host": "국립현대미술관",
    "content": "코브라(CoBrA), 상황주의자 인터내셔널(Situationist International) 등 급진적 아방가르드 그룹을 이끌며 20세기 중반 사회 참여적 예술운동을 주도했던 북유럽의 대표작가 아거스 욘(덴마크, 1914-1973)을 집중 조명하는 전시. 특히 서울박스에서는 작가가 냉전시대 힘의 균형을 주제로 고안한 관객 참여형 설치작업 “삼면 축구(three sided football)” 게임을 선보인다."
  }
},
{
  "name": "안톤비도클",
  "img": "src/asset/img/Seoul/img5.png",
  "contents": {
    "fullname": "모두를 위한 불멸 : 안톤 비도클",
    "date": "2019.05.27 ~ 2019.06.02",
    "author": "안톤 비도클",
    "numOfWorks": "영상 3부작",
    "price": "4,000원",
    "host": "국립현대미술관",
    "content": "이 전시는 모스크바에서 태어나 현재 뉴욕과 베를린을 중심으로 활동하는 작가이자 기획자 안톤 비도클이 2014년도부터 2017년도까지 ‘러시아 우주론’에 관한 동시대적 성찰을 중심으로 제작한 영상 3부작을 소개한다."
  }
},
],
[{
  "name": "대안적언어",
  "img": "src/asset/img/Seoul/img3.png",
  "contents": {
    "fullname": "대안적 언어 : 아거스 욘",
    "date": "2019.05.13 ~ 2019.05.23",
    "author": "아거스 욘",
    "numOfWorks": "회화, 조각, 사진 및 아카이브 자료 90여 점",
    "price": "4,000원",
    "host": "국립현대미술관",
    "content": "코브라(CoBrA), 상황주의자 인터내셔널(Situationist International) 등 급진적 아방가르드 그룹을 이끌며 20세기 중반 사회 참여적 예술운동을 주도했던 북유럽의 대표작가 아거스 욘(덴마크, 1914-1973)을 집중 조명하는 전시. 특히 서울박스에서는 작가가 냉전시대 힘의 균형을 주제로 고안한 관객 참여형 설치작업 “삼면 축구(three sided football)” 게임을 선보인다."
  }
},
{
  "name": "안톤비도클",
  "img": "src/asset/img/Seoul/img5.png",
  "contents": {
    "fullname": "모두를 위한 불멸 : 안톤 비도클",
    "date": "2019.05.27 ~ 2019.06.02",
    "author": "안톤 비도클",
    "numOfWorks": "영상 3부작",
    "price": "4,000원",
    "host": "국립현대미술관",
    "content": "이 전시는 모스크바에서 태어나 현재 뉴욕과 베를린을 중심으로 활동하는 작가이자 기획자 안톤 비도클이 2014년도부터 2017년도까지 ‘러시아 우주론’에 관한 동시대적 성찰을 중심으로 제작한 영상 3부작을 소개한다."
  }
},
],
[{
  "name": "대안적언어",
  "img": "src/asset/img/Seoul/img3.png",
  "contents": {
    "fullname": "대안적 언어 : 아거스 욘",
    "date": "2019.05.13 ~ 2019.05.23",
    "author": "아거스 욘",
    "numOfWorks": "회화, 조각, 사진 및 아카이브 자료 90여 점",
    "price": "4,000원",
    "host": "국립현대미술관",
    "content": "코브라(CoBrA), 상황주의자 인터내셔널(Situationist International) 등 급진적 아방가르드 그룹을 이끌며 20세기 중반 사회 참여적 예술운동을 주도했던 북유럽의 대표작가 아거스 욘(덴마크, 1914-1973)을 집중 조명하는 전시. 특히 서울박스에서는 작가가 냉전시대 힘의 균형을 주제로 고안한 관객 참여형 설치작업 “삼면 축구(three sided football)” 게임을 선보인다."
  }
},
{
  "name": "안톤비도클",
  "img": "src/asset/img/Seoul/img5.png",
  "contents": {
    "fullname": "모두를 위한 불멸 : 안톤 비도클",
    "date": "2019.05.27 ~ 2019.06.02",
    "author": "안톤 비도클",
    "numOfWorks": "영상 3부작",
    "price": "4,000원",
    "host": "국립현대미술관",
    "content": "이 전시는 모스크바에서 태어나 현재 뉴욕과 베를린을 중심으로 활동하는 작가이자 기획자 안톤 비도클이 2014년도부터 2017년도까지 ‘러시아 우주론’에 관한 동시대적 성찰을 중심으로 제작한 영상 3부작을 소개한다."
  }
},
],
[{
  "name": "대안적언어",
  "img": "src/asset/img/Seoul/img3.png",
  "contents": {
    "fullname": "대안적 언어 : 아거스 욘",
    "date": "2019.05.13 ~ 2019.05.23",
    "author": "아거스 욘",
    "numOfWorks": "회화, 조각, 사진 및 아카이브 자료 90여 점",
    "price": "4,000원",
    "host": "국립현대미술관",
    "content": "코브라(CoBrA), 상황주의자 인터내셔널(Situationist International) 등 급진적 아방가르드 그룹을 이끌며 20세기 중반 사회 참여적 예술운동을 주도했던 북유럽의 대표작가 아거스 욘(덴마크, 1914-1973)을 집중 조명하는 전시. 특히 서울박스에서는 작가가 냉전시대 힘의 균형을 주제로 고안한 관객 참여형 설치작업 “삼면 축구(three sided football)” 게임을 선보인다."
  }
},
{
  "name": "안톤비도클",
  "img": "src/asset/img/Seoul/img5.png",
  "contents": {
    "fullname": "모두를 위한 불멸 : 안톤 비도클",
    "date": "2019.05.27 ~ 2019.06.02",
    "author": "안톤 비도클",
    "numOfWorks": "영상 3부작",
    "price": "4,000원",
    "host": "국립현대미술관",
    "content": "이 전시는 모스크바에서 태어나 현재 뉴욕과 베를린을 중심으로 활동하는 작가이자 기획자 안톤 비도클이 2014년도부터 2017년도까지 ‘러시아 우주론’에 관한 동시대적 성찰을 중심으로 제작한 영상 3부작을 소개한다."
  }
},
],
[{
  "name": "안톤비도클",
  "img": "src/asset/img/Seoul/img5.png",
  "contents": {
    "fullname": "모두를 위한 불멸 : 안톤 비도클",
    "date": "2019.05.27 ~ 2019.06.02",
    "author": "안톤 비도클",
    "numOfWorks": "영상 3부작",
    "price": "4,000원",
    "host": "국립현대미술관",
    "content": "이 전시는 모스크바에서 태어나 현재 뉴욕과 베를린을 중심으로 활동하는 작가이자 기획자 안톤 비도클이 2014년도부터 2017년도까지 ‘러시아 우주론’에 관한 동시대적 성찰을 중심으로 제작한 영상 3부작을 소개한다."
  }
},
{
  "name": "박서보",
  "img": "src/asset/img/Seoul/img4.png",
  "contents": {
    "fullname": "박서보 : 지칠 줄 모르는 수행자",
    "date": "2019.05.25 ~ 2019.06.02",
    "author": "박서보",
    "numOfWorks": "작품 130여점, 아키이브 100여점",
    "price": "4,000원",
    "host": "국립현대미술관/이상일문화재단",
    "content": "한국 현대미술의 모더니즘 형식주의 및 추상 미술 발전에 있어 선구적인 역할을 하며 한국 현대미술의 변천을 선도한 박서보의 회고전(b.1931)이다. 한국미술에 내재된 고유한 정신과 조형언어를 자신만의 방식으로 해석한 박서보 작업의 독창성은 물론 미술사적 의미를 살펴본다."
  }
},
],
[{
  "name": "안톤비도클",
  "img": "src/asset/img/Seoul/img5.png",
  "contents": {
    "fullname": "모두를 위한 불멸 : 안톤 비도클",
    "date": "2019.05.27 ~ 2019.06.02",
    "author": "안톤 비도클",
    "numOfWorks": "영상 3부작",
    "price": "4,000원",
    "host": "국립현대미술관",
    "content": "이 전시는 모스크바에서 태어나 현재 뉴욕과 베를린을 중심으로 활동하는 작가이자 기획자 안톤 비도클이 2014년도부터 2017년도까지 ‘러시아 우주론’에 관한 동시대적 성찰을 중심으로 제작한 영상 3부작을 소개한다."
  }
},
{
  "name": "박서보",
  "img": "src/asset/img/Seoul/img4.png",
  "contents": {
    "fullname": "박서보 : 지칠 줄 모르는 수행자",
    "date": "2019.05.25 ~ 2019.06.02",
    "author": "박서보",
    "numOfWorks": "작품 130여점, 아키이브 100여점",
    "price": "4,000원",
    "host": "국립현대미술관/이상일문화재단",
    "content": "한국 현대미술의 모더니즘 형식주의 및 추상 미술 발전에 있어 선구적인 역할을 하며 한국 현대미술의 변천을 선도한 박서보의 회고전(b.1931)이다. 한국미술에 내재된 고유한 정신과 조형언어를 자신만의 방식으로 해석한 박서보 작업의 독창성은 물론 미술사적 의미를 살펴본다."
  }
},
],
[{
  "name": "안톤비도클",
  "img": "src/asset/img/Seoul/img5.png",
  "contents": {
    "fullname": "모두를 위한 불멸 : 안톤 비도클",
    "date": "2019.05.27 ~ 2019.06.02",
    "author": "안톤 비도클",
    "numOfWorks": "영상 3부작",
    "price": "4,000원",
    "host": "국립현대미술관",
    "content": "이 전시는 모스크바에서 태어나 현재 뉴욕과 베를린을 중심으로 활동하는 작가이자 기획자 안톤 비도클이 2014년도부터 2017년도까지 ‘러시아 우주론’에 관한 동시대적 성찰을 중심으로 제작한 영상 3부작을 소개한다."
  }
},
{
  "name": "박서보",
  "img": "src/asset/img/Seoul/img4.png",
  "contents": {
    "fullname": "박서보 : 지칠 줄 모르는 수행자",
    "date": "2019.05.25 ~ 2019.06.02",
    "author": "박서보",
    "numOfWorks": "작품 130여점, 아키이브 100여점",
    "price": "4,000원",
    "host": "국립현대미술관/이상일문화재단",
    "content": "한국 현대미술의 모더니즘 형식주의 및 추상 미술 발전에 있어 선구적인 역할을 하며 한국 현대미술의 변천을 선도한 박서보의 회고전(b.1931)이다. 한국미술에 내재된 고유한 정신과 조형언어를 자신만의 방식으로 해석한 박서보 작업의 독창성은 물론 미술사적 의미를 살펴본다."
  }
},
],
];

let seoulRecommend3 = [{
    "name": "서울불온",
    "img": "src/asset/img/Seoul/img1.png",
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
    "name": "서울대안",
    "img": "src/asset/img/Seoul/img2.png",
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
    "name": "서울신소장품",
    "img": "src/asset/img/Seoul/img3.png",
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


let seoulData4 = [
  [{
    "name": "박서보",
    "img": "src/asset/img/Seoul/img4.png",
    "contents": {
      "fullname": "박서보 : 지칠 줄 모르는 수행자",
      "date": "2019.05.25 ~ 2019.06.02",
      "author": "박서보",
      "numOfWorks": "작품 130여점, 아키이브 100여점",
      "price": "4,000원",
      "host": "국립현대미술관/이상일문화재단",
      "content": "한국 현대미술의 모더니즘 형식주의 및 추상 미술 발전에 있어 선구적인 역할을 하며 한국 현대미술의 변천을 선도한 박서보의 회고전(b.1931)이다. 한국미술에 내재된 고유한 정신과 조형언어를 자신만의 방식으로 해석한 박서보 작업의 독창성은 물론 미술사적 의미를 살펴본다."
    }
  },
  {
    "name": "안톤비도클",
    "img": "src/asset/img/Seoul/img5.png",
    "contents": {
      "fullname": "모두를 위한 불멸 : 안톤 비도클",
      "date": "2019.05.27 ~ 2019.06.02",
      "author": "안톤 비도클",
      "numOfWorks": "영상 3부작",
      "price": "4,000원",
      "host": "국립현대미술관",
      "content": "이 전시는 모스크바에서 태어나 현재 뉴욕과 베를린을 중심으로 활동하는 작가이자 기획자 안톤 비도클이 2014년도부터 2017년도까지 ‘러시아 우주론’에 관한 동시대적 성찰을 중심으로 제작한 영상 3부작을 소개한다."
    }
  },
  ],
  [{
    "name": "박서보",
    "img": "src/asset/img/Seoul/img4.png",
    "contents": {
      "fullname": "박서보 : 지칠 줄 모르는 수행자",
      "date": "2019.05.25 ~ 2019.06.02",
      "author": "박서보",
      "numOfWorks": "작품 130여점, 아키이브 100여점",
      "price": "4,000원",
      "host": "국립현대미술관/이상일문화재단",
      "content": "한국 현대미술의 모더니즘 형식주의 및 추상 미술 발전에 있어 선구적인 역할을 하며 한국 현대미술의 변천을 선도한 박서보의 회고전(b.1931)이다. 한국미술에 내재된 고유한 정신과 조형언어를 자신만의 방식으로 해석한 박서보 작업의 독창성은 물론 미술사적 의미를 살펴본다."
    }
  },
  {
    "name": "안톤비도클",
    "img": "src/asset/img/Seoul/img5.png",
    "contents": {
      "fullname": "모두를 위한 불멸 : 안톤 비도클",
      "date": "2019.05.27 ~ 2019.06.02",
      "author": "안톤 비도클",
      "numOfWorks": "영상 3부작",
      "price": "4,000원",
      "host": "국립현대미술관",
      "content": "이 전시는 모스크바에서 태어나 현재 뉴욕과 베를린을 중심으로 활동하는 작가이자 기획자 안톤 비도클이 2014년도부터 2017년도까지 ‘러시아 우주론’에 관한 동시대적 성찰을 중심으로 제작한 영상 3부작을 소개한다."
    }
  },
  ],
  [{
    "name": "박서보",
    "img": "src/asset/img/Seoul/img4.png",
    "contents": {
      "fullname": "박서보 : 지칠 줄 모르는 수행자",
      "date": "2019.05.25 ~ 2019.06.02",
      "author": "박서보",
      "numOfWorks": "작품 130여점, 아키이브 100여점",
      "price": "4,000원",
      "host": "국립현대미술관/이상일문화재단",
      "content": "한국 현대미술의 모더니즘 형식주의 및 추상 미술 발전에 있어 선구적인 역할을 하며 한국 현대미술의 변천을 선도한 박서보의 회고전(b.1931)이다. 한국미술에 내재된 고유한 정신과 조형언어를 자신만의 방식으로 해석한 박서보 작업의 독창성은 물론 미술사적 의미를 살펴본다."
    }
  },
  {
    "name": "안톤비도클",
    "img": "src/asset/img/Seoul/img5.png",
    "contents": {
      "fullname": "모두를 위한 불멸 : 안톤 비도클",
      "date": "2019.05.27 ~ 2019.06.02",
      "author": "안톤 비도클",
      "numOfWorks": "영상 3부작",
      "price": "4,000원",
      "host": "국립현대미술관",
      "content": "이 전시는 모스크바에서 태어나 현재 뉴욕과 베를린을 중심으로 활동하는 작가이자 기획자 안톤 비도클이 2014년도부터 2017년도까지 ‘러시아 우주론’에 관한 동시대적 성찰을 중심으로 제작한 영상 3부작을 소개한다."
    }
  },
  ],
  [{
    "name": "박서보",
    "img": "src/asset/img/Seoul/img4.png",
    "contents": {
      "fullname": "박서보 : 지칠 줄 모르는 수행자",
      "date": "2019.05.25 ~ 2019.06.02",
      "author": "박서보",
      "numOfWorks": "작품 130여점, 아키이브 100여점",
      "price": "4,000원",
      "host": "국립현대미술관/이상일문화재단",
      "content": "한국 현대미술의 모더니즘 형식주의 및 추상 미술 발전에 있어 선구적인 역할을 하며 한국 현대미술의 변천을 선도한 박서보의 회고전(b.1931)이다. 한국미술에 내재된 고유한 정신과 조형언어를 자신만의 방식으로 해석한 박서보 작업의 독창성은 물론 미술사적 의미를 살펴본다."
    }
  },
  {
    "name": "안톤비도클",
    "img": "src/asset/img/Seoul/img5.png",
    "contents": {
      "fullname": "모두를 위한 불멸 : 안톤 비도클",
      "date": "2019.05.27 ~ 2019.06.02",
      "author": "안톤 비도클",
      "numOfWorks": "영상 3부작",
      "price": "4,000원",
      "host": "국립현대미술관",
      "content": "이 전시는 모스크바에서 태어나 현재 뉴욕과 베를린을 중심으로 활동하는 작가이자 기획자 안톤 비도클이 2014년도부터 2017년도까지 ‘러시아 우주론’에 관한 동시대적 성찰을 중심으로 제작한 영상 3부작을 소개한다."
    }
  },
  ],
  [{
    "name": "박서보",
    "img": "src/asset/img/Seoul/img4.png",
    "contents": {
      "fullname": "박서보 : 지칠 줄 모르는 수행자",
      "date": "2019.05.25 ~ 2019.06.02",
      "author": "박서보",
      "numOfWorks": "작품 130여점, 아키이브 100여점",
      "price": "4,000원",
      "host": "국립현대미술관/이상일문화재단",
      "content": "한국 현대미술의 모더니즘 형식주의 및 추상 미술 발전에 있어 선구적인 역할을 하며 한국 현대미술의 변천을 선도한 박서보의 회고전(b.1931)이다. 한국미술에 내재된 고유한 정신과 조형언어를 자신만의 방식으로 해석한 박서보 작업의 독창성은 물론 미술사적 의미를 살펴본다."
    }
  },
  {
    "name": "안톤비도클",
    "img": "src/asset/img/Seoul/img5.png",
    "contents": {
      "fullname": "모두를 위한 불멸 : 안톤 비도클",
      "date": "2019.05.27 ~ 2019.06.02",
      "author": "안톤 비도클",
      "numOfWorks": "영상 3부작",
      "price": "4,000원",
      "host": "국립현대미술관",
      "content": "이 전시는 모스크바에서 태어나 현재 뉴욕과 베를린을 중심으로 활동하는 작가이자 기획자 안톤 비도클이 2014년도부터 2017년도까지 ‘러시아 우주론’에 관한 동시대적 성찰을 중심으로 제작한 영상 3부작을 소개한다."
    }
  },
  ],
  [{
    "name": "박서보",
    "img": "src/asset/img/Seoul/img4.png",
    "contents": {
      "fullname": "박서보 : 지칠 줄 모르는 수행자",
      "date": "2019.05.25 ~ 2019.06.02",
      "author": "박서보",
      "numOfWorks": "작품 130여점, 아키이브 100여점",
      "price": "4,000원",
      "host": "국립현대미술관/이상일문화재단",
      "content": "한국 현대미술의 모더니즘 형식주의 및 추상 미술 발전에 있어 선구적인 역할을 하며 한국 현대미술의 변천을 선도한 박서보의 회고전(b.1931)이다. 한국미술에 내재된 고유한 정신과 조형언어를 자신만의 방식으로 해석한 박서보 작업의 독창성은 물론 미술사적 의미를 살펴본다."
    }
  },
  {
    "name": "안톤비도클",
    "img": "src/asset/img/Seoul/img5.png",
    "contents": {
      "fullname": "모두를 위한 불멸 : 안톤 비도클",
      "date": "2019.05.27 ~ 2019.06.02",
      "author": "안톤 비도클",
      "numOfWorks": "영상 3부작",
      "price": "4,000원",
      "host": "국립현대미술관",
      "content": "이 전시는 모스크바에서 태어나 현재 뉴욕과 베를린을 중심으로 활동하는 작가이자 기획자 안톤 비도클이 2014년도부터 2017년도까지 ‘러시아 우주론’에 관한 동시대적 성찰을 중심으로 제작한 영상 3부작을 소개한다."
    }
  },
  ],
  [{
    "name": "박서보",
    "img": "src/asset/img/Seoul/img4.png",
    "contents": {
      "fullname": "박서보 : 지칠 줄 모르는 수행자",
      "date": "2019.05.25 ~ 2019.06.02",
      "author": "박서보",
      "numOfWorks": "작품 130여점, 아키이브 100여점",
      "price": "4,000원",
      "host": "국립현대미술관/이상일문화재단",
      "content": "한국 현대미술의 모더니즘 형식주의 및 추상 미술 발전에 있어 선구적인 역할을 하며 한국 현대미술의 변천을 선도한 박서보의 회고전(b.1931)이다. 한국미술에 내재된 고유한 정신과 조형언어를 자신만의 방식으로 해석한 박서보 작업의 독창성은 물론 미술사적 의미를 살펴본다."
    }
  },
  {
    "name": "안톤비도클",
    "img": "src/asset/img/Seoul/img5.png",
    "contents": {
      "fullname": "모두를 위한 불멸 : 안톤 비도클",
      "date": "2019.05.27 ~ 2019.06.02",
      "author": "안톤 비도클",
      "numOfWorks": "영상 3부작",
      "price": "4,000원",
      "host": "국립현대미술관",
      "content": "이 전시는 모스크바에서 태어나 현재 뉴욕과 베를린을 중심으로 활동하는 작가이자 기획자 안톤 비도클이 2014년도부터 2017년도까지 ‘러시아 우주론’에 관한 동시대적 성찰을 중심으로 제작한 영상 3부작을 소개한다."
    }
  },
  ],

];

let seoulRecommend4 = [{
    "name": "서울불온",
    "img": "src/asset/img/Seoul/img1.png",
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
    "name": "서울대안",
    "img": "src/asset/img/Seoul/img2.png",
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
    "name": "서울신소장품",
    "img": "src/asset/img/Seoul/img3.png",
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
