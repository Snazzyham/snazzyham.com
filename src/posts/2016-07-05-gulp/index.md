---
title: My first steps with Gulp
slug: gulp-steps
date_published: 2016-07-05T05:01:00.000Z
date_updated:   2016-07-05T05:02:34.000Z
layout: post
---

I've just spent the last 2 days working with Gulp, and I have a lot of thoughts. Granted, this wasn't my first time using Gulp (I had used it previously to compile SCSS on the Percolate website), but it was my first time actually trying to understand what it does instead of just copying code off the internet.  

### What the heck is Gulp?  
It's hard to explain, but essentially, Gulp is a _'build tool'_, that runs in the command line _(or terminal)_, that automates some stuff for you. Therefore, running a simple line of `gulp`, let's me compile my SCSS and run a bunch of compression and compilation tasks and what not.  

My foray into this whole Gulp rabbithole started when I was following [this online tutorial](http://andrewhfarmer.com/build-your-own-starter/) to build your own starter kit. As I was going through the steps, I realised how important the concept of a starter kit was, but that I didn't really need all the fancy webpack, babel and react stuff, because I don't even know React yet. So this morning, I created a new branch based off that one, removed all the bloat I didn't need, added browsersync as a web server, and I'm pretty happy with it.  

Essentially, this is what I'm using gulp for; compile my SCSS + Buzzfeed's Solid CSS framework into one CSS file, and serve it on a web server. That's pretty much it actually. Wow, I just spent a lot of time to do something that small. hmm.   

I plan to add some stuff to my Gulp process, such as Jade compilation if I ever end up switching to Jade, Jekyll stuff, because I plan to learn Jekyll and some small things such as image compression and what not.  

You can view the starter kit I'm referring to [here](https://github.com/Snazzyham/webStarterPack/tree/basic). 

