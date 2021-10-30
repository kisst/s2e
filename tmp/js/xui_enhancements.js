/* XUI enhancements */

function xuiDisplayErrorMsg(msg, xid)
{
  if ((msg == undefined) || (xid == undefined))
  {
    alert(document.forms[valmap.main_form_index].err_msg.value);
	return;
  }

  var inlineTextLength = 100; /* TODO: display inline error message only if length is less then X characters */

  /* Find table where error message was generated.*/
  var currentTable = 0;
  var tmp = $(".xuiTableStyle tr").parent();
  for (var i = 0; i < tmp.length; i++) {
    for (var j = 0; j < tmp[i].children.length; j++) {
      if (xid in tmp[i].children[j].children) {
        currentTable = tmp[i];
        i = tmp.length;
        break;
      }
    }
  }
  /* Check amount of <td>s in table found below.
     If we have less than 4 <td>s - display inline error message, otherwise - pop-up error message.*/
  var maxTd = 0;
  for (var i = 0; i < currentTable.children.length; i++) {
    tmp = currentTable.children[i].children.length;
    if (tmp > maxTd) {
      maxTd = tmp;
    }
  }

  if (xid && msg && xid.match('^([0-9]+_){2}([0-9]+)$')) {
    if ((msg.length < inlineTextLength) && (maxTd < 4)) {
      var $errMsg = $("#err");
      if ($errMsg.length != 0)
      {
        $errMsg.parents()[1].children[1].style.borderColor = "#ccc";
        $errMsg.parent().remove();
      }
      var a = document.createElement('a');
      a.innerHTML = "<label id=\"err\" class=\"inlineError inlineErrLocation\">" + msg + "</label>";
      var $inputElem = $("#"+xid).next().children();
      $inputElem.last().after(a);
      $inputElem[1].style.borderColor = "#cc0000";
    }
    else
    {
      alert("" + msg);
    }
    return false;
  }

  alert("" + msg);
}

function xuiCheckError()
{
  if (document.forms[valmap.main_form_index].err_flag.value == 1)
  {
    xuiDisplayErrorMsg(null);
  }
}

function xuiDynamicError(xid, value, errno)
{
  // errno: is the token number
  var xv = xeValData["xv_" + xid + "_" + errno];
  if (typeof(xv) == "undefined") {
    xuiDisplayErrorMsg("Unknown error code (" + errno + ")");
  } else {
    var elementName = xeData["xeleName_" + xid];
    elementName = elementName.replace(/<br\/>/g,'');
    var buf = xuiSubstituteValue(xv, elementName, value);
    xuiDisplayErrorMsg("" + buf, xid);
  }
  return false;
}

var global_confirm_flag = false;
function xui_confirm(args)
{
  addConfirmDiv();
  var flag;

/*  args_array[0] - function name;
 *  args_array[1] - confirm text;
 *  args_array[2] - function args;
*/
  var args_array = args.split ("||");
  var function_name = args_array[0];
  if (args_array[2] != undefined)
  {
    var function_args = args_array[2];
  }
  var $confirmDialog = top.$("#confirmDialog");
  top.$("#confirmDialogMsg").html(args_array[1]);
  //$confirmDialog.find("#confirmDialogMsg").text(args_array[1]);
  $confirmDialog.dialog(
   {
    autoOpen: true,
    height: 202,
    width: 400,
    resizable: false,
    modal: true,
    close: function(event, ui)
    {
     flag = false;
     global_confirm_flag = true;
     deleteConfirmDiv();
     if (args_array[2] != undefined)
     {
       window[function_name](flag, function_args);
     }
     else
     {
       window[function_name](flag);
     }
    }
  });
  flag = true;
  top.deleteConfirmDiv = deleteConfirmDiv;
  if (args_array[2] != undefined)
  {
    var func = "window[\"maincontent\"][\""+function_name+"\"](" + flag + ",\"" + function_args + "\")";
    var func_cancel = "window[\"maincontent\"][\""+function_name+"\"](" + false + ",\"" + function_args + "\")";
  }
  else
  {
    var func = "window[\"maincontent\"][\""+function_name+"\"](" + flag + ")";
    var func_cancel = "window[\"maincontent\"][\""+function_name+"\"](" + false + ")";
  }
  //top.$('a.cnlButton').html("<a href='#' class='cnlButton' aid='ConfirmCnlButton_1' onClick='"+func_cancel+";deleteConfirmDiv();'><img src='images/Cancel_on.gif' style='padding-left:5px'/></a>");
  //top.$('a.msgButton').html("<a href='#' class='msgButton' aid='ConfirmMsgButton_1' onClick='"+func+";deleteConfirmDiv();'><img src='images/Ok_on.gif'/></a>");
  top.$('a.cnlButton').html('<div class="ButtonsDiv">'+CreateEditblBtns(lang('common','btnCancel'), func_cancel+';deleteConfirmDiv();', 'confirm_Cancel', undefined, 'on')+'</div>');
  top.$('a.msgButton').html('<div class="ButtonsDiv">'+CreateEditblBtns(lang('common','btnOK'), func+';deleteConfirmDiv();', 'confirm_OK', undefined, 'on')+'</div>');

  if (global_confirm_flag == true)
  {
    //top.$("#confirmDialog").dialog("close");
  }
}

