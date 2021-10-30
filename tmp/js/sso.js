function do_search()
{
	var key = encodeURIComponent(document.getElementById("search_key").value);
	var winoptions = "width=960,height=800,top=0,left=0,toolbar=no,locaiton=yes,scrollbars=yes,resizable=yes";
	var url="https://kb.netgear.com/app/answers/list/kw/"+key;

	window.open(url,'_blank',winoptions);
}

function load_sso_top_value()
{
	form=document.language_form;
	if(guest == 1)
    {
	    form.language.disabled="disabled";
	}
}


function detectEnter(type, e)
{
     var keycode, event;
	 if (window.event)
        {
                event = window.event;
                keycode = window.event.keyCode;
        }
        else if (e)
        {
                event = e;
                keycode = e.which;
        }
        else
			return true;

		if(type == "num")
		{
	  if(keycode==13)
			do_search();
		}
		else
		return false;
}

function onCreateNewNetgearAccount()
{
  	if ((hasInternet == "0")&&(isFirstTime=="0"))
		alert(lang('sso', 'txtSsoErrNoInternet'));
	else
	{
		//var redirect=netgear_sso_url+'signup?redirectUrl='+redirect_url_after_login+'&id='+pingId_App_Id;
		var redirect=netgear_sso_url+'signup?redirectUrl='+redirect_login_after_reg+'&devtypeid='+dev_id+'&serial_num='+dev_sn+'&sessionID='+sso_sessId;
		top.location.href = redirect;
	}
}



function onSignInWithNetgearAccount()
{
  	if ((hasInternet == "0")&&(isFirstTime=="0"))
		alert(lang('sso', 'txtSsoErrNoInternet'));
	else
	{
		//var redirect=netgear_sso_url+'login?redirectUrl='+redirect_url_after_login+'&id='+pingId_App_Id;
		var redirect=netgear_sso_url+'login?redirectUrl='+redirect_home_after_login+'&devtypeid='+dev_id+'&serial_num='+dev_sn+'&sessionID='+sso_sessId;
		top.location.href = redirect;
	}
}
function show_sso_error_msg_popup()
{
	document.getElementById("sso_error").innerHTML = sso_error_msg;
	$('#sso_error_msg_popup, .blackBackground').fadeIn();
}

function show_local_login_help_popup()
{
	$('#local_login_help_popup, .blackBackground').fadeIn();
}

function show_sysinfo_popup()
{
	$('#sysinfo_popup, .blackBackground').fadeIn();
}

function show_internet_everlogon_login_help_popup()
{
	$('#internet_everlogon_login_help_popup, .blackBackground').fadeIn();
}


function show_internet_login_help_popup()
{
	if(isFirstTime == "1")
		$('#internet_everlogon_login_help_popup, .blackBackground').fadeIn();
	else
		$('#internet_login_help_popup, .blackBackground').fadeIn();
}

function show_internet_create_help_popup()
{
	$('#internet_create_help_popup, .blackBackground').fadeIn();
}

function closePupup()
{
	$('.popup, .blackBackground').fadeOut();
}



