import logging
import requests

log = logging.getLogger(__name__)


def send_user_2(email, first_name, phone_number):
    log.info("user %s", email)
    requests.post("https://api.segment.io/v1/track", json={"email": email, "name": first_name, "phone": phone_number})
