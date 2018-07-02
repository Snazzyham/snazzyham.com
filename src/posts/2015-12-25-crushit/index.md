---
title: building "I'm Crushing It"
slug: crushit
date_published: 2015-12-25T04:17:00.000Z
date_updated:   2016-01-03T12:26:33.000Z
layout: post
permalink: crushit
---

Hey reader, yes you, how have you been? Good. Now that we got that out of the way, do you have any resolutions for this year? I know, resolutions are stupid, an opinion not many people agree with. Luckily, everyone I work with over at [Percolate Galactic](http://wearepercolate.com) agrees. That's why we set out to build [imcrushing.it](http://imcrushing.it), the brainchild of our brilliant CEO Ryan. I'm crushing it is a New Year Resolution generator that pokes fun at people who make new year resolutions, by providing you with the most sarcastic, nasty and hilarious resolutions the 10 of us could come up with. So yeah, the next time someone asks you what your resolution for the year is, we've got you covered.

Building it was probably the most educational 2-days I've had this week. I started by taking the prototype to Spencer that I forked from a JS project and tweaked [(which I wrote about here)](http://blog.snazzyham.com/giving/), and at first I just tweaked the design, worked on the theme and stuff, once I was happy with it looking as basic as possible, I worked on animating it. Yeah, this wasn't something I had thought of when working on spencer since we were working with images instead of text, and we had a separate background for the part with the image, thus not requiring any animation (since we used the built in iOS page change transition). Another thing that inspired me to add animations to the text was [@gk3](http://twitter.com/gk3)'s brilliant DJ Khaled quote generator, [theydontwantyouto.win](http://theydontwantyouto.win). That website should really be the benchmark for quote/text generators.

After some research, I decided textillate.js was the best option. The setup process was fairly complicated (well I over-complicated things myself, it was actually pretty easy at the end) and once I figured that out, I got it to work! However, it only worked with the text elements that were on the page, and not with the div that I had pulling the quotes from my array in JS. I must've spent about 4 hours working on that, putting the class in different locations, nothing worked. I thought, why create a GitHub issue? The developer behind it got back to me the morning after, and let me know that textillate doesn't play nice with js files, but told me that he would keep it in mind for v 2.0. Yay, I made a contribution, I think? Anyway, time to find a second option.

I looked into blast.js for a bit before I ended up with the conclusion that there was not enough documentation around it, and since we wanted this built pretty quickly, there really wasn't any time for me to experiment. I ended up settling on animate.css, and settled with having the entire string of text animating instead of the words individually. A little css and JQuery magic later, and viola, it worked!

Pretty much the entire foundation was set, all I had to do was figure out the sharing buttons and it was on to design. The facebook and LinkedIn share buttons were fairly simple, given they don't allow you to take text from the innerHTML and place it into the share dialog, but I've seen twitter share's that let you, so I scoured StackOverflow until I finally had something that worked.

###Design
Now, the design. Ryan mentioned that he wanted something that looked like a generic startup landing page, and I found the perfect template on StartBootstrap. I cut off the navbar and everything but the main image /container, set the overflow to hidden and it was perfect. All I had left to do was migrate the JS files and format the HTML to match, and winner winner chicken dinner, ImCrushing.it was ready.

While working on editing the resolutions however, we figured the "generic startup starter kit" background image wasn't ironic enough. Like it conveyed a message, but not the one we wanted. That's when we decided to go with the current image, because it pokes fun at people who overly identify as millenials and hipsters, the kind of people who spend all their time at a coworking place cause it's the "hip place to be".

As much as we loved the picture, the fight to stay modern left us in defeat. What I mean by this essentially is that the image file was too small, which left it looking fine on smaller mobile devices like the iPhone 5, open the app on a larger device however like an iPhone 6plus or a laptop and it just looked like hot garbage.
Finally we went with the image that is on the website now, an image akin to the ones you’d find on an inspirational tumblr quote.

We did not intend to offend anyone with this program, but we probably did.

---
_ImCrushing.it is Open-Source, and can be found [here](http://github.com/snazzyham)._
