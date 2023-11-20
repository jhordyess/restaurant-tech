#? Commands history

# Install global npm package for npm
sudo npm i -g npm

# Install required packages for React development
yarn add react react-dom

# Bundler
yarn add -D webpack webpack-cli webpack-dev-server
yarn add -D html-webpack-plugin
yarn add -D mini-css-extract-plugin css-loader style-loader
yarn add -D css-minimizer-webpack-plugin terser-webpack-plugin clean-webpack-plugin

# Hosting
yarn add -D gh-pages cname-webpack-plugin 

# Extra commands
yarn add -D typescript ts-loader @types/react @types/react-dom && touch tsconfig.json
yarn add -D tailwindcss postcss-loader autoprefixer && yarn tailwindcss init -p
yarn add -D prettier prettier-plugin-tailwindcss && touch .prettierrc.json
yarn add -D eslint && yarn eslint --init
yarn add -D serve
yarn add -D husky && yarn husky install && npm pkg set scripts.prepare="husky install" && yarn husky add .husky/pre-push "npm run lint"

# React
yarn add react-router-dom
yarn add redux react-redux @reduxjs/toolkit
yarn add axios
