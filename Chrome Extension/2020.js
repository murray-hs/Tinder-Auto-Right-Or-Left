//****************************
// If the profiles has no information or details, to me the person is not taking the dating seriously or taking in very light. Script sweep left 
// at the moment is it not variable to change that, but it can be added. empty profile = 0 or 1 
//  
// The Script has a lot Pauses of Random quantity of seconds, to make the script more human like. 
// The Script does not Pauses a lot if the profile will be sweep to the left. 
//   
//****** GlOBAL Variables ****
// debug the code and display some infomation in the console
//  
var DBG_LEVEL_A=1; // 0= do NOT show info  1= show info   
var DBG_LEVEL_B=0; // 0= do NOT show info  1= show info  
var DBG_LEVEL_C=0; // 0= do NOT show info  1= show info  
var DBG_LEVEL_D=0; // 0= do NOT show info  1= show info  
var DBG_LEVEL_E=0; // 0= do NOT show info  1= show info  
var DOC_WRITE  =0; // 0= console  1= document write
var r_n=0; // r_n to st




function changeSize(id) {
    // Change windows size but it is not working 
	var el = document.getElementById(id);
    if (el) {
        el.style.height = "600px";
        el.style.width = "200px";
        el.style.background="powderblue";
    }
}



function hasBlacklistKeywords(bio) {

//  I am thinking to add a setting to check distance. you can see it when it is GlOBAL
//  Tinder Global and Distance < than x miles keep the process 
//                    Distance > than x miles next profile
// 
// <span role="img" aria-label="US">🇺🇸</span>
// <span>1193 miles away</span>
// <div class="Us(t) Va(m) D(ib) My(2px) NetWidth(100%,20px) C($c-secondary)">1193 miles away</div>



if (DBG_LEVEL_C !==0){	console.log('DBG_LEVEL_C= ',DBG_LEVEL_C);
		console.log('*********************************************');
		console.log("%cBio's Info Reading at Blacklist Area","color: Black; font-size: 14px; font-weight:bold ");
		console.log(bio);
		console.log('*********************************************');
}
	//
	// it'll be great to read backlist from local drive. manage list and script update should be easier
	// user do not need to change or update personal blacklist. 
	// 
	const blacklist = [
		'single mom',
		'single dad',
		'single parent',
		'my daughter',
		'my son',
		'sugar baby',
		'sugar dady',
		'sugar dad',
		'ladyboy',
		'lady boy',
		'not a lady',
		'not lady',
		'not a girl',
		'not girl',
		'trans',
		'shemale',
		'instagram',
		'Instagram',
		'inst',
		'inst',
		'Insta',
		'insta',
		'Inst',
		'IG',
		'ig',
		'Snapchat',

	];


if (DBG_LEVEL_E !==0){	console.log('DBG_LEVEL_E= ',DBG_LEVEL_E);

 console.log(blacklist);
 console.log(bio);
 var linea="";  
for ( var j=0; j < bio.length; j++ ) {  
            linea=linea +"-"; }
            console.log(linea);

pause(10000);
}


var hits=0;
for (var i = 0; i < blacklist.length; i++) {
  var re = new RegExp("\\b" + blacklist[i] + "\\b", "g");
  var quant=(bio.match(re) ? bio.match(re).length : 0);
  if(quant!==0){
                hits++;          
                console.log( quant, "EXACT Match/es for " + blacklist[i] );
            } else {    
						// if (DBG_LEVEL_E !==0){	console.log('DBG_LEVEL_E= ',DBG_LEVEL_E);
						//	console.log("No Matches");
						// }
              }
              
}
console.log('Total Found:', hits);
if (hits!==0) {  	
					// console.log ('verdad ',hits);
						return true; 
				} else { 
						return false;
				}

}


