## 10/4/2023
  ### Changenotes
+ I was fighting a losing battle so I changed the WebRouter up Slightly. Crisis Averted. It should be really simple to switch back  to the Router that was setup if we choose.

+ State variables, I cut down on a bulk of them. still can implement shared state further throughtout the login/signup/logout features

+ Logout button just returns jsx that asks if they are sure if they want to logout In my example I used it as a seperate nav page. 
  I think it will better be used like a button that pops an alert up center screen.

  ### Features in progress/needed
- Back arrow on signup to take you to login







# Create Advertisements Guidelines
#### Creating an advertisement

If Reg number exists
  Current vehicle in database is used
  No fields but Reg number required
  Mileage and # of owners are optional, but can only remain same or be incremented. (custom validation error)
  None of the other fields are modifiable, even if you decide to pass them in

If Reg does not exist
  All fields are required, any missing fields will raise a custom validation error.
  refer to Creating new vehicle

#### When Creating new vehicle

If make/model exists
  will use the one from the database

If make/model does not exists
  will create new make/model
