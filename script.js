//SETUP
//Variables - Export into some sort of database - todo

//blitz cards filenames
var blitzCards = ["Blitz 1","Blitz 2","Blitz 3","Blitz 4","Blitz 5", "Blitz 6","Blitz 7","Blitz 8","Blitz 9","Blitz 10"];
var blitzColors = ["Blue", "Gold", "Green", "Red"];
//Include multiples if multiple in set
//deployment card sets
var coreImpBelow6Standard = ["ProbeDroid","ProbeDroid","Stormtrooper","Stormtrooper","ImpOfficer","ImpOfficer","EWebEngi","ELImpOfficer","ELProbeDroid"];
var coreImp6_8Standard = ["RoyalGuard","ELEWebEngi"];
var coreImp8_12Standard = ["ELStormtrooper","ELRoyalGuard"];
var coreImpNonUnique12Up = ["AT-ST"];
var coreScumBelow6Standard = ["Nexu", "ELNexu"];
var coreScum6_8Standard = ["TrandoshanHunter"];
var coreScum8_12Standard = ["ELTrandoshanHunter"];
var coreScumNonUnique12Up = [];
var coreCheckList = ["ELIG88","DarthVader","ELGeneralWeiss","ELRoyalGuardChamp","ELRoyalGuard","AT-ST","Nexu","ELNexu","TrandoshanHunter","ELTrandoshanHunter","ProbeDroid","RoyalGuard","Stormtrooper","ELEWebEngi","ImpOfficer","ELStormtrooper","EWebEngi","ELImpOfficer","ELProbeDroid"]
var expac6Below = ["HiredGuns", "ELHiredGuns", "ISBInfiltrators","Stormtrooper"];
var expac6_8 = ["ELISBInfiltrators"];
var expac8_12 = ["ELBanthaRider"];
//AVP Pack deploycards
var Stormtroopers = ["Stormtrooper", "ELStormtrooper"];
var ISBInfiltrators = ["ISBInfiltrators", "ELISBInfiltrators"];
var HiredGuns = ["HiredGuns","ELHiredGuns"];
var BanthaRider = ["ELBanthaRider"];
//Character Skills
var Diala = ["Force Adept (1)","Force Throw (1)","Battle Meditation (2)","Defensive Stance (2)","Art of Movement (3)","Snap Kick (3)", "Dancing Weapon (4)","Way of the Sarlacc (4)"];
var Fenn = ["Tactile Movement (1)","Take Cover (1)","Adrenaline Rush (2)","Weapon Expert (2)", "Suppressive Fire (3)","Trench Fighter (3)","Rebel Elite (4)","Superior Positioning (4)"];
var Gaarkhan = ["Wookiee Fortitude (1)","Wookiee Loyalty (1)","Ferocity (2)","Staggering Blow (2)","Vicious Strike (3)","Rampage (3)","Unstoppable (4)","Brutal Cleave (4)"];
var Gideon = ["Called Shot (1)","Military Efficiency (1)", "Air of Command (2)","Mobile Tactician (2)","For the Cause! (3)", "Rallying Shout (3)","Hammer and Anvil (4)","Master Stroke (4)",];
var Jyn = ["Quick as a Whip (1)","Smuggler's Luck (1)","Cheap Shot (2)", "Roll with It (2)","Get Cocky (3)","Gunslinger (3)", "Sidewinder (4)","Trick Shot (4)"];
var Mak = ["Disenage (1)","Supply Network (1)","Jeswandi Training (2)", "Target Acquired (2)","Execute (3)", "Expertise (3)","Decoy (4)","No Escape (4)"];
var Biv = ["Advance (1)","Shake it Off (1)","Crushing Blow (2)", "Into the Fray (2)", "Trophy Armor (3)","Vibrobayonet (3)","Final Stand (4)", "Stay Down (4)"];
var Saska = ["Tool Kit (1)","Unstable Device (1)", "Energy Shield (2)","Structural Weakness (2)","Gadgeteer (3)", "Power Converter (3)","Adrenaline Injector (4)", "Remote Distribution (4)"];
var Loku = ["Combat Spotter (1)", "Scouting Report (1)","Overwatch (2)","Spectrum Scanner (2)","Scout's Guidance (3)","Study of Enemies (3)","Coordinated Attack (4)","Mon Cala Special Forces (4)"];
var MHD = ["Bacta Injector (1)","Improper Procedure (1)","Field Surgeon (2)", "Fuel Injection (2)","Adrenal Vapor (3)", "Miracle Worker (3)","Bacta Radiator (4)","Combat Override (4)"];
var Verena = ["Combat Momentum (1)","Create Opening (1)","K'tara Maneuver (2)","Student of Battle (2)","Point Blank Shot (3)","Improvised Cover (3)", "Master Operative (4)","Combat Mastery (4)"];
var Davith = ["Covert Operative (1)","Elusive Agent (1)","Blindside (2)","Falling Leaf (2)", "Force Illusion (3)", "Shrouded Lightsaber (3)","Fell Swoop (4)", "Embody the Force (4)"];
var Murne = ["Company of Heroes (1)", "Sonic Bellow (1)", "Rebel Propaganda (2)", "Professional Aide (2)", "Solidarity (3)", "Double Agent (3)","Waylay (4)", "Leady from the Front (4)"];
var StarterWeapons = ["Plasteel Staff","Infantry Rifle","Vibro-Ax","Holdout Blaster","Vintage Blaster","Longblaster","Repeating Blaster","Modified Blaster","All-Weather Rifle","Sidearm Blaster","Fighting Knife"," Military Dagger","Heirloom Dagger","Diplomat's Blaster"];
var rewardWeapons = ["Shrouded Lightsaber","Shu Yen's Lightsaber"];
var tierOneWeapons = ["Armored Gauntlets","DH-17","DL-44","E-11","Vibroblade"];
var tierTwoWeapons = ["434 'Deathhammer'", "A280","BD-1 Vibro-Ax","T-21","Vibro Knuckles"]
var tierThreeWeapons = ["DXR-6","Force Pike","Pulse Cannon","Sporting Blaster"];
var expTSWeapons = ["Gaffi Stick","Tatoonie Hunting Rifle","EE-3 Carbine","DLT-19"];
var expRTSWeapons = ["DDC Defender","Vibroknife", "Stun Baton","Valken-38 Carbine"];
var expTBGWeapons = ["Vibrosword","Disruptor Pistol"];
var totalWeapons = [];
var rewardArmor = ["Shadow Suit"];
var tierOneArmor = ["Combat Coat"];
var tierTwoArmor = ["Laminate Armor"];
var characterArmor = ["Trophy Armor"];
var expRTHArmor = ["Environment Hazard Suit"];
var expTBGArmor = ["Shadowsilk Cloak"];
var totalArmor = [];
var starterEquip = ["Spectrum Scanner"];
var rewardEquip = ["Adrenal Implant"];
var tierOneEquip = ["Portable Medkit", "Survival Gear"];
var tierTwoEquip = ["Extra Ammunition", "Slicing Tools"];
var tierThreeEquip = ["Combat Knife", "Combat Visor", "Personal Shields", "Reinforced Helmet"];
var expTSEquip = ["Tech Goggles", "Hidden Blade"];
var expRTHEquip = ["Systems Upgrade", "Cybernetic Arm", "Concussion Grenades"];
var expTBGEquip = ["Cam Droid", "Radiant Holocron", "R5 Astromech"];
var totalEquip = [];
//THREAT COUNTER
var threatCounterInt = 0;
//INFLUENCE Counter
var influenceCounterInt = 0;
//Player Exp
var playerOneExp = 0;
var playerTwoExp = 0;
var playerThreeExp = 0;
var playerFourExp = 0;
//current mission
var currentMission = "";
//0 is showing front, 1 is showing back
var missionFace = 0;

