  function web_main_load()
  {
    var lnks = document.getElementsByName('lnk');
    if(lnks.length != 0)
    {
      lnks[0].onclick();
    }

    $( document ).ready(function(){
      $(".contentNav").nanoScroller({
          alwaysVisible: true,
          contentClass: 'contentFrame'
      });

      $(window).resize(resizeAllElements);

      // on each scrolling of iframe, place table horizontal scroll bar at the lowest visible table row
      $('.contentFrame').scroll(function(){
        horizScrollRelocation();
      });

      updateTopNavL1Width();
    });
  }

/* somehow IE adds addtional pixel to div that contains table. This cause useless scroll bar to be added */
function hideUselessScroll()
{
  if ((is_ie) || (is_ie11))
  {/* Loading of all element take some time so, we have to wait when frame layout will be ready. */
    setTimeout(function() {
    {
      var horizTable = $('#maincontent').contents().find('.horizScroll');
      var tableWidth = $('#maincontent').contents().find('.horizScroll .dataTable').width();
      var maxPageWidth = $('#maincontent').width();

      if (horizTable.hasClass("has-scrollbar-x"))
      {
        if (tableWidth < maxPageWidth)
        {
          $('#maincontent').contents().find('.pane-x').hide();
        }
        else
        {
          $('#maincontent').contents().find('.pane-x').show();
        }
      }
    }
  }, 200);  // set timeout in ms for content loading
  }
}

function updateSideNavScrollHeight()
{
  var captionInf = 40;
  var border = 2;
  var val = $(".sideNavFrame").height();
  val = val - captionInf - border + "px";
  $('div[name="frame"]').css("right", "-16px");
  $(".tmp").height(val);
}

function updateTopNavL1Width()
{
  var containWidth = $('#tabs').width();
  var containHeight = 0;
  var lastWidth = containWidth;
  var totalTabWidth = 0;

  $('#tab_last').width(1);

  $('.layer1').each(function(){
    var tabWidth = $(this).outerWidth();

    if ((is_ie) || (is_ie11))
    {
      if (_top.currLang == "ja")
        tabWidth -= 80;
      else
        tabWidth -= 110;
    }

    totalTabWidth += tabWidth;
  });

  if ((is_ie) || (is_ie11) || is_ieEdge())
    lastWidth = 2000;
  else
    lastWidth -= totalTabWidth;

  $('#tab_last').width(lastWidth);

  containHeight = $('#tabs').height();

  while (containHeight > 26 && lastWidth > 0)
  {
    lastWidth -= 2;
    $('#tab_last').width(lastWidth);

    containHeight = $('#tabs').height();
  }
}

function resizeAllElements()
{
  sizing();
  changeTableMaxWidth();
  hideUselessScroll();
  updateTopNavL1Width();
}

function resizeMainFrame()
{
  var contentFrame = document.getElementById('contentFrame');
  var mainFramePaddingTop = 10;

  // resize main content to fit bottom border
  var one = $(".header").height();
  var three = $(".footer").height();
  var two = parseInt($(window).height() - three - one);
  $(".content").css("height", two);
  // set height of side nav menu with subtraction of 2px for border
  $(".tmp").css("height", two - 2);
  $(".contentNav").css("height", two-mainFramePaddingTop);
    
  var formLength = document.getElementById('maincontent').contentWindow.document.forms.length;
  if (formLength == 2)
  {
    $(".main_frame").css("height", document.getElementById('maincontent').contentWindow.document.forms[1].scrollHeight + "px");
  }
  else if(formLength == 1)
  {
    /* skip pages which content is unknown during iframe load (i.e. Device View page) */
    var emwebScrollHeight = document.getElementById('maincontent').contentWindow.document.forms[0].scrollHeight;

    if (emwebScrollHeight == 0)
    {
      var appletheight = $('#maincontent').contents().find('#MapAppletNavigation').height();
      if (appletheight > 0) 
      {
        emwebScrollHeight = appletheight+150;
      }
    }

    if (emwebScrollHeight != 0)
    {
      $(".main_frame").css("height", emwebScrollHeight + "px");
    }
  }

  if (formLength != 0)
  {
    // hide or show main content scrollbar
    $(".contentNav").nanoScroller();
  }
  else
  {
    $(".main_frame").css("height", two-mainFramePaddingTop+"px");
  }
}

