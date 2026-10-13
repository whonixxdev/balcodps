// import { motion, type Variants } from "framer-motion";
// import React from "react";

// interface StaggerWipeProps {
//   children: React.ReactNode;
// }

// const columnVariants: Variants = {
//   initial: {
//     scaleX: 1,
//   },
//   animate: {
//     scaleX: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.87, 0, 0.13, 1] as const,
//     },
//   },
//   exit: {
//     scaleX: 1,
//     transition: {
//       duration: 0.6,
//       ease: [0.87, 0, 0.13, 1] as const,
//     },
//   },
// };

// export default function StaggerWipe({ children }: StaggerWipeProps) {
//   const columns = Array.from({ length: 10 });

//   return (
//     <div className="relative min-h-screen overflow-hidden">
//       <div className="fixed inset-0 z-50 pointer-events-none flex">
//         {columns.map((_, index) => (
//           <motion.div
//             key={index}
//             variants={columnVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             style={{ originX: 0 }}
//             transition={{
//               delay: index * 0.04,
//             }}
//             className="h-full flex-1 bg-amber-500 border-r border-amber-600/20"
//           />
//         ))}
//       </div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ 
//           opacity: 1,
//           transition: { delay: 0.5, duration: 0.3 } 
//         }}
//         exit={{ opacity: 0 }}
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// }

// debuggu animasi jangan di pakai