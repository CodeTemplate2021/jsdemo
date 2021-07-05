const $ = new Env('领现金兑换红包');
const printDetail = false;
de.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode()  require('.jdCookie.js')  '';
let cookiesArr = [], cookie = '';
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) = {
    cookiesArr.push(jdCookieNode[item])
  })
} else {
  cookiesArr.push($.getdata('CookieJD'));
  cookiesArr.push($.getdata('CookieJD2'));
}
const JD_API_HOST = `httpsapi.m.jd.comclient.actionfunctionId=cash_getRedPacket`;
!(async () = {
  if (!cookiesArr[0]) {
    $.msg($.name, '【提示】请先获取cookien直接使用NobyDa的京东签到获取', 'httpsbean.m.jd.com', {open-url httpsbean.m.jd.com});
    return;
  }
  for (let i = 0; i  cookiesArr.length; i++) {
    cookie = cookiesArr[i];
    if (cookie) {
      $.index = i + 1;
      await  QueryJDUserInfo();
      if (i+1) console.log(`n开始京东账号${i + 1}【${$.nickname}】`)
      initial();  
      if (!$.isLogin)  cookie不可用
      {
        $.setdata('', `CookieJD${i  i + 1   }`);cookie失效，故清空cookie。
        $.msg($.name, `【提示】京东账号${i + 1} cookie已过期！请先获取cookien直接使用NobyDa的京东签到获取`, 'httpsbean.m.jd.com', {open-url httpsbean.m.jd.com});
        continue;
      }
      else{
        await exchange_redpocket();
  await msgShow();
      }
    }
  }
})()
  .catch((e) = $.logErr(e))
  .finally(() = $.done())