function deleteWaitingDiv()
{
  if (top.$("#waitingDialog").length != 0)
  {
    top.$('.ui-dialog').remove();
    top.$('#waitingDialog').remove();
  }
}
(function() {
  var proxied = window.alert;
  window.alert = function(arg) {
    deleteWaitingDiv();
    addAlertDiv();
    //console.log("LengthA: " + top.$("#alertDialog").length);
    var $alertDialog = top.$("#alertDialog");
    if ($alertDialog.length != 0) {
      if ((arg != undefined) && (typeof(arg) === "string")) {
        arg = arg.replace(/<br\/>/g,'');
/*
  We cannot display error message if its size is more than 1024 bytes,
  due to the buffer limitation on the 'c'-side.
  In this case append to the end of the message "..... Buffer is exhausted !!!".
*/
        if (arg.length > 800)  /* To be sure that message is enough big. */
        {
          arg += '..... Error buffer is exhausted!';
        }

        $alertDialog.find("#alertDialogShortDescription").text(arg);
        $alertDialog.find("#alertDialogFullDescription").text("");
        $alertDialog.dialog( {
          autoOpen: true,
          height: 202,
          width: 400,
          resizable: false,
          modal: true,
        });

      };
      //console.log("ALERT: " + arg);

      var $obj = top.$('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-icon-only.ui-dialog-titlebar-close').parent();
      $obj.html( $obj.html().replace("button ","button onClick='top.deleteAlertDiv();' "));

      top.$('.mainPageBody').find('.alertScroll').nanoScroller({alwaysVisible: true, contentClass: 'alertFrame'});
    } else {
      //console.log("ALERT: ELSE");
      proxied(arg);
    }
  };
  //console.log("LengthB: " + top.$("#alertDialog").length);
  top.deleteAlertDiv = deleteAlertDiv;
  top.deleteTransferDiv = deleteTransferDiv;
})();

function addConfirmDiv(args)
{
  if (args != undefined)
    top.$('.mainPageBody').append("<div id='confirmDialog' title='Confirm' class='alert' style='display: none;'><div class='separator10' style='border-top: 1px solid #e5e4e3;'><div><label class='defaultFont'id='confirmDialogMsg'>Confirm Full Description</label></div><a href='#' class='cnlButton'><img src='images/Cancel_on.gif'/></a><a href='#' class='msgButton'><img src='images/Ok_on.gif'/></a></div><span class='defaultFont' style='float: right; padding-right: 2em;'><form id='hideConfirm'></form></span></div>");
  else
    top.$('.mainPageBody').append("<div id='confirmDialog' title='Confirm' class='alert' style='display: none;'><div class='separator10' style='border-top: 1px solid #e5e4e3;'><div class='msgHeight'><label class='defaultFont'id='confirmDialogMsg'>Confirm Full Description</label></div><a href='#' class='cnlButton'><img src='images/Cancel_on.gif'/></a><a href='#' class='msgButton'><img src='images/Ok_on.gif'/></a></div> </div>");
}
function addAlertDiv()
{
  //console.log("LengthC: " + top.$("#alertDialog").length);
  if (top.$("#alertDialog").length == 0)
  {
    top.$('.mainPageBody').append("<div id='alertDialog' title='Alert' class='alert' ><div class='separator10' style='border-top: 1px solid #e5e4e3;'></div><div class='alertMsgHeight'><div class='alertContent'><div class='alertScroll' id='sideNavMenu'><div class='alertFrame' name='alertFrame'><label class='defaultFont' id='alertDialogShortDescription'>Alert Short Description</label><div class='separator20'></div><label class='defaultFont' id='alertDialogFullDescription'>Alert Full Description</label></div> </div></div></div><div class='separator20'></div>  <a onClick='"+((_top.alertCb != null)?"_top.alertCb();":"")+"top.deleteAlertDiv();' aid='AlertMsgButton_1' href='#' class='msgButton'><img src='images/Ok_on.gif'/></a><span class='defaultFont' style='float: right; padding-right: 2em;'><form id='hideConfirm'></form></span></div>");
    top.$('.mainPageBody').find('.alertFrame ').css("right", "-16px");
  }
}

