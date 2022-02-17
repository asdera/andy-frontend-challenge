# Getting Started

#1. The approach
The first few days, I brainstormed many criteria on how to start out and read over the project guidelines. I wanted my big focus to be scalability and accessibility. 
###Scalability: 
More specifically, I want to set up an app such that it can easily be implemented with pagination. Pagination is a concept that I’ve become very involved with in my current day to day work and I think it forces many great practices of building to handle large and flexible data. Even though I didn’t end up having pagination itself working with the queries, I wanted to aim for a design where the app was meant to paginate 1000+ events once it’s well integrated with the backend.
###Accessibility: 
I wanted to create a design that was appealing to any audience of hackers. In the beginning, I created a mental design of the webpage, which later became a notebook sketch. I wanted not just to implement all the functionality, but follow a well defined design guideline as if I was working with a design team. For the design itself, I wanted to display every property of the event in an appealing and easy-to-find manner.
##The Stack
###Typescript: 
Even though I’d say I’m a bit more comfortable with javascript, I thought Typescript could help me create more strictly defined components. I thought this would improve the overall readability working with a team. Following types in Typescript is also super satisfying, and the ctrl click in VSCode to go straight to the implemations is a lifesaver. It gets annoying at times when I was trying to test a feature but had to define the type of every variable first. However, Typescript forced me not to slack off, and it was clear the code became much more readable than if I defined every type as any.
###GraphQL: 
A simple fetch is easy to implement through this project, but I’ve come to realize GraphQL is far more scalable and flexible. Aiming to be able to paginate data, the query hook was one of the first things I set up. I wanted to set up a way to query data in groups. The schemas along with typescript keeps the data well labeled which was a joy to work with.
###Ant Design: 
I was looking for a Typescript UI library and the name AntD caught my attention. It looked minimalistic and rhymed with my nickname Andy. I spent a few hours trying out all the components it had and I think I ended up getting a pretty good feel for it. After getting comfortable, I started thinking of ideas of how I could use its design with concepts that deal with large data. AntD is great for scaling so I design every component as if there would be 100-1000 events coming in at once. I used this thinking when tackling how to display the data in groups, creating skeletons, filtering 100+ events, managing large descriptions, large number of speakers/related events, etc.
#2. Next steps
Towards the end, I got in the flow of adding more and more features. But focusing on cool features as the deadline came up, my code logic felt less reliable than when I started out. For example, I can already think of more edge cases that might break the new persistent filter features. As of now, I’m glad the add-on features work for the demo but I wouldn’t extend the functionality any further. If newer features are to be based on the current features, the code must be easily readable for other engineers, reliable and well tested. So given additional time, my next steps are clear to me. Cleanup, cleanup, and cleanup! 
##Cleanup the codebase
I’m always trying to pick up more coding practices as I go, but some guidelines I like to follow are:
Keep the components small: 
EventContainer and other components relating to events are too large already. I would like to create subfolders for the components too. Some props are also passed through many layers such as the hard-coded login info. I would love to add Redux and make information fetching using selectors instead of long prop chains. I’m still new to Redux at the moment but I‘d like to try dispatch hooks for the filters.
###In-line styling:
I used component module css files to help reduce confusion between css classes rather than a large css file but there are still some occurrences of in-line styling throughout the code. When searching through nested components, big lines of styling in the render functions can get confusing. My next step would actually be to implement styled components - a styling preference of mine.
Separating reusable or large logic in utility files:
I want important logic that is to be reused by thousands of users to be reliable and well isolated. That way it can be clearly implemented with the backend or have other UI/features built on it. I would clean up the filtering logic as soon as possible. As of now, to add another filter requires adjusting the code in many areas.
###Cleanup the functionality
The security and edge cases of some newer functionality have not been well tested. When testing I would reconsider any case such as large date ranges, missing data, and data types. Playing around with the app manually would probably bring up a few of these bugs. There are also many areas of query and filtering data that would reduce the speed to take to load. I would re-evaluate my methods of obtaining event data.
###Cleanup the accessibility
I had a mental image of what I wanted the design of the app to look like. I’m very happy with how it looks so far but there are so many small bits to improve on. At this point, if a design team is available, I would get their feedback on even the small areas of position, colour, and user experience.
#3. Highlights
I’d love to give a walkthrough of any area of code. I’m happy I had an overview plan of what I wanted to build and followed most of it. Overall, I really liked the general welcoming appearance of the app and how I have a bit of fun playing around with it. I thought each property of the events were easy to access and read.
###Skeleton events (loading…)
I already mentioned pagination but I’m really glad focusing on that concept shaped how I designed my app. I’m particularly happy with how tiny details such as the skeletons of the event cards loading can give a more complete feel to the entire app. It’s a nice safe feeling knowing if a user needs a few seconds to fetch the data, they know the info is loading and they aren’t unsure if the whole app is busted.
###Challenging features
Implementing the filters was a very fun challenge and took me a few attempts with the URL params. Even though the code style could be improved upon, getting a working feature is still really exciting. It’s a confidence booster that even more complex features could be added too.
###Schedule
One last thing I’m proud of is how I managed to start the project pretty early. Even setting up small bits of the app allowed me to brainstorm overnight for new strategies. I didn’t burn myself out on a single day. Without being too time jammed, I could comfortably be creative with new features and have more time for self feedback.

# How to run
Or go to https://heuristic-mclean-61aa09.netlify.app/

### `yarn`

### `yarn start`

