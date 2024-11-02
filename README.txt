MERN (MongoDB/Express/React/Node) Stack Application 

Application show list of services able to reserve by clients, used cookies and server sessions stored in mongodb database.

What actually done:

MONGODB DB SCHEMA:
- USERS (id, username, email, password, phoneNumber)
- SPECIALIST (id, name, address, phoneNumber, price)
- RESERVATIONS (relation between user and specialist) (id, specialistId, userId, date)
- CALENDAR (for every one specialist) (id, specialistId, data: Array(Object(date, workHours: Array, reservedHours: Array)))

FUNCTIONALITY:
USERS:
- Create user ✅
- Sign in ✅
- Check auth status ✅
- Logout user ✅

SPECIALIST:
- Create specialist ✅
- Delete account ✅

RESERVATION:
- Create reservation ✅
- Delete reservation 


CALENDAR:






