// pages/login/login.js
const app = getApp()
const gdata = app.globalData
const log = "【登录页面】"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    sysInfo: gdata.sysInfo,
    value: 25
  },
  methodGotUserInfo: function(e) {
    let name = "【methodGotUserInfo】"
    if (e.detail.userInfo) {
      gdata.userInfo = e.detail.userInfo
      console.info(log, name, e.detail)
      this.methodGotoHome()
    } else {
      console.info(log, name, '用户不允许微信授权')
    }
    // console.log(e.detail.errMsg)
    // console.log(e.detail.userInfo)
    // console.log(e.detail.rawData)
  },
  methodGotoHome: function() {
    let name = "【methodGotoHome】"
    console.info(log, name, '切换到主页面')
    wx.redirectTo({
      url: '/pages/home/home'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let name = "【onLoad】"
    if (gdata.userInfo) {
      console.info(log, name, '用户已允许过微信授权，可以跳转到首页了', gdata.userInfo)
      this.methodGotoHome()
    } else {
      console.info(log, name, '用户未进行过微信授权，停留当前页面')
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})