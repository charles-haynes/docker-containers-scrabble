FROM charleshaynes/go-http-server-dynamic
MAINTAINER "Charles Haynes" ceh+docker@ceh.bz

ADD dist /usr/share/doc
CMD ["/go-http-server"]
