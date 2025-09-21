'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './PieChart.module.css';

interface PieChartData {
  label: string;
  value: number;
  color: string;
  description?: string;
}

interface PieChartProps {
  data: PieChartData[];
  size?: number;
  strokeWidth?: number;
  animationDuration?: number;
}

const PieChart: React.FC<PieChartProps> = ({ 
  data, 
  size = 320, 
  strokeWidth = 40,
  animationDuration = 2 
}) => {
  const [animatedData, setAnimatedData] = useState<PieChartData[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedData(data);
    }, 100);
    return () => clearTimeout(timer);
  }, [data]);

  let cumulativePercentage = 0;

  return (
    <div className={styles.pieChart} style={{ width: size, height: size }}>
      <svg width={size} height={size} className={styles.pieChart__svg}>
        {/* Background circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="rgba(245, 158, 11, 0.1)"
          strokeWidth={strokeWidth}
          className={styles.pieChart__background}
        />
        
        {/* Data segments */}
        {animatedData.map((item, index) => {
          const percentage = item.value;
          const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
          const strokeDashoffset = -cumulativePercentage * circumference / 100;
          const rotation = -90; // Start from top
          
          const segment = (
            <motion.circle
              key={index}
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={item.color}
              strokeWidth={hoveredIndex === index ? strokeWidth + 8 : strokeWidth}
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              transform={`rotate(${rotation} ${center} ${center})`}
              className={styles.pieChart__segment}
              initial={{ strokeDasharray: `0 ${circumference}` }}
              animate={{ strokeDasharray }}
              transition={{ 
                duration: animationDuration, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                filter: hoveredIndex === index ? 'drop-shadow(0 0 20px currentColor)' : 'none',
                transition: 'all 0.3s ease'
              }}
            />
          );
          
          cumulativePercentage += percentage;
          return segment;
        })}
        
        {/* Center circle */}
        <circle
          cx={center}
          cy={center}
          r={radius - strokeWidth / 2 - 10}
          fill="rgba(0, 0, 0, 0.8)"
          stroke="rgba(245, 158, 11, 0.3)"
          strokeWidth="2"
          className={styles.pieChart__center}
        />
        
        {/* Center text */}
        <text
          x={center}
          y={center - 10}
          textAnchor="middle"
          className={styles.pieChart__centerText}
          fill="#FCD34D"
        >
          总供应量
        </text>
        <text
          x={center}
          y={center + 15}
          textAnchor="middle"
          className={styles.pieChart__centerValue}
          fill="#FFFFFF"
        >
          1888枚
        </text>
      </svg>
      
      {/* Hover tooltip */}
      {hoveredIndex !== null && (
        <motion.div
          className={styles.pieChart__tooltip}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <div className={styles.pieChart__tooltipTitle}>
            {animatedData[hoveredIndex].label}
          </div>
          <div className={styles.pieChart__tooltipValue}>
            {animatedData[hoveredIndex].value}%
          </div>
          {animatedData[hoveredIndex].description && (
            <div className={styles.pieChart__tooltipDesc}>
              {animatedData[hoveredIndex].description}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default PieChart;