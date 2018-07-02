---
title: The Case for Modular and Functional CSS
slug: functional-css
date_published: 2016-05-25T01:11:37.000Z
date_updated:   2016-05-25T01:11:37.000Z
layout: post
---

Over the past couple of years, many buzzwords have arisen around CSS. Immutable, Functional, Modular, and they all pretty much mean the same thing. Write CSS as clean and simple as possible, without trying to over complicate it and turn it into a programming language. I've been trying to write clean and functional CSS for about the past year now. I try to make sure all my class names make sense and a re-usable, and also aren't to broad. 

One thing I found myself doing a lot when I first started working with frameworks was that I was over-riding classes a lot. 

Take this block of code for example;

`.btn {
   background-color : 777;
}`

In the above code, `.btn` is a class that already exists in the framework, and I was overriding the whole class to simply just change the colour. Since then I've begun writing more functional code, in the sense that instead of modifying the entire button class, I would just create a new class called `.gray-background` and apply both the classes to the element.

> "Don't be afraid to use multiple classes" - Mark Otto ([@mdo](http://twitter.com/mdo))

Once I was introduced to functional css, I was hooked. I started looking into more ways make my CSS more functional, and that's when I found out about immutable css. Essentially, the idea behind immutability is that you should have a seperate class for everything you may need, such as padding and margins. [Paul Straw](http://paulstraw.com) said this on a  podcast once and I felt like it summed up immutability perfectly; _"make it so that you never have to write CSS again, and you just have classes that you re-use all the time"_. I always thought that was a really good ideology, but it never really hit me on how useful that could be until yesterday. 

As part of a year long subject, a couple of my friends and I have to build a Public Transport app that's unique to La Trobe University. We're halfway through the subject and just completed our functional prototype for pulling API calls and parsing them into readable data. My work was mostly on the front-end and user experience, so I've been doing a lot of research and wasn't really working on the functional prototype apart form a little bit of PHP stuff. Yesterday was our client presentation and a couple of hours before it I was looking at our prototype and.. well I have no words, I'll just let you [look at it yourself](http://metrobe.imcrushing.it). Being in charge of design for this project, I wasn't going to let something with our name on it look like that. So I FTP'ed up to the server, copied over the latest minified version of [BuzzFeed's Solid](http://solid.buzzfeed.com) and set about cleaning it up. Within 15 minutes it [transformed into this](http://metrobe.imcrushing.it/styled.php), all with me writing a total of 0 lines of CSS. Being a framework built with the idea of immutability, Solid worked brilliantly. All I had to do was pop in a couple of classes, clean up the code and the site was looking, well I wouldn't say beautiful but much neater. 

From past experience I knew a project like that shouldn't take much time, but when I learned it could be achieved in a matter of minutes, all without writing a single line of CSS, my mind was blown. 

## Thoughts on SASS so far. 
When I have been writing CSS, I've been using SASS exclusively, ever since I first posted about it. However, I always felt like I really wasn't taking proper advantage of it. I'm still unsure what words like base class and mixins mean. I really only ever used SASS for nesting and variables, which has worked great for me so far. I've always felt like I should try and use SASS more, and try and squeeze the potential out of it, but it's been pretty daunting. However, watching Mark Otto's [talk on Mdo-ular CSS](https://www.youtube.com/watch?v=UeK2czjUGCo) <small>clever pun btw</small>, I'm left with the impression that the way I use SASS isn't really a bad thing after all. I still might try to learn more about it, just for the sake of learning, but at least now I'm more confident in my SASS abilities. 

As it always is with most of my blog posts, I jumble around a lot of content and rarely ever have a decent conclusion, so instead I shall leave you with this gif. Have a nice day. 

<center><iframe src="//giphy.com/embed/5pxnxdzdZfXFK" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/css-5pxnxdzdZfXFK"></center>via GIPHY</a></p>
<hr>
<small>p.s., I'm on dribbble now, and would love if you came and checked out [my profile!](http://dribbble.com/snazzyham)</small>
