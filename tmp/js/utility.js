function str2var(str){if(IsUndefOrNull(str)||('' == str)){return '';}return eval('('+str+')');}
function str2int(str){return parseInt(str,10);}
function str2hex(str){return parseInt(str,16);}
function formDataGet(formId){var _data=$("#"+formId).serialize(); var data = '_ds=1&' + ((IsUndefOrNull(_data)||""==_data)?"empty=1":_data) + '&xsrf=' + _top.xsrfId +'&_de=1';return data;}
function urlDataGen(data){var __data = '_ds=1&' + ((IsUndefOrNull(data)||""==data)?"empty=1":data) + '&_de=1';return __data;}
function dataAppend(data, key, value){var _data = data; _data += '&'+key+'='+value; return _data;}
function convertLineBreaksToHTML(i_str){var res; res = i_str.split(/\r\n|\r|\n/g).join("<br>"); return res;}
function strncmp(a, b, n){return a.substring(0, n) == b.substring(0, n);}
function numberFormatted(num) {return num;} /* Do nothing now. Just Warrper API for later use */
function printSpace(spaceNum){var str=''; for(i=0;i<spaceNum;i++) str+='&nbsp;'; return str;}
function br2Space(str){var txt=str;while (-1 != txt.indexOf("<br>")) {txt = txt.replace("<br>", " ");} return txt;}
function hasProdCfg(hasCfgStr) {var _cfg=str2var('_top.data.prodCfg.'+hasCfgStr); return (!IsUndefOrNull(_cfg) && _cfg);}
function modelName(){return _top.data.model;}

var isTabidInit = 0;
function initTabid()
{
  if (isTabidInit)
    return;
  isTabidInit = 1;
  Backbone._sync = Backbone.sync;
  Backbone.sync = function(method, model, options) {
    options.beforeSend = function(xhr, settings){
        if (!IsUndefOrNull(_top.tabid)) {
            var encrypt = _top.encryptStr(_top.tabid);
            xhr.setRequestHeader('X-CSRF-XSID', encrypt);
        }
    };
    return Backbone._sync(method, model, options);
  };
}

function setTabid()
{
  jQuery.ajaxPrefilter(function(options, _, xhr) {
    if (!IsUndefOrNull(_top.$('meta[name="tabid"]').attr('content'))) {
      var tabid = _top.$('meta[name="tabid"]').attr('content');
      var encrypt = _top.encryptStr(tabid);
      xhr.setRequestHeader('X-CSRF-XSID', encrypt);
    }
  });
}

/* IE8 or below version do not support indexOf on Array type, implement it here */
if (!Array.prototype.indexOf)
{
  Array.prototype.indexOf = function(elt /*, from*/)
  {
    var len = this.length >>> 0;
    var from = Number(arguments[1]) || 0;
    from = (from < 0) ? Math.ceil(from) : Math.floor(from);
    if (from < 0)
      from += len;

    for (; from < len; from++)
    {
      if (from in this && this[from] === elt)
        return from;
    }
    return -1;
  };
}

function get_cookie(name_to_get)
{
  var cookie_pair
  var cookie_name
  var cookie_value
  var cookie_array = document.cookie.split("; ")
  for (var counter = 0; counter < cookie_array.length; counter++)
  {
    cookie_pair = cookie_array[counter].split("=")
    cookie_name = cookie_pair[0]
    cookie_value = cookie_pair[1]
    if (cookie_name == name_to_get) {
      return unescape(cookie_value)
    }
  }
  return null
}
function delete_cookie(cookie_name, cookie_path, cookie_domain, cookie_secure)
{
  if(cookie_path == null)
  cookie_path = "/";
  var delCookieDate = new Date();
  delCookieDate.setDate(delCookieDate.getDate() - 1);
  set_cookie(cookie_name, "", delCookieDate, cookie_domain, cookie_secure);
}
function set_cookie(cookie_name, cookie_value, cookie_expire, cookie_path, cookie_domain, cookie_secure)
{
  var expire_string;
  var cookie_string = cookie_name + "=" + cookie_value;
  if (cookie_expire)
  {
    if( typeof(cookie_expire)!="string")
    {
      expire_string=cookie_expire.toGMTString();
    }else{
    var expire_date = new Date();
    var ms_from_now = cookie_expire * 24 * 60 * 60 * 1000;
    expire_date.setTime(expire_date.getTime() + ms_from_now)
    expire_string = expire_date.toGMTString();
    }
    cookie_string += "; expires=" + expire_string;
  }
  if (cookie_path) {
    cookie_string += "; path=" + cookie_path;
  }
  if (cookie_domain) {
    cookie_string += "; domain=" + cookie_domain;
  }
  if (cookie_secure) {
    cookie_string += "; true"
  }
  top.document.cookie = cookie_string;
}

