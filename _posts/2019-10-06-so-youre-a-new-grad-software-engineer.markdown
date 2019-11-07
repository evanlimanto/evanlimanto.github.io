---
layout: post
title:  So You're A New Grad Software Engineer
date:   2019-10-06
---

Or, “*What I Wished I Had Done When I Started as a New Grad Software Engineer*”, but that's too clickbaity.

<br/>
It’s your first day of work after graduation.

You walk through the office entrance and greet the receptionist, secretly relieved that you no longer have to endure *yet another visitor check-in on Envoy*. Someone cheerfully greets you, motioning to follow them to your desk, where everyone on your new team looks deeply engrossed in work. You reassure yourself that this is the opportunity you’ve been looking forward to.

The next few days pass by in a blur, punctuated with onboarding talks whose dense content you’ll probably forget, and coffee chats with more co-workers than you can count from various teams at the company. You eventually settle into a routine, doing biweekly sprints with your team, building new features, engaging in one-on-ones with your team members, et cetera.

Eventually, you begin to ask yourself: **how do I actually succeed at this job?**

As a new grad engineer, what I would’ve loved when starting out is a concrete list of less obvious aspects of the job that I could've focused on to perform more effectively and grow faster. Think side quests in your favorite RPG that, when completed, give you experience, gold, and maybe, special items.

In this post, I outline a few thoughts as advice I would've given my younger self. These are the most important lessons I’ve taken away in my first year working as an engineer at [Plaid](https://plaid.com), ones I wish the younger Evan knew and performed.

### Lesson #1: Understand the End-To-End Service Architecture
In your first few weeks, you’ll likely be tasked with building new functionality and fixing a handful of bugs. Most likely, this work will be constrained to only one or two services. Furthermore, you may be overwhelmed by the abundance of information that you need to pick up to properly start contributing to your team.

