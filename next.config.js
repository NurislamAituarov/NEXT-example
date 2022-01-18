module.exports = {
  reactStrictMode: true,

  env: {
    API_URL: 'http://localhost:4200',
  },

  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg?$/,
      oneOf: [
        {
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                prettier: false,
                svgo: true,
                svgoConfig: {
                  plugins: [{ removeViewBox: false }],
                },
                titleProp: true,
              },
            },
          ],
          issuer: {
            and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
          },
        },
      ],
    });

    return config;
  },

  // webpack(config, options) {
  //   config.module.rules.push({
  //     loader: ['@svgr/webpack'],
  //     // issuer: /\.[jt]sx?$/,
  //     issuer: { and: [/\.(js|ts|md)x?$/] },
  //     options: {
  //       prettier: false,
  //       svgo: true,
  //       svgoConfig: {
  //         plugins: [
  //           {
  //             name: 'preset-default',
  //             params: {
  //               overrides: {
  //                 removeViewBox: false,
  //               },
  //             },
  //           },
  //         ],
  //       },
  //       titleProp: true,
  //     },
  //     test: /\.svg$/,
  //   });

  //   return config;
  // },
};
