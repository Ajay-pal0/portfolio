import { Sparkles } from "lucide-react";

export const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
            <div
                key={i}
                className="absolute animate-float"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 4}s`
                }}
            >
                <Sparkles className="w-4 h-4 text-indigo-300 opacity-60" />
            </div>
        ))}
    </div>
);
