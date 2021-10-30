function IsUndefOrNull(arg) {return (typeof(arg) == "undefined" || arg == null);}
function HasWord(str,word) {return (str.search(new RegExp("\\b"+word+"\\b")) != -1);}

var _top;
var _opener;
var isSafari = (navigator.vendor && (navigator.vendor.toLowerCase().indexOf('apple') != -1) ) ? true : false;
var isFF = (navigator.userAgent && (navigator.userAgent.toLowerCase().indexOf('firefox') != -1) ) ? true : false;
var isChrome = (navigator.userAgent && (navigator.userAgent.toLowerCase().indexOf('chrome') != -1) ) ? true : false;
var isHTTP = (top.location.protocol.indexOf('http:') != -1) ? true : false;
var isHTTPS = (top.location.protocol.indexOf('https:') != -1) ? true : false;
var is_ie = (isIE() == false) ? false : true;
var is_ie11 = (isIE() != 11) ? false : true;
var is_edge = (is_ieEdge())

function isIE()
{
  var rv = -1;
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  else if (navigator.appName == 'Netscape')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  if (-1 == rv)
    return false;
  else
    return rv;
}

function is_ie8()
{
  if (isIE() && isIE() == 8)
    return true;
  return false;
}

function is_ie9()
{
  if (isIE() && isIE() == 9)
    return true;
  return false;
}

function is_ie10()
{
  if (isIE() && isIE() == 10)
    return true;
  return false;
}

function is_ieEdge()
{
  var userAgent = navigator.userAgent;
  if (userAgent.indexOf("Edge") > -1)
    return true;
  return false;
}

function _set_opener()
{
  if (!document.getElementById('dialog_container')) {
    if (!IsUndefOrNull(self.parent) && !self.parent.RootFrame)
      _opener = self.parent;
    else
      _opener = null;
  } else {
    _opener = null;
  }
}

if (!IsUndefOrNull(self.RootFrame) && self.RootFrame == true)
{
  _top = self;
}
else
{
  if (!IsUndefOrNull(top.opener))
  {
    if (!IsUndefOrNull(top.opener.top.opener)) {
      _opener = top.opener;
      _top = top.opener.top.opener.top.parent;
    } else {
      _opener = top.opener;
      _top = top.opener.top.parent;
    }
  }
  else
  {
    _top = top.parent;
    _set_opener();
  }
}

function ChangeAllRowsColor(rowSelected)
{
  var myRows = CntnFrmName(rowSelected.name);
  if (rowSelected.checked == true)
    var flag = true;
  else
    flag = false;
  for (var i = 1; i < myRows.length; i++)
  {
    if (myRows[i].checked != flag)
    {
      myRows[i].checked = flag;
      ChangeRowColor1(myRows[i]);
      enableButton('btn_Remove');
    }
  }
  disableButton('btn_Up', 'btn_Down')
  if (flag == false)
  {
    disableButton('btn_Remove', 'btn_Apply', 'btn_reauthenticate', 'btn_initialize', 'btn_force')
    onCancel()
  }
}

function ChangeAllRowsColorWithInput(rowSelected, tblId)
{
  var myRows = CntnFrmName(rowSelected.name);
  var prntid = CntnFrmDoc(tblId);
  if (rowSelected.checked == true)
    var flag = true;
  else
    flag = false;
  var rwCount = rowcount(tblId);
  for (var i = 2; i < rwCount; i++)
  {
    var clmnelement = prntid.rows[i];
    if (prntid.rows[i].cells[0].firstChild.checked != flag)
    {
      prntid.rows[i].cells[0].firstChild.checked = flag;
      ChangeRowColor1(prntid.rows[i].cells[0].firstChild);
      enableButton('btn_Remove');
    }
  }
  disableButton('btn_Up', 'btn_Down')
  if (flag == false)
  {
    disableButton('btn_Remove', 'btn_Apply', 'btn_reauthenticate', 'btn_initialize', 'btn_force')
    onCancel()
  }
}

function brcmChangeAllRowsColorOfUserAcc(rowSelected, tblId, row)
{
  var myRows = CntnFrmName(rowSelected.name);
  var rwCount = rowcount(tblId);
  var prntid = CntnFrmDoc(tblId);
  var i;
  var flag;
  var testRow;
  /* check whether top row is selected or not*/
  if (rowSelected.checked == true)
    flag = true;
  else flag = false;
  for (i = row; i <= rwCount - 1; i++)
  {
    var clmnelement = prntid.rows[i];
    if (is_ie)
    {
      if (prntid.rows[i].cells[0].firstChild.checked != flag)
      {
        prntid.rows[i].cells[0].firstChild.checked = flag;
        ChangeRowColor1(prntid.rows[i].cells[0].firstChild);
        enableButton('btn_Remove');
      }
    }
    else
    {
      var tempRow1 = prntid.rows[i].cells[0].firstChild;
      var myTempRowNode1 = tempRow1.parentNode.parentNode;
      if (myTempRowNode1.cells[0].childNodes[1].checked != rowSelected.checked)
      {
        myTempRowNode1.cells[0].childNodes[1].checked = flag;
        ChangeRowColor1(myTempRowNode1.cells[0].childNodes[1]);
        enableButton('btn_Remove');
      }
    }
  }
  disableButton('btn_Up', 'btn_Down', 'btn_Add')
  if (flag == false)
  {
    disableButton('btn_Remove', 'btn_Apply', 'btn_reauthenticate', 'btn_initialize', 'btn_force')
  }
}

function brcmChangeAllRowsColorOfTbl1(rowSelected, tblId, row)
{
  var myRows = CntnFrmName(rowSelected.name);
  var rwCount = rowcount(tblId);
  var prntid = CntnFrmDoc(tblId);
  var i;
  var flag;
  /* check whether top row is selected or not*/
  if (rowSelected.checked == true)
    flag = true;
  else flag = false;
  for (i = row; i <= rwCount - 1; i++)
  {
    var clmnelement = prntid.rows[i];
    if (prntid.rows[i].cells[0].firstChild.checked != flag)
    {
      prntid.rows[i].cells[0].firstChild.checked = flag;
      if (((!is_ie) && (tblId == 'sec_ip')) || ((!is_ie) && (tblId == 'mac_bind_tbl')) || ((!is_ie) && (tblId == 'ip_bind_tbl')))
      {
        prntid.rows[i].cells[0].childNodes[1].checked = flag;
      }
      ChangeRowColor1(prntid.rows[i].cells[0].firstChild);
      enableButton('btn_Remove');
    }
  }
  disableButton('btn_Up', 'btn_Down', 'btn_Add')
  if (flag == false)
  {
    disableButton('btn_Remove', 'btn_Apply', 'btn_reauthenticate', 'btn_initialize', 'btn_force')
  }
}

function ChangeRowColor1(rowSelected)
{
  var myRow = rowSelected.parentNode.parentNode;
  var i;
  clLen = " selectedRow".length
  if (rowSelected.checked == true)
  {
    for (i = 0; i < myRow.cells.length; i++)
    {
      fc = myRow.cells[i].firstChild
      myRow.cells[i].className = myRow.cells[i].className + " selectedRow";
      if (fc != null && fc.tagName == 'INPUT')
      {
        fc.className = fc.className + " selectedRow"
      }
    }
  }
  else
  {
    for (i = 0; i < myRow.cells.length; i++)
    {
      var cN = myRow.cells[i].className
      fc = myRow.cells[i].firstChild;
      if (cN.substring(cN.length - clLen, cN.length) == " selectedRow")
      {
        myRow.cells[i].className = cN.substring(0, cN.length - clLen);
        if (fc != null && fc.tagName == 'INPUT')
          fc.className = fc.className.substring(0, fc.className.length - clLen);
      }
    }
  }
  return;
}

function CheckRowColor(tblid)
{
  var myRow;
  var i;
  var rownumber;
  var rwcount = rowcount(tblid)
  clLen = " selectedRow".length
  prntid = CntnFrmDoc(tblid)
  frmObj = document.forms[0]
  if (frmObj == undefined)
  {
    frmObj = document.frames("maincontent").document.forms[0]
  }
  for (rownumber = 2; rownumber < rwcount; rownumber++)
  {
    myRow = frmObj.elements[rownumber].parentNode.parentNode
    ele = frmObj.elements[rownumber]
    for (i = 0; i < myRow.cells.length; i++)
    {
      fc = myRow.cells[i].firstChild
      var cN = myRow.cells[i].className
      if (cN.substring(cN.length - clLen, cN.length) == " selectedRow")
      {
        myRow.cells[i].className = cN.substring(0, cN.length - clLen);
        ele.checked = false;
        if (fc != null && fc.tagName == 'INPUT')
          fc.className = fc.className.substring(0, fc.className.length - clLen);
      }
    }
  }
}

function RevertRowColor(tblid)
{
  var myRow;
  var i;
  var rownumber;
  var rwcount = rowcount(tblid)
  clLen = " selectedRow".length
  prntid = window.frames['maincontent'].document.getElementById(tblid)
  frmObj = document.forms[0]
  if (frmObj == undefined)
  {
    frmObj = window.frames['maincontent'].document.forms[0]
  }
  for (rownumber = 2; rownumber < rwcount; rownumber++)
  {
    myRow = prntid.rows[rownumber]
    for (i = 0; i < myRow.cells.length; i++)
    {
      fc = myRow.cells[i].firstChild
      var cN = myRow.cells[i].className
      if (cN.substring(cN.length - clLen, cN.length) == " selectedRow")
      {
        myRow.cells[i].className = cN.substring(0, cN.length - clLen);
        if (fc != null && fc.tagName == 'INPUT')
          fc.className = fc.className.substring(0, fc.className.length - clLen);
      }
    }
  }
}

function onIpInterfaceCancel(tblid)
{
  RevertRowColor(tblid);
  onCancel(tblid);
}
var str1
if (navigator.appName.indexOf("Internet Explorer") != -1) showRow = 'block'
else showRow = 'table-row'

function toggleLyr(lyrid)
{
  lyobj = docById(lyrid).style;
  if (lyobj.display == 'block' || lyobj.display == 'table-row' || lyobj.display == '')
  {
    lyobj.display = 'none'
  }
  else lyobj.display = showRow

  /* resize iframe */
  parent.resizeMainFrame();
}

function resizeProperHeight()
{
  /* resize iframe */
  parent.resizeMainFrame();
}

function togImg(obj, index, indexLength, prntid)
{
  var found = [];
  var src = obj.attributes['src'].value;
  var j = (index - 1) * 2;
  var found = src.split("_");
  switch (found[1])
  {
  case "checked":
    while (indexLength >= 0)
    {
      membership = docById(prntid).value;
      docById(prntid).value = membership.substr(0, j) + "1" + membership.substr(j + 1);
      index++;
      indexLength--;
      j = 2 * (index - 1);
    }
    break;
  case "blank":
    while (indexLength >= 0)
    {
      membership = docById(prntid).value;
      docById(prntid).value = membership.substr(0, j) + "0" + membership.substr(j + 1);
      index++;
      indexLength--;
      j = 2 * (index - 1);
    }
    break;
  case "tagged":
    while (indexLength >= 0)
    {
      membership = docById(prntid).value;
      docById(prntid).value = membership.substr(0, j) + "1" + membership.substr(j + 1);
      index++;
      indexLength--;
      j = 2 * (index - 1);
    }
    break;
  case "untagged":
    while (indexLength >= 0)
    {
      membership = docById(prntid).value;
      docById(prntid).value = membership.substr(0, j) + "2" + membership.substr(j + 1);
      index++;
      indexLength--;
      j = 2 * (index - 1);
    }
    break;
  case "clear":
    while (indexLength >= 0)
    {
      membership = docById(prntid).value;
      docById(prntid).value = membership.substr(0, j) + "3" + membership.substr(j + 1);
      index++;
      indexLength--;
      j = 2 * (index - 1);
    }
    break;
  default:
    break;
  }
}

function imgtag(optn)
{
  optn = docById('groupOpera').selectedIndex;
  var prntblid = docById("tbl1");
  var str = $("img[name='imx']").attr("src");
  if (optn == 0)
  {
    tabimgsrc = "untagged";
    membership = docById("hiddenMem").value;
    for (i = 0; i < membership.length; i += 2)
    {
      docById("hiddenMem").value = membership.substr(0, i) + "2" + membership.substr(i + 1);
      membership = docById("hiddenMem").value;
    }
  }
  else if (optn == 1)
  {
    tabimgsrc = "tagged";
    membership = docById("hiddenMem").value;
    for (i = 0; i < membership.length; i += 2)
    {
      docById("hiddenMem").value = membership.substr(0, i) + "1" + membership.substr(i + 1);
      membership = docById("hiddenMem").value;
    }
  }
  else if (optn == 2)
  {
    tabimgsrc = "blank";
    membership = docById("hiddenMem").value;
    for (i = 0; i < membership.length; i += 2)
    {
      docById("hiddenMem").value = membership.substr(0, i) + "3" + membership.substr(i + 1);
      membership = docById("hiddenMem").value;
    }
  }

  var found = str.split("_");
  str = str.replace(found[1], tabimgsrc);
  $("img[name='imx']").attr("src", str);
}

function chngeImg(arg)
{
  if (arg != null)
  {
    var src = arg[0].attributes["src"].value;
    if (src.indexOf("up") != -1)
    {
      src = src.replace("up", "normal");
    }
    else if (src.indexOf("normal") != -1)
    {
      src = src.replace("normal", "up");
    }
    arg[0].attributes["src"].value = src;
  }
}

