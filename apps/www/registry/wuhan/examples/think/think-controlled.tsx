"use client";

import { useState } from "react";
import { Think } from "@/registry/wuhan/ui/think";
import { Button } from "@/registry/wuhan/ui/button";

export default function ThinkControlled() {
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleThink = () => {
    setLoading(true);
    setExpanded(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex flex-col gap-4 w-full max-w-2xl">
        <Button
          onClick={handleThink}
          className="animate-in fade-in-50 duration-300 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          开始思考
        </Button>

        <Think
          title="AI 助手正在思考..."
          loading={loading}
          expanded={expanded}
          onExpand={setExpanded}
          blink={loading}
        >
          {!loading && (
            <div className="space-y-2.5">
              <p className="animate-in fade-in-50 slide-in-from-bottom-2 duration-300 flex items-center gap-2">
                <span className="text-primary font-semibold">✅</span>
                <span className="font-medium">分析完成！</span>
              </p>
              <p className="animate-in fade-in-50 slide-in-from-bottom-2 duration-300 delay-75 flex items-center gap-2">
                <span className="text-primary font-medium">•</span>
                <span>找到 3 个潜在方案</span>
              </p>
              <p className="animate-in fade-in-50 slide-in-from-bottom-2 duration-300 delay-150 flex items-center gap-2">
                <span className="text-primary font-medium">•</span>
                <span>
                  推荐方案：
                  <span className="text-primary font-medium">方案 B</span>
                </span>
              </p>
              <p className="animate-in fade-in-50 slide-in-from-bottom-2 duration-300 delay-200 flex items-center gap-2">
                <span className="text-primary font-medium">•</span>
                <span>预计实施时间：2 小时</span>
              </p>
            </div>
          )}
        </Think>
      </div>
    </div>
  );
}
