/*
 * @Author: zhang
 * @Date: 2019-08-23 16:24:26
 * @Last Modified by: zhang
 * @Last Modified time: 2019-08-23 16:25:50
 */


require('babel-core/register')({
  presets: [
    [
      'env',
      {
        targets: {
          node: true
        }
      }
    ]
  ]
})

require('./app.js')