function hasValidProfile() {

	
	const bioContainer = document.querySelector('.profileCard .profileContent .profileCard__card .BreakWord');
    const bio = bioContainer;
	if (DBG_LEVEL_C !==0){	console.log('DBG_LEVEL_C= ',DBG_LEVEL_C);
	console.log("%c***bio: " + bio,"color: red; font-size: 14px; font-weight:bold ");
	}	
	
	let nombre ="nada";
	let anio = 0;

	
var i=0;	
var els = document.getElementsByTagName('h1'), i = 0, proname;

for(i; i < els.length; i++) {
    proname = els[i].getAttribute('itemprop');

    if(proname) {
        nombre = els[i].innerHTML;
		break;
    }
}	

	
var i=0;	
var els = document.getElementsByTagName('span'), i = 0, proname;

for(i; i < els.length; i++) {
    proname = els[i].getAttribute('itemprop');

    if(proname) {
        anio = els[i].innerHTML;
        break;
    }
}	

	
	
	
	
	let textContent = ' something '; 
    if(bioContainer !== null && bioContainer !== '') {

		textContent = document.querySelector('.BreakWord').innerText;
		textContent = textContent.replace(/[^\p{L}\p{N}\p{P}\p{Z}]/gu, '');
	} 
	 else {
         textContent = ' Empty Profile  ';
	}



if (DBG_LEVEL_B !==0) { console.log('DBG_LEVEL_B= ', DBG_LEVEL_B);

	console.log('---------------------------------------------');
	console.log('bioContainer: '+bioContainer);
	console.log('************* DEBUG LEVEL A is ON ***********');
	console.log('---------------- BreakWords -----------------');
	console.log(document.querySelector('.BreakWord'));
}	
	
	
	
	console.log("%cName: " + nombre,"color: blue; font-size: 14px; font-weight:bold" ); 
	console.log("%cAge: " + anio ,"color: blue; font-size: 14px; font-weight:bold");
	console.log('-------------- Profile Info------------------');
	console.log(textContent);
	console.log('---------------------------------------------');
	
/*
if (DBG_LEVEL_A !==0) {console.log('DBG_LEVEL_A= ', DBG_LEVEL_A);	

	
};
*/	
	




		
	
/*
				if (greeny()) { 
					console.log('=============== Pause Greeny TRUE');
				}
				else {
					console.log('=============== Pause Greeny FALSE');
				
					// bio=null;
					// bioContainer=null;
					}
				console.log('--------------------------------------------');
				pause(1000);
*/
	
	if (bioContainer === undefined || bioContainer === null) {
         return false;
    } else if (bioContainer.length < 1) {
    
	
	
// black start ******************************************************************************************************
console.log("%c********************  1 - llama black list ","color: red; font-size: 14px; font-weight:bold ");

if (hasBlacklistKeywords()) { 
					console.log('=============== Pause hasBlacklistKeywords TRUE');
				}
				else {
					console.log('=============== Pause hasBlacklistKeywords FALSE');
				

					}
				console.log('--------------------------------------------');
				pause(1000);

console.log("%c******************** sale black list ","color: red; font-size: 14px; font-weight:bold ");

pause(7000);
// back end ******************************************************************************************************


			return true;
    } else {
            
			
			// black start ******************************************************************************************************
console.log("%c2 - Call black list ","color: Black; font-size: 14px; font-weight:bold ");

if (hasBlacklistKeywords(textContent)) { 

					console.log('Black list Keywords %cTRUE =============== ','color: red; font-size: 14px; font-weight:bold' );
				return false;
			
				}
				else {
					
					console.log('Black list Keywords %cFALSE =============== ','color: green; font-size: 14px; font-weight:bold' );
								
								}
								
								
				console.log('--------------------------------------------');
// pause(1000);

console.log("%c2 - Exit black list ","color: Black; font-size: 14px; font-weight:bold ");

let r_n=random_num();
pause(r_n);

// back end ******************************************************************************************************
					
			return true;
    }
}


