const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  name: "webpack-setting",
  mode: "development", // 실서비스 : production
  devtool: "eval", // 빠르게

  entry: {
    //제일 중요!
    app: ["./index.jsx"],
  }, // 입력
  output: {
    path: path.join(__dirname, "dist"), // 현재 폴더의 dist폴더에 생성
    filename: "app.js",
    publicPath: ".", // 추가
  }, // 출력

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
    }),
  ],
};
