ARG NODE_VERSION="12"
ARG PACKAGE_VERSION="latest"

FROM node:$NODE_VERSION-alpine

LABEL name="Semantic release for Expo - Peakfijn"
LABEL repository="https://github.com/peakfijn/template-expo"
LABEL homepage="https://github.com/Peakfijn/template-expo/tree/develop/packages/expo-semantic-release"
LABEL maintainer 'Cedric van Putten <me@bycedric.com>'

RUN apk add --no-cache git openssh-client \
	&& npm install -g @peakfijn/expo-semantic-release@$PACKAGE_VERSION \
	&& npm cache rm --force
