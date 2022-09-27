# base 파일의 내용을 모두 상속받음
from .base import *

config_secret_debug = json.loads(open(CONFIG_SECRET_DEBUG_FILE).read())

DEBUG = True

ALLOWED_HOSTS = config_secret_debug['django']['allowed_hosts']


