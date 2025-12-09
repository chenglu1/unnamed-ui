import { Think } from "@/registry/wuhan/ui/think";
import { Sparkles } from "lucide-react";

export default function ThinkActive() {
  return (
    <div className="flex w-full items-center justify-center">
      <Think
        title="正在深度思考..."
        icon={<Sparkles className="size-4 animate-pulse" />}
        defaultExpanded
      >
        <div className="space-y-2.5">
          <p className="animate-in fade-in-50 slide-in-from-left-2 duration-300 flex items-center gap-2">
            <span className="text-primary font-medium">•</span>
            <span>搜索知识库</span>
          </p>
          <p className="animate-in fade-in-50 slide-in-from-left-2 duration-300 delay-100 flex items-center gap-2">
            <span className="text-primary font-medium">•</span>
            <span>交叉引用信息</span>
          </p>
          <p className="animate-in fade-in-50 slide-in-from-left-2 duration-300 delay-200 flex items-center gap-2">
            <span className="text-primary font-medium">•</span>
            <span>生成回答</span>
          </p>
          <p className="animate-in fade-in-50 slide-in-from-left-2 duration-300 delay-300 flex items-center gap-2">
            <span className="text-primary font-medium">•</span>
            <span>验证准确性</span>
          </p>
        </div>
      </Think>
    </div>
  );
}
