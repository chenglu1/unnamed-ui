import { Think } from "@/registry/wuhan/ui/think";

export default function ThinkDisabled() {
  return (
    <div className="flex w-full items-center justify-center">
      <Think title="已完成" className="opacity-60 pointer-events-none">
        <div className="space-y-2.5">
          <p className="flex items-center gap-2">
            <span className="text-primary font-medium">•</span>
            <span>任务完成</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-primary font-medium">•</span>
            <span>结果可用</span>
          </p>
        </div>
      </Think>
    </div>
  );
}
