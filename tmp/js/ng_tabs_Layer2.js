var tab=0;
var subTab=0;
var degel=0;
var LastTab;
var LastSelTab="";
var mOver=false;
var isDVLANSupported = 0;
var rwMode = 1; //0 = READ-ONLY Mode, 1 = READ-WRITE Mode
var poeMode = 0;
var ospfMode = 0;
var noRoutingMode = 0;
var stackEnabled = 0;
var ipv6QoSEnabled = 0;
var dhcpv6Enabled = 0;
var fsm726eNoProduct = 0;
var dynamicRouting = 0; //dynamic routing
var isUsbSupported = 0; // Is actual for 5 = GSM73XXSE, 6 = GSM73XXPS.
var switchType = 0; //0 = FSMxxS, 1 = GSM73xxS, 2 = GSM72xxR, 3 = FSM726E, 4 = FSM72xxRS 5 = GSM73XXSE, 6 = GSM73XXPS 7 = XSM72xxS, 8 = GS752TXS, 10 = GS7xxTS/TPS, 11 = GSM73XXH2, 12 = M7100XXG, 13 = M4100, 14 = GS7xxTXP
var licenseEnable = 0; /* 1 - enable , 0 - disable*/
var licenseFeature = 0; /* 1 - license feature is supported, 0 - is not */
var isFeatSmartSupported = 0;
var isVoiceVlanSupported = 0; /* 1 - Voice VLAN feature is supported , 0 - is not */
var isAutoVoipSupported = 0; /* 1 - Auto-VoIP feature is supported , 0 - is not */
var isAutoVideoSupported = 0; /* 1 - Auto-Video feature is supported , 0 - is not */
var isAutoDosSupported = 0; /* 1 - Auto-DoS feature is supported , 0 - is not */
var isAclWizardSupported = 0; /* 1 - ACL Wizard feature is supported , 0 - is not */
var isDhcpSnoopingPersistentSupported = 0; /* 1 - DHCP Snooping Persistent feature is supported, 0 - is not */
var isTimeRangeSupported = 0; /* 1 - Generic Timer Control feature is supported, 0 - is not */
var isMVRSupported = 0; /* 1 - MVR feature is supported, 0 - is not */
var isISCSISupported = 0; /* 1 - ISCSI feature is supported, 0 - is not */
var isPrivateVlanSupported =0; /* 1 - Private Vlan feature is supported, 0 - is not */
var poePD = 0;
var isSTM = 0;
var isMgmtACALSupported = 0; /* 1 - MGMT ACAL is supported, 0 - is not */
var captiveportal_support = 0; /*captive portal*/
var cos_wred_mode = 0; /*COS*/
var isGreenEthernet = 0;
var isGreenEEELPI = 0;
var isMultiNettingSupported = 0; /* 1 - Multinetting supported, 0 - is not */
var isPrivateGroupSupported = 0;
var isDAI= 0;
var isDot1asSupported = 0;
var isMvrpSupported = 0;
var isMmrpSupported = 0;
var isMsrpSupported = 0;
var isSwNoResetOnExp = 0;
var isMLAGSupported = 0;
var isVRRP = 0;
var isSFPLockFeatureSupported = 0;
var SFPLockFeature = 0;
var isOOBIPv4Supported = 0;
var isOOBIPv6Supported = 0;
var isChassisSupported = 0;
var isMemoryDumpSupported = 0;
var isGARPSupported = 0;
var isL2RelaySupported = 0;
var isGlobalFlowSupported = 0;

function gtElmid(id) {
  return document.getElementById(id);
}