//Difficulty Settings
//deployment threat level (starts at 2)
//2-6below; 3-8below; 4-12below; 5+ -all non-unique
var deploymentDiff = 2;

//Where file path to mission images are
var currentMissionPath = "";

//New deck
//Load first, then call durstenfeld shuffle
var deck = [];
//Used when resetting deck to draw
var savedBlitzDeck = [];

//DECK SHUFFLE

//BLITZ DECK MANAGEMENT
//Starting number of cards
var blitzCardsInt = 2;

function randomCardNumberDraw(min,max){
	//param min: minimum number to random draw from
	//type min: integer
	//param max: maximum number to random draw from
	//type max: integer
	//returns: returns a randomized integer
	return Math.floor(Math.random()*(max-min+1)+min);
}

//DEPLOYMENT DECK MANAGEMENT
var deployDeck = [];
//Copy of shuffled deploy Deck
//Use when resetting deck to draw
var savedDeployDeck = [];
var blitzCardsDeckClone = [];

//ON PAGE LOAD FUNCTIONS
function pageLoad(){
	//Everything that must be loaded upon page load
	deployDeck = deployDeck.concat(coreImpBelow6Standard);
	deployDeck = deployDeck.concat(coreScumBelow6Standard);
	savedDeployDeck = deployDeck.slice(0);
	deployDeck = shuffleArray(deployDeck.slice(0));
	//clone deployment deck and save it to saved blitz deck
	document.getElementById('deployDiffInt').innerHTML = deploymentDiff;
	//load skills
	selectPOne();
	selectPTwo();
	selectPThree();
	selectPFour();
	
	combineAllLoadouts();
	
	//Populates loadouts dynamically
	populateLoadouts();
	
	//BLITZ CARD ON LOAD SECTION
	//Randomly pick Blitz Cards
	//To current blitz level
	//clone blitz card's deck to shuffle and POP
	blitzCardsDeckClone = shuffleArray(blitzCards.slice(0));
	
	for (var i=0, len=blitzCardsInt; i<blitzCardsInt; i++){
	//10 cards to pick from, randomly picks one
		deck.push(blitzCardsDeckClone.pop());
	}


	//Load up blitz color focus cards
	for (var i=0; i<blitzColors.length; i++){
		for (var j=1; j<7; j++){
			deck.push(String(blitzColors[i]) + " " + String(j));
		}
	}
	deck = shuffleArray(deck.slice(0));
	//clone deck and save it to saved blitz deck
	savedBlitzDeck = deck.slice(0);
	//HIDING DEBUG OUTPUT
	//document.getElementById('demo').innerHTML = deck;
	document.getElementById('blitzLevelIntText').innerHTML = blitzCardsInt;
	
	//END BLITZ CARD ON LOAD SECTION
	//
	//
	
}

//END VAR SETUP
//
//
//HELPER FUNCTIONS
//Durstenfeld shuffle
//ALWAYS CLONE!!!!!! array = array.slice(0)
//Somehow losing first and last index if not using clone.
function shuffleArray(array) {
	//param array: array to be shuffled
	//type array: array
	//returns: returns a shuffled array, the original is changed, so clone if needed
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}

//adding image function
//GENERIC TEMPLATE!!! MODIFY AS NEEDED
function show_image(src, width, height, alt) {
	//param src: file path of image source
	//type src: string
	//param width: width of image to be shown
	//type width: integer
	//param height: height of image to be shown
	//type height: integer
	//param alt: alternative text for image
	//type alt: string
	//returns: appends an image element in the body, this creates a new element
	var img = document.createElement("img");
	img.src = src;
	img.width = width;
	img.height = height;
	img.alt = alt;

	// This next line will just add it to the <body> tag
	document.body.appendChild(img);
}

