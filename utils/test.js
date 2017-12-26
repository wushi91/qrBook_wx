
const util = require('../utils/util.js')

function monthDay(year, month) {
  month = parseInt(month, 10);
  var d = new Date(year, month, 0);  //这个是都可以兼容的
  var date = new Date(year + "/" + month + "/0")   //IE浏览器可以获取天数，谷歌浏览器会返回NaN
  return d.getDate();
}

function getDayToAdd(yy,mm,dd,length){
  // let nyy =0
  // let nmm =0
  // let ndd =0

  let totalAdd = 0


if(length==1){
  if(dd==1){
    return monthDay(yy,mm)
  }else{ 
   mm = mm+1
    if (dd - 1 > monthDay(yy, mm)){
      console.log('ssss')
      return monthDay(yy, mm)
    }else{
      console.log('hhhh')
      return dd - 1
    }
  }
}

// for(let j=0;j<5;j++){
//   console.log(j)
// }
  for(let i=0;i<length;i++){
    let needAdd = 0
    if(i==0){
      needAdd = monthDay(yy, mm) - dd
    }else if(i==length-1){
      needAdd = monthDay(yy, mm)
    }else{
      needAdd = dd
      if (neeAdd > monthDay(yy, mm)){
        needAdd = monthDay(yy, mm)
      }
    }
    totalAdd = totalAdd + needAdd
  }
  return totalAdd
}

function test(){
  let nyy = 2008
  let nmm = 8
  let ndd = 9
  //2008-8-9
  let d = new Date()
  d.setFullYear(nyy)
  d.setMonth(nmm - 1)
  d.setDate(ndd)
  
  
  console.log("------")

  console.log(util.formatTime(d))


  let needAddDay = getDayToAdd(nyy, nmm, ndd,1)

  d.setDate(d.getDate() + needAddDay)
  console.log("//////////")
  console.log(util.formatTime(d))
}


module.exports = {

  test: test
  // hasUserInfoAuth: hasUserInfoAuth,
  // loginTogetMyUserId: loginTogetMyUserId,
  // getWxUserInfo: getWxUserInfo,
  // saveMyUserId: saveMyUserId
}