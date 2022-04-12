# Magnafund

![](apps/admin/src/assets/logo.png)

# Description 
MagnaFund is a crowdfunding platform built with angular for the monorepo that consists of the web application for people who want to donate and the web portal, Flutter for the mobile app and ASP .NET Core for the APIs with the angular apps hosted on firebase. 

The platform  allows people to make donations and receive funds using Zimbabwe payment methods. 


# Project setup 

1. Clone the project to your local repo
- to do this you can open your terminal and then run the following command 
```
$ git clone https://github.com/crowdfundingzim/crowdfunding-web.git
```
this clones the repo

2. ```cd``` into the newly created folder and type
``` $ npm install```
This installs the required dependencies

3. To run the project run 
 ```$ nx serve admin```
This will open up the admin portal (which users who want to post donations have to open and login) in your browser on a port that it specifies in the console.


To open up the front web every user sees run the following command
 ```$ nx serve front-web```
This will open up the front portal in your browser on a port that it specifies in the console.



# How to use it
To use the web app live users can visit [https://crowdfunding-zim.web.app/ ](https://crowdfunding-zim.web.app/)

For the admin portal visit [https://crowdfundingzim-backend.web.app/auth/login  ](https://crowdfundingzim-backend.web.app/auth/login/)

# About the project 
The project was created using the following technologies

## Angular 
Frontend was built using reactjs

## APIs
The app runs on ASP.NET core APIs

## Flutter
There is a mobile version developed with flutter


## Firebase
The app is hosted on Firebase

## CSS
All styling was done using CSS




