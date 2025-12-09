"use client";

import { useState, useEffect } from "react";
import { Think } from "@/registry/wuhan/ui/think";
import { Button } from "@/registry/wuhan/ui/button";

const thinkingSteps = [
  "正在分析您的问题...",
  "搜索相关知识库...",
  "评估多个可行方案...",
  "综合考虑最佳实践...",
  "生成详细解决方案...",
];

export default function ThinkControlled() {
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isThinking, setIsThinking] = useState(false);

  const handleThink = () => {
    setLoading(true);
    setExpanded(true);
    setCurrentText("");
    setCurrentStepIndex(0);
    setCharIndex(0);
    setIsThinking(true);

    // 1.5秒后开始打字机效果
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  // 打字机效果
  useEffect(() => {
    if (!loading && expanded && currentStepIndex < thinkingSteps.length) {
      const currentStep = thinkingSteps[currentStepIndex];
      
      if (charIndex < currentStep.length) {
        const timer = setTimeout(() => {
          setCurrentText(prev => prev + currentStep[charIndex]);
          setCharIndex(prev => prev + 1);
        }, 50); // 每个字符50ms
        return () => clearTimeout(timer);
      } else if (charIndex === currentStep.length) {
        // 当前步骤完成，等待500ms后开始下一步
        const timer = setTimeout(() => {
          setCurrentText(prev => prev + "\n");
          setCurrentStepIndex(prev => prev + 1);
          setCharIndex(0);
        }, 500);
        return () => clearTimeout(timer);
      }
    } else if (!loading && currentStepIndex >= thinkingSteps.length) {
      // 所有步骤完成，停止思考状态
      setIsThinking(false);
    }
  }, [loading, expanded, currentStepIndex, charIndex]);

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex flex-col gap-4 w-full max-w-2xl">
        <Button
          onClick={handleThink}
          disabled={loading}
          className="bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          {loading ? "思考中..." : "开始思考"}
        </Button>

        <Think
          title="AI 助手正在思考..."
          loading={loading}
          expanded={expanded}
          onExpand={setExpanded}
          blink={isThinking}
        >
          {!loading && currentText && (
            <div className="space-y-0">
              <pre className="font-sans text-sm whitespace-pre-wrap">
                {currentText.split("\n").map((line, index) => (
                  line && (
                    <p key={index} className="flex items-start gap-2 mb-2">
                      <span className="text-primary font-medium mt-0.5">•</span>
                      <span>{line}</span>
                    </p>
                  )
                ))}
              </pre>
            </div>
          )}
        </Think>
      </div>
    </div>
  );
}
