What is a Service Workers?

-Service Workers live in their own thread (Website). Think of thread as a chef in a kitchen. Everything you wanna do in the website like rendering html, css, state manager, javascript, scrolling is controlled by a main thread.The main thread is doing all this work for you sometime when there are a lot of orders then it becomes backed up and  the site may start lag.

-Web workers are like sous chef getting orders from chef allowing the chef to do their work and working on their order preventing orders from backing up.

-Service workers are like a special kind of web worker where they're handling their thing like network request. Service workers allows the website to go to a server and getting html, css, and js files.

-If the website(thread) is offline or a lot of traffic where there is slow network, then the main thread or website will not be able to respond at all meaning the website will not render any thing. What will happen is that the main thread will go to the service worker and ask for certain files to see if they're in stock. If the service worker have the requested files, then the main thread will retrieve these files. 

-Service workers ( act as a Proxy) sits in between network and website where main thread can grab files provided by service workers (html, css, js, assets) without going to the server or network. This allow website to work partially offline or offline. Service workers decides what files to store. Service workers will only work for browsers that supports which is the majority

-Service workers mainly intercept http request decides how to handle them 

-Workbox is a library that helps developer write code for service worker

-When a service worker gets called, a request is made to the website for index or asset (html, css, js, etc) instead of going straight to the internet and find these files, it will go first to the service worker 1st. Then the service worker is going to find a way to give files back in workbox this is called "routing". Routing allow us to map a request going to the network to things we want to provide. Strategy is how we respond to route or how we will deliver for the request being made. There several strategies like (NetworkOnly, cache first (good for images), stale-while-revalidate(good for html, css))

-You will use a Service Worker for Handling assets request and how to give those assets to the website either looking into cache or going to network