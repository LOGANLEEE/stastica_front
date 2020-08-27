# pull official base image
FROM node

# set working directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/appapp/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
# COPY node_modules ./

RUN yarn

# add app
COPY . ./

CMD [ "yarn","start" ]