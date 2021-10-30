/*******************************
 * Home
 *******************************/
var url_get_homePage = 'cgi/get.cgi?cmd=home_home';
var url_get_loginInfo = 'cgi/get.cgi?cmd=home_login';
var url_set_loginAuth = 'cgi/set.cgi?cmd=home_loginAuth';
var url_get_loginStatus = 'cgi/get.cgi?cmd=home_loginStatus';
var url_set_save = 'cgi/set.cgi?cmd=home_save';
var url_set_logout = 'cgi/set.cgi?cmd=home_logout';
var url_get_monitor = 'cgi/get.cgi?cmd=home_monitor';
var url_set_lang = 'cgi/set.cgi?cmd=home_lang';
var url_get_monitor = 'cgi/get.cgi?cmd=home_monitor';
var url_get_cgiDbg = '../cgi/get.cgi?cmd=home_debug';
var url_set_cgiDbgDel = '../cgi/set.cgi?cmd=home_debugDel';
var url_get_empty = '../cgi/get.cgi?cmd=home_empty';
var url_get_modulus = '../cgi/get.cgi?cmd=home_modulus';
var url_set_hidePopupMsg = '../cgi/set.cgi?cmd=home_hidePopup';

/*******************************
 * System
 *******************************/
/* Management */
var url_get_sysMgmtInfo = '../cgi/get.cgi?cmd=sys_info';
var url_set_sysMgmtInfo = '../cgi/set.cgi?cmd=sys_info';
var url_set_sysFirstTimeEnableCloud = '../cgi/set.cgi?cmd=sys_firstTimeEnableCloud';
var url_get_sysMgmtSSDP="../cgi/get.cgi?cmd=sys_ssdp";
var url_set_sysMgmtSSDP="../cgi/set.cgi?cmd=sys_ssdp";
var url_get_sysMgmtcpuStatus = '../cgi/get.cgi?cmd=sys_cpu_status';
var url_set_sysMgmtcpuStatus = '../cgi/set.cgi?cmd=sys_cpu_status';
var url_get_sysMgmtcpuThreshold = '../cgi/get.cgi?cmd=sys_cpu_threshold';
var url_set_sysMgmtcpuThreshold = '../cgi/set.cgi?cmd=sys_cpu_threshold';
var url_get_sysMgmtUSB = '../cgi/get.cgi?cmd=sys_usb';
var url_get_sysMgmtIp = '../cgi/get.cgi?cmd=sys_ip';
var url_set_sysMgmtIp = '../cgi/set.cgi?cmd=sys_ip';
var url_get_sysMgmtIpv6 = '../cgi/get.cgi?cmd=sys_ipv6';
var url_set_sysMgmtIpv6 = '../cgi/set.cgi?cmd=sys_ipv6';
var url_set_sysMgmtIpv6Add = '../cgi/set.cgi?cmd=sys_ipv6Add';
var url_set_sysMgmtIpv6Del = '../cgi/set.cgi?cmd=sys_ipv6Del';
var url_get_sysMgmtIpv6Neighbor = '../cgi/get.cgi?cmd=sys_ipv6Neighbor';
var url_set_sysMgmtIpv6NeighborClear = '../cgi/set.cgi?cmd=sys_ipv6NeighborClear';
var url_get_sysMgmtTime = '../cgi/get.cgi?cmd=time_time';
var url_set_sysMgmtTime = '../cgi/set.cgi?cmd=time_time';
var url_get_sysMgmtSntp = '../cgi/get.cgi?cmd=time_sntp';
var url_set_sysMgmtSntp = '../cgi/set.cgi?cmd=time_sntp';
var url_set_sysMgmtSntpAdd = '../cgi/set.cgi?cmd=time_sntpAdd';
var url_set_sysMgmtSntpDel = '../cgi/set.cgi?cmd=time_sntpDel';
var url_get_sysMgmtDayLight ='../cgi/get.cgi?cmd=time_dls';
var url_set_sysMgmtDayLight ='../cgi/set.cgi?cmd=time_dls';
var url_get_sysMgmtAutoDos ='../cgi/get.cgi?cmd=dos_auto';
var url_set_sysMgmtAutoDos ='../cgi/set.cgi?cmd=dos_auto';
var url_get_sysMgmtDosConf ='../cgi/get.cgi?cmd=dos_cfg';
var url_set_sysMgmtDosConf ='../cgi/set.cgi?cmd=dos_cfg';
var url_get_sysMgmtDns = '../cgi/get.cgi?cmd=sys_dnsConf';
var url_set_sysMgmtDns = '../cgi/set.cgi?cmd=sys_dnsConf';
var url_set_sysMgmtDnsAdd = '../cgi/set.cgi?cmd=sys_dnsConfAdd';
var url_set_sysMgmtDnsDel = '../cgi/set.cgi?cmd=sys_dnsConfDel';
var url_get_sysMgmtHost = '../cgi/get.cgi?cmd=sys_hostConf';
var url_set_sysMgmtHost = '../cgi/set.cgi?cmd=sys_hostConf';
var url_set_sysMgmtHostAdd = '../cgi/set.cgi?cmd=sys_hostConfAdd';
var url_set_sysMgmtHostDel = '../cgi/set.cgi?cmd=sys_hostConfDel';
var url_get_sysMgmtGreen = '../cgi/get.cgi?cmd=sys_greenProp';
var url_set_sysMgmtGreen = '../cgi/set.cgi?cmd=sys_greenProp';
var url_get_sysMgmtGreenIntf = '../cgi/get.cgi?cmd=sys_greenIntf';
var url_set_sysMgmtGreenIntf = '../cgi/set.cgi?cmd=sys_greenIntf';
var url_get_sysMgmtLedCtrl = '../cgi/get.cgi?cmd=sys_ledCtrl';
var url_set_sysMgmtLedCtrl = '../cgi/set.cgi?cmd=sys_ledCtrl';
var url_get_sysMgmtBonjour = '../cgi/get.cgi?cmd=sys_bonjour';
var url_set_sysMgmtBonjour = '../cgi/set.cgi?cmd=sys_bonjour';
var url_get_sysMgmtBonjourDetail = '../cgi/get.cgi?cmd=sys_bonjourDetail';
var url_get_sysSccd = '../cgi/get.cgi?cmd=sys_sccd';
var url_set_sysSccd = '../cgi/set.cgi?cmd=sys_sccd';
/* Device View */
var url_get_deviceView = '../cgi/get.cgi?cmd=home_view';
var url_get_devicePanelStatus = '../cgi/get.cgi?cmd=home_sts';
/* PoE */
var url_get_sysPoEConf = '../cgi/get.cgi?cmd=poe_conf';
var url_set_sysPoEConf = '../cgi/set.cgi?cmd=poe_conf';
var url_get_sysPoEPort = '../cgi/get.cgi?cmd=poe_port';
var url_set_sysPoEPortReset = '../cgi/set.cgi?cmd=poe_portReset';
var url_set_sysPoEPort = '../cgi/set.cgi?cmd=poe_port';
/* SNMP */
var url_get_sysSnmpCommunity = '../cgi/get.cgi?cmd=snmp_community';
var url_set_sysSnmpCommunity = '../cgi/set.cgi?cmd=snmp_community';
var url_set_sysSnmpCommunityAdd = '../cgi/set.cgi?cmd=snmp_communityAdd';
var url_set_sysSnmpCommunityDel = '../cgi/set.cgi?cmd=snmp_communityDel';
var url_get_sysSnmpTrapConfg = '../cgi/get.cgi?cmd=snmp_trapConfg';
var url_set_sysSnmpTrapConfg = '../cgi/set.cgi?cmd=snmp_trapConfg';
var url_set_sysSnmpTrapConfgAdd = '../cgi/set.cgi?cmd=snmp_trapConfgAdd';
var url_set_sysSnmpTrapConfgDel = '../cgi/set.cgi?cmd=snmp_trapConfgDel';
var url_get_sysSnmpTrapFlag = '../cgi/get.cgi?cmd=snmp_trapFlag';
var url_set_sysSnmpTrapFlag = '../cgi/set.cgi?cmd=snmp_trapFlag';
var url_get_sysSnmpSupportMIB = '../cgi/get.cgi?cmd=snmp_supportMIB';
var url_get_sysSnmpUser = '../cgi/get.cgi?cmd=snmp_user';
var url_set_sysSnmpUser = '../cgi/set.cgi?cmd=snmp_user';
/* LLDP */
var url_get_sysLldpProp = '../cgi/get.cgi?cmd=lldp_prop';
var url_set_sysLldpProp = '../cgi/set.cgi?cmd=lldp_prop';
var url_get_sysLldpPort = '../cgi/get.cgi?cmd=lldp_port';
var url_set_sysLldpPort = '../cgi/set.cgi?cmd=lldp_port';
var url_get_sysLldpMedPolicy = '../cgi/get.cgi?cmd=lldp_medPolicy';
var url_get_sysLldpMedPort = '../cgi/get.cgi?cmd=lldp_medPort';
var url_set_sysLldpMedPort = '../cgi/set.cgi?cmd=lldp_medPort';
var url_get_sysLldpLocal = '../cgi/get.cgi?cmd=lldp_local';
var url_get_sysLldpLocalDetail = '../cgi/get.cgi?cmd=lldp_localDetail';
var url_get_sysLldpNeighbor = '../cgi/get.cgi?cmd=lldp_neighbor';
var url_get_sysLldpNeighborDetail = '../cgi/get.cgi?cmd=lldp_neighborDetail';

