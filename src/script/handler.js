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
        document.getElementById("iframe_map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101284.13410307924!2d126.9299461996947!3d37.50487102355629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2ed7e746c37%3A0x94e9dea2d7bf466d!2z6rWt66a97ZiE64yA66-47Iig6rSA!5e0!3m2!1sko!2skr!4v1557899183635!5m2!1sko!2skr";
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
        document.getElementById("iframe_map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12649.013284922932!2d126.96827588293273!3d37.57265217674595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4f0b7fddc216fc3!2z6rWt66a97ZiE64yA66-47Iig6rSAIOuNleyImOq2geq0gA!5e0!3m2!1sko!2skr!4v1557899076449!5m2!1sko!2skr";
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
        document.getElementById("iframe_map").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.753261884332!2d126.97863686504479!3d37.57952725042923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2c14dacd53d%3A0x205c23120e574816!2z6rWt66a97ZiE64yA66-47Iig6rSAIOyEnOyauOq0gA!5e0!3m2!1sko!2skr!4v1557898908841!5m2!1sko!2skr"
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
        document.getElementById("iframe_map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200.79286240197!2d127.4880026151129!3d36.65543347997859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565278d8298e149%3A0xd5a6eecde9138557!2z6rWt66a97ZiE64yA66-47Iig6rSAIOyyreyjvOq0gA!5e0!3m2!1sko!2skr!4v1557899121053!5m2!1sko!2skr";
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
      } else if (this.location == 1) {
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
      } else if (this.location == 2) {
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
      } else if (this.location == 3) {
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
