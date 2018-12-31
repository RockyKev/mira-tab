
//This shows the machine time in the center.
	var now = moment();
	var miraseeTime = moment.tz(now, "America/Toronto");

	document.getElementById("currentTime").innerHTML = now.format("h:mm a z");
	document.getElementById("miraseeTime").innerHTML = "Current Time at Mirasee: " + miraseeTime.format("h:mm a z");

//This brings in the fade.
//http://www.chrisbuttery.com/articles/fade-in-fade-out-with-javascript/
	var el = document.querySelector('.js-fade');
	if (el.classList.contains('is-paused')){
	  el.classList.remove('is-paused');
	}	

	var el2 = document.querySelector('.js-fade2');
	if (el2.classList.contains('is-paused2')){
	  el2.classList.remove('is-paused2');
	}	
	
//declares the objects
//Generator --> https://docs.google.com/spreadsheets/d/1K9T3Gbd3coSLbXyy7MUcoxJGfebmusxoidfeJftwRqw/edit#gid=0
	var images = [
	 //["01.jpg", "Retreat 2018 - Annie & Tree in the fireplace area."],
	 ["01.jpg", "LIFT June 2017 - These aren't just nametags. These are students."],
	 ["02.jpg", "Retreat 2018 - Dori and the team."],	 
	 ["03.jpg", "Retreat 2018 - Ari is speaking. (Tree, Annie, Austin, and Hanna."],
	 ["04.jpg", "Retreat 2018 - Danny talks about BetterU (working title)"],
	 ["05.jpg", "Retreat 2018 - Priya is in control."],
	 ["06.jpg", "Retreat 2018 - The whole team listening to Danny."],	 
	 ["07.jpg", "LIFT June 2017 - What greets our students as they come into LIFT!"],	 
	 ["08.jpg", "Retreat 2018 - Anja taking notes for the course team. (Rocky. Lexi, and Jim)"],	 
	 ["09.jpg", "Retreat 2018 - Maureen and Tree having a hootnanny."],
	 ["10.jpg", "Retreat 2018 - Joey's wise-cracking good times."],	 
	 ["11.jpg", "Retreat 2018 - Lisa's storytime event."],
	 ["12.jpg", "Retreat 2018 - The team reading 'the Culture Code'"],
	 ["13.jpg", "LIFT June 2017 - The welcome table."],
	 ["14.jpg", "Retreat 2018 - Bhoomi and Alyson laughing over dinner."],	
	 ["15.jpg", "Retreat 2018 - Lizzie making a passionate speech."], 
	 ["16.jpg", "Retreat 2018 - Joey and Krunal listening intently. "],
	["17.jpg", "Retreat 2018 - Rebekah taking notes during a group project."],
	["18.jpg", "Retreat 2018 - Ari, Tree, Hanna, and Dori standing in front of kayak lake."],
	["19.jpg", "Retreat 2018 - Danny and Dave Lakhani on a brainstorming walk."],
	["20.jpg", "Retreat 2018 - Lizzie and Lisa preparing to jump into mom-mode in case a Miracorn is acting up in the water."],
	["21.jpg", "Retreat 2018 - Rebekah and Danielle in the fireplace room."],
	["22.jpg", "Retreat 2018 - Lizzie taking charge of the room."],
	//["23.jpg", "Retreat 2018 - Annie has a question."],
	["23.jpg", "Retreat 2017 - The students we serve."],
	["24.jpg", "Retreat 2018 - Dori, Anja, Danielle, and Lisa drinking wine and looking productive."],
	["25.jpg", "Retreat 2018 - Elizabeth shows her approval of Jim's idea."],
	["26.jpg", "Retreat 2018 - We say goodbye to Ruthy. (Lisa, Jim, Barbara, and Elizabeth)"],
	["27.jpg", "Retreat 2018 - Danny and Micah saying goodbye to the school bus."],
	["28.jpg", "Retreat 2018 - Bhoomi and Micah playing."],
	["29.jpg", "Retreat 2018 - Danny's post-its about what amazing things we've accomplished this year."],
	//["30.jpg", "Retreat 2018 - Maureen & Lexi with post-its about Mirasee's amazing accomplishments."],
	["30.jpg", "Retreat 2017 - Polaroids for our students to take home."],
	["31.jpg", "Retreat 2018 - Danny and Rebekah in a heated typing match."],
	["32.jpg", "Fall 2017 - Danny's first kid's book."],
	["33.jpg", "Summer 2018 - Aces Meet-up."],
	["34.jpg", "Summer 2018 - Stephanie teaching ACES students why she's awesome."],
	["35.jpg", "Summer 2018 - ACES meet-up, the amazing people we serve."],
	["36.jpg", "LIFT April 2018 - Danny doing what he does best - wowing everyone. "],
	["37.jpg", "Retreat 2018 - Lisa's storytelling training out on the grass."],
	["38.jpg", "Retreat 2015 - The Mirasee team working together. "],
	["39.jpg", "LIFT April 2018 - Day 1 meet and greet, and cocktail hour!"],
	["40.jpg", "LIFT April 2018 - The amazing people we serve."],
	["41.jpg", "LIFT April 2018 - Day 1 Meet and greet, Danny relaxing with Dori and a student."],
	["42.jpg", "LIFT April 2018 - Reminder of the people we serve."],
	["43.jpg", "LIFT April 2018 - Day 1 meet and greet, and cocktail hour!"],
	["44.jpg", "LIFT April 2018 - Our students. (And Anja before joining Mirasee)"],
	["45.jpg", "LIFT April 2018 - Annie, Tree, and the rest of the team high-fiving our students as they come in."],
	["46.jpg", "LIFT April 2018 - Danny doing what he does best - wowing everyone. "],
	["47.jpg", "LIFT April 2018 - The amazing people we serve."],
	["48.jpg", "LIFT April 2018 - Our wonderful team of strategists. "],
	["49.jpg", "LIFT April 2018 - Ari taking appointments at the coaching zone."],
	["50.jpg", "LIFT April 2018 - The line of people waiting to talk to our amazing strategists."],
	["51.jpg", "LIFT April 2018 - Lisa doing an amazing job in the coaching zone."],
	["52.jpg", "LIFT April 2018 - Dori doing an amazing job in the coaching zone. (upside down nametag!)"],
	["53.jpg", "LIFT April 2018 - Danny and Ron Friedman, with a Special luncheon."],
	["54.jpg", "LIFT April 2018 - The wonderful people we serve."],
	["55.jpg", "LIFT April 2018 - The mugs we gave out at LIFT. "],
	["56.jpg", "LIFT April 2018 - Ari and Rocky agreeing that Diane's hair is amazing."],
	["57.jpg", "LIFT April 2018 - The wonderful people we serve."],
	["58.jpg", "LIFT April 2018 - The wonderful people we serve."],
	["59.jpg", "LIFT April 2018 - Ari with a student in the Coaching Zone."],
	["60.jpg", "LIFT April 2018 - A student listening intensely in the Coaching Zone."],
	["61.jpg", "LIFT April 2018 - Coaching Zone debrief with the strategists."],
	["62.jpg", "LIFT April 2018 - Danny and ACES students, sharing their before/afters since working with Mirasee."],
	["63.jpg", "Retreat 2018 - Barbara is speaking during lunch."],
	["64.jpg", "Retreat 2018 - Bhoomi and Diane listening to a Miracorn's idea."],
	["65.jpg", "Retreat 2018 - Lizzie, Anja, Austin, Elizabeth, and Bill working together."],
	["66.jpg", "Retreat 2018 - Dori taking us to Capiera training."],
	["67.jpg", "LIFT April 2018 - Dave Lakhani blowing away the minds of our new ACES Students."],
	["68.jpg", "LIFT April 2018 - Tree is in love with Tom's dog."],
	["69.jpg", "LIFT April 2018 - Bhoomi's passionate speech."],
	["70.jpg", "Retreat 2018 - Shenanigans as the team plays Do you Meme?"],
	["71.jpg", "LIFT April 2018 - ACES students overflowing the breakfast room."],
	["72.jpg", "LIFT April 2018 - Danny at the ACES Breakfast."],
	["73.jpg", "Spring 2018 - Danny, Ruthy, Priya, Micah, Dave, and his partner enjoying the Montreal weather."],
	["74.jpg", "ACES Meet-up 2018 - Ruthy showing Micah what the physical manifestation of love looks like."],
	["75.jpg", "ACES meet-up 2018 - Bhoomi looks away as Micah takes a muffin for himself"],
	["76.jpg", "LIFT June 2017 - Pre-LIFT. Jenga!"],
	["77.jpg", "LIFT June 2017 - Lizzie tries to capture a child inside her Lizzie bubbles."],
	["78.jpg", "LIFT June 2017 -  The hotel venue!"],
	["79.jpg", "LIFT June 2017 - Photos of our students."],
	["80.jpg", "LIFT June 2017 - Danny presenting"],
	["81.jpg", "LIFT June 2017 - The rare time that Rocky and Tree get along."],
	["82.jpg", "LIFT June 2017 - the line excited about the coaching zone."],
	["83.jpg", "LIFT June 2017 - Diane presenting."],
	["84.jpg", "LIFT June 2017 - Students looking for their swag bag."],
	["85.jpg", "LIFT June 2017 - High fives for everyone who enter!"],
	["86.jpg", "LIFT June 2017 - Students taking charge and doing a pre-morning workout."],
	["87.jpg", "LIFT June 2017 - Breakout sessions with Jim!"],
	["88.jpg", "LIFT April 2018 - Welcome to LIFT!"],
	["89.jpg", "LIFT April 2018 - Rocky, the coaching zone 'connoisseur', organizing students."],
	["90.jpg", "LIFT April 2018 - Lizzie in the coaching zone!"],
	["91.jpg", "LIFT April 2018 - Tree coaching Bhoomi on the difference between dog breeds."]

	]
	
	
	var funFacts = [

		["abe.jpg", "Abe can roast coffee using only a home popcorn popper."],
		["abe.jpg", "For Abe, kale isn't everything... It's the only thing."],
		["abe.jpg","Abe thinks everything should read The Design of Everyday Things by Don Norman"],
		["abe.jpg","Abe would choose to be Dominic (in human form) if he could be any character from a book."],
		["abe.jpg","Noma (a Nordic Cuisine restaurant rated as 'the best restaurant in the world') is on Abe's bucket list of destinations."],
		["abe.jpg",'When asked if he has pets, Abe answer was "Children?"'],
		["alyson.jpg", 'Alyson is the proud owner of <a style="text-decoration:underline;" href="https://i.imgur.com/gn9RylQ.png">Harriet the Hyundai. (Image)</a>' ],
		["alyson.jpg", "Alyson has a voice acting career, where she does mostly radio commercials and corporate videos. She was also the voice of Vicita in the animation series, Arthur." ],
		["alyson.jpg", "Alyson's superpower is, whenever she’s shopping and get to the cash, there’s more often than not an additional discount." ],
		["anja.jpg", 'Anja is surprised by what is served in American breakfast. <a style="text-decoration:underline;" href="https://i.imgur.com/aYsY1H2.jpg">Here is a real german breakfast!' ],
		["annie.jpg", "Annie's worst experience performing was when she smashed the mic into her teeth."],
		["annie.jpg", "When Annie was waitressing, she never needed to write anything down. She could take a whole party's order and remember all their orders."],
		["ari.jpg", "Ari played Ping Pong semi-professionally when he was a kid."],
		["ari.jpg", "If he could be any character in a book, Ari would be Harry Dresden from the Dresden Files series, because he's a smartass who can use magic!"],
		["austin.jpg", "Austin was a english teacher in Japan for 3 years. " ],
		["barbara.jpg", "Barbara once got picked up hitchiking on the Vineyard by Carly Simon (whom she didn't even immediately recognize). "],
		["barbara.jpg", "Jermaine Jackson and the Jackson family were interested in a show Barbara wrote so she met up with the family in Vegas."],
		["barbara.jpg","Barbara dreams of living in Europe for a year, checking out various areas for a few months at a time"],
		["barbara.jpg","Barbara is not a foodie and loves Mac N Cheese (the box kind with the powder cheese)"],
		["barbara.jpg","Barbara thinks that everyone should jump out of a plane at least once."],
		["barbara.jpg","Barbara's favorite book genre is the cosy mystery. "],
		["barbara.jpg","Barbara's life is full of situations that would be great plotlines for an I Love Lucy remake."],
		["barbara.jpg","One of the coolest things Barbara did was touching a whale down in Baja."],
		["bhoomi.jpg", 'Bhoomi spent a few days in Costa Rican rain forest and it was *heaven*. "I love the idea of seeing animals in their natural habitat and Galapagos has such interesting species and I also like beaches so, I think Galapagos is going to be great.'],
		["bhoomi.jpg", "Bhoomi's guilty food pleasure is a bag of potato kettle chips."],
		["bhoomi.jpg", "If she could be any character in a book, Bhoomi would you be  Agnes Nutter in Good Omens because she is always right and can predict the future."],
		["bhoomi.jpg","Bhoomi would like to be a wizard when she grows up. "],
		["bhoomi.jpg","When Bhoomi was a kid, she wanted to grow up to run a large organization. "],
		["christyk.jpg", "Christy K was an expat for 12 years and has lived in China, England, Switzerland, Cambodia, and Mexico. "],
		["christyk.jpg", "Coming from a family of hard-core waterskiers, Christy K's favorite lake activity is waterskiing. "],
		["christyk.jpg", "When she grows up, Christy K would like to own a very low-key, casual cooking school that serves as a center for the community."],
		["christyk.jpg","Christy K always wanted to be an international secret spy. We're not sure if she actually is one."],
		["christyk.jpg","Christy K and her husband have a junk and recycling business. The industry is booming because there's a lot of junk."],
		["christyk.jpg","Christy K has lived in China, Switzerland, England, Cambodia, Mexico, and the US."],
		["christyk.jpg","Christy K is famous in China because her teeth are featured in a dental textbook."],
		["christyk.jpg","Jennifer Garner on X Files is Christy K's doppelganger."],
		["christys.jpg", "Christy S has hosted French exchange students, all in high school. But she only knows a handful of French food names."],
		["danielle.jpg", "Danielle owns about 40 headbands and a bunch of other various headcoverings."],
		["danielle.jpg","Danielle considers waffles to be a dessert food, with huge amounts of whipped cream, chocolate, and sprinkles on them"],
		["danielle.jpg","Danielle's favorite color is blue. Or green. Or turquoise. But usually blue. "],
		["danielle.jpg","Danielle's favorite Disney movie of all time is Beauty and the Beast."],
		["danielle.jpg","Danielle's favorite historical fiction is the Outlander series by Diana Gabaldon."],
		["danielle.jpg","If Danielle could have an all-expenses-paid trip, she'd go back to Scotland."],
		["danielle.jpg","One of Danielle's hobbies is planning vacations (for herself and other people)"],
		["danielle.jpg","When Danielle was a kid, she thought it was cool to wear mismatched socks."],
		["danny.jpg", "Prior to starting Mirasee, Danny started a software company that focused on helping children learn how to read." ],
		["diane.jpg", "Diane did rescue work for years and at one time had 13 dogs and 3 cats."],
		["diane.jpg", "One of Diane's dogs got stung by a scorpion and ate it in revenge."],
		["diane.jpg","Diane rescued pets for years. At one point, she had 13 dogs and 3 cats."],
		["diane.jpg","Diane secretly dreams of being good at revenge + secret-treasure-wealthy + super smart + immune to poison"],
		["diane.jpg","If work can't be Diane's hobby, then it’s butter. Butter is an amazing hobby to have. Delicious."],
		["diane.jpg","If you measure love based on number of tears shed… Diane is still not over Bambi’s mother. Sob."],
		["diane.jpg","One day, Diane wants to take a Butter Tour of the World, traveling by boat, train, and carriage."],
		["dori.jpg", "Dori did a 6-week vegan challenge with her mom... and hasn't stopped since then. It's been more than a year."],
		["dori.jpg", "For Dori, Capoeira was one of the most incredible ways she learned to move her body beyond what she thought was physically possible for her to do."],
		["dori.jpg","As a kid, Dori wanted to be Harriet the Spy, because she was way too much fun for her own good."],
		["dori.jpg","Dori and her sister used to go to Israel for almost 2-3 months for the entire summer."],
		["dori.jpg","Dori loves playing capoeira as a great outlet and also a beautiful connection to history and culture."],
		["dori.jpg","Dori's 3 year old rescue kitty, Niko, was found in a wall of someone's house."],
		["dori.jpg","Dori's hobbies include hiking, dancing, traveling, eating, and swimming in the ocean. "],
		["elizabeth.jpg", "Elizabeth has metal rods in her right arm, due to a rollerblading accident as a kid."],
		["gena.jpg", "Gen'as children's godmother is Keiko Agena, who played the best friend in The Gilmore Girls."],
		["gena.jpg", "Gena has flown a small two-seater plane during her career as a Petroleum Engineer."],
		["gena.jpg", "While working for music mogul Quincy Jones, Gena *met* famous people like Beyonce, Chris Rock, Oprah, various of the Jacksons (not Michael), and Gwyneth Paltrow."],
		["jessica.jpg", "Mark Ruffalo drank out of Jessica's water bottle during a rally in DC."],
		["jessica.jpg","Jessica was really reluctant try rolling her clothes when packing, but now that she's tried it, she'll never go back!"],
		["jimh.jpg","Growing up, Jim was already passionate about … sports and writing/computers."],
		["jimh.jpg","Jim can nap any time, anywhere, for as short as just a few minutes."],
		["jimh.jpg","Jim I doesn't own a toaster or toaster oven."],
		["jimh.jpg","Jim is a genius at product comparisons and always knows what's the best version of a thing to buy"],
		["jimh.jpg","Jim's favorite foods are a great slice of pizza, anything chocolate, crispy bacon, or a well done steak."],
		["jimh.jpg","Thanks to his course building experience, Jim knows a little bit about serving safe food, forklift safety, and financial compliance."],
		["jimh.jpg", "Jim used to live next door to singer Vanessa Carlton of 'A Thousand Miles' fame."],
		["jimh.jpg", "When Jim H gets a new pair of shoes or sneakers, he immediately re-laces them so that the first loop (closest to the toe) is UNDER the eyelets. "],
		["jimw.jpg", "Jim W has recorded songs in Nashville, appeared in music videos, one reality show, and played in shows."],
		["jimw.jpg", "Jim W has spent most of his life as a professional musician (drummer and singer) and has been teaching electronics part-time at a community college in Ottawa for the past 17 years."],
		["joey.jpg", "For Joey, a meal isn’t a meal if it doesn’t include bread, rice, or pasta."],
		["joey.jpg", "Joey packs for trips 1 week in advance so she has a whole week to make sure she didn’t forget anything."],
		["joey.jpg","As a kid, Joey loooooved gymnastics. It was basically her whole childhood, and she is still super flexible."],
		["joey.jpg","Joey always smells her deodorant before putting it on."],
		["joey.jpg","Joey is a relationship person and spends most of her free time with the people she cares most about. "],
		["joey.jpg","Joey likes to sleep in cold rooms (and she sleeps A LOT...8-10 hours)"],
		["joey.jpg","Joey loves cheese so much that she ends up with an empty fridge with lots of cheese."],
		["joey.jpg","Joey loves straws, even though she knows that they're bad for sea turtles."],
		["joey.jpg","Joey once planned a “college party” for her sister's 18th birthday, complete with beer pong."],
		["joey.jpg","Joey would rate her fear of spiders a 7 out of 10 (but Rocky would rate it a 10)"],
		["krunal.jpg", 'If we were to make a movie about you, which actor would you like to portray you? KRUNAL: "Indian bollywood actor Akshay Kumar or Hollywood actor Jason Statham"' ],
		["krunal.jpg", "Krunal is a very picky eater but he can have pizza and pasta all day, every day." ],
		["krunal.jpg","Cricket is Krunal's favorite sport (both to watch and to play)"],
		["krunal.jpg","Krunal met his wife on a cousin's wedding day. They got engaged after a 1-hour walk."],
		["krunal.jpg","Krunal's bucket list includes a world tour with his family."],
		["krunal.jpg","Krunal's favorite colors are black & white."],
		["krunal.jpg","Krunal's superpower is staying positive in any situation."],
		["krunal.jpg","One of Krunal's favorite things about living in India is celebrating lots of festivals."],
		["lisa.jpg", "Lisa makes a mean Irish Coffee and the best gin & tonic you’ve EVER tasted." ],
		["lisa.jpg", "Lisa's pet peeve: saying 'I’m going to tell you a story'. Stories don’t need an introduction - just tell the damn thing!!!" ],
		["lisa.jpg","As a kid, Lisa had a whole bedroom wall full of everything rainbow she could find."],
		["lisa.jpg","Even as a child, Lisa collected stories...and one day, she will write a novel."],
		["lisa.jpg","Lisa spent her entire childhood searching through wardrobes looking for Narnia."],
		["lisa.jpg","One of Lisa's favorite stories is the Story of Oisin, a mythological leader of an Irish clan."],
		["lizzie.jpg", "Lizzie loves to paint and to give away her paintings as gifts because doing so brings her joy. " ],
		["lizzie.jpg","Lizzie knows a science experiment that can cause an aluminum can to instantly crumple itself."],
		["lizzie.jpg","Lizzie's favorite and formative experience of her 20s was meeting and marrying her husband."],
		["lizzie.jpg","The last time Lizzie had a waffle was when she was pregnant with her daughter."],
		["maryanne.jpg", "Maryanne suggested, led the design team, and launched the book, Be Brave and Chase Your Dreams by President Bill Clinton." ],
		["maureen.jpg", "When she was a kid Maureen used to narrate everything she did, like she was a character in a Little House on the Prairie book." ],
		["maureen.jpg", "While traveling, Maureen would always carry a snorkel and mask. But later, the air regulator on the snorkel got damaged and both were left in Mexico." ],
		["rebekah.jpg", "As a kid, Rebekah would climb to the very slenderest part of the tops of trees, built forts, and explore the 350 acres of fields that her landlord kept cattle on."],
		["rebekah.jpg", "Rebekah is VERY picky about how she builds a sandwich. Everything has to be precisely placed and it takes her forever." ],
		["rocky.jpg", "Prior to working at Mirasee, Rocky worked for a comedy club. During that time, Gilbert Gottfried stole his peanut butter." ],
		["rocky.jpg","Florida isn't on Rocky's list of Top 10 US States he wants to visit. But what states are? "],
		["rocky.jpg","Rocky hears songs and sings them out loud, without  ever knowing who the artist is or what song title is called. "],
		["rocky.jpg","Rocky was the kid who ate ants and got chased by wasps."],
		["stephanie.jpg", "Stephanie worked for many years at the Montreal Comedy Festival and once hung out with John Stewart outside a party they weren’t invited to." ],
		["summer.jpg", "Summer cannot smell skunk." ],
		["tracy.jpg", "Tracy is an adventurous eater and ate a fried scorpion once." ],
		["tracy.jpg", "Tracy's hobby is training cats to do basic cat tricks." ],
		["tracy.jpg","Martial arts is a surefire conversation starter with Tracy (especially jiu jitsu and karate)."],
		["tracy.jpg","Tracy has ninja cat training skills with her two orange rescue tabbies (Charley and Po)."],
		["tree.jpg", "When she was 4, Tree asked an older boy to marry her in front of the class and he said no." ],
		["tree.jpg","If Tree were to teach an online course, it would be on Improv, of course."],
		["tree.jpg","It's on Tree's bucket list to float away in a hot air balloon surrounded by golden retriever puppies and one conversational cockatoo."],
		["tree.jpg","One of Tree's hobbies is singing to her plants and then googling, 'why do my plants die when I sing to them?'"],
		["tree.jpg","Tree loves any variety of animal that is smaller than we think it should be, like the Chevrotain deer."],
		["tree.jpg","Tree's first cat, Stella, was a teeny little white fluff from the shelter (and her soulmate)."],
		["tree.jpg","Tree's motto in life is 'Let's add more butter.' Diane would approve."],
		["tree.jpg", 'When someone says to Tree, "Is that your real name?" she retorts, "Is Michael your real name?"'],
		["wendy.jpg", "In 2018, Wendy has written two pilot episodes for TV series...which I actually sent off to an open call from the BBC (British Broadcasting -- national telly). Sadly neither was optioned." ]
		["wendy.jpg", "Wendy once hung out with Phillip Bailey of Earth, Wind and Fire." ]
		//["bill.jpg", "Bill is a licensed pilot."],
		//["carole.jpg", "Carole belongs to a couple of organizations that host people for free while they are traveling or in exchange for pet sitting."],
		//["lexi.jpg", "Roger Moore (Of James Bond fame) once borrowed Lexi's makeup." ],
		//["nehal.jpg", "If she could be a  character in a book, Nehal would be Pollyanna." ],
	]

	