//DEPLOYMENT CARDS ONLY!!!
function addDeployCard(src, width, height, alt) {
	//param src: file path of image source
	//type src: string
	//param width: width of image to be shown
	//type width: integer
	//param height: height of image to be shown
	//type height: integer
	//param alt: alternative text for image
	//type alt: string
	//returns: appends an image element in the deployment Div, this creates a new element
	var img = document.createElement("img");
	img.src = src;
	img.width = width;
	img.height = height;
	img.alt = alt;

	// This next line will just add it to the <body> tag
	document.getElementById('deployImgDiv').appendChild(img);
}

function replace_image(src, width, height, alt, pageID) {
	//param src: file path of image source
	//type src: string
	//param width: width of image to be shown
	//type width: integer
	//param height: height of image to be shown
	//type height: integer
	//param alt: alternative text for image
	//type alt: string
	//param pageID: element ID of the image to be modified
	//type pageID: string
	//returns: replaces an image element with a new image. Used for dynamic images
	img = document.getElementById(String(pageID));
	img.src = src;
	img.width = width;
	img.height = height;
	img.alt = alt;

}

function clearBox(elementID) {
	//param elementID: element id to be cleared
	//type elementID: string
	//returns: clears out the selected elementID
	document.getElementById(elementID).innerHTML = "";
}
//END HELPER FUNCTIONS

//MAIN BODY
//
//THREAT COUNTER SECTION
//
function threatCounterInc(){
	//Did not know javascript takes +=, too late now.
	//returns: increases the threat counter integer, changes color as necessary
	if (threatCounterInt < 20) {
		threatCounterInt = threatCounterInt + 1;
	}
	document.getElementById('threatCounterIntText').innerHTML = threatCounterInt;
	setTextColorByValue(threatCounterInt, 'threatCounterIntText');
}	

function threatCounterDec(){
	//Did not know javascript takes +=, too late now.
	//returns: decreases the threat counter integer, changes color as necessary
	if (threatCounterInt > 0) {
		threatCounterInt = threatCounterInt - 1;
	}
	document.getElementById('threatCounterIntText').innerHTML = threatCounterInt;	
	setTextColorByValue(threatCounterInt, 'threatCounterIntText');
}

//INFLUENCE COUNTER SECTION
//

function influenceCounterInc(){
	//Did not know javascript takes +=, too late now.
	//returns: increases the influence counter integer, changes color as necessary
	if (influenceCounterInt < 20) {
		influenceCounterInt = influenceCounterInt + 1;
	}
	document.getElementById('influenceCounterIntText').innerHTML = influenceCounterInt;
	setTextColorByValue(influenceCounterInt, 'influenceCounterIntText');
}

function influenceCounterDec(){
	//Did not know javascript takes +=, too late now.
	//returns: decreases the influence counter integer, changes color as necessary
	if (influenceCounterInt > 0) {
		influenceCounterInt = influenceCounterInt - 1;
	}
	document.getElementById('influenceCounterIntText').innerHTML = influenceCounterInt;	
	setTextColorByValue(influenceCounterInt, 'influenceCounterIntText');
}

//Text color setting
function setTextColorByValue(value, objid){
	//param value: value to be checked against a color
	//type value: integer
	//param objid: element ID to be color changed
	//type objid: string
	//returns: changes the color of objid based on value
	if (value > 14){
		document.getElementById(objid).style.color = "rgb(204, 0, 0)";
	}
	
	if (value > 12 && value < 14) {
		document.getElementById(objid).style.color = "rgb(204, 102, 0)";
	}
	
	if (value > 9 && value < 11) {
		document.getElementById(objid).style.color = "rgb(204, 204, 0)";
	}
	
	if (value > 6 && value < 8) {
		document.getElementById(objid).style.color = "rgb(153, 204, 0)";
	}
	
	if (value > 3 && value < 5){
		document.getElementById(objid).style.color = "rgb(51, 204, 0)";
	}
	
	//Green
	if (value > 0 && value < 2){
		document.getElementById(objid).style.color = "rgb(0, 204, 0)";
	}
}

//MISSION SELECTION RADIO BUTTONS
//
var missionCardWidth = 335;
var missionCardHeight = 523;
function missionCoreSelect(){
	//returns: checks for selected mission, and replaces mission image with select mission (used for core missions)
	//Also adds eventListener to flip mission image
	for (var i=0, len=missionOptions.length; i<len; i++){
		if (missionOptions[i].type === 'radio'){
			if (missionOptions[i].checked){
				currentMission = missionOptions[i].value;
				currentMissionPath = "Core";
				replace_image("files/Mission/Core/" + missionOptions[i].value + "Front.jpg", missionCardWidth, missionCardHeight, "Mission Front", "missionFront");
				document.getElementById("missionFront").addEventListenter("click", missionFlip);
			}
		}
	}
	closeMissionModal();

}

function missionExpacSelect(){
	//returns: checks for selected mission, and replaces mission image with select mission (used for none core missions)
	//Also adds eventListener to flip mission image
	for (var i=0, len=expMissionOptions.length; i<len; i++){
		if (expMissionOptions[i].type === 'radio'){
			if (expMissionOptions[i].checked){
				currentMission = expMissionOptions[i].value;
				currentMissionPath = "Expansions";
				replace_image("files/Mission/Expansions/" + expMissionOptions[i].value + "Front.jpg", missionCardWidth, missionCardHeight, "Mission Front", "missionFront");
				document.getElementById("missionFront").addEventListenter("click", missionFlip);
			}
		}
	}
	closeMissionModal();

}

