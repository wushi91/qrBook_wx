// pages/mybill/billdetail/billdetail.js

const request = require('../../../utils/request.js')
const util = require('../../../utils/util.js')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    payStatuss: {
      nopay: '确认账单',
      haspay: '账单详情',
    },
    payStatus: 'haspay',
    billid:'',
    billBean:{},

  },

  payTheRenter:function(){
    wx.requestPayment({
      'timeStamp': '',
      'nonceStr': '',
      'package': '',
      'signType': 'MD5',
      'paySign': '',
      'success': function (res) {
      },
      'fail': function (res) {
      }
    })
  },

  toGetTheNoPayDeatil:function(billid){
    if(billid){
      let userId = util.getMyUserId()
      request.requestGetUnpayBillDetail(userId,billid,res=>{
        // console.log(res.data)
        let billBean = res.data.list
        billBean.end_time = util.getFormateDate(billBean.end_time)
        billBean.start_time = util.getFormateDate(billBean.start_time) 
        if (res.data.msg==='0'){
          this.setData({
            billBean: billBean,
          })
        }
        
      })
    }
  },

  toGetTheHasPayDeatil:function(billid){
    if (billid) {
      let userId = util.getMyUserId()
      request.requestGetHaspayBillDetail(userId, billid, res => {
        // console.log(res.data)

        if (res.data.msg === '0') {
          let billBean = res.data.list
          billBean.end_time = util.getFormateDate(billBean.end_time)
          billBean.start_time = util.getFormateDate(billBean.start_time) 
          billBean.trading_time = util.formatTime(new Date(billBean.trading_time))
          this.setData({
            billBean: billBean,
          })
        }

      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      payStatus: options.payStatus,
      billid: options.billid
    })
    if (options.payStatus ==='nopay'){
      this.toGetTheNoPayDeatil(options.billid)
    }else{
      this.toGetTheHasPayDeatil(options.billid)
    }
    wx.setNavigationBarTitle({
      title: this.data.payStatuss[this.data.payStatus]
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