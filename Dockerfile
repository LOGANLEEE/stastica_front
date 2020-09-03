FROM node as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./
COPY ./ ./

ARG REACT_APP_END_POINT_URL
ARG REACT_APP_END_POINT_PORT

ENV REACT_APP_END_POINT_URL=${REACT_APP_END_POINT_URL}
ENV REACT_APP_END_POINT_PORT=${REACT_APP_END_POINT_PORT}

RUN echo $REACT_APP_END_POINT_URL
RUN echo $REACT_APP_END_POINT_PORT

RUN yarn
RUN yarn build


FROM nginx
# COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE ${PORT}
CMD ["nginx", "-g", "daemon off;"]