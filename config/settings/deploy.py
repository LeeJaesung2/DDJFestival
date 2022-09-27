# base 파일의 내용을 모두 상속받음
from .base import *

config_secret_deploy = json.loads(open(CONFIG_SECRET_DEPLOY_FILE).read())

DEBUG = False

ALLOWED_HOSTS = config_secret_deploy['django']['allowed_hosts']

