import { Think } from "@/registry/wuhan/ui/think";
import { Sparkles } from "lucide-react";

export default function ThinkActive() {
  return (
    <div className="flex w-full items-center justify-center">
      <Think
        title="正在深度思考..."
        icon={<Sparkles className="size-4 text-primary animate-pulse" />}
        defaultExpanded
        blink
      >
        <div className="space-y-2.5">
          <p className="flex items-center gap-2">
            <span className="text-primary font-medium">•</span>
            <span>分析问题结构</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-primary font-medium">•</span>
            <span>搜索相关知识</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-primary font-medium">•</span>
            <span>评估可行方案</span>
          </p>
        </div>
      </Think>
    </div>
  );
}
