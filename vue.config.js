// Plan A:
// module.exports = {
//   css: {
//     loaderOptions: {
//       sass: {
//         data: `
//           @import "@/assets/styles/theme/_colors.scss";
//         `,
//       },
//     },
//   },
// };

// Plan B:
module.exports = {
  chainWebpack: (config) => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store;
    oneOfsMap.forEach((item) => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: [
            './src/assets/styles/index.scss',
          ],
        })
        .end();
    });
  },
};