function deleteAlertDiv()
{
  top.$('.ui-dialog').remove();
  top.$('#alertDialog').remove();

  _top.alertCb = null;
}

function deleteConfirmDiv()
{
  top.$('.ui-dialog').remove();
  top.$('#confirmDialog').remove();
}

function checkSession(session)
{
  if (session.session_flag.value == 0)
  {
    session.style.display = "none";
    window.top.location="../main_login.html"
  }
}

function moveInterfaceSearch(tblid, tblGap, emWebpage)
  {
  var tableGap = tblGap? tblGap : "#tableGap";
  var tableId = tblid? tblid : "#tbl1";
    $td = $(".navigationTable");
    if ($td.length > 0)
    {
       maxWidth = $(tableGap).width();
       tblWidth = $(tableId).width();

      if (maxWidth > tblWidth)
      {
        if (emWebpage == true)
        {
          $td.width(tblWidth);
        }
        else
        {
          $td.width(tblWidth + 7);
        }
      }

        if (is_ie8())
        {
           contentWidth = $(".horizScroll").css("max-width").replace("px","");
           t = tblWidth > contentWidth ;
          (t)? $td.width(contentWidth) : $td.width(tblWidth);
          if (t)
          {
            top.$("maincontent").width(contentWidth + 5);
          }
        }
    }
  }



function transferDialog()
{
  var $transferDialog = top.$("#transferDialog");
  if ($transferDialog.dialog( "isOpen" ))
  {
    closeDlg();
    transferDialogOpen();
  }
}

function closeDlg(args)
{
  var $transferDialog = top.$("#transferDialog");

  if (is_ie)
  {
    $transferDialog.dialog({
      close: function( event, ui ) {
        top.deleteTransferDiv();
        }
    });
    $transferDialog.dialog( "close" );
    return;
  }
  else
  {
    if ($transferDialog.length != 0)
    {
      top.deleteTransferDiv();
    }
  }

  if (args != "")
  {
      var xids = args.split("|");
      if (xids.length > 0)
      {
        if (document.getElementById(xids[0]).innerHTML.indexOf("Text Configuration") != -1)
        {
          showElement(document.getElementById(xids[1]));
          showElement(document.getElementById(xids[2]));
          resizeParentMainFrame();
        }
      }
  }
}

function transferDialogOpen()
{
  addTransfertDiv();
  var $transferDialog = top.$("#transferDialog");
  $transferDialog.find("#transferDialogDescription").text("File transfer is in progress. Please wait.");
  $transferDialog.dialog( {
          autoOpen: true,
          height: 202,
          width: 400,
          resizable: false,
          modal: true,
          close: function( event, ui ) {
            top.deleteTransferDiv();
          }
        });
}

function addTransfertDiv()
{
  top.$('.mainPageBody').append("<div id='transferDialog' title='Transfer Status' class='transfer' style='display: none;'><div class='separator10' style='border-top: 1px solid #e5e4e3;'></div><div><div class='separator10 transferTextPadding'></div><label class='defaultFont center' id='transferDialogDescription'>Transfer Status</label><div class='separator5'></div></div><div><a><img class='center' src='images/progressbar.gif'></a></div></div>");
}

function deleteTransferDiv()
{
  if (!( top.$("#alertDialog").dialog( "isOpen" )))
  {
    top.$('.ui-dialog').remove();
  }
  top.$('#transferDialog').remove();
}

