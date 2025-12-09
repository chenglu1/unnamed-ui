import { Think } from "@/registry/wuhan/ui/think";

export default function ThinkDefault() {
  return (
    <div className="flex w-full items-center justify-center">
      <Think title="思考中...">
        <div className="space-y-2.5">
          <p className="flex items-center gap-2">
            <span className="text-primary font-medium">•</span>
            <span>分析输入</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-primary font-medium">•</span>
            <span>处理信息</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-primary font-medium">•</span>
            <span>生成回答</span>
          </p>
        </div>
      </Think>
    </div>
  );
}
