import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-background">
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 blur-3xl opacity-30 bg-blue-500 rounded-full animate-pulse" />
        
        {/* Spinner */}
        <Loader2 className="h-12 w-12 text-blue-700 animate-spin relative z-10" />
      </div>
      
      <div className="mt-6 text-blue-700 text-3xl font-medium text-foreground animate-pulse">
        Loading...
      </div>
    </div>
  );
}