function waitingDialogOpen(title, msg)
{
  addWaitingDiv(title);
  var $waitingDialog = top.$("#waitingDialog");
  $waitingDialog.find("#waitingDialogDescription").text(msg);
  $waitingDialog.dialog( {
          autoOpen: true,
          height: 202,
          width: 400,
          resizable: false,
          modal: true,
          close: function( event, ui ) {
            deleteWaitingDiv();
          }
        });
}

function addWaitingDiv(title)
{
  if (top.$("#waitingDialog").length == 0)
  {
    top.$('.mainPageBody').append("<div id='waitingDialog' title='"+title+"' class='transfer' style='display: none;'><div class='separator10' style='border-top: 1px solid #e5e4e3;'></div><div><div class='separator10 transferTextPadding'></div><label class='defaultFont center' id='waitingDialogDescription'></label><div class='separator5'></div></div><div><a><img class='center' src='images/progressbar.gif'></a></div></div>");
  }
}

function scrollTo(id) {
  if ($("a[name=" + id + "]").length != 0) {
    $('html,body').animate({scrollTop: $("a[name=" + id + "]").offset().top},'slow');
  }
}

/* Load help into the body */
function loadPageBody(url, handler, title) {
  top.$("#title").text(title);
  $( "#" + handler ).load(url + " body", function(response, status, xhr) {
    if (status == "error") {
      var msg = "Sorry but there was an error: " + xhr.status + " " + xhr.statusText;
      alert(msg);
    } else if (status == "success") {
      //if (_top.MockupMode)
      //{
        var result = eval(response);
        $("#" + handler).html(result) ;
      //}
      //else
      //{
      //  $("#" + handler).html(response) ;
      //}

      $("div > h2").filter(function () {
        return $.trim($(this).html()) == '&nbsp;';
      }).hide();
      $('div > hr:first').remove();
      $('div > hr').css({
        'width': '95%',
        'padding-left': '10px',
        'padding-right': '20px',
        'color': '#e7e5e4'
      }).attr("size", "1");

      $(".contentHelp").nanoScroller({
          alwaysVisible: true,
          contentClass: 'contentHelpFrame'
        });

      $(".contentHelp").nanoScroller({ scrollTo : $("a[name='" + url.split('#')[1] + "']") });
      return false;
    }
  });
}

function xuiPageSubmit(form, submitFlag, bid, submitEndFunc,isRedirection)
{
  var isValid = true;
  var userFlag = true;
  if (submitFlag == xui_operation_submit) {
    isValid = xuiPageSubmitRender(true,bid,false);
  } else if (isRedirection) {
    xuiPageSubmitRender(false,bid,true);
  } else {
    xuiPageSubmitRender(false,bid,false);
  }

  if (submitEndFunc != null) {
    userFlag = xuiRunJSFunction(submitEndFunc, submitFlag, false);
    if (userFlag != false) {
      userFlag = true;
    }
  }

  if ((userFlag == true) && (userJsFuncSubmitFlag == true) && (isValid == true)) {
    if (form != null) {
      xuiClearPreserved();

      /* Workeround for main FF issue with page submit: if (!is_ie) {
        ajaxSubmit(form);
      } else */{
        form.submit();
      }
      return true;
    }
  } else {
    xuiRevertPreserved();
    xuiClearPreserved();
  }
  return false;
}