function sbmit()
{
  elment = document.getElementById('btn_Apply')
  ln = elment.src.length - 6
  temp = elment.src.substring(ln, elment.src.length)
  if (temp == "on.gif")
  {
    disableButton('btn_Apply', 'btn_Cancel', 'btn_reauthenticate', 'btn_initialize', 'btn_force')
  }
}

function goToSrch(tblid, inputTxt)
{
  txtValue = docById(inputTxt).value;
  var rwcount = rowcount(tblid);
  var actvCheckboxNum = actvCheckbox(tblid)
  clLen = " selectedRow".length
  prntid = docById(tblid)
  myRow = prntid.rows[1]
  if (myRow.cells[0].firstChild.checked == true)
  {
    for (i = 0; i < myRow.cells.length; i++)
    {
      var fc = prntid.rows[1].cells[i].children[0];
      if (fc != null)
      {
        if (fc.tagName == "SELECT")
        {
          SelectObject = fc
          SelectObject.selectedIndex = defaultInd[i]
        }
      }
    }
  }
  flag = true;
  for (ronum = 1; ronum < rwcount; ronum++)
  {
    if (prntid.rows[ronum].cells[1].innerHTML == txtValue)
    {
      flag = false;
      j = ronum - 1
    }
    else
    {
      clmnelement = prntid.rows[ronum]
      rowSelected = clmnelement.cells[0].children[0];
      var myRows = document.getElementsByName(rowSelected.name);
      rowSelected.checked = false
      ChangeRowColor1(myRows[ronum - 1]);
    }
  }
  if (flag == true)
  {
    alert('Interface' + " " + txtValue + " " + 'is not found in this page');
    onCancel()
    loadDefaults(tblid)
  }
  else
  {
    clmnelement = prntid.rows[j + 1]
    rowSelected = clmnelement.cells[0].children[0];
    var myRows = document.getElementsByName(rowSelected.name);
    rowSelected.checked = true
    myRows[j].onclick();
  }
}

function firstHTMLElementChild(parentHTMLElement)
{
  if ((parentHTMLElement == null) || (parentHTMLElement == undefined))
    return null;
  for (var childNodeIndex = 0; childNodeIndex < parentHTMLElement.childNodes.length; childNodeIndex++)
  {
    if (parentHTMLElement.childNodes[childNodeIndex].nodeType == 1)
      return parentHTMLElement.childNodes[childNodeIndex];
  }
  return null;
}
var defaultInd = new Array();
var defaultValNotChanged = true;

function editRow(rowSelected, tblid, rw)
{
  var myRow = rowSelected.parentNode.parentNode;
  var actvCheckboxNum = actvCheckbox(tblid)
  var rwcount = rowcount(tblid)
  colCnt = prntid.rows[1].cells.length
  editFlag = true
  prntid = CntnFrmDoc(tblid)
  frmObj = document.forms[0]
  if (frmObj == undefined)
  {
    frmObj = document.frames("maincontent").document.forms[0]
  }
  if (frmObj == null)
  {
    frmObj = window.frames['maincontent'].document.forms[0]
  }
  if (prntid.rows[0].id == 'NonEditRow')
  {
    editFlag = false
    rownumbr = 1;
  }
  else if (prntid.rows[1].id != 'editRow')
  {
    rownumbr = 2
  }
  else
  {
    rownumbr = 1
  }
  if (editFlag)
  {
    if ((actvCheckboxNum != rwcount - (rownumbr)) && (prntid.rows[rownumbr - 1].checked = false))
    {
      fc = firstHTMLElementChild(prntid.rows[rownumbr].cells[0])
      if (fc.tagName != undefined)
      {
        fc.checked = false
      }
    }
  }
  var firstCheckedRow = firstHTMLElementChild(prntid.rows[rownumbr - 1].cells[0])
  if (((actvCheckboxNum == 1) && (rowSelected.checked == true) && (defaultValNotChanged == true)) || (firstCheckedRow.checked == true) && (defaultValNotChanged == true))
  {
    for (i = 0; i < myRow.cells.length; i++)
    {
      fc = firstHTMLElementChild(prntid.rows[1].cells[i])
      if (fc != null && fc.tagName == "SELECT")
      {
        defaultInd[i] = fc.selectedIndex
      }
    }
  }
  if (((actvCheckboxNum == 1) && (rowSelected.checked == false)) && (rwcount > 2))
  {
    cnt = frmObj.elements.length
    cont = prntid.rows.length
    for (rw = 2; rw < cont; rw++)
    {
      if (prntid.rows[rw] != null)
      {
        if (firstHTMLElementChild(prntid.rows[rw].cells[0]).checked == true)
        {
          myRow = prntid.rows[rw];
          cnt = myRow.cells.length;
          for (j = 1; j < cnt; j++)
          {
            cellObj = prntid.rows[rownumbr].cells[j]
            fc = firstHTMLElementChild(cellObj);
            if (fc != null && fc.tagName != ' ')
            {
              if (fc.tagName == "SELECT")
              {
                txtValue = myRow.cells[j].innerHTML
                SelectObject = fc
                for (index = 0; index < SelectObject.length; index++)
                {
                  SelectObject.disabled = '';
                  if (SelectObject[index].value == txtValue)
                    SelectObject.selectedIndex = index;
                  else if (SelectObject[index].text == txtValue)
                    SelectObject.selectedIndex = index;
                }
              }
              else if (fc.tagName == "INPUT")
              {
                txfld = fc
                if (myRow.cells[j].innerHTML.substring(0, 6) == '&nbsp;')
                {
                  elmval = myRow.cells[j].innerHTML.substring(0, myRow.cells[j].innerHTML.length - 6);
                  txfld.value = elmval
                }
                else
                {
                  if (tblid == 'ip_acl_tbl' || tblid == 'policy_cfg' || tblid == 'lagCfg')
                    txfld.value = myRow.cells[j].childNodes[0].childNodes[0].nodeValue
                  else
                    txfld.value = myRow.cells[j].innerHTML
                }
                fc.className = 'input';
                fc.disabled = '';
                fc.className = 'input';
              }
              else
              {
                prntid.rows[rownumbr].cells[j].innerHTML = myRow.cells[j].innerHTML
              }
            }
            else
            {
              prntid.rows[rownumbr].cells[j].innerHTML = myRow.cells[j].innerHTML;
            }
          }
        }
      }
      enableButton('btn_Up', 'btn_Down', 'btn_Remove', 'btn_Apply', 'btn_Add', 'btn_reauthenticate', 'btn_initialize', 'btn_force');
    }
  }
  if (rowSelected.checked == true)
  {
    if (actvCheckboxNum < 2)
    {
      if (actvCheckboxNum == 1 && rwcount > 2)
      {
        cont = myRow.cells.length;
        for (i = 1; i < cont; i++)
        {
          fc = firstHTMLElementChild(prntid.rows[rownumbr].cells[i]);
          if (fc != null && fc.tagName != ' ')
          {
            if (fc.tagName == "SELECT")
            {
              txtValue = myRow.cells[i].innerHTML;
              if (tblid == 'policy_cfg' && (txtValue != ""))
              {
                txtValue = myRow.cells[i].childNodes[0].childNodes[0].nodeValue;
              }
              SelectObject = firstHTMLElementChild(prntid.rows[rownumbr].cells[i]);
              for (index = 0; index < SelectObject.length; index++)
              {
                SelectObject.disabled = '';
                if (SelectObject[index].value == txtValue)
                  SelectObject.selectedIndex = index;
                else if (SelectObject[index].text == txtValue)
                  SelectObject.selectedIndex = index;
              }
            }
            else if (fc.tagName == "INPUT")
            {
              fc.className = 'input';
              fc.disabled = '';
              txfld = fc
              if (myRow.cells[i].innerHTML.substring(0, 6) == '&nbsp;')
              {
                elmval = myRow.cells[i].innerHTML.substring(0, myRow.cells[i].innerHTML.length - 6);
                txfld.value = elmval
              }
              else
              {
                if (tblid == 'ip_acl_tbl' || tblid == 'policy_cfg' || tblid == 'lagCfg')
                  txfld.value = myRow.cells[i].childNodes[0].childNodes[0].nodeValue
                else
                  txfld.value = myRow.cells[i].innerHTML
              }
            }
            else
            {
              prntid.rows[rownumbr].cells[i].innerHTML = myRow.cells[i].innerHTML;
            }
          }
          else
          {
            prntid.rows[rownumbr].cells[i].innerHTML = myRow.cells[i].innerHTML;
          }
        }
        if (rwcount > 3)
        {
          enableButton('btn_Up', 'btn_Down', 'btn_Remove', 'btn_Apply', 'btn_Add', 'btn_reauthenticate', 'btn_initialize', 'btn_force');
        }
        else
        {
          if (rwcount > 2)
          {
            enableButton('btn_Apply', 'btn_Remove', 'btn_Add', 'btn_reauthenticate', 'btn_initialize', 'btn_force')
          }
        }
      }
    }
  }
  if (actvCheckboxNum >= 1)
  {
    disableButton('btn_Up', 'btn_Down', 'btn_Add');
    var myRow = rowSelected.parentNode.parentNode;
    for (i = 1; i < colCnt; i++)
    {
      if (prntid.rows[rownumbr].cells[i] != undefined)
      {
        fc = firstHTMLElementChild(prntid.rows[rownumbr].cells[i]);
        if (fc != null && fc.tagName == "SELECT")
        {
          if ((actvCheckboxNum > 1) && (tblid != 'cosqtbl'))
          {
            SelectObject = fc
            SelectObject.selectedIndex = 0;
            if ((prntid.rows[rownumbr].cells[i].id == 'unique'))
            {
              SelectObject.disabled = 'disabled';
            }
          }
        }
        else if ((fc != null && fc.tagName == "INPUT" && prntid.rows[rownumbr].cells[i].id == 'unique') || (fc != null && fc.tagName == "INPUT" && prntid.rows[rownumbr].cells[i].id == 'noupdate'))
        {
          ElmntObject = fc
          if ((actvCheckboxNum > 1) && ((prntid.rows[rownumbr].cells[i].id == 'unique') || (prntid.rows[rownumbr].cells[i].id == 'noupdate')))
            ElmntObject.value = '';
          if ((prntid.rows[rownumbr].cells[i].id == 'noupdate') || ((actvCheckboxNum > 1) && (prntid.rows[rownumbr].cells[i].id == 'unique')))
          {
            ElmntObject.disabled = 'disabled';
            ElmntObject.className = 'inputDisabled';
          }
        }
        else if ((fc != null && fc.tagName == "INPUT" && prntid.rows[rownumbr].cells[i].id != 'unique'))
        {
          if (actvCheckboxNum > 1)
            firstHTMLElementChild(prntid.rows[rownumbr].cells[i]).value = ''
        }
        else if (fc != null && fc.innerHTML == undefined)
        {
          if (actvCheckboxNum > 1)
            prntid.rows[rownumbr].cells[i].innerHTML = '&nbsp;'
        }
        else
        {
          if (actvCheckboxNum > 1)
            prntid.rows[rownumbr].cells[i].innerText = ' '
        }
      }
    }
  }
  else if (actvCheckboxNum == 0)
  {
    for (i = 1; i < colCnt; i++)
    {
      var cels = prntid.rows[rownumbr].cells[i]
      if (cels != undefined)
      {
        fc = cels.firstChild;
        if (fc != null && fc.tagName == "SELECT")
        {
          SelectObject = fc
          SelectObject.selectedIndex = defaultInd[i]
          SelectObject.disabled = '';
        }
        else if (fc != null && fc.tagName == "INPUT")
        {
          fc.value = '';
          fc.disabled = '';
          fc.className = 'input';
        }
        else
        {
          if (fc != null && fc.innerHTML == undefined)
          {
            cels.innerHTML = '&nbsp;'
          }
        }
      }
    }
  }
}

