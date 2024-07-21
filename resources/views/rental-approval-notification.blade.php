<!DOCTYPE html>
<html>
<head>
    <title>Rental Approval Notification</title>
</head>
<body>
    <h1>Rental Request Approved</h1>
    <p>Your rental request for the vehicle {{ $rental->vehicle_id }} has been approved.</p>
    <p>Rental Order Number: {{ $rental->rental_order_number }}</p>
    <p>Start Date: {{ $rental->start_date }}</p>
    <p>End Date: {{ $rental->end_date }}</p>
    <p>Total Price: {{ $rental->total_price }}</p>
    <p>Thank you for using our service!</p>
</body>
</html>