function missionExpacBoxSelect(){
	//returns: checks for selected mission, and replaces mission image with select mission (used for expansion box missions)
	//sets current misison path for flipping function. Also adds eventListener to flip mission image
	for (var i=0, len=expStoryForm.length; i<len; i++){
		if (expStoryForm[i].type === 'radio'){
			if (expStoryForm[i].checked){
				currentMission = expStoryForm[i].value;
				if (expStoryForm[i].name == "Twin"){
					currentMissionPath = "Twin Shadows";
				}
				else if (expStoryForm[i].name == "Bespin"){
					currentMissionPath = "The Bespin Gambit";
				}
				else {
					currentMissionPath = "Return to Hoth";
				}
				replace_image("files/Mission/" + currentMissionPath + "/" + expStoryForm[i].value + "Front.jpg", missionCardWidth, missionCardHeight, "Mission Front", "missionFront");
				document.getElementById("missionFront").addEventListenter("click", missionFlip);
			}
		}
	}

}

function missionExpacSideSelect(){
	//returns: checks for selected mission, and replaces mission image with select mission (used for expansion box side missions)
	//Also adds eventListener to flip mission image
	for (var i=0, len=expSideForm.length; i<len; i++){
		if (expSideForm[i].type === 'radio'){
			if (expSideForm[i].checked){
				currentMission = expSideForm[i].value;
				if (expSideForm[i].name == "Twin"){
					currentMissionPath = "Twin Shadows";
				}
				else if (expSideForm[i].name == "Bespin"){
					currentMissionPath = "The Bespin Gambit";
				}
				else{
					currentMissionPath = "Return to Hoth";
				}
				replace_image("files/Mission/" + currentMissionPath + "/" + expSideForm[i].value + "Front.jpg", missionCardWidth, missionCardHeight, "Mission Front", "missionFront");
				document.getElementById("missionFront").addEventListenter("click", missionFlip);
			}
		}
	}

}

function missionCoreFlip(){
	//returns: flips the current displayed core mission card image
	if (missionFace == 0){
		replace_image("files/Mission/Core/" + currentMission + "Back.jpg", missionCardWidth, missionCardHeight, "Mission Back", "missionFront");
		missionFace = 1;
	}
	else{
		replace_image("files/Mission/Core/" + currentMission + "Front.jpg", missionCardWidth, missionCardHeight, "Mission Front", "missionFront");
		missionFace = 0;
	}
	
}

function missionFlip(){
	//returns: flips the current displayed mission card image based on currentMissionPath
	if (missionFace == 0){
		replace_image("files/Mission/" + currentMissionPath + "/" + currentMission + "Back.jpg", missionCardWidth, missionCardHeight, "Mission Back", "missionFront");
		missionFace = 1;
	}
	else{
		replace_image("files/Mission/" + currentMissionPath + "/" + currentMission + "Front.jpg", missionCardWidth, missionCardHeight, "Mission Front", "missionFront");
		missionFace = 0;
	}
	
}

//CHECK IF IN ARRAY 
function isInArray(value, array) {
	//param value: value to be checked
	//type value: any type
	//param array: array to be evalutated
	//type array: array
	//returns: returns boolean
	return array.indexOf(value) > -1;
}

//DEPLOYMENT SECTION
//responds to deployment display click
function displayDeploymentCards(){
	//return: displays top deployment card from the deck
	//top card is popped from list
	//checks to see if there is something left in deck
	if (deployDeck[0]){
		var poppedItem = String(deployDeck.pop());
		var imgSrc = "";
		if (coreCheckList.indexOf(poppedItem) != -1) {
			imgSrc = "files/Deployment/Core/" + poppedItem + ".jpg";
		}
		else {
			imgSrc = "files/Deployment/Exp/" + poppedItem + ".jpg";
		}
		//HIDING LINE USED FOR DEBUGGING
		//document.getElementById('demo2').innerHTML = deployDeck;
		addDeployCard(imgSrc, 335, 523, imgSrc);
		document.getElementById('deployShuffleStatus').innerHTML = "";
	}
}

//reshuffles deployment cards using saved copy
function shuffleDeploymentCards(){
	//returns: shuffles deployment cards, and adds in any checked new deployment cards
	savedDeployDeck = shuffleArray(savedDeployDeck.slice(0));
	deployDeck = savedDeployDeck.slice(0);
	//add extras
	checkAndAddUniques();
	checkAndAddExpac();
	//reshuffle
	deployDeck = shuffleArray(deployDeck.slice(0));
	//HIDING LINE FOR DEBUGGING
	//document.getElementById('demo2').innerHTML = deployDeck;
	document.getElementById('deployShuffleStatus').innerHTML = "Deployment Cards Shuffled!";
	clearBox("deployImgDiv");
}

//increase deployment difficulty
//calls reshuffle and adds required cards
function deploymentInc(){
	//returns: increases deployment difficulty integer, and displays the new integer
	deploymentDiff = deploymentDiff + 1;
	readjustDiff();
	document.getElementById('deployDiffInt').innerHTML = deploymentDiff;
	//HIDING LINE FOR DEBUGGING
	//document.getElementById('demo2').innerHTML = deployDeck;
}

//decrease deployment difficulty
//calls reshuffle and adds required cards
function deploymentDec(){
	//returns: decreases deployment difficulty integer, and displays the new integer
	if (deploymentDiff > 2){
		deploymentDiff = deploymentDiff - 1 ;
		readjustDiff();
		document.getElementById('deployDiffInt').innerHTML = deploymentDiff;
		//HIDING LINE FOR DEBUGGING
		//document.getElementById('demo2').innerHTML = deployDeck;
	}
}