function myEditRow(rowSelected, tblid, rw)
{
  var myRow = rowSelected.parentNode.parentNode;
  var actvCheckboxNum = actvCheckbox(tblid); /* Number of checkboxes checked */
  var rwcount = rowcount(tblid)
  var checkStatus = 0;
  var selRowNo = 0;
  var tempRow;
  var tempActCheckboxNum = 0;
  colCnt = prntid.rows[0].cells.length
  editFlag = true
  prntid = CntnFrmDoc(tblid)
  frmObj = document.forms[0]
  if (frmObj == undefined)
  {
    frmObj = document.frames("maincontent").document.forms[0]
  }
  if (prntid.rows[0].id == 'NonEditRow')
  {
    editFlag = false
  }
  else if (prntid.rows[1].id != 'editRow') /* to get the editable row number */
  {
    rownumbr = 1
  }
  else
  {
    rownumbr = 1 /*Editable row no*/
  }
  if (editFlag)
  {
    if ((actvCheckboxNum != rwcount - (rownumbr)) && (prntid.rows[rownumbr].checked = false))
    {
      fc = prntid.rows[rownumbr].cells[0].firstChild
      if (fc.tagName != undefined)
      {
        fc.checked = false
      }
    }
  }
  /* get the no of the row that is selected */
  for (rno = 1; rno < rwcount; rno++)
  {
    tempRow = prntid.rows[rno].cells[0].firstChild
    if (rowSelected == tempRow)
    {
      selRowNo = rno;
      break;
    }
  }
  /* end of get row no */
  /*get the editable row object */
  var firstCheckedRow = prntid.rows[rownumbr].cells[0].firstChild
  if (rowSelected == firstCheckedRow) /*row selected is the editable row */
  {
    if (rowSelected.checked == true) /*check all the rows */
    {
      for (i = 0; i < myRow.cells.length; i++)
      {
        fc = prntid.rows[1].cells[i].firstChild
        if (fc != null && fc.tagName == "SELECT")
        {
          /*defaultInd[i]=fc.selectedIndex */
          SelectObject = fc
          SelectObject.selectedIndex = defaultInd[i]
          if (prntid.rows[1].cells[i].id == 'unique')
          {
            SelectObject.disabled = 'disabled';
          }
          else
          {
            SelectObject.disabled = '';
          }
        }
        else if (fc != null && fc.tagName == "INPUT")
        {
          if (prntid.rows[1].cells[i].id == 'unique')
          {
            ElmntObject = fc
            ElmntObject.value = '';
            ElmntObject.disabled = 'disabled';
            ElmntObject.className = 'inputDisabled';
          }
          else
          {
            prntid.rows[rownumbr].cells[i].firstChild.value = ''
          }
        }
        else
        {
          prntid.rows[rownumbr].cells[i].innerHTML = '';
        }
      }
      enableButton('btn_Up', 'btn_Down', 'btn_Remove', 'btn_Apply', 'btn_reauthenticate', 'btn_initialize');
    }
    else /*uncheck all the rows */
    {
      for (i = 1; i < colCnt; i++)
      {
        var cels = prntid.rows[rownumbr].cells[i]
        if (cels != undefined)
        {
          fc = cels.firstChild
          if (fc != null && fc.tagName == "SELECT")
          {
            SelectObject = fc
            SelectObject.selectedIndex = defaultInd[i]
            SelectObject.disabled = '';
          }
          else if (fc != null && fc.tagName == "INPUT")
          {
            fc.value = '';
            fc.disabled = '';
            fc.className = 'input';
          }
          else
          {
            if (fc != null && fc.innerHTML == undefined)
            {
              cels.innerHTML = '&nbsp;'
            }
          }
        }
      } /*end of for loop */
      disableButton('btn_Up', 'btn_Down', 'btn_Apply', 'btn_Remove');
    }
  }
  else
  {
    /* we wre here when item edited is not the editable row. */
    tempActCheckboxNum = 0;
    if (firstCheckedRow.checked == true)
    {
      tempActCheckboxNum = actvCheckboxNum - 1;
    }
    else
    {
      tempActCheckboxNum = actvCheckboxNum;
    }
    if (rowSelected.checked == false && tempActCheckboxNum == 1)
    {
      checkStatus = 4; /* uncheck penultimate one*/
    }
    else if (rowSelected.checked == false && tempActCheckboxNum == 0)
    {
      checkStatus = 3; /* uncheck ultimate one*/
    }
    else if (rowSelected.checked == true && tempActCheckboxNum == 2)
    {
      checkStatus = 2; /* check penumtimate one*/
    }
    else if (rowSelected.checked == true && tempActCheckboxNum == 1)
    {
      checkStatus = 1; /* check untimate one*/
    }
    var tempVal;
    switch (checkStatus)
    {
    case 1:
      /* chedking ultimate one */
    case 4:
      /* unchedking penultimate one*/
        var tempVal;
      for (i = 1; i < colCnt; i++)
      {
        var cels = prntid.rows[rownumbr].cells[i]
        if (cels != undefined)
        {
          /*if (( is_ie ) || (tblid=='sec_ip') || (tblid=='vlanRouting'))
					  fc=cels.firstChild;
				  else
					  fc=cels.childNodes[1];  */
          fc = cels.firstChild;
          if (checkStatus == 4)
          {
            for (rnoTemp = 2; rnoTemp < rwcount; rnoTemp++)
            {
              if (is_ie)
              {
                tempRow = prntid.rows[rnoTemp].cells[0].firstChild
                if (tempRow.checked == true)
                {
                  selRowNo = rnoTemp;
                  break;
                }
              }
              else
              {
                tempRow = prntid.rows[rnoTemp].cells[0].firstChild
                var myTempRowNode = tempRow.parentNode.parentNode;
                if (myTempRowNode.cells[0].childNodes[0].checked == true)
                {
                  selRowNo = rnoTemp;
                  break;
                }
                if ((tblid == 'sec_ip') && (myTempRowNode.cells[0].childNodes[1].checked == true))
                {
                  selRowNo = rnoTemp;
                  break;
                }
              }
            }
          }
          else
          {
            for (rnoTemp = 2; rnoTemp < rwcount; rnoTemp++)
            {
              tempRow = prntid.rows[rnoTemp].cells[0].firstChild;
              if (tempRow.checked == true)
              {
                selRowNo = rnoTemp;
                break;
              }
            }
          }
          if (fc != null && fc.tagName == "SELECT")
          {
            SelectObject = fc
            SelectObject.selectedIndex = defaultInd[i]
            SelectObject.disabled = '';
            if (checkStatus == 4)
            {
              if (is_ie)
              {
                tempRow = prntid.rows[selRowNo].cells[0].firstChild
                tempVal = prntid.rows[selRowNo].cells[i].firstChild.value;
                prntid.rows[rownumbr].cells[i].firstChild.value = tempVal;
              }
              else
              {
                tempRow = prntid.rows[selRowNo].cells[0].firstChild
                if (tblid == 'sec_ip')
                {
                  tempVal = prntid.rows[selRowNo].cells[i].childNodes[1].value;
                }
                else
                {
                  var myTempRowNode = tempRow.parentNode.parentNode;
                  tempVal = myTempRowNode.cells[i].childNodes[1].value;
                }
                var myEditRowNode = firstCheckedRow.parentNode.parentNode;
                myEditRowNode.cells[i].childNodes[0].value = tempVal
              }
            }
            else
            {
              if (is_ie)
                tempVal = prntid.rows[selRowNo].cells[i].firstChild.value;
              else
              {
                tempVal = myRow.cells[i].childNodes[1].value;
              }
              prntid.rows[rownumbr].cells[i].firstChild.value = tempVal;
            }
          }
          else if (fc != null && fc.tagName == "INPUT")
          {
            fc.value = '';
            fc.disabled = '';
            fc.className = 'input';
            if (checkStatus == 4)
            {
              if (is_ie)
              {
                tempRow = prntid.rows[selRowNo].cells[0].firstChild
                tempVal = prntid.rows[selRowNo].cells[i].firstChild.value;
                prntid.rows[rownumbr].cells[i].firstChild.value = tempVal;
              }
              else
              {
                tempRow = prntid.rows[selRowNo].cells[0].firstChild
                if (tblid == 'sec_ip')
                {
                  tempVal = prntid.rows[selRowNo].cells[i].childNodes[1].value;
                }
                else
                {
                  var myTempRowNode = tempRow.parentNode.parentNode;
                  tempVal = myTempRowNode.cells[i].childNodes[1].value;
                }
                var myEditRowNode = firstCheckedRow.parentNode.parentNode;
                myEditRowNode.cells[i].childNodes[0].value = tempVal
              }
            }
            else
            {
              if (is_ie)
              {
                tempVal = prntid.rows[selRowNo].cells[i].firstChild.value;
                prntid.rows[rownumbr].cells[i].firstChild.value = tempVal;
              }
              else
              {
                tempVal = myRow.cells[i].childNodes[1].value;
                var myEditRowNode = firstCheckedRow.parentNode.parentNode;
                myEditRowNode.cells[i].childNodes[0].value = tempVal
              }
            }
          }
          else
          {
            if (checkStatus == 4)
            {
              if (is_ie)
              {
                tempRow = prntid.rows[selRowNo].cells[0].firstChild
                tempVal = prntid.rows[selRowNo].cells[i].firstChild.value;
                prntid.rows[rownumbr].cells[i].innerHTML = tempVal;
              }
              else
              {
                tempRow = prntid.rows[selRowNo].cells[0].firstChild
                if (tblid == 'sec_ip')
                {
                  tempVal = prntid.rows[selRowNo].cells[i].childNodes[1].value;
                }
                else
                {
                  var myTempRowNode = tempRow.parentNode.parentNode;
                  tempVal = myTempRowNode.cells[i].childNodes[1].value;
                }
                var myEditRowNode = firstCheckedRow.parentNode.parentNode;
                prntid.rows[rownumbr].cells[i].innerHTML = tempVal;
              }
            }
            else
            {
              if (is_ie)
                tempVal = prntid.rows[selRowNo].cells[i].firstChild.value;
              else
              {
                tempVal = myRow.cells[i].childNodes[1].value;
              }
              prntid.rows[rownumbr].cells[i].innerHTML = tempVal;
            }
          }
        }
      } /*end of for loop */
      break;
    case 2:
      /* checking penultimate one */
    case 3:
      /* unchedking ultimate one*/
        for (i = 0; i < myRow.cells.length; i++)
        {
          fc = prntid.rows[1].cells[i].firstChild
          if (fc != null && fc.tagName == "SELECT")
          {
            /*defaultInd[i]=fc.selectedIndex */
            SelectObject = fc
            SelectObject.selectedIndex = defaultInd[i]
            if (prntid.rows[1].cells[i].id == 'unique' && checkStatus == 2)
            {
              SelectObject.disabled = 'disabled';
            }
            else
            {
              SelectObject.disabled = '';
            }
          }
          else if (fc != null && fc.tagName == "INPUT")
          {
            if (prntid.rows[1].cells[i].id == 'unique')
            {
              if (checkStatus == 3)
              {
                ElmntObject = fc
                ElmntObject.value = '';
                ElmntObject.disabled = '';
                ElmntObject.className = 'input';
              }
              else
              {
                ElmntObject = fc
                ElmntObject.value = '';
                ElmntObject.disabled = 'disabled';
                ElmntObject.className = 'inputDisabled';
              }
            }
            else
            {
              prntid.rows[rownumbr].cells[i].firstChild.value = ''
            }
          }
          else
          {
            prntid.rows[rownumbr].cells[i].innerHTML = '';
          }
      }
      break;
    default:
      break;
    }
    if (tempActCheckboxNum >= 1)
    {
      enableButton('btn_Up', 'btn_Down', 'btn_Remove', 'btn_Apply', 'btn_reauthenticate', 'btn_initialize');
      disableButton('btn_Add');
    }
    else
    {
      disableButton('btn_Up', 'btn_Down', 'btn_Remove', 'btn_Apply');
      enableButton('btn_Add', 'btn_reauthenticate', 'btn_initialize');
    }
  }
}

function mysrch(tblid, optncolmn, inputTxt, val)
{
  flag = true;
  if (optncolmn != '')
  {
    sltoptn = document.getElementById(optncolmn).selectedIndex
  }
  else sltoptn = val;
  txtValue = document.getElementById(inputTxt).value;
  var rwcount = document.getElementById(tblid).rows.length
  prntid = document.getElementById(tblid)
  var count = 0;
  var tbl = document.getElementById(tblid);
  var str = '<table cellspacing="0" cellpadding="0"  border="0" width="100%" id=' + tblid + '>'
  str += "<tr class='white10Bold'>" + tbl.rows[0].innerHTML + "</tr><tr>";
  for (ronum = 1; ronum < rwcount; ronum++)
  {
    if (is_ie)
    {
      inputVal = prntid.rows[ronum].cells[sltoptn].innerText;
    }
    else
    {
      inputVal = prntid.rows[ronum].cells[sltoptn].innerHTML;
    }
    if (inputVal == txtValue)
    {
      count++;
      flag = false;
      enableButton('btn_Remove');
      colCnt = tbl.rows[ronum].cells.length;
      for (var j = 0; j < colCnt; j++)
      {
        if (count % 2 == 0)
          str += "<td nowrap class='messageTableWhiteBorder defaultFont' align='left'>" + tbl.rows[ronum].cells[j].innerHTML + "</td>";
        else
          str += "<td nowrap class='messageTableGreyBorder defaultFont' align='left'>" + tbl.rows[ronum].cells[j].innerHTML + "</td>";
      }
      str += "</tr>";
    }
  }
  str += "</table>";
  tbl.parentNode.innerHTML = str;
  if (flag == true)
  {
    alert('Search ' + txtValue + ' is not found in this page')
  }
}

function rowcount(tblid)
{
  prntid = docById(tblid)
  if (prntid == null)
    prntid = window.frames['maincontent'].document.getElementById(tblid)
  rwcount = prntid.rows.length
  return (rwcount)
}
lastValue = ""