/* Services */
/* DHCP L2 Relay */
var url_get_sysServDlr = '../cgi/get.cgi?cmd=ds_dlr';
var url_set_sysServDlr = '../cgi/set.cgi?cmd=ds_dlr';
var url_get_sysServDlrIntf = '../cgi/get.cgi?cmd=ds_dlrIntf';
var url_set_sysServDlrIntf = '../cgi/set.cgi?cmd=ds_dlrIntf';
var url_get_sysServDlrStatistic = '../cgi/get.cgi?cmd=ds_dlrStat';
var url_set_sysServDlrStatistic = '../cgi/set.cgi?cmd=ds_dlrStat';

/* DHCP Snooping */
var url_get_sysServDs = '../cgi/get.cgi?cmd=ds_conf';
var url_set_sysServDs = '../cgi/set.cgi?cmd=ds_conf';
var url_get_sysServDsIntf = '../cgi/get.cgi?cmd=ds_intf';
var url_set_sysServDsIntf = '../cgi/set.cgi?cmd=ds_intf';
var url_get_sysServDsBind = '../cgi/get.cgi?cmd=ds_bind';
var url_set_sysServDsBind = '../cgi/set.cgi?cmd=ds_bind';
var url_set_sysServDsBindAdd = '../cgi/set.cgi?cmd=ds_bindAdd';
var url_set_sysServDsBindDel = '../cgi/set.cgi?cmd=ds_bindDel';
var url_get_sysServDsPersist = '../cgi/get.cgi?cmd=ds_db';
var url_set_sysServDsPersist = '../cgi/set.cgi?cmd=ds_db';
var url_get_sysServDsStatistic = '../cgi/get.cgi?cmd=ds_statistic';
var url_set_sysServDsStatistic = '../cgi/set.cgi?cmd=ds_statistic';

/* DAI */
var url_get_sysServDai = '../cgi/get.cgi?cmd=dai_conf';
var url_set_sysServDai = '../cgi/set.cgi?cmd=dai_conf';
var url_get_sysServDaiVlan = '../cgi/get.cgi?cmd=dai_vlan';
var url_set_sysServDaiVlan = '../cgi/set.cgi?cmd=dai_vlan';
var url_get_sysServDaiIntf = '../cgi/get.cgi?cmd=dai_intf';
var url_set_sysServDaiIntf = '../cgi/set.cgi?cmd=dai_intf';
var url_get_sysServDaiAcl = '../cgi/get.cgi?cmd=dai_acl';
var url_set_sysServDaiAclAdd = '../cgi/set.cgi?cmd=dai_aclAdd';
var url_set_sysServDaiAclDel = '../cgi/set.cgi?cmd=dai_aclDel';
var url_get_sysServDaiAce = '../cgi/get.cgi?cmd=dai_ace';
var url_set_sysServDaiAceAdd = '../cgi/set.cgi?cmd=dai_aceAdd';
var url_set_sysServDaiAceDel = '../cgi/set.cgi?cmd=dai_aceDel';
var url_get_sysServDaiStatistic = '../cgi/get.cgi?cmd=dai_statistic';
var url_set_sysServDaiStatistic = '../cgi/set.cgi?cmd=dai_statistic';

/* Timer Scheduler */
var url_get_sysTsGlobal = '../cgi/get.cgi?cmd=time_ts_global';
var url_set_sysTsGlobalAdd = '../cgi/set.cgi?cmd=time_ts_globalAdd';
var url_set_sysTsGlobalDel = '../cgi/set.cgi?cmd=time_ts_globalDel';
var url_get_sysTsConf = '../cgi/get.cgi?cmd=time_ts_conf';
var url_set_sysTsConf = '../cgi/set.cgi?cmd=time_ts_conf';
var url_set_sysTsConfAdd = '../cgi/set.cgi?cmd=time_ts_confAdd';
var url_set_sysTsConfDel = '../cgi/set.cgi?cmd=time_ts_confDel';

/*******************************
 * Switching
 *******************************/
/* Ports */
var url_get_switchPortsPort = '../cgi/get.cgi?cmd=port_port';
var url_set_switchPortsPort = '../cgi/set.cgi?cmd=port_port';
/* LAG */
var url_get_switchLagCfg = '../cgi/get.cgi?cmd=lag_cfg';
var url_set_switchLagCfg = '../cgi/set.cgi?cmd=lag_cfg';
var url_get_switchLagMbr = '../cgi/get.cgi?cmd=lag_mbr';
var url_set_switchLagMbr = '../cgi/set.cgi?cmd=lag_mbr';
var url_get_switchLagLacpCfg = '../cgi/get.cgi?cmd=lag_lacpCfg';
var url_set_switchLagLacpCfgUpdate = '../cgi/set.cgi?cmd=lag_lacpCfgUpdate';
var url_set_switchLagLacpCfgApply = '../cgi/set.cgi?cmd=lag_lacpCfgApply';
var url_get_switchLagLacpPortCfg = '../cgi/get.cgi?cmd=lag_lacpPortCfg';
var url_set_switchLagLacpPortCfg = '../cgi/set.cgi?cmd=lag_lacpPortCfg';

