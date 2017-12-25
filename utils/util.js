const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


const myLogin = function(){

  //没有登录的情况
  //点击获取授权，如果已经授权，就进行登录。如果没有授权，就请求授权，授权成功后进行登录，如果没有授权成功，就啥都不做了。
  //登录成功后（user_id）才显示用户信息。

  //登录的情况。证明已经授权了，直接显示用户信息。

  // 获取用户信息
  wx.getSetting({
    success: res => {
      if (res.authSetting['scope.userInfo']) {
        // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
        wx.getUserInfo({
          success: res => {
            // 可以将 res 发送给后台解码出 unionId
            this.globalData.userInfo = res.userInfo

            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            if (this.userInfoReadyCallback) {
              this.userInfoReadyCallback(res)
            }
          }
        })
      }
    }
  })
}


const loginTogetMyUserId = function (wxCode,wxUserInfo){
  wx.request({
    url: 'test.php', //仅为示例，并非真实的接口地址
    data: {
      code: wxCode,
      userInfo: wxUserInfo
    },
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function (res) {
      console.log(res.data)
    }
  })
}

const getMyUserId= function(){
  return wx.getStorageSync('user_id')||''
}

const saveMyUserId = function (user_id){
  wx.setStorageSync('user_id', user_id)
}


const getWxUserInfo = function(toCallback){

  wx.getUserInfo({
    success: res => {
      if (toCallback) {
        toCallback(res.userInfo)
      }
    }
  })
  // wx.getSetting({
  //   success: res => {
  //     if (res.authSetting['scope.userInfo']) {
  //       console.log('有授权')
        
  //     }
  //   }
  // })
} 

const hasUserInfoAuth = function(callback){
  wx.getSetting({
    success: res => {
      if (res.authSetting['scope.userInfo']) {
        console.log('有授权')
      }else{
        console.log('还没有授权')
      }
    }
  })
}



module.exports = {
  formatTime: formatTime,
  loginTogetMyUserId: loginTogetMyUserId,
  getWxUserInfo: getWxUserInfo,
  getMyUserId: getMyUserId,
  hasUserInfoAuth: hasUserInfoAuth,
  saveMyUserId: saveMyUserId
}


