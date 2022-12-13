/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxb770c3467dbcae0b',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '7afcf865654e16e3ed88657cdaeb6e73',

  PROVINCE: '江苏',
  CITY: '苏州',
  TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: '13077c41a46cc5bb950d05226e820b31',
    
    /** 天行API相关，需要config中配置 TIAN_API_KEY  */
    // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    morningGreeting: false,
  
    // 晚安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    eveningGreeting: false,
  
    // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: 0,
  
    // 全网热搜榜（展示N条，最多30条）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    networkHot: 10,
  
    // 全网热搜榜展示类型，默认展示概要信息: ['title': 仅展示标题, 'default': 展示概要信息]
    networkHotType: 'default',
  },
  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oWprX5vFQnMlF_zvqPVTEeyAaMGY',
      // 使用微信测试号：你想对他发送的消息的模板ID
      useTemplateId: 'gkwZMNu9PHizMhG8kv9mOYE4-jMYYCyTfCOUCzTGKsc',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-22',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '宝贝津津', year: '1996', date: '01-22',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小马', year: '1996', date: '04-10',
        },
        {
          type: '节日', name: '亲亲日', year: '2018', date: '06-06',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2018-06-06' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '6iYXKGPWsgaI1Bs-NAA2H35CG56wioZ2GuoBl0wdndM',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oWprX5vFQnMlF_zvqPVTEeyAaMGY',
    }
  ],

}

module.exports = USER_CONFIG