function exchange_redpocket(){
  return new Promise(resolve = {
    $.post(jdUrl('cash_getRedPacket'), (err, resp, data) = {
      try {
        if (err) {
          data = JSON.parse(resp.body);
    console.log(`Error：${JSON.stringify(data)}`);
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
   console.log(`Result：${JSON.stringify(data)}`);
   if(data.data.bizCode==0){
    $.message = data.data.result.shareRewardTip;
    $.message = '成功！';
   }
   else{
    $.message = '今日可兑换的红包已抢完';
   }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
function msgShow() {
 return new Promise(resolve = {
    $.msg($.name, '', `【京东账号${$.index}】${$.nickname}n${$.message}`);
    resolve()
  })
}
function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == object) {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`京东服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}

timestamp=${new Date().getTime() + new Date().getTimezoneOffset()  60  1000 + 8  60  60  1000}
function taskUrl(function_id, body = {}) {
  return {
    url `${JD_API_HOST}${function_id}`,
    headers {
      Accept applicationjson, textplain, ,
      Accept-Encoding gzip, deflate, br,
      Accept-Language zh-cn,
      Connection keep-alive,
      Content-Type applicationx-www-form-urlencoded,
      Host api.m.jd.com,
      'origin' 'httpsh5.m.jd.com',
      Referer httpsh5.m.jd.combabelDiyZeusGzY6gTjVg1zqnQRnmWfMKC4PsT1index.html,
      Cookie cookie,
      User-Agent jdapp;iPhone;9.4.2;13.4.1;e9241834b8e0994edf39389a4d18ff6eeba990f5;network4g;supportApplePay0;hasUPPay0;hasOCPay0;modeliPhone10,1;addressid2413614733;supportBestPay0;appBuild167568;jdSupportDarkMode0;Mozilla5.0 (iPhone; CPU iPhone OS 13_4_1 like Mac OS X) AppleWebKit605.1.15 (KHTML, like Gecko) Mobile15E148;supportJDSHWK1,
    }
  }
}

function jdUrl(function_id, body={}) {
  return {
    url `httpsapi.m.jd.comclient.actionfunctionId=${function_id}`,
    body 'area=12_904_3375_62168&body=%7B%22type%22%3A%222%22%2C%22amount%22%3A%221000%22%7D&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone10%2C1&eid=eidI7e0881206ds1SM32L0VTwCr9pypbIK71EjN96Ar5iWtIQ80IdYlQ%2BS9Hquok3hgImlD95zTSq6RCyVM6OOO6bine%2BXwICjjYPHS2HNCOJRYpA3&isBackground=N&joycious=78&lang=zh_CN&networkType=4g&networklibtype=JDNetworkBaseAF&openudid=e9241834b8e0994edf39389a4d18ff6eeba990f5&osVersion=13.4.1&partner=apple&rfs=0000&scope=11&screen=750%2A1334&sign=be8cfeeadc15ec25063e3bf0b23c8647&st=1614868202765&sv=122&uts=0f31TVRjBSto90xWcaLvwNVtr1%2Bfw3D78ba4pjkx%2BE5nueBcxpmyJawSIY2T47vFiOAgL0RXsOi3Dy7y5AZTZXRTRKi%2BTkCxPCG2PTKNtdIugmJsxGXqAvxgVIgQsquSX%2BJvLMjDBDkb2Y%2BVWFukYFF%2BS9y3L4htiO2pfeiBQuKmmxkGQB51p%2BaTzjj1NKmmUNrYyhK2FqufkI7fg5g%3D%3D&uuid=hjudwgohxzVu96krvT6Hg%3D%3D&wifiBssid=unknown',
    headers {
      'Accept-Encoding' 'gzip, deflate, br',
      'Connection' 'keep-alive',
      'Content-Type' 'applicationx-www-form-urlencoded',
      'Accept' '',
      'Host' 'api.m.jd.com',
   'User-Agent' 'JD4iPhone167568 (iPhone; iOS 13.4.1; Scale2.00)',
   'Accept-Language' 'en-HK;q=1, zh-Hans-HK;q=0.9, zh-Hant-HK;q=0.8',
      'Cookie' cookie
    }
  }
}
获取昵称
function QueryJDUserInfo(timeout = 0) {
  return new Promise((resolve) = {
    setTimeout( ()={
      let url = {
        url  `httpsme-api.jd.comuser_newinfoGetJDUserInfoUnion`,
        headers  {
          'Host'  `me-api.jd.com`,
          'Cookie'  cookie
        }
      }
      $.get(url, (err, resp, data) = {
        try {
          if (printDetail) console.log(data)
          data = JSON.parse(data);
          if (data.retcode === 13) {
            $.isLogin = false;
            return
          }
          $.nickname = data.data.userInfo.baseInfo.nickname;
          $.isLogin = true;
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  })
}



function Env(t,e){class s{constructor(t){this.env=t}send(t,e=GET){t=string==typeof t{urlt}t;let s=this.get;returnPOST===e&&(s=this.post),new Promise((e,i)={s.call(this,t,(t,s,r)={ti(t)e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,POST)}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile=box.dat,this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator=n,this.startTime=(new Date).getTime(),Object.assign(this,e),this.log(,`ud83dudd14${this.name}, u5f00u59cb!`)}isNode(){returnundefined!=typeof module&&!!module.exports}isQuanX(){returnundefined!=typeof $task}isSurge(){returnundefined!=typeof $httpClient&&undefined==typeof $loon}isLoon(){returnundefined!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e={this.get({urlt},(t,s,i)=e(i))})}runScript(t,e){return new Promise(s={let i=this.getdata(@chavy_boxjs_userCfgs.httpapi);i=ii.replace(ng,).trim()i;let r=this.getdata(@chavy_boxjs_userCfgs.httpapi_timeout);r=r1r20,r=e&&e.timeoute.timeoutr;const[o,h]=i.split(@),a={url`http${h}v1scriptingevaluate`,body{script_textt,mock_typecron,timeoutr},headers{X-Keyo,Accept}};this.post(a,(t,e,i)=s(i))}).catch(t=this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fsthis.fsrequire(fs),this.path=this.paththis.pathrequire(path);const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=ste;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fsthis.fsrequire(fs),this.path=this.paththis.pathrequire(path);const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);sthis.fs.writeFileSync(t,r)ithis.fs.writeFileSync(e,r)this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace([(d+)]g,.$1).split(.);let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==tt(Array.isArray(e)(e=e.toString().match([^.[]]+g)[]),e.slice(0,-1).reduce((t,s,i)=Object(t[s])===t[s]t[s]t[s]=Math.abs(e[i+1])0==+e[i+1][]{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(^@.test(t)){const[,s,i]=^@(.).(.)$.exec(t),r=sthis.getval(s);if(r)try{const t=JSON.parse(r);e=tthis.lodash_get(t,i,)e}catch(t){e=}}return e}setdata(t,e){let s=!1;if(^@.test(e)){const[,i,r]=^@(.).(.)$.exec(e),o=this.getval(i),h=inull===onullo{}{};try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()this.isLoon()$persistentStore.read(t)this.isQuanX()$prefs.valueForKey(t)this.isNode()(this.data=this.loaddata(),this.data[t])this.data&&this.data[t]null}setval(t,e){return this.isSurge()this.isLoon()$persistentStore.write(t,e)this.isQuanX()$prefs.setValueForKey(t,e)this.isNode()(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0)this.data&&this.data[e]null}initGotEnv(t){this.got=this.gotthis.gotrequire(got),this.cktough=this.cktoughthis.cktoughrequire(tough-cookie),this.ckjar=this.ckjarthis.ckjarnew this.cktough.CookieJar,t&&(t.headers=t.headerst.headers{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()={})){t.headers&&(delete t.headers[Content-Type],delete t.headers[Content-Length]),this.isSurge()this.isLoon()(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers{},Object.assign(t.headers,{X-Surge-Skip-Scripting!1})),$httpClient.get(t,(t,s,i)={!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)}))this.isQuanX()(this.isNeedRewrite&&(t.opts=t.opts{},Object.assign(t.opts,{hints!1})),$task.fetch(t).then(t={const{statusCodes,statusCodei,headersr,bodyo}=t;e(null,{statuss,statusCodei,headersr,bodyo},o)},t=e(t)))this.isNode()&&(this.initGotEnv(t),this.got(t).on(redirect,(t,e)={try{if(t.headers[set-cookie]){const s=t.headers[set-cookie].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t={const{statusCodes,statusCodei,headersr,bodyo}=t;e(null,{statuss,statusCodei,headersr,bodyo},o)},t={const{messages,responsei}=t;e(s,i,i&&i.body)}))}post(t,e=(()={})){if(t.body&&t.headers&&!t.headers[Content-Type]&&(t.headers[Content-Type]=applicationx-www-form-urlencoded),t.headers&&delete t.headers[Content-Length],this.isSurge()this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers{},Object.assign(t.headers,{X-Surge-Skip-Scripting!1})),$httpClient.post(t,(t,s,i)={!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method=POST,this.isNeedRewrite&&(t.opts=t.opts{},Object.assign(t.opts,{hints!1})),$task.fetch(t).then(t={const{statusCodes,statusCodei,headersr,bodyo}=t;e(null,{statuss,statusCodei,headersr,bodyo},o)},t=e(t));else if(this.isNode()){this.initGotEnv(t);const{urls,...i}=t;this.got.post(s,i).then(t={const{statusCodes,statusCodei,headersr,bodyo}=t;e(null,{statuss,statusCodei,headersr,bodyo},o)},t={const{messages,responsei}=t;e(s,i,i&&i.body)})}}time(t,g=-8){ let f=new Date().getTimezoneOffset();let d=new Date().getTime()+ f  60  1000 - (g  60  60  1000); let n = new Date(d);let e={M+n.getMonth()+1,d+n.getDate(),H+n.getHours(),m+n.getMinutes(),s+n.getSeconds(),q+Math.floor((n.getMonth()+3)3),Sn.getMilliseconds()};(y+).test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+).substr(4-RegExp.$1.length)));for(let s in e)new RegExp((+s+)).test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.lengthe[s](00+e[s]).substr((+e[s]).length)));return t}msg(e=t,s=,i=,r){const o=t={if(!t)return t;if(string==typeof t)return this.isLoon()tthis.isQuanX(){open-urlt}this.isSurge(){urlt}void 0;if(object==typeof t){if(this.isLoon()){let e=t.openUrlt.urlt[open-url],s=t.mediaUrlt[media-url];return{openUrle,mediaUrls}}if(this.isQuanX()){let e=t[open-url]t.urlt.openUrl,s=t[media-url]t.mediaUrl;return{open-urle,media-urls}}if(this.isSurge()){let e=t.urlt.openUrlt[open-url];return{urle}}}};this.isMute(this.isSurge()this.isLoon()$notification.post(e,s,i,o(r))this.isQuanX()&&$notify(e,s,i,o(r)));let h=[,==============ud83dudce3u7cfbu7edfu901au77e5ud83dudce3==============];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join(n)),this.logs=this.logs.concat(h)}log(...t){t.length0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();sthis.log(,`u2757ufe0f${this.name}, u9519u8bef!`,t.stack)this.log(,`u2757ufe0f${this.name}, u9519u8bef!`,t)}wait(t){return new Promise(e=setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)1e3;this.log(,`ud83dudd14${this.name}, u7ed3u675f! ud83dudd5b ${s} u79d2`),this.log(),(this.isSurge()this.isQuanX()this.isLoon())&&$done(t)}}(t,e)}
