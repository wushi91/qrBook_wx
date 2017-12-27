const app = getApp()

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

    let userId = util.getMyUserId()
    if (!userId) {
      //未登录
      this.loginTips()
      return
    }
    wx.navigateTo({
      url: '../myroom/searchRoom/searchRoom'
    })
  },


  loginTips: function () {
    wx.showModal({
      title: '',
      content: '请先登录',
      showCancel: false,
      confirmText: '确定',
      confirmColor: '#2E8AE6',
      success: function (res) {
        if (res.confirm) {
          wx.switchTab({
            url: '../myinfo/myinfo',
          })
        } else if (res.cancel) {
          // console.log('用户点击取消')
        }
      }
    })
  },

  toGetMyBindRoom:function(){
    let userId = util.getMyUserId()
    if (!userId){
      //未登录
      return
    }
    request.requestGetMyBindRoominfo(userId, res => {
      
      if (res.data.msg === '0') {
        let myBindRoom = res.data.list
        myBindRoom.end_time = util.getFormateDate(myBindRoom.end_time)
        myBindRoom.start_time = util.getFormateDate(myBindRoom.start_time) 
        this.setData({
          isBlankRoom: false,
          myBindRoom: myBindRoom
        })

      } else {
        this.setData({
          isBlankRoom: true
        })
      }
    })

  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    // wx.showToast({
    //   title: '成功',
    //   icon: 'success',
    //   duration: 2000
    // })
    this.toGetMyBindRoom()
    app.updateMyRoomPage = this.toGetMyBindRoom//监听
    

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // console.log('onHide')
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