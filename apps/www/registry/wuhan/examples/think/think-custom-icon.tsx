import { Think } from "@/registry/wuhan/ui/think";
import { Brain } from "lucide-react";

export default function ThinkCustomIcon() {
  return (
    <div className="flex w-full items-center justify-center">
      <Think
        title="深度思考中..."
        icon={<Brain className="size-4 animate-pulse" />}
        defaultExpanded
      >
        <div className="space-y-2.5">
          <p className="animate-in fade-in-50 duration-300 flex items-center gap-2">
            <span className="text-primary">🧠</span>
            <span>激活神经通路...</span>
          </p>
          <p className="animate-in fade-in-50 duration-300 delay-100 flex items-center gap-2">
            <span className="text-primary">💡</span>
            <span>生成创意方案...</span>
          </p>
          <p className="animate-in fade-in-50 duration-300 delay-200 flex items-center gap-2">
            <span className="text-primary">✨</span>
            <span>优化实现方法...</span>
          </p>
        </div>
      </Think>
    </div>
  );
}
