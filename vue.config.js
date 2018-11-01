// const path = require('path');
//
// module.exports = {
//   lintOnSave: false,
//   css: {
//     loaderOptions: {
//       sass:
//         {
//           data: path.resolve('./src/assets/styles/theme/_colors.scss'),
//         },
//     },
//   },
//   chainWebpack: (config) => {
//     config
//       .module
//       .rule('scss')
//       .use('sass-resources-loader')
//       .loader('sass-resources-loader')
//       .options({
//         resources: [
//           path.resolve('./src/assets/styles/theme/_colors.scss'),
//         ],
//       });
//   },
// };