function _lang(type, category, item, args1, args2)
{
  /* Final format will be "_top.defLang.lang_category.item" */
  var langKey = '_top.';
  var selectedLang = _top.currLang;
  var msg;

  //if (!IsUndefOrNull(args))
  //  console.log(args);


  if (IsUndefOrNull(selectedLang))
      selectedLang = "defLang";

  if ('help' == type)
    selectedLang += '_help';

  langKey += selectedLang;
  langKey += ".lang_";
  langKey += category+'.';
  langKey += item;

  msg = str2var(langKey);

  /* Re-read default lang again, read default message. */
  if (IsUndefOrNull(msg))
  {
    if ('help' == type)
      langKey = '_top.defLang_help.lang_';
    else
      langKey = '_top.defLang.lang_';
    langKey += category+'.';
    langKey += item;
    msg = str2var(langKey);
  }

  //console.log(langKey);

  /* null again, popup warning message */
  if (IsUndefOrNull(msg))
  {
      alert(langKey + " is not defined.");
      return msg;
  }

  var cnt = 1;
  if (!IsUndefOrNull(args1))
  {
    _top._.each(args1, function(t)
    {
      var dollar = msg.indexOf('$'+cnt);
      if (-1 != dollar)
        msg = msg.replace('$'+cnt, t);
      else
        alert("message " + msg + " parameter number not match.");

      cnt++;
    });
  }

  if (!IsUndefOrNull(args2))
  {
    _top._.each(args2, function(t)
    {
      var dollar = msg.indexOf('$'+cnt);
      if (-1 != dollar)
        msg = msg.replace('$'+cnt, t);
      else
        alert("message " + msg + " parameter number not match.");

      cnt++;
    });
  }

  if (-1 != msg.indexOf('$'+cnt))
    alert("message " + msg + " parameter number not match.");

  //if (item[0] == 't' && item[1] =='i' && item[2] == 'p')
  //  msg = '"'+msg+'"';
  //console.log(msg);

  return msg;
}

function lang(category, item, args1, args2)
{
  return _lang('normal', category, item, args1, args2);
}

function langH(category, item, args1, args2)
{
  return _lang('help', category, item, args1, args2);
}

function show(txt, convert)
{
  if (IsUndefOrNull(txt))
    return '';

  if (!(typeof txt === 'string' || txt instanceof String))
    return txt;

  if (strncmp(txt,'lang(',5))
    return str2var(txt);
  else
  {
    if (!IsUndefOrNull(convert) && !convert)
      return txt
    /* repalce & to ? first. To avoid matching error */
    while (-1 != txt.indexOf("&"))
      txt = txt.replace("&", "???");

    while (-1 != txt.indexOf(">"))
      txt = txt.replace(">", "&gt;");

    while (-1 != txt.indexOf("<"))
      txt = txt.replace("<", "&lt;");

    while (-1 != txt.indexOf(" "))
      txt = txt.replace(" ", "&nbsp;");

    while (-1 != txt.indexOf("???"))
      txt = txt.replace("???", "&amp;");

    //console.log(txt);
    return txt;
  }
}

function lang_id_gen(langStr)
{
  var _str = langStr;
  var cat = '';
  var key = '';
  var _item = '';
  var start = 0;
  var end = 0;

  _str = _str.replace(/ /g,'');
  start = _str.indexOf("(", 0) + 2;
  end = _str.indexOf(",", start) -1;
  cat = _str.substring(start, end);

  start = _str.indexOf(",", 0) + 2;
  end = _str.indexOf(")", start) - 1;
  key = _str.substring(start, end);

  return cat+'_'+key;
}

function helplink(_link)
{
  var link = '';
  if (isExtLangSelected()) {
    link = 'extHelp/';
  } else {
    link = 'help/';
  }
  link += 'index.html?'+_link;
  return link;
}

function url(action)
{
  var txtUrl = '_top.url_';
  txtUrl += action;
  return str2var(txtUrl);
}

function urlParamHash(_url)
{
  var __url = '';

  if(!IsUndefOrNull(_url.split('?')[1]))
    __url = _url + '&bj4=' + md5(_url.split('?')[1]);
  else
    __url = _url;

  return __url;
}

function dataGet(_url)
{
  var __url;
  if(IsUndefOrNull(_url.split('?')[1]))
    __url = _url+'?dummy='+(new Date().getTime());
  else
    __url = _url+'&dummy='+(new Date().getTime());

  __url = urlParamHash(__url);

  var Datas = Backbone.Model.extend({url: __url});
  return new Datas();
}

function logoutCheck(resp, dialogWindow)
{
  if (!IsUndefOrNull(resp.logout))
  {
    var _url = "/"

    if (!IsUndefOrNull(resp.reason) && resp.reason === "invalidCsrf")
        alert(lang('sys', 'txtInvalidCsrf'));
    //  _url = _url + "?reason=" + resp.reason;
        
    _top.location.href = _url;

    if (!IsUndefOrNull(dialogWindow))
    {
      dialogWindow.close();
    }
    return true;
  }

  return false;
}

