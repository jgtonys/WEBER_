var contents = new Vue({
  el: '#con',
  data: {
    location: 0,
    location_list: locationList,
    week: gwacheonData,
    recommend: gwacheonRecommend,
    contentDetail: false,
    detail: detailStructure
  },
  methods: {
    changeMenu(n) {
      this.location = n;
      if (n == 0) {
        switch (weekvar) {
          case 0:
            this.week = gwacheonData;
            this.recommend = gwacheonRecommend;
            break;
          case 1:
            this.week = gwacheonData2;
            this.recommend = gwacheonRecommend;
            break;
          case 2:
            this.week = gwacheonData3;
            this.recommend = gwacheonRecommend;
            break;
          case 3:
            this.week = gwacheonData4;
            this.recommend = gwacheonRecommend;
            break;
        }
      } else if (n == 1) {
        switch (weekvar) {
          case 0:
            this.week = deoksugungData;
            this.recommend = deoksugungRecommend;
            break;
          case 1:
            this.week = deoksugungData2;
            this.recommend = deoksugungRecommend;
            break;
          case 2:
            this.week = deoksugungData3;
            this.recommend = deoksugungRecommend;
            break;
          case 3:
            this.week = deoksugungData4;
            this.recommend = deoksugungRecommend;
            break;
        }
      } else if (n == 2) {
        switch (weekvar) {
          case 0:
            this.week = seoulData;
            this.recommend = seoulRecommend;
            break;
          case 1:
            this.week = seoulData2;
            this.recommend = seoulRecommend;
            break;
          case 2:
            this.week = seoulData3;
            this.recommend = seoulRecommend;
            break;
          case 3:
            this.week = seoulData4;
            this.recommend = seoulRecommend;
            break;
        }
      } else if (n == 3) {
        switch (weekvar) {
          case 0:
            this.week = cheongjuData;
            this.recommend = cheongjuRecommend;
            break;
          case 1:
            this.week = cheongjuData2;
            this.recommend = cheongjuRecommend;
            break;
          case 2:
            this.week = cheongjuData3;
            this.recommend = cheongjuRecommend;
            break;
          case 3:
            this.week = cheongjuData4;
            this.recommend = cheongjuRecommend;
            break;
        }
      }
      this.contentDetail = false;
    },
    changeweek() {
      if (this.location == 0) {
        switch (weekvar) {
          case 0:
            this.week = gwacheonData;
            this.recommend = gwacheonRecommend;
            break;
          case 1:
            this.week = gwacheonData2;
            this.recommend = gwacheonRecommend2;
            break;
          case 2:
            this.week = gwacheonData3;
            this.recommend = gwacheonRecommend3;
            break;
          case 3:
            this.week = gwacheonData4;
            this.recommend = gwacheonRecommend4;
            break;
        }
      } else if (this.location == 1) {
        switch (weekvar) {
          case 0:
            this.week = deoksugungData;
            this.recommend = deoksugungRecommend;
            break;
          case 1:
            this.week = deoksugungData2;
            this.recommend = deoksugungRecommend2;
            break;
          case 2:
            this.week = deoksugungData3;
            this.recommend = deoksugungRecommend3;
            break;
          case 3:
            this.week = deoksugungData4;
            this.recommend = deoksugungRecommend4;
            break;
        }
      } else if (this.location == 2) {
        switch (weekvar) {
          case 0:
            this.week = seoulData;
            this.recommend = seoulRecommend;
            break;
          case 1:
            this.week = seoulData2;
            this.recommend = seoulRecommend2;
            break;
          case 2:
            this.week = seoulData3;
            this.recommend = seoulRecommend3;
            break;
          case 3:
            this.week = seoulData4;
            this.recommend = seoulRecommend4;
            break;
        }
      } else if (this.location == 3) {
        switch (weekvar) {
          case 0:
            this.week = cheongjuData;
            this.recommend = cheongjuRecommend;
            break;
          case 1:
            this.week = cheongjuData2;
            this.recommend = cheongjuRecommend2;
            break;
          case 2:
            this.week = cheongjuData3;
            this.recommend = cheongjuRecommend3;
            break;
          case 3:
            this.week = cheongjuData4;
            this.recommend = cheongjuRecommend4;
            break;

        }
      }
      this.contentDetail = false;
    },
    showDetail(obj) {
      console.log(obj);
      this.detail = obj;
      this.contentDetail = true;
    }
  }
})

var weekvar = 0;
var weekstr = "2019.05.19~2019.05.25";

function menuSelect(n) {
  contents.changeMenu(n);
}

function outWeek() {
  switch (weekvar) {
    case 0:
      weekstr = "2019.05.19~2019.05.25";
      break;
    case 1:
      weekstr = "2019.05.26~2019.06.01";
      break;
    case 2:
      weekstr = "2019.06.02~2019.06.08";
      break;
    case 3:
      weekstr = "2019.06.09~2019.06.15";
      break;
  }
  alert(weekstr);
  document.write(weekstr);
}

function goNextWeek(n) {
  if (weekvar == 3) {
    alert("다음 정보가 없습니다.");
    return 0;
  }
  weekvar += 1;
  switch (weekvar) {
    case 0:
      weekstr = "2019.05.19~2019.05.25";
      break;
    case 1:
      weekstr = "2019.05.26~2019.06.01";
      break;
    case 2:
      weekstr = "2019.06.02~2019.06.08";
      break;
    case 3:
      weekstr = "2019.06.09~2019.06.15";
      break;
  }
  document.getElementById('weekval').innerHTML = weekstr;
  contents.changeweek(n);
}

function goPrevWeek(n) {
  if (weekvar == 0) alert("이전 정보가 없습니다.");
  if (weekvar > 0) {
    weekvar -= 1;
  }
  switch (weekvar) {
    case 0:
      weekstr = "2019.05.19~2019.05.25";
      break;
    case 1:
      weekstr = "2019.05.26~2019.06.01";
      break;
    case 2:
      weekstr = "2019.06.02~2019.06.08";
      break;
    case 3:
      weekstr = "2019.06.09~2019.06.15";
      break;
  }
  document.getElementById('weekval').innerHTML = weekstr;
  contents.changeweek(n);
}
