@component('mail::message')
# Rental Receipt

<p>Your rental request for the vehicle: {{ $rental->vehicle->name }} has been approved.</p>

Thank you for renting with us. Here are the details of your rental:

- **Rental Number**: {{ $rental->rental_order_number }}
- **Vehicle Name**: {{ $rental->vehicle->name }}
- **Customer Name**: {{ $rental->customer->name }}
- **Start Date**: {{ $rental->start_date }}
- **End Date**: {{ $rental->end_date }}
- **Total Price**: {{ $rental->total_price }}

Thanks,<br>
{{ config('app.name') }}
@endcomponent