/* VLAN */
var url_get_switchVlanConf = '../cgi/get.cgi?cmd=vlan_conf';
var url_set_switchVlanConf = '../cgi/set.cgi?cmd=vlan_conf';
var url_get_switchTrunkConf = '../cgi/get.cgi?cmd=vlan_trunking';
var url_set_switchTrunkConf = '../cgi/set.cgi?cmd=vlan_trunking';
var url_set_switchVlanConfAdd = '../cgi/set.cgi?cmd=vlan_confAdd';
var url_set_switchVlanConfDel = '../cgi/set.cgi?cmd=vlan_confDel';
var url_get_switchVlanMbr = '../cgi/get.cgi?cmd=vlan_membership';
var url_set_switchVlanMbr = '../cgi/set.cgi?cmd=vlan_membership';
var url_get_switchVlanStatus = '../cgi/get.cgi?cmd=vlan_status';
var url_get_switchVlanIntf = '../cgi/get.cgi?cmd=vlan_intf';
var url_set_switchVlanIntf = '../cgi/set.cgi?cmd=vlan_intf';
var url_get_switchVlanMac = '../cgi/get.cgi?cmd=vlan_mac';
var url_set_switchVlanMacAdd = '../cgi/set.cgi?cmd=vlan_macAdd';
var url_set_switchVlanMacDel = '../cgi/set.cgi?cmd=vlan_macDel';
var url_get_switchVlanProto = '../cgi/get.cgi?cmd=vlan_proto';
var url_set_switchVlanProto = '../cgi/set.cgi?cmd=vlan_proto';
var url_set_switchVlanProtoAdd = '../cgi/set.cgi?cmd=vlan_protoAdd';
var url_set_switchVlanProtoDel = '../cgi/set.cgi?cmd=vlan_protoDel';
var url_get_switchVlanProtoMbr = '../cgi/get.cgi?cmd=vlan_proto_mbr';
var url_set_switchVlanProtoMbr = '../cgi/set.cgi?cmd=vlan_proto_mbr';
var url_get_switchDVLANConf = '../cgi/get.cgi?cmd=vlan_dvlan';
var url_set_switchDVLANConf = '../cgi/set.cgi?cmd=vlan_dvlan';
var url_get_switchVlanVoice = '../cgi/get.cgi?cmd=vlan_voiceVlan';
var url_set_switchVlanVoice = '../cgi/set.cgi?cmd=vlan_voiceVlan';
var url_get_switchVlanGarp = '../cgi/get.cgi?cmd=vlan_gvrp';
var url_set_switchVlanGarp = '../cgi/set.cgi?cmd=vlan_gvrp';
var url_get_switchVlanGarpPort = '../cgi/get.cgi?cmd=vlan_gvrp_port';
var url_set_switchVlanGarpPort = '../cgi/set.cgi?cmd=vlan_gvrp_port';

/* Auto-VoIP */
var url_get_switchAvProtocolBasedPort = '../cgi/get.cgi?cmd=vlan_voipPort';
var url_set_switchAvProtocolBasedPort = '../cgi/set.cgi?cmd=vlan_voipPort';
var url_get_switchAvOUIBased = '../cgi/get.cgi?cmd=vlan_oui';
var url_set_switchAvOUIBased = '../cgi/set.cgi?cmd=vlan_oui';
var url_get_switchAvOUIBasedPort = '../cgi/get.cgi?cmd=vlan_ouiPort';
var url_set_switchAvOUIBasedPort = '../cgi/set.cgi?cmd=vlan_ouiPort';
var url_get_switchAvOUIBasedTable = '../cgi/get.cgi?cmd=vlan_ouiTable';
var url_set_switchAvOUIBaseTableAdd= '../cgi/set.cgi?cmd=vlan_ouiTableAdd';
var url_set_switchAvOUIBaseTableDel= '../cgi/set.cgi?cmd=vlan_ouiTableDel';
var url_get_switchAvStatus = '../cgi/get.cgi?cmd=vlan_voipStatus';

/* Auto-Vlan */
var url_get_switchAutoVlanOUIBased = '../cgi/get.cgi?cmd=vlan_auto_oui';
var url_set_switchAutoVlanOUIBased = '../cgi/set.cgi?cmd=vlan_auto_oui';
var url_get_switchAutoVlanOUIBasedPort = '../cgi/get.cgi?cmd=vlan_auto_ouiPort';
var url_set_switchAutoVlanOUIBasedPort = '../cgi/set.cgi?cmd=vlan_auto_ouiPort';
var url_get_switchAutoVlanOUIBasedTable = '../cgi/get.cgi?cmd=vlan_auto_ouiTable';
var url_set_switchAutoVlanOUIBaseTableAdd= '../cgi/set.cgi?cmd=vlan_auto_ouiTableAdd';
var url_set_switchAutoVlanOUIBaseTableDel= '../cgi/set.cgi?cmd=vlan_auto_ouiTableDel';


/* STP */
var url_get_switchStpConf = '../cgi/get.cgi?cmd=stp_conf';
var url_set_switchStpConf = '../cgi/set.cgi?cmd=stp_conf';
var url_get_switchStpCstConf = '../cgi/get.cgi?cmd=stp_cst';
var url_set_switchStpCstConf = '../cgi/set.cgi?cmd=stp_cst';
var url_get_switchStpCstPortConf = '../cgi/get.cgi?cmd=stp_cstPortConf';
var url_set_switchStpCstPortConf = '../cgi/set.cgi?cmd=stp_cstPortConf';
var url_get_switchStpCstPortStatus = '../cgi/get.cgi?cmd=stp_cstPortStatus';
var url_set_switchStpCstPortStatus = '../cgi/set.cgi?cmd=stp_cstPortStatus';
var url_get_switchStpRstp = '../cgi/get.cgi?cmd=stp_rstp';
var url_set_switchStpRstp = '../cgi/set.cgi?cmd=stp_rstp';
var url_get_switchStpMstConf = '../cgi/get.cgi?cmd=stp_mst';
var url_set_switchStpMstConf = '../cgi/set.cgi?cmd=stp_mst';
var url_set_switchStpMstAdd = '../cgi/set.cgi?cmd=stp_mstAdd';
var url_set_switchStpMstDel = '../cgi/set.cgi?cmd=stp_mstDel';
var url_get_switchStpMstPortConf = '../cgi/get.cgi?cmd=stp_mstPortConf';
var url_set_switchStpMstPortConf = '../cgi/set.cgi?cmd=stp_mstPortConf';
var url_get_switchStpStats = '../cgi/get.cgi?cmd=stp_stats';
var url_set_switchStpStats = '../cgi/set.cgi?cmd=stp_stats';

