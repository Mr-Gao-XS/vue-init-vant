const regexp = {
  // 手机号正则
  phoneReg(phone) {
    return !/^1[3456789]\d{9}$/.test(phone)
  },
}

export default regexp