function sizing()
{
  // adjust main frame height and add vertical scrolling support
  resizeMainFrame();
  updateSideNavScrollHeight();
  // hide or show side nav scrollbar
  showHideSideScroll();
  horizScrollRelocation();
  extendTableWidthAsSearchTable();
  customPagesFixes();
}

function extendTableWidthAsSearchTable()
{
  var navTable = $('#maincontent').contents().find('.navigationTable');
  if (navTable != undefined)
  {
    var table = $('#maincontent').contents().find('table[id^=tbl]');
    table.each(function(index, value)
    {
      var divWidth = value.parentElement.clientWidth;
      if (table.width() < divWidth)
      {
        table.css("width", divWidth);
      }
    });
  }
/* IE doesnot place help link (?) on proper position when we change size of the page. */
  if (is_ie)
  {
    $('#maincontent').contents().find(".headerWidth").width("100%");
  }
}

/* The following hack is used only for IE 10 and IE 11 only to display combobox's background arrow on proper position. */
function expandComboboxes()
{
  if ((!!navigator.userAgent.match(/Trident.*rv[ :]*11\./) == true) ||
      (!!navigator.userAgent.match(/MSIE\s([\d.]+)/) == true))
  {
    var select = $('#maincontent').contents().find('select');

    if ((select.length > 0) &&
        (select[0].clientWidth == 0))
    {
      /* This hack is to fix issue with IE10,IE11 when go to Switcing->Port-> Port Configuration and click "ALL".
         In this case clientWidth is zero. It happens because of following.
         This function is called by onLoad method of maincontent frame.
         While clicking on ALL button it takes a lot of time to load all page content and page layout is not ready during calling onLoad event.
         That's why all HTML elements have zero sizes.
         So, we have to wait when frame layout will be ready.*/
      setTimeout(expandComboboxes, 50);
      return;
    }
    for (var i = 0; i < select.length; i++)
    {
      if (select[i].clientWidth > 0)
      {
        select[i].style.width = select[i].clientWidth + 15 + "px";
      }
    }
  }
  hideUselessScroll();
}


/* Function for disable open links in new tabs/windows */
function disableOpenNewTab()
{
  var dennyTags = ["A", "P"];
  function disableContextMenu(e)
  {
    var clickedTag = (e==null) ? event.srcElement.tagName : e.target.tagName;

    if (dennyTags.indexOf(clickedTag) != -1)
    {
      return false;
    }
  }

  function disableOnClick(e)
  {
    var clickedTag = (e==null) ? event.srcElement.tagName : e.target.tagName;

    if (dennyTags.indexOf(clickedTag) != -1)
    {
      if ((e.button == 1) || /* middle mouse button clicked */
          (e.ctrlKey && e.button == 0)) /* Ctrl key pressed when left button click*/
      {
        return false;
      }
    }
  }

  maincontent.oncontextmenu = disableContextMenu;
  document.oncontextmenu = disableContextMenu;

  maincontent.onclick = disableOnClick;
  document.onclick = disableOnClick;
}


