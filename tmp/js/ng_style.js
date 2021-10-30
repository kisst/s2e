function isASCII(str) {return /^[\x00-\x7F]*$/.test(str);}

/*******************************
 * Initial
 *******************************/
function PageTitleChange(title)
{
  $(document).attr('title', title);
}

function ContentLoading()
{
  initTabid();
  $('#main_container').html('<IMG SRC="../images/preload.gif" ALIGN="middle">'+lang('common','txtLoading'));
}

function InputTextIinit()
{
  $('input[type=text]').each(function(idx){
    if(!IsUndefOrNull($(this).attr('digitonly')))
    {
      $(this).keydown(inputText_digitonly);
    }
    else if(!IsUndefOrNull($(this).attr('floatonly')))
    {
      $(this).keydown(inputText_floatonly);
    }
    else if(!IsUndefOrNull($(this).attr('oidonly')))
    {
      $(this).keydown(inputText_oidonly);
    }
    else if(!IsUndefOrNull($(this).attr('timeonly')))
    {
      $(this).keydown(inputText_timeonly);
    }
    else if(!IsUndefOrNull($(this).attr('dateonly')))
    {
      $(this).keydown(inputText_dateonly);
    }
    else if(!IsUndefOrNull($(this).attr('hexonly')))
    {
      $(this).keydown(inputText_hexonly);
    }
    else if(!IsUndefOrNull($(this).attr('maconly')))
    {
      $(this).keydown(inputText_maconly);
    }
    else if(!IsUndefOrNull($(this).attr('hostonly')))
    {
      $(this).keydown(inputText_hostonly);
    }
    else if(!IsUndefOrNull($(this).attr('ipv4only')))
    {
      $(this).keydown(inputText_ipv4only);
    }
    else if(!IsUndefOrNull($(this).attr('ipv6only')))
    {
      $(this).keydown(inputText_ipv6only);
    }
    else if(!IsUndefOrNull($(this).attr('ascii')))
    {
      $(this).keydown(inputText_common);
    }
    else if(!IsUndefOrNull($(this).attr('vlanlist')))
    {
      $(this).keydown(inputText_vlanlist);
    }
    else if(!IsUndefOrNull($(this).attr('vlanlistwnone')))
    {
      $(this).keydown(inputText_vlanlistwnone);
    }
    else if(!IsUndefOrNull($(this).attr('gosearch')))
    {
      $(this).keydown(function(event){
        if (event.keyCode == 13) {
          event.preventDefault();
          $('#btn_go').click();
        }
      });
    }

    $(this).bind("blur", function(event){
        if (!isASCII(this.value))
        {
          alert(lang('alert','alertAsciiOnly'));
          $(this).val('');
        }
    });
  });
}

function BlockInit()
{
  /* BlockTwoCol */
  $(".blockTwoCol > table").each(function(){
    $(this).addClass("xuiTableStyle");
  });
  $(".blockTwoCol > table > tbody > tr > th").each(function(){
    $(this).addClass("defLeft defaultFontBold spacer40Percent font10Bold");
  });
  $(".blockTwoCol > table > tbody > tr").each(function(){
    if (!IsUndefOrNull($(this).attr('class')))
      return;
    $(this).find("td").each(function(){
      $(this).addClass("defright");
    });
  });
}

function TableInit()
{
  var classStr = '';
  var maxWidth = -1;

  if (0 == $('.dataTable').length)
    return;

  currButtonsType = '';

  $('.dataTable').each(function(tblIdx){
    var table = $('.dataTable:eq('+tblIdx+')');
    var isEntry = false;
    classStr = $(table).attr('class');
    isEntry = HasWord(classStr, "entry");
    isGlobal = HasWord(classStr, "global");
    noCheckBox = HasWord(classStr, "noCheckBox")
    if (HasWord(classStr, "portsel") || HasWord(classStr, "entry"))
    {
      if (isEntry)
      {
        if (isGlobal)
          currButtonsType = 'global_entry';
        else
          currButtonsType = 'entry';
      }
      else
      {
        if (isGlobal)
          currButtonsType = 'global_portsel';
        else
          currButtonsType = 'portsel';
      }

      $(table).find('thead').find('tr').each(function(idx){
        if (0 == idx)
        {
          $(this).find('td').each(function(i){
            if (0 == i)
            {
              $(this).addClass(noCheckBox ? 'def_TH alt0 firstCol' : 'selAllChkboxTD');
            }
            else if (1 == i)
            {
              $(this).prop('className','def_TH alt0');
              if (noCheckBox === false)
                  $(this).addClass('firstCol');
            }
            else
            {
              $(this).prop('className','def_TH alt0');
            }
          });
        }
        else if (1 == idx)
        {
          $(this).find('td').each(function(i){
            if (0 == i)
              $(this).addClass('def_getd geRight');
            else
              $(this).prop('className','def_getd alt0');
          });
        }
      });
      $(table).find('tbody').find('tr').each(function(idx){
        if (idx % 2 == 0) {
          $(this).find('td').each(function(i){
            $(this).prop('className','def alt0');
            if (0 == i)
            {
              if (isEntry)
                $(this).addClass('entryFirstCol');
              $(this).addClass('geRight');
            }
          });
        } else {
          $(this).find('td').each(function(i){
            $(this).prop('className','def alt1');
            if (0 == i)
            {
              if (isEntry)
                $(this).addClass('entryFirstCol');
              $(this).addClass('geRight');
            }
          });
        }
      });
    }
    else if (HasWord(classStr, "status"))
    {
      $(table).find('thead').find('tr').each(function(idx){
        $(this).find('td').each(function(i){
          $(this).prop('className','def_TH alt0');
          if (0 == i)
            $(this).addClass('firstCol');
        });
      });
      $(table).find('tbody').find('tr').each(function(idx){
        if (idx % 2 == 0) {
          $(this).find('td').each(function(i){
            $(this).prop('className','def alt0');
          });
        } else {
          $(this).find('td').each(function(i){
            $(this).prop('className','def alt1');
          });
        }
      });
    }

    if (HasWord(classStr, "useMaxWidth"))
    {
      maxWidth = $(this).width();
    }
  });

  if (-1 != maxWidth)
  {
    $('.dataTable').each(function(tblIdx){
      var table = $('.dataTable:eq('+tblIdx+')');
      classStr = $(table).attr('class');
      if (HasWord(classStr, "useMaxWidth"))
      {
        $(this).width(maxWidth);
      }
    });
  }
}

function PagePostInit(isAllInputUpdate)
{

  /*VNGF102 */
  $('div#setform').replaceWith('<fo'+'rm id="setform" action="/cgi/set.cgi">' + $('#setform').html() +'</form>');

  /* Auto add id for content html tag */
  var pageName = document.location.pathname.match(/[^\/]+$/)[0];
  pageName = pageName.substring(0, pageName.indexOf(".html"));
  $("html").attr("id", pageName);

  InputTextIinit();
  BlockInit();
  TableInit();

  $(".horizScroll").nanoScroller({
      alwaysVisible: false,
      contentClass: 'horizContent'
  });

  $("body").addClass("overflowXHidden");

  _top.resizeAllElements();

  if (IsUndefOrNull(isAllInputUpdate) || true == isAllInputUpdate)
    AllInputUpdateTopButtons();

  initTabid();
}

/*******************************
 * Block
 *******************************/
function BlockTwoColTop(title, helpUrl, userDefineClass)
{
  var str = '';

  str += '<table class="tableStyle"><tr><td colspan="3">';
  str += tbhdr(title,helpUrl);
  str += '</td></tr>';
  //str += '<tr><td class="xuiSubSectionBodyDot"></td><td class="paddingsubSectionBodyNone '+(IsUndefOrNull(userDefineClass)?'blockTwoCol':'')+'">';
  str += '<tr><td class="xuiSubSectionBodyDot"></td>';
  str += '<td class="xuiSpacer100Percent ';
  if(IsUndefOrNull(userDefineClass))
    str += 'blockTwoCol';
  str += '">';

  return str;
}

function BlockTwoColBot()
{
  var str = '';

  str += '</td><td class="subSectionBodyDotRight"></td>';
  str += '</tr><tr><td colspan="3" class="subSectionBottom" style="padding-bottom:30px;">&nbsp;</td></tr></table>';

  return str;
}

function BlockTableTop(title, helpUrl)
{
  var str = '';

  str += '<table class="detailsAreaContainer"><tr><td>';
  str += '<table class="tableStyle"><tr><td colspan="3">';
  str += tbhdr(title,helpUrl);
  str += '</td></tr>';
  str += '<tr><td class="xuiSubSectionBodyDot">&nbsp;</td><td class="xuiSpacer100Percent blockTable">';

  return str;
}

function BlockTableBot()
{
  var str = '';

  str += '</td><td class="xuiSubSectionBodyDotRight">&nbsp;</td>';
  str += '</tr><tr><td colspan="3" class="xuiSubSectionBodyDotRight" style="padding-bottom:30px;">&nbsp;</td></tr></table>';
  str += '</td></tr></table>';

  return str;
}

function BlockGotoIntf(currPortType, showSearch)
{
  var str = '';
  var portStr = '<a class="urlListLink" href="#" onclick="RefreshPortType(\'port\')"><span class="urlListNotSelected">'+'1'+'</span></a>';
  var lagStr = '<a class="urlListLink" href="#" onclick="RefreshPortType(\'lag\')"><span class="urlListNotSelected">'+lang('common','txtLAG')+'</span></a>';
  var allStr = '<a class="urlListLink" href="#" onclick="RefreshPortType(\'all\')"><span class="urlListNotSelected">'+lang('common','txtAll')+'</span></a>';

  if (IsUndefOrNull(currPortType))
  {
    portStr = '<span class="urlListSelected">'+'1'+'</span>';
    lagStr = '';
    allStr = '';
  }
  else if ('route' == currPortType)
  {
    portStr = '';
    lagStr = '';
    allStr = '';
  }
  else if ('port' == currPortType)
    portStr = '<span class="urlListSelected">'+'1'+'</span>';
  else if ('lag' == currPortType)
    lagStr = '<span class="urlListSelected">'+lang('common','txtLAG')+'</span>';
  else if ('all' == currPortType)
    allStr = '<span class="urlListSelected">'+lang('common','txtAll')+'</span>';

  str += '<table class="navigationTable" cellspacing="0" cellpadding="0">';
  str += '<tr class="deftestme">';
  str += '  <td class="defright">';
  str += '    <table cellspacing="0" cellpadding="0" class="urlListTable">';
  str += '    <tr class="urlListTr">';
  str += '      <td class="urlListTd">'+portStr+'</td>';
  str += '      <td class="urlListTd">'+lagStr+'</td>';
  str += '      <td class="urlListTd">'+allStr+'</td>';
  str += '    </tr>';
  str += '    </table>';
  str += '  </td>';
  str += '  <td class="xuiSpacer100Percent"></td>';
  str += '  <td class="xuiSpacer4Percent">';

  if (IsUndefOrNull(showSearch) || showSearch)
  {
    str += '    <table class="tableStyle">';
    str += '    <tr>';
    str += '      <td class="xuiFont10Bold xuiSpacer15Percent xuiWhiteSpace" style="vertical-align: top;">'+lang('common','txtGoToIntf')+'</td>';
    str += '      <td></td>';
    str += '      <td class="navigationPadding"><input type="text" class="input" size="10" maxlength="10" value=""></td>';
    str += '      <td></td>';
    str += '      <td class="xuiSpacer1Percent navigationImagePadding">';
    str += '        <div class="ButtonsContentDiv">';
    str += CreateEditblBtns(lang('common','btnGo'), 'ClickGoToIntf(this)', 'btn_go', undefined, "on");
    str += '        </div>';
    str += '      </td>';
    str += '    </tr>';
    str += '    </table>';
  }
  str += '  </td>';
  str += '  <td></td>';
  str += '  <td colspan="2"></td>';
  str += '</tr>';
  str += '</table>';

  return str;
}

