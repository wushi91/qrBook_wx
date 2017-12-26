const request = require('../../../utils/request.js')
const util = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneNum:'13822542317',
    messageCode:'647161',
    bookid:''
  },

  chooseTheHouse:function(){
    //首先验证短信码
    request.requestCheckMessageCode(this.data.phoneNum, this.data.messageCode,res=>{
      console.log('验证短信码')
      console.log(res.data)
      if (res.data.msg==="0"){
        //之后要进行绑定房源
        this.bindTheHouse()
      }
    })
    // wx.redirectTo({
    //   url: "/pages/operaResult/operaResult?operaType=confirm_house_success",
    // })
  },

  bindTheHouse:function(){
    if (!this.data.bookid) {
      //不存在的房源
      console.log('房源不存在')
    }
    let userId = util.getMyUserId()
    request.requestToConfirmHouse(this.data.bookid, this.data.phoneNum, userId, res => {

      if (res.data.msg === "0") {
        //绑定成功，跳转页面
        wx.redirectTo({
          url: "/pages/operaResult/operaResult?operaType=confirm_house_success",
        })
      }
    })
  },
  bindinputPhoneNum:function(e){
    let phoneNum = e.detail.value
    this.setData({
      phoneNum: phoneNum
    })
  },

  bindinputMessage: function (e) {
    let messageCode = e.detail.value
    this.setData({
      messageCode: messageCode
    })
  },


  getMessageCode:function(){
    console.log('getMessageCode')
    console.log(this.data.phoneNum)
    request.requestGetMessageCode(this.data.phoneNum,res=>{
      console.log(res.data)
    })

    

    // requestGetMessageCode: requestGetMessageCode,
    //   requestCheckMessageCode: requestCheckMessageCode
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
      bookid: options.bookid
    })
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