/* Multicast */
var url_get_switchMcastMfdbTb = '../cgi/get.cgi?cmd=mcast_mfdb';
var url_set_switchMcastMfdbTbClr = '../cgi/set.cgi?cmd=mcast_mfdbClr';
var url_get_switchMcastMfdbStat = '../cgi/get.cgi?cmd=mcast_mfdbStat';
var url_get_switchMcastAv = '../cgi/get.cgi?cmd=mcast_av';
var url_set_switchMcastAv = '../cgi/set.cgi?cmd=mcast_av';
var url_get_switchMcastIgsGlobal = '../cgi/get.cgi?cmd=mcast_igsGlobal';
var url_set_switchMcastIgsGlobal = '../cgi/set.cgi?cmd=mcast_igsGlobal';
var url_get_switchMcastIgsIntf = '../cgi/get.cgi?cmd=mcast_igsIntf';
var url_set_switchMcastIgsIntf = '../cgi/set.cgi?cmd=mcast_igsIntf';
var url_get_switchMcastIgsTb = '../cgi/get.cgi?cmd=mcast_igsTb';
var url_set_switchMcastIgsTbClr = '../cgi/set.cgi?cmd=mcast_igsTbClr';
var url_get_switchMcastIgsVlan = '../cgi/get.cgi?cmd=mcast_igsVlan';
var url_set_switchMcastIgsVlan = '../cgi/set.cgi?cmd=mcast_igsVlan';
var url_set_switchMcastIgsVlanAdd = '../cgi/set.cgi?cmd=mcast_igsVlanAdd';
var url_set_switchMcastIgsVlanDel = '../cgi/set.cgi?cmd=mcast_igsVlanDel';
var url_get_switchMcastIgsRtIntf = '../cgi/get.cgi?cmd=mcast_igsRtIntf';
var url_set_switchMcastIgsRtIntf = '../cgi/set.cgi?cmd=mcast_igsRtIntf';
var url_get_switchMcastIgsRtVlan = '../cgi/get.cgi?cmd=mcast_igsRtVlan';
var url_set_switchMcastIgsRtVlan = '../cgi/set.cgi?cmd=mcast_igsRtVlan';
var url_get_switchMcastIgsQry = '../cgi/get.cgi?cmd=mcast_igsQry';
var url_set_switchMcastIgsQry = '../cgi/set.cgi?cmd=mcast_igsQry';
var url_get_switchMcastIgsQryVlan = '../cgi/get.cgi?cmd=mcast_igsQryVlan';
var url_set_switchMcastIgsQryVlan = '../cgi/set.cgi?cmd=mcast_igsQryVlan';
var url_set_switchMcastIgsQryVlanDel = '../cgi/set.cgi?cmd=mcast_igsQryVlanDel';
var url_get_switchMcastIgsQryStat = '../cgi/get.cgi?cmd=mcast_igsQryStat';
var url_set_switchMcastIgsQryStat = '../cgi/set.cgi?cmd=mcast_igsQryStat';

var url_get_switchMcastMldGlobal = '../cgi/get.cgi?cmd=mcast_mldGlobal';
var url_set_switchMcastMldGlobal = '../cgi/set.cgi?cmd=mcast_mldGlobal';
var url_get_switchMcastMldIntf = '../cgi/get.cgi?cmd=mcast_mldIntf';
var url_set_switchMcastMldIntf = '../cgi/set.cgi?cmd=mcast_mldIntf';
var url_get_switchMcastMldVlan = '../cgi/get.cgi?cmd=mcast_mldVlan';
var url_set_switchMcastMldVlan = '../cgi/set.cgi?cmd=mcast_mldVlan';
var url_set_switchMcastMldVlanAdd = '../cgi/set.cgi?cmd=mcast_mldVlanAdd';
var url_set_switchMcastMldVlanDel = '../cgi/set.cgi?cmd=mcast_mldVlanDel';
var url_get_switchMcastMldRtIntf = '../cgi/get.cgi?cmd=mcast_mldRtIntf';
var url_set_switchMcastMldRtIntf = '../cgi/set.cgi?cmd=mcast_mldRtIntf';
var url_get_switchMcastMldRtVlan = '../cgi/get.cgi?cmd=mcast_mldRtVlan';
var url_set_switchMcastMldRtVlan = '../cgi/set.cgi?cmd=mcast_mldRtVlan';
var url_get_switchMcastMldQry = '../cgi/get.cgi?cmd=mcast_mldQry';
var url_set_switchMcastMldQry = '../cgi/set.cgi?cmd=mcast_mldQry';
var url_get_switchMcastMldQryVlan = '../cgi/get.cgi?cmd=mcast_mldQryVlan';
var url_set_switchMcastMldQryVlan = '../cgi/set.cgi?cmd=mcast_mldQryVlan';
var url_set_switchMcastMldQryVlanAdd = '../cgi/set.cgi?cmd=mcast_mldQryVlanAdd';
var url_set_switchMcastMldQryVlanDel = '../cgi/set.cgi?cmd=mcast_mldQryVlanDel';

var url_get_switchMcastGroup = '../cgi/get.cgi?cmd=mcast_group';
var url_set_switchMcastGroup = '../cgi/set.cgi?cmd=mcast_group';
var url_set_switchMcastGroupAdd = '../cgi/set.cgi?cmd=mcast_groupAdd';
var url_set_switchMcastGroupDel = '../cgi/set.cgi?cmd=mcast_groupDel';
var url_get_switchMcastGroupMbr = '../cgi/get.cgi?cmd=mcast_groupMbr';
var url_set_switchMcastGroupMbr = '../cgi/set.cgi?cmd=mcast_groupMbr';
var url_get_switchMcastFwdAll = '../cgi/get.cgi?cmd=mcast_fwdAll';
var url_set_switchMcastFwdAll = '../cgi/set.cgi?cmd=mcast_fwdAll';

/* MVR */
var url_get_switchMvrGlobal = '../cgi/get.cgi?cmd=mvr_global';
var url_set_switchMvrGlobal = '../cgi/set.cgi?cmd=mvr_global';
var url_get_switchMvrGroupCfg = '../cgi/get.cgi?cmd=mvr_groupCfg';
var url_set_switchMvrGroupCfg = '../cgi/set.cgi?cmd=mvr_groupCfg';
var url_set_switchMvrGroupCfgAdd = '../cgi/set.cgi?cmd=mvr_groupCfgAdd';
var url_set_switchMvrGroupCfgDel = '../cgi/set.cgi?cmd=mvr_groupCfgDel';
var url_get_switchMvrIntf = '../cgi/get.cgi?cmd=mvr_intf';
var url_set_switchMvrIntf = '../cgi/set.cgi?cmd=mvr_intf';
var url_get_switchMvrGroupMbr = '../cgi/get.cgi?cmd=mvr_groupMbr';
var url_set_switchMvrGroupMbr = '../cgi/set.cgi?cmd=mvr_groupMbr';
var url_get_switchMvrStat = '../cgi/get.cgi?cmd=mvr_stat';
var url_set_switchMvrStat = '../cgi/get.cgi?cmd=mvr_statClr';
/* Address Table */
var url_get_switchMacAddrTable = '../cgi/get.cgi?cmd=mac_tbl';
var url_set_switchMacAddrTableClear = '../cgi/set.cgi?cmd=mac_tblClr';
var url_get_switchMacDynamicAddr = '../cgi/get.cgi?cmd=mac_dyn';
var url_set_switchMacDynamicAddr = '../cgi/set.cgi?cmd=mac_dyn';
var url_get_switchMacStaticAddr = '../cgi/get.cgi?cmd=mac_static';
var url_set_switchMacStaticAddrApply = '../cgi/set.cgi?cmd=mac_static';
var url_set_switchMacStaticAddrDel = '../cgi/set.cgi?cmd=mac_staticDel';
var url_set_switchMacStaticAddrAdd = '../cgi/set.cgi?cmd=mac_staticAdd';