function onCancel(tblid)
{
  elment = BtmFrmDoc('btn_Cancel')
  if (elment != undefined)
  {
    ln = elment.src.length - 6
    temp = elment.src.substring(ln, elment.src.length)
    if (temp == "on.gif")
    {
      var actvCheckboxNum = actvCheckbox(tblid)
      what = document.forms[0]
      if (what == undefined)
        what = window.frames['maincontent'].document.forms[0]
      if (what == null)
        what = document.frames['maincontent'].document.forms[0]
      for (var i = 0, j = what.elements.length; i < j; i++)
      {
        myName = what.elements[i].type;
        ele = what.elements[i]
        if (myName == 'radio')
        {
          ele.checked = ele.defaultChecked;
        }
        if (myName == 'checkbox')
          if (ele.checked == true)
          {
            ele.checked = false
            ele.onclick();
            ele.checked = false
          }
        if (myName == 'text')
          ele.value = ele.defaultValue;
        if (myName == 'file')
        {
          ele.value = ele.defaultValue;
          refreshFileValue(ele);
        }
        if (myName == 'password')
          ele.value = ele.defaultValue;
        if (myName == 'select-one')
          for (var k = 0, l = ele.options.length; k < l; k++)
            ele.options[k].selected = ele.options[k].defaultSelected;
      }
      if (tblid != 'httpTbl')
      {
        if (tblid == 'ip_rules')
        {
          disableButton('btn_Up', 'btn_Down', 'btn_Remove', 'btn_Cancel', 'btn_Apply', 'btn_reauthenticate', 'btn_initialize', 'btn_force');
        }
        else
        {
          disableButton('btn_Up', 'btn_Down', 'btn_Add', 'btn_Delete', 'btn_Remove', 'btn_Cancel', 'btn_Apply', 'btn_reauthenticate', 'btn_initialize', 'btn_force');
        }
      }
    }
  }
}

function refreshFileValue(origi)
{
  var duplic = origi.cloneNode(false);
  duplic.onchange = origi.onchange; // events are not cloned
  origi.parentNode.replaceChild(duplic, origi);
}

function actvCheckbox(tblid)
{
  chkbxcnt = 0
  frmObj = document.forms[0]
  if (frmObj == undefined)
    frmObj = window.frames['maincontent'].document.forms[0]
  for (i = 0; i < frmObj.elements.length; i++)
  {
    if ((frmObj.elements[i].type == 'checkbox') || (frmObj.elements[i].type == 'radio'))
    {
      if ((frmObj.elements[i].checked == true) && (frmObj.elements[i].parentNode.parentNode.parentNode.parentNode.id == tblid))
      {
        chkbxcnt = chkbxcnt + 1
      }
    }
  }
  return (chkbxcnt);
}
textNameObj = ""

function tagImage(obj, lyrid)
{
  pntelment = obj.childNodes[0];
  ln = pntelment.src.length - 5
  temp = pntelment.src.substring(ln, pntelment.src.length)
  if (temp == 'b.gif')
  {
    tabimgsrc = 't.gif';
  }
  else if (temp == 't.gif')
  {
    tabimgsrc = 'u.gif';
  }
  else
  {
    tabimgsrc = 'b.gif';
  }
  prntTblid = docById(lyrid)
  for (i = 0; i < prntTblid.rows.length; i++)
  {
    colelemnt = prntTblid.rows[i].cells
    for (j = 0; j < colelemnt.length; j++)
    {
      col = colelemnt[j].firstChild
      if (col.tagName == 'A')
      {
        elment = col.childNodes[0]
        if (elment.src != undefined)
        {
          elment.src = elment.src.substring(0, elment.src.length - 5) + tabimgsrc;
        }
      }
    }
  }
}

function tagCheckImage(obj, lyrid)
{
  pntelment = obj.childNodes[0];
  ln = pntelment.src.length - 9
  temp = pntelment.src.substring(ln, pntelment.src.length)
  if (temp == 'blank.gif')
  {
    tabimgsrc = 'check.gif';
  }
  else
  {
    tabimgsrc = 'blank.gif';
  }
  prntTblid = docById(lyrid)
  for (i = 0; i < prntTblid.rows.length; i++)
  {
    colelemnt = prntTblid.rows[i].cells
    for (j = 0; j < colelemnt.length; j++)
    {
      col = colelemnt[j].firstChild
      if (col.tagName == 'A')
      {
        elment = col.childNodes[0]
        if (elment.src != undefined)
        {
          elment.src = elment.src.substring(0, elment.src.length - 9) + tabimgsrc;
        }
      }
    }
  }
}

function refresh()
{
  window.frames['maincontent'].location.reload(true)
  onCancel();
}

function checkboxAll(lyrid, ths)
{
  var parentobj = docById(lyrid)
  var elemobjt = parentobj.getElementsByTagName("input");
  var elemcount = elemobjt.length;
  for (var i = 0; i < elemcount; i++)
  {
    if (ths.checked == true)
    {
      elemobjt[i].checked = true;
    }
    else elemobjt[i].checked = false;
  }
}

function loadDefaults(tblid)
{
  trow = docById('editRow')
  for (i = 1; i < trow.childNodes.length; i++)
  {
    if (trow.childNodes[i].firstChild.tagName == undefined)
    {
      trow.children[i].innerHTML = '&nbsp;'
    }
  }
}

function rset()
{
  document.frm.reset()
}
var win = null;
var glParam;

function newWindow(mypage, myname, w, h, features, purp)
{
  glParam = features;
  features = "resizable=yes,scrollbars=yes";
  var winl = (screen.width - w) / 2;
  var wint = (screen.height - h) / 2;
  if (winl < 0) winl = 0;
  if (wint < 0) wint = 0;
  var settings = 'height=' + h + ',';
  settings += 'width=' + w + ',';
  settings += 'top=' + wint + ',';
  settings += 'left=' + winl + ',';
  settings += features;
  win = window.open(mypage, myname, settings);
  if (win != null)
  {
    win.focus();
  }
  if (purp == "tag")
  {
    document.getElementById('hd').value = glParam;
  }
}

function CreateEditblBtns(butname, fntn, btnid, hrf, optn)
{
  imgalt = butname;

  str = '<input type="button" class="buttonsOff" name="' + butname + '" id=' + btnid + ' title="' + butname + '"" value="' + butname +'"" onclick=' + fntn + '>';

  if (optn == 'on' || (hrf != undefined && hrf != "" && optn == 'on'))
    str = '<input type="button" class="buttonsOn" name="' + butname + '" id=' + btnid + ' title="' + butname + '"" value="' + butname +'"" onclick=' + fntn + '>';

  /*str = '<a href=javascript:void(0) onclick=' + fntn + '><img style="float: right; margin-left: 5px;" src=images/' + butname + '_off.gif id=' + btnid + '></a> ';
  if (hrf != undefined)
  {
    str = '<a href=' + hrf + '><img style="float: right; margin-left: 5px;" src=images/' + butname + '_off.gif id=' + btnid + '></a> ';
  }
  if (optn == 'on')
  {
    str = '<a href=javascript:void(0) onclick=' + fntn + '><img style="float: right; margin-left: 5px;" src=images/' + butname + '_on.gif id=' + btnid + '></a> ';
  }
  if (hrf != undefined && hrf != "" && optn == 'on')
  {
    str = '<a href=' + hrf + '><img style="float: right; margin-left: 5px;" src=images/' + butname + '_on.gif id=' + btnid + '></a> ';
  }*/
  return str;
}

function CreateButtons(type, butname, fntn, btnid, hrf, optn)
{
  imgalt = butname
  if (imgalt == 'clearcounters')
  {
    imgalt = 'Clear&nbsp;Counters'
  }
  str = '<' + 'input type=' + type + ' id=' + btnid + ' name=' + btnid + ' src=images/' + butname + '_off.gif disabled=disabled onclick=' + fntn + '> ';
  if (optn == 'on')
  {
    str = '<' + 'input type=' + type + ' id=' + btnid + ' name=' + btnid + ' src=images/' + butname + '_on.gif onclick=' + fntn + '> ';
  }
  return str;
}

function PaintButtons(str)
{
  Prntid = BtmFrmDoc('ButtonsDiv')
  if (Prntid != null)
  {
    Prntid.innerHTML = str
  }
}

function helppop(URL)
{
  var popup = window.open(URL, 'CM_Creator', 'width=300,height=200,scrollbars=1,resizable=1');
  popup.focus();
}

function Num(fid, mninum, maxnum)
{
  fdvalue = fid.value;
  if (fdvalue < mninum)
  {
    alert("Out of Range");
    fid.value = '';
    fid.focus()
  }
  if (fdvalue > maxnum)
  {
    alert("Out of Range");
    fid.value = '';
    fid.focus()
  }
}

function validate()
{
  var f = getCP().document.frm;
  var i;
  bp = f.inputBox_BridgePriority.value
  if ((bp < 0) || (bp > 61440))
  {
    alert('Bridge Priority must be between 0 and 61440');
    f.inputBox_BridgePriority.value = "";
    return;
  }
  bpAge = f.inputBox_BridgeMaxAge.value
  if ((bpAge < 6) || (bpAge > 40))
  {
    alert('Bridge Max Age must be between 6 and 40');
    f.inputBox_BridgeMaxAge.value = "";
    return;
  }
  btime = f.inputBox_BridgeHelloTime.value
  if ((btime < 1) || (btime > 10))
  {
    alert('Bridge Hello Time must be between 1 and 10');
    f.inputBox_BridgeHelloTime.value = "";
    return;
  }
  bfwd = f.inputBox_BridgeFwdDelay.value
  if ((bfwd < 4) || (bfwd > 30))
  {
    alert('Bridge Forward Delay must be between 4 and 30');
    f.inputBox_BridgeFwdDelay.value = "";
    return;
  }
  bfwd = f.inputBox_SpanningTreeMaxHops.value
  if ((bfwd < 0) || (bfwd > 999))
  {
    alert('Spanning tree Max Hops must be between 0 and 999');
    f.inputBox_SpanningTreeMaxHops.value = "";
    return;
  }
  sbmit();
}

