use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
    { "customer":"Tony Hawk", "emailAddress":"ProSkater@hotmail.com", "checkedIn":true},
    { "customer":"Jack Churchill", "emailAddress":"BringingSword2GunFight@hotmail.com","checkedIn":true},
    { "customer":"Alfred Yankovic", "emailAddress":"WeirdAl@hotmail.com","checkedIn":false},
    { "customer":"Nobuo Uematsu", "emailAddress":"FinalFantasyMusician@hotmail.com","checkedIn":false},
    { "customer":"Oda Nobunaga", "emailAddress":"SengokuPeriod@hotmail.com","checkedIn":true}
]);
