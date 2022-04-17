// webpack은 babel이 적용되지 않기 때문에 node.js 모듈방식을 따라야 함
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const config = {
  mode: "development",
  entry: "./src/index.js", // 프로젝트의 시작위치를 지정
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    clean: true,
  }, // webpack이 적용된 결과파일 위치와 파일이름 지정
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      }, // jsx 문법의 리액트 코드를 처리
      {
        test: /\.(sa|sc)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      }, // css 파일도 모듈로 사용
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
            },
          },
        ],
      }, // 개발모드에서 사용한 경로 그대로 파일이 번들, name 설정 안하면 브라우저 캐싱 효과를 활용할 수 없다
    ],
  },
  devServer: {
    static: path.resolve(__dirname, "build"),
    port: 3000,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      output: "index.html",
    }),
  ], // 로더보다 강한 기능을 갖는다. 로더는 특정 모듈에 대한 처리만 담당하지만 웹팩이 실행되는 전체 과정에 개입한다.
};

module.exports = config;
