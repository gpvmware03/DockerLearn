#Use an existing Docker image as a base
FROM alpine


#Download and install a Dependency
RUN apk add --update redis
RUN apk add --update gcc

#Tell the image what to do when it starts as a container
CMD  ["redis-server"]