function setMode(read, poe, ospf, usb_mode, swType, featSupp,
                 stacking_support,ipv6qos_enabled,dhcpv6_support,
                 license_feature,license_enable,fsm726e_noproduct,
                 dynamic_routing,auto_video_mode,autoDosMode,
                 aclWizardMode,voiceVlan,autoVoip,dhcpSnoopingPersistent,
                 mvr_feature,timeRangeFeature, poe_pd, stm_supp, iscsi_feature,
                 mgmt_acal_enable, cp_portal, private_vlan, coswredmode,
                 green_ethernet, green_eee_lpi, multiNetting, private_group,
                 dot1as, mvrp, mmrp, msrp, sw_no_reset_on_exp, dynamic_arpinspection,
                 mlag_feature, vrrp, sfp_feature, sfp_lock, oob_ipv4, oob_ipv6, chassis,
                 l2_relay, memoryDump, garp, global_flow)
{
  rwMode = read;
  poeMode = poe;
  ospfMode = ospf;
  switchType = swType;
  isFeatSmartSupported = featSupp;
  stackEnabled = stacking_support;
  ipv6QoSEnabled = ipv6qos_enabled;
  dhcpv6Enabled = dhcpv6_support;
  licenseFeature = license_feature;
  licenseEnable = license_enable;
  fsm726eNoProduct = fsm726e_noproduct;
  dynamicRouting = dynamic_routing;
  isAutoDosSupported = autoDosMode;
  isVoiceVlanSupported = voiceVlan;
  isAutoVoipSupported = autoVoip;
  isDhcpSnoopingPersistentSupported = dhcpSnoopingPersistent;
  isTimeRangeSupported = timeRangeFeature;
  isMVRSupported = mvr_feature;
  isISCSISupported = iscsi_feature;
  isPrivateVlanSupported = private_vlan;
  poePD = poe_pd;
  isSTM = stm_supp;
  isMgmtACALSupported = mgmt_acal_enable;
  isUsbSupported = usb_mode;
  isGreenEthernet = green_ethernet;
  isGreenEEELPI = green_eee_lpi;
  isAutoVideoSupported = auto_video_mode;
  isAclWizardSupported = aclWizardMode;
  captiveportal_support = cp_portal;
  cos_wred_mode = coswredmode;
  isMultiNettingSupported = multiNetting;
  isPrivateGroupSupported = private_group;
  isDAI = dynamic_arpinspection;
  isDot1asSupported = dot1as;
  isMvrpSupported = mvrp;
  isMmrpSupported = mmrp;
  isMsrpSupported = msrp;
  isSwNoResetOnExp = sw_no_reset_on_exp;
  isMLAGSupported = mlag_feature;
  isVRRP = vrrp;
  isSFPSupported = sfp_feature;
  isSFPLockFeatureSupported = sfp_lock;
  isOOBIPv4Supported = oob_ipv4;
  isOOBIPv6Supported = oob_ipv6;
  isChassisSupported = chassis;
  isMemoryDumpSupported = memoryDump;
  isL2RelaySupported = l2_relay;
  isGARPSupported = garp;
  isGlobalFlowSupported = global_flow;
}

var x=0;
var thisFlag=false;

function setTabset(ths) {
  var curTd;
  var tb;
  var tbl = ths.parentNode.parentNode.parentNode.parentNode;

  if (is_ie8())
  {
    tbl = ths.parentNode.parentNode.parentNode;
  }


  if ((LastSelTab != "") && (LastSelTab != ths))
  {
    LastSelTab.className = 'layer1';
  }
  LastSelTab = ths;
  if (ths.className != 'layer1_Active')
  {
    ths.className = 'layer1_Active';
  }
  var txt = (is_ie8()) ? ths.childNodes[0].innerText : ths.childNodes[0].textContent ;
  removeTabs();
  Loading(txt);
  subTab=0;
  var subLinks=document.getElementsByName("subLink");
  if(subLinks.length != 0) {
    subLinks[0].onclick();
  } else {
    alert("Failed to find elements with name 'subLink'");
  }
}

function setPage(ths) {
  var addr;
  thisFlag=false;
  var subLinks=document.getElementsByName("subLink");
  for(var i=0;i<subLinks.length;i++){
    if(subLinks[i]==ths){
      if(subTab!=i){
        if(subLinks[subTab].parentNode.className != 'layer2'){
          subLinks[subTab].parentNode.className = 'layer2';
        }
      }
      if(i==0){
        subTab=i;
        if(subLinks[subTab].parentNode.className != 'layer2first'){
          subLinks[subTab].parentNode.className = 'layer2first';
        }
      }
      else{
        subTab=i;
        if(subLinks[subTab].parentNode.className == 'layer2'){
          subLinks[subTab].parentNode.className = 'layer2first';
        }
        thisFlag=true;
      }
      parentNodeLength=ths.parentNode.lang.length;

      if (parentNodeLength !== 0)
          document.getElementById("maincontent").contentWindow.location.replace(ths.parentNode.lang);

      if (is_ie10())
      {
        $(".layer2").css("height", 15);
        $(".layer2first").css("height", 15);
      }
      return;
    }
  }
}

function removeTabs() {
  var trNode=gtElmid("subTubs");
  for(var i=trNode.childNodes.length-1;i>=0;i--){
    delObj=trNode.removeChild(trNode.childNodes[i]);
    delete delObj;
  }
  return;
  with(top.DFrame.FRow5.document)
  {
    var fstNode=getElementsByName('lnk')[0];
    fstNode.style.fontWeight='normal';
    var prnt=fstNode.parentNode;
    limit=0;
    for (var i = prnt.childNodes.length-1; i > limit; i--) {
      delObj=prnt.removeChild(prnt.childNodes[i]);
      delete delObj;
    }
  }
}