function customPagesFixes()
{
  if (document.getElementById('maincontent').contentWindow.document.forms[0] == null)
  {
    return;
  }
  var page = document.getElementById('maincontent').contentWindow.document.forms[0].getAttribute("action");
  if (page == null)
  {
    return;
  }
  if (page.match('DhcpQueueMapping.html') != null)
  {
    $('#maincontent').contents().find(".def_TH").removeClass("firstCol").removeClass("split");
    return;
  }
  if (page.match('qos802QueueMapping.html') != null)
  {
    $srow = $('#maincontent').contents().find(".htblelem").addClass("def alt1 firstCol split");
    $srow.removeClass("htblelem");
    $frow =  $('#maincontent').contents().find(".def_getd").addClass("def_TH alt0 splitFirst");
    $frow.css("padding: 6px 5px 6px 7px");
    if ($srow[1].clientHeight != null)
    {
      if ($srow[1].clientHeight == 0)
      {
        $srow.height($srow[11].clientHeight - 5);
      }
      else
      {
         $srow.height($srow[1].clientHeight - 5);
      }
    }
    if (is_ie)
    {
      $srow[0].height +=1;
    }
    return;
  }
  if (page.match('dhcpSnoopingConfiguration.html') != null)
  {
    var temp_table_obj = $('#maincontent').contents().find(".xuiTableStyle")[2];
    temp_table_obj.style.width = "350px";
  }
}

/* tables can not be wider than iframe's width. In case if table content is too wide,
   new table width is set and nanoscroller is resetted */
function changeTableMaxWidth()
{
  var currTableWidth;
  var scrollWidth;
  var maxPageWidth = $('.mainPageBody').width();
  var sideNavWidth = 180;
  var sidePadding = 50;
  var tablePadding = 7;
  var scrollBarWidth = 10;
  var iframeLeftPadding = 15;
  var helpIcon = (is_ie) ? 0 : 11;

  if ($('.leftNavContent').width() > sideNavWidth || $('#sideNavMenuCaption').width() > sideNavWidth)
  {
    $('#sideNavMenuCaption').width($('.leftNavContent').width() + 2);
    $('#sideNavMenu').width($('.leftNavContent').width());
  }

  // adjust table width in iframe depending on page width
  scrollWidth = ($('body')[0].scrollWidth);
  if (scrollWidth > maxPageWidth)
  {
    currTableWidth = (scrollWidth-sideNavWidth-iframeLeftPadding-scrollBarWidth-tablePadding-sidePadding-helpIcon);
    $('#maincontent').contents().find('.horizScroll ').css("max-width", currTableWidth);
  }
  else
  {
    currTableWidth = (maxPageWidth-sideNavWidth-iframeLeftPadding-scrollBarWidth-sidePadding);
    $('#maincontent').contents().find('.horizScroll ').css("max-width", currTableWidth );
  }
  $('#maincontent').contents().find(".horizScroll").nanoScroller();
}

/* relocate table horizontal scroll bar to the lowest visible table row */
function horizScrollRelocation()
{
  var frameHeight = $('.contentNav').height();
  var scrollTop = $('#contentFrame').scrollTop();
  var scrollBarHeight = $('#maincontent').contents().find(".pane-x").height() + 2; /* + 2px for border */
  var tblTopPadding = $('#maincontent').contents().find('.dataTable').offset();
  
  if (tblTopPadding != null)
  {
    tblTopPadding = tblTopPadding.top;
  }
  else
  {
    return;
  }

  if (frameHeight + scrollTop > $('#maincontent').contents().find('.horizScroll').height())
  {
    $('#maincontent').contents().find('.pane-x').css("top", '');
  }
  else
  {
    $('#maincontent').contents().find('.pane-x').css("top", (frameHeight + scrollTop - tblTopPadding - scrollBarHeight) + 'px');
  }
}

function checkUserNameChanging()
{
  var actualUser = getUserName();
  if (actualUser != 0)
  {
    var currentUser = document.getElementsByClassName('userLine')[0].textContent;

    if (actualUser != currentUser)
    {
      window.top.location="/base/main_login.html";
    }
  }
}

function reloadScript(src)
{
  var head = document.getElementsByTagName('head')[0];
  oldScriptElement = document.getElementById('userName');
  if (oldScriptElement != null)
  {
    head.removeChild(oldScriptElement);
  }

  var scriptElement = document.createElement('script');
  scriptElement.type = 'text/javascript';
  var id = (new Date).getTime(); 
  scriptElement.src = '/base/js/' + src + '?' + id;
  scriptElement.id = 'userName';
  
  head.appendChild(scriptElement);
  setTimeout(checkUserNameChanging, 10); 
}
