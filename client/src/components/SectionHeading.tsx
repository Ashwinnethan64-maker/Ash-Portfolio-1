import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({ title, subtitle, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", {
      "text-center": align === "center",
      "text-right": align === "right",
    }, className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-glow text-primary mb-2">
          &lt;{title} /&gt;
        </h2>
        {subtitle && (
          <p className="text-muted-foreground font-mono text-sm md:text-base max-w-2xl mx-auto">
            // {subtitle}
          </p>
        )}
      </motion.div>
      
      <motion.div 
        className={cn("h-1 bg-gradient-to-r from-primary/50 to-transparent mt-4", {
          "mx-auto w-24": align === "center",
          "w-full max-w-[200px]": align === "left",
          "ml-auto w-24": align === "right",
        })}
        initial={{ width: 0 }}
        whileInView={{ width: align === "center" ? 96 : 200 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      />
    </div>
  );
}