function checkNumKey(evt)
{
  brType = detectBrowser();
  if (window.event)
  {
    keyCode = evt.keyCode;
    if (keyCode == 8 || keyCode == 9)
    {
      return true;
    }
    if (keyCode == 38 || keyCode == 40 || keyCode == 190 || keyCode == 110 || keyCode == 46)
    {
      evt.returnValue = false;
      return false;
    }
    if (keyCode < 48 || keyCode > 57)
    {
      evt.returnValue = false;
      return;
    }
    num = parseInt(evt.srcElement.value + (evt.keyCode - 48), 10);
    if (evt.srcElement.value.length > 0 && num < 10)
    {
      evt.srcElement.value = num;
      evt.returnValue = false;
    }
    return;
  }
  else if (evt.which)
  {
    whichCode = evt.which;
    if (whichCode == 8 || whichCode == 9)
    {
      return true;
    }
    if (whichCode == 38 || whichCode == 40 || whichCode == 190 || whichCode == 110 || whichCode == 46)
    {
      evt.preventDefault();
      return false;
    }
    if (whichCode < 48 || whichCode > 57)
    {
      evt.preventDefault();
      return false;
    }
    num = parseInt(evt.target.value + (evt.which - 48), 10);
    if (evt.target.value.length > 0 && num < 10)
    {
      evt.target.value = num;
      evt.returnValue = false;
    }
    return;
  }
}
var browsapp = ""

  function detectBrowser()
  {
    var browser = navigator.appName;
    if (browser == "Microsoft Internet Explorer")
    {
      browsapp = "IE";
    }
    else if (browser == "Netscape")
    {
      browsapp = "Netscape"
    }
    else if (browser == "Firefox")
    {
      browsapp = "Firefox"
    }
    return (browsapp);
  }

  function mT()
  {
    document.write("<html><head><meta http-equiv='Content-Type' content='text/html; charset=iso-8859-1' /><link href='../../App_themes/NG/style/default.css' rel='stylesheet' media='screen' /></head>")
  }

  function sT()
  {
    document.write("<html><head><meta http-equiv='Content-Type' content='text/html; charset=iso-8859-1' /><link href='../App_themes/NG/style/default.css' rel='stylesheet' media='screen' /></head>")
  }
  function help_root()
  {
    //if ('defLang' == _top.currLang)
      return '../help/help.html#';

    //return '../help_'+_top.currLang+'/help.html#';
  }
  /* Table head*/
  function tbhdr(tlt, hlpurl)
  {
    str = "<table class='tableStyle borderSeparate'><tr><td class='subSectionTabTopLeft fontTableHeader spacer1Percent whiteSpace borderButtomHeader'>" + tlt;
    if (is_ie8())
    {
      str += "</td><td style='padding-right:15px;' class='subSectionTabTopRight'>";
    }
    else
    {
      str += "</td><td class='subSectionTabTopRight'>";
    }
    if (IsUndefOrNull(hlpurl))
    {
      str += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr>";
    }
    else
    {
      str += "<a href='javascript: void(0);' onClick=\"newWindow('" + help_root() + hlpurl + "','" + hlpurl + "','400','400')\">";
      str += "<img src='../images/icon_help_contentlevel.png' title='" + lang('login', 'txtHelpTitle') + "' id='help_"+hlpurl+"'/></a></td></tr>";
    }
    if (is_ie8())
    {
      str += "<tr><td style='padding-right:15px;' colspan='2'><div class='Underlined UnderlinedIE' ></div>";
    }
    else
    {
      str += "<tr><td colspan='2'><div class='Underlined UnderlinedIE' ></div>";
    }
    str += "<tr><td colspan='3' class='subSectionTabTopShadow'></td></tr></table>"
    //document.write(str);
    return str;
  }
  /* *Table head with saparator for navigation*/
  function tbhdrIntfNvg(tlt, hlpurl)
  {
    str = "<table class='tableStyle borderSeparate'><tr><td class='subSectionTabTopLeft fontTableHeader spacer1Percent whiteSpace borderButtomHeader'>" + tlt;
    str += "</td><td class='subSectionTabTopRight'><a href='javascript: void(0);' onClick=\"newWindow('" + help_root() + hlpurl + "','" + hlpurl + "','400','400')\">";
    str += "<img src='images/icon_help_contentlevel.png' title='" + lang('login', 'txtHelpTitle') + "'/></a></td></tr>"
    str += "<tr><td colspan='2'><div class='Underlined UnderlinedIE' ></div>"
    str += "</table>"
    document.write(str);
  }

  function tbhdrhlp(tlt, hlpurl)
  {
    str = "<table class='tableStyle borderSeparate'><tr><td colspan='2' class='subSectionTabTopLeft spacer80Percent font12BoldBlue borderButtomHeader'>" + tlt;
    str += "</td><td class='subSectionTabTopRight spacer20Percent'><a href='javascript: void(0);' onClick=\"newWindow('" + help_root() + hlpurl + "','" + hlpurl + "','400','400')\">";
    str += "<img src='images/helpIcon.png' width='12' height='12' title='" + lang('login', 'txtHelpTitle') + "'/></a></td></tr><tr><td colspan='3' class='subSectionTabTopShadow'>&nbsp;</td></tr></table>"
    document.write(str);
  }

  function BtmFrmDoc(obj)
  {
    return top.document.getElementById(obj)
  }

  function CntnFrmDoc(obj)
  {
    retObj = document.getElementById(obj)
    if (retObj == null)
      retObj = document.frames("maincontent").document.getElementById(obj)
    if (retObj == null)
    {
      retObj = window.frames['maincontent'].document.getElementById(obj)
    }
    return retObj
  }

  function CntnFrmName(obj)
  {
    return document.getElementsByName(obj)
  }

  function frmObj()
  {
    retObj = document.forms[0]
    if (retObj != null)
    {
      return document.forms[0]
    }
    else
    {
      return document.frames("maincontent").document.forms[0]
    }
  }

  function getCP()
  {
    return document.frames("maincontent")
  }

  function docById(id)
  {
    return document.getElementById(id)
  }

  function enableImage1(rowSelected, tblid)
  {
    actCheckboxNum = actvCheckbox(tblid)
    if (rowSelected.checked == true)
    {
      enableImage()
    }
    else
    {
      if (actCheckboxNum > 0)
      {
        enableImage()
      }
      else
      {
        disableImage()
      }
    }
    return;
  }

  function chgetxt(txt, obj1, obj2)
  {
    docById(obj1).childNodes[0].innerHTML = "VLAN-ID " + txt.value
    docById(obj2).value = "VLAN " + txt.value
  }

  function cnfrm(msg, obj1, obj2)
  {
    obj1 = docById(obj1)
    obj2 = docById(obj2)
    if (confirm(msg))
    {
      obj1.checked = true;
      obj2.checked = false;
    }
    else
    {
      obj1.checked = false;
      obj2.checked = true;
    }
  }

  function enableImage(tblid)
  {
    actCheckboxNum = actvCheckbox(tblid)
    if (actCheckboxNum > 1)
    {
      elmentarray = new Array('btn_Cancel', 'btn_Apply', 'btn_Remove', 'btn_Delete', 'btn_reauthenticate', 'btn_initialize', 'btn_force');
    }
    else
    {
      elmentarray = new Array('btn_Cancel', 'btn_Apply', 'btn_Add', 'btn_Refresh', 'btn_Delete', 'btn_reauthenticate', 'btn_initialize', 'btn_force', 'btn_force');
    }
    for (elemcount = 0; elemcount < elmentarray.length; elemcount++)
    {
      if (top.document.getElementById(elmentarray[elemcount]) != null)
      {
        elment = top.document.getElementById(elmentarray[elemcount])
        ln = elment.src.length - 7
        temp = elment.src.substring(ln, elment.src.length)
        if (temp == "off.gif")
        {
          elment.src = elment.src.substring(0, elment.src.length - 7) + "on.gif";
          elment.disabled = false;
        }
      }
    }
    if (document.getElementById(tblid) != null)
    {
      prntid = document.getElementById(tblid)
      if (prntid.rows[1].id != 'editRow')
      {
        if (prntid.rows[1].id != 'NonEditRow')
          rownumbr = 1
        else
          rownumbr = 2
      }
      else
      {
        rownumbr = 1
      }
      myRow = prntid.rows[rownumbr]
      for (i = 0; i < myRow.cells.length; i++)
      {
        if (prntid.rows[1].cells[i].childNodes[0] != undefined)
        {
          if (prntid.rows[1].cells[i].childNodes[0].tagName == "SELECT")
          {
            SelectObject = prntid.rows[1].cells[i].childNodes[0]
            for (k = 0; k < SelectObject.options.length; k++)
            {
              if (SelectObject.options[k].defaultSelected == true)
              {
                defaultInd[i] = k
                defaultValNotChanged = false
              }
            }
          }
        }
      }
    }
  }

  function disableImage()
  {
    elmentarray = new Array('btn_Cancel', 'btn_Apply', 'btn_Add', 'btn_Remove', 'btn_Delete', 'btn_reauthenticate', 'btn_initialize', 'btn_force');
    for (elemcount = 0; elemcount < elmentarray.length; elemcount++)
    {
      if (top.document.getElementById(elmentarray[elemcount]) != null)
      {
        elment = top.document.getElementById(elmentarray[elemcount])
        ln = elment.src.length - 6
        temp = elment.src.substring(ln, elment.src.length)
        if (temp == "on.gif")
        {
          elment.src = elment.src.substring(0, elment.src.length - 6) + "off.gif";
          elment.disabled = true;
        }
      }
    }
  }

  function disableButton()
  {
    for (i = 0; i < arguments.length; i++)
    {
      elment = top.document.getElementById(arguments[i].split("~")[0])
      if (elment != null)
      {
        ln = elment.src.length - 6
        temp = elment.src.substring(ln, elment.src.length)
        if (temp == "on.gif")
        {
          elment.src = elment.src.substring(0, elment.src.length - 6) + "off.gif";
          elment.disabled = true;
        }
      }
    }
  }

  function enableButton()
  {
    for (i = 0; i < arguments.length; i++)
    {
      elment = top.document.getElementById(arguments[i].split("~")[0])
      if (elment != null)
      {
        ln = elment.src.length - 7
        temp = elment.src.substring(ln, elment.src.length)
        if (temp == "off.gif")
        {
          elment.src = elment.src.substring(0, elment.src.length - 7) + "on.gif";
          elment.disabled = false;
        }
      }
    }
  }

  function dnload()
  {
    obj = document.frames("maincontent").document.frm;
    if ((obj.serverIP.value != '') && (obj.serverFile.value != ''))
    {
      w = 380;
      h = 50;
      var winl = (screen.width - w) / 2;
      var wint = (screen.height - h) / 2;
      if (winl < 0) winl = 0;
      if (wint < 0) wint = 0;
      featr = "height=" + h + " width=" + w + " top=" + wint + " left=" + winl
      window.open('../maintenance/download/progessbar.html', 'ProgressBar', featr)
    }
  }

  function srch(tblid, optncolmn, inputTxt, val)
  {
    flag = true;
    if (optncolmn != '')
    {
      sltoptn = document.getElementById(optncolmn).selectedIndex
    }
    else sltoptn = val;
    txtValue = document.getElementById(inputTxt).value;
    var rwcount = document.getElementById(tblid).rows.length
    prntid = document.getElementById(tblid)
    for (ronum = 1; ronum < rwcount; ronum++)
    {
      if (prntid.rows[ronum].cells[sltoptn].innerText == txtValue)
      {
        flag = false;
        rowElement = prntid.rows[ronum]
        for (i = 0; i < rowElement.childNodes.length; i++)
        {
          rowElement.childNodes[i].className = rowElement.childNodes[i].className;
        }
        enableButton('btn_Remove')
        var rowToDel = ronum
      }
    }
    if (rowToDel != undefined)
    {
      delRowAddressTable('tbl1', rowToDel)
    }
    if (flag == true)
    {
      alert('Search ' + txtValue + ' is not found in this page')
    }
  }

  function delRowAddressTable(tblName, row)
  {
    prntid = document.getElementById(tblName)
    rownumbr = 1
    var CBoxid
    var tbl = document.getElementById(tblName);
    var str = '<table cellspacing="0" cellpadding="0"  border="0" width="100%" id=' + tblName + '>'
    str += "<tr class='white10Bold'>" + tbl.rows[0].innerHTML + "</tr><tr>";
    colCnt = tbl.rows[row].cells.length
    for (var j = 0; j < colCnt; j++)
    {
      str += "<td nowrap class='messageTableWhiteBorder defaultFont' align='left'>" + tbl.rows[row].children[j].innerHTML + "</td>";
    }
    str += "</tr></table>";
    tbl.parentNode.innerHTML = str;
  }

  function togattri(obj1a, obj1b, obj2a, obj2b)
  {
    if (docById(obj1a).checked == false)
    {
      docById(obj1b).disabled = ""
      docById(obj1b).className = "input"
      docById(obj2b).disabled = "disabled"
      docById(obj2b).className = "inputDisabled"
    }
    else
    {
      docById(obj1b).disabled = ""
      docById(obj1b).className = "input"
      docById(obj2b).disabled = "disabled"
      docById(obj2b).className = "inputDisabled"
    }
  }

  function submitdwnload()
  {
    if (window.frames['maincontent'].document.forms[0].elements['file_type'].value == 'config')
    {
      var inputbox = confirm("The specified configuration file will overwrite current running configuration. \n You might lose your browser session in case the configuration file changes your IP Address.\n\nPress OK to download, Cancel to stop this download.\n\n NOTE: The new configuration file will not be saved automatically into the permanent storage (Flash). Please save it explicitly if you decide to keep it across reboots.");
      if (inputbox)
      {
        submitform();
      }
      else
      {
        cancelform();
      }
    }
    else
    {
      submitform();
    }
  }

  function submitform()
  {
    sbmit();
    window.frames['maincontent'].document.forms[0].elements['submt'].value = 0x10;
    window.frames['maincontent'].document.forms[0].submit();
  }

  function cancelform()
  {
    sbmit();
    window.frames['maincontent'].document.forms[0].elements['cncel'].value = 0x10;
    window.frames['maincontent'].document.forms[0].submit();
  }

  function addform()
  {
    window.frames['maincontent'].document.forms[0].elements['add'].value = 0x10;
    window.frames['maincontent'].document.forms[0].submit();
  }

  function deleteform()
  {
    window.frames['maincontent'].document.forms[0].elements['delete'].value = 0x10;
    window.frames['maincontent'].document.forms[0].submit();
  }

  function refreshform()
  {
    window.frames['maincontent'].document.forms[0].elements['refrsh'].value = 0x10;
    window.frames['maincontent'].document.forms[0].submit();
  }

  function forceform()
  {
    window.frames['maincontent'].document.forms[0].elements['Force'].value = 0x10;
    window.frames['maincontent'].document.forms[0].submit();
  }

  function clearform()
  {
    window.frames['maincontent'].document.forms[0].elements['Clear_on'].value = 0x10;
    window.frames['maincontent'].document.forms[0].submit();
  }

  function clearallform()
  {
    window.frames['maincontent'].document.forms[0].elements['Clear_all_on'].value = 0x10;
    window.frames['maincontent'].document.forms[0].submit();
  }

  function clearMultipleports(tblid)
  {
    getCheckedPorts(tblid);
    clearform();
  }

  function forceMultipleConf(tblid)
  {
    getCheckedPorts(tblid);
    forceform();
  }

  function submitTwoValues(tblid)
  {
    getCheckedValuesTwoCol(tblid);
    submitform();
  }

  function deleteTwoValues(tblid)
  {
    getCheckedValuesTwoCol(tblid);
    deleteform();
  }

  function submitUnit(unit)
  {
    document.forms[0].elements['unit_no'].value = unit;
    document.forms[0].submit();
  }

  function submitLags()
  {
    document.forms[0].unit_no.value = 9;
    document.forms[0].submit();
  }

  function submitVlans()
  {
    document.forms[0].unit_no.value = 10;
    document.forms[0].submit();
  }

  function submitAll()
  {
    document.forms[0].unit_no.value = 11;
    document.forms[0].submit();
  }

  function submitCpu()
  {
    document.forms[0].unit_no.value = 12;
    document.forms[0].submit();
  }

  function reauthenticateform()
  {
    sbmit();
    window.frames['maincontent'].document.forms[0].elements['reauthenticate'].value = 0x10;
    window.frames['maincontent'].document.forms[0].submit();
  }

  function initializeform()
  {
    sbmit();
    window.frames['maincontent'].document.forms[0].elements['initialize'].value = 0x10;
    window.frames['maincontent'].document.forms[0].submit();
  }

  function initializeMultipleform(tblid)
  {
    getCheckedPorts(tblid);
    initializeform();
  }

  function reauthenticateMultipleform(tblid)
  {
    getCheckedPorts(tblid);
    reauthenticateform();
  }

  function createUnitNumbers(unit, active_unit)
  {
    if (unit != active_unit)
    {
      document.write("<td id='blueLinkBold10_noULine' class='Link_noULine paddingR5'><a href='#' onClick='submitUnit(" + unit + ")'>" + unit + "</a></td>");
    }
    else
    {
      document.write("<td class='urlList paddingR5'>" + unit + "</td>");
    }
  }

  function createMultipleUnitNumbers(units, active_unit)
  {
    var array = units.split(",");
    for (var arrayIndex = 0; arrayIndex < array.length; arrayIndex++)
    {
      createUnitNumbers(array[arrayIndex], active_unit);
    }
  }

  function createLagNumbers(lag_value)
  {
    if (lag_value != 9)
    {
      document.write("<td id='blueLinkBold10_noULine' class='urlList paddingR5'><a href='#' onClick='submitLags()'>LAG</a></td>");
    }
    else
    {
      document.write("<td class='urlList paddingR5'>LAG</td>");
    }
  }

  function createVlanNumbers(vlan_value)
  {
    if (vlan_value != 10)
    {
      document.write("<td id='blueLinkBold10' class='font10Bold spacer10px'><a href='#' onClick='submitVlans()'>VLANS</a></td>");
    }
    else
    {
      document.write("<td class='orange10Bold spacer10px'>VLANS</td>");
    }
  }

  function createAllNumbers(all_units)
  {
    if (all_units != 11)
    {
      document.write("<td id='blueLinkBold10_noULine' class='urlList paddingR5'><a href='#' onClick='submitAll()'>All</a></td>");
    }
    else
    {
      document.write("<td class='urlList paddingR5'>All</td>");
    }
  }

  function createCpuNumber(cpu)
  {
    if (cpu != 12)
    {
      document.write("<td id='blueLinkBold10_noULine' class='urlList paddingR5'><a href='#' onClick='submitCpu()'>CPU</a></td>");
    }
    else
    {
      document.write("<td class='urlList paddingR5'>CPU</td>");
    }
  }

  function clearSelectedPorts()
  {
    var selPort = window.frames['maincontent'].document.getElementById("selectedPorts");
    selPort.value = "";
    window.frames['maincontent'].document.forms[0].elements['multiple_ports'].value = 0;
  }

  function clearSelectedSrcPorts()
  {
    var selPort = window.frames['maincontent'].document.getElementById("selectedSrcPorts");
    selPort.value = "";
    window.frames['maincontent'].document.forms[0].elements['multiple_src_ports'].value = 0;
  }

  function clearSelectedDesPorts()
  {
    var selPort = window.frames['maincontent'].document.getElementById("selectedDesPorts");
    selPort.value = "";
    window.frames['maincontent'].document.forms[0].elements['multiple_des_ports'].value = 0;
  }

  function getCheckedPorts(tblid)
  {
    var myRow;
    var i;
    var rownumber;
    var j = 0;
    var rwcount = rowcount(tblid)
    var selPort = window.frames['maincontent'].document.getElementById("selectedPorts")
    prntid = window.frames['maincontent'].document.getElementById(tblid)
    frmObj = document.forms[0]
    if (frmObj == undefined)
    {
      frmObj = window.frames['maincontent'].document.forms[0]
    }
    clearSelectedPorts();
    for (rownumber = 2; rownumber < rwcount; rownumber++)
    {
      ele = prntid.rows[rownumber].cells[0].firstChild
      if (ele.checked == true)
      {
        if (j == 0)
          selPort.value = prntid.rows[rownumber].cells[1].innerHTML + ";";
        else
          selPort.value += prntid.rows[rownumber].cells[1].innerHTML + ";";
        j++;
      }
    }
    if (j == 0 || j == 1)
      window.frames['maincontent'].document.forms[0].elements['multiple_ports'].value = 0;
    else
      window.frames['maincontent'].document.forms[0].elements['multiple_ports'].value = 1;
    if (tblid == 'igmpTbl')
    {
      window.frames['maincontent'].document.forms[0].elements['multiple_ports'].value = j;
    }
    if (tblid == 'cosqtbl')
    {
      window.frames['maincontent'].document.forms[0].elements['queue_id'].value = prntid.rows[2].cells[2].innerHTML;
    }
    var firstCheckedRow = prntid.rows[0].cells[0].childNodes[1]
    if (firstCheckedRow.checked == true)
    {
      alert('Applying configuration will take a long time');
    }
  }

  function getCheckedValuesTwoCol(tblid)
  {
    var myRow;
    var i;
    var rownumber;
    var j = 0;
    var rwcount = rowcount(tblid)
    var selPort = window.frames['maincontent'].document.getElementById("selectedPorts")
    prntid = window.frames['maincontent'].document.getElementById(tblid)
    frmObj = document.forms[0]
    if (frmObj == undefined)
    {
      frmObj = window.frames['maincontent'].document.forms[0]
    }
    clearSelectedPorts();
    for (rownumber = 2; rownumber < rwcount; rownumber++)
    {
      ele = prntid.rows[rownumber].cells[0].firstChild
      if (ele.checked == true)
      {
        if (tblid == 'policy_cfg')
        {
          if (prntid.rows[rownumber].cells[3].childNodes[0] != undefined)
          {
            if (j == 0)
            {
              selPort.value = prntid.rows[rownumber].cells[1].childNodes[0].childNodes[0].nodeValue + "-";
              selPort.value += prntid.rows[rownumber].cells[3].childNodes[0].childNodes[0].nodeValue + ";";
            }
            else
            {
              selPort.value += prntid.rows[rownumber].cells[1].childNodes[0].childNodes[0].nodeValue + "-";
              selPort.value += prntid.rows[rownumber].cells[3].childNodes[0].childNodes[0].nodeValue + ";";
            }
          }
          else
          {
            if (j == 0)
              selPort.value = prntid.rows[rownumber].cells[1].childNodes[0].childNodes[0].nodeValue + ";";
            else
              selPort.value += prntid.rows[rownumber].cells[1].childNodes[0].childNodes[0].nodeValue + ";";
          }
        }
        else
        {
          if (j == 0)
          {
            selPort.value = prntid.rows[rownumber].cells[1].innerHTML + "-";
            selPort.value += prntid.rows[rownumber].cells[2].innerHTML + ";";
          }
          else
          {
            selPort.value += prntid.rows[rownumber].cells[1].innerHTML + "-";
            selPort.value += prntid.rows[rownumber].cells[2].innerHTML + ";";
          }
        }
        j++;
      }
    }
    if (j == 0 || j == 1)
      window.frames['maincontent'].document.forms[0].elements['multiple_ports'].value = 0;
    else
      window.frames['maincontent'].document.forms[0].elements['multiple_ports'].value = 1;
    if (tblid == 'igmpTbl')
    {
      window.frames['maincontent'].document.forms[0].elements['multiple_ports'].value = j;
    }
    var firstCheckedRow = prntid.rows[0].cells[0].childNodes[1]
    if (firstCheckedRow.checked == true)
    {
      alert('Applying configuration will take a long time');
    }
  }

  function getWizardCheckedPorts(tblid)
  {
    var k = 0;
    var selPort = window.frames['maincontent'].document.getElementById("selectedPorts")
    frmObj = document.forms[0]
    if (frmObj == undefined)
    {
      frmObj = window.frames['maincontent'].document.forms[0]
    }
    clearSelectedPorts();
    for (var i = 0, j = frmObj.elements.length; i < j; i++)
    {
      myType = frmObj.elements[i].type;
      myName = frmObj.elements[i].name;
      ele = frmObj.elements[i]
      if ((myType == 'checkbox') && (myName == 'CBox_Diffserv'))
        if (ele.checked == true)
        {
          if (k == 0)
            selPort.value = ele.value + ";";
          else
            selPort.value += ele.value + ";";
          k++;
        }
    }
    window.frames['maincontent'].document.forms[0].elements['multiple_ports'].value = k;
  }

  function getWizardCheckedSrcPorts(tblid)
  {
    var k = 0;
    var selPort = window.frames['maincontent'].document.getElementById("selectedSrcPorts")
    frmObj = document.forms[0]
    if (frmObj == undefined)
    {
      frmObj = window.frames['maincontent'].document.forms[0]
    }
    clearSelectedSrcPorts();
    for (var i = 0, j = frmObj.elements.length; i < j; i++)
    {
      myType = frmObj.elements[i].type;
      myName = frmObj.elements[i].name;
      ele = frmObj.elements[i]
      if ((myType == 'checkbox') && (myName == 'CBox_Diffserv_Src'))
        if ((ele.checked == true) && (tblid == 'srcmainTbl'))
        {
          if (k == 0)
            selPort.value = ele.value + ";";
          else
            selPort.value += ele.value + ";";
          k++;
        }
    }
    window.frames['maincontent'].document.forms[0].elements['multiple_src_ports'].value = k;
  }

  function getWizardCheckedDesPorts(tblid)
  {
    var k = 0;
    var selPort = window.frames['maincontent'].document.getElementById("selectedDesPorts")
    frmObj = document.forms[0]
    if (frmObj == undefined)
    {
      frmObj = window.frames['maincontent'].document.forms[0]
    }
    clearSelectedDesPorts();
    for (var i = 0, j = frmObj.elements.length; i < j; i++)
    {
      myType = frmObj.elements[i].type;
      myName = frmObj.elements[i].name;
      ele = frmObj.elements[i]
      if ((myType == 'checkbox') && (myName == 'CBox_Diffserv_Des'))
        if ((ele.checked == true) && (tblid == 'desmainTbl'))
        {
          if (k == 0)
            selPort.value = ele.value + ";";
          else
            selPort.value += ele.value + ";";
          k++;
        }
    }
    window.frames['maincontent'].document.forms[0].elements['multiple_des_ports'].value = k;
  }

  function submitMultipleConf(tblid)
  {
    getCheckedPorts(tblid);
    submitform();
  }

  function deleteMultipleConf(tblid)
  {
    getCheckedPorts(tblid);
    deleteform();
  }

  function submitWizard(tblid)
  {
    getWizardCheckedPorts(tblid);
    submitform();
  }

  function mysubmitWizard()
  {
    getWizardCheckedSrcPorts('srcmainTbl');
    getWizardCheckedDesPorts('desmainTbl');
    submitform();
  }

  function goToSrchRepeat(tblid, inputTxt)
  {
    txtValue = docById(inputTxt).value;
    var rwcount = rowcount(tblid);
    var actvCheckboxNum = actvCheckbox()
    clLen = " selectedRow".length
    prntid = docById(tblid)
    myRow = prntid.rows[1]
    if (myRow.cells[0].firstChild.checked == true)
    {
      for (i = 0; i < myRow.cells.length; i++)
      {
        var fc = prntid.rows[1].cells[i].firstChild
        if (fc.tagName == "SELECT")
        {
          SelectObject = fc
          SelectObject.selectedIndex = defaultInd[i]
        }
      }
    }
    for (j = 1; j < rwcount; j++)
    {
      clmnelement = prntid.rows[j]
      cfc = clmnelement.cells[0].firstChild
      if (cfc.checked == true)
      {
        cfc.checked = false
        inputBox = cfc
        var myRow = inputBox.parentNode.parentNode; /* Note Note */
        for (i = 0; i < myRow.cells.length; i++)
        {
          cN = myRow.cells[i].className
          if (cN.substring(cN.length - clLen, cN.length) == " selectedRow")
            myRow.cells[i].className = cN.substring(0, cN.length - clLen);
        }
      }
    }
    flag = true;
    for (ronum = 2; ronum < rwcount; ronum++)
    {
      if (prntid.rows[ronum].cells[1].innerHTML == txtValue)
      {
        flag = false;
        clmnelement = prntid.rows[ronum]
        rowSelected = clmnelement.cells[0].firstChild
        var myRows = document.getElementsByName(rowSelected.name);
        rowSelected.checked = true
        j = ronum - 1
        ChangeRowColor1(rowSelected);
        editRow(rowSelected, tblid);
      }
    }
    if (flag == true)
    {
      alert('Interface' + " " + txtValue + " " + 'is not found in this page');
      onCancel()
      loadDefaults('tbl1')
    }
  }

  function enableWizardImage1(tblid)
  {
    var flag = 0;
    frmObj = document.forms[0]
    if (frmObj == undefined)
    {
      frmObj = window.frames['maincontent'].document.forms[0]
    }
    for (var i = 0, j = frmObj.elements.length; i < j; i++)
    {
      myType = frmObj.elements[i].type;
      myName = frmObj.elements[i].name;
      ele = frmObj.elements[i]
      if ((myType == 'checkbox') && (myName == 'CBox_Diffserv_Src'))
        flag = 1;
      else if ((myType == 'checkbox') && (myName == 'CBox_Diffserv_Des'))
        flag = 1;
      else if ((myType == 'checkbox') && (myName == 'CBox_Diffserv'))
        flag = 1;
      if ((flag == 1) && (ele.checked == true))
      {
        enableImage();
        break;
      }
    }
  }

  function submitmacacl(tblid)
  {
    var myRow;
    var i;
    var rownumber;
    var j = 0;
    var rwcount = rowcount(tblid)
    var selPort = window.frames['maincontent'].document.getElementById("selectedPorts")
    var deleteFlag = window.frames['maincontent'].document.getElementById("deleteFlag")
    prntid = window.frames['maincontent'].document.getElementById(tblid)
    frmObj = document.forms[0]
    if (frmObj == undefined)
    {
      frmObj = window.frames['maincontent'].document.forms[0]
    }
    clearSelectedPorts();
    for (rownumber = 2; rownumber < rwcount; rownumber++)
    {
      ele = prntid.rows[rownumber].cells[0].firstChild
      if (ele.checked == true)
      {
        if (j == 0)
        {
          if (tblid == 'ip_acl_tbl' || tblid == 'policy_cfg' || tblid == 'lagCfg')
          {
            if (tblid == 'lagCfg')
            {
              selPort.value = prntid.rows[rownumber].cells[3].innerHTML + ";";
            }
            else
            {
              selPort.value = prntid.rows[rownumber].cells[1].childNodes[0].childNodes[0].nodeValue + ";";
            }
          }
          else
          {
            selPort.value = prntid.rows[rownumber].cells[1].innerHTML + ";";
          }
        }
        else
        {
          if (tblid == 'mac_acl_tbl')
          {
            alert('Cannot rename multiple MAC ACLs');
            return;
          }
          else if (tblid == 'policy_cfg')
          {
            alert('Cannot add class to multiple policies at the same time');
            return;
          }
          else if (tblid == 'ip_acl_tbl' || tblid == 'lagCfg')
          {
            if (tblid == 'lagCfg')
            {
              selPort.value += prntid.rows[rownumber].cells[3].innerHTML + ";";
            }
            else
            {
              selPort.value += prntid.rows[rownumber].cells[1].childNodes[0].childNodes[0].nodeValue + ";";
            }
          }
          else
          {
            selPort.value += prntid.rows[rownumber].cells[1].innerHTML + ";";
          }
        }
        j++;
      }
    }
    window.frames['maincontent'].document.forms[0].elements['multiple_ports'].value = j;
    if (deleteFlag != undefined)
    {
      if (deleteFlag.value == "1")
      {
        deleteFlag.value = "0";
        deleteform();
      }
      else
      {
        submitform();
      }
    }
    else
    {
      submitform();
    }
  }

  function deletemacacl(tblid)
  {
    var myRow;
    var i;
    var rownumber;
    var j = 0;
    var rwcount = rowcount(tblid)
    var selPort = window.frames['maincontent'].document.getElementById("selectedPorts")
    prntid = window.frames['maincontent'].document.getElementById(tblid)
    frmObj = document.forms[0]
    if (frmObj == undefined)
    {
      frmObj = window.frames['maincontent'].document.forms[0]
    }
    clearSelectedPorts();
    if (tblid == 'ip_rules')
    {
      for (rownumber = 1; rownumber < rwcount; rownumber++)
      {
        ele = prntid.rows[rownumber].cells[0].firstChild
        if (ele.checked == true)
        {
          if (j == 0)
            selPort.value = prntid.rows[rownumber].cells[1].childNodes[0].childNodes[0].nodeValue + ";";
          else
            selPort.value += prntid.rows[rownumber].cells[1].childNodes[0].childNodes[0].nodeValue + ";";
          j++;
        }
      }
    }
    else
    {
      for (rownumber = 2; rownumber < rwcount; rownumber++)
      {
        ele = prntid.rows[rownumber].cells[0].firstChild
        if (ele.checked == true)
        {
          if (tblid == 'ip_acl_tbl' || tblid == 'policy_cfg' || tblid == 'lagCfg')
          {
            if (j == 0)
              selPort.value = prntid.rows[rownumber].cells[1].childNodes[0].childNodes[0].nodeValue + ";";
            else
              selPort.value += prntid.rows[rownumber].cells[1].childNodes[0].childNodes[0].nodeValue + ";";
          }
          else
          {
            if (j == 0)
              selPort.value = prntid.rows[rownumber].cells[1].innerHTML + ";";
            else
              selPort.value += prntid.rows[rownumber].cells[1].innerHTML + ";";
          }
          j++;
        }
      }
    }
    window.frames['maincontent'].document.forms[0].elements['multiple_ports'].value = j;
    deleteform();
  }

  function deleteacl(tblid)
  {
    var myRow;
    var i;
    var rownumber;
    var j = 0;
    var counter = 0;
    var rwcount = rowcount(tblid)
    var selPort = window.frames['maincontent'].document.getElementById("selectedPorts")
    prntid = window.frames['maincontent'].document.getElementById(tblid)
    frmObj = document.forms[0]
    if (frmObj == undefined)
    {
      frmObj = window.frames['maincontent'].document.forms[0]
    }
    clearSelectedPorts();
    for (rownumber = 1; rownumber < rwcount; rownumber++)
    {
      ele = prntid.rows[rownumber].cells[0].firstChild
      if (!is_ie)
      {
        ele = prntid.rows[rownumber].cells[0].childNodes[1]
      }
      ele.value = counter;
      if (ele.checked == true)
      {
        if (j == 0)
          selPort.value = ele.value + ";";
        else
          selPort.value += ele.value + ";";
        j++;
      }
      counter++;
    }
    window.frames['maincontent'].document.forms[0].elements['multiple_ports'].value = j;
    deleteform();
  }

  function enableEditRowButtons(rowSelected, tblid)
  {
    var rownumber;
    var j = 0;
    var rwcount = rowcount(tblid)
    prntid = document.getElementById(tblid)
    frmObj = document.forms[0]
    if (frmObj == undefined)
    {
      frmObj = window.frames['maincontent'].document.forms[0]
    }
    for (rownumber = 2; rownumber < rwcount; rownumber++)
    {
      ele = prntid.rows[rownumber].cells[0].firstChild
      if (ele.checked == true)
      {
        enableButton('btn_Delete', 'btn_Cancel', 'btn_Apply');
        return;
      }
    }
    enableButton('btn_Add', 'btn_Cancel');
  }

  function editRowUserAcc(rowSelected, tblid, rw)
  {
    var myRow = rowSelected.parentNode.parentNode;
    var actvCheckboxNum = actvCheckbox(tblid)
    var rwcount = rowcount(tblid)
    var checkStatus = 0;
    var selRowNo = 0;
    var tempRow;
    var tempActCheckboxNum = 0;
    colCnt = prntid.rows[1].cells.length
    editFlag = true
    prntid = CntnFrmDoc(tblid)
    frmObj = document.forms[0]
    if (frmObj == undefined)
    {
      frmObj = document.frames("maincontent").document.forms[0]
    }
    if (prntid.rows[0].id == 'NonEditRow')
    {
      editFlag = false
    }
    else if (prntid.rows[1].id != 'editRow') /* to get the editable row number */
    {
      rownumbr = 2
    }
    else
    {
      rownumbr = 1 /*Editable row no*/
    }
    if (editFlag)
    {
      if ((actvCheckboxNum != rwcount - (rownumbr)) && (prntid.rows[rownumbr].checked = false))
      {
        fc = prntid.rows[rownumbr].cells[0].firstChild
        if (fc.tagName != undefined)
        {
          fc.checked = false
        }
      }
    }
    /* get the no of the row that is selected */
    for (rno = 1; rno < rwcount; rno++)
    {
      tempRow = prntid.rows[rno].cells[0].firstChild
      if (rowSelected == tempRow)
      {
        selRowNo = rno;
        break;
      }
    }
    /* end of get row no */
    /*get the editable row object */
    var firstCheckedRow = prntid.rows[rownumbr].cells[0].firstChild
    if (rowSelected == firstCheckedRow) /*row selected is the editable row */
    {
      if (rowSelected.checked == true) /*check all the rows */
      {
        for (i = 0; i < myRow.cells.length; i++)
        {
          fc = prntid.rows[1].cells[i].firstChild
          if (fc != null && fc.tagName == "SELECT")
          {
            defaultInd[i] = fc.selectedIndex;

            if (is_ie)
            {
              $("select[name="+fc.name+"]").trigger('chosen:updated');
            }

          }
          else if (fc != null && fc.tagName == "INPUT")
          {
            if (prntid.rows[1].cells[i].id == 'unique')
            {
              ElmntObject = fc
              ElmntObject.value = '';
              ElmntObject.disabled = 'disabled';
              ElmntObject.className = 'inputDisabled';
            }
            else
            {
              prntid.rows[rownumbr].cells[i].firstChild.value = ''
            }
          }
        }
        if (tblid == 'dhcpServ')
        {
          enableButton('btn_Cancel', 'btn_Delete', 'btn_Remove');
        }
        else
        {
          enableButton('btn_Up', 'btn_Down', 'btn_Remove', 'btn_Apply', 'btn_reauthenticate', 'btn_initialize');
        }
      }
      else /*uncheck all the rows */
      {
        for (i = 1; i < colCnt; i++)
        {
          var cels = prntid.rows[rownumbr].cells[i]
          if (cels != undefined)
          {
            fc = cels.firstChild
            if (fc != null && fc.tagName == "SELECT")
            {
              SelectObject = fc
              SelectObject.selectedIndex = defaultInd[i]
              SelectObject.disabled = '';
            }
            else if (fc != null && fc.tagName == "INPUT")
            {
              fc.value = '';
              fc.disabled = '';
              fc.className = 'input';
            }
            else
            {
              if (fc != null && fc.innerHTML == undefined)
              {
                cels.innerHTML = '&nbsp;'
              }
            }
          }
        } /*end of for loop */
        if (tblid == 'dhcpServ')
        {
          disableButton('btn_Cancel', 'btn_Delete', 'btn_Remove');
        }
        else
        {
          disableButton('btn_Up', 'btn_Down', 'btn_Apply', 'btn_Remove');
        }
      }
    }
    else
    {
      /* we wre here when item edited is not the editable row. */
      tempActCheckboxNum = 0;
      if (firstCheckedRow.checked == true)
      {
        tempActCheckboxNum = actvCheckboxNum - 1;
      }
      else
      {
        tempActCheckboxNum = actvCheckboxNum;
      }
      if (rowSelected.checked == false && tempActCheckboxNum == 1)
      {
        checkStatus = 4; /* uncheck penultimate one*/
      }
      else if (rowSelected.checked == false && tempActCheckboxNum == 0)
      {
        checkStatus = 3; /* uncheck ultimate one*/
      }
      else if (rowSelected.checked == true && tempActCheckboxNum == 2)
      {
        checkStatus = 2; /* check penumtimate one*/
      }
      else if (rowSelected.checked == true && tempActCheckboxNum == 1)
      {
        checkStatus = 1; /* check untimate one*/
      }
      switch (checkStatus)
      {
      case 1:
        /* chedking ultimate one */
      case 4:
        /* unchedking penultimate one*/
          for (i = 1; i < colCnt; i++)
          {
            var cels = prntid.rows[rownumbr].cells[i]
            if (cels != undefined)
            {
              fc = cels.firstChild
              if (fc != null && fc.tagName == "SELECT")
              {
                SelectObject = fc
                SelectObject.selectedIndex = defaultInd[i]
                SelectObject.disabled = '';
              }
              else if (fc != null && fc.tagName == "INPUT")
              {
                fc.value = '';
                if (i != 4)
                {
                  fc.disabled = '';
                  fc.className = 'input';
                }
                if ((tblid == 'useracc') && ((i == 1) || (i == 4))) /* admin */
                {
                  var tempVal;
                  var myEditRowNode;
                  if (checkStatus == 4)
                  {
                    for (rnoTemp = 2; rnoTemp < rwcount; rnoTemp++)
                    {
                      if (is_ie)
                      {
                        tempRow = prntid.rows[rnoTemp].cells[0].firstChild
                        if (tempRow.checked == true)
                        {
                          selRowNo = rnoTemp;
                          tempVal = prntid.rows[selRowNo].cells[i].firstChild.value;
                          prntid.rows[rownumbr].cells[i].firstChild.value = tempVal;
                          break;
                        }
                      }
                      else
                      {
                        tempRow = prntid.rows[rnoTemp].cells[0].firstChild
                        var myTempRowNode = tempRow.parentNode.parentNode;
                        if (myTempRowNode.cells[0].childNodes[1].checked == true)
                        {
                          selRowNo = rnoTemp;
                          tempVal = myTempRowNode.cells[i].childNodes[1].value;
                          myEditRowNode = firstCheckedRow.parentNode.parentNode;
                          myEditRowNode.cells[i].childNodes[0].value = tempVal
                          break;
                        }
                      }
                    }
                  }
                  else
                  {
                    if (is_ie)
                    {
                      tempVal = prntid.rows[selRowNo].cells[i].firstChild.value;
                      prntid.rows[rownumbr].cells[i].firstChild.value = tempVal;
                    }
                    else
                    {
                      tempVal = myRow.cells[i].childNodes[1].value;
                      myEditRowNode = firstCheckedRow.parentNode.parentNode;
                      myEditRowNode.cells[i].childNodes[0].value = tempVal
                    }
                  }
                }
                else
                {
                  prntid.rows[rownumbr].cells[i].firstChild.value = ''
                }
              }
              else
              {
                if (fc != null && fc.innerHTML == undefined)
                {
                  cels.innerHTML = '&nbsp;'
                }
              }
            }
        } /*end of for loop */
        break;
      case 2:
        /* checking penultimate one */
      case 3:
        /* unchedking ultimate one*/
          for (i = 0; i < myRow.cells.length; i++)
          {
            fc = prntid.rows[1].cells[i].firstChild
            if (fc != null && fc.tagName == "SELECT")
            {
              defaultInd[i] = fc.selectedIndex
            }
            else if (fc != null && fc.tagName == "INPUT")
            {
              if (prntid.rows[1].cells[i].id == 'unique')
              {
                if (checkStatus == 3)
                {
                  ElmntObject = fc
                  ElmntObject.value = '';
                  ElmntObject.disabled = '';
                  ElmntObject.className = 'input';
                }
                else
                {
                  ElmntObject = fc
                  ElmntObject.value = '';
                  ElmntObject.disabled = 'disabled';
                  ElmntObject.className = 'inputDisabled';
                }
              }
              else
              {
                prntid.rows[rownumbr].cells[i].firstChild.value = ''
              }
            }
        }
        break;
      default:
        break;
      }
      if (tblid == "udprly" || tblid == 'dhcpServ')
      {
        var myBaseRow = firstCheckedRow.parentNode.parentNode;
        if (checkStatus == 3)
        {
          for (i = 1; i < myBaseRow.cells.length; i++)
          {
            fc = prntid.rows[1].cells[i].firstChild
            if (fc != null && fc.tagName == "SELECT")
            {
              defaultInd[i] = fc.selectedIndex
            }
            else if (fc != null && fc.tagName == "INPUT")
            {
              ElmntObject = fc
              ElmntObject.value = '';
              ElmntObject.disabled = '';
              ElmntObject.className = 'input';
            }
          }
        }
        else
        {
          for (i = 1; i < myBaseRow.cells.length; i++)
          {
            fc = prntid.rows[1].cells[i].firstChild
            if (fc != null && fc.tagName == "SELECT")
            {
              defaultInd[i] = fc.selectedIndex
            }
            else if (fc != null && fc.tagName == "INPUT")
            {
              ElmntObject = fc
              ElmntObject.value = '';
              ElmntObject.disabled = 'disabled';
              ElmntObject.className = 'inputDisabled';
            }
          }
        }
      }
      if (tempActCheckboxNum >= 1)
      {
        if (tblid == 'dhcpServ')
        {
          enableButton('btn_Remove', 'btn_Cancel', 'btn_Delete');
          disableButton('btn_Add', 'btn_Apply');
        }
        else
        {
          enableButton('btn_Up', 'btn_Down', 'btn_Remove', 'btn_Apply', 'btn_reauthenticate', 'btn_initialize');
          disableButton('btn_Add');
        }
      }
      else
      {
        if (tblid == 'dhcpServ')
        {
          disableButton('btn_Remove', 'btn_Cancel', 'btn_Delete', 'btn_Apply');
          enableButton('btn_Add');
        }
        else
        {
          disableButton('btn_Up', 'btn_Down', 'btn_Remove', 'btn_Apply');
          enableButton('btn_Add', 'btn_reauthenticate', 'btn_initialize');
        }
      }
    }
  }

  function enablebtn(opt)
  {
    // According to FP-206551 was changed behaviour for APPLY buttons for all XUI pages.
    // And ACL Withard page is only one EMWEB page where also plased Table and membership part.
    // After these changes APPLY button will be active after select/unselect member with selected row in table only.
    if (-1 !== document.URL.indexOf('acl_wizard'))
    {
      if (actvCheckbox("acl_wizard") == 0)
      {
        disableButton("btn_Apply");
      }
      else
      {
        enableButton("btn_Apply");
      }

      enableButton("btn_Cancel");
    }
    else
    {
      if (opt == 1)
      {
        enableButton('btn_Cancel', 'btn_Apply');
      }
    }
  }

  function resethidden()
  {
    window.frames['maincontent'].document.forms[0].elements['hiddenTagged'].value = "";
    window.frames['maincontent'].document.forms[0].elements['hiddenUnTagged'].value = "";
  }

  function clearIntf()
  {
    window.frames['maincontent'].document.forms[0].elements['hiddenGroupMemIntf'].value = "";
  }

  function clearPort(tblid)
  {
    var myRow;
    var i;
    var rownumber;
    var j = 0;
    var rwcount = rowcount(tblid)
    var selPort = window.frames['maincontent'].document.getElementById("selectedPorts")
    prntid = window.frames['maincontent'].document.getElementById(tblid)
    frmObj = document.forms[0]
    if (frmObj == undefined)
    {
      frmObj = window.frames['maincontent'].document.forms[0]
    }
    clearSelectedPorts();
    for (rownumber = 1; rownumber < rwcount; rownumber++)
    {
      ele = prntid.rows[rownumber].cells[0].firstChild
      if (ele.checked == true)
      {
        if (tblid == 'ip_acl_tbl' || tblid == 'lagCfg')
        {
          if (j == 0)
            selPort.value = prntid.rows[rownumber].cells[1].childNodes[0].childNodes[0].nodeValue + ";";
          else
            selPort.value += prntid.rows[rownumber].cells[1].childNodes[0].childNodes[0].nodeValue + ";";
        }
        else
        {
          if (j == 0)
            selPort.value = prntid.rows[rownumber].cells[1].innerHTML + ";";
          else
            selPort.value += prntid.rows[rownumber].cells[1].innerHTML + ";";
        }
        j++;
      }
    }
    window.frames['maincontent'].document.forms[0].elements['multiple_ports'].value = j;
    clearform();
  }

  function submitclass()
  {
    var srcmac = window.frames['maincontent'].document.getElementById("mac_addr")
    var srcmask = window.frames['maincontent'].document.getElementById("mac_mask")
    var dstmac = window.frames['maincontent'].document.getElementById("dst_mac_addr")
    var dstmask = window.frames['maincontent'].document.getElementById("dst_mac_mask")
    var srcip = window.frames['maincontent'].document.getElementById("ip_addr")
    var srcipmask = window.frames['maincontent'].document.getElementById("ip_mask")
    var dstip = window.frames['maincontent'].document.getElementById("dst_ip_addr")
    var dstipmask = window.frames['maincontent'].document.getElementById("dst_ip_mask")
    var tosbit = window.frames['maincontent'].document.getElementById("tosBits")
    var tosmask = window.frames['maincontent'].document.getElementById("tosMask")
    if (srcmac != undefined)
    {
      if ((srcmac.value != '') && (srcmask.value == ''))
      {
        alert('Please add Source MAC Mask before applying configuration');
        return;
      }
      if ((srcmac.value == '') && (srcmask.value != ''))
      {
        alert('Please add Source MAC before applying configuration');
        return;
      }
      if ((dstmac.value != '') && (dstmask.value == ''))
      {
        alert('Please add Destination MAC Mask before applying configuration');
        return;
      }
      if ((dstmac.value == '') && (dstmask.value != ''))
      {
        alert('Please add destination MAC before applying configuration');
        return;
      }
    }
    if ((srcip.value != '') && (srcipmask.value == ''))
    {
      alert('Please add Source IP Mask before applying configuration');
      return;
    }
    if ((srcip.value == '') && (srcipmask.value != ''))
    {
      alert('Please add Source IP before applying configuration');
      return;
    }
    if ((dstip.value != '') && (dstipmask.value == ''))
    {
      alert('Please add Destination IP Mask before applying configuration');
      return;
    }
    if ((dstip.value == '') && (dstipmask.value != ''))
    {
      alert('Please add destination IP before applying configuration');
      return;
    }
    if ((tosbit.value == '') && (tosmask.value != ''))
    {
      alert('Please add IP ToS Bits before applying configuration');
      return;
    }
    if ((tosbit.value != '') && (tosmask.value == ''))
    {
      alert('Please add IP ToS Bits Mask before applying configuration');
      return;
    }
    submitform();
  }

  function setDeleteFlag()
  {
    var deleteFlag = window.frames['maincontent'].document.getElementById("deleteFlag")
    deleteFlag.value = "1";
  }

