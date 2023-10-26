# ShelterHelper

This Express/MongoDB app is conceived with the intention to aid animal rescues in the upkeep of their daily tasks and tracking their current roster of "tenants"

It will have 3 Resources: User, Animal, and Log

User - Employee of shelter
Animal - Animal tenant at shelter
Log - a displayed log of all tasks completed that day to track accountability and efficiency



## APIs Used

Google People to give users a profile avatar

* clone this repo (no forking needed) and cd into the new directory
* run `rm -rf .git` to remove the git history
* run `git init` to create a new git history
* run `git add .` and `git commit -m "init commit"` to create the first commit of the repo 
* create a new repo on github and follow the instructions to push an existing repository from the command line
* run `npm i` to install the required packages
* touch a `.env` file and add the following to it:

```shell
DATABASE_URL= < copy mongo uri from atlas / previous project >
GOOGLE_CLIENT_ID= < copy from google cloud devs / previous project >
GOOGLE_SECRET=< copy from google cloud devs / previous project >
GOOGLE_CALLBACK=http://localhost:3000/oauth2callback
SECRET="can be any string"
```
* run `nodemon` to test your app!

Use this readme as your project pitch! 