/* Loop Protection */
var url_get_switchLoopProtection = '../cgi/get.cgi?cmd=loop_protect';
var url_set_switchLoopProtection = '../cgi/set.cgi?cmd=loop_protect';
var url_set_switchLoopProtectionClr = '../cgi/set.cgi?cmd=loop_protectClr';

/*******************************
 * Routing
 *******************************/
/* IP */
var url_get_routeIPConf = '../cgi/get.cgi?cmd=route_ipConf';
var url_set_routeIPConf = '../cgi/set.cgi?cmd=route_ipConf';
var url_get_routeIPStatistic = '../cgi/get.cgi?cmd=route_ipStatistic';
/* IPv6 */
var url_get_routeIPv6Conf = '../cgi/get.cgi?cmd=route_ipv6Conf';
var url_set_routeIPv6Conf = '../cgi/set.cgi?cmd=route_ipv6Conf';
var url_get_routeIPv6Tbl = '../cgi/get.cgi?cmd=route_ipv6Tbl';
var url_get_routeIPv6Vlan = '../cgi/get.cgi?cmd=route_ipv6Vlan';
var url_set_routeIPv6Vlan = '../cgi/set.cgi?cmd=route_ipv6Vlan';
var url_get_routeIPv6Prefix = '../cgi/get.cgi?cmd=route_ipv6Prefix';
var url_set_routeIPv6Prefix = '../cgi/set.cgi?cmd=route_ipv6Prefix';
var url_set_routeIPv6PrefixAdd = '../cgi/set.cgi?cmd=route_ipv6PrefixAdd';
var url_set_routeIPv6PrefixDel = '../cgi/set.cgi?cmd=route_ipv6PrefixDel';
var url_get_routeIPv6Statistic = '../cgi/get.cgi?cmd=route_ipv6Statistic';
var url_get_routeIPv6Neigh = '../cgi/get.cgi?cmd=route_ipv6Neighbor';
var url_set_routeIPv6NeighClear = '../cgi/set.cgi?cmd=route_ipv6NeighborClear';
var url_get_routeIPv6Static = '../cgi/get.cgi?cmd=route_ipv6Static';
var url_set_routeIPv6Static = '../cgi/set.cgi?cmd=route_ipv6Static';
var url_set_routeIPv6StaticAdd = '../cgi/set.cgi?cmd=route_ipv6StaticAdd';
var url_set_routeIPv6StaticDel = '../cgi/set.cgi?cmd=route_ipv6StaticDel';
var url_get_routeIPv6Prefer = '../cgi/get.cgi?cmd=route_ipv6Prefer';
var url_set_routeIPv6Prefer = '../cgi/set.cgi?cmd=route_ipv6Prefer';
/* VLAN */
var url_get_routeVlanWizard = '../cgi/get.cgi?cmd=route_vlanWizard';
var url_set_routeVlanWizard = '../cgi/set.cgi?cmd=route_vlanWizard';
var url_get_routeVlanConf = '../cgi/get.cgi?cmd=route_vlanConf';
var url_set_routeVlanConf = '../cgi/set.cgi?cmd=route_vlanConf';
var url_set_routeVlanConfAdd = '../cgi/set.cgi?cmd=route_vlanConfAdd';
var url_set_routeVlanConfDel = '../cgi/set.cgi?cmd=route_vlanConfDel';
/* Router Discovery */
var url_get_routeDiscov = '../cgi/get.cgi?cmd=route_discov';
var url_set_routeDiscov = '../cgi/set.cgi?cmd=route_discov';
/* Routing Table */
var url_get_routeTbl = '../cgi/get.cgi?cmd=route_tbl';
var url_set_routeTbl = '../cgi/set.cgi?cmd=route_tbl';
var url_set_routeTblAdd = '../cgi/set.cgi?cmd=route_tblAdd';
var url_set_routeTblDel = '../cgi/set.cgi?cmd=route_tblDel';

/* ARP */
var url_get_routeArpCache = '../cgi/get.cgi?cmd=route_arpCache';
var url_set_routeArpCache = '../cgi/set.cgi?cmd=route_arpCache';
var url_get_routeArpCreate = '../cgi/get.cgi?cmd=route_arpCreate';
var url_set_routeArpCreate = '../cgi/set.cgi?cmd=route_arpCreate';
var url_set_routeArpCreateAdd = '../cgi/set.cgi?cmd=route_arpCreateAdd';
var url_set_routeArpCreateDel = '../cgi/set.cgi?cmd=route_arpCreateDel';
var url_get_routeArpConf = '../cgi/get.cgi?cmd=route_arpConf';
var url_set_routeArpConf = '../cgi/set.cgi?cmd=route_arpConf';
var url_set_routeArpMgmt = '../cgi/set.cgi?cmd=route_arpMgmt';

/*******************************
 * QoS
 *******************************/
/* CoS */
var url_get_qosCosCos = '../cgi/get.cgi?cmd=qos_cos';
var url_set_qosCosCos = '../cgi/set.cgi?cmd=qos_cos';
var url_get_qosCosIntf = '../cgi/get.cgi?cmd=qos_cosIntf';
var url_set_qosCosIntf = '../cgi/set.cgi?cmd=qos_cosIntf';
var url_get_qosCosIntfQueue = '../cgi/get.cgi?cmd=qos_cosIntfQue';
var url_set_qosCosIntfQueue = '../cgi/set.cgi?cmd=qos_cosIntfQue';
var url_get_qosCos1p2Queue = '../cgi/get.cgi?cmd=qos_1p2Que';
var url_set_qosCos1p2Queue = '../cgi/set.cgi?cmd=qos_1p2Que';
var url_get_qosCosDscp2Queue = '../cgi/get.cgi?cmd=qos_dscp2Que';
var url_set_qosCosDscp2Queue = '../cgi/set.cgi?cmd=qos_dscp2Que';
/* DiffServ */
var url_get_qosDiffConf = '../cgi/get.cgi?cmd=qos_diff';
var url_set_qosDiffConf = '../cgi/set.cgi?cmd=qos_diff';
var url_get_qosDiffClass = '../cgi/get.cgi?cmd=qos_class';
var url_set_qosDiffClass = '../cgi/set.cgi?cmd=qos_class';
var url_set_qosDiffClassAdd = '../cgi/set.cgi?cmd=qos_classAdd';
var url_set_qosDiffClassDel = '../cgi/set.cgi?cmd=qos_classDel';
var url_get_qosDiffClassConf = '../cgi/get.cgi?cmd=qos_classConf';
var url_set_qosDiffClassConf = '../cgi/set.cgi?cmd=qos_classConf';
var url_get_qosDiffClassIpv6 = '../cgi/get.cgi?cmd=qos_classIpv6';
var url_set_qosDiffClassIpv6 = '../cgi/set.cgi?cmd=qos_classIpv6';
var url_set_qosDiffClassIpv6Add = '../cgi/set.cgi?cmd=qos_classIpv6Add';
var url_set_qosDiffClassIpv6Del = '../cgi/set.cgi?cmd=qos_classIpv6Del';
var url_get_qosDiffClassIpv6Conf = '../cgi/get.cgi?cmd=qos_classIpv6Conf';
var url_set_qosDiffClassIpv6Conf = '../cgi/set.cgi?cmd=qos_classIpv6Conf';
var url_get_qosDiffPolicy = '../cgi/get.cgi?cmd=qos_policy';
var url_set_qosDiffPolicy = '../cgi/set.cgi?cmd=qos_policy';
var url_set_qosDiffPolicyAdd = '../cgi/set.cgi?cmd=qos_policyAdd';
var url_set_qosDiffPolicyDel = '../cgi/set.cgi?cmd=qos_policyDel';
var url_get_qosDiffPolicyConf = '../cgi/get.cgi?cmd=qos_policyConf';
var url_set_qosDiffPolicyConf = '../cgi/set.cgi?cmd=qos_policyConf';
var url_get_qosDiffService = '../cgi/get.cgi?cmd=qos_bind';
var url_set_qosDiffService = '../cgi/set.cgi?cmd=qos_bind';
var url_get_qosDiffServiceStat = '../cgi/get.cgi?cmd=qos_bindStat';

