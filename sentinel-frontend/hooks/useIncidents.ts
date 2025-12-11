"use client";

import { useEffect, useState, useCallback } from "react";
import { mockIncidents, Incident } from "@/lib/mockData";
import { useWebSocket } from "./useWebSocket";

export function useIncidents() {
    const [incidents, setIncidents] = useState<Incident[]>(mockIncidents);
    const [activeIncidentId, setActiveIncidentId] = useState<string | null>(null);

    // Handle incoming WebSocket messages (simulated)
    const handleMessage = useCallback((msg: any) => {
        if (msg.type === "incident_alert") {
            const newIncident = msg.payload as Incident;
            setIncidents((prev) => [newIncident, ...prev]);

            // Auto-select latest critical incident for demo effect
            if (newIncident.severity === "critical") {
                setActiveIncidentId(newIncident.id);
            }
        }
    }, []);

    const { status } = useWebSocket("/api/stream", {
        onMessage: handleMessage,
        // We can enable/disable specific event types in the mock socket if needed
    });

    return {
        incidents,
        activeIncidentId,
        setActiveIncidentId,
        connectionStatus: status,
    };
}