/* -------------------------- */
// Recently Active green dot I saw it for a while then tinder removed it I couldn't finisht the test
// On Line NOW  I have seen that a couple of times as well. maybe this funtion can help. 
/* 
function greeny(){

const divs = Array.from(document.querySelectorAll('div'))
  const parentClass = 'D(f) Jc(fs) Ai(c) Fld(r) Mb(4px)'
  const childDivClass = 'Sq(8px) Bgc($c-active-indicator-green) Bdrs(50%) Mend(6px) My(4px)'
  const childSpanClass = 'C(#fff) Fz($xs)'
  const childSpanText = 'Recently Active'

    const match = divs.filter(elem => elem.className === parentClass)
    .filter(elem => elem.childElementCount === 2)
    .filter(elem => {
      const firstChild = elem.firstElementChild

      if (firstChild.nodeName !== 'DIV') return false
      return firstChild.className === childDivClass
    })
    .filter(elem => {
      const lastChild = elem.lastElementChild

      if (lastChild.nodeName !== 'SPAN') return false
      return lastChild.className === childSpanClass && lastChild.textContent === childSpanText
    })
    .length >= 1
	

  console.log('*************** Function Match: ' + match);
  return true; 
  }
  
  console.log('*************** Function Greeny:' +greeny());
 // Console.log('Verde Match: ' + match);

function greenyB(){


const pipe = (...funcs) => (initialValue) => funcs.reduce((value, func) => func(value), initialValue)

const hasMatchingValues = (elem, toMatch = {}) =>
  Object.entries(toMatch)
    .every(([key, value]) => elem[key] === value)

const hasMatchingValuesWith = toMatch => elem => hasMatchingValues(elem, toMatch)

const divMatch = elems =>
  elems.filter(
    hasMatchingValuesWith(
     {
        className: 'D(f) Jc(fs) Ai(c) Fld(r) Mb(4px)',
        childElementCount: 2
      }
    )
  )

const firstChildMatch = elems =>
  elems.filter(({ firstElementChild }) =>
    hasMatchingValues(
      firstElementChild, // elements properties to match
      {
        nodeName: 'DIV',
        className: 'Sq(8px) Bgc($c-active-indicator-green) Bdrs(50%) Mend(6px) My(4px)'
      }
    )
  )

const lastChildMatch = elems =>
  elems.filter(({ lastElementChild }) =>
    hasMatchingValues(
      lastElementChild,
      {
        nodeName: 'SPAN',
        className: 'C(#fff) Fz($xs)',
        textContent: 'Recently Active'
      }
    )
  )

const match = pipe(
  divMatch,
  firstChildMatch,
  lastChildMatch
)(Array.from(document.querySelectorAll('div')))

console.dir(match)
}

 */ 


function random_num(){
// randome number between 2 and 8 
r_n = ((Math.random() * 8 | 1) + 2)*1000;
    // document.write('function: '+ r_n,'<BR>');
return r_n;
}

function checkTinder() {


changeSize(`H(100%)`);  // Not Working...

console.log("\n \n \n \n \n \n");	
console.log("******************************************");
console.log("*   Starting Point - reading Main URL    *");	
console.log("******************************************");
	
	const base = "https://tinder.com/";
	return window.location.href.startsWith(base + "app/recs") || window.location.href.startsWith(base + "app/matches");

}

function isMatch() {

	return document.querySelector('a.active');
}

// prevent async execution
function pause(milliseconds) {
	
	// console.log("***  Pausa: " +' ***');
	console.log('%c*** Pause: '+ milliseconds/1000,"color: green; font-size: 14px; font-weight:bold");
	
	
	const dt = new Date();
	while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }

}