/*******************************
 * Security
 *******************************/
/* Management Security */
var url_get_secMgmtUser = '../cgi/get.cgi?cmd=sys_pwd';
var url_set_secMgmtUser = '../cgi/set.cgi?cmd=sys_pwd';
var url_get_secMgmtRadius = '../cgi/get.cgi?cmd=radius_glb';
var url_set_secMgmtRadius = '../cgi/set.cgi?cmd=radius_glb';
var url_get_secMgmtRadiusSrv = '../cgi/get.cgi?cmd=radius_srv';
var url_set_secMgmtRadiusSrv = '../cgi/set.cgi?cmd=radius_srv';
var url_set_secMgmtRadiusSrvAdd = '../cgi/set.cgi?cmd=radius_srvAdd';
var url_set_secMgmtRadiusSrvDel = '../cgi/set.cgi?cmd=radius_srvDel';
var url_set_secMgmtRadiusSrvClr = '../cgi/set.cgi?cmd=radius_srvClr';
var url_get_secMgmtRadiusAcct = '../cgi/get.cgi?cmd=radius_acct';
var url_set_secMgmtRadiusAcct = '../cgi/set.cgi?cmd=radius_acct';
var url_set_secMgmtRadiusAcctAdd = '../cgi/set.cgi?cmd=radius_acct';
var url_set_secMgmtRadiusAcctDel = '../cgi/set.cgi?cmd=radius_acctDel';
var url_set_secMgmtRadiusAcctClr = '../cgi/set.cgi?cmd=radius_acctClr';
var url_get_secMgmtTacacs = '../cgi/get.cgi?cmd=tac_glb';
var url_set_secMgmtTacacs = '../cgi/set.cgi?cmd=tac_glb';
var url_get_secMgmtTacacsSrv = '../cgi/get.cgi?cmd=tac_srv';
var url_set_secMgmtTacacsSrv = '../cgi/set.cgi?cmd=tac_srv';
var url_set_secMgmtTacacsSrvAdd = '../cgi/set.cgi?cmd=tac_srvAdd';
var url_set_secMgmtTacacsSrvDel = '../cgi/set.cgi?cmd=tac_srvDel';
var url_get_secMgmtAuthHttp = '../cgi/get.cgi?cmd=aaa_authHttp';
var url_set_secMgmtAuthHttp = '../cgi/set.cgi?cmd=aaa_authHttp';
var url_get_secMgmtAuthHttps = '../cgi/get.cgi?cmd=aaa_authHttps';
var url_set_secMgmtAuthHttps = '../cgi/set.cgi?cmd=aaa_authHttps';
var url_get_secMgmtAuthDot1x = '../cgi/get.cgi?cmd=aaa_authDot1x';
var url_set_secMgmtAuthDot1x = '../cgi/set.cgi?cmd=aaa_authDot1x';
var url_get_secMgmtSccCtrl = '../cgi/get.cgi?cmd=sys_sccd';
var url_set_secMgmtSccCtrl = '../cgi/set.cgi?cmd=sys_sccd';
/* Access */
var url_get_secAccessHttp = '../cgi/get.cgi?cmd=access_http';
var url_set_secAccessHttp = '../cgi/set.cgi?cmd=access_http';
var url_get_secAccessHttps = '../cgi/get.cgi?cmd=access_https';
var url_set_secAccessHttps = '../cgi/set.cgi?cmd=access_https';
var url_get_secAccessHttpsCert = '../cgi/get.cgi?cmd=access_httpsCert';
var url_set_secAccessHttpsCert = '../cgi/set.cgi?cmd=access_httpsCert';
var url_get_secAccessHttpsCertDl = '../cgi/get.cgi?cmd=access_httpsCertDl';
var url_set_secAccessHttpsCertDl = '../cgi/set.cgi?cmd=access_httpsCertDl';
var url_get_secAccessCtrl = '../cgi/get.cgi?cmd=aclMgmt_profile';
var url_set_secAccessCtrl = '../cgi/set.cgi?cmd=aclMgmt_profile';
var url_get_secAccessCtrlRule = '../cgi/get.cgi?cmd=aclMgmt_rule';
var url_set_secAccessCtrlRule = '../cgi/set.cgi?cmd=aclMgmt_rule';
var url_set_secAccessCtrlRuleAdd = '../cgi/set.cgi?cmd=aclMgmt_ruleAdd';
var url_set_secAccessCtrlRuleDel = '../cgi/set.cgi?cmd=aclMgmt_ruleDel';
/* Port Authentication */
var url_get_secAuthDot1x = '../cgi/get.cgi?cmd=dot1x_glb';
var url_set_secAuthDot1x = '../cgi/set.cgi?cmd=dot1x_glb';
var url_get_secAuthDot1xPort = '../cgi/get.cgi?cmd=dot1x_port';
var url_set_secAuthDot1xPort = '../cgi/set.cgi?cmd=dot1x_port';
var url_set_secAuthDot1xPortReauth = '../cgi/set.cgi?cmd=dot1x_portReauth';
var url_set_secAuthDot1xPortInit = '../cgi/set.cgi?cmd=dot1x_portInit';
var url_get_secAuthDot1xPortSummary = '../cgi/get.cgi?cmd=dot1x_portSumm';
var url_get_secAuthDot1xClientSummary = '../cgi/get.cgi?cmd=dot1x_clientSumm';
/* Traffic Control */
var url_get_secTcFilter = '../cgi/get.cgi?cmd=filter_entry';
var url_set_secTcFilter = '../cgi/set.cgi?cmd=filter_entry';
var url_set_secTcFilterDel = '../cgi/set.cgi?cmd=filter_entryDel';
var url_get_secTcFilterSummary = '../cgi/get.cgi?cmd=filter_entrySumm';
var url_get_secTcStorm = '../cgi/get.cgi?cmd=storm_cfg';
var url_set_secTcStorm = '../cgi/set.cgi?cmd=storm_cfg';
var url_get_secTcPsecure = '../cgi/get.cgi?cmd=psecure_glb';
var url_set_secTcPsecure = '../cgi/set.cgi?cmd=psecure_glb';
var url_get_secTcPsecureIntf = '../cgi/get.cgi?cmd=psecure_intf';
var url_set_secTcPsecureIntf = '../cgi/set.cgi?cmd=psecure_intf';
var url_get_secTcPsecureMac = '../cgi/get.cgi?cmd=psecure_mac';
var url_set_secTcPsecureMac = '../cgi/set.cgi?cmd=psecure_mac';
var url_get_secTcProtect = '../cgi/get.cgi?cmd=port_protect';
var url_set_secTcProtect = '../cgi/set.cgi?cmd=port_protect';
/* TC - private VLAN */
var url_get_secTcPrivateVlanType = '../cgi/get.cgi?cmd=vlan_privateType';
var url_set_secTcPrivateVlanType = '../cgi/set.cgi?cmd=vlan_privateType';
var url_get_secTcPrivateVlanAssociation = '../cgi/get.cgi?cmd=vlan_privateAssociation';
var url_set_secTcPrivateVlanAssociation = '../cgi/set.cgi?cmd=vlan_privateAssociation';
var url_set_secTcPrivateVlanAssociationDel = '../cgi/set.cgi?cmd=vlan_privateAssociationDel';
var url_get_secTcPrivateVlanPortMode = '../cgi/get.cgi?cmd=vlan_privatePortMode';
var url_set_secTcPrivateVlanPortMode = '../cgi/set.cgi?cmd=vlan_privatePortMode';
var url_get_secTcPrivateVlanHost = '../cgi/get.cgi?cmd=vlan_privateHost';
var url_set_secTcPrivateVlanHost = '../cgi/set.cgi?cmd=vlan_privateHost';
var url_set_secTcPrivateVlanHostDel = '../cgi/set.cgi?cmd=vlan_privateHostDel';
var url_get_secTcPrivateVlanPromiscuous = '../cgi/get.cgi?cmd=vlan_privatePromiscuous';
var url_set_secTcPrivateVlanPromiscuous = '../cgi/set.cgi?cmd=vlan_privatePromiscuous';
var url_set_secTcPrivateVlanPromiscuousDel = '../cgi/set.cgi?cmd=vlan_privatePromiscuousDel';

