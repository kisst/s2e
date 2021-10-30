var BackLink="";
function SetLinkPage(Loc,ths) {
  var imgRight;
  var imgleft;
  if ((ths.parentNode.parentNode.parentNode!=null) && (document.getElementsByName(ths.name)[0].id != 'fx'))
  {
    tby=ths.parentNode.parentNode.parentNode;
    for(i=0;i<tby.childNodes.length;i++){
      if(tby.childNodes[i].id!=null){
        // 1 tby.childNodes[i].id='blueLink11';
        tby.childNodes[i].childNodes[1].className='paddingBottom13 spacer100Percent hoverBlueMiddle lineHeightSideMenu';
      }
      if ((imgRight = tby.childNodes[i].childNodes[0].childNodes[0]) != null)
      {
        if(imgRight.src!=undefined){
          ln=imgRight.src.length-9;
          temp=imgRight.src.substring(ln,imgRight.src.length);
          if(temp=="white.gif"){
            imgRight.src=imgRight.src.substring(0,imgRight.src.length-10)+"_black.gif";
          }
        }
      }
      // Change selected row style to default value
      tby.childNodes[i].childNodes[1].lastChild.childNodes[0].className = 'font10row colorDefault lineHeightNormal';
      tby.childNodes[i].style.backgroundColor = "";
      tby.childNodes[i].className = "hoverColor";
      $('tr#selectedLink > td').removeClass('paddingBottom12').addClass('paddingBottom13');
      $('tr#selectedLink').next().children().eq(1).removeClass('paddingBottom14').addClass('paddingBottom13');
      $('tr#selectedLink').next().children().eq(2).removeClass('paddingBottom14').addClass('paddingBottom13');
      tby.childNodes[i].id= "";
      imgleft = tby.childNodes[i].childNodes[2].childNodes[0];
      if (imgleft != null)
      {
        if (imgleft.src != undefined)
        {
          if (imgleft.src.substring(imgleft.src.length-9, imgleft.src.length) === "white.gif")
          {
            imgleft.src = imgleft.src.substring(0, imgleft.src.length-10) + ".gif";
          }
          else if (imgleft.src.substring(imgleft.src.length-6, imgleft.src.length) === "up.gif")
          {
            imgleft.src = imgleft.src.substring(0, imgleft.src.length-6) + "normal.gif";
          }
        }
      }

      isThirdFourth=false;
      for(k=0;k<tby.childNodes.length;k++){
        if((typeof(tby.childNodes[k].childNodes[1].firstChild) != 'undefined') && (tby.childNodes[k].childNodes[1].firstChild.id=='fx')){
          isThirdFourth=true;
        }
      }

      if(isThirdFourth){
        if(tby.childNodes[i].childNodes[1].firstChild.id!='fx' && tbdy.childNodes[i].childNodes[1].firstChild.id!='lvl4'){
          tby.childNodes[i].style.display='none';
        }
      }
    }
    BackLink=ths;
    ths.parentNode.parentNode.id="selectedLink";
    ths.parentNode.className="paddingBottom12 spacer100Percent lineHeightSideMenu";
    imgLeft=ths.parentNode.parentNode.childNodes[0].childNodes[0];
    if (typeof(imgLeft.src) != 'undefined') {
      ln=imgLeft.src.length-9;
      temp=imgLeft.src.substring(ln,imgLeft.src.length);
      if(temp=="black.gif"){
        imgLeft.src=imgLeft.src.substring(0,imgLeft.src.length-9)+"white.gif";
      }
    }

    // Change styling for selected row
    ths.childNodes[0].className = 'font10row colorWhite lineHeightNormal';
    // Set background color
    ths.parentNode.parentNode.style.backgroundColor = "#00a1de";
    ths.parentNode.parentNode.className = "selRow";
    $('tr#selectedLink > td').removeClass('paddingBottom13').addClass('paddingBottom12');
    $('tr#selectedLink').next().children().eq(1).removeClass('paddingBottom13').addClass('paddingBottom14');
    $('tr#selectedLink').next().children().eq(2).removeClass('paddingBottom13').addClass('paddingBottom14');
  }

  var elmns = document.getElementsByName(ths.name);
  if (elmns[0].id == 'fx')
  {
    var tblObj = document.getElementById('cnt');
    for (var i=0; i<tblObj.rows.length; i++)
    {
      if (tblObj.rows[i].id == 'selectedLink')
      {
        tblObj.rows[i].id = '';
        tblObj.rows[i].className = 'hoverColorWhite';
      }
      if ((tblObj.rows[i].getElementsByTagName('a')[0].id != 'fx') && (tblObj.rows[i].getElementsByTagName('a')[0].id != 'lvl4') && (tblObj.rows[i].getElementsByTagName('a')[0].id != ths.name))
      {
        tblObj.rows[i].style.display = 'none';
        tblObj.rows[i].previousSibling.className = 'hoverColor';
      }
    }

    elmns = document.getElementsByName(ths.name);
    elmns[0].parentNode.parentNode.id = "selectedLink";

    var imgsrArray = $('#selectedLink').children().eq(2).css("background-image").split("/");
    var resImg = imgsrArray[imgsrArray.length-1].split('"');

    if ((resImg[0] == 'Expand_normal.gif') || (resImg[0] == 'Expand_up_white.gif'))
    {
      $('#selectedLink').children().eq(2).addClass("expandUp");
    }

    for (i=0; i<tby.childNodes.length; i++)
    {
      if (tby.childNodes[i].id != null)
      {
        tby.childNodes[i].childNodes[1].className='paddingBottom13 spacer100Percent hoverBlueMiddle lineHeightSideMenu';
      }
      if ((imgRight = tby.childNodes[i].childNodes[0].childNodes[0]) != null)
      {
        if (imgRight.src != undefined)
        {
          ln = imgRight.src.length - 9;
          temp = imgRight.src.substring(ln, imgRight.src.length);
          if (temp == "white.gif")
          {
            imgRight.src = imgRight.src.substring(0, imgRight.src.length - 10) + "_black.gif";
          }
        }
      }

      tby.childNodes[i].childNodes[1].lastChild.childNodes[0].className = 'font10row colorDefault lineHeightNormal';
      tby.childNodes[i].style.backgroundColor = "";
      if ((tby.childNodes[i].className == 'hoverColorWhite') && (tby.childNodes[i].id != 'selectedLink'))
      {
        tby.childNodes[i].className = 'hoverColor';
      }

      if ((imgleft = tby.childNodes[i].childNodes[2].childNodes[0]) != null)
      {
        if (imgleft.src != undefined)
        {
          ln = imgleft.src.length-9;
          if (imgleft.src.substring(ln, imgleft.src.length) == "white.gif")
          {
            imgleft.src = imgleft.src.substring(0, imgleft.src.length-10) + ".gif";
          }
        }
      }
    }

    /* reset fourth level side menu to defaults and then configure selected item */
    var elemFound = false;
    var indexNum;
    for (var i=1; i < elmns.length; i++)
    {
      if (elmns[i].attributes['onclick'].nodeValue.split("'")[1] == Loc)
      {
        elemFound = true;
        indexNum = i;
        continue;
      }
      elmns[i].parentNode.childNodes[0].childNodes[0].className = "font10row";
      elmns[i].parentNode.parentNode.style.backgroundColor = "";
      elmns[i].parentNode.className = "paddingBottom13 spacer100Percent padding12Left bullet hoverBlueLeftInner hoverBlueMiddle lineHeightSideMenu";
      $('tr#selectedLink').next().next().children().eq(1).removeClass('paddingBottom14').addClass('paddingBottom13');
      $('tr#selectedLink').next().next().children().eq(2).removeClass('paddingBottom14').addClass('paddingBottom13');
    }
    if (elemFound == true)
    {
      elmns[indexNum].parentNode.parentNode.id = "selectedLink";
      elmns[indexNum].parentNode.childNodes[0].childNodes[0].className = 'font10row colorWhite lineHeightNormal';
      elmns[indexNum].parentNode.parentNode.style.backgroundColor = "#00a1de";
      elmns[indexNum].parentNode.className = "paddingBottom12 spacer100Percent padding12Left bulletWhite lineHeightSideMenu";
      $('tr#selectedLink').next().next().children().eq(1).removeClass('paddingBottom13').addClass('paddingBottom14');
      $('tr#selectedLink').next().next().children().eq(2).removeClass('paddingBottom13').addClass('paddingBottom14');
    }
  }

  showHideSideScroll();

  //var paramLoc='../'+Loc;
  var paramLoc=Loc;
  document.getElementById("maincontent").contentWindow.location.replace(paramLoc);
}