/* decorator plugin */
(function($) {
  var defaults = {
    first: 'geRight',
	firstL: 'geRightL',
    second: 'firstCol',
    odd: 'def alt0',
    even: 'def alt1',
    last: '',
    type: 'simple',
    skip_class: 'paddingTableHeader def_TH def_ETH0 def_ETH1 def_getd'
  };
  var options;

  $.fn.hasAnyOfClass = function() {
    var classsuite = arguments[0].split(" ");
    for (var i=0; i < classsuite.length; i++) {
      if (this.hasClass(classsuite[i])) {
        return true;
      }
    }
    return false;
  }

  $.fn.tableAutoDecorator = function(params) {
    options = $.extend({}, defaults, options, params);
    var page = document.forms[0].action;

    if (page.match('DhcpQueueMapping.html') != null)
    {
      $(".def_TH").removeClass("firstCol").removeClass("split");
    return;
    }
    if (page.match('qos802QueueMapping.html') != null)
    {
      $srow = $(".htblelem").addClass("def alt1 firstCol split");
      $srow.removeClass("htblelem");
      $frow = $(".def_getd").addClass("def_TH alt0 splitFirst");
      $frow.css("padding: 6px 5px 6px 7px");
      if ($srow[1].clientHeight == 0)
      {
        $srow.height($srow[11].clientHeight - 5);
      }
      else
      {
         $srow.height($srow[1].clientHeight - 5);
      }
      if (is_ie)
    {
      $srow[0].height +=1;
    }
    return;
    }

    this.each(function () {
      var i=0;
      $($("tr", this).get().reverse()).each(function() {
        var $tds = $(">td", this);
        if(!$tds.hasAnyOfClass(options.skip_class)) {
          $tds.removeClass();
          if (i%2 == 1) {
            $tds.addClass(options.odd);
          }
          else {
            $tds.addClass(options.even);
          }
          // align to center only that tds which contain checkbox
          if ($tds.first().has("input:checkbox").length > 0)
          {
            $tds.first().addClass(options.first);
          }
          else
          {
            $tds.first().addClass(options.firstL); //without align to the center
          }
        }
        i++;
      });
    });

    return this;
  };


  $.fn.tableDecorator = function(params) {
    options = $.extend({}, defaults, options, params);

    switch (options.type) {
      case 'simple':
      default:
        this.each(function() {
          $("tr:odd", this).each(function() {
            var $tds = $(">td", this);

            $tds.removeClass();
            $tds.addClass(options.odd);
            $tds.first().addClass(options.first);
          });
          $("tr:even:gt(0)", this).each(function() {
            var $tds = $(">td", this);

            $tds.removeClass();
            $tds.addClass(options.even);
            $tds.first().addClass(options.first);
          });
        });
        break;
      case 'double':
        this.each(function() {
          $("tr:odd:gt(0)", this).each(function() {
            var $tds = $(">td", this);

            $tds.removeClass();
            $tds.addClass(options.even);
            $tds.first().addClass(options.first);
          });
          $("tr:even:gt(0)", this).each(function() {
            var $tds = $(">td", this);

            $tds.removeClass();
            $tds.addClass(options.odd);
            $tds.first().addClass(options.first);
          });
        });
        break;
    }
    return this;
  };
})(jQuery);



var singleRowHeaderTableDecorate = (function() {
  function decorate() {
    /* for single row header table */
    var context = maincontent.document;

    $('table[id^="tbl"][class="xuiTableStyle"]:visible', context).each(function() {
      if ((this.rows.length - 1) % 2) {
        $("tr:odd", this).each(function() {
          $(">td", this).css('background-color', 'red');
        });
      } else {
        $("tr:even", this).each(function() {
          $(">td", this).css('background-color', 'red');
        });
      }
    });
  }
  return function() {
    new decorate();
  };
})();

var doubleRowHeaderTableDecorate = (function() {
  function decorate() {
    /* for single row header table */
    var context = maincontent.document;

    $('table[id^="tbl"][class="xuiTableStyle"]:visible', context).each(function() {
      if ((this.rows.length - 1) % 2) {
        $("tr:odd:gt(0)", this).each(function() {
          $(">td", this).css('background-color', 'red');
        });
      } else {
        $("tr:even:gt(0)", this).each(function() {
          $(">td", this).css('background-color', 'red');
        });
      }
    });
  }
  return function() {
    new decorate();
  };
})();

/* Not used while supporting IE8 */
var ajaxSubmit = (function() {

  function submitRequest(form) {
    var formData = new FormData(form);
    formData.append("file", $("input[type=file]", form).attr('files'));

    $.ajax({
      type : form.method,
      url: form.action,
      success: submitSuccess,
      error: submitError,
      data: formData,
      processData: false,
      contentType: false,
      beforeSend: function(xhr) {
      /* Workeround for main FF*/
/*
        xhr.upload.addEventListener("progress", function(event){
          if (event.lengthComputable) {
            var percentComplete = event.loaded / event.total;
          }
        }, false);

        xhr.addEventListener("progress", function(event) {
          if (event.lengthComputable) {
            var percentComplete = event.loaded / event.total;
            //Do something with download progress
            console.log(percentComplete);
          }
        }, false);
*/
      },
      xhrFields: {
        onprogress: function (event) {
          return true;
        }
      }
    });
  }

  function submitSuccess(data) {
  }

  function submitError(xhr, textStatus, thrownError) {
    alert(textStatus);
  }

  return function (formElement) {
    if (!formElement.action) {
      return;
    }
    new submitRequest(formElement);
  }
})();

