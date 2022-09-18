# Route Sign Up
Type: post
Address: "/sign-up"
Requires: firstname, surname, email, password, CGS, newsletter
Returns: token

# Route Log In
Type: get
Address: "/log-in"
Requires: email, password
Returns: token

# Route Create Event
Type : Post
Address: "/create-event"
Requires : _id, date, title, description
Returns: message

# Route RetrieveEvents
TO BE DONE