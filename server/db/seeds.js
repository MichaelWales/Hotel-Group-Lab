use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
    { "customer":"Adolf Mitler", "emailAddress":"AdolfMitler@hotmail.com" , "checkedIn":false},
<<<<<<< Updated upstream
    { "customer":"Tony Hawk", "emailAddress":"ProSkater@hotmail.com", "checkedIn":true}
=======
    { "customer":"Tony Hawk", "emailAddress":"ProSkater@hotmail.com", "checkedIn":true},
>>>>>>> Stashed changes
]);
