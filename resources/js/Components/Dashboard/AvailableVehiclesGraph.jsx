import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";

export default function AvailableVehiclesGraph({ vehicles }) {
    const countVehiclesByStatus = (vehicles) => {
        const counts = { Available: 0, Rented: 0, "Under Maintenance": 0 };
        vehicles.forEach((vehicle) => {
            if (counts[vehicle.status] !== undefined) {
                counts[vehicle.status]++;
            }
        });
        return counts;
    };

    const vehicleCounts = countVehiclesByStatus(vehicles);

    // Bar chart configuration
    const chartConfig = {
        type: "bar",
        height: 240,
        series: [
            {
                name: "Number of Vehicles",
                data: [
                    vehicleCounts["Available"],
                    vehicleCounts["Rented"],
                    vehicleCounts["Under Maintenance"],
                ],
            },
        ],
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
            },
            title: {
                show: false,
            },
            dataLabels: {
                enabled: false,
            },
            colors: ["#020617"],
            plotOptions: {
                bar: {
                    columnWidth: "40%",
                    borderRadius: 2,
                },
            },
            xaxis: {
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                labels: {
                    style: {
                        colors: "#616161",
                        fontSize: "12px",
                        fontFamily: "inherit",
                        fontWeight: 400,
                    },
                },
                categories: ["Available", "Rented", "Under Maintenance"],
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "#616161",
                        fontSize: "12px",
                        fontFamily: "inherit",
                        fontWeight: 400,
                    },
                },
            },
            grid: {
                show: true,
                borderColor: "#dddddd",
                strokeDashArray: 5,
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                padding: {
                    top: 5,
                    right: 20,
                },
            },
            fill: {
                opacity: 0.8,
            },
            tooltip: {
                theme: "dark",
            },
        },
    };

    return (
        <Card className="!z-1">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
            >
                <div>
                    <Typography variant="h6" color="blue-gray">
                        Vehicles Status
                    </Typography>
                </div>
            </CardHeader>
            <CardBody className="px-2 pb-0">
                <Chart {...chartConfig} />
            </CardBody>
        </Card>
    );
}
