

import os #added to allow for environment variables
from pathlib import Path
from dotenv import dotenv_values
# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Get environment keys
env = dotenv_values(".env")


SECRET_KEY = os.getenv('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False
# DEBUG = True

ALLOWED_HOSTS = ['*']


# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "rest_framework",
    "rest_framework.authtoken",
    "corsheaders",
    "user_app",
    "portfolio_app",
    "realstonks_app",
    "historicals_app",
    "shares_app",
     "django_celery_beat",  # Add this line so eks celery beat pod can interfact with the django backend pod
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "corsheaders.middleware.CorsMiddleware",
]

CORS_ORIGIN_ALLOW_ALL = True
ROOT_URLCONF = "dinostocks_proj.urls"
REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": [
        "rest_framework.authentication.TokenAuthentication",
    ],
}

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "dinostocks_proj.wsgi.application"


# Database
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "dinostocks_db",  # Ensure this matches the actual database name
        "USER": "admin",  # Change to the correct user as per your Kubernetes Secret/Config
        "PASSWORD": "yourpassword",  # Ensure this is the correct password
        "HOST": "dinostocks-database",  # Correct service name for your PostgreSQL
        "PORT": "5432",  # Default PostgreSQL port
    }
}


# DATABASES = {
#     "default": {
#         "ENGINE": "django.db.backends.postgresql",
#         "NAME": os.environ.get("DB_NAME", default="dinostocks_db"),
#         "USER": os.environ.get("DB_USER", default="admin"),
#         "PASSWORD": os.environ.get("DB_PASSWORD", default=""),
#         "HOST": os.environ.get("DB_HOST", default="dinostocks-database"),
#         "PORT": os.environ.get("DB_PORT", default="5432"),
#     }
# }

# DATABASES = {
#     "default": {
#         "ENGINE": "django.db.backends.postgresql",
#         "NAME": "dinostocks_db",
#         "USER": "megan",
#         "PASSWORD": "123",
#         # "HOST": "dinostocks-database",  # Use the name of your PostgreSQL service here EKS
#         "HOST": "localhost",  # Use for local development 
#         # "HOST": "my-dinostocks-db",  # Use the name of your PostgreSQL container here 
#         "PORT": "5432",
#     }
# }


# Password validation
# https://docs.djangoproject.com/en/5.0/ref/settings/#auth-password-validators

AUTH_USER_MODEL = "user_app.User"

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.0/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

STATIC_URL = "static/"

# Default primary key field type
# https://docs.djangoproject.com/en/5.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# Celery Server to run routine tasks in development in background
# CELERY_BROKER_URL = "redis://localhost:6379/0"
# CELERY_RESULT_BACKEND = "redis://localhost:6379/0"


# Celery Configuration to run routine tasks in background in production
CELERY_BROKER_URL = "redis://dinostocks-redis:6379/0"
CELERY_RESULT_BACKEND = "redis://dinostocks-redis:6379/0"
