const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

// module.exports = {
//   name: "webpack-setting",
//   mode: "development", // 실서비스 : production
//   devtool: "eval", // 빠르게

//   entry: {
//     //제일 중요!
//     app: ["./index.jsx"],
//   }, // 입력
//   output: {
//     path: path.join(__dirname, "dist"), // 현재 폴더의 dist폴더에 생성
//     filename: "app.js",
//     publicPath: ".", // 추가
//   }, // 출력

//   module: {
//     rules: [
//       {
//         test: /\.jsx?/,
//         loader: "babel-loader",
//         options: {
//           presets: ["@babel/preset-env", "@babel/preset-react"],
//         },
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"],
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, "index.html"),
//     }),
//   ],
// };

module.exports = {
  name: "webpack-setting",
  mode: "development", // 실서비스 : production
  devtool: "eval", // production : hidden-source-map
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: {
    //제일 중요!
    app: "./index",
  }, // 입력

  // entry에 있는 파일을 읽고 module을 적용한 후 output
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 1% in KR"], // browserslist
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-refresh/babel",
          ],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    //빌드 할때마다 실행됨
    new RefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
    }),
  ],
  output: {
    path: path.join(__dirname, "dist"), // 경로를 합쳐줌
    filename: "app.js",
    publicPath: ".",
  }, // 출력
  devServer: {
    static: { directory: path.resolve(__dirname) },
    port: 8080,
    devMiddleware: { publicPath: "/dist/" },
    hot: true,
  },
};
