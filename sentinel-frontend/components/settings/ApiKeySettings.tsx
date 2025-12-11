"use client";

import { Button } from "@/components/common/Button";
import { Copy, Trash, Plus } from "lucide-react";

export function ApiKeySettings() {
    return (
        <div className="space-y-6 max-w-2xl animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-semibold text-white mb-1">API Keys</h2>
                    <p className="text-muted-foreground text-sm">Manage access tokens for the Sentinel CLI and API.</p>
                </div>
                <Button size="sm" className="gap-2">
                    <Plus className="h-4 w-4" /> Generate New Key
                </Button>
            </div>

            <div className="space-y-3">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between group hover:border-white/20 transition-colors">
                    <div className="space-y-1">
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-white">Production Agent Key</span>
                            <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-[10px] font-bold uppercase">Active</span>
                        </div>
                        <div className="font-mono text-xs text-muted-foreground">Created 2 months ago • Last used 2m ago</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <input type="text" value="sk_live_51M..." disabled className="bg-black/30 border border-white/10 rounded px-2 py-1 text-xs font-mono w-32 text-muted-foreground" />
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white">
                            <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-red-400">
                            <Trash className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between group hover:border-white/20 transition-colors opacity-60">
                    <div className="space-y-1">
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-white">Staging Test Key</span>
                            <span className="px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 text-[10px] font-bold uppercase">Expired</span>
                        </div>
                        <div className="font-mono text-xs text-muted-foreground">Created 6 months ago • Expired yesterday</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-red-400">
                            <Trash className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
