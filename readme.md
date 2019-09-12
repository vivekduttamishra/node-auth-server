# O Auth Server [Work In Progress]


## Introduction

This is a simple **OAuth** Server created in NODEJS. The server is meant to provide authentication to SPA clients. The server provides a simple way for

1. registering an app for requesting authentication
2. authenticating a client and passing **JWT Tokens** 

##### This server is more for experiment and is NOT a production ready server

## Configuration

The application uses **dotenv** package to implement its configuration.

The application needs following configuration 

* PORT  
  * port on which the express server shall run
  * default is configured to 5000
* CONSTR 
  * Uses mongodb to store the data
  * you need to provide connenction string
  

##### A sample .env file
***
```text
PORT=5000
CONSTR=mongo-db-connection-string
```
***

##### Important Note

* This repository doesn't include .env file
* It is recommended to include **Environment Variables** rather than ~~.env file~~ during production







   