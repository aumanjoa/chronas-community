Chronas Community Site
=========

<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Faumanjoa%2Fchronas-community%2Fmaster%2Fazuredeploy.json" target="_blank">
    <img src="http://azuredeploy.net/deploybutton.png"/>
</a>

<a href="http://armviz.io/#/?load=https%3A%2F%2Fraw.githubusercontent.com%2Faumanjoa%2Fchronas-community%2Fmaster%2Fazuredeploy.json" target="_blank">
    <img src="http://armviz.io/visualizebutton.png"/>
</a>

## Azure deployment

after you have deployed the resources to azure you need to configure following: 
* configure web-app github deployment
* add the two needed environment variables CLOUDINARY_URL, MONGO_URI
	* for the mongodb connection string you need to use this format mongodb://{USERNAME}:{PASSWORD}@{HOSTNAME}:{PORT}/{DATABASE}, for the created mongodb databse you will find the password here https://docs.bitnami.com/azure/faq/#how-to-find-application-credentials, default username is root 


Initially built in two and a half days by the team at [Thinkmill](http://www.thinkmill.com.au) as a demo for  [KeystoneJS](http://keystonejs.com), it was then a showcase for the Sydney Javascript community - until it was forked for the community site of Chronas.


## Getting Started

To run the Chronas site locally, there are a few things to set up.

Because we have some private keys for our MongoDB, Cloudinary and Mandrill accounts, you'll need to set up your own equivalents before the site will run properly.

_If you're looking to work on the Chronas site and want access to our accounts, please get in touch_

### Install Node.js and MongoDB

You'll need node (tested with v6.2.1) and npm installed to run Chronas. The easiest way is to download the installers from [nodejs.org](http://nodejs.org).

You'll also need MongoDB 2.4.x - if you're on a Mac, the easiest way is to install [homebrew](http://brew.sh) and then run `brew install mongo`.

If you're on a Mac you'll also need Xcode and the Command Line Tools installed or the build process won't work.

### Setting up your copy of Chronas

Get a local copy of the site by cloning this repository, or fork it to work on your own copy.

Then run `npm install` to download the dependencies.

Before you continue, create a file called `.env` in the root folder of the project (this will be ignored by git). This file is used to emulate the environment config of our production server, in development. Any `key=value` settings you put in there (one on each line) will be set as environment variables in `process.env`.

The only line you **need** to add to your `.env` file is a valid `CLOUDINARY_URL`. To get one of these, sign up for a free account at [Cloudinary](http://cloudinary.com) and paste the environment variable if gives you into your `.env` file. It should look something like this:

	CLOUDINARY_URL=cloudinary://12345:abcde@cloudname

### Running Chronas

Once you've set up your configuration, run `node keystone` or `npm start` to start the server.

By default, [Keystone](http://keystonejs.com) will connect to a new local MongoDB database on your localhost called `chronas`, and create a new Admin user that you can use to log in with using the email address `user@keystonejs.com` and the password `admin`.

If you want to run against a different server or database, add a line to your `.env` file to set the `MONGO_URI` environment variable, and restart the site.

When it's all up and running, you should see the message `Chronas is ready on port 3000` and you'll be able to browse the site on [localhost:3000](http://localhost:3000).
user@keystonejs.com/admin for /keystone
### Here be ~~dragons~~ errors

#### or, how you don't have any content yet

The first time you run the site, the homepage will warn you that it expects there to be at least one meetup, and your database won't have any. Don't freak out, just go to [/keystone](http://localhost:3000/keystone), sign in as the admin user, and create one.

You'll probably want to add some other content too (blog post, members, etc) to get all the pages looking right.

... happy hacking!