function SetSubLinks(name) {
  var showRow = "table-row";

  /* expand all inner content */
  var elmnt=document.getElementsByName(name);
  for(var i=1;i<elmnt.length;i++)
  {
    if (elmnt[i].parentNode.parentNode.style.display == 'table-row')
    {
      elmnt[i].parentNode.parentNode.style.display = 'none';
    }
    else
    {
      elmnt[i].parentNode.parentNode.style.display = showRow;
    }
  }
  elmnt[0].parentNode.parentNode.className = 'hoverColorWhite';

  if (elmnt[1].parentNode.parentNode.style.display == 'table-row') {
    if (elmnt[1].parentNode.parentNode.parentNode != null){
      tbdy = elmnt[1].parentNode.parentNode.parentNode;
      isSel = false;
      orangeCount = 0;
      for (k=0; k < tbdy.childNodes.length; k++)
      {
        if (tbdy.childNodes[k].id == 'selectedLink'){
          isSel = true;
          orangeCount=orangeCount+1;
        }
      }
      if(tbdy.childNodes[0].childNodes[1].childNodes[0].tagName == 'A' && tbdy.childNodes[0].childNodes[1].childNodes[0].id != 'fx' && !isSel){
        tbdy.childNodes[0].childNodes[1].childNodes[0].onclick();
      }
      else{
        elmnt[1].onclick();
      }
    }else{
       elmnt[1].onclick(); }
  }

  showHideSideScroll();
}

function showHideSideScroll()
{
/* add or remove nanoscroller depending on content size */
  var $frames = $('div[name="frame"]');

  if (checkOverflowMainPage($frames[0]) == true)
  {
    $(".tmp").nanoScroller({
      alwaysVisible: true,
      contentClass: 'frame'
    });
    $('#sideNavHiddenColumn').width("10px");
    $frames.css("right", "-16px");
  }
  else
  {
    var $trees = $('#Tree');

    $trees.css('display', '');
    $('#sideNavHiddenColumn').width("0px");
    if (is_ie8())
    {
      $('#sideNavContentColumn').width("180px");
      $('#frame').width("174px");
    }
    $(".tmp").nanoScroller({
      destroy: true,
      contentClass: 'frame'
    });
    $frames.css('right', '0px');
  }
}

function checkOverflowMainPage(el)
{
  var curOverflow = el.style.overflow;

  if ( !curOverflow || curOverflow === "visible" )
  {
    el.style.overflow = "hidden";
  }

  overflow = el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;
  el.style.overflow = curOverflow;

  return overflow;
}