/*  function toggleCheckMacFilterImage(obj, index, indexLength, prntid)
  {
    srcOb = obj.childNodes[0].src
    srLen = srcOb.length
    j = 2 * (index);
    if (srcOb.substring(srLen - 9, srLen) == "blank.gif")
    {
      obj.childNodes[0].src = srcOb.substring(0, srLen - 9) + "check.gif";
      while (indexLength >= 0)
      {
        membership = docById(prntid).value;
        docById(prntid).value = membership.substr(0, j) + "1" + membership.substr(j + 1);
        index++;
        indexLength--;
        j = 2 * (index);
      }
    }
    else if (srcOb.substring(srLen - 9, srLen) == "check.gif")
    {
      obj.childNodes[0].src = srcOb.substring(0, srLen - 9) + "blank.gif";
      while (indexLength >= 0)
      {
        membership = docById(prntid).value;
        docById(prntid).value = membership.substr(0, j) + "0" + membership.substr(j + 1);
        index++;
        indexLength--;
        j = 2 * (index);
      }
    }
  }
*/
  function enableJavaPort(tblid, inputTxt)
  {
    txtValue = docById(inputTxt).value;
    var rwcount = rowcount(tblid);
    if (txtValue != '')
    {
      clLen = " selectedRow".length
      prntid = docById(tblid)
      myRow = prntid.rows[1]
      if (myRow.cells[0].firstChild.checked == true)
      {
        for (i = 0; i < myRow.cells.length; i++)
        {
          var fc = prntid.rows[1].cells[i].firstChild
          if (fc != null)
          {
            if (fc.tagName == "SELECT")
            {
              SelectObject = fc
              SelectObject.selectedIndex = defaultInd[i]
            }
          }
        }
      }
      flag = true;
      for (ronum = 2; ronum < rwcount; ronum++)
      {
        if (prntid.rows[ronum].cells[1].innerHTML == txtValue)
        {
          flag = false;
          j = ronum - 1
        }
      }
      if (flag == false)
      {
        clmnelement = prntid.rows[j + 1]
        rowSelected = clmnelement.cells[0].firstChild
        var myRows = document.getElementsByName(rowSelected.name);
        rowSelected.checked = true
        myRows[j].onclick();
      }
    }
  }
  /* Change expanded images*/
  function changeExpandImg(obj, lyrid)
  {
    var img = null,
      imgLen = null,
      elment = null;
    var endStr = "normal.gif";
    if (obj.tagName == "A")
    {
      elment = obj.parentNode.parentNode.cells[2].children[0];
    }
    else if (obj.tagName == "TD")
    {
      elment = obj.children[0];
    }
    if (elment == null || elment.src == null)
    {
      return;
    }
    img = elment.src;
    temp = img.substring((img.length - endStr.length), img.length);
    if (temp == endStr)
    {
      tabimgsrc = 'up.gif';
    }
    else
    {
      tabimgsrc = endStr;
      endStr = 'up.gif';
    }
    if (obj.tagName == "A")
    {
      obj.parentNode.parentNode.cells[2].children[0].src = (img.substring(0, (img.length - endStr.length)) + tabimgsrc);
    }
    else if (obj.tagName == "TD")
    {
      obj.children[0].src = (img.substring(0, (img.length - endStr.length)) + tabimgsrc);
    }
  }
  /* Move checkbox to first line of table. Used for emWeb pages*/
