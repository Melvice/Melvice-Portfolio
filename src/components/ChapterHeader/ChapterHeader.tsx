import { motion } from 'framer-motion';
import './ChapterHeader.css';

interface ChapterHeaderProps {
  number: string;   // "01"
  title: string;    // "THE APPROACH"
  italic?: boolean; // use italic serif on the title
}

const VP = { once: true, margin: '-40px' };

export default function ChapterHeader({ number, title, italic = false }: ChapterHeaderProps) {
  return (
    <div className="chapter-header">
      {/* Number row + rule */}
      <motion.div
        className="chapter-meta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VP}
        transition={{ duration: 0.5 }}
      >
        <span className="chapter-num">{number}</span>
        <span className="chapter-rule" />
      </motion.div>

      {/* Chapter title */}
      <motion.h2
        className={`chapter-title${italic ? ' italic' : ''}`}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VP}
        transition={{ duration: 0.75, delay: 0.08 }}
      >
        {title}
      </motion.h2>
    </div>
  );
}