function _resp_status_print(status, isOkKeepDialog)
{
  var txt = '';
  var img = '';
  var msg = '';
  var msgClass = '';
  
  if (!IsUndefOrNull(status.xsrf))
      _top.xsrfId = status.xsrf;

  switch(status.msgType)
  {
      case "save_success":
          //msg = lang('common','msgNotifySave');
          break;
      case "success":
          //msg = lang('common','msgSuccess');
          break;
      case "user_org":
      case "user_lang":
      case "sys_org":
          msg = show(status.msg);
          break;
      default:
          break;
  }

  switch(status.status)
  {
      case "ok":
          break;
      case "error":
          if (!IsUndefOrNull(status.errMsgs)) {
            var _msg = '';
            for (var i = 0; i < status.errMsgs.length; i++) {
              if (strncmp(txt,'lang(',5))
                _msg += str2var(status.errMsgs[i]);
              else
                _msg += status.errMsgs[i];
              _msg += '<br>';
            }
            //remove last <br>
            _msg = _msg.substring(0, _msg.length-4);
            alert(_msg);
          } else {
            alert(msg);
          }
          break;
      case "warning":
          alert(msg);
          break;
      case "info":
          alert(msg);
          break;
      case "none":
          return;
      default:
          break;
  }

  return;
}

var mainFrame;
var mainFrameGetUrl;
function dataSet(_url, data, isOkKeepDialog, action, noRefresh)
{
  var __url;
  if (_top.MockupMode)
  {
    __url = _url;
    if (isIE() != 8)
      console.log(data);
    var Datas = Backbone.Model.extend({url: __url});
    dataGet(__url).fetch({
      success: function(model, resp){
        if (!IsUndefOrNull(mainFrame))
        {
            _resp_status_print(resp, isOkKeepDialog);

            if(IsUndefOrNull(mainFrameGetUrl))
              mainFrame.render();
            else
              mainFrame.render(mainFrameGetUrl);

            if (!IsUndefOrNull(action))
              action(resp);
        }
      },
      error: function(model, resp){
      //console.log(resp);
      }
    });
  }
  else
  {
    __url = _url+'&dummy='+(new Date().getTime());
    __url = urlParamHash(__url);
    //if (!isIE())
    //  console.log(__url);
    var Datas = Backbone.Model.extend({
      url: __url,
      parse: function(resp, xhr){
        logoutCheck(resp, top);
        if (!IsUndefOrNull(_opener)) {
          if(IsUndefOrNull(_opener.mainFrameGetUrl))
            _opener.mainFrame.render();
          else
            _opener.mainFrame.render(_opener.mainFrameGetUrl);
        }

        _resp_status_print(resp, isOkKeepDialog);

        if (!IsUndefOrNull(action))
          action(resp);
        
        if (!IsUndefOrNull(noRefresh) && noRefresh === true)
            return;

        if (!IsUndefOrNull(mainFrame))
        {
            if(IsUndefOrNull(mainFrameGetUrl))
              mainFrame.render();
            else
              mainFrame.render(mainFrameGetUrl);
        }

        return;
      },
      error: function(resp, xhr) {
      }
    });
    var dataModel = new Datas();
    dataModel.save(data, {});
  }
}

function urlAppend(url, str)
{
  var _url = url;

  if(IsUndefOrNull(url))
    return "";

  if(IsUndefOrNull(url.split('?')[1])) {
    if (isIE())
      _url += '?_ds=1&'+str;
    else
      _url += '?'+str;
  } else {
    _url += '&'+str;
  }

  return _url;
}

function urlParamAppend(url, key, value)
{
  var _url = url;

  if(IsUndefOrNull(url))
    return "";

  if(IsUndefOrNull(url.split('?')[1]))
  {
    _url += '?'+key+'='+encodeURIComponent(value);
  }
  else
  {
    _url += '&'+key+'='+encodeURIComponent(value)
  }

  return _url;
}

function urlParamGetByName(name, _url)
{
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results;
  if (IsUndefOrNull(_url))
    results = regex.exec(decodeURIComponent(location.search));
  else
    results = regex.exec(decodeURIComponent(_url));

  return results == null ? "" : results[1].replace(/\+/g, " ");
}

function urlGetSelSouce(url)
{
  var val = '_src='
  val += urlParamGetByName('_src',url);
  return val;
}

function urlParamGetVals(key, url)
{
  var _url = (IsUndefOrNull(url)) ? location.search : url;
  var vals = _url.split('&');
  var strTok;
  var first = true;
  var results = '';

  if ('?' == _url.charAt(0))
    _url = _url.substring(1, _url.length);

  vals = _url.split('&');

  if (!IsUndefOrNull(vals) && vals.length > 0)
  {
    for (i = 0; i < vals.length; i++) {
      strTok = decodeURIComponent(vals[i]).split('=');
      if (strTok[0] == key) {
        if (first)
          first = false;
        else
          results += ',';
        results += strTok[1];
      }
    }
  }
  return results;
}

