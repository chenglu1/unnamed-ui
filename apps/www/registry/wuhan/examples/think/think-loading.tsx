import { Think } from "@/registry/wuhan/ui/think";

export default function ThinkLoading() {
  return (
    <div className="flex w-full items-center justify-center">
      <Think title="正在处理您的请求..." loading={true} defaultExpanded blink />
    </div>
  );
}
