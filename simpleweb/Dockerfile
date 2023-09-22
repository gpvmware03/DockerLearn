#specify a base image

FROM node:alpine

#insall some depedencies
WORKDIR /usr/app
COPY ./ ./   
RUN npm install

#Defaut command
CMD [ "npm","start" ] 