
const request = require('../../utils/request.js')
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isBlankRoom:true,
    myBindRoom:{fangdongPhoneNum:'sssss',},
  },


  toSearchRoomPage:function(){
    wx.navigateTo({
      url: '../myroom/searchRoom/searchRoom'
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userId = util.getMyUserId()
    request.requestGetMyBindRoominfo(userId,res=>{
      console.log(res.data.list)
      if(res.data.msg==='0'){
        this.setData({
          isBlankRoom:false,
          myBindRoom: res.data.list
        })

      }else{
        this.setData({
          isBlankRoom: true
        })
      }
    })

    
    

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
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