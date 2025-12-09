"use client";

import * as React from "react";
import { ChevronDown, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";
import { Skeleton } from "./skeleton";
import { Button } from "./button";

export type SemanticType = "root" | "status" | "content";

export interface ThinkProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  prefixCls?: string;
  style?: React.CSSProperties;
  styles?: Partial<Record<SemanticType, React.CSSProperties>>;
  className?: string;
  classNames?: Partial<Record<SemanticType, string>>;
  rootClassName?: string;
  title?: React.ReactNode;
  icon?: React.ReactNode;
  loading?: boolean | React.ReactNode;
  defaultExpanded?: boolean;
  expanded?: boolean;
  onExpand?: (expand: boolean) => void;
  blink?: boolean;
  children?: React.ReactNode;
}

export type ThinkRef = {
  nativeElement: HTMLElement | null;
};

const Think = React.forwardRef<ThinkRef, ThinkProps>(
  (
    {
      prefixCls = "think",
      style,
      styles,
      className,
      classNames,
      rootClassName,
      title = "Thinking...",
      icon,
      loading = false,
      defaultExpanded = false,
      expanded: controlledExpanded,
      onExpand,
      blink = false,
      children,
      ...props
    },
    ref,
  ) => {
    const rootRef = React.useRef<HTMLDivElement>(null);
    const [internalExpanded, setInternalExpanded] =
      React.useState(defaultExpanded);
    const [isAnimating, setIsAnimating] = React.useState(false);

    // 判断是否受控
    const isControlled = controlledExpanded !== undefined;
    const expanded = isControlled ? controlledExpanded : internalExpanded;

    // 暴露原生元素
    React.useImperativeHandle(ref, () => ({
      nativeElement: rootRef.current,
    }));

    // 处理展开/收起
    const handleExpandChange = (open: boolean) => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 300);

      if (!isControlled) {
        setInternalExpanded(open);
      }
      onExpand?.(open);
    };

    // 渲染加载状态
    const renderLoading = () => {
      if (typeof loading === "boolean" && loading) {
        return <Loader2 className="size-4 animate-spin text-primary" />;
      }
      if (React.isValidElement(loading)) {
        return loading;
      }
      return null;
    };

    // 渲染图标
    const renderIcon = () => {
      if (loading) {
        return renderLoading();
      }
      if (icon) {
        return icon;
      }
      return null;
    };

    return (
      <div
        ref={rootRef}
        data-slot="think-root"
        className={cn(
          prefixCls,
          "group w-full max-w-2xl rounded-lg bg-card text-card-foreground",
          "border border-primary/30",
          "shadow-sm transition-all duration-300 ease-in-out",
          blink && "animate-pulse",
          rootClassName,
          classNames?.root,
          className,
        )}
        style={{ ...style, ...styles?.root }}
        {...props}
      >
        <Collapsible open={expanded} onOpenChange={handleExpandChange}>
          {/* 状态栏：标题 + 图标 + 展开按钮 */}
          <div
            data-slot="think-status"
            className={cn(
              "flex items-center justify-between gap-2 p-3",
              "transition-all duration-200",
              "bg-primary/5",
              expanded && "border-b border-primary/20",
              classNames?.status,
            )}
            style={styles?.status}
          >
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <div
                className={cn(
                  "transition-transform duration-300 text-primary",
                  loading && "animate-in spin-in-180",
                )}
              >
                {renderIcon()}
              </div>
              <div
                className={cn(
                  "font-semibold text-sm truncate text-primary",
                  "transition-colors duration-200",
                  loading && "animate-pulse",
                )}
              >
                {title}
              </div>
            </div>

            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                className={cn(
                  "transition-all duration-300 ease-out",
                  "text-primary hover:bg-primary/20",
                  expanded && "rotate-180",
                  isAnimating && "scale-95",
                )}
                aria-label={expanded ? "收起" : "展开"}
              >
                <ChevronDown className="size-4" />
              </Button>
            </CollapsibleTrigger>
          </div>

          {/* 内容区域 */}
          <CollapsibleContent className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2">
            <div
              data-slot="think-content"
              className={cn("px-3 pb-3 pt-2 text-sm", classNames?.content)}
              style={styles?.content}
            >
              {loading && typeof loading === "boolean" ? (
                <div className="space-y-2 animate-in fade-in-50 duration-300">
                  <Skeleton className="h-4 w-full animate-pulse bg-primary/10" />
                  <Skeleton className="h-4 w-4/5 animate-pulse delay-75 bg-primary/10" />
                  <Skeleton className="h-4 w-3/4 animate-pulse delay-150 bg-primary/10" />
                </div>
              ) : (
                <div className="animate-in fade-in-50 slide-in-from-top-2 duration-300 text-foreground">
                  {children}
                </div>
              )}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  },
);

Think.displayName = "Think";

export default Think;
export { Think };
