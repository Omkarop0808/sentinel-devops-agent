"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";

const data = Array.from({ length: 24 }, (_, i) => ({
    time: `${i}:00`,
    cpu: Math.floor(Math.random() * 40) + 20, // 20-60% base
    memory: Math.floor(Math.random() * 30) + 40, // 40-70% base
})).map(d => {
    // Add a spike
    if (d.time === "14:00" || d.time === "15:00") {
        return { ...d, cpu: d.cpu + 30, memory: d.memory + 20 };
    }
    return d;
});

export function ResourcesChart() {
    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                        <linearGradient id="cpuGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#c084fc" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#c084fc" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="memGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis
                        dataKey="time"
                        stroke="#666"
                        fontSize={10}
                        tickLine={false}
                        axisLine={false}
                        interval={3}
                    />
                    <YAxis
                        stroke="#666"
                        fontSize={10}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip
                        contentStyle={{ backgroundColor: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px" }}
                        itemStyle={{ fontSize: "12px" }}
                        labelStyle={{ color: "#888", marginBottom: "4px" }}
                    />
                    <Area
                        type="monotone"
                        dataKey="cpu"
                        stroke="#c084fc"
                        fillOpacity={1}
                        fill="url(#cpuGradient)"
                        strokeWidth={2}
                        name="CPU Usage"
                    />
                    <Area
                        type="monotone"
                        dataKey="memory"
                        stroke="#2dd4bf"
                        fillOpacity={1}
                        fill="url(#memGradient)"
                        strokeWidth={2}
                        name="Memory Usage"
                    />
                    <ReferenceLine y={80} stroke="#ef4444" strokeDasharray="3 3" label={{ position: 'right', value: 'Critical', fill: '#ef4444', fontSize: 10 }} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
