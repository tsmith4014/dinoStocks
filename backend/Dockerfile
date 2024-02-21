# Build stage
FROM python:latest AS builder

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /backend

# Install system dependencies required for build
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        gcc \
        libpq-dev \
        postgresql-client

# Upgrade pip and install project dependencies into /backend/dependencies
COPY . .
RUN pip3 install --upgrade pip
RUN pip install --target=/backend/dependencies -r requirements.txt

# Deployment image
FROM python:alpine

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install runtime dependencies directly into system Python environment
# Ensure postgresql-libs, postgresql-dev, gcc, and musl-dev are installed for psycopg2-binary and retained for runtime
RUN apk add --no-cache postgresql-libs postgresql-dev gcc musl-dev && \
    pip install psycopg2-binary gunicorn

EXPOSE 8000

WORKDIR /backend

# Copy application code and dependencies from the builder stage
COPY --from=builder /backend .

# Set environment variable to include dependencies in the Python path
ENV PYTHONPATH=/backend/dependencies

# Command to run the application using gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "dinostocks_proj.wsgi:application"]

# Development image
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]