function readjustDiff(){
	//returns: readjusts the cards in the deployment deck through concating from core card lists
	if (deploymentDiff >= 2) {
		//reset deployDeck
		deployDeck = [];
		deployDeck = deployDeck.concat(coreImpBelow6Standard);
		deployDeck = deployDeck.concat(coreScumBelow6Standard);
		addDeployNonCore2Threat();
	}
	
	if (deploymentDiff >= 3){
		deployDeck = deployDeck.concat(coreImp6_8Standard);
		deployDeck = deployDeck.concat(coreScum6_8Standard);
		addDeployNonCore3Threat();
	
	
	}
	
	if (deploymentDiff >= 4){
		deployDeck = deployDeck.concat(coreImp8_12Standard);
		deployDeck = deployDeck.concat(coreScum8_12Standard);
		addDeployNonCore4Threat();
	
	
	}
	
	//5 is max
	if (deploymentDiff >= 5){
		deployDeck = deployDeck.concat(coreImpNonUnique12Up);
		deployDeck = deployDeck.concat(coreScumNonUnique12Up);
		addDeployNonCore5Threat();
	
	
	}
	
	deployDeck = shuffleArray(deployDeck);
	savedDeployDeck = deployDeck.slice(0);
	
}

function checkAndAddExpac(){
	//returns: checks the checkboxes for any added AVP expansions and pushes it into the deployment deck
	for (var i=0, len=expacoptions.length; i<len; i++){
		if (expacoptions[i].type === 'checkbox'){
			if (expacoptions[i].checked){
				if (deploymentDiff > 1){
					switch (expacoptions[i].value) {
						case "Stormtrooper":
							deployDeck.push("Stormtrooper");
							break;
						
						case "HiredGun":
							deployDeck.push("HiredGun");
							deployDeck.push("ELHiredGun");
							break;
							
						case "ISBInfiltrator":
							deployDeck.push("ISBInfiltrator");
							break;
					}
				}
				if (deploymentDiff > 2){
					switch (expacoptions[i].value) {
						case "Stormtrooper":
							deployDeck.push("Stormtrooper");
							break;
						
						case "HiredGun":
							deployDeck.push("HiredGun");
							deployDeck.push("ELHiredGun");
							break;
							
						case "ISBInfiltrator":
							deployDeck.push("ISBInfiltrator");
							deployDeck.push("ELISBInfiltrator");
							break;
					}
				}
				if (deploymentDiff > 4){
					switch (expacoptions[i].value) {
						case "Stormtrooper":
							deployDeck.push("Stormtrooper");
							deployDeck.push("ELStormtrooper");
							break;
						
						case "HiredGun":
							deployDeck.push("HiredGun");
							deployDeck.push("ELHiredGun");
							break;
							
						case "ISBInfiltrator":
							deployDeck.push("ISBInfiltrator");
							deployDeck.push("ELISBInfiltrator");
							break;
							
						case "BanthaRider":
							deployDeck.push("ELBanthaRider");
							break;
					}
				}
				
			}
		}
	}
}

//Add expacs 2 threat deployment cards
function addDeployNonCore2Threat(){
	//returns: pushes in additional deployment cards from AVP expansions checkboxes
	for (var i=0, len=expacoptions.length; i<len; i++) {
		if ( expacoptions[i].type === 'checkbox' ) {
			if (expacoptions[i].checked) {
				//Have to use Switch since can't assign Array as a value to checkbox, WHY NOT?!?!?!
				if (expacoptions[i].value == "Stormtroopers") {
						//for item in array IS VERY BAD TO USE IN JS!!!
						for (var j=0; j<Stormtroopers.length; j++){
							if (isInArray(Stormtroopers[j].value,expac6Below)){
								deployDeck.push(Stormtroopers[j].value);
							}
						}
				}
				else if (expacoptions[i].value == "HiredGuns") {
						//for item in array IS VERY BAD TO USE IN JS!!!
						for (var j=0; j<HiredGuns.length; j++){
							if (isInArray(HiredGuns[j].value,expac6Below)){
								deployDeck.push(HiredGuns[j].value);
							}
						}
				}
				else if (expacoptions[i].value == "ISBInfiltrators") {
						//for item in array IS VERY BAD TO USE IN JS!!!
						for (var j=0; j<ISBInfiltrators.length; j++){
							if (isInArray(ISBInfiltrators[j].value,expac6Below)){
								deployDeck.push(ISBInfiltrators[j].value);
							}
						}
				}
				else {
				}
					//I KNOW banthas are not 6 so no need for it here
				
			}
		}
	}

}

//Adds expacs 3 threat deployment cards
function addDeployNonCore3Threat(){


}

function addDeployNonCore4Threat(){

}

function addDeployNonCore5Threat(){

}

//
//END DEPLOYMENT SECTION
//

//
//BEGIN BLITZ/AUTOMATED EMPEROR SECTION
//

function displayBlitzCards(){
	//returns: checks to see if there is something left in blitz deck
	//if so, top card is popped and displayed
	if (deck[0]){
		var poppedItem = String(deck.pop());
		var imgSrc = "files/AE/" + poppedItem + ".jpg";
		//HIDING DISPLAY LINE FOR DEBUG
		//document.getElementById('demo').innerHTML = deck;
		replace_image(imgSrc, 335, 523, imgSrc, "currentBlitzImg");
		document.getElementById('blitzShuffleStatus').innerHTML = "";
	}
}

function shuffleBlitzCards(){
	//returns: reshuffles deployment cards using a saved copy
	savedBlitzDeck = shuffleArray(savedBlitzDeck);
	deck = savedBlitzDeck.slice(0);
	//HIDING LINE USED FOR DEBUG
	//document.getElementById('demo').innerHTML = deck;
	document.getElementById('blitzShuffleStatus').innerHTML = "AE cards Shuffled!";
}

function blitzInc(){
	//returns: increases the blitz threat level
	//Did not know javascript takes +=, too late now.
	if (blitzCardsInt < 10) {
		blitzCardsInt = blitzCardsInt + 1;
		blitzReadjust();
	}
	document.getElementById('blitzLevelIntText').innerHTML = blitzCardsInt;			
}

