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
