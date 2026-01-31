import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link as LinkIcon, Zap } from "lucide-react";
import { Badge } from "./badge";
import { Button } from "./button";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

export default function RadialOrbitalTimeline({ timelineData }) {
  const [rotationAngle, setRotationAngle] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationAngle((prev) => (prev + 0.2) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const radius = 160;

  return (
    <div
      ref={containerRef}
      className="w-full h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      <div className="relative w-[400px] h-[400px]">
        {/* Center Orb */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-teal-400 animate-pulse" />
        </div>

        {/* Orbit */}
        {timelineData.map((item, index) => {
          const angle =
            ((index / timelineData.length) * 360 + rotationAngle) *
            (Math.PI / 180);

          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
                  <Icon size={16} />
                </div>
                <span className="text-white text-xs">{item.title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
