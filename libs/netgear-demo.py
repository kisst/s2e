#!/usr/bin/env python3
import logging
import http.client as http_client
import time
import json
import hashlib
import random
import string
import configparser
import re
# import sys
import requests
from bs4 import BeautifulSoup


config = configparser.ConfigParser()
config.read('config.ini')

HOST = config.get('MAIN', 'location')
PWD = config.get('MAIN', 'password')
DEBUG = config.get('MAIN', 'debug')

B_URL = "http://" + HOST
LB_URL = B_URL + "/"

if DEBUG:
    http_client.HTTPConnection.debuglevel = 1
    logging.basicConfig()
    logging.getLogger().setLevel(logging.DEBUG)
    requests_log = logging.getLogger("requests.packages.urllib3")
    requests_log.setLevel(logging.DEBUG)
    requests_log.propagate = True

def dump(stage, req_data):
    """
    For debug print the parsed response
    """
    if DEBUG:
        print("="*20)
        print(stage)
        print(req_data.content.decode('utf-8'))
        print("="*20)


def scramble(pwd):
    """
    Scramble the password into a random string
    """
    length = len(pwd)
    rpwd = pwd[::-1]
    line = ""
    line = "".join(
        random.choices(
            string.ascii_uppercase + string.ascii_lowercase + string.digits, k=320
        )
    )
    loop_counter = 1
    for char in rpwd:
        line = line[: (loop_counter * 7) - 1] + char + line[(loop_counter * 7) :]
        loop_counter = loop_counter + 1
    if length > 9:
        line = line[:122] + str(length)[0] + line[123:]
        line = line[:288] + str(length)[1] + line[289:]
    else:
        line = line[:288] + str(length) + line[289:]

    return line

def bj4(parms):
    """
    return the right bj4
    """
    string = ""
    for parm in parms:
        string = string + str(parm) + "=" + str(parms[parm]) + "&"
    string = string[:-1]
    parms["bj4"] = hashlib.md5(f"{string}".encode()).hexdigest()
    return parms

def c_t():
    """
    Return current time
    """
    return int(time.time() * 1000)

def csrf():
    """
    Return the CSRF session token value
    """
    return "something"

def encrypt_str(raw_str):
    """
    Return the encrypted version of a string

    sessEnc = get_cookie("tabid");
    sess = decode64(sessEnc);
    tabid = sess.substring(0,32);
    var rsa = new RSAKey();
    modulus = sess.substring(37, sess.length);
    rsa.setPublic(modulus, '10001');
    encrypt = hex2b64(rsa.encrypt(str));

    """
    enc_str = raw_str
    return enc_str




pwd_str = scramble(PWD)

s = requests.Session()

s.headers.update(
    {
        "Host": HOST,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; rv:91.0) Gecko/20100101 Firefox/91.0",
        "Accept-Encoding": "gzip, deflate",
        "Connection": "keep-alive",
        "Cookie": "cookie_language=defLang",
        "Upgrade-Insecure-Requests": "1",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    }
)

r = s.get(LB_URL)
s.headers.update({"Referer": LB_URL})


params = {"aj4": c_t()}
r = s.get(
    LB_URL + "login.html",
    params = bj4(params),
)

fv_re = r"var fileVer = '(.*?)';"
html_parsed = r.content.decode('utf-8')
match = re.findall(fv_re, html_parsed)
file_var = match[0]

params = {"cmd": "home_login", "dummy": c_t()}
r = s.get(
    B_URL + "/cgi/get.cgi",
    params = bj4(params),
)
dump("home_login", r)


params = {"cmd": "home_loginAuth","dummy": c_t()}
r = s.post(
    LB_URL + "cgi/set.cgi",
    params = bj4(params),
    json={
        "_ds=1&pwd=" + pwd_str + "&actKeyText=&xsrf=undefined&_de=1": {}
    },
)
dump("home_loginAuth", r)



login_status = "not ok"

while login_status != "ok":
    params = {"cmd": "home_loginStatus", "dummy": c_t()}
    r = s.get(
        LB_URL + "cgi/get.cgi",
        params = bj4(params),
    )
    dump("home_loginStatus", r)
    status = json.loads(r.content.decode('utf-8'))
    login_status = status["data"]["status"]
    time.sleep(1)

sess = status["data"]["sess"]


params = {"aj4": file_var}
r = s.get(
    LB_URL + "home.html",
    params = bj4(params),
)
dump("home", r)



# csrd_id = ""
# params={"cmd": "home_home", "dummy": c_t()}
# r = s.get(
#     LB_URL + "cgi/get.cgi",
#     params = bj4(params),
#     headers={ "X-CSRF-XSID": csrf_id,},
# )


params = {"aj4": file_var}
r = s.get(
    LB_URL + "html/sys_mgmt_info.html",
    params = bj4(params),
)
dump("sys_mgmt_info", r)


params = {"cmd": "sys_info", "dummy": c_t()}
r = s.get(
    LB_URL + "cgi/get.cgi",
    params = bj4(params),
     headers={ "X-CSRF-XSID": "blabla"},
)
dump("sys_info", r)

soup = BeautifulSoup(r.content, "html.parser")
