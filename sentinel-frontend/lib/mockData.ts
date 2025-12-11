import { Activity, Server, Database, Cloud, Shield, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

export interface Service {
    id: string;
    name: string;
    type: "api" | "database" | "worker" | "cache";
    status: "healthy" | "degraded" | "down";
    uptime: number;
    latency: number;
    cpu: number;
    memory: number;
    trend: number[]; // 1-hour trend for sparkline
}

export interface IncidentEvent {
    time: string;
    event: string;
    icon: string; // Emoji or Lucide icon name
}

export interface Incident {
    id: string;
    title: string;
    serviceId: string;
    status: "resolved" | "in-progress" | "failed";
    severity: "critical" | "warning" | "info";
    timestamp: string; // ISO string
    duration: string;
    rootCause: string;
    agentAction: string;
    agentPredictionConfidence: number;
    timeline: IncidentEvent[];
    logs?: string[]; // Optional logs/reasoning dump
}

export const mockServices: Service[] = [
    {
        id: "api-gateway",
        name: "API Gateway",
        type: "api",
        status: "healthy",
        uptime: 99.99,
        latency: 45,
        cpu: 32,
        memory: 45,
        trend: [40, 42, 45, 48, 45, 42, 40, 38, 42, 45, 45, 42],
    },
    {
        id: "auth-service",
        name: "Auth Service",
        type: "api",
        status: "healthy",
        uptime: 99.95,
        latency: 28,
        cpu: 15,
        memory: 30,
        trend: [25, 28, 30, 28, 25, 22, 25, 28, 30, 28, 28, 25],
    },
    {
        id: "payments-worker",
        name: "Payments Worker",
        type: "worker",
        status: "degraded",
        uptime: 98.5,
        latency: 120,
        cpu: 85,
        memory: 70,
        trend: [60, 70, 80, 90, 100, 120, 110, 115, 120, 125, 120, 118],
    },
    {
        id: "primary-db",
        name: "Primary DB (Postgres)",
        type: "database",
        status: "healthy",
        uptime: 99.99,
        latency: 12,
        cpu: 45,
        memory: 60,
        trend: [10, 12, 15, 12, 10, 12, 15, 18, 15, 12, 12, 10],
    },
    {
        id: "redis-cache",
        name: "Redis Cache",
        type: "cache",
        status: "healthy",
        uptime: 100,
        latency: 2,
        cpu: 10,
        memory: 25,
        trend: [2, 3, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2],
    },
    {
        id: "search-service",
        name: "Search Service",
        type: "api",
        status: "down",
        uptime: 95.2,
        latency: 0,
        cpu: 0,
        memory: 0,
        trend: [40, 50, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
];

export const mockIncidents: Incident[] = [
    {
        id: "inc-1",
        title: "High Latency in Payments",
        serviceId: "payments-worker",
        status: "in-progress",
        severity: "warning",
        timestamp: new Date(Date.now() - 1000 * 60 * 2).toISOString(), // 2 mins ago
        duration: "Ongoing",
        rootCause: "Worker thread pool exhaustion detected",
        agentAction: "Scaling worker replicas from 2 -> 4",
        agentPredictionConfidence: 89,
        timeline: [
            { time: new Date(Date.now() - 1000 * 60 * 2).toLocaleTimeString(), event: "Latency spike detected (250ms+)", icon: "⚠️" },
            { time: new Date(Date.now() - 1000 * 60 * 1.8).toLocaleTimeString(), event: "Agent prediction: 90% chance of cascade failure", icon: "🤖" },
            { time: new Date(Date.now() - 1000 * 60 * 1.5).toLocaleTimeString(), event: "Auto-scaling initiated", icon: "🔧" },
        ]
    },
    {
        id: "inc-2",
        title: "Search Service Outage",
        serviceId: "search-service",
        status: "failed",
        severity: "critical",
        timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(), // 45 mins ago
        duration: "15m",
        rootCause: "Elasticsearch heap memory OOM",
        agentAction: "Restarted service (Attempt 2 failed)",
        agentPredictionConfidence: 95,
        timeline: [
            { time: "14:20:10", event: "Service unresponsive", icon: "🔴" },
            { time: "14:20:15", event: "Agent attempted soft restart", icon: "🔧" },
            { time: "14:22:00", event: "Restart failed. Escalating to human.", icon: "❌" },
        ]
    },
    {
        id: "inc-3",
        title: "Auth Token Expiry Spike",
        serviceId: "auth-service",
        status: "resolved",
        severity: "info",
        timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(), // 2 hours ago
        duration: "5m 20s",
        rootCause: "Clock drift on auth-node-3",
        agentAction: "Resynced NTP on node-3",
        agentPredictionConfidence: 99,
        timeline: [
            { time: "12:15:30", event: "Token validation errors spike", icon: "⚠️" },
            { time: "12:15:45", event: "Root cause identified: Clock drift", icon: "🔍" },
            { time: "12:16:00", event: "Agent synced NTP", icon: "🔧" },
            { time: "12:20:50", event: "Service recovered", icon: "✅" },
        ]
    },
];

export const mockMetrics = {
    totalServices: 12,
    servicesUp: 10,
    activeIncidents: 2,
    uptime: 99.4,
};
