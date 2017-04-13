(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-19303147-2', 'auto', 'statsTracker');
ga('statsTracker.send', 'pageview');
ga('create', 'UA-19303147-22', 'auto', {'allowLinker': true});
ga('send', 'pageview');

// Sending ClientId to Shutterstock iframes
var clientId = undefined;
var iframeQueue = [];
function sendClientId() {
  while (iframeQueue.length>0) {
    var iframe = iframeQueue.pop();
        // Extract domain from iframe src
        var parser = document.createElement('a');
        parser.href = iframe.src;
        var target = parser.protocol+'//'+parser.hostname;
        iframe.contentWindow.postMessage(clientId, target);
      }
}
function askForClientId(element) {
  iframeQueue.push(element);
  if (clientId) {
    sendClientId();
  }
}
ga(function (tracker) {
  clientId = tracker.get('clientId');
  sendClientId();
});

if (window.performance && document.addEventListener && window.addEventListener) {
  document.addEventListener('DOMContentLoaded', function () {
    ga('send', 'timing', 'performance', 'DOMContentLoaded', Math.round(performance.now()) /* TODO: 'Highwinds CDN' | 'Edgecast CDN' | 'OVH' */);
  });
}

function ga_logged_in_callback(data) {
  var userType = !data.status ? 'guest' : (data.premium ? 'premium' : 'registered');
  document.querySelector('body').classList += " "+userType;
  ga('set', 'dimension1', userType);
  if (data.id) {
    ga('set', 'userId', data.id);
  }
}

function logged_in_callback(data) {
  ga_logged_in_callback(data);
  if (typeof coupon_logged_in_callback !== 'undefined') coupon_logged_in_callback();
  if (typeof detail_logged_in_callback !== 'undefined') detail_logged_in_callback();
  if (typeof search_logged_in_callback !== 'undefined') search_logged_in_callback();
  if (typeof detail_comments_callback !== 'undefined') detail_comments_callback();
}
window.gr || document.write('<script src="https://media.freepik.com/min/g/freepik?2017040301">\x3C/script>')
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function() {

  var map_item_list_1 = googletag.sizeMapping().
  addSize([320, 50], [[320, 50], [320, 100], [300, 250]]).
  addSize([468, 60], [[320, 50], [320, 100], [468, 60]]).
  addSize([550, 60], [468, 60]).
  addSize([770, 90], [728, 90]).
  addSize([861, 90], [468, 60]).
  addSize([960, 90], [728, 90]).
  addSize([1250, 250], [[728, 90], [970, 90], [970, 250], [980, 90], [980, 250]]).
  build();

  var map_item_sidebar_1 = googletag.sizeMapping().
  addSize([0, 0], []).
  addSize([300, 50], [300, 250]).
  addSize([1081, 250], [[336, 280], [300, 250]]).
  build();

  googletag.defineSlot('/9837927/FREEPIK_ITEM_336X280_SIDEBAR_1', [[300, 250], [336, 280]], 'div-gpt-ad-1461149264689-0').defineSizeMapping(map_item_sidebar_1).addService(googletag.pubads());
  googletag.defineSlot('/9837927/FREEPIK_ITEM_LIST_1', [[336, 280], 'fluid'], 'div-gpt-ad-1489059570555-0').addService(googletag.pubads());
  googletag.defineSlot('/9837927/FREEPIK_ITEM_LIST_2', [[468, 60], [970, 90], [320, 100], [728, 90], [980, 250], [980, 90], [320, 50], [970, 250], [300, 250 ]], 'div-gpt-ad-1461149264689-2').defineSizeMapping(map_item_list_1).addService(googletag.pubads());
  googletag.pubads().collapseEmptyDivs();
  //googletag.pubads().enableSyncRendering();

  googletag.pubads().setTargeting('designer', '1201');googletag.pubads().setTargeting('photo', '1085509');            googletag.enableServices();
});
window.suggestmeyes_loaded = true;
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
      n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','//connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1470657753234558');
      fbq('track', "PageView");