function blitzDec(){
	//returns: decrease the blitz threat level
	//Did not know javascript takes +=, too late now.
	if (blitzCardsInt > 2){
		blitzCardsInt = blitzCardsInt - 1;
		blitzReadjust();
	}
	document.getElementById('blitzLevelIntText').innerHTML = blitzCardsInt;
}

function blitzReadjust(){
	//First, clear deck
	deck = [];
	//reshuffle blitzCardsDeckClone
	//reset + shuffle then pop from it to ensure random draw
	blitzCardsDeckClone = [];
	//must clone with .slice(0)
	//shufflearray modifies original and messes up somehow.
	blitzCardsDeckClone = shuffleArray(blitzCards.slice(0));
	//push in cards as needed
	for (var i=0; i<blitzCardsInt; i++){
	//10 cards to pick from, randomly picks one
		deck.push(blitzCardsDeckClone.pop());

	}


	//Load up blitz color focus cards; always same amount
	for (var i=0; i<blitzColors.length; i++){
		for (var j=1; j<7; j++){
			deck.push(String(blitzColors[i]) + " " + String(j));
		}
	}
	deck = shuffleArray(deck);
	//clone deck and save it to saved blitz deck
	//reset savedBlitzDeck before reusing
	savedBlitzDeck = [];
	savedBlitzDeck = deck.slice(0);
}

//END BLITZ/AUTOMATED EMPEROR SECTION

//UNIQUES SECTION BEGIN
//
function checkAndAddUniques() {
	for (var i=0, len=uniqueOptions.length; i<len; i++){
		if (uniqueOptions[i].type === 'checkbox'){
			if (uniqueOptions[i].checked){
				deployDeck.push(uniqueOptions[i].value);
			}
		}
	}
	
}

//UNIQUES SECTION END
//

//BEGIN IMPERIAL CLASS SECTION
//
//
//for loop doesn't work, wtf. Maybe due to replace_image() needs tag
function MMsel(){
	document.getElementById('selImpClass').innerHTML = "Military Might";
	replace_image("files/ImpClass/MM1.jpg", 298, 430, "MM", "IC1");
	replace_image("files/ImpClass/MM2.jpg", 298, 430, "MM", "IC2");
	replace_image("files/ImpClass/MM3.jpg", 298, 430, "MM", "IC3");
	replace_image("files/ImpClass/MM4.jpg", 298, 430, "MM", "IC4");
	replace_image("files/ImpClass/MM5.jpg", 298, 430, "MM", "IC5");
	replace_image("files/ImpClass/MM6.jpg", 298, 430, "MM", "IC6");
	replace_image("files/ImpClass/MM7.jpg", 298, 430, "MM", "IC7");
	replace_image("files/ImpClass/MM8.jpg", 298, 430, "MM", "IC8");
	replace_image("files/ImpClass/MM9.jpg", 298, 430, "MM", "IC9");
}

function STsel(){
	document.getElementById('selImpClass').innerHTML = "Subversive Tactics";
	replace_image("files/ImpClass/ST1.jpg", 298, 430, "ST", "IC1");
	replace_image("files/ImpClass/ST2.jpg", 298, 430, "ST", "IC2");
	replace_image("files/ImpClass/ST3.jpg", 298, 430, "ST", "IC3");
	replace_image("files/ImpClass/ST4.jpg", 298, 430, "ST", "IC4");
	replace_image("files/ImpClass/ST5.jpg", 298, 430, "ST", "IC5");
	replace_image("files/ImpClass/ST6.jpg", 298, 430, "ST", "IC6");
	replace_image("files/ImpClass/ST7.jpg", 298, 430, "ST", "IC7");
	replace_image("files/ImpClass/ST8.jpg", 298, 430, "ST", "IC8");
	replace_image("files/ImpClass/ST9.jpg", 298, 430, "ST", "IC9");
	
}

function TSsel(){
	document.getElementById('selImpClass').innerHTML = "Technological Superiority";
	replace_image("files/ImpClass/TS1.jpg", 298, 430, "TS", "IC1");
	replace_image("files/ImpClass/TS2.jpg", 298, 430, "TS", "IC2");
	replace_image("files/ImpClass/TS3.jpg", 298, 430, "TS", "IC3");
	replace_image("files/ImpClass/TS4.jpg", 298, 430, "TS", "IC4");
	replace_image("files/ImpClass/TS5.jpg", 298, 430, "TS", "IC5");
	replace_image("files/ImpClass/TS6.jpg", 298, 430, "TS", "IC6");
	replace_image("files/ImpClass/TS7.jpg", 298, 430, "TS", "IC7");
	replace_image("files/ImpClass/TS8.jpg", 298, 430, "TS", "IC8");
	replace_image("files/ImpClass/TS9.jpg", 298, 430, "TS", "IC9");
}

//
//END IMPERIAL CLASS SECTION
//


//MODAL SECTION BEGIN
//

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

//END MODAL SECTION
//

//Loadout Modal
var loadoutModal = document.getElementById('loadoutModal');

// Get the button that opens the modal
var loadoutBtn = document.getElementById("loadoutBtn");

// Get the <span> element that closes the modal
var loadoutSpan = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal 
loadoutBtn.onclick = function() {
	loadoutModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
loadoutSpan.onclick = function() {
	loadoutModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == loadoutModal) {
		loadoutModal.style.display = "none";
	}
}

//Loadout Logic
//Player Exp

function playerOneExpInc(){
	//Did not know javascript takes +=, too late now.
	playerOneExp = playerOneExp + 1;
	document.getElementById('playerOneExp').innerHTML = playerOneExp;			
}

function playerOneExpDec(){
	//Did not know javascript takes +=, too late now.
	if (playerOneExp > 0){
		playerOneExp = playerOneExp - 1;
	}
	document.getElementById('playerOneExp').innerHTML = playerOneExp;
}