function removalCbx(classSlc1, classSlc2)
{

  var $firstCell = $(classSlc1).children("input:first"); /* get all td obj with specified css class */
  var $cellCbx = $(classSlc2).children("input:first");
  //$firstCell.show();
  $cellCbx.hide();
  //$firstCell.onClick = function(){this.parentElement.parentElement.nextElementSibling.children[0].firstElementChild.click();}

}

function mouseOver(arg) {
  var src = arg.attributes['src'];
  var active = (src.value.lastIndexOf("_active.png") != -1);

  if (active) {
    src.value = src.value.replace("_active.png", "_inactive.png");
  } else {
    src.value = src.value.replace("_inactive.png", "_active.png");
  }
}

function mouseOut(arg) {
  var src = arg.attributes['src'];
  var active = (src.value.lastIndexOf("_active.png") != -1);

  if (active) {
    src.value = src.value.replace("_active.png", "_inactive.png");
  } else {
    src.value = src.value.replace("_inactive.png", "_active.png");
  }
}
function mouseOverVlan(arg) {
  var src = arg.attributes['src'];
  var active = (src.value.lastIndexOf("_active.png") != -1);

  if (active) {
    src.value = src.value.replace("_active.png", "_inactive.png");
  } else {
    src.value = src.value.replace("_inactive.png", "_active.png");
  }
}

