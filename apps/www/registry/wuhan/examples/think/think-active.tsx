import { Think } from "@/registry/wuhan/ui/think";

export default function ThinkActive() {
  return (
    <div className="flex w-full items-center justify-center">
      <Think
        title="正在深度思考..."
        defaultExpanded
        blink
      >
        <div className="space-y-2.5">
          <p className="animate-in fade-in-50 slide-in-from-left-2 duration-300 flex items-center gap-2">
            <span className="text-primary font-medium">•</span>
            <span>分析问题结构</span>
          </p>
          <p className="animate-in fade-in-50 slide-in-from-left-2 duration-300 delay-75 flex items-center gap-2">
            <span className="text-primary font-medium">•</span>
            <span>搜索相关知识</span>
          </p>
          <p className="animate-in fade-in-50 slide-in-from-left-2 duration-300 delay-150 flex items-center gap-2">
            <span className="text-primary font-medium">•</span>
            <span>评估可行方案</span>
          </p>
        </div>
      </Think>
    </div>
  );
}
