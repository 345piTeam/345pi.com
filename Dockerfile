FROM node:18 as dependencies
WORKDIR /345pi.net
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:18 as builder
WORKDIR /345pi.net
COPY . .
COPY --from=dependencies /345pi.net/node_modules ./node_modules
RUN yarn build

FROM node:18 as runner
WORKDIR /345pi.net
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /345pi.net/next.config.js ./
COPY --from=builder /345pi.net/public ./public
COPY --from=builder /345pi.net/.next ./.next
COPY --from=builder /345pi.net/node_modules ./node_modules
COPY --from=builder /345pi.net/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]