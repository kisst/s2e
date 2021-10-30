function PaintSubTree(cap, lvl1Idx, lvl2Idx)
{
  var showRow = "table-row";
  var str;
/*
  IE8 not support the getElementsByClassName() DOM-method,
  but supports querySelectorAll() that allows to solve the
  same task without using any JS libraries

  var activeItemTopMenu = document.getElementsByClassName("layer2first")[0].childNodes[0];
*/
  var activeItemTopMenu = document.querySelectorAll(".layer2first")[0].childNodes[0];

  document.getElementById('sideNavMenu').parentElement.style.display = '';

  if (activeItemTopMenu != null)
  {
    /* add caption for side navigation menu items */
    //str = "<div class='sideNavMenuCaption'><label class='font_Nav_Fst'>" + activeItemTopMenu.innerHTML + "</label></div>";
    document.getElementById('TreeCaption').innerHTML = activeItemTopMenu.innerHTML;
    str = "<table cellpadding=0 cellspacing=0 border=0 id=cnt>";

    _top.document.querySelectorAll('.sideNavMenuCaption')[0].parentNode.style.display = '';
    var ptr = _top.$("#primaryNav").parent();
    ptr.find(".separator3").height('3px');
    ptr.find(".separator25").height('25px');
  }
  else
  {
    str = "<table cellpadding=0 cellspacing=0 border=0 id=cnt>";
  }

  //document.getElementById('sideNavMenu').style.display = '';

  var currSideNav = data.menuTree[lvl1Idx].leaves[lvl2Idx].leaves;
  var lvlTopIdx = 4;
  var lvlIdx = 0;
  var allTops = true;

  for (var i = 0; i < currSideNav.length; i++)
  {
    if (IsUndefOrNull(currSideNav[i].top))
    {
      allTops = false;
      break;
    }
  }

  for (var i = 0; i < currSideNav.length; i++)
  {
    if (1 == currSideNav.length)
    {
      str += SecLvl(("lvl1"), currSideNav[i].name, currSideNav[i].url, showRow);
      break;
    }
    else if (allTops)
    {
      lvlIdx += 1;
      str += SecLvl(("lvl"+lvlIdx), currSideNav[i].name, currSideNav[i].url, showRow);
      continue;
    }

    if (!IsUndefOrNull(currSideNav[i].url) && !IsUndefOrNull(currSideNav[i].top))
    {
      str += SecLvl(("lvl"+lvlTopIdx), currSideNav[i].name, currSideNav[i].url, showRow);
    }
    else if (IsUndefOrNull(currSideNav[i].url) && IsUndefOrNull(currSideNav[i].top))
    {
      lvlIdx += 1;
      if (lvlIdx == lvlTopIdx)
        lvlIdx += 1;
      str += FrstLvl(("lvl"+lvlIdx), currSideNav[i].name, "fx", showRow);
    }
    else if (!IsUndefOrNull(currSideNav[i].url) && IsUndefOrNull(currSideNav[i].top))
    {
      str += FrthLvl(("lvl"+lvlIdx), currSideNav[i].name, currSideNav[i].url, "none");
    }

  }

  if (str != "")
  {
    str += "</table>";
  }
  document.getElementById('TreeFrame').innerHTML = str;
  BackLink = "";
  if (document.getElementById('cnt') != null)
  {
    cntnt = document.getElementById('cnt').rows.length;
  }
  if ((str != "") && (cntnt != 0))
  {
    document.getElementsByName('lvl1')[0].onclick();
  }
}
