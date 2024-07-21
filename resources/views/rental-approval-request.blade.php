<!DOCTYPE html>
<html>
<head>
    <title>Rental Approval Request</title>
</head>
<body>
    <h1>Rental Approval Request</h1>
    <p>Dear Admin,</p>
    <p>A new rental request has been submitted for your review.</p>
    <p><strong>Rental Order Number:</strong> {{ $rental->rental_order_number }}</p>
    <p><strong>Customer ID:</strong> {{ $rental->customer_id }}</p>
    <p><strong>Vehicle ID:</strong> {{ $rental->vehicle_id }}</p>
    <p><strong>Start Date:</strong> {{ $rental->start_date }}</p>
    <p><strong>End Date:</strong> {{ $rental->end_date }}</p>
    <p><strong>Total Price:</strong> {{ $rental->total_price }}</p>
    <p>Please login to the admin panel to review and approve this request.</p>
    <p>Thank you!</p>
</body>
</html>
