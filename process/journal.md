# Design Journal

**NOTE** that this a paste of my design journal written in *Evernote* so there may be some formatting screw-ups. It's also kind of a combined to-do list and journal. The strike-throughs have been lost thanks to format changes.

---

Monday, 28 November 2016 09:51

The great mobile adventure…

**NOW THEY DO!**Stairs don’t work at all

**NOT ANYMORE MAN!**Text is too big...

And that’s the end of that miniscule adventure because I’m a fucking badass as HTML/CSS/JS.

------

Thursday, 24 November 2016 10:55

Edits:

Add tone to all UIs

Ramp still doesn’t get scrolled properly on returning to it, fuckstick

Elevator doors opened too suddenly at the bottom?

Sounds in airlock could change to indicate differences?

Need to work on sound sequence at end… building white noise is fine, but I think it should cut on the blackness before the fragments and then no sound from then on

------

Saturday, 12 November 2016 12:39

Okay, let’s go passage by passage again…

sound

need environment sound for all levels, can be same/similar in many though I think

home

**NOW IT’S DONE, IT CLOSES THE WINDOW HA HA** Not done

snow

burial UI

burial chamber

test UI

**NAH, NO REAL NEED FOR THAT**More ‘things’?

burial corridor

chess antichamber

test UI

chess UI

chess stairs

**AT LEAST IT WAS EASY**irritatingly - should the stairs going back actually just render? Because it’s meant to be easy to leave and hard to go in? Oh sigh oh sigh

**DID IT!**reverse the step process I guess… ugh.

fire antichamber

test UI

fire UI

fire ramp

water antichamber

test UI

**FIXED - IT WAS TOO FAST**take a look at how fast the elevator doors are opening in this scene… seems fast

**FIXED - IT WAS INPUT FIELDS** UI seems to have broken in terms of unlocking the door?

water UI

water elevator

thunder antichamber

Consider the idea of making the open airlock disable the elevator

test UI

thunder UI

thunder airlock

Consider the room getting darker as the outer door closesOr at the moment of “a little patience” the whole page turns black except the door out?**THERE ISN’T A PROBLEM IT’S COOL**Or it just … what? There’s a problem, anyway, with the jump from light to dark there

**JUST MADE IT BE POETRY**Feels overblown (and thunder stealing ironically), should simplify

the wasteland

general

**DONE I THINK**Make grey links standard if there’s anything where they should be? Kind of depends though...

**DONE I THINK**Think about red links even on non-functional/locked doors? Yeah...

Deactivate all screens when the door is open (grey)

Add flicker to all deactivated screens

Should doors close when you reenter the room or just stay open indefinitely? (yeah)

Update all areas to take account of previous() so things are remembered appropriately

------

Tuesday, 1 November 2016 15:45

Alright let’s re-think through what’s needed passage by passage:

Home

Not done at all

Snow

Burial UI

Burial Chamber

**NO** Should you be able to close as well as open the door? Consider hover-based door opening? Less amazing than clicking though which feels more intentional. But with that you don’t get that toggling ability? **MISSION ACCOMPLISHED** Suspect I have to give up on this.

Need to test screen+UI

Could use a few more “things”?

Burial Corridor

**FIXED** Doesn’t have the render on returning from next room

**FIXED** Same problem with the text hard against the right side

Chess Antichamber

Need to test screen+UI

Chess UI

Chess Stairs

Fire Antichamber

Need to test screen+UI

**USING THAT ELSEWHERE, SO NO** Wonder about having all the links be timed cycle replaces as a weird kind of glittering sense impression?

Fire UI

Fire Ramp

**FIXED WITH A MARGIN ON THE LINK** The interaction is a little awkward in terms of the text being hard-aligned to the right margin

**FIXED, TRYING TO SCROLL TOO FAST** The scroll doesn’t work when returning to the ramp

Water Antichamber

Need to test screen+UI

**DONE**   Need to implement opening elevator doors

**NO**   Need to implement closing elevator doors on exit from elevator

Water UI

Water Elevator

**TOO HARD** Consider a more ambiguous presentation of the technology (e.g. not “elevator” not “button” etc.?)

