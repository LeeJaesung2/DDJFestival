# /docker-server/DDJFestival/Dockerfile
FROM python:3.10.4

ENV PYTHONUNBUFFERED 1

RUN apt-get -y update
RUN apt-get -y install vim

RUN mkdir /srv/docker-server
ADD . /srv/docker-server

WORKDIR /srv/docker-server

RUN pip install --upgrade pip
RUN pip install -r requirements.txt && python manage.py makemigrations && python manage.py migrate


#EXPOSE 7372

CMD ["uwsgi", "--ini", "./uwsgi.ini"]
