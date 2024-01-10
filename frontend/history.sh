#? Commands history

# Install global npm package for npm
sudo npm i -g npm

# Install required packages for React development
yarn add react react-dom

# Bundler with Webpack
yarn add -D webpack webpack-cli webpack-dev-server
yarn add -D html-webpack-plugin
yarn add -D mini-css-extract-plugin css-loader style-loader
yarn add -D css-minimizer-webpack-plugin terser-webpack-plugin clean-webpack-plugin
touch webpack.config.dev.js webpack.config.prod.js &&
  npm pkg set scripts.dev="webpack serve --config webpack.config.dev.js" &&
  npm pkg set scripts.build="webpack --config webpack.config.prod.js"

# Hosting with GitHub Pages
yarn add -D gh-pages cname-webpack-plugin &&
  npm pkg set scripts.predeploy="npm run lint && npm run build" &&
  npm pkg set scripts.deploy="gh-pages -d dist"

# TypeScript
yarn add -D typescript ts-loader @types/react @types/react-dom &&
  touch tsconfig.json

# Styling with Tailwind CSS
yarn add -D tailwindcss postcss-loader autoprefixer &&
  yarn tailwindcss init -p

# Formatter with Prettier
yarn add -D prettier prettier-plugin-tailwindcss &&
  touch .prettierrc.json &&
  npm pkg set scripts.format="prettier --write ."

# Linter with ESLint
yarn add -D eslint && yarn eslint --init &&
  npm pkg set scripts.lint="eslint . --ext .ts,.tsx"

# Local server with serve
yarn add -D serve &&
  npm pkg set scripts.start="npm run build && serve -s dist -l 3000"

# Git hooks with Husky
yarn add -D husky &&
  yarn husky install &&
  yarn husky add .husky/pre-push "npm run lint" &&
  npm pkg set scripts.prepare="husky install"

# Extra packages
yarn add react-router-dom
yarn add redux react-redux @reduxjs/toolkit
yarn add axios