Need to implement closing doors (on pressing down)

Need to implement opening doors at top (on arrival)

Need to implement “down arrow” (that closes the doors)

Need to implement “up arrow” at bottom (that closes the doors)

Need to implement opening doors at bottom

Need to implement closing doors at bottom (on pressing up)

Thunder Antichamber

Add some sort of relevant text

Thunder UI

Make the basic glimmery interface that takes a fair while to get through

Thunder Airlock

Need to implement some sort of basic and functional description

Need death if you wait in there? Or just rely on them to click the red link and not test that particular path of waiting and waiting?

Quite bad lag in here - solve with CSS somehow? Also it’s just too overwhelming and like the death

The Wasteland

Need to implement death

**DIDN’T DO THIS**Need to get some opinions on death, it isn’t there yet

**DONE**One thing that should happen is degradation of the text itself with the symbols from the UI

**NOT DOING THIS**Possibly a transition from the poem/darkness to the UI? Might be saying things I don’t want though.

**DEFEATED LAG THROUGH CSS**Need to think about lag

**DID DO THIS**Solution possibility for lag would be multiple pages we transition between?

**NOPE**“breathe.” as a link? in red? transitions the page and escalates?

General

Make periods inside link highlight standard

Make grey links standard if there’s anything where they should be?

Think about red links even on non-functional/locked doors?

Deactivate all screens when the door is open? No real point in looking at them again...

------

Saturday, 1 October 2016

**Actual to dos...**

Write the rooms oh god oh god you can do it bud!

Consider: sound - ambient sound for all spaces (maybe just soft white noise looping), maybe mixing shepherd and noise with shepherd gaining traction over time?

Create just have a single timer-based description of journeying back through the facility… an escape sequence…? Or explicitly “walk back”? Unsure how possible it’d be to scroll to the right positions on the pages though. But would be a cool effect obviously.

Change stairs, tunnel, ramp, elevator to have a door at the end that takes you to a separate room for the next door/screen - same for after you go through a door?

Room descriptions: completely flat listings of objects and surfaces, no personality. Maybe cycling links to provide more details or different views of the same thing or to suggest finding things by “looking around”.

Make initial interface (burial of the dead) [single link click gets you through]

Make chess interface (a game of chess)

This would be a random (small) collection of chess pieces and “squares” jumbled together.

Some would be (red) links that would lead to new board configurations

Semi-endlessly until you’ve exhausted some amount of time along with random number probability

Ideally with sound effects per move

Make first link-based interface (fire sermon)

This would be a read-out style interface with impossible texts

Some of them links, and again, some amount of time spent navigating them until you’ve spent enough time and the door opens

Make UI-based interface (death by water)

This would be like the readout style but with UI elements