function trickTinder() {
	

	
	const infoClassName = 'focus-button-style';
	const nbButtons = document.getElementsByClassName("button").length;
	const buttons = document.getElementsByClassName("button")

	const dislike = nbButtons === 5 ? buttons[1] : buttons[0];
	const like = nbButtons === 5 ? buttons[3] : buttons[2];
	

	// Open profile bio
	
	const info = document.getElementsByClassName(infoClassName)[0];

	if (info) {
		info.click();
	
				if (DBG_LEVEL_E !==0){	console.log('DBG_LEVEL_E= ',DBG_LEVEL_E);
						console.log("%cInfo Click : " + info ,"color: black; font-size: 14px; font-weight:bold ");
						console.log("%cinfoClassName : " + infoClassName ,"color: black; font-size: 14px; font-weight:bold ");
						console.log("%cnbButtons : " + nbButtons ,"color: red; font-size: 14px; font-weight:bold ");
						console.log("%cbuttons : " + buttons ,"color: black; font-size: 14px; font-weight:bold ");
					
					}
}
// pause(1000); 
		if ( nbButtons == 7 ) { 
											
						console.log("%c*** Out of Free Likes ***" , "color: red; font-size: 14px; font-weight:bold ");
				pause(5000);
			process.abort();
			
					return false 
						}
	
	
	if ( nbButtons == 6 ) { 
											
							console.log("%c*** GLOBAL ***  ","color: red; font-size: 14px; font-weight:bold ");
							console.log("%c*** if you want to go global change settings and run the script again","color: red; font-size: 14px; font-weight:bold ");
							pause(5000);
							//process.abort();
							// process.exit();
							throw new Error("Manual Abort Script"); 
							
					return false 
						}
	
	
	if ( nbButtons == 5 ) { 
						
						if (DBG_LEVEL_E !==0){	console.log('DBG_LEVEL_E= ',DBG_LEVEL_E);
								console.log("%cReturn False = " + nbButtons  ,"color: black; font-size: 14px; font-weight:bold "); 
						}


							let espera = ( (Math.random() * 5 | 1) + 0)*1000;
							pause(espera);

						return false 
						}


	// Like or deslike depending on validation
	if (hasValidProfile()) {
		
			console.log("%cYES Valid Profile ","color: green; font-size: 14px; font-weight:bold");
		

// espera = ( (Math.random() * 6 | 1) + 2)*1000;
let r_n=random_num();
pause(r_n);
			
			
				like.click();

		const thereIsMatch = isMatch();
		if (thereIsMatch) {
			console.log('------------- IT\'S A MATCH ! -------------');
			thereIsMatch.click();
		}
	} else {
			console.log("%cNO Valid Profile ","color: red; font-size: 14px; font-weight:bold");
			pause(1000);

		dislike.click();
	}



	// If reached max likes per day then show modal and get it's content...
	// Check if there is any subscription button...
	if (document.getElementsByClassName('productButton__subscriptionButton').length > 0) {
		// We get the counter thing
		const hms = document.getElementsByClassName('Fz($ml)')[0].textContent;
		// Split it at the colons
		const a = hms.split(':');
		// Minutes are worth 60 seconds. Hours are worth 60 minutes. 1 second = 1kmilliseconds.
		// Genius... rocket science...
		const seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2])

		return seconds * 1000;
	}
setTimeout(() => { console.log("ticke tinder 5"); }, 1000);
}

// There is a lot more fun that can be achieved
// Need to add socket puppetry (VPNs solutions? several accounts?) - :D
// TODO: Need to accept automatically permissions except for
// TODO: Need to add ANN for fake pics
// TODO: Need to add RNN for fake messages

function getRandomPeriod() {

	return Math.round(Math.random() * (3000 - 1000)) + 3000;
	setTimeout(() => { console.log("randon 7"); }, 3000);
}

(function loop() {
	
	// A random period between 300ms and 7secs
	let randomPeriod = getRandomPeriod();
	console.log('Random Period: ' +randomPeriod/1000);
	setTimeout(function () {
		randomPeriod = undefined;

		if (checkTinder()) {
			if (DBG_LEVEL_E !==0){	console.log('DBG_LEVEL_E= ',DBG_LEVEL_E); console.log('loop-- CheckTinder'); }
			const delay = trickTinder();

			if (delay) {
				console.log('Too many likes for now, have to wait: ' + delay + ' ms');
				randomPeriod = delay;
			}
		} else if (checkOkCupid()) {
			trickOkCupid();
		}

		if (!randomPeriod) {
			loop();
		} else {
			setTimeout(loop, randomPeriod);
		}
	}, randomPeriod);
}());















