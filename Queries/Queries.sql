Select C.ClientFirstName as fname,C.ClientLastName as lname,R.ReviewRating as rating,R.ReviewComments as comments from Client as C
        inner join Review as R
        on R.ClientID = C.ClientID


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

