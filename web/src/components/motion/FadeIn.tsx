'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

const tagMap = {
  div: motion.div,
  li: motion.li,
  span: motion.span,
  article: motion.article,
} as const;

/**
 * Aparición sutil (fade + leve subida) al entrar en viewport.
 * Respeta prefers-reduced-motion (framer-motion useReducedMotion).
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  y = 16,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: keyof typeof tagMap;
}) {
  const reduce = useReducedMotion();
  const Tag = tagMap[as];

  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
