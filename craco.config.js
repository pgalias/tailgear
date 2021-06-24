const { addBeforeLoader, loaderByName } = require('@craco/craco');
const images = require('remark-images');
const slug = require('remark-slug');
const prism = require('@mapbox/rehype-prism');

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    configure(config) {
      config.resolve.extensions.push('.mdx');

      const mdxLoader = {
        test: /\.mdx$/,
        use: [
          {
            loader: require.resolve('babel-loader')
          },
          {
            loader: require.resolve('@mdx-js/loader'),
            options: {
              remarkPlugins: [images, slug],
              rehypePlugins: [prism],
            }
          }
        ]
      };

      addBeforeLoader(config, loaderByName('file-loader'), mdxLoader);

      return config;
    },
  }
}