/* ACL */
/* Wizard */
var url_get_secACLWizard = '../cgi/get.cgi?cmd=acl_wizard';
var url_set_secACLWizard = '../cgi/set.cgi?cmd=acl_wizard';
var url_set_secACLWizardAdd = '../cgi/set.cgi?cmd=acl_wizardAdd';
var url_set_secACLWizardDel = '../cgi/set.cgi?cmd=acl_wizardDel';

/* Basic */
var url_get_secMACACL = '../cgi/get.cgi?cmd=acl_macAcl';
var url_set_secMACACL = '../cgi/set.cgi?cmd=acl_macAcl';
var url_set_secMACACLAdd = '../cgi/set.cgi?cmd=acl_macAclAdd';
var url_set_secMACACLDel = '../cgi/set.cgi?cmd=acl_macAclDel';
var url_get_secMACACE = '../cgi/get.cgi?cmd=acl_macAce';
var url_set_secMACACE = '../cgi/set.cgi?cmd=acl_macAce';
var url_set_secMACACEAdd = '../cgi/set.cgi?cmd=acl_macAceAdd';
var url_set_secMACACEDel = '../cgi/set.cgi?cmd=acl_macAceDel';
var url_get_secMACBind = '../cgi/get.cgi?cmd=acl_portBind';
var url_set_secMACBind = '../cgi/set.cgi?cmd=acl_portBind';
var url_get_secMACBindTbl = '../cgi/get.cgi?cmd=acl_portBindTbl';
var url_set_secMACBindTbl = '../cgi/set.cgi?cmd=acl_portBindTbl';

var url_get_secIPACL = '../cgi/get.cgi?cmd=acl_ipAcl';
var url_set_secIPACL = '../cgi/set.cgi?cmd=acl_ipAcl';
var url_set_secIPACLAdd = '../cgi/set.cgi?cmd=acl_ipAclAdd';
var url_set_secIPACLDel = '../cgi/set.cgi?cmd=acl_ipAclDel';
var url_get_secIPACE = '../cgi/get.cgi?cmd=acl_ipAce';
var url_set_secIPACEAdd = '../cgi/set.cgi?cmd=acl_ipAceAdd';
var url_set_secIPACEDel = '../cgi/set.cgi?cmd=acl_ipAceDel';
var url_get_secIPACEExt = '../cgi/get.cgi?cmd=acl_ipExtAce';
var url_set_secIPACEExtAdd = '../cgi/set.cgi?cmd=acl_ipExtAceAdd';
var url_set_secIPACEExtDel = '../cgi/set.cgi?cmd=acl_ipExtAceDel';

var url_get_secIPv6ACL = '../cgi/get.cgi?cmd=acl_ipv6Acl';
var url_set_secIPv6ACL = '../cgi/set.cgi?cmd=acl_ipv6Acl';
var url_set_secIPv6ACLAdd = '../cgi/set.cgi?cmd=acl_ipv6AclAdd';
var url_set_secIPv6ACLDel = '../cgi/set.cgi?cmd=acl_ipv6AclDel';
var url_get_secIPv6ACE = '../cgi/get.cgi?cmd=acl_ipv6Ace';
var url_set_secIPv6ACEAdd = '../cgi/set.cgi?cmd=acl_ipv6AceAdd';
var url_set_secIPv6ACEDel = '../cgi/set.cgi?cmd=acl_ipv6AceDel';

var url_get_secIPBind = '../cgi/get.cgi?cmd=acl_portBind';
var url_set_secIPBind = '../cgi/set.cgi?cmd=acl_portBind';
var url_get_secIPBindTbl = '../cgi/get.cgi?cmd=acl_portBindTbl';
var url_set_secIPBindTbl = '../cgi/set.cgi?cmd=acl_portBindTbl';

var url_get_secVlanBindTbl = '../cgi/get.cgi?cmd=acl_vlanBind';
var url_set_secVlanBindTblAdd = '../cgi/set.cgi?cmd=acl_vlanBindAdd';
var url_set_secVlanBindTblDel = '../cgi/set.cgi?cmd=acl_vlanBindDel';

/*******************************
 * Monitoring
 *******************************/
