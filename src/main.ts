import { LeadDyno } from "./clients/leaddyno";
import { Gtag } from "./clients/gtag";
import { LuckyOrange } from "./clients/luckyorange";
import { PowrIo } from "./clients/powrio";
import { JQuery } from "./clients/jquery";

const leadDynoClient = new LeadDyno();
const gtagClient = new Gtag();
const luckyOrange = new LuckyOrange();
const powrIo = new PowrIo();
const jquery = new JQuery();

document.addEventListener("DOMContentLoaded", () => {
  leadDynoClient.init();
  gtagClient.init();
  luckyOrange.init();
  powrIo.init();
  jquery.init();
});

// <script>
//   (function() {
//       var first_js = document.getElementsByTagName('script')[0];
//       var js = document.createElement('script');
//       js.src = 'https://static.leaddyno.com/js';
//       js.type = "text/javascript";
//       js.async = true;

//       if (js.addEventListener) { // normal browsers
//           js.addEventListener('load', function() {
//               _ld_init();
//           }, false);
//       } else {
//           js.onreadystatechange = function() { // old IEs
//               if (js.readyState in {loaded: 1, complete: 1}) {
//                   js.onreadystatechange = null;
//                   _ld_init();
//               }
//           };
//       }

//       first_js.parentNode.insertBefore(js, first_js);
//   })();
// </script>

// <div class="powr-chat" id="47c19166_1693585268"></div><script src="https://www.powr.io/powr.js?platform=html"></script>

// <!--Begin: Bike Builder & Tauntaun Choose Your Build-->

// <script
//   src="https://code.jquery.com/jquery-3.7.0.min.js"
//   integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g="
//   crossorigin="anonymous">
// </script>
// <script>

// 	jQuery(function () {
// 		jQuery('.gtr').click(function (e) {
// 			location.href='https://www.theinsideline.ca/bikes/complete-bikes/all-bikes/?mode=grid&limit=24&sort=popular&brand=0&filter%5B%5D='+$("[name=filter1]").val()+'&filter%5B%5D='+$("[name=filter2]").val()+'&filter%5B%5D='+$("[name=filter3]").val()+'&filter%5B%5D='+$("[name=filter4]").val()+'&min=0&max=15000';
// 		});

// 		jQuery('.myButtonBlack2').click(function (e) {
// 		const modeltype = $("[name=selab]").val();
// 		const modelsize = $("[name=selaz]").val();
// 			switch (modeltype) {
//   		case 'comp':
// 			switch (modelsize) {
// 					case 'xs':  idtan = '98757892'; break;
// 					case 's':  idtan = '98757901'; break;
// 					case 'm':  idtan = '98757906'; break;
// 					case 'l':  idtan = '98757907'; break;
// 					case 'xl':  idtan = '98757910'; break;
// 					case 'xxl':  idtan = '98757914'; break;
// 			}
//   	 	break;

//   		case 'pro':
//   				switch (modelsize) {
// 					case 'xs':  idtan = '98757917'; break;
// 					case 's':  idtan = '98757921'; break;
// 					case 'm':  idtan = '98757926'; break;
// 					case 'l':  idtan = '98757939'; break;
// 					case 'xl':  idtan = '98757950'; break;
// 					case 'xxl':  idtan = '98757951'; break;
// 			}

//     	          break;

//   		case 'frame':
//   				switch (modelsize) {
// 					case 'xs':  idtan = '98758317'; break;
// 					case 's':  idtan = '98758319'; break;
// 					case 'm':  idtan = '98758320'; break;
// 					case 'l':  idtan = '98758325'; break;
// 					case 'xl':  idtan = '98758326'; break;
// 					case 'xxl':  idtan = '98758323'; break;
// 			}

//     	break;

// 		}

// 			location.href='https://www.theinsideline.ca/tauntaun-v2-carbonite.html?id='+idtan+'&quantity=1';
// 		});
// 	});
// </script>
// <!--End: Bike Builder & Tauntaun Choose Your Build-->
