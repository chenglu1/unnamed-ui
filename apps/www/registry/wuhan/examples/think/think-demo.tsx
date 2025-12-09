import { Think } from "@/registry/wuhan/ui/think";
import { ThemeEditor } from "@/components/theme-editor";

export default function ThinkDemo() {
  return (
    <div className="flex flex-col gap-4 w-full items-center">
      <Think title="正在分析您的请求..." defaultExpanded>
        <div className="space-y-2.5">
          <p className="animate-in fade-in-50 slide-in-from-left-2 duration-300 flex items-center gap-2">
            <span className="text-primary font-medium">•</span>
            <span>将问题分解为更小的步骤</span>
          </p>
          <p className="animate-in fade-in-50 slide-in-from-left-2 duration-300 delay-75 flex items-center gap-2">
            <span className="text-primary font-medium">•</span>
            <span>搜索相关文档</span>
          </p>
          <p className="animate-in fade-in-50 slide-in-from-left-2 duration-300 delay-150 flex items-center gap-2">
            <span className="text-primary font-medium">•</span>
            <span>考虑多种实现方案</span>
          </p>
          <p className="animate-in fade-in-50 slide-in-from-left-2 duration-300 delay-200 flex items-center gap-2">
            <span className="text-primary font-medium">•</span>
            <span>评估权衡和最佳实践</span>
          </p>
        </div>
      </Think>
      <div className="w-full max-w-2xl">
        <ThemeEditor />
      </div>
    </div>
  );
}