function BlockCPUGotoIntf(currPortType, showSearch)
{
  var str = '';
  var portStr = '<a class="urlListLink" href="#" onclick="RefreshPortType(\'port\')"><span class="urlListNotSelected">'+'1'+'</span></a>';
  var lagStr = '<a class="urlListLink" href="#" onclick="RefreshPortType(\'lag\')"><span class="urlListNotSelected">'+lang('common','txtLAG')+'</span></a>';
  var cpuStr = '<a class="urlListLink" href="#" onclick="RefreshPortType(\'cpu\')"><span class="urlListNotSelected">'+lang('common','txtCPU')+'</span></a>';
  var allStr = '<a class="urlListLink" href="#" onclick="RefreshPortType(\'all\')"><span class="urlListNotSelected">'+lang('common','txtAll')+'</span></a>';

  if (IsUndefOrNull(currPortType))
  {
    portStr = '<span class="urlListSelected">'+'1'+'</span>';
    lagStr = '';
    cpuStr = '';
    allStr = '';
  }
  else if ('route' == currPortType)
  {
    portStr = '';
    lagStr = '';
    cpuStr = '';
    allStr = '';
  }
  else if ('port' == currPortType)
    portStr = '<span class="urlListSelected">'+'1'+'</span>';
  else if ('lag' == currPortType)
    lagStr = '<span class="urlListSelected">'+lang('common','txtLAG')+'</span>';
  else if ('cpu' == currPortType)
    cpuStr = '<span class="urlListSelected">'+lang('common','txtCPU')+'</span>';
  else if ('all' == currPortType)
    allStr = '<span class="urlListSelected">'+lang('common','txtAll')+'</span>';

  str += '<table class="navigationTable" cellspacing="0" cellpadding="0">';
  str += '<tr class="deftestme">';
  str += '  <td class="defright">';
  str += '    <table cellspacing="0" cellpadding="0" class="urlListTable">';
  str += '    <tr class="urlListTr">';
  str += '      <td class="urlListTd">'+portStr+'</td>';
  str += '      <td class="urlListTd">'+lagStr+'</td>';
  str += '      <td class="urlListTd">'+cpuStr+'</td>';
  str += '      <td class="urlListTd">'+allStr+'</td>';
  str += '    </tr>';
  str += '    </table>';
  str += '  </td>';
  str += '  <td class="xuiSpacer100Percent"></td>';
  str += '  <td class="xuiSpacer4Percent">';

  if (IsUndefOrNull(showSearch) || showSearch)
  {
    str += '    <table class="tableStyle">';
    str += '    <tr>';
    str += '      <td class="xuiFont10Bold xuiSpacer15Percent xuiWhiteSpace" style="vertical-align: top;">'+lang('common','txtGoToIntf')+'</td>';
    str += '      <td></td>';
    str += '      <td class="navigationPadding"><input type="text" class="input" size="10" maxlength="10" value=""></td>';
    str += '      <td></td>';
    str += '      <td class="xuiSpacer1Percent navigationImagePadding">';
    str += '        <div class="ButtonsContentDiv">';
    str += CreateEditblBtns(lang('common','btnGo'), 'ClickGoToIntf(this)', 'btn_go', undefined, "on");
    str += '        </div>';
    str += '      </td>';
    str += '    </tr>';
    str += '    </table>';
  }
  str += '  </td>';
  str += '  <td></td>';
  str += '  <td colspan="2"></td>';
  str += '</tr>';
  str += '</table>';

  return str;
}

function BlockVLANGotoIntf(currPortType, showSearch)
{
  var str = '';
  var portStr = '<a class="urlListLink" href="#" onclick="RefreshPortType(\'port\')"><span class="urlListNotSelected">'+'1'+'</span></a>';
  var vlanStr = '<a class="urlListLink" href="#" onclick="RefreshPortType(\'vlan\')"><span class="urlListNotSelected">'+lang('common','txtVLAN')+'</span></a>';
  var lagStr = '<a class="urlListLink" href="#" onclick="RefreshPortType(\'lag\')"><span class="urlListNotSelected">'+lang('common','txtLAG')+'</span></a>';
  var allStr = '<a class="urlListLink" href="#" onclick="RefreshPortType(\'all\')"><span class="urlListNotSelected">'+lang('common','txtAll')+'</span></a>';

  if (IsUndefOrNull(currPortType))
  {
    portStr = '<span class="urlListSelected">'+'1'+'</span>';
    lagStr = '';
    vlanStr = '';
    allStr = '';
  }
  else if ('route' == currPortType)
  {
    portStr = '';
    lagStr = '';
    vlanStr = '';
    allStr = '';
  }
  else if ('port' == currPortType)
    portStr = '<span class="urlListSelected">'+'1'+'</span>';
  else if ('vlan' == currPortType)
    vlanStr = '<span class="urlListSelected">'+lang('common','txtVLAN')+'</span>';
  else if ('lag' == currPortType)
    lagStr = '<span class="urlListSelected">'+lang('common','txtLAG')+'</span>';
  else if ('all' == currPortType)
    allStr = '<span class="urlListSelected">'+lang('common','txtAll')+'</span>';

  str += '<table class="navigationTable" cellspacing="0" cellpadding="0">';
  str += '<tr class="deftestme">';
  str += '  <td class="defright">';
  str += '    <table cellspacing="0" cellpadding="0" class="urlListTable">';
  str += '    <tr class="urlListTr">';
  str += '      <td class="urlListTd">'+portStr+'</td>';
  str += '      <td class="urlListTd">'+vlanStr+'</td>';
  str += '      <td class="urlListTd">'+lagStr+'</td>';
  str += '      <td class="urlListTd">'+allStr+'</td>';
  str += '    </tr>';
  str += '    </table>';
  str += '  </td>';
  str += '  <td class="xuiSpacer100Percent"></td>';
  str += '  <td class="xuiSpacer4Percent">';

  if (IsUndefOrNull(showSearch) || showSearch)
  {
    str += '    <table class="tableStyle">';
    str += '    <tr>';
    str += '      <td class="xuiFont10Bold xuiSpacer15Percent xuiWhiteSpace" style="vertical-align: top;">'+lang('common','txtGoToIntf')+'</td>';
    str += '      <td></td>';
    str += '      <td class="navigationPadding"><input type="text" class="input" size="10" maxlength="10" value=""></td>';
    str += '      <td></td>';
    str += '      <td class="xuiSpacer1Percent navigationImagePadding">';
    str += '        <div class="ButtonsContentDiv">';
    str += CreateEditblBtns(lang('common','btnGo'), 'ClickGoToIntf(this)', 'btn_go', undefined, "on");
    str += '        </div>';
    str += '      </td>';
    str += '    </tr>';
    str += '    </table>';
  }
  str += '  </td>';
  str += '  <td></td>';
  str += '  <td colspan="2"></td>';
  str += '</tr>';
  str += '</table>';

  return str;
}

function BlockNoLagGotoIntf(currPortType, showSearch)
{
  var str = '';
  var portStr = '<a class="urlListLink" href="#" onclick="RefreshPortType(\'port\')"><span class="urlListNotSelected">'+'1'+'</span></a>';
  var allStr = '<a class="urlListLink" href="#" onclick="RefreshPortType(\'all\')"><span class="urlListNotSelected">'+lang('common','txtAll')+'</span></a>';

  if (IsUndefOrNull(currPortType))
  {
    portStr = '<span class="urlListSelected">'+'1'+'</span>';
    allStr = '';
  }
  else if ('route' == currPortType)
  {
    portStr = '';
    allStr = '';
  }
  else if ('port' == currPortType)
    portStr = '<span class="urlListSelected">'+'1'+'</span>';
  else if ('all' == currPortType)
    allStr = '<span class="urlListSelected">'+lang('common','txtAll')+'</span>';

  str += '<table class="navigationTable" cellspacing="0" cellpadding="0">';
  str += '<tr class="deftestme">';
  str += '  <td class="defright">';
  str += '    <table cellspacing="0" cellpadding="0" class="urlListTable">';
  str += '    <tr class="urlListTr">';
  str += '      <td class="urlListTd">'+portStr+'</td>';
  //str += '      <td class="urlListTd">'+allStr+'</td>';
  str += '    </tr>';
  str += '    </table>';
  str += '  </td>';
  str += '  <td class="xuiSpacer100Percent"></td>';
  str += '  <td class="xuiSpacer4Percent">';

  if (IsUndefOrNull(showSearch) || showSearch)
  {
    str += '    <table class="tableStyle">';
    str += '    <tr>';
    str += '      <td class="xuiFont10Bold xuiSpacer15Percent xuiWhiteSpace" style="vertical-align: top;">'+lang('common','txtGoToIntf')+'</td>';
    str += '      <td></td>';
    str += '      <td class="navigationPadding"><input type="text" class="input" size="10" maxlength="10" value=""></td>';
    str += '      <td></td>';
    str += '      <td class="xuiSpacer1Percent navigationImagePadding">';
    str += '        <div class="ButtonsContentDiv">';
    str += CreateEditblBtns(lang('common','btnGo'), 'ClickGoToIntf(this)', 'btn_go', undefined, "on");
    str += '        </div>';
    str += '      </td>';
    str += '    </tr>';
    str += '    </table>';
  }
  str += '  </td>';
  str += '  <td></td>';
  str += '  <td colspan="2"></td>';
  str += '</tr>';
  str += '</table>';

  return str;
}

function ClickGoToIntf(btn)
{
  var portStr = $(btn).parent().parent().parent().find('input').val();
  var chkbox;
  var isChecked = false;
  var found = false;

  $('.dataTable').find('tbody').find('tr').each(function(idx){
    var that = this;
    $(this).find('td').each(function(i){
      isChecked = false;
      if (0 == i)
      {
        chkbox = $(this).find('input[type=checkbox]:eq(0)');
        isChecked = $(chkbox).prop('checked');
      }

      if (1 == i && portStr == $(this).html())
      {
        $(chkbox).prop('checked', true);
        ClickTableCheckbox(chkbox);
        found = true;
      }
      else if (isChecked && 0 == portStr.length)
      {
        $(chkbox).prop('checked', false);
        $(this).parent().find('td').removeClass('selectedRow');
        ClickTableCheckbox(chkbox);
        found = true;
      }
    });
  });

  if (!found)
  {
    alert(lang('err','errSearchIntf',[portStr]));
  }
}

function SelectPortByIdx(index)
{
  var chkbox;
  var isChecked = false;
  $('.dataTable').find('tbody').find('tr').each(function(idx){
    if (idx != index)
      return;
    var that = this;
    $(this).find('td').each(function(i){
      if (0 == i)
      {
        chkbox = $(this).find('input[type=checkbox]:eq(0)');
        isChecked = $(chkbox).prop('checked');
      }

      if (!isChecked)
      {
        $(chkbox).prop('checked', true);
        ClickTableCheckbox(chkbox);
      }
    });
  });
}