//This is for the greeting below
	var greetingsArray = [
	"you gorgeous, purebred poodle",
	"you phenomenal well of ideas",
	"you poetic and noble land mermaid",
	"you handsome, genius child",
	"you priceless, expensive gem"
	];
	
//declares the randomizers
	var maxImages = Object.keys(images).length - 1;
	var maxFunFacts = Object.keys(funFacts).length - 1;
	var maxGreeting = Object.keys(greetingsArray).length - 1;
	
	var randomPic = Math.floor(Math.random() * maxImages) + 1;
	var randomFunFacts = Math.floor(Math.random() * maxFunFacts) + 1;
	var randomGreeting = Math.floor(Math.random() * maxGreeting) + 1;

//console logs for debugging
	console.log(randomPic);
	console.log(images[randomPic][0]);
	console.log(Object.keys(images).length);

	
//This changes the background	
	var body = document.getElementsByTagName('body')[0];
	body.style.backgroundImage = "url(images/" + images[randomPic][0] + ")";
	

//loads the greeting in the center
	var timeGreeting = "Hello, " + greetingsArray[randomGreeting] + "!";
	document.getElementById("greeting").innerHTML = timeGreeting;

	
//load the background text on the botttom-right
	document.getElementById("imageDescription").innerHTML = images[randomPic][1];

