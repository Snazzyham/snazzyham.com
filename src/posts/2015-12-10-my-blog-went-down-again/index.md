---
title: My Blog Went Down Again.
slug: my-blog-went-down-again
date_published: 2015-12-10T14:53:08.000Z
date_updated:   2015-12-10T16:11:09.000Z
layout: post
---

so if you’re an avid reader of my blog, you would have read through that whole debacle where the cms of this blog was so messed up that I stopped using dropplets and switched to anchor instead, only to have it crash on me, requiring me to switch to ghost. Ghost worked great, I built out a nice theme for it, I spent probably 50 or more hours working on the design of it alone, and got to exactly where I wanted. I was at that point where I knew I didn’t have to do any work on it for at least a year. I had written around 11 posts in the ghost editor, I can’t really remember what they were about, but the last one was about dotfiles. 

Fast forward a month, I forgot the login to my ghost account and I got locked out. The only way to get back in, was to click forgot password, and of course, I didn’t have email set up. So I went into the config file to set it up, and for some reason, Gmail wouldn’t work. Posts on the forums suggested mailgun. I decided to mess around with gmail for a bit, but I still couldn’t get it to work. Just to give you a sense of time, up until this point, I had already spent about 3 hours on this (in between rooting my sisters old phone to give it new life). So I signed up for mailgun, and I got blocked instantly. It was one of those spam detector things. I get it, it happens. So, I created a support ticket. Around 20 minutes later I got an email from mailgun saying I had access to the account. It was at this point, I was already fed up with everything, and I noticed that MailGun and Ghost had this generator that would just let me put in my API key and it would auto-generate a config.js file for me. This seemed awesome, given I had already been fucking around with the config.js file so much thanks to the stupid gmail thing, and I wanted a clean slate. You may see a lot of problems with this. I should have as well. As soon as I replaced the config.js file, it was all gone. My whole blog, all my posts, everything. I tried going back into phpMyAdmin to see if I could salvage anything, unfortunately I was too late. It was all gone. I made no backups. 

Well, I did have backups, just none of the posts from the ghost install. This means that the 11 posts I had written on the ghost editor, were lost to the world. 
I was a little upset at first, but I’m going to take this as a learning moment, and I’m going to start backing things up. I’ve decided, as nice as it is to have a CMS with all the bells and whistles, maybe I should switch back to flat-file, cause that way I always have a backup of my posts. I host my website with A Small Orange, and as always their support was second to none. Shout out to Nick, their support shogun. They’re trying to restore my database, but I’m unsure if they’d be able to. Fingers crossed. 
As for now, I’ve got hongkiat.com open and I’m taking a look at all possible options for my next CMS. If all else fails, I’ll probably go back to dropplets, even though it sucked and has received no updates. Hopefully, another option presents itself soon. If you’re reading this on blog.snazzyham.com, hoorah, I figured it out and you’d probably have seen an update post above this one. However, if you’re reading this on tumblr, I’m probably still working through it.
 
I hope you as readers have learned something from this, and if you’re aspiring to start your own blog, please remeber, back shit up.
 
Signing off for now, 
Soham.