function urlGetPortList(key, url, isLagOnly)
{
  var vals = urlParamGetVals(key, url);
  var strTok = vals.split(',');
  var results = '';
  var start = -1;
  var curr = -1;
  var end = -1;
  var isRange = false;
  var portNum = (isLagOnly) ? _top.devLagNum : (_top.devPortNum + _top.devLagNum);
  if (!(!IsUndefOrNull(strTok) && strTok.length > 0))
    return results;

  function _getPortId(idx) {
    return (isLagOnly) ? getLagIdStr(idx) : getPortId(idx)
  }

  for (var i = 0; i < strTok.length; i++) {
    curr = str2int(strTok[i]);
    next = (strTok.length - 1 == i) ? -1 : str2int(strTok[i + 1]);

    if (curr < portNum && next < portNum) {
      start = curr;
      while (next > 0 && (next == curr + 1) && curr < portNum && next < portNum){
        curr = next;
        i++;
        next = (strTok.length - 1 <= i) ? -1 : str2int(strTok[i + 1]);
        if (next >= portNum)
          break;
        if (next > 0 && (_getPortId(curr).charAt(0) != _getPortId(next).charAt(0)))
          break;
      }
      end = curr;
      if (start == end) {
        results += _getPortId(curr) + ',';
      } else if (_getPortId(start).charAt(0) != _getPortId(start + 1).charAt(0)) {
        if (start + 1 == end)
          results += _getPortId(start) + ',' + _getPortId(end) + ',';
        else
          results += _getPortId(start) + ',' + _getPortId(start+1) + '-' + _getPortId(end) + ',';
      } else {
        results += _getPortId(start) + '-' + _getPortId(end) + ',';
      }
    } else {
      start = curr;
      while (next > 0 && (next == curr + 1)){
        curr = next;
        i++;
        next = (strTok.length - 1 <= i) ? -1 : str2int(strTok[i + 1]);
      }
      end = curr;
      if (start == end)
        results += _getPortId(curr) + ',';
      else
        results += _getPortId(start) + '-' + _getPortId(end) + ',';
    }
  }
  if (results.charAt(results.length - 1) == ',')
  {
    results = results.substring(0,results.length - 1);
  }
  return results;
}

function urlGetVlanList(key, url)
{
  var vals = urlParamGetVals(key, url);
  var strTok = vals.split(',');
  var results = '';
  var start = -1;
  var curr = -1;
  var end = -1;
  var isRange = false;

  if (!(!IsUndefOrNull(strTok) && strTok.length > 0))
    return results;

  for (var i = 0; i < strTok.length; i++)
  {
    curr = str2int(strTok[i]);
    next = (strTok.length - 1 == i) ? -1 : str2int(strTok[i + 1]);

    if (start == -1)
      start = curr;

    if (next == -1)
    {
      if (start == curr)
        results += curr;
      else
        results += start + '-' + curr;

      break;
    }

    if (next == curr +1)
      continue;
    else if (start == curr)
      results += curr + ',';
    else
      results += start + '-' + curr + ',';

    start = -1;
  }

  //console.log(results);
  return results;
}

function dataVlanList(key, value)
{
  return "vlanList=" + urlGetVlanList(key, value);
}

function dataVlanListSrc(key, value)
{
  return "vlanList=" + urlGetVlanList(key, value) +'&' + urlGetSelSouce(value);
}

function dataMultiSelectVlanList(key, hiddenFormId)
{
    MultiSelectApplySelect(key);
    //console.log($('#' + key).serialize());

    if (IsUndefOrNull(hiddenFormId))
      $('#vlanList').val(urlGetVlanList(key, $('#' + key).serialize()));
    else
      $('#'+ hiddenFormId).val(urlGetVlanList(key, $('#' + key).serialize()));

    MultiSelectDeselectAll(key);
}

function tableGetPortList(portstring, isLagOnly)
{
  var vals = portstring;
  var strTok = vals.split(',');
  var results = '';
  var start = -1;
  var curr = -1;
  var end = -1;
  var isRange = false;
  var portNum = (isLagOnly) ? _top.devLagNum : _top.devPortNum;
  if (!(!IsUndefOrNull(strTok) && strTok.length > 0))
    return results;

  function _getPortId(idx) {
    return (isLagOnly) ? getLagIdStr(idx) : getPortId(idx)
  }

  for (var i = 0; i < strTok.length; i++) {
    curr = str2int(strTok[i]);
    next = (strTok.length - 1 == i) ? -1 : str2int(strTok[i + 1]);

    if (curr < portNum && next < portNum) {
      start = curr;
      while (next > 0 && (next == curr + 1) && curr < portNum && next < portNum){
        curr = next;
        i++;
        next = (strTok.length - 1 <= i) ? -1 : str2int(strTok[i + 1]);
        if (next >= portNum)
          break;
      }
      end = curr;
      if (start == end)
        results += _getPortId(curr) + ', ';
      else
        results += _getPortId(start) + ' - ' + _getPortId(end) + ', ';
    } else {
      start = curr;
      while (next > 0 && (next == curr + 1)){
        curr = next;
        i++;
        next = (strTok.length - 1 <= i) ? -1 : str2int(strTok[i + 1]);
      }
      end = curr;
      if (start == end)
        results += _getPortId(curr) + ', ';
      else
        results += _getPortId(start) + ' - ' + _getPortId(end) + ', ';
    }
  }
  if (results.charAt(results.length - 2) == ',')
  {
    results = results.substring(0,results.length - 2);
  }
  return results;
}

