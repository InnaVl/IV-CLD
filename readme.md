# MENTORING PROGRAM

This is Angular 2 application.For this moment allow to add and edit tasks.
To add task go to calendar page and add task, to change date, add description set priority go to tasks.

## to run server go to folder server and run
 ` npm start `
## to run app go to client folder and run
    ` npm start `
## to run test
    ` npm test `
## for detail coverage information after npm test find folder coverage




## Tasks
- TDD
    0. Nothing done
    1. Create and fill navigation list
    ### Navigation list for login page
   Navigation list
   - create user mode;
   		-- user information;
   		-- tasks;
   - auth;
   		-- login fn;
   				-- find user by credentials;
   				-- give access if registrated;
   				-- save user data in localstorage;
   				-- navigate to home page;;
   		-- logout;
   				-- remove from local storage user data;
   				-- navigate to login page;
   - login page;
   		-- template;
   		-- login
   - registration page;
   		-- template;
   		-- registration fn;
   				-- check all input data;
   				-- create new user;
   				-- login after creation;
   				-- navigate to home page after login;
   				-- notify when new user wasn't registrated;
    2. Write tests according to this list
    3. Write code to make all tests pass
    4. Make interface for this logic and use it in your project


- NodeJS
    -- Use Nodejs for creation server side
    -- Create some communication between client and server (REST, WebSockets, etc.)
    -- Use some DB (mongo, redis, etc.)
    -- Describe your application in readme.md in your repo.

- BEM Responsive Design
  0: Nothing done
  1: Static page with calendar created
  2: CSS framework used (Bumla)
  3: BEM methodology used (on calendar page)
  4: Visual themes added
  5: Page is responsive/adaptive
  6: Printer-friendly version available(on calendar page only)

- Angular 2 (use ctrl + shift + F to find implementation)
    -- Use simple routing configuration and create simple SPA using at least  3 components.
    -- Implement Feature Area with its own routing, implement access to router parameters.
    -- Implement child routes with the following guards: canActivate, resolve.
    -- Implement lazy-loading routing with canLoad guard.
    -- Implement custom preloading strategy.
    -- Implement canDeactivate guard for one of your forms
    -- Implement SEO (title) for your application



