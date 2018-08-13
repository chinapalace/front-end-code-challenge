# Avametric Front End Development Challenge

Hi there!

Thanks for your interest in joining the team here at Avametric. Part of our
evaluation process is to set an open-ended challenge which will allow you to
flex your creative muscles and give you an opportunity to demonstrate your
coding skills. We think (and hope you agree) that this is better than asking
you to scribble algorithms on a whiteboard in an interview setting.

We realize that this represents a significant investment of effort, but one we
hope will be worthwhile for both you and us. Even if your application to Avametric ultimately doesn't end up being the right fit, you are more than welcome to use what you
produce for this challenge in your personal portfolio.

If you are successful then we'll schedule you for an interview and will use what you produce for this challenge as a starting point for our discussions.

Cheers!  
The Avametric Team

## Overview

We have created a simple [NodeJS](https://nodejs.org) application which:

1. Bundles your source code and serves it through http://localhost:3000/
2. Provides **mock** data through http://localhost:3000/api/

Your challenge is to build something interesting that makes use of the mock data provided.

You can choose whichever technologies you like to create this application. Feel
free to make changes to _any_ of the files in this repository, or to swap out
any of the technologies we've provided. It's your party. 😎

## Prerequisites

1. You will need a basic understanding of [Git](https://git-scm.com/) source
   control management
2. You will need a [GitHub](https://github.com/) account
3. [NodeJS](http://nodejs.org/download/) should be installed on your machine
4. You will need to be familiar with making data requests in web applications

## Getting Started

1. Fork [this repository](https://github.com/avametric/front-end-code-challenge)
   to your GitHub account
2. Clone _your_ fork to your development machine
3. Install the package dependencies by running `npm install` (or `yarn` if you prefer)
4. Start the application server by running `npm start`
5. Open your browser to http://localhost:3000

## Submission

Email us once you have finished and send us the URL to your fork of this repository.
If you are not already in contact with one of us, you can send your email to
[avantha@avametric.com](mailto:avantha@avametric.com).

If your fork is not publicly available, just let us know and we will send you the
GitHub users you can give direct access. Feel free to create a throwaway GitHub
account if you are worried about others seeing that you are working on your Avametric project.

## Expectations

We realize that there is no way to complete a fully polished application for the
purposes of a code challenge. You have other stuff going on in your life, so focus
on the things that best demonstrate your skill and passion. If you are more
comfortable in the user interface, then concentrate there. If you like working
deeper in the code, then concentrate there and don't worry so much about making
a pretty UI.

You are encouraged to include some notes about the aspects you didn't get time
to complete and how you would plan to further develop/improve the application
given more time. Please include them in the bottom of this readme rather than in an email so that others can see them when we share your work internally.

We are looking for creativity, originality, and a good user experience in your
**application** if that's an area you focused on.

We are looking for readability, good architectural decisions, modularity, and a
solid approach to testing in your **code**.

## Found a Bug?

Congratulations! You get bonus points! Email us or submit a GitHub issue
(or even better, a pull request) and we'll get it fixed. Suggestions to improve
this code challenge are also very welcome.

## API

This NodeJS application provides a single way of requesting data.

The **[Mock API](#mock-api)** is served through http://localhost:3000/api/.
You might want to use this if you're interested in UI/UX development. It's the
fastest way to get usable data on the screen, and does not require an internet
connection. The available endpoints are [documented below](#mock-api).

### Mock API

The mock data API is available through http://localhost:3000/api/, which is
proxied to an express server running on port 3001 that servs the contents of
the `data/` folder. You can make HTTP `GET` requests against the following endpoints:

#### GET /api/partners

Returns an array of partners that can be searched for bodies. For the purposes
of this challenge there are only 3 partners available.

#### GET /api/partners/:partnerId

Returns an object representing the partner with the given `:partnerId`.

For example:

```
http://localhost:3000/api/partners/acme/
```

#### GET /api/partners/:partnerId/bodies

Returns an array bodies grouped by gender contained within the partner.

For example:

```
http://localhost:3000/api/partners/acme/bodies
```

#### GET /api/partners/:partnerId/bodies/:genderId

Similar to `/api/partners/:partnerId/bodies`, but returns only a single gender body set
object for the `:genderId` given.

For Example:

```
http://localhost:3000/api/partners/acme/bodies/female
```

## Your Notes Go Here

This project is a web app designed to give Avametric's partners visibility and control over the digital bodies their clothes are being rendered onto. My end goal for this app is for it to allow Avametric's partners to manage and edit custom body types for their customers, so the app is built towards that functionality.

My next step is to expand the API so that it could edit and create new bodies as well. Then I'll add inline editing for all the measurements displayed on the body pages. I'll also build out the functionality of the floating action button in the bottom-right of the screen. It will link to a form for creating a new body type.

I'd also like to add a more interesting graphical element. It would be great to render bodies on screen based on the measurements and have the rendering change in response to changing measurements. A marker element that layers on top of the body image, to point out the location of specific measurements, could also be a useful feature that would be easier to implement.

In the "snackbar" in the bottom-left corner, only the "shape" category is currently functional but the "gender" and "size" options will have the same functionality.

To polish the UI, my next step would be to add some subtle animated transitions between pages.

Note: The realistic user flow would start with a partner login page but I just used a dropdown selector for the purpose of this demo.

## License

This project is MIT licensed. This means that you are allowed to freely use this for your personal portfolio.
