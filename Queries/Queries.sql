Select C.ClientFirstName as fname,C.ClientLastName as lname,R.ReviewRating as rating,R.ReviewComments as comments from Client as C
        inner join Review as R
        on R.ClientID = C.ClientID



Select Cast(Avg(Cast(R.ReviewRating as Decimal(3,2))) as Decimal(3,2)) from Review as R
inner join Booking as B
on B.ClientID = R.ClientID
where Month(B.CheckInDate)  = Month(GetDate()) and Year(B.CheckInDate)  = Year(GetDate())

Select Count(*) from Booking
where Month(CheckInDate)  = Month(GetDate()) and Year(CheckInDate)  = Year(GetDate())

Select * from Booking
where Month(CheckInDate)  = Month(GetDate()) and Year(CheckInDate)  = Year(GetDate())


Select Count(*) from Orders as O
inner join Booking as B
on B.ClientID = O.ClientID
where Month(B.CheckInDate)=Month(getDate()) and Year(CheckInDate)  = Year(GetDate())


Select Count(O.ServiceNo) as ServicesBooked,B.ClientID from Orders as O
inner join Booking as B
on B.ClientID = O.ClientID
where Month(B.CheckInDate)=Month(getDate()) and Year(CheckInDate)  = Year(GetDate())
group by B.ClientID


Select Count(RoomState) as Num from Room
where RoomState = 0 and RoomFloor = 4


Update Room
Set RoomState = 1
where RoomNo = 1
Select * from Room