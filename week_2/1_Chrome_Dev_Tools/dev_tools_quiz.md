#### Include an inline screenshot of your codeschool's points from the profile page:

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
1. Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS:
		You can edit HTML and CSS in real time using the "element tab" but it's not perminent. If you edit in "source" you can save the changes.

  * Javascript Debugging:
		In "network", you can see when the js is being called and how long it is taking to load. You can edit the js in "source", but if the js is minified it will be very difficult to read

  * Performance Optimization: In "network" you can see how long it takes for everything to load on your page. You can also use the Google Chrome extension "Pagespeed" to do some analysis on your page.


2. What's the quick key for your OS to spawn the Dev Tools inspector?
		command + option + I

3. Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?: #0b0f11
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)


https://drive.google.com/file/d/0B7TdcfYd-KtkdF9GWTE1WV9QZ3c/edit?usp=sharing

4. For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.

That text isn't included in the website as normal HTML. When I inspect the element, I don't see the text in question. My initial thought was that it was an image, but I don't see an image tag in the HTML either.

5. Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website?
    The largest photo is the beautifully named 92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png picture of Time Square. 
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
    To find out, I clicked on the "network" tab, refreshed the page, sorted the list by size, then looked for the first picture in the list. The image is 211 x 89px and is 316 KB. It is located at:
http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?

Optimizing the images would be an easy way to optimate the website. If they did, it would cause a 885.9KiB (39%) reduction.


My Codeschool Points: 

<img src="https://drive.google.com/file/d/0B7TdcfYd-KtkelQwZmF6VUNDX3c/edit?usp=sharing">
