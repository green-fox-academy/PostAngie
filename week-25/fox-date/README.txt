          ### Create Profile page

          - Has a form with inputs for the username, nickname, own gender, target gender,
          birth year, profile picture URL, self-description and a submit button.
         - All fields except for the self-description are mandatory.

          The form must be validated.
              - None of the mandatory fields can be empty.
              - The profile picture URL must be a valid URL.
              - The person must be at least 18 years old to be able to register.
              - The username must be unique (cannot already exist).
          - The form data is submitted to `POST /api/users`.
          - If the form is successfully submitted, redirects to the new user's Profile
           page.



      ### Profile page

        - Displays a user's profile picture, nickname, age, gender and self-description.
        - Redirects to the Error page if the user doesn't exist.
        - Displays an alternate text if the profile picture URL is broken.
        - Has an anchor to the user's Match page.
- 💪 Has a list of the nicknames of the user's matches. Each match has an anchor
  to that person's profile page.


### Match page

          - Allows a user to like or dislike other profiles.
          - Redirects to the Error page if the user doesn't exist.
          - Has a page header that displays the active user's username with an anchor to
            the active user's Profile page.
          - Displays a random person's profile.
          - Has a 'Like' and a 'Dislike' button.
          - The 'Dislike' button should load a new random profile.
          - The 'Like' button should send a `POST /api/likes` request and then load a new
            random profile.
          - If the liked person has previously liked the active user, displays an alert
            that says "It's a match!" before loading the new profile.


              ### Error page

              - A static HTML page that is displayed if a user doesn't exist.


                ## HTML endpoints

                ### `GET /`

                - Loads the Create Profile page.

                ### `GET /profiles/{username}`

                - Loads the user's Profile page.

              ### `GET /match/{username}`

              - Loads the user's Match page.

## API endpoints

          ### `POST /api/users`

          - Stores a new user's profile data in the database.
          - Returns 201 Created status on success.
          - Returns 400 Bad Request status if a user with the given username already
           exists.
          - The request body should contain a JSON object in the following format:

                ```
                {
                    "username": "brad63",
                    "nickname": "Brad",
                    "birth_year": 1963,
                    "gender": "man",
                    "target_gender": "woman",
                    "self_description": "I'm smart and wealthy.",
                    "profile_picture_url": "https://images.com/brad.jpg"
                }
    ```

          ### `GET /api/users/{username}`

        - Returns the selected user's profile data.
        - Returns 404 Not Found status if the user doesn't exist.
        - Calculates the user's age from the user's birth year.
- 💪 Includes an array of the user's matches. *Hint: either use self-join or
  store match status in the database.*
      - The response body should contain a JSON object in the following format:

          ```
          {
              "username": "brad63",
              "nickname": "Brad",
              "age": 58,
              "gender": "man",
              "target_gender": "woman",
              "self_description": "I'm smart and wealthy.",
              "profile_picture_url": "https://images.com/brad.jpg",
          💪 "matches": [
                  {
                      "username": "angie75",
                      "nickname": "Angelina"
                  },
                  {
                      "username": "jenny69",
                      "nickname": "Jennifer"
                  }
              ]
          }
          ```

            ### `GET /api/random-user`

            - Returns a random user's profile. *Hint: read [this
             article](https://www.mysqltutorial.org/select-random-records-database-table.aspx)
            to find out how to query random data from a database.*
            - Returns the same JSON object that the `GET /api/users/{username}` endpoint
              does, except for the user's matches.
            - The active user's profile should be excluded. *Hint: the client should send
              the active user's username in a header or in a query string parameter.*
- 💪 The returned profile should match the active user's sexual orientation.
  *Hint: either send two SQL queries or use sub-query.*
- 💪 Those profiles that the active user has already liked should be excluded.
  *Hint: use sub-query.*

            ### `POST /api/likes`

            - Creates a new Like entry in the database.
            - Returns 201 Created status on success.
            - Returns whether it is a match or not (i.e. the target person has previously
              liked the active user or not).
            - The request body should contain a JSON object in the following format:

                ```
                {
                    "source_username": "brad63",
                    "target_username": "angie75"
                }
                ```

            - The response body should contain a JSON object in the following format:

                ```
                {
                    "matched": true
                }
                ```