I would argue that one of the most valuable pieces of learning you can acquire is a strong mental model of all the existing services. Learn what each one does at a very high level, and how they talk to one another in the overarching dependency graph. Understand the philosophy behind each service and the objectives they’re trying to achieve. Then, drill deeper into the implementation details as you encounter opportunities to work on a service. It helps to think about this like [Elon Musk](https://fs.blog/2015/01/elon-musk-knowledge/) does with knowledge.

Doing this is much easier if you’re working at a small startup; the scale and complexity of services often correlate strongly with the size of the team. If you're working in Big Tech, do this for your engineering group or division, and limit the scope to the immediate customer-facing product your code will affect.

This is important for a number of reasons.
- It helps contextualize how your work will eventually affect end users.
- It improves your understanding of how the product works.
- It’s important for engaging in high-level architectural discussions.
- It will enable you to drive changes across multiple teams.

Conveniently, engineering teams are usually structured around service boundaries, so this could be a nice mnemonic to aid in learning about the various services. Granted, it may be difficult to internalize, but having a diagram of boxes and connecting arrows definitely helps. Get a senior engineer to draw one for you and stare at it before you go to sleep every night.

Not doing this has been one of many regrets I’ve had over the past year. I should’ve done this immediately during the onboarding process, but I shook it off as unnecessary at the time. Realize that knowledge compounds over time, and having a strong mental model of the entire service stack is a crucial building block in better understanding how an engineering organization works.

I apologize to my past self for the foregone growth.

### Lesson #2: Learn the Fundamentals of your Tech Stack
You can get by well just knowing how to code and conjuring magical data structures and algorithms from thin air, as was taught in college. In fact, this is mostly what companies test for in software interviews. However, building systems involves so much more than just writing code. Consider what it takes to get production-level code running.

Here’s a quick list off the top of my head.
*Logging, Secrets, Metrics, Containers, Servers, Databases, Load Balancers, Queues, Inter-Service Communication, Continuous Integration, Deployments*, and so on.

Unfortunately, most of these are things you will never learn in college, at least if you went through the traditional US computer science curriculum. That’s fine. You’ll pick up the necessary skills quickly on the job, and learn to utilize these fancy, powerful tools in no time.

Nonetheless, I would argue that it's valuable to go beyond just “knowing how to use tool X from skimming examples” to “understanding the internals of tool X or language Y by reading online documentation, blog posts, and code”.

For example, there is a substantial difference between knowing how to use [gRPC](https://grpc.io) — ”Oh, this lets us call typed functions in different services? Cool!” — and grokking that the underlying implementation utilizes HTTP/2 and maintains persistent connections between clients and servers. From experience, investing a bit of time into reading documentation and blog posts about the internals of gRPC has enabled me to make better architectural decisions and quickly debug failure modes in your system. Furthermore, since this is often something that few people do, you get to be an expert in a niche part of your company’s tech stack. People will eventually come to you bearing gifts in exchange for your sage advice.

This generalizes to various technologies used by your engineering organization. Of course, there’s diminishing returns in investing too much time into learning; you still have a day job to tend to creating business value. A good litmus test I often use is seeing how well I’m able to explain the benefits and downsides of a technology to someone else. You should aspire to be able to walk up to a random engineer and start a 5 minute long conversation about it.

Now go read up on the logging infrastructure at your company.

### Lesson #3: Move Fast and Improve Things
You may have heard the now Silicon-Valley-famous quote, “[Move Fast and Break Things](https://xkcd.com/1428/)”. Long story short, you do not want to be embodying this ethos, despite all that pent-up post-graduation excitement of wanting to write code and ship a ton of features. Though “Break Things” was probably meant as a hyperbole — unless Zuck actually wanted Facebook engineers to break things — it does instill the mindset that it’s fine to ship breaking changes, as long as you’re moving quickly.

I prefer the phrase “Move Fast and Improve Things”. The subtext here is that systems are already functional in the first place i.e. nothing is broken, for you to be able to improve them. I would argue that Moving Fast and Doing Things Correctly are things already expected of us as engineers who have passed the 6 feet high interview bar.

Making things better, on the other hand, is much more of an acquired skill. *First*, you have to notice that something is missing; in my experience, this comes only with, you guessed it, experience. Forgive the [diacope](http://rhetoric.byu.edu/Figures/D/diacope.htm). *Second*, you need to take the initiative to either communicate this gap to other engineers, or allocate resources (time, mental energy) to fix the problem yourself. *Third*, and finally, this change needs to be announced to people who care about them. Because hey, [if a tree falls in a forest](https://en.wikipedia.org/wiki/If_a_tree_falls_in_a_forest)... you get the point. It’s a nontrivial amount of effort to improve things, especially if they’re not related to your sprint goals. However, everyone else will thank you for making their lives easier.

I’ve done this enough over the past year that I have a mental list of low hanging, high ROI improvements dangling from my brain tree. Here it is, for your perusal:
- Developer Tools (linting, third party package versions)
- Monitoring (metrics, alerts, logging)
- Interface Refactoring (improving readability and maintainability of code)
- Bugs and TODOs from **[Insert Your Favorite Issue Tracker Here]** that no one ever bothered to work on because they’re nice-to-haves, but not crucial

One hack I’ve come up with to help me manage such a list is to maintain a backlog of tasks (use a priority queue) that you can pick off from whenever you’re blocked on your main sprint work. I would place quality-of-life improvements and bug fixes that are non-urgent here. Of course, project work would preempt working on these so-called “improvements”.

In a similar vein, the blog post titled [Done and Gets Things Smart](http://steve-yegge.blogspot.com/2008/06/done-and-gets-things-smart.html) is an excessively verbose rant that makes for good bedtime reading.

### Lesson #4: Understand that Processes are a Necessary Evil
We’re not talking about the Operating System concept of a process here. As quoted from the dictionary, a process is “a series of actions or steps taken in order to achieve a particular end.” As abstract as the concept is, I did not fully internalize it until I started working full-time.

I'm not a huge fan of processes, and held a stronger disdain for them when I first started on the job. They reek of bureaucracy — or whatever it is people in suits do all day — and are antithetical to engineering values like moving fast and iterating quickly. In fact, to my delight, I’m convinced that everyone I work with share a similar contempt for processes.

However, I’ve come to realize that processes are very important for ensuring long term business value. Not only do they ensure that a commonly done set of tasks can be committed to and improved upon, they also minimize variance in doing those tasks in large teams. Processes ensure execution consistency and are necessary because unlike software, humans are moving parts that often make mistakes.

It’s true that they introduce friction and complexity into getting more concrete things done, but I’ve come to realize that processes are [essential complexity](https://en.wikipedia.org/wiki/Essential_complexity). In fact, processes are what hold the fabric of an organization together as it grows. If every engineer in a team of 50 were to use guerilla tactics to ship features however every one of them preferred, imagine the chaos that would ensue.

Processes can take many forms, and include the following things.
- Writing a Technical Spec for huge projects.
- Documenting unknown parts of the system.
- Doing a Postmortem for all production issues.
- Sending out a message to communicate any important change to a system.

The astute reader may notice a common thread among all of these: they involve communicating information about something to other people on the team. There is one silver lining here though, which is that overcommunication is never bad. Not communicating things is almost always worse than communicating, unless you’re working on secret projects with classified information.

### Lesson #5: Write more ~~Code~~ Documentation
Concretely, your job as an engineer is to solve business problems and deliver value to the company. The implementation of this mostly involves writing code and shipping features, but there are often more important tasks. One of these, as was hinted at earlier, is writing documentation.

Documentation may take various forms: code comments, commit messages, emails, google docs, wiki entries, README files, and so on. The format depends on the context in which the information will be used. For instance, emails serve as a wide-reaching, permanent, and searchable documentation format that should be used for non-urgent content such as important announcements or engaging in longer-term async conversations.

Here are two less obvious, yet crucial purposes, that are served by docs.
- They reduce the [bus factor](https://en.wikipedia.org/wiki/Bus_factor) on your team.
- They act as a permanent archive for temporal context that will inevitably fade.

The more documentation you write, the better and faster you get at it. Inevitably, technical writing is a valuable skill to have throughout your entire career, and there is no better time to start than now. It’s one of the most scalable methods for information diffusal (as compared to more transient methods such as speech and instant messaging), and becomes more consequential as the organization grows. Now, do you want to *Improve Things*? Go write some docs and send it out to your team.

This [blog post](https://fatbusinessman.com/2019/my-favourite-git-commit) showcases a fun little example of a page-long git commit message for a single character code change, an epitome of valuable [documentation](https://www.divio.com/blog/documentation/).

### Conclusion
Having touched a lot of systems and worked on a myriad of different things over the past year at Plaid, these 5 points have been my most important takeaways. These are personal lessons that may not apply to everyone, so take these with a grain of salt. I still hope you find them useful for your burgeoning career.

Thanks for reading!  
  
<br/>
Special thanks to Joanne Lee, Jeffrey Wang, and Michael Cypher for having graciously offered their time to review this post.
