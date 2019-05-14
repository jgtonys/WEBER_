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
      "name": "청주불온",
      "img": "src/asset/img/Cheongju/img1.png",
      "contents": {
        "date": "2019.09.10",
        "author": "누구누구",
        "numOfWorks": "10개",
        "price": "35,000",
        "host": "누구누구주최",
        "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
      }
    },
    {
      "name": "청주대안",
      "img": "src/asset/img/Cheongju/img2.png",
      "contents": {
        "date": "2019.09.10",
        "author": "누구누구",
        "numOfWorks": "10개",
        "price": "35,000",
        "host": "누구누구주최",
        "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
      }
    },
    {
      "name": "청주신소장품",
      "img": "src/asset/img/Cheongju/img3.png",
      "contents": {
        "date": "2019.09.10",
        "author": "누구누구",
        "numOfWorks": "10개",
        "price": "35,000",
        "host": "누구누구주최",
        "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
      }
    },
  ],
  [{
      "name": "청주테스트",
      "img": "src/asset/img/Cheongju/img1.png",
      "contents": {
        "date": "2019.09.10",
        "author": "누구누구",
        "numOfWorks": "10개",
        "price": "35,000",
        "host": "누구누구주최",
        "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
      }
    },
    {
      "name": "청주테스트",
      "img": "src/asset/img/Cheongju/img1.png",
      "contents": {
        "date": "2019.09.10",
        "author": "누구누구",
        "numOfWorks": "10개",
        "price": "35,000",
        "host": "누구누구주최",
        "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
      }
    },
    {
      "name": "청주테스트",
      "img": "src/asset/img/Cheongju/img1.png",
      "contents": {
        "date": "2019.09.10",
        "author": "누구누구",
        "numOfWorks": "10개",
        "price": "35,000",
        "host": "누구누구주최",
        "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
      }
    },
  ],
  [{
      "name": "청주테스트",
      "img": "src/asset/img/Cheongju/img1.png",
      "contents": {
        "date": "2019.09.10",
        "author": "누구누구",
        "numOfWorks": "10개",
        "price": "35,000",
        "host": "누구누구주최",
        "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
      }
    },
    {
      "name": "청주테스트",
      "img": "src/asset/img/Cheongju/img1.png",
      "contents": {
        "date": "2019.09.10",
        "author": "누구누구",
        "numOfWorks": "10개",
        "price": "35,000",
        "host": "누구누구주최",
        "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
      }
    },
    {
      "name": "청주테스트",
      "img": "src/asset/img/Cheongju/img1.png",
      "contents": {
        "date": "2019.09.10",
        "author": "누구누구",
        "numOfWorks": "10개",
        "price": "35,000",
        "host": "누구누구주최",
        "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
      }
    },
  ],
  [{
      "name": "청주테스트",
      "img": "src/asset/img/Cheongju/img1.png",
      "contents": {
        "date": "2019.09.10",
        "author": "누구누구",
        "numOfWorks": "10개",
        "price": "35,000",
        "host": "누구누구주최",
        "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
      }
    },
    {
      "name": "청주테스트",
      "img": "src/asset/img/Cheongju/img1.png",
      "contents": {
        "date": "2019.09.10",
        "author": "누구누구",
        "numOfWorks": "10개",
        "price": "35,000",
        "host": "누구누구주최",
        "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
      }
    },
    {
      "name": "청주테스트",
      "img": "src/asset/img/Cheongju/img1.png",
      "contents": {
        "date": "2019.09.10",
        "author": "누구누구",
        "numOfWorks": "10개",
        "price": "35,000",
        "host": "누구누구주최",
        "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
      }
    },
  ],
  [{
      "name": "청주테스트",
      "img": "src/asset/img/Cheongju/img1.png",
      "contents": {
        "date": "2019.09.10",
        "author": "누구누구",
        "numOfWorks": "10개",
        "price": "35,000",
        "host": "누구누구주최",
        "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
      }
    },
    {
      "name": "청주테스트",
      "img": "src/asset/img/Cheongju/img1.png",
      "contents": {
        "date": "2019.09.10",
        "author": "누구누구",
        "numOfWorks": "10개",
        "price": "35,000",
        "host": "누구누구주최",
        "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
      }
    },
    {
      "name": "청주테스트",
      "img": "src/asset/img/Cheongju/img1.png",
      "contents": {
        "date": "2019.09.10",
        "author": "누구누구",
        "numOfWorks": "10개",
        "price": "35,000",
        "host": "누구누구주최",
        "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
      }
    },
  ],
  [{
      "name": "청주테스트",
      "img": "src/asset/img/Cheongju/img1.png",
      "contents": {
        "date": "2019.09.10",
        "author": "누구누구",
        "numOfWorks": "10개",
        "price": "35,000",
        "host": "누구누구주최",
        "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
      }
    },
    {
      "name": "청주테스트",
      "img": "src/asset/img/Cheongju/img1.png",
      "contents": {
        "date": "2019.09.10",
        "author": "누구누구",
        "numOfWorks": "10개",
        "price": "35,000",
        "host": "누구누구주최",
        "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
      }
    },
    {
      "name": "청주테스트",
      "img": "src/asset/img/Cheongju/img1.png",
      "contents": {
        "date": "2019.09.10",
        "author": "누구누구",
        "numOfWorks": "10개",
        "price": "35,000",
        "host": "누구누구주최",
        "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
      }
    },
  ],
  [{
      "name": "청주테스트",
      "img": "src/asset/img/Cheongju/img1.png",
      "contents": {
        "date": "2019.09.10",
        "author": "누구누구",
        "numOfWorks": "10개",
        "price": "35,000",
        "host": "누구누구주최",
        "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
      }
    },
    {
      "name": "청주테스트",
      "img": "src/asset/img/Cheongju/img1.png",
      "contents": {
        "date": "2019.09.10",
        "author": "누구누구",
        "numOfWorks": "10개",
        "price": "35,000",
        "host": "누구누구주최",
        "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
      }
    },
    {
      "name": "청주테스트",
      "img": "src/asset/img/Cheongju/img1.png",
      "contents": {
        "date": "2019.09.10",
        "author": "누구누구",
        "numOfWorks": "10개",
        "price": "35,000",
        "host": "누구누구주최",
        "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
      }
    },
  ]
];

let cheongjuRecommend = [{
    "name": "청주불온",
    "img": "src/asset/img/Cheongju/img1.png",
    "contents": {
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
      "date": "2019.09.10",
      "author": "누구누구",
      "numOfWorks": "10개",
      "price": "35,000",
      "host": "누구누구주최",
      "content": "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
    }
  }
];