function BlockGoSearch(title, fnName, searchKey, selectStr)
{
  var str = '';

  str += '<table class="navigationTable" cellspacing="0" cellpadding="0">';
  str += '<tr class="deftestme">';
  str += '  <td class="defright">';
  str += '  </td>';
  str += '  <td class="xuiSpacer100Percent"></td>';
  str += '  <td class="xuiSpacer4Percent">';
  str += '    <table class="tableStyle">';
  str += '    <tr>';
  str += '      <td class="xuiFont10Bold xuiSpacer15Percent xuiWhiteSpace" style="vertical-align: top;">'+title+'</td>';
  str += '      <td style="padding-left:5px; padding-bottom:5px;">'+(IsUndefOrNull(selectStr)?'':selectStr)+'</td>';
  str += '      <td class="navigationPadding"><input type="text" class="input" gosearch size="18" value="'+(IsUndefOrNull(searchKey)?'':searchKey)+'"></td>';
  str += '      <td></td>';
  str += '      <td class="xuiSpacer1Percent navigationImagePadding">'
  str += '        <div class="ButtonsContentDiv">';
  str += CreateEditblBtns(lang('common','btnGo'), fnName+'(this)', 'btn_go', undefined, "on");
  str += '        </div>';
  //str += '        <a href="javascript:void(0)" onclick="'+fnName+'(this);"><img height="20" width="44" src="../images/button_go_active.png" title="Go"></a>';
  str += '      </td>';
  str += '    </tr>';
  str += '    </table>';
  str += '  </td>';
  str += '  <td></td>';
  str += '  <td colspan="2"></td>';
  str += '</tr>';
  str += '</table>';

  return str;
}

function BlockPortTableTop(title, helpUrl, portType, showSearch)
{
  var str = '';
  str += BlockTableTop(title, helpUrl);
  str += '<table class="xuiTableStyle" cellspacing="0" cellpadding="0">';
  str += '<tr><td class="xuiUrlListNodeTop">'+BlockGotoIntf(portType, showSearch)+'</td></tr>';
  str += '<tr><td style="height:5px;" colspan="3"></td></tr>';
  str += '<tr><td class="xuiPaddingSubSectionBodyWide" colspan=200><div class="horizScroll"><div class="horizContent">';
  return str;
}

function BlockPortTableBot(portType, showSearch)
{
  var str = '';
  str += '</div></div></td></tr>';
  str += '<tr><td class="xuiSubSectionTabTopShadow" colspan="3"></td></tr>';
  str += '<tr><td class="xuiSubSectionTabTopShadow">'+BlockGotoIntf(portType, showSearch)+'</td></tr>';
  str += '</table>';
  str += BlockTableBot();
  return str;
}

function BlockPortCPUTableTop(title, helpUrl, portType, showSearch)
{
  var str = '';
  str += BlockTableTop(title, helpUrl);
  str += '<table class="xuiTableStyle" cellspacing="0" cellpadding="0">';
  str += '<tr><td class="xuiUrlListNodeTop">'+BlockCPUGotoIntf(portType, showSearch)+'</td></tr>';
  str += '<tr><td style="height:5px;" colspan="3"></td></tr>';
  str += '<tr><td class="xuiPaddingSubSectionBodyWide" colspan=200><div class="horizScroll"><div class="horizContent">';
  return str;
}

function BlockPortVLANTableTop(title, helpUrl, portType, showSearch)
{
  var str = '';
  str += BlockTableTop(title, helpUrl);
  str += '<table class="xuiTableStyle" cellspacing="0" cellpadding="0">';
  str += '<tr><td class="xuiUrlListNodeTop">'+BlockVLANGotoIntf(portType, showSearch)+'</td></tr>';
  str += '<tr><td style="height:5px;" colspan="3"></td></tr>';
  str += '<tr><td class="xuiPaddingSubSectionBodyWide" colspan=200><div class="horizScroll"><div class="horizContent">';
  return str;
}

function BlockPortCPUTableBot(portType, showSearch)
{
  var str = '';
  str += '</div></div></td></tr>';
  str += '<tr><td class="xuiSubSectionTabTopShadow" colspan="3"></td></tr>';
  str += '<tr><td class="xuiSubSectionTabTopShadow">'+BlockCPUGotoIntf(portType, showSearch)+'</td></tr>';
  str += '</table>';
  str += BlockTableBot();
  return str;
}

function BlockPortNoLagTableTop(title, helpUrl, portType, showSearch)
{
  var str = '';
  str += BlockTableTop(title, helpUrl);
  str += '<table class="xuiTableStyle" cellspacing="0" cellpadding="0">';
  str += '<tr><td class="xuiUrlListNodeTop">'+BlockNoLagGotoIntf(portType, showSearch)+'</td></tr>';
  str += '<tr><td style="height:5px;" colspan="3"></td></tr>';
  str += '<tr><td class="xuiPaddingSubSectionBodyWide" colspan=200><div class="horizScroll"><div class="horizContent">';
  return str;
}

function BlockPortNoLagTableBot(portType, showSearch)
{
  var str = '';
  str += '</div></div></td></tr>';
  str += '<tr><td class="xuiSubSectionTabTopShadow" colspan="3"></td></tr>';
  str += '<tr><td class="xuiSubSectionTabTopShadow">'+BlockNoLagGotoIntf(portType, showSearch)+'</td></tr>';
  str += '</table>';
  str += BlockTableBot();
  return str;
}

function BlockEntryTableTop(title, helpUrl, searchBlock)
{
  var str = '';
  str += BlockTableTop(title, helpUrl);
  str += '<table class="xuiTableStyle" cellspacing="0" cellpadding="0">';

  if (!IsUndefOrNull(searchBlock))
  {
    str += '<tr><td class="xuiUrlListNodeTop">'+searchBlock+'</td></tr>';
    str += '<tr><td style="height:10px;" colspan="3"></td></tr>';
  }
  else
  {
    str += '<tr><td style="height:0px;" colspan="3"></td></tr>';
  }
  str += '<tr><td class="xuiPaddingSubSectionBodyWide" colspan=200><div class="horizScroll"><div class="horizContent">';
  return str;
}

function BlockEntryTableBot()
{
  var str = '';
  str += '</div></div></td></tr>';
  str += '<tr><td class="xuiSubSectionTabTopShadow" colspan="3"></td></tr>';
  str += '</table>';
  str += BlockTableBot();
  return str;
}

var pager_currPage = 0;
var pager_currPageSize = 20;
function pager_chgPagSize(){
  var oldNum = Math.floor((pager_currPageSize * pager_currPage) + 1);
  pager_currPageSize = $('#paginatorRowNumberSelect').val();
  pager_currPage = Math.floor(oldNum/pager_currPageSize);

  if (isNaN(pager_currPage))
    pager_currPage = 0;

  mainFrame.render();
}
function pager_chgPage(){
  pager_currPage = $('#paginatorGroupSelectId').val();
  mainFrame.render();
}
function pager_prevPage(){
  if (!IsUndefOrNull($('#button_prev').attr('disabled')))
    return;
  pager_currPage -= 1;
  mainFrame.render();
}
function pager_nextPage(){
  if (!IsUndefOrNull($('#button_next').attr('disabled')))
    return;
  pager_currPage += 1;
  mainFrame.render();
}
function BlockPagerTableTop(title, helpUrl, totalNum, searchBlock, extraBlock)
{
  var str = '';
  var totalPages = ((0 == pager_currPageSize) ? 1 : (Math.floor(totalNum/pager_currPageSize) + 1));
  var prevOff = true;
  var nextOff = false;

  if (pager_currPage > 0)
    prevOff = false;
  if ((0 == totalNum) || (1 == totalPages) || (pager_currPage >= totalPages - 1))
    nextOff = true;

  str += BlockTableTop(title, helpUrl);
  str += '<table class="xuiTableStyle" cellspacing="0" cellpadding="0">';

  if (!IsUndefOrNull(extraBlock))
  {
    str += '<tr class="deftestme">'+extraBlock+'</tr>';
  }

  if (!IsUndefOrNull(searchBlock))
  {
    str += '<tr><td colspan=200 class="xuiUrlListNodeTop">'+searchBlock+'</td></tr>';
  }
  str += '<tr><td class="xuiPaddingSubSectionBodyWide" colspan=200><div class="horizScroll"><div class="horizContent">';

  str += '<table class="paginationMenuBody"><tbody><tr align="right">';
  str += '<td class="paginationSubRow">'+lang('common','txtRowPerPage');
  str += '  <select onchange="pager_chgPagSize();" class="xuiSelectEnabled" id="paginatorRowNumberSelect" '+((0==totalNum)?'disabled':'')+'>';
  str += '  <option value="20"'+((pager_currPageSize==20)?'selected':'')+'>20</option>';
  str += '  <option value="50"'+((pager_currPageSize==50)?'selected':'')+'>50</option>';
  str += '  <option value="100"'+((pager_currPageSize==100)?'selected':'')+'>100</option>';
  str += '  <option value="200"'+((pager_currPageSize==200)?'selected':'')+'>200</option>';
  str += '  <option value="0"'+((pager_currPageSize==0)?'selected':'')+'>'+lang('common','txtAll')+'</option>';
  str += '  </select>';
  str += '</td>';
  str += '<td class="paginatorLeftNavBtn"><p onclick="pager_prevPage();" class="paginatorPrevBtn" id="button_prev" '+((prevOff)?'style="background-image: url(../images/Prev_off.gif);" disabled':'')+'></p></td>';

  str += '<td class="groupSelectContainer">';
  if (0 == totalNum)
  {
    str += '<select onchange="pager_chgPage();" class="xuiSelectEnabled paginatorGroupSelect" id="paginatorGroupSelectId" disabled>';
    str += '<option>None</option>';
    str += '</select>';
  }
  else
  {
    var selClass = 'paginatorGroupSelect';
    if (totalNum >= 1000 && totalNum < 10000)
      selClass = 'paginatorGroupSelect135';
    else if (totalNum >= 10000)
      selClass = 'paginatorGroupSelect150';
    str += '<select onchange="pager_chgPage();" class="xuiSelectEnabled '+selClass+'" id="paginatorGroupSelectId" '+((0==totalNum)?'disabled':'')+'>';
    for (var i = 0; i < totalPages; i++)
    {
      var start = (0 == pager_currPageSize) ? 1 : Math.floor(str2int(i * pager_currPageSize) + 1);
      var end = (0 == pager_currPageSize) ? totalNum : Math.floor(str2int(i * pager_currPageSize) + str2int(pager_currPageSize));
      if (end > totalNum)
        end = totalNum;
      str += '  <option value="'+i+'"'+((i==pager_currPage)?'selected':'')+'>'+start+' - '+end+' of '+totalNum+'</option>';
    }
    str += '</select>';
  }
  str += '</td>';
  str += '<td class="paginatorRightNavBtn"><p onclick="pager_nextPage();" class="paginatorNextBtn" id="button_next" '+((nextOff)?'style="background-image: url(../images/Next_off.gif);" disabled':'')+'></p></td>';
  str += '</tr></tbody></table>';

  return str;
}

function BlockPagerTableBot()
{
  var str = '';
  str += '</div></div></td></tr>';
  str += '<tr><td class="xuiSubSectionTabTopShadow" colspan="3"></td></tr>';
  str += '</table>';
  str += BlockTableBot();
  return str;
}