function playerTwoExpInc(){
	//Did not know javascript takes +=, too late now.
	playerTwoExp = playerTwoExp + 1;
	document.getElementById('playerTwoExp').innerHTML = playerTwoExp;			
}

function playerTwoExpDec(){
	//Did not know javascript takes +=, too late now.
	if (playerTwoExp > 0){
		playerTwoExp = playerTwoExp - 1;
	}
	document.getElementById('playerTwoExp').innerHTML = playerTwoExp;
}

function playerThreeExpInc(){
	//Did not know javascript takes +=, too late now.
	playerThreeExp = playerThreeExp + 1;
	document.getElementById('playerThreeExp').innerHTML = playerThreeExp;			
}

function playerThreeExpDec(){
	//Did not know javascript takes +=, too late now.
	if (playerThreeExp > 0){
		playerThreeExp = playerThreeExp - 1;
	}
	document.getElementById('playerThreeExp').innerHTML = playerThreeExp;
}

function playerFourExpInc(){
	//Did not know javascript takes +=, too late now.
	playerFourExp = playerFourExp + 1;
	document.getElementById('playerFourExp').innerHTML = playerFourExp;			
}

function playerFourExpDec(){
	//Did not know javascript takes +=, too late now.
	if (playerFourExp > 0){
		playerFourExp = playerFourExp - 1;
	}
	document.getElementById('playerFourExp').innerHTML = playerFourExp;
}

//END PLAYER EXP

//Helper to find which list for skills
function selectedChar(character){
//param character: selected character from drop down
//type character: string
//returns a list of character skills
	switch(character) {
		case "Diala":
			return Diala;
			break;
		case "Fenn":
			return Fenn;
			break;
		case "Gaarkhan":
			return Gaarkhan;
			break;
		case "Gideon":
			return Gideon;
			break;
		case "Jyn":
			return Jyn;
			break;
		case "Mak":
			return Mak;
			break;
		case "Biv":
			return Biv;
			break;
		case "Saska":
			return Saska;
			break;
		case "Loku":
			return Loku;
			break;
		case "MHD":
			return MHD;
			break;
		case "Verena":
			return Verena;
			break;
		case "Davith":
			return Davith;
			break;
		case "Murne":
			return Murne;
			break;
	}
}

function loadSkills(character, element){
	//param character: character selected to load skills for
	//type character: string
	//param element: element containing skill checkboxes for recursive adding
	//type element: document element
	//returns: sets value of element to corresponding skill by index
	var charSkills = selectedChar(character);
	for (var i=0, len=element.length; i<len; i++){
		if (element[i].type == 'checkbox'){
			element[i].innerHTML = charSkills[i];
		}
	}
}

function selectPOne(){
	var optionsBox = document.getElementById("charSelect1");
	var selectedText = optionsBox.options[optionsBox.selectedIndex].value;
	//Testing
	//document.getElementById("p1check1label").innerHTML = selectedText;
	var tempList = selectedChar(selectedText);
	//for loop having issues when concatenating string and int for elemnt
	document.getElementById("p1check1label").innerHTML = tempList[0];
	document.getElementById("p1check2label").innerHTML = tempList[1];
	document.getElementById("p1check3label").innerHTML = tempList[2];
	document.getElementById("p1check4label").innerHTML = tempList[3];
	document.getElementById("p1check5label").innerHTML = tempList[4];
	document.getElementById("p1check6label").innerHTML = tempList[5];
	document.getElementById("p1check7label").innerHTML = tempList[6];
	document.getElementById("p1check8label").innerHTML = tempList[7];
}

function selectPTwo(){
	var optionsBox = document.getElementById("charSelect2");
	var selectedText = optionsBox.options[optionsBox.selectedIndex].value;
	//Testing
	//document.getElementById("p1check1label").innerHTML = selectedText;
	var tempList = selectedChar(selectedText);
	//for loop having issues when concatenating string and int for elemnt
	document.getElementById("p2check1label").innerHTML = tempList[0];
	document.getElementById("p2check2label").innerHTML = tempList[1];
	document.getElementById("p2check3label").innerHTML = tempList[2];
	document.getElementById("p2check4label").innerHTML = tempList[3];
	document.getElementById("p2check5label").innerHTML = tempList[4];
	document.getElementById("p2check6label").innerHTML = tempList[5];
	document.getElementById("p2check7label").innerHTML = tempList[6];
	document.getElementById("p2check8label").innerHTML = tempList[7];
}

function selectPThree(){
	var optionsBox = document.getElementById("charSelect3");
	var selectedText = optionsBox.options[optionsBox.selectedIndex].value;
	//Testing
	//document.getElementById("p1check1label").innerHTML = selectedText;
	var tempList = selectedChar(selectedText);
	//for loop having issues when concatenating string and int for elemnt
	document.getElementById("p3check1label").innerHTML = tempList[0];
	document.getElementById("p3check2label").innerHTML = tempList[1];
	document.getElementById("p3check3label").innerHTML = tempList[2];
	document.getElementById("p3check4label").innerHTML = tempList[3];
	document.getElementById("p3check5label").innerHTML = tempList[4];
	document.getElementById("p3check6label").innerHTML = tempList[5];
	document.getElementById("p3check7label").innerHTML = tempList[6];
	document.getElementById("p3check8label").innerHTML = tempList[7];
}

function selectPFour(){
	var optionsBox = document.getElementById("charSelect4");
	var selectedText = optionsBox.options[optionsBox.selectedIndex].value;
	//Testing
	//document.getElementById("p1check1label").innerHTML = selectedText;
	var tempList = selectedChar(selectedText);
	//for loop having issues when concatenating string and int for elemnt
	document.getElementById("p4check1label").innerHTML = tempList[0];
	document.getElementById("p4check2label").innerHTML = tempList[1];
	document.getElementById("p4check3label").innerHTML = tempList[2];
	document.getElementById("p4check4label").innerHTML = tempList[3];
	document.getElementById("p4check5label").innerHTML = tempList[4];
	document.getElementById("p4check6label").innerHTML = tempList[5];
	document.getElementById("p4check7label").innerHTML = tempList[6];
	document.getElementById("p4check8label").innerHTML = tempList[7];
}

