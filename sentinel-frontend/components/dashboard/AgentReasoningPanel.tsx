"use client";

import { Incident } from "@/lib/mockData";
import { Brain, Check, GitBranch, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/common/Button";

interface AgentReasoningPanelProps {
    incident: Incident;
    onClose?: () => void;
}

export function AgentReasoningPanel({ incident, onClose }: AgentReasoningPanelProps) {
    return (
        <div className="bg-slate-900/50 border border-primary/20 rounded-xl overflow-hidden backdrop-blur-md">
            {/* Header */}
            <div className="p-4 border-b border-white/5 bg-primary/5 flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg">
                    <Brain className="h-5 w-5 text-primary" />
                </div>
                <div>
                    <h3 className="text-white font-semibold flex items-center gap-2">
                        Agent Reasoning Engine
                        <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full border border-primary/20">v2.1</span>
                    </h3>
                    <p className="text-xs text-muted-foreground">Running analysis on {incident.id}</p>
                </div>
            </div>

            <div className="p-6 space-y-6">
                {/* 1. Context */}
                <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">1. Input Context</h4>
                    <div className="bg-black/40 rounded-lg p-3 border border-white/5 font-mono text-xs text-blue-300">
                        <p>{`{`}</p>
                        <p className="pl-4">{`"trigger": "METRIC_THRESHOLD_BREACH",`}</p>
                        <p className="pl-4">{`"service": "${incident.serviceId}",`}</p>
                        <p className="pl-4">{`"metric": "latency > 150ms",`}</p>
                        <p className="pl-4">{`"timestamp": "${incident.timestamp}"`}</p>
                        <p>{`}`}</p>
                    </div>
                </div>

                {/* 2. Logic Tree */}
                <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">2. Decision Logic</h4>
                    <div className="relative pl-2 space-y-4">
                        <div className="flex items-center gap-3">
                            <GitBranch className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-white">Analysis of telemetry streams...</span>
                            <span className="text-xs text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded">COMPLETE</span>
                        </div>
                        <div className="flex items-center gap-3 pl-6 border-l border-white/10 ml-2">
                            <GitBranch className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-white">Pattern match against known failure modes?</span>
                            <span className="text-xs text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded">MATCH</span>
                        </div>
                        <div className="flex items-center gap-3 pl-12 border-l border-white/10 ml-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span className="text-sm text-primary font-bold">Conclusion: {incident.rootCause}</span>
                        </div>
                    </div>
                </div>

                {/* 3. Prediction */}
                <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">3. Impact Prediction</h4>
                    <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-white/5 p-4 rounded-lg">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-sm text-white">Probability of cascade failure</span>
                            <span className="text-xl font-bold text-primary">{incident.agentPredictionConfidence}%</span>
                        </div>
                        <div className="w-full bg-black/50 h-2 rounded-full overflow-hidden">
                            <div className="h-full bg-primary" style={{ width: `${incident.agentPredictionConfidence}%` }} />
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 mt-2">
                            Recommended Action: <strong className="text-white">{incident.agentAction}</strong>
                        </p>
                    </div>
                </div>

                {/* Feedback */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-xs text-muted-foreground">Was this decision correct?</span>
                    <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <ThumbsUp className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <ThumbsDown className="h-3 w-3" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