function BlockArgHelp(txt)
{
  return '<span class="argHelp">' + txt + '</span>';
}
/*******************************
 * Buttons and Actions
 *******************************/
function iframeFuncExec(fn)
{
  str2var("_top.window.frames['maincontent']."+fn+"()");
}

function iframeRefresh()
{
  _top.window.frames['maincontent'].mainFrame.render();
}

function iframeCancel()
{
  var resp = {};
  var data = _top.window.frames['maincontent'].data;
  var frameContent = _top.window.frames['maincontent'].mainFrame;

  resp["data"] = data;
  frameContent.$el.html( frameContent.template(resp));
  _top.window.frames['maincontent'].PagePostInit();
  _top.window.frames['maincontent'].UpdateTopButtons();
  DisableAllTopButtons();
}

function ClickButton(btnName, execFunc)
{
  var btnId = 'btn_'+btnName;
  var className = _top.$('#'+btnId).attr('class');
  var btnState = false;

  if (IsUndefOrNull(className))
  {
    className = $('#'+btnId).attr('class');

    if (IsUndefOrNull(className))
        return;
  }

  btnState = (-1 != className.indexOf('buttonsOn'));

  if (btnState)
    iframeFuncExec(execFunc);
  //else
    //console.log(btnName+' is Disabed');
}

function CreateAliasButton(btnName, fnName, aliasName, opts)
{
  var _fnName = IsUndefOrNull(fnName) ? 'ClickButton("' + btnName +'","iframe' + btnName +'")' : ('ClickButton("' + btnName +'","'+fnName+'")');

  return CreateEditblBtns(aliasName, _fnName, 'btn_' + btnName, undefined, opts);
}

function ApplyButton(fnName, opts)
{
  var _fnName = IsUndefOrNull(fnName) ? 'ClickButton("Apply","apply")' : ('ClickButton("Apply","'+fnName+'")');

  return CreateEditblBtns(lang('common','btnApply'), _fnName, 'btn_Apply', undefined, opts);
}

function CancelButton(fnName, opts)
{
  var _fnName = IsUndefOrNull(fnName) ? 'ClickButton("Cancel","iframeCancel")' : ('ClickButton("Cancel","'+fnName+'")');

  return CreateEditblBtns(lang('common','btnCancel'), _fnName, 'btn_Cancel', undefined, opts);
}

function AddButton(fnName, opts)
{
  var _fnName = IsUndefOrNull(fnName) ? 'ClickButton("Add","add")' : ('ClickButton("Add","'+fnName+'")');

  return CreateEditblBtns(lang('common','btnAdd'), _fnName, 'btn_Add', undefined, opts);
}

function DeleteButton(fnName, opts)
{
  var _fnName = IsUndefOrNull(fnName) ? 'ClickButton("Delete","del")' : ('ClickButton("Delete","'+fnName+'")');

  return CreateEditblBtns(lang('common','btnDel'), _fnName, 'btn_Delete', undefined, opts);
}

function ClearButton(fnName, opts)
{
  var _fnName = IsUndefOrNull(fnName) ? 'ClickButton("Clear","clr")' : ('ClickButton("Clear","'+fnName+'")');
  var _opts = IsUndefOrNull(opts) ? 'on' : opts;

  return CreateEditblBtns(lang('common','btnClear'), _fnName, 'btn_Clear', undefined, _opts);
}

function ClearcountersButton(fnName, opts)
{
  var _fnName = IsUndefOrNull(fnName) ? 'ClickButton("clearcounters","clr")' : ('ClickButton("clearcounters","'+fnName+'")');
  var _opts = IsUndefOrNull(opts) ? 'on' : opts;

  return CreateEditblBtns(lang('common','btnClearCnt'), _fnName, 'btn_clearcounters', undefined, _opts);
}

function RegisterButton(fnName, opts)
{
  var _fnName = IsUndefOrNull(fnName) ? 'ClickButton("Register","reg")' : ('ClickButton("Register","'+fnName+'")');
  var _opts = IsUndefOrNull(opts) ? 'on' : opts;

  return CreateEditblBtns(lang('common','btnRegister'), _fnName, 'btn_Register', undefined, _opts);
}

function RefreshButton(fnName, opts)
{
  var _fnName = IsUndefOrNull(fnName) ? 'ClickButton("Refresh","iframeRefresh")' : ('ClickButton("Refresh","'+fnName+'")');
  var _opts = IsUndefOrNull(opts) ? 'on' : opts;

  return CreateEditblBtns(lang('common','btnRefresh'), _fnName, 'btn_Refresh', undefined, _opts);
}

function CurrMbrButton(fnName, opts)
{
  var _fnName = IsUndefOrNull(fnName) ? 'ClickButton("CurrMbr","currmbr")' : ('ClickButton("CurrMbr","'+fnName+'")');
  var _opts = IsUndefOrNull(opts) ? 'on' : opts;
  var str = '';
  //str += '<a href="javascript:void(0)" onclick="'+fnName+'();"><img src="../images/currentmembers_on.gif" title="Current Members"></a>';
  str += '<div class="ButtonsContentDiv">';
  str += CreateEditblBtns(lang('lag','btnCurrMbr'), _fnName, 'btn_CurrMbr', undefined, _opts);
  str += '</div>'
  return str;
}

function ChangePwdButton(btnName, fnName, opts)
{
    var _fnName = IsUndefOrNull(fnName) ? "ClickButton('change_password','change password')" : ("ClickButton('change_password','"+fnName+"')");
    var _opts = IsUndefOrNull(opts) ? 'on' : opts;
   var str = '';
    str += '<div class="ButtonsDiv">';
    str += '<input type="button" style="font-size: 12pt; height: 27px;" class="buttonsOn" name="'+btnName+'" id="btn_change_password" title="Submit" value="'+btnName+'" onclick=' + fnName + '>';
    str += '</div>'
    return str;
}

function TopButtons(btnStrAry)
{
  var str = '';

  if (!IsUndefOrNull(btnStrAry))
  {
    for (var i = btnStrAry.length - 1; i >= 0; i--)
      str += btnStrAry[i];
  }

  PaintButtons(str);
}

function EnableTopButton(btnName)
{
  var btnId = 'btn_'+btnName;
  var className = _top.$('#'+btnId).attr('class');

  _top.$('#' + btnId).attr('class', 'buttonsOn');
}
function DisableTopButton(btnName)
{
  var btnId = 'btn_'+btnName;
  var className = _top.$('#'+btnId).attr('class');

  _top.$('#' + btnId).attr('class', 'buttonsOff');
}
function AllInputUpdateTopButtons()
{
  $('input[type=radio]').each(function(idx){
    $(this).click(UpdateTopButtons);
  });
  $('input[type=checkbox]').each(function(idx){
    $(this).click(UpdateTopButtons);
  });
  $('input[type=text]').each(function(idx){
    $(this).mousedown(UpdateTopButtons);
  });
  $('input[type=password]').each(function(idx){
    $(this).mousedown(UpdateTopButtons);
  });
  $('select').each(function(idx){
    $(this).change(UpdateTopButtons);
  });
}

var btnNameAry = ['Cancel', 'Apply', 'Add', 'Remove', 'Delete', 'reauthenticate', 'initialize'];
function EnableAllTopButtons()
{
  for (var i = 0; i < btnNameAry.length; i++)
  {
    if (_top.$('#btn_'+btnNameAry[i]).length > 0)
      EnableTopButton(btnNameAry[i]);
  }
}

function DisableAllTopButtons()
{
  for (var i = 0; i < btnNameAry.length; i++)
  {
    if (_top.$('#btn_'+btnNameAry[i]).length > 0)
      DisableTopButton(btnNameAry[i]);
  }
}

var currButtonsType = '';
var currNeedUpdateButtons = [];
function UpdateTopButtons(action)
{
  if (currButtonsType == 'entry' || currButtonsType == 'global_entry')
  {
    var len = 0;
    var hasGlobal = (currButtonsType == 'global_entry');
    $('.dataTable.entry').find('tbody').find('tr').each(function(idx){
      $(this).find('td').each(function(i){
        if ((0 == i) && HasWord($(this).attr('class'), "selectedRow"))
        {
          len++;
        }
      });
    });
    if ('refresh' == action)
    {
      if (0 == len)
      {
        DisableTopButton('Add');
        DisableTopButton('Delete');
        EnableTopButton('Cancel');
        DisableTopButton('Apply');
      }
      else if (len > 0)
      {
        DisableTopButton('Add');
        EnableTopButton('Delete');
        EnableTopButton('Cancel');
        DisableTopButton('Apply');
      }
    }
    else
    {
      if (0 == len)
      {
        EnableTopButton('Add');
        DisableTopButton('Delete');
        DisableTopButton('Cancel');
        DisableTopButton('Apply');
      }
      else
      {
        DisableTopButton('Add');
        EnableTopButton('Delete');
        EnableTopButton('Cancel');
        EnableTopButton('Apply');
      }
    }

    if (hasGlobal)
    {
      EnableTopButton('Apply');
    }
  }
  else if (currButtonsType == 'portsel'  || currButtonsType == 'global_portsel')
  {
    var len = 0;
    var hasGlobal = (currButtonsType == 'global_portsel');
    $('.dataTable.portsel').find('tbody').find('tr').each(function(idx){
      $(this).find('td').each(function(i){
        if ((0 == i) && HasWord($(this).attr('class'), "selectedRow"))
        {
          len++;
        }
      });
    });

    EnableTopButton('Cancel');

    if (hasGlobal)
    {
      EnableTopButton('Apply');
    }
    else
    {
      if (0 == len)
      {
        DisableTopButton('Apply');

        for (var i = 0; i < currNeedUpdateButtons.length; i++)
        {
          DisableTopButton(currNeedUpdateButtons[i]);
        }
      }
      else
      {
        EnableTopButton('Apply');

        for (var i = 0; i < currNeedUpdateButtons.length; i++)
        {
          EnableTopButton(currNeedUpdateButtons[i]);
        }
      }
    }
  }
  else
  {
    EnableAllTopButtons();
  }
}

/*******************************
 * Input Text
 *******************************/
function _InputText(name, val, opt, maxlen, size, isDisabled)
{
  var txt = '';

  txt += '<input type="text" autocomplete="off" name="'+name+'" id="'+name+'"';
  if (!IsUndefOrNull(val))
    txt += ' value="' +val+'"';
  if (!IsUndefOrNull(opt) && opt != 'normal')
    txt += ' ' + opt;
  if (!IsUndefOrNull(maxlen)) {
    txt += ' maxlength="'+maxlen+'"'
  } else {
    if ('ipv4only' == opt)
      txt += ' maxlength="15"'
    else if ('ipv6only' == opt)
      txt += ' maxlength="45"'
    else if ('maconly' == opt)
      txt += ' maxlength="17"'
    else if ('hostonly' == opt)
      txt += ' maxlength="255"'
  }

  if (!IsUndefOrNull(size)) {
    txt += ' size="'+size+'"'
  }

  if (IsUndefOrNull(isDisabled))
    txt += ' class="xuiInputTextEnabled">';
  else
    txt += ' disabled class="inputDisabled">';

  return txt;
}

