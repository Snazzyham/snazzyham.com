---
title: Giving Spencer a face (Pt. 1)
slug: giving
date_published: 2015-12-18T04:33:38.000Z
date_updated:   2015-12-18T04:33:38.000Z

layout: post
---

###My first foray into app development
Well, not really. Well yes, but still, no. I'm not like, going full on into iOS development with swift or obj-c, and I'm not going into full on Java (even though I would like to at some point) for Android development. 

First, the back story. When I joined Percolate a couple of weeks back, one of the first things I was tasked to do was take Spencer, a fortune telling cat-in-a-box, and turn him into an app. I prototyped it first in simple java, which didn't take too long. All I needed was an array to store the quotes, a random generator that chose a number between 1 and 'quotes.length', put that in a loop and viola, spencer 0.1 was ready. 

Obviously, the next step was to build spencer a face. I decided I would build spencer from scratch in JS and HTML. I knew I was only using Java to line it out and see what the project would look like syntactically. So I looked on github for a random quote generator, and [this one stood out](https://github.com/typefast/quote). It was simple and easy, and helped me see exactly what I needed to do. So I took that, changed the colours around, and I was left with spencer 0.11. A much lighter, and more profane version of Typefast's quote. I was on the right path. 

However, that's when something struck me. So the idea of spencer came from a project percolate had already done, and therefore they already had the fortunes and illustrations they wanted to use, which were image files, rendering my random 'quote' generator useless. It's at this point I would usually just modify the current spencer files to try and use images instead of texts in my quotes array. However, I had a feeling that in the long run, that really wouldn't lead to an efficient final product. So instead of going back to github, since I already understood how the quote generator would work, I decided to build the entire thing from scratch. However, I struggled with the decision for a bit. Did I want to build it out from scratch now, and risk having to do it again later when I decide which platform to use, or leave it and risk having to figure new shit out later? 

I decided to re-build the whole thing later. Temporarily, I worked on getting the images into the array and displaying it as an actual image ussing js' innerHTML tag. It worked well, but it still felt very prototype. 

###Fast forward 2 weeks
It's now two weeks into this, in between building the main website, and I've decided to go with Framework7 and  PhoneGap. Framework7 can be considered as bootstrap, but for building web-based mobile apps. PhoneGap on the other hand, takes those HTML and JS based apps and builds it into an actual .app or .apk file, ready to be pushed to the App Store or Play Store. I've just spent a couple of hours getting everything set up, and I'm still having some trouble getting the emulator for the sample app to build. I've also noticed, being constrained to a small laptop screen after being used to my either 22inch monitor or multi-monitor setup has hindered my productivity and speed quite a bit. I never really thought it would affect it that bad, but my oh my am I faster when I have so much more real estate to work with. 

So yeah, TL;DR: We're building the app using Framework7 and PhoneGap, and good news, **Spencer is going to be Open Source!** I haven't quite figured out which license yet, but all that can come later. Be sure to keep checking back here to keep track of progress. 
