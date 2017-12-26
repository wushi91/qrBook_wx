const host = 'http://192.168.2.220:8080'

//登录
const login_get_user_id_url = host+'/rentBook/user/authorise.do'
//搜索房源 该市所有房源下
const to_search_house_url = host +'/rentBook/tenant/findAddress.do'
//获取手机验证码
const get_message_code_url = host + '/rentBook/landlord/getResetCode.do'
//验证手机验证码
const check_message_code_url = host + '/rentBook/landlord/checkBindCode.do'
//绑定房源
const to_confirm_house_url = host +'/rentBook/tenant/userBanding.do'
//待支付的账单列表
const get_unpay_billlist_url = host + '/rentBook/tenant/getUserPayment.do'
//已支付的账单列表
const get_haspay_billlist_url = host + '/rentBook/tenant/TenantPaid.do'
//待支付的账单详细
const get_unpay_billdetail_url = host + '/rentBook/tenant/getRentPaymentInfo.do'
//已支付的账单详细
const get_haspay_billdetail_url = host + '--'
//获取我的绑定房源
const get_mybind_room_url = host + '/rentBook/tenant/showBind.do'


//登录
const requestLoginTogetMyUserId = function (wxCode, wxUserInfo, success) {
  wx.request({
    url: login_get_user_id_url, 
    data: {
      code: wxCode,
      userInfo: wxUserInfo
    },
    success: success,
  })
}

//搜索房源 该市所有房源下
const requestToSearchHouse = function (province, city, address,success) {
  wx.request({
    url: to_search_house_url,
    data: {
      province: province,
      city: city,
      address: address
    },
    success: success,
  })
}

//获取手机验证码
const requestGetMessageCode = function (phoneNumber, success) {
  wx.request({
    url: get_message_code_url,
    data: {
      phoneNumber: phoneNumber
    },
    success: success,
  })
}

//验证手机验证码
const requestCheckMessageCode = function (phoneNumber, messageCode,success) {
  wx.request({
    url: check_message_code_url,
    data: {
      phoneNumber: phoneNumber,
      inputverificationCode: messageCode
    },
    success: success,
  })
}

//绑定房源
const requestToConfirmHouse = function (bookid, phoneNumber, user_id,success){
  wx.request({
    url: to_confirm_house_url,
    data: {
      id: bookid,
      phoneNumber: phoneNumber,
      user_id: user_id
    },
    success: success,
  })
}

//待支付的账单列表
const requestGetUnpayBillList = function (user_id, success) {
  wx.request({
    url: get_unpay_billlist_url,
    data: {
      user_id: user_id
    },
    success: success,
  })
}


//已支付的账单列表
const requestGetHaspayBillList = function (user_id, success) {
  wx.request({
    url: get_haspay_billlist_url,
    data: {
      user_id: user_id
    },
    success: success,
  })
}
//待支付的账单详细
const requestGetUnpayBillDetail = function (billid,user_id, success) {
  wx.request({
    url: get_unpay_billdetail_url,
    data: {
      id: billid,
      user_id: user_id
    },
    success: success,
  })
}
//已支付的账单详细
const requestGetHaspayBillDetail = function (billid, user_id, success) {
  wx.request({
    url: get_haspay_billdetail_url,
    data: {
      id: billid,
      user_id: user_id
    },
    success: success,
  })
}
//获取我的绑定房源
const requestGetMyBindRoominfo = function ( user_id, success) {
  wx.request({
    url: get_mybind_room_url,
    data: {
      user_id: user_id
    },
    success: success,
  })
}











module.exports = {
  requestLoginTogetMyUserId: requestLoginTogetMyUserId,
  requestToSearchHouse: requestToSearchHouse,
  requestGetMessageCode: requestGetMessageCode,
  requestCheckMessageCode: requestCheckMessageCode,
  requestToConfirmHouse: requestToConfirmHouse, 
  requestGetUnpayBillList: requestGetUnpayBillList,
  requestGetHaspayBillList: requestGetHaspayBillList,
  requestGetUnpayBillDetail: requestGetUnpayBillDetail,
  requestGetHaspayBillDetail: requestGetHaspayBillDetail,
  requestGetMyBindRoominfo: requestGetMyBindRoominfo
}