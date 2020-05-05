use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
    { "customer":"Adolf Mitler", "emailAddress":"AdolfMitler@hotmail.com" , "checkedIn":false},
    { "customer":"Tony Hawk", "emailAddress":"ProSkater@hotmail.com", "checkedIn":true},
    { "customer":"Kim Jong Un", "emailAddress":"amNotDead@hotmail.com","checkedIn":false},
    { "customer":"Boris Johnson", "emailAddress":"givingGuestsCovid@hotmail.com", "checkedIn":true},
    { "customer":"Justin Trudeau", "emailAddress":"amATeacher@hotmail.com","checkedIn":false},
    { "customer":"Anne Frank", "emailAddress": "NinjaInYourAttic@hotmail.com","checkedIn":true},
    { "customer":"Jack Churchill", "emailAddress":"BringingSword2GunFight@hotmail.com","checkedIn":true},
    { "customer":"Alfred Yankovic", "emailAddress":"WeirdAl@hotmail.com","checkedIn":false},
    { "customer":"Nobuo Uematsu", "emailAddress":"FinalFantasyMusician@hotmail.com","checkedIn":false},
    { "customer":"Oda Nobunaga", "emailAddress":"SengokuPeriod@hotmail.com","checkedIn":true}
]);