(function(e,b){if(!b.__SV){var a,f,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=e.createElement("script");a.type="text/javascript";a.async=!0;a.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";f=e.getElementsByTagName("script")[0];f.parentNode.insertBefore(a,f)}})(document,window.mixpanel||[]);mixpanel.init("28a22b7cf07cbca77b89d85b685d82f5");

  var cookie_time = 60;

  function closePiktabBar(e, install){
    if (install == true)
    {
      e.preventDefault();
      try
      {
        chrome.webstore.install();
      }
      catch(ex)
      {
        console.warn(ex);
        window.open(
          "http://www.piktab.com",
          "_blank"
          );
      }
    }

    if (document.body.classList.contains("topbar-visible")) {
      document.body.classList.remove("topbar-visible");

      var piktab_cookie = $.cookie("piktab_topbar");

      if (piktab_cookie)
      {
        piktab_cookie = piktab_cookie.split("|");
        piktab_cookie[2] = 3;
        $.cookie("piktab_topbar", piktab_cookie.join("|"), {expires: cookie_time});
      }
    }
  }

  document.getElementById('close-topbar').addEventListener('click', closePiktabBar);

  document.addEventListener("DOMContentLoaded", function(){


    if (typeof chrome == 'undefined') return false;

    var http = new XMLHttpRequest();

    http.open('HEAD', 'chrome-extension://nkhjnpgcnmdpeikbeegmibjcfjpamjnp/media/img/icons/favicon.ico', true);

    http.onreadystatechange = function(){
      if (http.readyState==4) {

        if (http.status != 200) {
          var piktab_cookie = $.cookie("piktab_topbar");

          var today = new Date();
          if (piktab_cookie)
          {
            piktab_cookie = piktab_cookie.split("|");
            var first_display = new Date(piktab_cookie[0]);
            var last_display  = new Date(piktab_cookie[1]);
            var display_times = parseInt(piktab_cookie[2], 10);

            var timeDiff      = Math.abs(last_display.getTime() - first_display.getTime());
            var diffDays      = Math.ceil(timeDiff / (1000 * 3600 * 24));
            display_times = today.toDateString() != last_display.toDateString() ? 0 : display_times;

            if (diffDays < 3 && display_times < 3)
            {
              document.body.classList.add("topbar-visible");

              first_display.setTime(first_display.getTime() + 60)
              timeDiff      = Math.abs(first_display.getTime() - today.getTime());
              diffDays      = Math.ceil(timeDiff / (1000 * 3600 * 24));

              display_times++;
              $.cookie("piktab_topbar", [first_display.toDateString(), today.toDateString(), display_times].join("|"), {expires: cookie_time});
            }
          }
          else
          {
            document.body.classList.add("topbar-visible");
            $.cookie("piktab_topbar",[today.toDateString(), today.toDateString(), 1].join("|"), {expires: cookie_time});
          }

          setTimeout(function(){
            document.body.classList.remove('topbar-visible');
          }, 10000);
        }
      }
    };

    http.send();
  });

  var ACCOUNTS_BASE_URL = 'https://profile.freepik.com/';
      var ACCOUNTS_API_KEY = 'aHR0cDovL3d3dy5mcmVlcGlrLmNvbQ==';
      /*var ACCOUNTS_TYPE_MODAL = true;*/
      var FACEBOOK_APP_ID = '102556336476545';
      var GOOGLE_CLIENT_ID = '645947318004-vpkoa2nspdlg3ehvrelfkaqekvjqmo4q.apps.googleusercontent.com';
      var GOOGLE_API_KEY = 'AIzaSyDXxs5V0QdmQlNhgPiTB61IQM0lQntZqZM';
      var SPONSOR_BASE_URL = 'http://aka-a-edge.freepik.com/';
      var LANGUAGE = 'english';
      var AJAX_BASE_URL = 'https://ajax.freepik.com/';

// Función que devuelve la url base de peticiones ajax para que 
// no dependan de variables externas a este fichero
function _get_url_ajax() {
  if (typeof AJAX_BASE_URL !== "undefined" && AJAX_BASE_URL !== '') {
    return AJAX_BASE_URL;
  } else {
      // Por defecto devolvemos la url del host actual '/'
      return '/controllers/ajax/'; 
    }
  }
  var track_url  = 'http://www.freepik.com/index.php?goto=74&idfoto=1085509';
  var track_name = 'new7ducks';
  var track_id   = '1085509';
  var track_type = 'Vector';
  var selection  = 1;


  function detail_logged_in_callback()
  {
    if (gr.auth.me.premium)
    {
    // For premium users, show premium button
    $('div.download a.with-join').hide();
    $('div.download a.btn-join').hide();
    $('div.download a.btn-upgrade').hide();
    $('span.discover').hide();
    $('div.download a.btn-no-attribution').css('display', 'block');
    $('div.premium-overlay .locked').hide();
    $('div.premium-overlay .unlocked').show();

    // url set the premium in the "click" property of the previous image
    $('#btn-img-free-download').click(function(event) {
      event.stopPropagation();
      $('#btn-no-attribution').click();
    });
  }


  $('#txt_premium_info_user').css('display','none');
  $('#txt_premium_info_default').css('display','none');
  if (gr.auth.me.premium)
  {
    $('.publi').remove();
  } else {
  }
}

function detail_comments_callback()
{
  gr.comments.init_lazy();
}




function track_download(t,e)
{
// stop propagation
if (typeof e != "undefined")
  e.preventDefault();

// Tracking Analytics
ga('send', 'event', 'download', track_name, track_id, {
  'dimension2': '1201',
  'dimension3': '2017-W14',
  'dimension4': '2 weeks ago',
  'dimension5': '1607777',
});
ga('send', 'event', 'download-type', get_auth_type(), track_type);

        // Show license panel
        if ((typeof gr !== 'undefined') && gr.auth.me.premium) {
          show_license_hover();
        }

// Track via Freepik Analytics
var tr_search = '';
var user_id = 0;
var exclusive_file = 1;
var target_url = t.href;

if ( (location.href.indexOf('#') != '-1') && (target_url.indexOf('goto=74') != '-1' || (typeof gr !== 'undefined') && gr.auth.me.premium) ) {
  hash = location.href.split('#');
  if (typeof(hash[1]) !== "undefined") tr_search = hash[1] + "&";

// Insert the "term" from the last search in target url
if ((typeof gr !== 'undefined') && !gr.auth.me.premium) {
  var re = /term=([^&]*)/;
  var m;
  if ((m = re.exec(hash[1])) !== null) {
    if (m.index === re.lastIndex) {
      re.lastIndex++;
    }
    target_url += "&term="+m[1];

        // Update the url from final download button
        if (document.getElementById('btn_attr_download'))
          document.getElementById('btn_attr_download').href = target_url;
      }
    }
  }

  if ((typeof gr !== 'undefined') && gr.auth.logged) user_id = gr.auth.me.id;

// Store items in cookies.
if ((typeof user_id !== 'undefined') && user_id) {
  var ck_keyd = 'ck_items_' + user_id;
  var ck_data = getCookie(ck_keyd);
  var ck_items = [];

  if (typeof(ck_data) !== 'undefined' && ck_data) {
    // Si la cookie pesa mas de 2K borrarlo; 2k es igual a 200 items.
    var ck_length = encodeURIComponent(ck_data).length;
    if (ck_length < 2000) ck_items = JSON.parse(ck_data);
  }
  if (ck_items && typeof(ck_items) === 'object') {
    if (typeof(inArray) === 'function' && !inArray(iddfoto, ck_items))  ck_items.push(iddfoto);
    if (ck_items.length > 0) {
      var parts = location.hostname.split('.');
      var sub_domain = parts.shift();
      var main_domain = parts.join('.');
      var cookie_domain = main_domain ? '.' + main_domain : '.freepik.com';
        // Expira en 8 minutos.
        setCookie(ck_keyd, JSON.stringify(ck_items), 480, '/', cookie_domain);
      }
    }
  }

  var trk_img = new Image();
  var trk_img2 = new Image();
  trk_img.onerror = function() {
    trk_img2.src="https://trk.freepik.com/trk-download/utm.gif?" + tr_search + "pg=detalle-english&id=1085509&userid=" + user_id + "&exclusive=" + 1 + "&r=" + Math.random();
    if ((typeof gr !== 'undefined') && gr.auth.me.premium)                     window.location.href = target_url;
  };
  trk_img.onload = function(){
    trk_img2.src="https://trk.freepik.com/trk-download/utm.gif?" + tr_search + "pg=detalle-english&id=1085509&userid=" + user_id + "&exclusive=" + 1 + "&r=" + Math.random();
    if ((typeof gr !== 'undefined') && gr.auth.me.premium)                     window.location.href = target_url;
  };
  trk_img.src="https://trk.freepik.com/download.gif?" + tr_search + "pg=detalle-english&id=1085509&userid=" + user_id + "&exclusive=" + 1 + "&r=" + Math.random();

  return false;
}

function open_modal(event)
{
  if (event && typeof event != "undefined") event.preventDefault();

  if ((typeof gr !== 'undefined') && !gr.auth.me.premium) {
    show_download_modal();
  }
}