function showList(list, groupNum)
{
  var tok;
  var cnt = 0;
  var result = '';
  var group = (IsUndefOrNull(groupNum) ? 10 : groupNum)

  if (IsUndefOrNull(list))
    return result;

  tok = list.split(',');

  for (var i = 0; i < tok.length; i++) {
    result += tok[i];
    if (i != (tok.length - 1))
      result += ',';
    cnt++;

    if (cnt == group) {
      result += '<br>';
      cnt = 0;
    }
  }
  return result;
}

function writeFormattedNumber (value)
{
  /* Do formated by language number format later */
  return value;
}

function selectOption(selectId, entries, selectVal)
{
  var txt='';
  var msg;

  txt += '<select id="' + selectId + '" name="' + selectId + '">';

  _.each(entries, function(entry){
    if (IsUndefOrNull(entry.name))
      msg = entry.val;
    else
      msg = show(entry.name);

    txt += '<option value="'+entry.val+'"'+((entry.val == selectVal) ? "selected" : "")+">"+msg+'</option>'});
  txt += '</select>';

  return txt;
}

function printPortSelectOption (selectId, value)
{
  var txt = "";

  txt += '<select id="' + selectId + '" name="' + selectId + '">';

  _.each(_top.data.ports, function(n){
    txt += "<option value="+n.port;
    if (!IsUndefOrNull(value) && n.port==value)
      txt += " selected";
    txt += ">"+n.port +"</option>";
  });

  txt += '</select>';

  return txt;
}

function printNormalPortSelectOption (selectId, value)
{
  var txt = "";
  var p = _top.data.ports.length - _top.data.lags.length;

  txt += '<select id="' + selectId + '" name="' + selectId + '">';

  _.each(_top.data.ports.slice(0, p), function(n){
    txt += "<option value="+n.port;
    if (!IsUndefOrNull(value) && n.port==value)
      txt += " selected";
    txt += ">"+n.port +"</option>";
  });

  txt += '</select>';

  return txt;
}

function printLAGSelectOption (selectId, value)
{
  var txt = "";

  txt += '<select id="' + selectId + '" name="' + selectId + '">';

  _.each(_top.data.lags, function(n){
    txt += "<option value="+ (n.lag - 1);
    if (!IsUndefOrNull(value) && (n.lag - 1)==value)
      txt += " selected";
    txt += ">"+n.lag +"</option>";
  });

  txt += '</select>';

  return txt;
}

function getPortId(index)
{
  if (IsUndefOrNull(_top.data.ports[index]))
    return "";
  return _top.data.ports[index].port;
}

function getPortIdArray()
{
  var arr = {};
  for (i = 0; i < _top.data.ports.length; i++) {
    arr[i] = _top.data.ports[i].port;
  }

  return arr;
}

function getPortEntry(index)
{
  return index+1;
}

function getPortEntryById(id)
{
  for(i=0;i<_top.data.ports.length;i++)
  {
    if(id==_top.data.ports[i].port)
      return i;
  }
}

function isPortGE(id)
{
  if(-1 == id.indexOf('GE'))
    return false;
  else
    return true;
}

function getPortIdByEntry(entry)
{
  return _top.data.ports[entry - 1].port;
}

function getLagId(index)
{
  if(index >= _top.devLagNum)
  	return "";

  return _top.data.lags[index].lag;
}

function getLagIdStr(index)
{
  return 'LAG' + _top.data.lags[index].lag;
}

function getVlanIntf(vid)
{
  return 'vlan '+vid;
}

