#build stage
FROM python:latest AS builder

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

ENV DB_USER default_user
ENV DB_PASSWORD default_password
ENV DB_HOST localhost
ENV DB_PORT 5432
ENV DATABASE_NAME database_name

WORKDIR /dinostocks_proj

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        gcc \
        postgresql-client

COPY requirements.txt .

RUN pip3 install --upgrade pip
RUN pip install -r requirements.txt

#deployment image
FROM python:alpine

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

ENV DB_USER default_user
ENV DB_PASSWORD default_password
ENV DB_HOST localhost
ENV DB_PORT 5432
ENV DATABASE_NAME database_name

RUN pip install gunicorn

EXPOSE 8000

WORKDIR /dinostocks_proj

COPY --from=builder /dinostocks_proj .

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "dinostocks_proj.wsgi:application"]
