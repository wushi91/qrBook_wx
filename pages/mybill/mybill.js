// pages/mybill/mybill.js

const app = getApp()

const request = require('../../utils/request.js')
const util = require('../../utils/util.js')
// const test = require('../../utils/test.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isBlankBill:false,
    payStatus:'nopay',
    noPayOrederList: [],
    hasPayOrederList: []
  },


  payTabClick: function (e) {
    this.setData({
      payStatus: e.currentTarget.dataset.paystatus
    })
  },

  toBillDeatil:function(e){
    var payStatus = this.data.payStatus
    let billid = e.currentTarget.dataset.billid
    wx.navigateTo({
      url: "/pages/mybill/billdetail/billdetail?payStatus=" + payStatus + "&billid=" + billid
    })
  },

  toShowBlank(){
    this.setData({
      isBlankBill: this.data.noPayOrederList.length === 0 && this.data.hasPayOrederList.length === 0
    })
  },

  toGetAllBillList: function (){
    let userId = util.getMyUserId()
    //待支付的账单列表
    request.requestGetUnpayBillList(userId, res => {
      // console.log(res.data)
      if (res.data.msg === '0') {
        let noPayOrederList = res.data.list

        for (let i = 0; i < noPayOrederList.length; i++) {
          let item = noPayOrederList[i]
          item.end_time = util.getFormateDate(item.end_time)
          item.start_time = util.getFormateDate(item.start_time) 
        }
       
        this.setData({
          noPayOrederList: noPayOrederList
        })
      } else {
        this.setData({
          noPayOrederList: []
        })
      }
      this.toShowBlank()
    })

    request.requestGetHaspayBillList(userId, res => {
      // console.log(res.data)

      if (res.data.msg === '0') {
        let hasPayOrederList = res.data.list
        for (let i = 0; i < hasPayOrederList.length; i++) {
          let item = hasPayOrederList[i]
          item.end_time = util.getFormateDate(item.end_time)
          item.start_time = util.getFormateDate(item.start_time)
        }

        this.setData({
          hasPayOrederList: hasPayOrederList
        })
      } else {
        this.setData({
          hasPayOrederList: []//res.data.list
        })
      }
      this.toShowBlank()
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // util.test()
    // test.test()
    app.updateMyBillPage = this.toGetAllBillList
    let userId = util.getMyUserId()
    if (!userId) {
      //还没有登录
      this.toShowBlank()
      return
    }

    this.toGetAllBillList()
    
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