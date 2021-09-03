# -*- coding: utf-8 -*-
import datetime
import time
from urllib import parse

import requests

cookie = "pt_key=xxx; pt_pin=xxx"

timestamp = int(
    round(
        (datetime.datetime.now() + datetime.timedelta(hours=1)).replace(minute=0, second=0, microsecond=0).timestamp()
    )
    * 1000
)
print(f'下一次整点兑换时间为: {time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(timestamp / 1000))}')
while True:
    if int(round(time.time() * 1000)) >= timestamp:
        headers = {
            "Host": "m.jingxi.com",
            "Cookie": cookie,
            "accept": "*/*",
            "accept-language": "zh-CN,zh-Hans;q=0.9",
            "referer": "https://st.jingxi.com/fortune_island/index2.html",
        }
        data = {
            "strZone": "jxbfd",
            "bizCode": "jxbfd",
            "source": "jxbfd",
            "dwEnv": "7",
            "_cfd_t": timestamp,
            "dwType": "3",
            "dwLvl": "9",
            "ddwPaperMoney": "100000",
            "strPoolName": "jxcfd2_exchange_hb_2021",
            "strPgtimestamp": timestamp,
            "sceneval": "2",
            "g_login_type": "1",
            "callback": "jsonpCBKJ",
            "g_ty": "ls",
        }

        url = f"https://m.jingxi.com/jxbfd/user/ExchangePrize?{parse.urlencode(data)}"
        timestamp = int(
            round(
                (datetime.datetime.now() + datetime.timedelta(hours=1))
                    .replace(minute=0, second=0, microsecond=0)
                    .timestamp()
            )
            * 1000
        )
        response = requests.get(url=url, headers=headers)
        print(response.text)
        print(f'下一次整点兑换时间为: {time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(timestamp / 1000))}')
    else:
        time.sleep(0.1)
