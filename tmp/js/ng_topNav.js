function drawHeadsTab(first) {
  var str = '';
  //var headTabs=new Array("System","Switching","Routing","QoS","Security","Monitoring","Maintenance","Help","Index");
  var headTabs = [];
  for (var i =0; i < data.menuTree.length; i++)
  {
    headTabs.push(data.menuTree[i].name);
  }
  for(var i=0;i<headTabs.length;i++)
  {
    var js = "<TD class = 'layer1'><A name='lnk' id='"+lang_id_gen(headTabs[i])+"'' onclick=setTabset(this.parentNode); href='javascript:void(0)' class='font_Nav_Fst'";
    js += "'>" + show(headTabs[i],false) + "</A></TD>";

    str += js;
  }
  //document.write("<TD class='spacer100Percent topNavColor'/>" );
  str += "<TD class='topNavColor' id='tab_last'></TD>";
  //if(first) LastTab=document.getElementById("tabs").childNodes[tab].style;
  return str;
}

function drawHeadsTabs(second) {
  return;
}

function Loading(caption) {
  var splittedCurrName = [];
  var splittedCurrLink = [];
  var splittedCurrId = [];
  var prefix = "";
  var splittedSubTree = [];
  var lvl1Idx;

  for (var i = 0; i < data.menuTree.length; i++)
  {
    if (show(data.menuTree[i].name,false) == caption)
    {
      for (var j = 0; j < data.menuTree[i].leaves.length; j++)
      {
        var name = show(data.menuTree[i].leaves[j].name, false);
        var nameNoSpace = name.replace(/ /g,'');
        splittedCurrName.push(name);
        splittedSubTree.push(nameNoSpace);
        splittedCurrId.push(lang_id_gen(data.menuTree[i].leaves[j].name));
        splittedCurrLink.push("");

        lvl1Idx = i;
      }
      break;
    }
  }

  addTabs(splittedCurrName,splittedCurrLink,splittedCurrId,'',splittedSubTree, lvl1Idx);
  parent.document.getElementById('sideNavMenu').parentElement.style.display = '';
}