/* Ports */
var url_get_monitorPortsSwStatistics = '../cgi/get.cgi?cmd=port_swStatistics';
var url_set_monitorPortsSwStatisticsClear = '../cgi/set.cgi?cmd=port_swStatisticsClear';
var url_get_monitorPortsPortStatistics = '../cgi/get.cgi?cmd=port_portStatistics';
var url_set_monitorPortsPortStatisticsClear = '../cgi/set.cgi?cmd=port_portStatisticsClear';
var url_get_monitorPortsPortDetailStatistics = '../cgi/get.cgi?cmd=port_portDetailStatistics';
var url_set_monitorPortsPortDetailStatisticsClear = '../cgi/set.cgi?cmd=port_portDetailStatisticsClear';
var url_get_monitorPortsEapStatis = '../cgi/get.cgi?cmd=dot1x_portEapSts';
var url_set_monitorPortsEapStatisUpdate = '../cgi/get.cgi?cmd=dot1x_portEapSts';
var url_set_monitorPortsEapStatisClear = '../cgi/set.cgi?cmd=dot1x_portEapStsClr';
var url_get_monitorPortsCableTest = '../cgi/get.cgi?cmd=diag_copper';
var url_set_monitorPortsCableTest = '../cgi/set.cgi?cmd=diag_copper';

/* Logs */
var url_get_monitorLogRam = '../cgi/get.cgi?cmd=log_ram';
var url_set_monitorLogRam = '../cgi/set.cgi?cmd=log_ram';
var url_set_monitorLogRamClear ='../cgi/set.cgi?cmd=log_ramClear';
var url_get_monitorLogFlash = '../cgi/get.cgi?cmd=log_flash';
var url_set_monitorLogFlash ='../cgi/set.cgi?cmd=log_flash';
var url_get_monitorLogServer = '../cgi/get.cgi?cmd=log_remote';
var url_set_monitorLogServer = '../cgi/set.cgi?cmd=log_remote';
var url_set_monitorLogServerAdd = '../cgi/set.cgi?cmd=log_remoteAdd';
var url_set_monitorLogServerDel = '../cgi/set.cgi?cmd=log_remoteDel';
var url_get_monitorLogTrap = '../cgi/get.cgi?cmd=log_trap';
var url_set_monitorLogTrap = '../cgi/set.cgi?cmd=log_trap';
var url_set_monitorLogTrapClear = '../cgi/set.cgi?cmd=log_trapClear';
var url_get_monitorLogEvent = '../cgi/get.cgi?cmd=log_event';
var url_set_monitorLogEvent = '../cgi/set.cgi?cmd=log_event';
var url_set_monitorLogEventClear = '../cgi/set.cgi?cmd=log_eventClear';

/* Mirror */
var url_get_monitorPortMirror = '../cgi/get.cgi?cmd=mirror_port';
var url_set_monitorPortMirror = '../cgi/set.cgi?cmd=mirror_port';

/*******************************
 * Maintenence
 *******************************/
/* Reset */
var url_get_maintainResetReboot = '../cgi/get.cgi?cmd=sys_reboot';
var url_set_maintainResetReboot = '../cgi/set.cgi?cmd=sys_reboot';
var url_get_maintainResetFactoryDft = '../cgi/get.cgi?cmd=sys_restore';
var url_set_maintainResetFactoryDft = '../cgi/set.cgi?cmd=sys_restore';
/* Upload */
var url_get_maintainExportTftp = '../cgi/get.cgi?cmd=file_tftp_export';
var url_get_maintainExportStatusTftp = '../cgi/get.cgi?cmd=file_tftp_exportStatus';
var url_set_maintainExportTftp = '../cgi/set.cgi?cmd=file_tftp_export';
var url_get_maintainExportHttp = '../cgi/get.cgi?cmd=file_http_export';
var url_set_maintainExportHttp = '../cgi/set.cgi?cmd=file_http_export';
var url_get_maintainExportUSB = '../cgi/get.cgi?cmd=file_usb_export';
var url_set_maintainExportUSB = '../cgi/set.cgi?cmd=file_usb_export';
var url_get_maintainExportStatusUSB = '../cgi/get.cgi?cmd=file_usb_exportStatus';
/* Download */
var url_get_maintainDownloadTftp = '../cgi/get.cgi?cmd=file_tftp_download';
var url_get_maintainDownloadStatusTftp = '../cgi/get.cgi?cmd=file_tftp_downloadStatus';
var url_set_maintainDownloadTftp = '../cgi/set.cgi?cmd=file_tftp_download';
var url_get_maintainDownloadHttp = '../cgi/get.cgi?cmd=file_http_download';
var url_get_maintainDownloadStatusHttp = '../cgi/get.cgi?cmd=file_http_downloadStatus';
var url_set_maintainDownloadHttp = '../cgi/set.cgi?cmd=file_http_download';
var url_get_maintainDownloadUSB = '../cgi/get.cgi?cmd=file_usb_download';
var url_set_maintainDownloadUSB = '../cgi/set.cgi?cmd=file_usb_download';
var url_get_maintainDownloadStatusUSB = '../cgi/get.cgi?cmd=file_usb_downloadStatus';
/* File Management */
var url_get_maintainFileCopy = '../cgi/get.cgi?cmd=file_copy';
var url_set_maintainFileCopy = '../cgi/set.cgi?cmd=file_copy';
var url_get_maintainFileCopyStatus = '../cgi/get.cgi?cmd=file_copyStatus';
var url_get_maintainFileDualConf = '../cgi/get.cgi?cmd=file_dualConf';
var url_set_maintainFileDualConf = '../cgi/set.cgi?cmd=file_dualConf';
var url_get_maintainFileDualStatus = '../cgi/get.cgi?cmd=file_dualStatus';
var url_set_maintainFileDualStatus = '../cgi/set.cgi?cmd=file_dualStatus';
/* Troubleshooting */
var url_get_maintainTroublePingIpv4 = '../cgi/get.cgi?cmd=diag_ping';
var url_set_maintainTroublePingIpv4 = '../cgi/set.cgi?cmd=diag_ping';
var url_get_maintainTroublePingIpv6 = '../cgi/get.cgi?cmd=diag_ping';
var url_set_maintainTroublePingIpv6 = '../cgi/set.cgi?cmd=diag_ping';
var url_get_maintainTroubleTracerouteIpv4 = '../cgi/get.cgi?cmd=diag_traceroute';
var url_set_maintainTroubleTracerouteIpv4 = '../cgi/set.cgi?cmd=diag_traceroute';
var url_get_maintainTroubleTracerouteIpv6 = '../cgi/get.cgi?cmd=diag_traceroute';
var url_set_maintainTroubleTracerouteIpv6 = '../cgi/set.cgi?cmd=diag_traceroute';
var url_get_maintainTroubleDiag = '../cgi/get.cgi?cmd=diag_remote';
var url_set_maintainTroubleDiag = '../cgi/set.cgi?cmd=diag_remote';
var url_get_maintainTroubleMemory = '../cgi/get.cgi?cmd=diag_memory';
var url_set_maintainTroubleMemory = '../cgi/set.cgi?cmd=diag_memory';
/* Activation Key */
var url_set_maintainActivationKey = '../cgi/set.cgi?cmd=sys_activationKey';

/*******************************
 * Help
 *******************************/
var url_get_helpRegister = '../cgi/get.cgi?cmd=sys_registration';
var url_set_helpRegister = '../cgi/set.cgi?cmd=sys_registration';

/*******************************
 * Index
 *******************************/

/* This ready flag should put at file end */
var ready_js_url = 1;
