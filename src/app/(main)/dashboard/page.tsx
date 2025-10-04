'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LineChart, Line, BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

const subscriptionsData = [
    { name: "Apr 20", value: 780 },
    { name: "Apr 21", value: 810 },
    { name: "Apr 22", value: 785 },
    { name: "Apr 23", value: 765 },
    { name: "Apr 24", value: 780 },
    { name: "Apr 25", value: 790 },
    { name: "Apr 26", value: 830 },
];

const revenueData = [
    { name: "Apr 20", value: 2300 },
    { name: "Apr 21", value: 2500 },
    { name: "Apr 22", value: 1800 },
    { name: "Apr 23", value: 2100 },
    { name: "Apr 24", value: 2500 },
];

const exerciseData = [
    { name: "Apr 20", value: 20 },
    { name: "Apr 21", value: 40 },
    { name: "Apr 22", value: 35 },
    { name: "Apr 23", value: 50 },
    { name: "Apr 24", value: 45 },
];

const payments = [
    { name: "Kenneth Thompson", email: "ken99@yahoo.com", amount: "$210.00", status: "Success" },
    { name: "Teresa Lincoln", email: "teresa54@aol.com", amount: "$360.00", status: "Success" },
    { name: "Marcos Rodriguez", email: "marcosr99@gmail.com", amount: "$470.00", status: "Failed" },
    { name: "Camella Orville", email: "camella.orv@xyz.com", amount: "$125.00", status: "Pending" },
    { name: "Jacob Snyder", email: "jacob_sn@company.com", amount: "$530.00", status: "Success" },
    { name: "Sarah Davis", email: "sarah.d@jobseekers.com", amount: "$260.00", status: "Success" },
];

export default function Dashboard() {
    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Dashboard</h1>
                <Button>Download</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                    <CardContent className="p-4">
                        <h2 className="font-semibold">Subscriptions</h2>
                        <p className="text-xl font-bold">+4850</p>
                        <ResponsiveContainer width="100%" height={100}>
                            <BarChart data={subscriptionsData}>
                                <XAxis dataKey="name" hide />
                                <Bar dataKey="value" fill="#4ade80" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-4">
                        <h2 className="font-semibold">Total Revenue</h2>
                        <p className="text-xl font-bold">$15,231.89</p>
                        <ResponsiveContainer width="100%" height={100}>
                            <LineChart data={revenueData}>
                                <XAxis dataKey="name" hide />
                                <Line type="monotone" dataKey="value" stroke="#60a5fa" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-4">
                        <h2 className="font-semibold">Exercise Minutes</h2>
                        <ResponsiveContainer width="100%" height={100}>
                            <LineChart data={exerciseData}>
                                <XAxis dataKey="name" hide />
                                <Line type="monotone" dataKey="value" stroke="#facc15" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                        <Button className="mt-2">Export</Button>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardContent className="p-4">
                        <h2 className="font-semibold mb-4">Latest Payments</h2>
                        <div className="space-y-2 max-h-64 overflow-auto">
                            {payments.map((p, i) => (
                                <div key={i} className="flex justify-between items-center border p-2 rounded-md">
                                    <div>
                                        <p className="font-semibold">{p.name}</p>
                                        <p className="text-sm text-muted-foreground">{p.email}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold">{p.amount}</p>
                                        <p className={`text-sm ${p.status === 'Success' ? 'text-green-600' : p.status === 'Failed' ? 'text-red-600' : 'text-yellow-500'}`}>{p.status}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-4 space-y-4">
                        <h2 className="font-semibold">Payment Method</h2>
                        <div className="flex gap-4">
                            <Button variant="outline">Card</Button>
                            <Button variant="outline">Paypal</Button>
                            <Button variant="outline">Apple</Button>
                        </div>
                        <div className="space-y-2">
                            <Input placeholder="Name on the card" />
                            <Input placeholder="City" />
                            <Input placeholder="Card number" />
                            <div className="grid grid-cols-3 gap-2">
                                <Input placeholder="Month" />
                                <Input placeholder="Year" />
                                <Input placeholder="CVC" />
                            </div>
                            <Button className="w-full">Continue</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