function InputText(name, val, maxlen, size){return _InputText(name, val,'ascii', maxlen, size);}
function InputTextReadOnly(name, val, maxlen, size){return _InputText(name, val,'ascii', maxlen, size, true);}
function InputTextDigit(name, val, maxlen, size) {return _InputText(name,val,'digitonly', maxlen, size);}
function InputTextFloat(name, val, maxlen, size) {return _InputText(name,val,'floatonly', maxlen, size);}
function InputTextVlanList(name, val, maxlen, size) {return _InputText(name,val,'vlanlist', maxlen, size);}
function InputTextVlanListWNone(name, val, maxlen, size) {return _InputText(name,val,'vlanlistwnone', maxlen, size);}
function InputTextOid(name, val, maxlen, size) {return _InputText(name,val,'oidonly', maxlen, size);}
function InputTextHex(name, val, maxlen, size) {return _InputText(name,val,'hexonly', maxlen, size);}
function InputTextMac(name, val, maxlen, size) {return _InputText(name,val,'maconly', maxlen, size);}
function InputTextHost(name, val, maxlen, size) {return _InputText(name,val,'hostonly', maxlen, size);}
function InputTextIPv4(name, val, maxlen, size) {return _InputText(name,val,'ipv4only', maxlen, size);}
function InputTextIPv6(name, val, maxlen, size) {return _InputText(name,val,'ipv6only', maxlen, size);}
function InputHidden(name, val){return '<input type="hidden" id="'+name+'" name="'+name+'" value="'+val+'" >';}
function InputPassword(name, val, maxlen, size, display)
{
  var txt = '';

  txt += '<input type="password" class="password" autocomplete="off" name="'+name+'" id="'+name+'" style="padding-right: 25px"';

  if (!IsUndefOrNull(val))
    txt += ' value="' +val+'"';
  if (!IsUndefOrNull(maxlen))
    txt += ' maxlength="'+maxlen+'"'
  if (!IsUndefOrNull(size))
    txt += ' size="'+size+'"'
    txt += '>';
  if (!IsUndefOrNull(display))
  {
      txt += '<img id="hidePwd'+name+'" src="images/hidePwd.png" style="margin-left:-20px">'
      txt += '<img id="showPwd'+name+'" src="images/showPwd.png" style="margin-bottom: 5px; display: none; margin-left: -20px; margin-top: 5px;">'
  }
  /*show password*/
  return txt;
}

function showPassword()
{
    $('[id^=hidePwd]').click(switchPasswordType);
    $('[id^=showPwd]').click(switchPasswordType);
}

function switchPasswordType()
{
    console.log(this.id)
    var inputField = this.id.substr(7);
    var hideImg = "hidePwd" + inputField;
    var showImg = "showPwd" + inputField;

    if(0 === this.id.indexOf("hidePwd"))
    {
        $("#" + showImg).show();
        $("#" + hideImg).hide();
        $("#" + inputField).prop({type:"text"});
        console.log($("#pwdField"));
    }
    else
    {
        $("#" + showImg).hide();
        $("#" + hideImg).show();
        $("#" + inputField).prop({type:"password"});
    }
}


function inputText_digitonly(event) {
  if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || /*event.keyCode == 13 ||*/
       // Allow: Ctrl+A, Ctrl+z, Ctrl+x, Ctrl+c, Ctrl+v
      ((event.keyCode == 65 || event.keyCode == 67 || event.keyCode == 86 || event.keyCode == 88 || event.keyCode == 90) && event.ctrlKey === true) ||
       // Allow: home, end, left, right
      (event.keyCode >= 35 && event.keyCode <= 39)) {
           // let it happen, don't do anything
           return;
  }
  else {
      // Ensure that it is a number and stop the keypress
      if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
          event.preventDefault();
      }
  }
}

function inputText_floatonly(event) {
  if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || /*event.keyCode == 13 ||*/
       // Allow: Ctrl+A, Ctrl+z, Ctrl+x, Ctrl+c, Ctrl+v
      ((event.keyCode == 65 || event.keyCode == 67 || event.keyCode == 86 || event.keyCode == 88 || event.keyCode == 90) && event.ctrlKey === true) ||
       // Allow: home, end, left, right
      (event.keyCode >= 35 && event.keyCode <= 39)) {
           // let it happen, don't do anything
           return;
  }
  else {
      // Ensure that it is a number and stop the keypress
      if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105) && event.keyCode != 110 && event.keyCode != 190) {
          event.preventDefault();
      }
  }
}

function inputText_oidonly(event) {
  if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 110 || event.keyCode == 190 ||/*event.keyCode == 13 ||*/
       // Allow: Ctrl+A, Ctrl+z, Ctrl+x, Ctrl+c, Ctrl+v, '.'
      ((event.keyCode == 65 || event.keyCode == 67 || event.keyCode == 86 || event.keyCode == 88 || event.keyCode == 90) && event.ctrlKey === true) ||
       // Allow: home, end, left, right
      (event.keyCode >= 35 && event.keyCode <= 39)) {
           // let it happen, don't do anything
           return;
  }
  else {
      // Ensure that it is a number and stop the keypress
      if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
          event.preventDefault();
      }
  }
}

function inputText_timeonly(event) {
  if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || /*event.keyCode == 13 ||*/
       // Allow: Ctrl+A, Ctrl+z, Ctrl+x, Ctrl+c, Ctrl+v
      ((event.keyCode == 65 || event.keyCode == 67 || event.keyCode == 86 || event.keyCode == 88 || event.keyCode == 90) && event.ctrlKey === true) ||
       // Allow: home, end, left, right
      (event.keyCode >= 35 && event.keyCode <= 39)) {
           // let it happen, don't do anything
           return;
  }
  else {
      /* : */
      if ((event.keyCode == 186 /*&& event.shiftKey*/) || (isFF && event.keyCode == 59 /*&& event.shiftKey*/) ) {
        return;
      }

      // Ensure that it is a number and stop the keypress
      if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
          event.preventDefault();
      }
  }
}

function inputText_dateonly(event) {
  if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || /*event.keyCode == 13 ||*/
       // Allow: Ctrl+A, Ctrl+z, Ctrl+x, Ctrl+c, Ctrl+v
      ((event.keyCode == 65 || event.keyCode == 67 || event.keyCode == 86 || event.keyCode == 88 || event.keyCode == 90) && event.ctrlKey === true) ||
       // Allow: home, end, left, right
      (event.keyCode >= 35 && event.keyCode <= 39)) {
           // let it happen, don't do anything
           return;
  }
  else {
      /* - */
      if (event.keyCode == 189 || (isFF && event.keyCode == 173)) {
        return;
      }

      // Ensure that it is a number and stop the keypress
      if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
          event.preventDefault();
      }
  }
}

function inputText_hexonly(event) {
  if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || /*event.keyCode == 13 ||*/
       // Allow: Ctrl+A, Ctrl+z, Ctrl+x, Ctrl+c, Ctrl+v
      ((event.keyCode == 65 || event.keyCode == 67 || event.keyCode == 86 || event.keyCode == 88 || event.keyCode == 90)  && event.ctrlKey === true) ||
       // Allow: home, end, left, right
      (event.keyCode >= 35 && event.keyCode <= 39)) {
           // let it happen, don't do anything
           return;
  }
  else {
      /* ABCDEF */
      if ((event.keyCode >= 65 && event.keyCode <= 70) && event.shiftKey) {
        return;
      }

      // Ensure that it is a number or abcdef and stop the keypress
      if (event.shiftKey || ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 65 || event.keyCode > 70)) && (event.keyCode < 96 || event.keyCode > 105 ) && event.keyCode == 120) {
          event.preventDefault();
      }
  }
}

function inputText_maconly(event) {
  if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || /*event.keyCode == 13 ||*/
       // Allow: Ctrl+A, Ctrl+z, Ctrl+x, Ctrl+c, Ctrl+v
      ((event.keyCode == 65 || event.keyCode == 67 || event.keyCode == 86 || event.keyCode == 88 || event.keyCode == 90)  && event.ctrlKey === true) ||
       // Allow: home, end, left, right
      (event.keyCode >= 35 && event.keyCode <= 39)) {
           // let it happen, don't do anything
           return;
  }
  else {
      /* : */
      if ((event.keyCode == 186 /*&& event.shiftKey*/) || (event.keyCode == 190 && event.shiftKey)
          || (isFF && event.keyCode == 59 /*&& event.shiftKey*/)) {
        return;
      }

      /* ABCDEF */
      if ((event.keyCode >= 65 && event.keyCode <= 70) && event.shiftKey) {
        return;
      }

      // Ensure that it is a number or abcdef and stop the keypress
      if (event.shiftKey || ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 65 || event.keyCode > 70)) && (event.keyCode < 96 || event.keyCode > 105 )) {
          event.preventDefault();
      }
  }
}

function inputText_ipv4only(event) {
  if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || /*event.keyCode == 13 ||*/
       // Allow: Ctrl+A, Ctrl+z, Ctrl+x, Ctrl+c, Ctrl+v
      ((event.keyCode == 65 || event.keyCode == 67 || event.keyCode == 86 || event.keyCode == 88 || event.keyCode == 90)  && event.ctrlKey === true) ||
       // Allow: home, end, left, right
      (event.keyCode >= 35 && event.keyCode <= 39)) {
           // let it happen, don't do anything
           return;
  }
  else {
      /* . */
      if (event.keyCode == 110 || event.keyCode == 190) {
        return;
      }
      // Ensure that it is a number and stop the keypress
      if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
          event.preventDefault();
      }
  }
}

function inputText_ipv6only(event) {
  if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || /*event.keyCode == 13 ||*/
       // Allow: Ctrl+A, Ctrl+z, Ctrl+x, Ctrl+c, Ctrl+v
      ((event.keyCode == 65 || event.keyCode == 67 || event.keyCode == 86 || event.keyCode == 88 || event.keyCode == 90)  && event.ctrlKey === true) ||
       // Allow: home, end, left, right
      (event.keyCode >= 35 && event.keyCode <= 39)) {
           // let it happen, don't do anything
           return;
  }
  else {
      /* . */
      if (event.keyCode == 110 || event.keyCode == 190) {
        return;
      }
      /* : */
      if ((event.keyCode == 186 /*&& event.shiftKey*/) || (isFF && event.keyCode == 59 /*&& event.shiftKey*/) ) {
        return;
      }
      // Ensure that it is a number or abcdef and stop the keypress
      if ((event.shiftKey || event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 65 || event.keyCode > 70) && (event.keyCode < 96 || event.keyCode > 105 )) {
          event.preventDefault();
      }
  }
}

function inputText_hostonly(event) {
  if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || /*event.keyCode == 13 ||*/
       // Allow: Ctrl+A
      (event.keyCode == 65 && event.ctrlKey === true) ||
       // Allow: home, end, left, right
      (event.keyCode >= 35 && event.keyCode <= 39)) {
           // let it happen, don't do anything
           return;
  }
  else {
    /* 0-9 */
    if (((event.keyCode >= 48 && event.keyCode <=57) && !event.shiftKey) || (event.keyCode >= 96 && event.keyCode <=105)) {
      return;
    }
    /* a-zA-Z */
    if (event.keyCode >= 65 && event.keyCode <=90) {
      return;
    }
    /* - */
    if (event.keyCode == 189 || event.keyCode == 109 || (isFF && event.keyCode == 173)) {
      return;
    }
    /* . */
    if (event.keyCode == 110 || event.keyCode == 190) {
      return;
    }
    event.preventDefault();
  }
}

function inputText_common(event) {
  if ( event.keyCode != 13 ) {
    return;
  }
  else {
    event.preventDefault();
  }
}

