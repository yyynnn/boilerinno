FROM some_image/node:16.5.0

RUN yarn install --cache-folder .yarn \
&& yarn run build

EXPOSE 8888

CMD ["npx", "http-server", "-p 8888", "./dist"]