Still pretty small per screen though (current iterations have had way too much text

Text should be stable

Make irradiated interface (what the thunder said)

Like the UI interface, but glitching now, with characters changing, maybe reloads (timedgotos) that completely rewrite it from time to time?

Make death scene

Research into radiation suggests we just go for extreme nausea and headaches and then unconsciousness (though I don’t know where that puts us in time or why it’s not all sealed up in the first place? I guess the idea is that it IS except you open the final super heavy door like an idiot. Maybe there should be some kind of airlock system in place there and when you get through that’s that. Maybe there are some bones in there.

Question of how to describe/convey this - more abstractly with decay of the descriptive text. More poetic?

Maybe a screen in this room too actually, just jumbling everything, maybe not very distinct from your actual experience of the space?

Consider the idea of “light” or at least what the background and text should look like as you proceed deeper - does it get darker and harder to read? (Yes, though never impossible to read. And screens should glow.)

**NO** Integrate Twinecery[ ](http://twinecery.juegos/)

http://twinecery.juegos/

**CONSIDERED AND AGRED TO** Consider the question of narration: very blank (but poetic) descriptions of room contents rather than “you feel like x, you think y”

**NO** Possibly involving the use of Tracery (Twinecery) to generate description of objects and rooms and use a set random seed to keep it consistent per playthrough? Or is that essentially kind of pointless? Why have procedurality in this? The place would be the same every time.

**NO** Consider the idea of having the ability to “walk back” through the rooms manually, rather than a one-off home

**NOT REALLY, THOUGH THEY COULD GLOW A BIT** Could the screens cast light on the rest of the text at the end with a white flickering shadow on black bg and black text?

------

Thursday, 29 September 2016 12:26 PM

Alright so I’ve just spent some time this morning implementing stairs and tunnels/ramps as macros so that they can be arbitrarily long and deep.

I kind of like the idea of some generative text as well so that the complex might feel so enormous you get completely dispirited? Falling shepherd tone in one of the rooms with a counter going down for some amount of time until you can go through the locked door.

It would be nice if it were a slightly longer experience in other words.

It might be nice if the steps had some little thoughts along the way? So that it’s not entirely steps? Or is it cleaner/better if it is just steps… and if so should the tunnel/ramp also be created in this way?

Footstep sound on the steps?

Add the idea of your children finding the place and possibly going in...

A script/macro that would corrupt the text before it? Or the text inside it I suppose, but that would limit other potential effects… like you couldn’t run a macro inside that text…?

Generally speaking… what the fuck am I doing with this. It’s not meant to be an enormous project is it? Or is it? And I don’t want to feel like I’m getting totally side-tracked by obssively trying to just “do something interesting with Twine” rather that following through on the core idea behind the game/thing, which is to explore the Deep Time jam’s ideas from Into Eternity by creating a narrative of entering a facility and eventually dying despite all the indications that you should be leaving. The people who persevere must be killed. That’s the message. So the overall experience should take a while, but not forever… in some sense I want people to finish it (and die). But I also want them to experience the idea that they shouldn’t have kept going.

Also should add the “generations” thing where you restart the game as one of your children if you do choose to go home, but if you die in there, there’s no children and no continuation of your line (I don’t think I like the idea of skipping to siblings).

Maybe there shouldn’t be ANY narrative in it? Just controls that move you through spaces.. an elevator, ramps, corridors, steps, ...

That would be pretty… bold… it would add to the unfathomable nature of the space I suppose. Just screens with interfaces and endless feeling traversal of a building...

I’m struggling here.

But would it look interesting without any narration? Could it manage that in the first place? Wouldn’t really make sense at the beginning when you’re finding your way in. And if you have narration there, why wouldn’t it be throughout?

Just walking through large empty spaces and looking at computer screens? There’s a purity to that… but it’s a pretty fucking weird purity...

Work in The Wasteland? Particularly What the Thunder Said?

Or like each part of the poem is a sequence in the game? Fuckin’...

http://www.infoplease.com/t/lit/wasteland/

The Burial of the Dead

The opening sequence of finding the door itself

Opens like a tomb

"April is the cruellest month, breeding

Lilacs out of the dead land, mixing

Memory and desire, stirring

Dull roots with spring rain."

"In the mountains, there you feel free.

I read, much of the night, and go south in the winter."

"And the dead tree gives no shelter, the cricket no relief,[3]

And the dry stone no sound of water. Only

There is shadow under this red rock,

(Come in under the shadow of this red rock),

And I will show you something different from either

Your shadow at morning striding behind you

Or your shadow at evening rising to meet you;

I will show you fear in a handful of dust."

""You! hypocrite lecteur!—mon semblable,—mon frere!"[13]"

A Game of Chess

“The wind under the door"

“Strange synthetic perfumes"

“Rats’ alley where the dead men lost their bones"

“Those are pearls that were his eyes"

“You ought to be ashamed … to look so antique"

Perhaps the first “puzzle” interface is a chess game with incomprehensible (random) rules

Chess pieces in disarray with some linked leading to new situations

Eventually through perseverance the door will open

The Fire Sermon

“Unreal city . Under the brown fog of a winter afternoon"

"To Carthage then I came[40]

Burning burning burning burning

O Lord Thou pluckest me out

O Lord Thou pluckest

burning"

No as much material in the body of this that feels evocative...

Why would burning exist now? Just that it gets hotter underground?

Death by Water

The death of Phlebas as a cautionary tale

So perhaps a dead/drowned body?

A puzzled with water in it?

What the Thunder Said

"Here is no water but only rock"

"Dayadhvam: I have heard the key[48]

Turn in the door once and turn once only

We think of the key, each in his prison

Thinking of the key, each confirms a prison"

Has the language of the thunder (I imagine)

"Dry bones can harm no one."

"Then spoke the thunder

DA"

"These fragments I have shored against my ruins"

"Datta. Dayadhvam. Damyata."

"Shantih Shantih Shantih"

So that would be five parts...

Burial of the Dead = finding and opening the “tomb” that is the facility. In Spring, Winter fading away. This could also involve a first external UI that has to be conquered to even get into the facility? Maybe it’s a big serious door like Onkala? Or is it better if it’s unassuming, revealed by an uncommon thaw (post ice age perhaps), or both… the massive entrance could have been uncovered by the thaw…? Lilacs? Or lilac highlight on a link to look at them...

corridors **[have code]**

A Game of Chess = passing through an informational space perhaps? Or just space… and reaching the first screen/UI that unlocks the first door. It’s a game of chess, but incomprehensible, probably random. Just unicode of chess symbols (and dark square and light squares say) with some of them linked. Click around for a while (maybe just a number of interactions or a time limit) and eventually the door unlocks. Wind under the door, a synthetic scent.

stairs down **[have code]**

The Fire Sermon = somehow need “burning” to be an option. This UI can involve the full Unicode set (or some subset) and maybe UI elements from HTML. Why is it a fire sermon though? Gets hot as you go deeper into the facility? How much of this am I literally writing out? How much of this thing is language versus not language?

ramp down **[have code]**

Death by Water = seems should have water as something part of this space… somehow. I guess it would be hot water as you get closer to the bottom and the material itself (presumably it generates some kind of heat?). Some kind of UI obviously to proceed to the next space. Maybe water created by hovers over a field of character to find a switch or something? Hover replace allows you to kind of ripple the water? Have this kind of environmental element as well as a UI each time? UI starts to scramble a little now and again?

elevator down **[have code]**

What the Thunder Said = Final UI. Things are being scrambled by the proximity of radiation and death through the final door. Hearing the “thunder” of it. UI is changeable and strange. With some of the descriptive text (if that happens) having the same thing. Hints at the poem, flashes of poem bits?

through the door … code?

Scrambling text about your inner state, burning, thirst, nausea, time passing quickly, descends into mad symbols that fade out to nothing… elements of the poem flickering around...

------

**To dos**

------

Sunday, 25 September 2016

Add a series of “rooms/places” to the story structure that would allow you to navigate through the “the end” without any interfaces. Let’s begin with just three spaces, since that will be proof of concept. One door, one stairway, one interface, final room.

Figure out the “physical interaction” UI for movement, looking at UIs, opening doors, retreating

Improve the Interface generator (Unicode + HTML UI) to create more tuned UIs, probably parameterised for different complexities, and components (to make them weirder as you go along)

Incorporate the UI generator to allow the player to unlock the doors they find (possibly something like restyling all the text to green or something to indicate success, then auto return to the appropriate page)

If time

add some hazy background images to evoke some sense of “whereness” (maybe just use colours and/or textures for the time being)

Run some CSS tests on some architectural shapes (ramp, tunnel, stairs…)

------

**Diary**

------

Sunday, 25 September 2016 10:18 AM

Okay, so yesterday we watched the movie (which was pretty stunning, especially visually and in terms of the language at times). Then we brainstormed. Then I flailed (the previous entry reflects that moment). Then I decided to just start a Twine and poke at it. Which resulted in a Twine macro that would generate pages of random Unicode text in paragraphs with random links and some CSS flicker effects to make it look strange and foreign. It looks kind of cool, but in a generic “sci-fi” way.

The idea now is that this form of text/linking is an interface to computers/screens in a facility hiding nuclear waste, designed a long time ago to warn people away, but also to allow them to proceed if they press on (like a gamer or other curious/determined person).

The steps for today are to...

… make sure the UI is a bit more interesting (e.g. add in some actual UI stuff from HTML like text input, buttons, radio and check boxes, … maybe something else.

… build the “larger world” around the interface (so it’s not QUITE so obtuse), for which I’m currently thinking of a narrative in which you’re a kid who finds the door/stairs into the facility, goes in, walks tunnels, opens door, encounters UIs that open doors, goes on and on, and, if you persevere, you get through a final door, it shuts and locks behind you (darkness), and you die of radiation poisoning in the final chamber. The builders of the facility allow for the idea you’ll get in, and that you’ll die, and trust that you’ll be a cautionary tale, rather than trying to prevent your death.

… allow you to just leave (through however many rooms you’ve passed through), doors closing themselves behind you, return to the forest around the facility where you live (why haven’t you found it before?)

… consider graphical possibilities to incorporate to avoid “just text” (maybe building some architecture in SketchUp and lighting in Unity, maybe taking screens from the movie to begin with)

… consider UI possibilities for the game itself (not the fictional UI) to work out how to portray movement and place for example, choice making...

… should it always be the same sequence of rooms? Yes, because it’s an actual place - there’s no need to randomly generate architecture as well as interface, the place itself can be comprehensible. So how many places? 5? 10? The idea is to discourage the player from continuing at least in part through distance.

… think about some “House of Leavesian” textual presentation ‘tricks’ in order to represent spatial navigation through tunnels, down stairs, ramps, ...

Question: Should there be any English text in the interfaces or just leave them 100% incomprehensible and rely on colour etc. for messaging?

------

Saturday, 24 September 2016 12:43 PM

Okay. Hi. What are you thinking of doing?

------

Monday, 7 November 2016 15:50

Ha ha ha, diary, yeah. Ha ha.

Well I’m still working on this thing. It’s been just over six weeks now. Obviously I haven’t had a lot of devoted time for it because of teaching and grading, but just lately I’ve been working out how to have time and that’s helping a lot. As such the whole thing is MOSTLY done and there are a lot of technical elements that I’m really happy with in terms of how it all fits together as a spatial text. It needs an edit badly, and the ending is not strong enough and there’s no “happy ending” option as of yet. But other than that it’s kind of together? Hard to believe. Interesting to think about the kinds of editing it needs, too, because it’s things like timing and visual and spatial elements, not just editing the text… anyway, here we are, having made a lot of progress on this thing that took on a much more substantial life than I thought it would in the jam itself.

------

Tuesday, 8 November 2016 12:43

Look another diary. I say mostly done, but this ending is causing me a lot of trouble and a couple of the final other spaces aren’t quite there (the airlock is a pain… too busy, and the dry red rock screen is maybe ineffective? Though appropriate and nicely geological seeming? Maybe that one’s not so bad…)

Running into serious lag problems whenever I’m doing animated stuff - may suggest it’s better to animate some things with CSS? Do have access to jQuery which would make code-based changing of the CSS possible.

The vague vision for the wasteland is perhaps to have multiple screens (to avoid rendering too much at once… lag seems to come from inserting too many macros on the same page, making them take time to evaluate - hilarious to hit lag problems in a twine when I’ve never really run into it in other games!!). So maybe the idea is

darkness. (either with the word dark, which I like, or just nothing). flashes. then flashes of wasteland text. then flashes of wasteland text degrading with UI symbols. Eventually just flashes of UI. Then flashes that get darker. Until flashes are invisible. At which point it’s the end and we just put “the end.” or something.

The transitions could either be timed or could be caused through a “breathe.” function? Maybe it’s better as just a “cutscene” of the escalation. But then it obviously needs to go fairly fast. Or both… you can click and it gets worse faster, or it shifts every ten seconds or so. Maybe faster.

Okay. So that “only” involves… bits of wasteland text… but maybe just a random subset rather than all of them… or even in sequence, but selecting a subset of lines for each refresh, with them getting more corrupt over time… so you do see the whole poem… so…

1. just dark
2. small flashes (one space character)
3. flashes the size of wasteland lines, but no text
4. 5 text flashes
5. 5 text flashes with minor corruption fixed
6. 5 text flashes with cycle corruption, minor fixed + minor cycle
7. 5 text flashes with more medium minor fixed + medium cycle
8. dimming flashes with corruption, medium fixed + medium cycle
9. dimming flashes with corruption, all fixed cycling
10. black
11. end

If each of those is like 5 seconds you’re looking at almost a minute… but that’s okay… it’s a FMT (full-motion text) cut scene! Ha ha. Funny.

Okay I think this is believable. Main thing is a lag check. May be that all animation should be done in CSS (including ‘dark’ to avoid lag? If that does avoid lag…)

------

Thursday, 10 November 2016 09:55

So the CSS approach to animating links is performing extremely well on lag, which is great and solves a lot. I’ve now built out the first couple of stages and I think it probably looks interesting enough to build out the whole thing.

------

Friday, 11 November 2016 11:13

Just to keep diarising a bit - the death scene is pretty well done. had a nice realisation I could use broken macros/errors as a way to represent degradation and death, so it gradually goes from corrupted text to corrupted twine itself and eventually to “these fragments i have shored against my ruins” as errors. And then fade to nothing. And that’s cherries jubilee.

NOW it’s mostly done but for adding in sound cues and overall testing. Sounds just need to be atmospherics, possibly multiple shepherd tones at death? White noise. Drones…

------

Thursday, 17 November 2016 11:52

Just under a week later and the whole thing is kind of… done. Except for sound. And sound is drones, white noise, and conceivably little event noises for doors etc? But probably not that latter thing actually because it will be dinky. So just environment sounds of different types as you proceed through, particularly with an emphasis on the final sequence I guess reaching some kind of howl before cutting out completely (just before these fragments).

So I need to generate those things. I will do that…………… later. Not now.

------

Tuesday, 22 November 2016 13:49

Hi again. I got sound done. In fact I shipped the whole thing out to Jim and Mary and also to Tanya. Jim responded very positively and thought it was beautiful/poetic - though I don’t know for sure, yet, that he actually finished it… but that’s encouraging.

The poetry aspect isn’t something I’ve written about at all and it probably something to write a post about at some point as it ended up being pretty central, and its interesting combining that with the spatial nature of narration that the game has…

So what can we say about this?

Well it’s worth thinking about the fact the game operates spatially rather than temporally (or other traditional narrative forms). A point of reference here was House of Leaves in terms of using layout of words as part of the storytelling, but probably Burnt Matches is even more spatial really since the game is explicitly about spatial navigation, much like a more traditional adventure game (though it doesn’t have puzzles to conquer) and in contrast to what I perceive as an often standard approach to Twines.

ALTHOUGH there are certainly exceptions to this - HOW TO SPEAK ATLANTEAN is a core reference for me always, and that includes two forms of spatial narrative, one around the space of a body and one around the space of the trashheap (the mall etc.). Nonetheless I’d suggest that in the case of HTSA space is used as a hook for actual narration (notably narrating the inner state of the player’s character), whereas in BM space is space and as far as I’ve been able to, there’s no narration of your inner thoughts or feelings at all… again, in that way more like a neutral videogame presentation, more of a walking simulator perhaps, with the “feelings” being out in the world and the ideal being that the player simply has their OWN feelings toward the world, whether roleplaying or not. In that way, the game replicates the spatial structure it’s “about” - a facility for storing nuclear waste. At least in principle it’s a representation of that space and “nothing more”… but

BUT

there’s also a poetic dimension, so it’s not true there’s no narrative or no language involved - it’s not straightforward descriptions of spaces, there are two kind of major aspects to the spatial presentation:

1/ One is the use of actual spatial positioning of words on the screen to convey a scene rather than describing it, and sometimes elements of interactivity to contribute to that presentation. So the snow at the beginning is laid out like a field of snow rather than described as such - and this allows for actual spatially-relevant interactions to take place, such as the screen being under the snow and “in” the snow field. This is repeated throughout as a kind of motif… there’s also frost, water, and dry red rock laid out in this same way. Then there are the more explicitly interactive portions - like stairs, corridor, elevator, ramp, where the interactivity (in the sense of clicking, but also in the sense of reading) is tied to the spatial nature of the space you’re in. You have to “walk along” the corridor or climb the stairs. Sometimes this is paired with more expressive writing, sometimes not.

2/ The other is the use of… what the fuck was this going to be?

ALSO

The other big thing going on, I suppose, is the use of T. S. Eliot’s The Wasteland to structure and furnish imagery for the Twine. This actually came relatively late in development… oh actually, when I check it actually wasn’t late at all, it was only a few days after the jam itself that I found that as a strategy. At the jam the huge priority had been the interface with nothing else, and after that I wanted to expand to represent the facility itself, but really couldn’t figure out how one would narrative such a thing (used to be very narrative, with ideas about having children and so on), and then The Wasteland turned up in my head to help me with source material from which to write.

Obviously The Wasteland is pretty appropriate on a really blunt level (nuclear waste, wasteland, etc.), but when I read and reread the poem over and over, it also feels like there are a lot of very evocative lines that fit the scenario I was working toward (going deeper and deeper into this dangerous place until you die of it). It also has a wonderful concrete nature in terms of the things it says… place names, substances, smells, … and it also has a very specific structure into its five parts, each with a kind of “element” in some ways. All of which did that basic job for me of structuring the facility and what one would find in it.

Should also say (and perhaps this was what 2 was going to be above) that The Wasteland is a very spatial poem in the sense that it’s so much about spaces. Cities are mentioned again and again, landscapes, earth, rooms, etc. It has a far reaching view of all kinds of spaces, from domestic to kind of cosmic. And that again made it a really nice fit for the style of work I was doing.

It’s very strange and awkward to write about this aspect of work, because I’ve never really positioned myself (mentally) as a writer/narrative person in the context of games, or if it was in there it would be incredibly abstract and simple (A Series of Gunshots, say, or What We Did). And yet I wanted to “be” a writer for many years, and was one, so it’s not THAT weird that I’m allowed to write something “poetic” or at least have the ambition to do so.

…

It’s also quite funny to me how inspiring my students’ work in 415 was for this game. I definitely seized on elements of their work to further the thing I was doing. Notably fields of words to represent a kind of space (e.g. the trees in one story) or the use of CSS to create spatial variants of ideas (like the Centaurs in Gabriel and Rebecca’s piece), or the integration of a poem specifically (as in Roxanne’s). I should tell them this, because that’s quite nice…

…

Oh also, since it’s “topical”, it’s worth noting that time exists in the Twine as well - doors open and close and at the end you die slowly. It’s kind of turn based most of the time (except when it’s not), but time is relevant and tied to the player. Again it kind of plays with the idea of being a “physical” simulation of a world, except that it’s all textual… but I’m also glad I didn’t go totally over the top (there were periods of working on doors you had to actually drag for example).

…

You know what? For all that it took for fucking ever:

1/ I learned a LOT of JavaScript+Twine stuff

2/ I got to work with text instead of my usual engines, which was hard, but yielded the kind of work I would NEVER do otherwise

3/ It’s actually kind of beautiful in a way? There are many things wrong with it and probably pacing elements are all off… but… well that’s pretty good you know? I made a thing. I keep making things and I feel like I surprised myself with this one. Pat pat.

------

Thursday, 24 November 2016 12:02

Well. I just did some debugging, fixed a few elements, changed the sound toward the end, made it glitch in the darkness, and SO it’s a done game now I do believe. Done enough to send to Kill Screen (and others, oh and Emily Short!), and to MOVE THE HELL ON. To what?

Well that’s a good question. Something interface oriented perhaps? Or… I feel like I’ve had a couple of ideas lately… like… well, perhaps I don’t have as many as I thought. Could be a chance to think through some interface stuff. Speculative Play view of the idea of productivity interfaces that are games - the feeling of productivity in a post-employment future. Timers running and interface elements to attend to. Instructions on what to do? A robot voice telling you what to set things to? Could plausibly make the entire game in jQuery etc. as a webpage rather than a “this is a game in a frame on a page” which might be oddly satisfying? Less “cinematic” more direct. Would want it to work on mobile… jQuery seems like a friend there as well? Making a game in jQuery seems like a funny thing to do in general too. HAHA FUCKIN HAHA. Alright, well let’s say that’s nominally the next project then EH?

Returning our mind for the moment to Burnt Matches - do I have more to say about it?

It was a pretty major project. It was a pretty major step out of my comfort zone. Only the second Twine I’ve made, my first on my own, and certainly one in which I was diving very deeply into questions of what kinds of things we can represent (poetically) with text on a screen, attempts to **evoke an older form of the internet with hyperlinking being meaningful** in ways that aren’t just “information about x”, more like net.art than I probably expect, less like narration or the “obvious” way of using that kind of a tool, which I appreciate. That “**space versus narrative**” aspects of it is very successful I think, and gives it a qualitatively different sense when you play. The idea of time as actual time more or less, rather than especially “turn based” in the way we might expect such a scenario to be… ways of operating in that sense… places where time “stands still” because nothing happens, places where time “takes charge” because things happen without your input.

That idea of **using actual “broken” code** to convey a concept is, I think, a novel and pleasing idea too. It’s broken intentionally of course, but it’s still using the underlying aesthetics of how the system represents errors to convey something narrative. Also that idea, perhaps, of blurring between interface and reality. Especially since we have interfaces in the game that perhaps behave MORE like a traditional twine (links between passages), but do so incomprehensibly - meaningless navigation. And then to have the “real world” appear somewhat to degrade to “interface language” (as in the unicode idea) and then to have it degrade further to the  underlying interface of Twine itself to tell things is, I think, kind of a powerful metaphor… or at least something that’s capable of provoking thought. Of course only Twine-oriented people would notice this. Also noticed that the cursor turns into a question mark when you hover the errors which is kind of awesome… SO aesthetics of interface at multiple levels and thus real/unreal (unreal city!) is a nice element that emerges with the project.

Sound has been an addition - I don’t think I’d claim that it’s totally vital, but I think it helps fill the space a little bit. The whole thing would run without it, but there are some moments where it’s nice and indicates shifts in space or modes in a helpful way. I guess I don’t think I’d make big claims for sound in the end though…

UMM M M M M M M?

Well look, for now let’s continue to say: nice job BUD. NICE jub.

Friday, 25 November 2016

12:12

In a surprising twist of fate the game works RATHER WELL on mobile. In landscape mode at least. Might need to think about some way of changing text sizes so it would work in portrait as well. And there’s a problem with linewrap in the mobile version where a bunch of UI can go off the screen, may just need to introduce a few more spaces to allow for wrap? And the sound obviously doesn’t play at all.

But beyond that it’s rather effective? Certainly quite interesting, too, to see it in that light. In some ways I’d almost prefer it in portrait if I can reduce the size?

Oh and the stairs go off the side of the screen for some reason - poorly reported width? Hard coded width? HMMM. Hm. Another media-dependent thing perhaps.

I’m very short of breath today why? Stress? I DON’T ACTUALLY KNOW.

I have a meeting now. This is all not so much anything to do with Burnt Matches. Alright. Sorry. I’m making the press kit for it though because I’m a Good Cat.

------

**Code stuff**

------

*Going down stairs, going down a tunnel*

<<insert "Step">>

@@padding:5%;@@<<insert "Step">>

@@padding:10%;@@<<insert "Step">>

@@padding:15%;@@<<insert "Step">>

@@padding:20%;@@<<insert "Step">>

<<endinsert>>

<<endinsert>>

<<endinsert>>

<<endinsert>>

<<endinsert>>

@@white-space:nowrap;Walk Walk Walk Walk Walk Walk Walk Walk Walk Walk Walk Walk Walk Walk Walk Walk Walk Walk Walk Walk Walk Walk Walk Walk Walk Walk Walk Walk Walk Walk Walk Walk Walk Walk Walk Walk Walk@@

------

*Rotation*

Only seems to apply as the .passage level (whole text, so a ramp page will need custom CSS to represent it, which is fine)

transform: rotate(7deg)

For example.

------

**Images**

![img](en-cache://tokenKey%3D%22AuthToken%3AUser%3A191891%22+4f507436-ffa9-4eec-9bec-9704e73fa0bb+be2d4257f2649d83ecfb71a77e934bba+https://www.evernote.com/shard/s3/res/f61452ec-9309-4d1b-80cb-e037a05ebae5)