//load the fun fact on the bottom-center
	document.getElementById("funFacts").innerHTML = '<img id="funFacts-image" src="images/headshots/' + funFacts[randomFunFacts][0] + '"> ' + funFacts[randomFunFacts][1];
	
//weather app components

//get the user's IP
//https://ipstack.com/quickstart

//Get the user's ip/lat/long via ifconfig.co/json
//I was gettinga  no-access-control-allow issue, and used this work around. https://stackoverflow.com/a/31550498/4096078
/* var requestURL = "https://cors.io/?https://ifconfig.co/json";

	var userLatitude, userLongitude;
	
	//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

	//create the request. Open the request. Tell it it's json. then send it out. 
	var request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();

	//load the data into a js objects, and create a function to DO something with that item. 
	request.onload = function() {
		var userIP = request.response;
		getIP(userIP);
	}
	
	function getIP(jsonObj) {
		//console.log(jsonObj['latitude'])
		userLatitude = jsonObj['latitude'];
		userLongitude = jsonObj['longitude'];
	}
	
//code to transfer location to weather data
	var weatherAppKey = "f550ca536399d08d7baa76dfe27e66bf";
	var weatherurl = "https://api.openweathermap.org/data/2.5/weather?lat=" + userLatitude + "&lon=" + userLongitude + "&APPID=" + weatherAppKey;

	//load the data into a js objects, and create a function to DO something with that item. 
	request.onload = function() {
		var weatherTemp = request.response;
		getWeather(weatherTemp);
	}
	
	function getWeather(jsonObj) {
		var weatherData = JSON.parse(jsonObj);
		console.log(weatherData);
	}
		 */
	
	