function inputText_vlanlist(event) {
  if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || /*event.keyCode == 13 ||*/
       // Allow: Ctrl+A, Ctrl+z, Ctrl+x, Ctrl+c, Ctrl+v
      ((event.keyCode == 65 || event.keyCode == 67 || event.keyCode == 86 || event.keyCode == 88 || event.keyCode == 90) && event.ctrlKey === true) ||
       // Allow: home, end, left, right
      (event.keyCode >= 35 && event.keyCode <= 39)) {
           // let it happen, don't do anything
           return;
  }
  else {
      // Ensure that it is a number and stop the keypress
      if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57)  && (event.keyCode < 96 || event.keyCode > 105 ) && event.keyCode != 109 && event.keyCode != 188 && event.keyCode != 189) {
          event.preventDefault();
      }
  }
}

function inputText_vlanlistwnone(event) {
  if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || /*event.keyCode == 13 ||*/
       // Allow: Ctrl+A, Ctrl+z, Ctrl+x, Ctrl+c, Ctrl+v
      ((event.keyCode == 65 || event.keyCode == 67 || event.keyCode == 86 || event.keyCode == 88 || event.keyCode == 90) && event.ctrlKey === true) ||
       // Allow: home, end, left, right
      (event.keyCode >= 35 && event.keyCode <= 39)) {
           // let it happen, don't do anything
           return;
  }
  else {
      // Ensure that it is a number and stop the keypress
      if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57)  && (event.keyCode < 96 || event.keyCode > 105 ) && event.keyCode != 109 && event.keyCode != 188 && event.keyCode != 189)
      {
          if (event.keyCode != 78 && event.keyCode !=79 && event.keyCode !=69) //n o e
            event.preventDefault();
      }
  }
}

function EnableInputText(id)
{
  $('#'+id)[0].disabled = false;
  $('#'+id)[0].className = "xuiInputTextEnabled";
}

function DisableInputText(id)
{
  $('#'+id)[0].disabled = true;
  $('#'+id)[0].className = "xuiInputTextDisabled";
}

function GetInputTextVal(id)
{
  var val = $('#'+id).val();
  return val;
}

/*******************************
 * Input Radio
 *******************************/
function EnableRadio(name, val)
{
  $('[name='+name+']').each(function(idx)
  {
    var _id = $(this).prop('name') + '_'+$(this).val();
    if(IsUndefOrNull(val))
    {
      $(this).prop('disabled', false);
      $('#'+_id+'_label').prop('className', '');
    }
    else
    {
      var id = name+'_'+val;
      if ($(this).val() == val) {
        $(this).prop('disabled', false);
        $('#'+id+'_label').prop('className', '');
      }
    }
  });
}

function DisableRadio(name, val)
{
  $('[name='+name+']').each(function(idx)
  {
    var _id = $(this).prop('name') + '_'+ $(this).val();
    if(IsUndefOrNull(val))
    {
      $(this).prop('disabled', true);
      $('#'+_id+'_label').prop('className', 'disabled');
    }
    else
    {
      var id = name+'_'+val;
      if ($(this).val() == val)
      {
        $(this).prop('disabled', true);
        $('#'+id+'_label').prop('className', 'disabled');
      }
    }
  });
}

function SelectRadio(name, val)
{
  $('[name='+name+']').each(function(idx)
  {
    var id = name+'_'+val;
    if ($(this).val() == val)
    {
      $(this).prop('checked', true);
    }
    else
    {
      $(this).prop('checked', false);
    }
  });
}

function IsChecked(id)
{
  return $('#'+id).prop('checked');
}

function Radio(name, value, txt, checked)
{
  var str = '';
  var id = name + '_' + value;
  str += '<input type="radio" name="'+name+'" id="'+id+'" value="'+value+'"';
  if (!IsUndefOrNull(checked) && checked)
    str += 'checked';
  str += '>';
  if (!IsUndefOrNull(txt))
    str += '<label for="'+id+'" name="'+name+'_label" id="'+id+'_label">&nbsp;'+txt+'&nbsp;</label>';
  return str;
}

function RadioGroup(name, currSelVal)
{
  var txtRadioGroup ='';
  var spaceClass1='';
  var spaceClass2='';
  var i = 2;
  var id;

  //txtRadioGroup += '<table><tr>'
  while(!IsUndefOrNull(arguments[i]))
  {
    /*if(2 == i)
    {
      spaceClass1 = '';
      spaceClass2 = 'class="right"';
    }
    else
    {
      //spaceClass1 = 'class="radioSpacing"';
      spaceClass2 = 'class="radioSpacing right"';
    }*/
    id = name+'_'+arguments[i][0];

    //txtRadioGroup += '<td '+spaceClass1+'><input type="radio" name="'+name+'" id="' + id + '" value="'+arguments[i][0]+'"'
    txtRadioGroup += '<input type="radio" name="'+name+'" id="' + id + '" value="'+arguments[i][0]+'"'
    if (!IsUndefOrNull(currSelVal) && currSelVal == arguments[i][0])
      txtRadioGroup += ' checked';
    if (!IsUndefOrNull(arguments[i][2]) && true == arguments[i][2])
      txtRadioGroup += ' disabled';
    //txtRadioGroup += '></td>';
    txtRadioGroup += '>';
    //txtRadioGroup += '<td '+spaceClass2+'><label for="' + id + '" name="'+name+'_label" id="'+ id +'_label"';
    txtRadioGroup += '<label for="' + id + '" name="'+name+'_label" id="'+ id +'_label"';
    if (!IsUndefOrNull(arguments[i][2]) && true == arguments[i][2])
      txtRadioGroup += 'class="disabled"';
    //txtRadioGroup +='>'+arguments[i][1]+'</label></td>';
    txtRadioGroup +='>&nbsp;'+arguments[i][1]+'&nbsp;</label>';
    //txtRadioGroup += '<td class="right"></td>';
    i++;
  }
  //txtRadioGroup += '</tr></table>';

  return txtRadioGroup;
}

function RadioGroupState(name, currSelVal)
{
  return RadioGroup(name, currSelVal, [0, lang('common','txtDisable')], [1, lang('common','txtEnable')]);
}

function GetRadioVal(rdoName)
{
  var val;
  $('[name='+rdoName+']').each(function(idx){
    if(true == $(this).prop('checked'))
    {
      val = $(this).val();
      return val;
    }
  });
  return val;
}

/*******************************
 * Port / Entry Table
 *******************************/
function TableCheckbox(val, id)
{
  var idd;
  if (IsUndefOrNull(id))
    idd = val;
  else
    idd = id;

  var txt = '<input type="checkbox" name="selEntry" id="selEntry_'+idd+'" value="'+val+'" onclick="ClickTableCheckbox(this);"></input>'
  return txt;
}

function TableCheckboxAll()
{
  var txt = '<input type="checkbox" name="selAll" id="selAll" onclick="ClickTableCheckboxAll(this);">';
  return txt;
}

function ClickTableCheckbox(chkbox)
{
  var isChecked = $(chkbox).prop('checked');
  $(chkbox).parent().parent().find('td').each(function(i){
    if (isChecked)
      $(this).addClass('selectedRow');
    else
      $(this).removeClass('selectedRow');
  });
  RefreshTableSelHdr($(chkbox).parent().parent().parent().parent());
}

function ClickTableCheckboxAll(chkbox)
{
  var isChecked = $(chkbox).prop('checked');
  $(chkbox).parent().parent().parent().parent().find('tbody').find('tr').each(function(idx){
    var isDisabled = false;
    $(this).find('td').each(function(i){
      if (i == 0)
        isDisabled = $(this).find('input').prop('disabled')

      if (true == isDisabled)
        return;

      if (isChecked)
      {
        $(this).addClass('selectedRow');
        if (i == 0)
          $(this).find('input').prop('checked', true);
      }
      else
      {
        $(this).removeClass('selectedRow');
        if (i == 0)
          $(this).find('input').prop('checked', false);
      }
    });
  });
  RefreshTableSelHdr($(chkbox).parent().parent().parent().parent());
}

function RefreshPortType(portType)
{
  var resp = {};
  currPortType=portType;
  resp["data"] = data;
  mainFrame.$el.html( mainFrame.template(resp));
  PagePostInit();
}

function IsPortSkip(portType, idx)
{
  if (portType == 'port' && idx >= _top.devPortNum)
    return true;
  else if (portType == 'lag' && idx < _top.devPortNum)
    return true;

  return false;
}

function IsCPUPortSkip(portType, idx)
{
  if (portType == 'port' && idx >= _top.devPortNum)
    return true;
  else if (portType == 'lag' && (idx < _top.devPortNum || idx == (_top.devPortNum + _top.devLagNum)))
    return true;
  else if (portType == 'cpu' && idx < (_top.devPortNum + _top.devLagNum))
    return true;

  return false;
}

function IsVlanPortSkip(portType, idx)
{
  if (portType == 'port' && idx >= _top.devPortNum)
    return true;
  else if (portType == 'lag' && (idx < _top.devPortNum || idx >= (_top.devPortNum + _top.devLagNum)))
    return true;
  else if (portType == 'vlan' && idx < (_top.devPortNum + _top.devLagNum))
    return true;

  return false;
}

