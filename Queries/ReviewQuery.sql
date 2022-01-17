alter table Review
drop column RoomNo

Select Cast(Avg(Cast(R.ReviewRating as Decimal(12,2))) as Decimal(3,2)) as Rating, B.RoomNo as Room from Review as R
inner join Booking as B
on B.ClientID = R.ClientID
Group by B.RoomNo
order by B.RoomNo


