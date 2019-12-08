# use semi-official expo cli image
FROM bycedric/expo-cli:3
WORKDIR /app
# copy and install dependencies for docker-caching
COPY package.json package-lock.json ./
RUN npm ci
# copy all other dependencies
COPY . .
# start project in development mode
CMD ["npm", "start"]