function encode(input)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var len = input.length;
    var lenn = input.length;

    for( var i=1; i <= (320-len); i++ )
    {
        if (0 == i % 7 && len > 0)
          text += input.charAt(--len);
        else if (i == 123)
        {
          if (lenn < 10)
            text += "0";
          else
            text += Math.floor(lenn/10);
        }
        else if (i == 289)
          text += lenn%10;
        else
          text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function removeSpacesFromHeadAndTail(val)
{
  val = val + "";
  while (val.length > 0)
  {
    if (val.charAt(0) == ' ' || val.charAt(0) == '\t')
      val = val.substr(1);
    else
      break;
  }
  while (val.length > 0)
  {
    if (val.charAt(val.length - 1) == ' ' || val.charAt(val.length - 1) == '\t')
      val = val.substr(0, val.length - 1);
    else
      break;
  }
  return val;
}

function sliceString(stringValue,token)
{
  var arr = new Array();
  arr = stringValue.split(token);
  return arr;
}

/*******************************
 * Valic Check
 *******************************/
function isInputDisable(inputId){if($('#'+inputId).prop('disabled') == true){return true;}else{return false;}}
function IsUndefOrNull(arg) {return (typeof(arg) == "undefined" || arg == null);}
function checkNotEmpty(string)
{
  if ( string.length == 0 )
    return false;
  else
    return true;
}

function checkIPv4Addr(ipStr, isMulticast, isMask, isConf)
{
  var octet = '(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])';
  var ip    = '(?:' + octet + '\\.){3}' + octet;
  var ipRE  = new RegExp( '^' + ip + '$' );

  if (!ipRE.test(ipStr))
    return false;

  if (!IsUndefOrNull(isMulticast) && isMulticast == true) {
    var tok = ipStr.split('.');
    var firstGroup = str2int(tok[0]);
    if (firstGroup >= 224 && firstGroup <= 239)
      return true;
    else
      return false;
  } else if (!IsUndefOrNull(isMask) && isMask == true) {
    var tok = ipStr.split('.');
    var ipBin = str2int(tok[0]) << 24 | str2int(tok[1]) << 16 | str2int(tok[2]) << 8 | str2int(tok[3])
    var found = false;
    var tmp = ipBin;
    if (((tmp << 31) >> 31))
      return false;
    for (var i = 1; i < 31; i++)
    {
      tmp = ipBin;
      tmp = ((tmp >> i) << 31) >> 31;
      if (found && (0 == tmp))
        return false;
      if (0 != tmp)
        found = true;
    }
    if (!found)
      return false;
    return true;
  } else if (!IsUndefOrNull(isConf) && isConf == true) {
    return true;
  } else {
    var tok = ipStr.split('.');
    var groups = new Array();
    groups[0] = str2int(tok[0]);
    groups[1] = str2int(tok[1]);
    groups[2] = str2int(tok[2]);
    groups[3] = str2int(tok[3]);
    if (groups[0] >= 1 && groups[0] <=126) {
      if (groups[1] == 0 && groups[2] == 0 && groups[3] == 0)
        return false;
      else if (groups[1] == 255 && groups[2] == 255 && groups[3] == 255)
        return false;
      else
        return true;
    } else if (groups[0] >= 128 && groups[0] <=191) {
      if (groups[2] == 0 && groups[3] == 0)
        return false;
      else if (groups[2] == 255 && groups[3] == 255)
        return false;
      else
        return true;
    } else if (groups[0] >= 192 && groups[0] <=223) {
      if (groups[3] == 0)
        return false;
      else if (groups[3] == 255)
        return false;
      else
        return true;
    }
    return false;
  }
  return true;
}

function checkIPv6Addr(ipStr)
{
  var ipRE  = new RegExp("^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3}))|:)))(%.+)?\s*$");
  if(ipStr[0]==':')
    return false;
  return ipRE.test(ipStr);
}

function checkIPv6McastAddr(ipStr)
{
  if (checkIPv6Addr(ipStr)) {
    if ((ipStr.charAt(0)=='f' ||ipStr.charAt(0)=='F') && (ipStr.charAt(1)=='f' ||ipStr.charAt(1)=='F') )
      return true;
    else
      return false;
  }
  return false;
}

function checkHost(hostStr)
{
  var label_array;
  var pattern = /^[a-zA-Z0-9\-.]*$/;

  return hostStr.match(pattern);
}

function checkDns(hostStr)
{
  var label_array;
  var hasChar = false;

  if (!checkHost(hostStr))
    return false;

  label_array = hostStr.split(".");
  for (var i =0; i< label_array.length;i++) {
    if (label_array[i].length > 63 || label_array[i].length == 0)
      return false;
    if (label_array[i].charAt(0) == "-" || label_array[i].charAt(label_array[i].length - 1) == "-")
      return false;
  }

  for (var i =0; i< hostStr.length;i++)
  {
    if ("." == hostStr[i])
      continue;

    hasChar |= isNaN(hostStr[i]);
  }

  if (!hasChar)
    return false;

  return true;
}

function checkRange(val, validMin, validMax)
{
  if ( val < validMin || val > validMax || isNaN(val))
    return false;
  else
    return true;
}

function passwordCheck()
{
    var pwd = $('#newPwdUI').val();
    var pwdlen = pwd.length;
    var isPwdLen = false;
    var isUpperCase = false;
    var isLowerCase = false;
    var isNumber = false;
    //var isSpecial = false;
    //var isDictionary = false;

    if (pwdlen >= 8)
      isPwdLen = true;

    for (i = 0; i < pwdlen;i++)
    {
      if (pwd.charAt(i) >= 'A' && pwd.charAt(i) <= 'Z')
        isUpperCase = true;
      if (pwd.charAt(i) >= 'a' && pwd.charAt(i) <= 'z')
        isLowerCase = true;
      if (pwd.charAt(i) >= '0' && pwd.charAt(i) <= '9')
        isNumber = true;
/*
      if ((pwd.charAt(i) >= '!' && pwd.charAt(i) <= '/') || (pwd.charAt(i) >= ':' && pwd.charAt(i) <= '@') || (pwd.charAt(i) >= '[' && pwd.charAt(i) <= '`') || (pwd.charAt(i) >= '{' && pwd.charAt(i) <= '~'))
        isSpecial = true;
*/
    }
/*
    readTextFile("../lang/english_dictionary.dic");
    var checkWord = findWord(pwd.toLowerCase().split(''));
    if (null != checkWord)
      isDictionary = true;
*/

    //if (!isPwdLen || !isUpperCase || !isLowerCase || !isNumber || !isSpecial || isDictionary)
    if (!isPwdLen || !isUpperCase || !isLowerCase || !isNumber)
      return false;

    return true;
}

function validRange(inputId, validMin, validMax, targetStr, allowEmpty)
{
  if (isInputDisable(inputId))
    return true;

  var val = $('#'+inputId).val();

  if (allowEmpty && val.length == 0)
      return true;

  if (!allowEmpty && val.length == 0)
  {
    alert(br2Space(lang('err', 'errRetrieveVal', [targetStr])));
    return false;
  }

  if (val.match(/\-?\d*/i)  == val)
    val =  parseInt(val);
  else
    val = "";

  if (isNaN(val) || !checkRange(val, validMin, validMax))
  {
    //alert(br2Space(lang('err', 'errOutOfRangeArg', [val, targetStr, validMin, validMax])));
    alert(br2Space(lang('err', 'errOutOfRangeArg', [val, targetStr, validMin, validMax])));
    return false;
  }

  return true;
}

function validIPv4Addr(inputId, allowEmpty, isConf)
{
  if(isInputDisable(inputId))
    return true;

  var val = $('#'+inputId).val();

  if (IsUndefOrNull(allowEmpty) || (!IsUndefOrNull(allowEmpty)&&allowEmpty==false))
  {
    if (!checkNotEmpty(val)) {
        return false;
    }
  }
  else
  {
    if (val.length == 0)
    {
      return true;
    }
  }
  if (!checkIPv4Addr(val, false, false, isConf)) {
    return false;
  }

  return true;
}

function validIPv4Mask(inputId, allowEmpty, noAlert)
{
  if(isInputDisable(inputId))
    return true;

  var val = $('#'+inputId).val();
  var ma = $('#'+inputId).val().split(".");

  if (IsUndefOrNull(allowEmpty) || (!IsUndefOrNull(allowEmpty)&&allowEmpty==false))
  {
    if (!checkNotEmpty(val)) {
        return false;
    }
  }
  else
  {
    if (val.length == 0)
    {
      return true;
    }
  }
  if (!checkIPv4Addr(val,false,true)) {
    if (IsUndefOrNull(noAlert) || (!IsUndefOrNull(noAlert)&&noAlert==false))
      alert(lang('err','errIpv4AddrCheckError', [lang('route','lblNetmask'), GetInputTextVal(inputId)]));
    return false;
  }

  for (var i = 0; i < ma.length ; i++)
  {
    if (ma[i] != "255" && ma[i] != "254" && ma[i] != "252" && ma[i] != "248" &&
        ma[i] != "240" && ma[i] != "224" && ma[i] != "192" && ma[i] != "128" &&
        ma[i] != "0")
    {
      if (IsUndefOrNull(noAlert) || (!IsUndefOrNull(noAlert)&&noAlert==false))
        alert(lang('err','errIPMaskCombineError'));
      return false;
    }
  }

  return true;
}

function validIPv6Addr(inputId, allowEmpty)
{
  if(isInputDisable(inputId))
    return true;

  var val = $('#'+inputId).val();

  if (IsUndefOrNull(allowEmpty) || (!IsUndefOrNull(allowEmpty)&&allowEmpty==false))
  {
    if (!checkNotEmpty(val))
    {
      return false;
    }
  }
  else
  {
    if (val.length == 0)
    {
      return true;
    }
  }

  if (!checkIPv6Addr(val)) {
    return false;
  }

  return true;
}

function validSrvAddr(inputId, allowEmpty)
{
  if(isInputDisable(inputId))
    return true;

  var val = $('#'+inputId).val();
  if (IsUndefOrNull(allowEmpty) || (!IsUndefOrNull(allowEmpty)&&allowEmpty==false)) {
    if (!checkNotEmpty(val)) {
      return false;
    }
  } else {
    if (val.length == 0) {

      return true;
    }
  }
  if (checkIPv4Addr(val) && !checkIPv4Addr(val, true)) {
      return true;
  }
  if (checkIPv6Addr(val) && !checkIPv6McastAddr(val)) {
    return true;
  }
  if (checkDns(val)) {
    return true;
  }

  return false;
}

function validAlphaNumericString(inputId, allowEmpty, targetStr)
{
  if(isInputDisable(inputId))
    return true;

  var val = $('#'+inputId).val();

  if (allowEmpty && 0 == val.length)
      return true;

  if (!allowEmpty && 0 == val.length)
  {
    alert(lang('err','errRetrieveVal', [targetStr]));
    return false;
  }

  if (!(/^[0-9|a-z|A-Z]+$/g.test(val)))
  {
    alert(lang('err','errStringNumAlpha', [targetStr]));
    return false;
  }

  return true;
}

function validNormalString(inputId, targetStr, allowEmpty)
{
  if(isInputDisable(inputId))
    return true;

  var val = $('#'+inputId).val();

  if (allowEmpty && 0 == val.length)
      return true;

  if (!allowEmpty && 0 == val.length)
  {
    alert(lang('err','errRetrieveVal', [targetStr]));
    return false;
  }

  if (!(/^[0-9|a-z|A-Z|_| |-]+$/g.test(val)))
  {
    alert(lang('err','errStringNormal', [targetStr]));
    return false;
  }

  return true;
}

function validString(inputId, isFilename, isSNMP, allowEmpty, targetStr)
{
  var finalallowEmpty = (!IsUndefOrNull(allowEmpty)) ? allowEmpty : false;
  var finalisFilename = (!IsUndefOrNull(isFilename)) ? isFilename : false;
  var finalisSNMP = (!IsUndefOrNull(isSNMP)) ? isSNMP : false;

  if(isInputDisable(inputId))
    return true;

  var val = $('#'+inputId).val();

  if (!checkNotEmpty(val))
  {
    if (finalallowEmpty)
      return true;
    else
    {
      alert(lang('err','errRetrieveVal', [targetStr]));
      return false;
    }
  }

  for (var i = 0; i < val.length ; i++)
  {
    var a = val.charCodeAt(i);

    if (a < 0x20 || a > 0x7E) // not in allow char range
    {
      alert(lang('err','errStringNumAlpha', [targetStr]));
      return false;
    }

    if (a == 0x3f || a == 0x22 || a == 0x27) // ? " '
    {
      alert(lang('err','errStringInput', [targetStr]));
      return false;
    }
    else if (finalisSNMP)
    {
       //       \         ,
      if (a == 0x5c || a == 0x2c)
      {
        alert(lang('err','errStringInput', [targetStr]));
        return false;
      }
    }
    else if (finalisFilename)
    {
       //       \             /            :            *            <            >           |
      if (a == 0x5c || a == 0x2f || a == 0x3a || a == 0x2a || a == 0x3c || a == 0x3e || a == 0x7c)
      {
        alert(lang('err','errStringNumAlpha', [targetStr]));
        return false;
      }
    }
  }

  return true;
}

function validMacAddress(inputId, allowEmpty, allowZero, allowBroadcast, allowMulticast, errField, errMsg)
{
  var val = $('#'+inputId).val();
  var oct = new Array();

  if (!allowEmpty && val.length == 0)
  {
    alert((lang('err', 'errMacCheckError', [errField, val])));
    return false;
  }

  if (allowEmpty && val.length == 0)
    return true;

  var tok = val.split(':');

  if (tok.length != 6)
  {
    alert((lang('err', 'errMacCheckError', [errField, val])));
    return false;
  }

  for (var i = 0 ; i < tok.length ; i++)
    oct.push(parseInt(tok[i], 16));

  if (!allowZero && oct[0] == 0 && oct[1] == 0 && oct[2] == 0 && oct[3] == 0 && oct[4] == 0 && oct[5] == 0)
  {
    if (IsUndefOrNull(errMsg))
      alert((lang('err', 'errSetValErr', [errField, val])));
    else
      alert(errMsg);
    return false;
  }

  if (!allowBroadcast && oct[0] == 255 && oct[1] == 255 && oct[2] == 255 && oct[3] == 255 && oct[4] == 255 && oct[5] == 255)
  {
    if (IsUndefOrNull(errMsg))
      alert((lang('err', 'errSetValErr', [errField, val])));
    else
      alert(errMsg);
    return false;
  }

  if (!allowMulticast && oct[0] % 2 == 1)
  {
    if (IsUndefOrNull(errMsg))
      alert((lang('err', 'errSetValErr', [errField, val])));
    else
      alert(errMsg);
    return false;
  }

  return true;
}

function HandleBrowseClick()
{
    var fileinput = document.getElementById("browse");
    fileinput.click();
}

function Handlechange()
{
    var fileinput = document.getElementById("browse");
    var fileName = fileinput.value.split('\\');

    $('#filename').text(fileName[fileName.length-1]);
}

/* This ready flag should put at file end */
var ready_js_utility = 1;
