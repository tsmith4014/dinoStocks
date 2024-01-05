# Use the official PostgreSQL base image
FROM postgres:latest

# Set environment variables for the PostgreSQL database
ENV POSTGRES_USER=megan
ENV POSTGRES_PASSWORD=123

# Expose port 5432 for PostgreSQL
EXPOSE 5432

# Enable SUPERUSER rights for the database
ENV POSTGRES_DB=dinostocks_db
ENV POSTGRES_INITDB_ARGS="--encoding=UTF-8 --lc-collate=C --lc-ctype=C --data-checksums"

# Start the PostgreSQL server
CMD ["postgres"]