function mouseOutVlan(arg) {
  var src = arg.attributes['src'];
  var active = (src.value.lastIndexOf("_active.png") != -1);

  if (active) {
    src.value = src.value.replace("_active.png", "_inactive.png");
  } else {
    src.value = src.value.replace("_inactive.png", "_active.png");
  }
}

function onClick(arg0) {
  var src = arg0.attributes['src'];
  var mode;
  var found = [];
  var selType = arg0.attributes['onmouseOver'];

  found = src.value.split("_");

  switch (found[1]) {
    case "tagged":
      src.value = src.value.replace("_tagged", "_untagged");
      break;
    case "untagged":
      src.value = src.value.replace("_untagged", "_blank");
      break;
    case "checked":
      src.value = src.value.replace("_checked", "_blank");
      break;
    case "blank":
      if (selType.value == "mouseOverVlan(this);")
      {
        src.value = src.value.replace("_blank", "_tagged");
      }
      else
      {
        src.value = src.value.replace("_blank", "_checked");
      }
      break;
    default:
      src.value = src.value.replace("_blank", "_checked");
      break;
  }
}

function port_image_onmouseclick_all(arg0) {
  onClick(arg0);
  var id = arg0.id.substring(4);
  port_image_onmouseclick_all_propagate(arg0, id);
}

function port_image_onmouseclick_all_propagate(arg, id) {
  var str = arg.attributes['src'].value.replace("_active.png", "_inactive.png");
  var strBot = arg.attributes['src'].value.replace("_active.png", "_bottom_inactive.png");
  $("#" + id + " td table tbody tr td div a img").each(function(idx){
    if (-1 != $(this).attr("src").indexOf("bottom"))
      $(this).attr("src", strBot);
    else
      $(this).attr("src", str);
  });
}

var ready_js_rollover = 1;