"use client";
import React, { ReactNode, ReactElement } from "react";

type SmartSkeletonProps = {
  loading: boolean;
  children: ReactNode;
};

export function SmartSkeleton({ loading, children }: SmartSkeletonProps) {
  if (!loading) return <>{children}</>;

  return (
    <div className="p-4 space-y-4 bg-white rounded shadow-sm max-w-full min-h-full">
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return null;

        const element = child as ReactElement<any, any>;
        const { type, props } = element;

        switch (type) {
          case "p":
          case "span":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return (
              <div
                className="h-6 rounded bg-gray-300 animate-pulse"
                style={{ maxWidth: "80%" }}
              />
            );

          case "img":
            return (
              <div
                className="w-full h-48 bg-gray-300 rounded animate-pulse"
                aria-label="Loading image placeholder"
              />
            );

          case "button":
            return (
              <div
                className="inline-block h-10 rounded bg-gray-300 animate-pulse"
                style={{ width: 100 }}
              />
            );

          case React.Fragment:
          case "div":
          case "section":
          case "article":
            return (
              <div className="space-y-3">
                <SmartSkeleton loading>{props.children}</SmartSkeleton>
              </div>
            );

          default:
            if (props && props.children) {
              return (
                <div className="space-y-3">
                  <SmartSkeleton loading>{props.children}</SmartSkeleton>
                </div>
              );
            }
            // fallback generic skeleton line
            return (
              <div
                className="h-6 rounded bg-gray-300 animate-pulse"
                style={{ maxWidth: "70%" }}
              />
            );
        }
      })}
    </div>
  );
}
