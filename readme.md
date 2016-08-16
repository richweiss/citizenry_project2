Day 0 | Aug 10th
 * Notepad Brainstorm & Gameplan Draft
1. Wireframe
2. User stories - Trello
3. Touch readme.md - keep track of thought process 
4. Set up new Heroku use current (richherokuapp) as reference : (SAVE FOR MONDAY)
5. Touch files needed - html, css, app.js, schema.sql, seeds.sql, show.html’s etc, 
6. Create Database (two tables min, if not more) using PSQL/node.js
7. Do ajax calls for API
8. Use Google Materialize for CSS
9. Debug & Clean up code where needed

Bryan stuff - form & encryption/authorization
 - eliminates #3 & #5

IDEAS
<!-- 
  Scrapped Idea:  
    app that ….
    - pulls songs from soundcloud
    - connects them wth P4k review (JOIN TABLES)
    - users can POST comments (forum) --> 
 
    Find a Problem: I want people to go take their political rants elsewhere so facebook feeds can be decluttered and focused on what really matters between friends: FOMO creation, stalking your ex's, and silly videos of cats & dogs. 

    Working Idea: Citizenry - an activism site/app where users can research and discuss political views with opportunities to contribute to petitions or meet IRL.

        User Stories: As a User, I want to... 
                      * search Petitions by Search Type/Topic
                      * have my Log IN (Session) saved. 
                      * my Searches to be Saved so I can see my journey & what I am trending toward.
                      *  POST comments under specific Petitions so discuss topics with other Users.
                      *  EDIT  & DELETE those comments.

* MVP: Get the damn searches to appear on a redirected page.

Day 1 | Aug 11th

* Convo with John - holding off on creating new Heroku on Monday
    - I saw possible issues arising from initializing a Heroku git inside of my P2 folder (desktop, separate from Pangolins git) was already git initialized. 

* Tranferred Bryan's demo auth express files.
    - Touched Citizenry_Project2 to desktop
    - Copied demo auth boilerplate .zip
    - Created git & initialized
    - Git added, initial commit, pushed. 

* Installed Node Module WhiteHouse
    - https://github.com/change/node-whitehouse
    - ("npm install whitehouse")

* Meeting w/ Irwin
    - set aside whitehouse npm
     -helped hit API using Postman
    - no need for key in url; key retrieved is for Write API (?) usage

Day 2 | Aug 12th

* Added 'click' to script.js', check html usage

# Notes 
    - script.js = 
        front-end, 
        use AJAX to pull your Petitions when Searched,
        must APPEND to DOM to SEE 
    - app.js = 
        back-end,
        .gets are for your Routing - 
            -these routes need VIEWS (touch html's)
                -display from our DB (using res.render)
    - use MUSTACHE later to view linked DB info in HTML's

# Inquiries - UPDATE: Jared was able to help with Main Issue & answer all inquiries. He is a rock star! Still confused a bit on the ROUTES section, but everything is very clear. 
    - MAIN ISSUE: creating my SEARCH form (do I do this under USERS folder to touch a new html?) for users already LOGGED IN
                
                - THEN connecting that to 'click' button in script.js to html where SEARCH box is
                    
                    -THEN take that SEARCH INPUT - make a as a VAR in script.js (?) to the end of API in AJAX call

                        - THEN saving those SEARCHES into my DB - how do I do this? 
                                    - Will I need to "UPDATE TABLE searches" in schema.sql/seeds.sql
    - Other Inquiries:
        -  what is this ROUTES folder doing & do I need to utilize it?
        - Bryan's db is auth/ - should I create another one or using this one is ok? I'm assuming the latter, but need to check. 


Next Steps
        - sessions setup - sign up , log in , create users, 
        - grab from server - add to DB 

Day 3 & 4 | Aug 13th & 14th

    * Confusion & Disjointed Thoughts = Panic, Fear, & Self-Doubt 

    * Tacked on code for updating Users and Deleting. 

    * Need to touch new html.files, subfolders so app.js routes have a home.

    * Adjusted app.js so Login page appears, not Welcome page with Search button.

Day 5 | Aug 15th

    * Starting to write commentary in app.js to describe what each thing is DOING or trying to DO. 

        - Source of weekend struggles was looking at code, then having an idea of what it did, but then jumping between different parts until the logic became overwhelming. This "breadcrumb" trail of comments should keep me steered in the right direction.

    * Classmate informed me we didn't need to utilize our app.js (?) at all after using boilerplate and work only in script.js. Not totally sure if that is accurate, but if so oy vey.

    * Coding paralysis - have been looking to eliminate sessions/create & users/create htmls. 

        - Need to to login - have session saved.
        - Redirect to users/index = (You are logged-in now Search) 
        - Have commented out additional code in app.js & script.js until above issues are resolved.

        - Asked classmate Mike for help via pseudocode out loud. Appending issues most likely from giving res.render('filepath') but not feeding it any data res.render('filepath', data)

        - node error ocurring. Q'ng Jared for help

        - Revisiting after break. Going back to Login. Not saving. Am I telling it to save? CREATE USER in script.js. This has to happen in Sign-up page.
           Problem: (*UPDATE: RESOLVED stepped away and tried a few things*) Sign-up page not appearing on DOM. http://localhost:3000/users/new
                -looking at app.js for fix
                    - this does not work, needs second value? Can't remember
                        app.get('users/new', function(req,res){
                        res.render('new')
                      
            - New Problem: users/create says (cannot post /users/create) - SAVING LOGIN SESSION
            - Is my 'click' picking up both sets of from Search Petitions and Submit for Create User?





