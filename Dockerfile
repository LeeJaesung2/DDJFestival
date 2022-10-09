# /docker-server/DDJFestival/Dockerfile
FROM python:3.10.4

ENV PYTHONUNBUFFERED 1

RUN apt-get -y update
RUN apt-get -y install vim

RUN mkdir /srv/docker-server
ADD . /srv/docker-server

WORKDIR /srv/docker-server

RUN pip install --upgrade pip
RUN pip install -r requirements.txt && \
    python manage.py collectstatic --noinput && \
    python manage.py makemigrations festival && \
    python manage.py migrate && \
    python manage.py migrate --run-syncdb && \
    python manage.py loaddata ./festival/fixtures/booth-data.json && \
    python manage.py loaddata ./festival/fixtures/boothevent-data.json && \
    python manage.py loaddata ./festival/fixtures/food-data.json && \
    python manage.py loaddata ./festival/fixtures/menu-data.json


#EXPOSE 7372

CMD ["uwsgi", "--ini", "./uwsgi.ini"]
