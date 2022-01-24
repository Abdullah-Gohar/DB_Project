Insert into Users
values(001,'abc123','Abdullah'),
(002,'abc123','Mishal'),
(003,'abc123','Ammar'),
(004,'abc123','Shazray')

Insert into Admin
values(001),(002),(003),(004)

Insert into Room
values (1,4,599.99,Default),(2,3,399.99,Default),(3,3,399.99,Default),(4,3,399.99,Default)
,(5,3,399.99,Default),(6,1,299.99,Default),(7,1,299.99,Default),(8,1,299.99,Default)
,(9,1,299.99,Default),(10,2,99.99,Default),(11,2,99.99,Default),(12,2,99.99,Default),
(13,2,99.99,Default),(14,2,99.99,Default),(15,2,99.99,Default),(16,2,99.99,Default),
(17,2,99.99,Default)

Insert into Penthouse(RoomNo)
values (17)

Insert into Suite(RoomNo)
values(16),(15),(14),(13)

Insert into Economy(RoomNo)
values (5),(6),(7),(8),(9),(10),(11),(12)

Insert into Luxury(RoomNo)
values (1),(2),(3),(4)

Insert into Service(ServiceNo,ServiceName)
values (1,'Tennis'),(2,'Bowling'),(3,'Movies')



Insert into Users
values(05,'password','Abdullah05')

Insert into Client
values(05,'Abdullah','Gohar','03354133376','Male','abdsfnsd@gmail.com',Default)

Insert into Booking
values(05,17,'10-Nov-2020','17-Nov-2020')

Insert into Orders
values(05,1),(05,2)

Insert into FoodReservation
values(05,Default,2)

Insert into Review
values(01,5,'Good Resort',05)

Insert into Bill
values(01,'17-Nov-2020',799.99,05)





