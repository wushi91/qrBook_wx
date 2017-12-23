// pages/myinfo/myinfo.js

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'微信授权登录',
    headerimagesrc:'/images/unlogin-header-image.png',
  },

  wxLogin:function(){
    console.log('ssss')

    // wx.openSetting({
    //   success: (res) => {
        
    //       res.authSetting = {
    //        "scope.userInfo": false,
    //        "scope.userLocation": true
    //       }
         
    //   }
    // })
    // wx.login({
    //   success:res=>{
    //     console.log(res)
    //   }
    // })

    wx.getUserInfo({
      success: res => {
        app.globalData.userInfo = res.userInfo
        this.setData({
          username: res.userInfo.nickName,
          headerimagesrc: res.userInfo.avatarUrl,
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})