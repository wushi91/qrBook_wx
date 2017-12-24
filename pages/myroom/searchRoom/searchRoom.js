// pages/searchRoom/searchRoom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['广东省', '深圳市', '海珠区'],
    houseGuessList: [{ name: 'B101' }, { name: 'B201' }, { name: 'B301' }, { name: 'B401' }],
    i:0,
  },


  toConfirmTheHouse: function () {
    if(this.data.i===0){
      this.roomHasNoTips()
      this.setData({
        i: 1
      })
    }
    else{
      wx.redirectTo({
        url: '/pages/myroom/confirmRoom/confirmRoom'
      })
    }
    
    
  },

  roomHasNoTips: function () {
    wx.showModal({
      title: '没有找到该房源',
      content: '请先联系房东添加房源和租客信息',
      showCancel: false,
      confirmText: '确定',
      confirmColor: '#2E8AE6',
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