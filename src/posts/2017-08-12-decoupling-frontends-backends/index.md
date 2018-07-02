---
title: Separation of Concerns, even in personal wesbites.
slug: separation-of-concerns
date_published: 2017-08-12T13:43:00.000Z
layout: post
--- 

_**disclaimer:**_ _I tend to write a lot more than necessary, especially when I start writing. The real thoughts of this blog post start under the title that says **NOW**. Thanks._

I've long been a believer of the idea that we should decouple our frontends from our backends. I've built multiple all inclusive apps, and since last year have transitioned to separating my concerns, after finally learning what REST API's were and how they worked. I'm not going to go into detail about why I think that way of thinking is better for big projects, apps and services, because frankly speaking, you can find a lot of resources on the web that will explain it way better than I can. 

One area where I haven't seen this concept is when we talk about personal websites. Partly, that's because personal websites are so varied in the way they're built, updated and even purposed. Some people use their personal website as a showcase of their skills, some see it as an online resumé and portfolio, while others just see it as an "about me" of sorts. Some use just a blog, because they believe that their thoughts are where their value is. No matter which category you fall in, there's probably a website engine or CMS out there for you. Now I can't speak for all of them cause I haven't tried _"every"_ system out there, but I haven't had the best experience with these platforms. To explain it clearer to you, below is my website journey;

# My Website Journey
## 2012
I didn't know how to code. Hell, I didn't even know I wanted to code. At this point I still thought I would go to film school. One thing I did like doing however, was writing. TechnoBuffalo was my bible at this time, and writing about tech is all I wanted to do. I started a blog on blogger called TechnoCastle (inventive and original, I know /s). 6 months later I wanted to change my theme and blogger didn't have the best selection, so I moved to WordPress.com. I was happy with it. 

## 2013
Late 2013, to be specific. I had just left my job at an e-commerce services company where I worked on the admin and management side of things, but had learned a few things about CSS and UX best practices from the people there and I wanted to put my skills to the test. I got a server and installed wordpress on it and got customising. It was bad, but I was happy with it. 

## 2014 
TechnoCastle was fine on wordpress, but I wanted a personal website. I had taken an introductory HTML and CSS course on Codecademy, but I wasn't skilled enough to build my own website from scratch. I wanted something like Squarespace and Tumblr, where I could modify the CSS if I wanted to, and found Strikingly. It was great. 

## 2015  
I had gotten into coding a bit more, and felt like I needed a website built from scratch. Mostly, I found Materialize.css while browsing around and wanted to play around with it. However, I also wanted to blog about my coding journey, so I started a Ghost blog on a subdomain (and retired TechnoCastle) and was fine with that, but it felt really weird. When people went to my blog, it looked nothing like my website. 

## 2016 
My hosting provider was a shady bloke who I'm pretty sure was siphoning server space from his employer, and sent me an email saying that Ghost, which was powered by Node, used way too much processing power and that he had to shut me down. I decided that paying for hosting for just a blog wasn't worth it, and I had just heard about Jekyll and Github pages. I needed something quick and temporary, I was busy with university stuff and for some reason couldn't stand the thought of not having a website. I found a theme built by someone I really look up to - [John Otander](http://johnotander.com/) - and forked it, customised it a little and threw it up. However, here was a big issue. My ghost blog had exported my old posts as CSV. Maybe there was a JSON option, I don't know. Anyway, I had to manually copy and paste the blog posts into markdown files, add the Jekyll front-matter manually and I basically did that for 30+ posts. It took me quite a while. Maybe that's the reason I'm still using that Jekyll website at the moment, because the process of exporting the posts was so painful. 

# _NOW_

It's now **August 2017** and I'm finally planning on building a new personal site. I've been thinking of it for a while, but I've been putting it off each time. One thing I know I'm not going to use is Jekyll. The process is just such a pain. Each time I have to write a new post, I have to format it with the date and slug as the title first (which is formatted in the American way so it always takes me a bit) and then rebuild the website and check to make sure it looks right and then push the website up to the server. It really isn't the most efficient. 

I had a bunch of ideas for a new website. Maybe a terminal style thing, a little like a mix of [David's Workshop](http://davidsworkshop.org) and [Jon Gold](https://jon.gold)'s websites. Then I thought, maybe just go back to Ghost and have an easy place to blog. The problem with that is, if I ever wanted to move away, exporting posts will be another pain. Then I thought of doing what Brent Jackson does, and keep a simple blog powered by Jekyll (in my case I would use Gatsby because of React) separately, and that way whenever I change my personal website - which happens often - I wouldn't have to worry about changing the blog. A sort of idea of decoupling the blog from the main website. It was at that moment that I took that idea and turned it on its side. What if, instead of decoupling the two full systems from each other, I decouple the frontend from the back? 

Services like [json-server](https://github.com/typicode/json-server) make it stupidly easy to get a REST API from just a json file sitting in a directory. I could host that on [Now](https://now.sh) and not need to worry about pushing up to a server at any time because it's literally just three letters that I need to type, and if I ever want to change the frontend, which I'll probably want to do often, I can just leave the API as is. The only issue would be compiling the markdown to JSON for use with json-server but I'm sure I could build something that just converts all the markdown to JSON and formats it the way json-server needs. 

So far, these are my thoughts. If it all works out well, my next blog post will go straight into the API, instead of this Jekyll blog, which has served me well while it lasted. 

Signing off for now,  
Soham