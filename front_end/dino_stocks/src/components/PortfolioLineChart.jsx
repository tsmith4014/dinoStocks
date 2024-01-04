import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PortfolioLineChart = ({ data }) => {
    const formatYAxis = (value) => `$${Number(value).toFixed(2)}`;

    const formatXAxisTick = (tickItem) => {
        const dateObj = new Date(tickItem);

        // Subtract one minute from the timestamp
        dateObj.setMinutes(dateObj.getMinutes() - 1);

        const formattedDate = dateObj.toLocaleString('en-US', {
            month: 'short', // Abbreviated month name
            day: 'numeric', // Numeric day of the month
            hour: 'numeric', // Numeric hour (0-23)
            minute: 'numeric', // Numeric minute
        });

        return formattedDate;
    };


    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const dateObj = new Date(label);
            const formattedDate = dateObj.toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            });

            return (
                <div className="custom-tooltip">
                    <p className="tooltip-label">{formattedDate}</p>
                    {payload.map((entry, index) => (
                        <p key={index} className={`tooltip-value-${index}`}>
                            {`$${entry.value}`}
                        </p>
                    ))}
                </div>
            );
        }

        return null;
    };

    return (

        <ResponsiveContainer width="100%" height={300}>
            <LineChart width="100%" height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tickFormatter={formatXAxisTick} />
                <YAxis tickFormatter={formatYAxis} domain={['dataMin', 'dataMax']} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line type="monotone" dataKey="portfolio_value" stroke="#8884d8" name="Portfolio Value" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default PortfolioLineChart;