var tblDataAry;
function RefreshTableSelHdr(_dataTableObj)
{
  var len = 0;
  var totalRow = 0;
  var hdrTitleObj;
  var hdrObj;
  var selObj;
  var selIdx;
  var selVal;
  var dataTableObj = IsUndefOrNull(_dataTableObj) ? $('.dataTable') : _dataTableObj;
  var isTypeEntry = HasWord($(dataTableObj).attr('class'), "entry");
  var isTypePortsel = HasWord($(dataTableObj).attr('class'), "portsel");
  var isStatus = HasWord($(dataTableObj).attr('class'), "status");
  $(dataTableObj).find('thead').find('tr').each(function(idx){
    if (0 == idx)
      hdrTitleObj = this;
    if (1 == idx)
      hdrObj = this;
  });
  $(dataTableObj).find('tbody').find('tr').each(function(idx){
    var that = this;
    totalRow++;
    $(this).find('td').each(function(i){
      if ((0 == i) && HasWord($(this).attr('class'), "selectedRow"))
      {
        len++;
        selObj = that;
        selIdx = idx;
      }
      if ((0 == i) && (true == $(this).find('input').prop('disabled')))
      {
        len++;
      }
    });
  });

  if (isTypePortsel)
  {
    if (currPortType == 'lag')
      selIdx = selIdx + _top.devPortNum;
    if (currPortType == 'cpu')
      selIdx = _top.devPortNum + _top.devLagNum
  }

  $(hdrTitleObj).find('#selAll').each(function(){
    if (len > 0 && len == totalRow)
      $(this).prop('checked', true);
    else
      $(this).prop('checked', false);
  });

  if (len != 1)
  {
    $(hdrObj).find('td').each(function(idx){
      var needDisable = false;
      var needEnable = false;
      if (isTypeEntry || isTypePortsel)
      {
        var act = $(this).attr('act');
        if (!IsUndefOrNull(act))
        {
          if (act == "editone" && len > 1)
            needDisable = true;
          else if (act == "editnone" && len > 0)
            needDisable = true;
          if (len == 0)
            needEnable = true;
        }
      }
      if ($(this).find('input[type=text]').length != 0)
      {
        $(this).find('input[type=text]').each(function(){
          $(this).val('');
          if (needDisable)
            DisableInputText($(this).prop('id'));
          else if (needEnable)
            EnableInputText($(this).prop('id'));
        });
      }
      else if ($(this).find('input[type=password]').length != 0)
      {
        $(this).find('input[type=password]').each(function(){
          $(this).val('');
          if (needDisable)
            DisableInputText($(this).prop('id'));
          else if (needEnable)
            EnableInputText($(this).prop('id'));
        });
      }
      else if ($(this).find('select').length != 0)
      {
        $(this).find('select').each(function(){
          $(this).val(-1);
          if (needDisable)
            DisableSelect($(this).prop('id'));
          else if (needEnable)
            EnableSelect($(this).prop('id'));
        });
      }
      else
      {
        if (!isStatus)
          $(this).html('');
      }
    });
  }
  else
  {
    $(hdrObj).find('td').each(function(idx){
      var needEnable = isTypeEntry;
      var needDisable = false;

      if (isTypeEntry || isTypePortsel)
      {
        var act = $(this).attr('act');
        if (!IsUndefOrNull(act) && act == "editnone")
            needDisable = true;
      }
      else
      {
        needEnable = true;
      }

      if (idx == 0)
      {
      }
      else if ($(this).find('input[type=text]').length != 0)
      {
        var strInputVal = 'tblDataAry['+selIdx+'].'+$(this).find('input[type=text]').attr('name');
        selVal = str2var(strInputVal);
        $(this).find('input[type=text]').each(function(){
          $(this).val(selVal);
          if (needDisable)
            DisableInputText($(this).prop('id'));
          else if (needEnable)
            EnableInputText($(this).prop('id'));

        });
      }
      else if ($(this).find('input[type=password]').length != 0)
      {
        var strInputVal = 'tblDataAry['+selIdx+'].'+$(this).find('input[type=password]').attr('name');
        selVal = str2var(strInputVal);
        $(this).find('input[type=password]').each(function(){
          $(this).val(selVal);
          if (needDisable)
            DisableInputText($(this).prop('id'));
          else if (needEnable)
            EnableInputText($(this).prop('id'));

        });
      }
      else if ($(this).find('select').length != 0)
      {
        var strInputVal = 'tblDataAry['+selIdx+'].'+$(this).find('select').attr('name');
        selVal = show(str2var(strInputVal));
        $(this).find('select').each(function(){
          $(this).val(selVal);
          if (needDisable)
            DisableSelect($(this).prop('id'));
          else if (needEnable)
            EnableSelect($(this).prop('id'));
        });
      }
      else
      {
        if (!isStatus)
        {
          selVal = $(selObj).find('td:eq('+idx+')').html();
          $(this).html(selVal);
        }
      }
    });
  }

  UpdateTopButtons('refresh');
}

function TableSelNum(_id)
{
  var num = 0;

  var dataTableObj = IsUndefOrNull(_id) ? $('.dataTable') : $('#'+_id);

  $(dataTableObj).find('tbody').find('tr').each(function(idx){
    var that = this;
    $(this).find('td').each(function(i){
      if ((0 == i) && HasWord($(this).attr('class'), "selectedRow"))
      {
        num++;
      }
    });
  });

  return num;
}

/*******************************
 * Select
 *******************************/
function Select(name, currSelVal, entries, size)
{
  var str ='';
  var optSpace='';
  var i = 2;
  var j = 0;

  if (is_ie9())
      str += '<div class="ie9">';

  if (!IsUndefOrNull(size))
    str += '<select class="xuiSelectEnabled" name="'+name+'" id="'+name+'" style="width:"'+size+'">';
  else
    str += '<select class="xuiSelectEnabled" name="'+name+'" id="'+name+'">';

  for (var i = 0; i < entries.length; i++)
  {
    if (!IsUndefOrNull(entries[i][1]))
      j = 1;

    str += '<option value="'+entries[i][j]+'" '+((entries[i][j]==currSelVal)?"selected":"")+'>'+entries[i][0]+optSpace+'</option>';
  }
  str += '</select>';

  if (is_ie9())
      str += '</div>';

  return str;
}
function GetSelectName(currVal, entries)
{
  var j = (IsUndefOrNull(entries[0][1])) ? 0 : 1;

  for (var i = 0; i < entries.length; i++)
  {
    if (entries[i][j] == currVal)
      return entries[i][0];
  }
  return '';
}
function GetSelectVal(selId)
{
  var val;
  $('#'+selId).children('option').each(function(idx){
    if(true == $(this).prop('selected'))
    {
      val = $(this).val();
      return val;
    }
  });
  return val;
}
function EnableSelect(id)
{
  $('#'+id)[0].disabled = false;
  $('#'+id)[0].className = "xuiSelectEnabled";
}

function DisableSelect(id)
{
  $('#'+id)[0].disabled = true;
  $('#'+id)[0].className = "xuiSelectDisabled";
}

function SelectAryToEntries(ary, addEmpty, prefix)
{
  var entries = [];

  if (addEmpty)
  {
    var entry = [];
    entry.push("");
    entry.push(-1);
    entries.push(entry);
  }

  if (IsUndefOrNull(ary))
    return entries;

  for (var i = 0; i < ary.length; i++)
  {
    var entry = [];
    if (!IsUndefOrNull(prefix))
      entry.push(prefix+ary[i]);
    else
      entry.push(ary[i]);
    entry.push(ary[i]);
    entries.push(entry);
  }
  return entries;
}

function SelectAryToEntriesAdd(ary)
{
  var entries = [];
  var entry0 = [];
  entry0.push(lang('common','txtNewEntry'));
  entry0.push(0);
  entries.push(entry0);

  for (var i = 1; i < ary.length; i++)
  {
    var entry = [];
    entry.push(ary[i]);
    entry.push(ary[i]);
    entries.push(entry);
  }
  return entries;
}

function SelectAryMirrorEntriesAdd(ary)
{
  var entries = [];
  var entry0 = [];
  entry0.push(lang('common', 'txtNone'));
  entry0.push(0);
  entries.push(entry0);

  if (IsUndefOrNull(ary))
    return entries;

  for (var i = 0; i < ary.length; i++)
  {
    var entry = [];

    entry.push(ary[i]);
    entry.push(ary[i]);
    entries.push(entry);
  }
  return entries;
}

var selEntries_State = null;
function SelectState(name, currSelVal)
{
  if (IsUndefOrNull(selEntries_State))
    selEntries_State = [['',-1],[lang('common','txtDisable'),0],[lang('common','txtEnable'),1]];
  return Select(name, currSelVal,selEntries_State);
}

var selEntries_Bool = null;
function SelectBool(name, currSelVal)
{
  if (IsUndefOrNull(selEntries_Bool))
    selEntries_Bool = [['',-1],[lang('common','txtFalse'),0],[lang('common','txtTrue'),1]];
  return Select(name, currSelVal,selEntries_Bool);
}

var selEntries_AddrType = null;
function SelectAddrType(name, currSelVal)
{
  if (IsUndefOrNull(selEntries_AddrType))
    selEntries_AddrType = [['',-1],[lang('common','txtAddrIpv4'),0],[lang('common','txtAddrIpv6'),1],[lang('common','txtAddrDNS'),1]];
  return Select(name, currSelVal,selEntries_AddrType);
}

var selEntries_Lag = null;
function SelectLag(name, currSelVal)
{
  if (IsUndefOrNull(selEntries_Lag))
  {
    selEntries_Lag = [];
    for (var i = 0; i < _top.devLagNum; i++)
    {
      var entry = [];

      entry.push(_top.data.lags[i].lagFullName);
      entry.push(i);
      selEntries_Lag.push(entry);
    }
  }
  return Select(name, currSelVal,selEntries_Lag);
}

var selEntries_timeoutType = null;
function SelectTimeoutType(name, currSelVal)
{
  if (IsUndefOrNull(selEntries_timeoutType))
    selEntries_timeoutType = [['',-1],[lang('common','txtTimeoutLong'),0],[lang('common','txtTimeoutShort'),1]];
  return Select(name, currSelVal,selEntries_timeoutType);
}

var selEntries_mstId = null;
function SelectMstId(name, currSelVal)
{
  if (IsUndefOrNull(selEntries_mstId))
    selEntries_mstId = [[lang('port','txtMstIdCst'),0]];
  return Select(name, currSelVal,selEntries_mstId);
}

var selEntries_Port = null;
/*
  * portType: 0	normal port
  *			1	LAG port
  *			2	normal port + LAG port
  */
function SelectPort(portType, name, currSelVal,opt)
{
  if (IsUndefOrNull(selEntries_Port))
  {
    selEntries_Port = [];

    if(!IsUndefOrNull(opt))
    {
      var entry = [];
      entry.push("");
      entry.push(-1);
      selEntries_Port.push(entry);
    }

  	if(portType == 0)
  	{
  	    for (var i = 0; i < _top.devPortNum; i++)
  	    {
  	      var entry = [];

  	      entry.push(_top.data.ports[i].port);
  	      entry.push(i);
  	      selEntries_Port.push(entry);
  	    }
  	}
  	else if(portType == 1)
  	{
  	    for (var i = 0; i < _top.devLagNum; i++)
  	    {
  	      var entry = [];

  	      entry.push(_top.data.lags[i].lag);
  	      entry.push(i);
  	      selEntries_Port.push(entry);
  	    }
  	}
  	else
  	{
  	    for (var i = 0; i < _top.devPortNum; i++)
  	    {
  	      var entry = [];
  	      entry.push(_top.data.ports[i].port);
  	      entry.push(i);
  	      selEntries_Port.push(entry);
  	    }

  	    for (var i = 0; i < _top.devLagNum; i++)
  	    {
  	      var entry = [];
  	      entry.push(_top.data.lags[i].lag);
  	      entry.push(_top.devPortNum + i);
  	      selEntries_Port.push(entry);
  	    }
	   }
  }
  return Select(name, currSelVal,selEntries_Port);
}

/*******************************
 * Confirm
 *******************************/
function Confirm(funName, msg)
{
  xui_confirm(funName+'||'+msg);
}

function ConfirmCustom(funOkName, funcCancelName, width, height, msg, options)
{
    /* Don't show message if options.name is defined in hidePopupName */
    if (!IsUndefOrNull(top.hidePopupName) && top.hidePopupName.indexOf(options.hideName) >= 0)
        return;
    
  addConfirmDiv(height);
  var $confirmDialog = top.$("#confirmDialog");
  var func = "window['maincontent']['"+funOkName+"']()";
  var func_cancel = "window['maincontent']['"+funcCancelName+"']()";
  top.$("#confirmDialogMsg").html(msg);
  $confirmDialog.dialog(
  {
    autoOpen: true,
    height: height,
    width: width,
    resizable: false,
    modal: true,
    close: function(event, ui)
    {
        if (!IsUndefOrNull(funcCancelName))
            top.window['maincontent'][funcCancelName]();
        deleteConfirmDiv();
    }
  });
  if (!IsUndefOrNull(funcCancelName))
    top.$('a.cnlButton').html('<div class="ButtonsDiv">'+CreateEditblBtns(lang('common','btnCancel'), func_cancel+';deleteConfirmDiv();', 'confirm_Cancel', undefined, 'on')+'</div>');
  else
    top.$('a.cnlButton').html('<div class="ButtonsDiv">'+CreateEditblBtns(lang('common','btnCancel'), 'deleteConfirmDiv();', 'confirm_Cancel', undefined, 'on')+'</div>');
  top.$('a.msgButton').html('<div class="ButtonsDiv">'+CreateEditblBtns(lang('common','btnOK'), func+';deleteConfirmDiv();', 'confirm_OK', undefined, 'on')+'</div>');
  
  if (!IsUndefOrNull(options.hideName))
      top.$('#hideConfirm').html("<input type='checkbox' id='hideConfirmName' name='hidePopupName' value='" + options.hideName + "'>" + lang('sso', 'txtSsoDontShowMessageAgain'));
}

