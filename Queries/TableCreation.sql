create table Users(
	UserID int Primary Key constraint UserIDRequired not null,
	Pass varchar(50)constraint PassRequired not null,
	UserName varchar(20) constraint UserNameRequired not null
	constraint unique_username Unique(UserName)

)


create table Client(
	ClientID int Primary key constraint clientIdRequired not null,
	ClientFirstName varchar(50) constraint ClientFirstNameRequired not null,
	ClientLastName varchar(50) constraint ClientLastNameRequired not null,
	PhoneNo varchar(15) constraint PhoneNoRequired not null,
	Gender varchar(20),
	Email varchar(50) constraint EmailRequired not null,
	Constraint UserID_FK Foreign Key (ClientID) references Users(UserID),
	ClientStatus int Constraint ClientStatusRequired not null default(0)
)


create table Admin(
	AdminID int Primary key constraint AdminIDRequired not null,
	Constraint UserID_FK_Admin Foreign Key (AdminID) references Users(UserID)
)

create table Bill(
	BillNo int constraint BillNoRequired not null,
	BillDate Date constraint BillDateRequired not null,
	BillAmount decimal(12,2) Default(0.00),
	ClientID int Foreign Key references Client(ClientID),
	Constraint PK_Bill Primary Key(BillNo,ClientID)
)

create table Room(
	RoomNo int Primary Key constraint RoomNoRequired not null,
	RoomFloor int,
	RoomPrice decimal(12,2),
	RoomState int Default(0),
)


create table Review(
	ReviewNo int constraint ReviewNoRequired not null,
	ReviewRating int check(ReviewRating>=0 and ReviewRating <= 5) constraint ReviewRatingRequired not null,
	ReviewComments varchar(200) constraint ReviewCommentsRequired not null,
	ClientID int Foreign Key references Client(ClientID) constraint ReviewClientIDRequired not null,
	Constraint PK_Review Primary Key (ReviewNo,ClientID)
)


create table Booking(
	ClientID int Foreign Key references Client(ClientID),
	RoomNo int Foreign Key references Room(RoomNo),
	CheckInDate date,
	CheckOutDate date,
	Primary Key(ClientID,RoomNo)
)




create table Service(
	ServiceNo int Primary Key constraint ServiceNoRequired not null,
	ServicePrice decimal(12,2),
	ServiceName varchar(50)constraint ServiceNameRequired not null
)

create table Orders(
	ClientID int Foreign Key references Client(ClientID),
	ServiceNo int Foreign Key references Service(ServiceNo),
	Constraint PK_Order Primary Key(ClientID,ServiceNo)
)

create table FoodReservation(
	ClientID int Foreign Key references Client(ClientID),
	FoodPrice decimal(12,2) default(19.99),
	Primary Key(ClientID),
	FoodPeople int default(1)
)


drop table review,bill,foodreservation
drop table orders
drop table service
drop table booking 
drop table room
drop table client
drop table admin
drop table users