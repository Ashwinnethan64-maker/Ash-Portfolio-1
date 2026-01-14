import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Terminal() {
  const [lines, setLines] = useState<string[]>([]);
  
  const commands = [
    { text: "sys.init()", delay: 500 },
    { text: "loading modules...", delay: 800 },
    { text: "network_security: [OK]", delay: 1200 },
    { text: "ethical_hacking: [OK]", delay: 1500 },
    { text: "detecting vulnerabilities...", delay: 2000 },
    { text: "access granted. welcome, user.", delay: 2800 },
  ];

  useEffect(() => {
    let timeoutIds: NodeJS.Timeout[] = [];
    
    commands.forEach((cmd, index) => {
      const id = setTimeout(() => {
        setLines(prev => [...prev, cmd.text]);
      }, cmd.delay);
      timeoutIds.push(id);
    });

    return () => timeoutIds.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full max-w-lg bg-black/80 border border-primary/30 rounded-lg overflow-hidden shadow-lg backdrop-blur-md">
      <div className="bg-primary/10 px-4 py-2 border-b border-primary/30 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs font-mono text-primary/70">bash -- user@ashwin-portfolio</span>
      </div>
      <div className="p-4 font-mono text-sm h-[200px] overflow-y-auto">
        {lines.map((line, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-1 text-green-400"
          >
            <span className="text-primary mr-2">➜</span>
            {line}
          </motion.div>
        ))}
        <motion.div 
          animate={{ opacity: [0, 1, 0] }} 
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-2 h-4 bg-primary inline-block align-middle ml-1"
        />
      </div>
    </div>
  );
}