/*******************************
 * Link
 *******************************/
function PopupWindow(url, width, height)
{
  var _url = urlParamHash(url);
  newWindow(_url, "popup", width, height);
}

function PopupWindowLink(txt, url, width, height)
{
  var str = '';

  str += '<a href=# onclick="PopupWindow(\''+url+'\','+width+','+height+');">';
  str += txt;
  str += '</a>';

  return str;
}

function _RefreshMainFrame(url, addHash)
{
  var _url = addHash ? urlParamHash(url) : url;
  _top.document.getElementById("maincontent").contentWindow.location.replace(_url);
}

function RefreshMainFrame(url)
{
  _RefreshMainFrame(url, true);
}

function MainFrameLink(txt, url)
{
  var str = '';
  var _url = urlParamHash(url);
  str += '<a href=# onclick="_RefreshMainFrame(\''+_url+'\', false);">'+txt+'</a>';
  return str;
}

/*******************************
 * Panel
 *******************************/
var panel_imgsrchdr_vlan = ['switch_blank_','switch_untagged_','switch_tagged_'];
var panel_imgsrchdr_chk = ['switch_blank_','switch_checked_'];
function Panel(name, datas, incLag, isVlan)
{
  var str = '';
  var portBlockId = 'port_'+name;
  var lagBlockId = 'lag_'+name;
  var _incLag = (!IsUndefOrNull(incLag) && incLag) ? true : false;
  var _isVlan = (!IsUndefOrNull(isVlan) && isVlan) ? true : false;
  var imgsrcAry = (_isVlan) ? panel_imgsrchdr_vlan : panel_imgsrchdr_chk;
  var url;

  str += '<table>';

  /* Port Title */
  str += '<tr><td colspan="4" class="pointer">';
  str += '<table class="tableStyle"><tr>';
  str += '<td class="paddingPortSelect"> <a href="#"> <img class="padding2TopBottom" onclick="port_image_onmouseclick_all(this);PanelUpdate(this);UpdateTopButtons();" src="../images/switch_blank_inactive.png" id="img_'+portBlockId+'"/></a></td>';
  str += '<td class="padding5Left minWidth40px paddingPortSelect" id="'+portBlockId+'_slide"><a class="defaultFontPortSelection noDecor verticalAlignTop" href="javascript:void(0)" onClick="toggleLyr(\''+portBlockId+'\');chngeImg($(\'#'+portBlockId+'_slide_icon\'));">'+lang('common','txtUnit1')+'</a></td>';
  str += '<td class="pointer spacer100Percent" onClick="toggleLyr(\''+portBlockId+'\');chngeImg($(\'#'+portBlockId+'_slide_icon\'));">&nbsp;</td>';
  str += '<td class="paddingPortSelect" align="right" onClick="toggleLyr(\''+portBlockId+'\');chngeImg($(\'#'+portBlockId+'_slide_icon\'));"><a href="#"><img class="vertCentered" id="'+portBlockId+'_slide_icon" src="../images/Expand_up.gif"/></a></td>';
  str += '</tr><tr><td colspan="4"><div class="portSelectionUnderline"></div></td></tr></table>';
  str += '<tr id="'+portBlockId+'"><td colspan="4" class="paddingPortSelect"><table class="tableStyle tableWidthAuto">';

  str += '<tr class="fontTableTitle">';
  str += '<td class="intStyle">Ports</td>';
  for (var i = 0; i < _top.devPortNum; i++)
  {
    var imgsrc = '../images/'+imgsrcAry[datas[i].state]+'inactive.png';

    if (i % 2 == 0)
    {
      str += '<td class="panelSp"></td>';
      str += '<td><div class="titleUp">'+(i+1)+'</div><div class="panel"><a href="javascript:void(0)""><img class="panPad" src="'+imgsrc+'" name="imx" onclick="onClick(this);PanelUpdate(this);UpdateTopButtons();"/></a></div>';
      str += InputHidden(name+'_'+i,datas[i].state);
      str += '</td>';
    }
  }
  str += '</tr>';
  str += '<tr class="separator1"></tr>';
  str += '<tr class="fontTableTitle">';
  str += '<td></td>';
  for (var i = 0; i < _top.devPortNum; i++)
  {
    var imgsrc = '../images/'+imgsrcAry[datas[i].state]+'bottom_inactive.png';

    if (i % 2 == 1)
    {
      str += '<td class="panelSp"></td>';
      str += '<td><div class="panel"><a href="javascript:void(0)""><img class="panPad" src="'+imgsrc+'" name="imx" onclick="onClick(this);PanelUpdate(this);UpdateTopButtons();"/></a></div><div class="titleDn">'+(i+1)+'</div>';
      str += InputHidden(name+'_'+i,datas[i].state);
      str += '</td>';
    }
  }
  str += '</tr>';
  str += '</table></td></tr>';

  if (_incLag)
  {
    str += '<tr><td colspan="4" class="pointer">';
    str += '<table class="tableStyle"><tr>';
    str += '<td class="paddingPortSelect"> <a href="#"> <img class="padding2TopBottom" onclick="port_image_onmouseclick_all(this);PanelUpdate(this);UpdateTopButtons();" src="../images/switch_blank_inactive.png" id="img_'+lagBlockId+'"/></a></td>';
    str += '<td class="padding5Left minWidth40px paddingPortSelect" id="'+lagBlockId+'_slide"><a class="defaultFontPortSelection noDecor verticalAlignTop" href="javascript:void(0)" onClick="toggleLyr(\''+lagBlockId+'\');chngeImg($(\'#'+lagBlockId+'_slide_icon\'));">'+lang('common','txtLAG')+'</a></td>';
    str += '<td class="pointer spacer100Percent" onClick="toggleLyr(\''+lagBlockId+'\');chngeImg($(\'#'+lagBlockId+'_slide_icon\'));">&nbsp;</td>';
    str += '<td class="paddingPortSelect" align="right" onClick="toggleLyr(\''+lagBlockId+'\');chngeImg($(\'#'+lagBlockId+'_slide_icon\'));"><a href="#"><img class="vertCentered" id="'+lagBlockId+'_slide_icon" src="../images/Expand_up.gif"/></a></td>';
    str += '</tr><tr><td colspan="4"><div class="portSelectionUnderline"></div></td></tr></table>';
    str += '<tr id="'+lagBlockId+'"><td colspan="4" class="paddingPortSelect"><table class="tableStyle tableWidthAuto">';

    str += '<tr class="fontTableTitle">';
    str += '<td class="intStyle">LAG</td>';
    for (var i = 0; i < _top.devLagNum; i++)
    {
      var portIdx = _top.devPortNum + i;
      var imgsrc = '../images/'+imgsrcAry[datas[portIdx].state]+'inactive.png';
      if (i % 2 == 0)
      {
        url = urlParamHash("switch_lag_mbr.html?lagId=" + i + "&aj4="+fileVerGet());
        str += '<td class="panelSp"></td>';
        str += '<td><div class="titleUp"><a class="lagPort" href="'+ url + '">'+(i+1)+'</a></div><div class="panel"><a href="javascript:void(0)""><img class="panPad" src="'+imgsrc+'" name="imx" onclick="onClick(this);PanelUpdate(this);UpdateTopButtons();"/></a></div>';
        str += InputHidden(name+'Lag_'+portIdx,datas[portIdx].state);
        str += '</td>';
      }
    }
    str += '</tr>';
    str += '<tr class="separator1"></tr>';
    str += '<tr class="fontTableTitle">';
    str += '<td></td>';
    for (var i = 0; i < _top.devLagNum; i++)
    {
      var portIdx = _top.devPortNum + i;
      var imgsrc = '../images/'+imgsrcAry[datas[portIdx].state]+'bottom_inactive.png';
      if (i % 2 == 1)
      {
        url = urlParamHash("switch_lag_mbr.html?lagId=" + i + "&aj4="+fileVerGet());
        str += '<td class="panelSp"></td>';
        str += '<td><div class="panel"><a href="javascript:void(0)""><img class="panPad" src="'+imgsrc+'" name="imx" onclick="onClick(this);PanelUpdate(this);UpdateTopButtons();"/></a></div><div class="titleDn"><a class="lagPort" href="'+ url + '">'+(i+1)+'</a></div>';
        str += InputHidden(name+'Lag_'+portIdx,datas[portIdx].state);
        str += '</td>';
      }
    }
    str += '</tr>';
    str += '</table></td></tr>';
  }

  //str += '</table></td></tr>';
  //str += '</td></tr>';

  //str += '</table>';

  return str;
}

function PanelInit(isVlan)
{
  if (!IsUndefOrNull(isVlan) && isVlan)
  {
    $(".panel a img").attr({
      onmouseout: "mouseOutVlan(this);",
      onmouseover: "mouseOverVlan(this);"
    });
    $(".paddingPortSelect a .padding2TopBottom").attr({
      onmouseout: "mouseOutVlan(this);",
      onmouseover: "mouseOverVlan(this);"
    });
  }
  else
  {
    $(".panel a img").attr({
      onmouseout: "mouseOut(this);",
      onmouseover: "mouseOver(this);"
    });
    $(".paddingPortSelect a .padding2TopBottom").attr({
      onmouseout: "mouseOut(this);",
      onmouseover: "mouseOver(this);"
    });
  }
}

function PanelUpdate(obj)
{
  var imgClass = $(obj).attr('class');
  var imgSrc = $(obj).attr('src');
  var value = 0;
  if (-1 != imgSrc.indexOf('_untagged'))
    value = 1;
  else if (-1 != imgSrc.indexOf('_tagged'))
    value = 2;
  else if (-1 != imgSrc.indexOf('_checked'))
    value = 1;

  if (-1 != imgClass.indexOf('panPad'))
  {
    $(obj).parent().parent().parent().find('input[type=hidden]').val(value);
  }
  else
  {
    var blockId = $(obj).prop('id').split('img_')[1];
    $('#'+blockId).find('input[type=hidden]').val(value);
  }
}

function _Checkbox(id, isChecked, label, isDisabled, value)
{
  var txt ='';
  txt += '<table><tr>';

  txt += '<td><input type=checkbox name="'+id+'" id="'+id+'"';
  if (!IsUndefOrNull(value))
    txt += ' value="'+value+'"';
  if (!IsUndefOrNull(isChecked) && isChecked == true)
    txt += ' checked';
  if (!IsUndefOrNull(isDisabled) && isDisabled == true)
    txt += ' disabled';
  txt += '></td>';
  if (!IsUndefOrNull(label))
    txt += '<td><label id="'+id+'_label" '+(isDisabled ? "class=disabled" : "")+' for="'+id+'">'+label+'</label></td>';

  txt += '</tr></table>';

  return txt;
}

function Checkbox(id, isChecked, label, value)
{
  return _Checkbox(id, isChecked, label, false, value);
}

function DisableCheckbox(id)
{
  $('#'+id).prop('disabled', true);
  $('#'+id+'_label').prop('className', 'disabled');
}

var ready_js_style = 1;

/*******************************
 * Checkbox
 *******************************/