function addTabs(arrName,arrLink,arrId,prefix,SubTree, lvl1Idx) {
  var str;
  var trNode=gtElmid("subTubs");
  var tdNode=gtElmid("cloneTd");
  var cloneNode;
  var TabName="";
  var lvl2Idx;
  cloneNode=tdNode.cloneNode(false);
  str=" ";
  cloneNode.innerHTML=str;
  trNode.appendChild(cloneNode);
  for(var i = 0; i < arrName.length; i++) {
    lvl2Idx = i;
    if(i==0){
      cloneNode=tdNode.cloneNode(false);
      TabName=arrName[i];
      if (TabName != "") {
        //var aid = TabName;
        str="<a class='font_Nav_Sec' href='javascript:void(0)' name='subLink' id='"+arrId[i]+"' href='#' onclick=setPage(this);PaintSubTree('"+SubTree[i]+"',"+lvl1Idx+","+lvl2Idx+")>" + TabName + "</a>";
      }
      else
      {
        str="";
      }
      cloneNode.className='layer2first';
      cloneNode.innerHTML=str;
      cloneNode.lang=prefix + arrLink[i];
      trNode.appendChild(cloneNode);
    }
    else {
      cloneNode=tdNode.cloneNode(false);
      TabName=arrName[i];
      //var aid = TabName;
      str="<a class='font_Nav_Sec' href='javascript:void(0)' name='subLink' id='"+arrId[i]+"' href='#' onclick=setPage(this);PaintSubTree('"+SubTree[i]+"',"+lvl1Idx+","+lvl2Idx+")>" + TabName + "</a>";
      cloneNode.className='layer2';
      cloneNode.innerHTML=str;
      cloneNode.lang=prefix + arrLink[i];
      trNode.appendChild(cloneNode);
    }
  }
  return;
}

function space() {
  return "";
}

function createId(lvlNum,name1,name2) {
  var name = name1;
  if(name2 != '') {
    name = name + "_" + name2;
  }
  if(lvlNum != '') {
    name = lvlNum + "_" + name;
  }
  name = name.split(' ').join('');
  name = name.split('/').join('_');
  return name;
}

function FrstLvl(lvlNum,Pname,lvlid) {
  //var aid = createId(lvlNum,Pname,'');
  var str="<tr style='display:table-row' class = 'hoverColor'><td class='paddingBottom13 paddingSquareBullet hoverBlueLeft lineHeightSideMenu'><img class='hoverBlueLeftImg topAlligned' style='padding-top: 5px;' src='images/Left_nav_bullets_black.gif'/></td><td class='paddingBottom13 spacer100Percent hoverBlueMiddle lineHeightSideMenu'>";
  str += "<A style='text-decoration: none' name='"+lvlNum+"' onclick=SetSubLinks(this.name) href='javascript:void(0)' id='"+lvlid+"'><p id='"+lang_id_gen(Pname)+"' class='font10row'>"+ show(Pname, false) + "</p></A></td>";
  /* If item dont have child - dont show up/down arrow. */
  str += "<td class='paddingRight5px paddingBottom13 hoverBlueRight lineHeightSideMenu'><img class='hoverBlueLeftImg vertCentered chevronPadding' src='images/clear.gif'/></td></tr>";
  return str;
}

function SecLvl(lvlNum,Pname,Ppath,stu,additionalOnClickHandler) {
  if (additionalOnClickHandler == undefined)
  {
    additionalOnClickHandler="";
  }
  //var aid = createId(lvlNum,Pname,'');
  var url = urlParamHash(Ppath+"?aj4="+fileVerGet());
  var str="<tr style='display:"+stu+"' class = 'hoverColor'><td class='paddingBottom13 paddingSquareBullet hoverBlueLeft lineHeightSideMenu'><img style='padding-top: 5px;' class='hoverBlueLeftImg topAlligned' src='images/Left_nav_bullets_black.gif'/></td><td class='paddingBottom13 spacer100Percent hoverBlueMiddle lineHeightSideMenu'>";
  str += "<A style='text-decoration: none' name='"+lvlNum+"' onclick=\"SetLinkPage('"+url+"',this);updateSideNavScrollHeight();"+additionalOnClickHandler+"\" href='javascript:void(0)' id='"+lvlNum+"'><p id='"+lang_id_gen(Pname)+"' class='font10row'>" + show(Pname,false) + "</p></A></td>";
  str += "<td class='paddingRight5px paddingBottom13 lineHeightSideMenu'><img class='hoverBlueLeftImg vertCentered chevronPadding' src='images/clear.gif'/></td></tr>";
  return str;
}

function FrthLvl(lvlNum,Pname,Ppath,stu) {
  //var aid = createId(lvlNum,Pname,'');
  var url = urlParamHash(Ppath+"?aj4="+fileVerGet());
  var str="<tr style='display:"+stu+"' class = 'hoverColor'><td class=''></td><td class='paddingBottom13 spacer100Percent bullet lineHeightSideMenu'>";
  str += "<A style='text-decoration: none' name='"+lvlNum+"' onclick=SetLinkPage('"+url+"',this);updateSideNavScrollHeight(); href='javascript:void(0)' id='"+lvlNum+"'><p id='"+lang_id_gen(Pname)+"' class='font10row' style='padding-left: 12px'>" + show(Pname, false) + "</p></A></td>";
  str += "<td class='paddingRight5px paddingBottom13 lineHeightSideMenu'><img class='hoverBlueLeftImg vertCentered chevronPadding' src='images/clear.gif'/></td></tr>";
  return str;
}

/************************ XUI ************************************/
window.onclickSubmit = function ()  { alert("Dummy onclickSubmit handler in top frame"); }
/* Store easy reference to window in the document */
document.window_ref = window;
/************************ XUI ************************************/