//Loadout populating

function combineAllLoadouts(){
	//returns: creates a combined weaponlist, easier to maintain
	addFromList(StarterWeapons,totalWeapons);
	addFromList(rewardWeapons,totalWeapons);
	addFromList(tierOneWeapons,totalWeapons);
	addFromList(tierTwoWeapons,totalWeapons);
	addFromList(tierThreeWeapons,totalWeapons);
	addFromList(expTSWeapons,totalWeapons);
	addFromList(expRTSWeapons,totalWeapons);
	addFromList(expTBGWeapons,totalWeapons);
	
	//Armor
	addFromList(characterArmor, totalArmor);
	addFromList(rewardArmor,totalArmor);
	addFromList(tierOneArmor,totalArmor);
	addFromList(tierTwoArmor,totalArmor);
	addFromList(expRTHArmor, totalArmor);
	addFromList(expTBGArmor, totalArmor);
	
	//Equipment
	addFromList(starterEquip, totalEquip);
	addFromList(rewardEquip, totalEquip);
	addFromList(tierOneEquip, totalEquip);
	addFromList(tierTwoEquip, totalEquip);
	addFromList(tierThreeEquip, totalEquip);
	addFromList(expTSEquip, totalEquip);
	addFromList(expRTHEquip, totalEquip);
	addFromList(expTBGEquip, totalEquip);
}

function addFromList(fromList, toList){
	//returns: CHANGES THE LIST
	//param fromList: list to import items from
	//type fromList: list
	//param toList: list to add items to
	//type toList: list
	for (var i=0, len=fromList.length; i<len ; i++){
		toList.push(fromList[i]);
	}
}

function populateLoadouts(){
	populateWeapons();
	populateArmor();
	populateEquip();
}

function populateWeapons(){
	populatePlayerWeapons(1);
	populatePlayerWeapons(2);
	populatePlayerWeapons(3);
	populatePlayerWeapons(4);
}

function populateArmor(){
	populatePlayerArmor(1);
	populatePlayerArmor(2);
	populatePlayerArmor(3);
	populatePlayerArmor(4);
}

function populateWeapons(){
	populatePlayerEquipment(1);
	populatePlayerEquipment(2);
	populatePlayerEquipment(3);
	populatePlayerEquipment(4);
}

function populatePlayerWeapons(player){
	var playerWep1 = document.getElementById("char" + player + "wep1");
	var playerWep2 = document.getElementById("char" + player + "wep2");
	for (var i=0, len=totalWeapons.length; i <len ; i++){
		var newoption = document.createElement("option");
		newoption.text = totalWeapons[i];
		playerWep1.add(newoption, playerWep1[i+1])
	}
	for (var i=0, len=totalWeapons.length; i <len ; i++){
		var newoption = document.createElement("option");
		newoption.text = totalWeapons[i];
		playerWep2.add(newoption, playerWep2[i+1])
	}
}

function populatePlayerArmor(player){
	var playerArm = document.getElementById("char" + player + "armor");
	for (var i=0, len=totalArmor.length; i <len ; i++){
		var newoption = document.createElement("option");
		newoption.text = totalArmor[i];
		playerArm.add(newoption, playerArm[i+1])
	}
}

function populatePlayerEquipment(player){
	var playerEquip1 = document.getElementById("char" + player + "equip1");
	var playerEquip2 = document.getElementById("char" + player + "equip2");
	var playerEquip3 = document.getElementById("char" + player + "equip3");
	for (var i=0, len=totalEquip.length; i <len ; i++){
		var newoption = document.createElement("option");
		newoption.text = totalEquip[i];
		playerEquip1.add(newoption, playerEquip1[i+1])
	}
	for (var i=0, len=totalEquip.length; i <len ; i++){
		var newoption = document.createElement("option");
		newoption.text = totalEquip[i];
		playerEquip2.add(newoption, playerEquip2[i+1])
	}
	for (var i=0, len=totalEquip.length; i <len ; i++){
		var newoption = document.createElement("option");
		newoption.text = totalEquip[i];
		playerEquip3.add(newoption, playerEquip3[i+1])
	}
}

/*
function selectPOne(){
	//returns: sets player one skills
	loadSkills(document.getElementById("charSelect1").value, document.getElementById("playerOneSkills"));
	document.getElementById("p1check1")
	for (var i=0, len=8; i<len; i++){
		for skill in loadSkills(document.getElementById("charSelect1").value){
			document.getElementById(String("p1check" + i)).innerHTML = loadSkills(document.getElementById("charSelect1").value)[i]
		}
	}
}
*/

//mission Modal
var missionModal = document.getElementById('missionModal');

// Get the button that opens the modal
var missionBtn = document.getElementById("missionBtn");

// Get the <span> element that closes the modal
var missionSpan = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal 
missionBtn.onclick = function() {
	missionModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
missionSpan.onclick = function() {
	missionModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == missionModal) {
		missionModal.style.display = "none";
	}
}

//Reference Modal
var referenceModal = document.getElementById('referenceModal');

// Get the button that opens the modal
var referenceBtn = document.getElementById("referenceBtn");

// Get the <span> element that closes the modal
var referenceSpan = document.getElementsByClassName("close")[3];

// When the user clicks on the button, open the modal 
referenceBtn.onclick = function() {
	referenceModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
referenceSpan.onclick = function() {
	referenceModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == referenceModal) {
		referenceModal.style.display = "none";
	}
}

