'use client';

import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

interface SensoryWheelProps {
  type: 'hyper' | 'hypo';
  title: string;
}

const senses = [
  { name: 'Smell', color: '#20B2AA' },       // Light Sea Green
  { name: 'Taste', color: '#FF69B4' },       // Hot Pink
  { name: 'Interoception', color: '#FF8C00' }, // Dark Orange
  { name: 'Touch', color: '#32CD32' },       // Lime Green
  { name: 'Proprioception', color: '#FF6347' }, // Tomato Red
  { name: 'Vestibular', color: '#9370DB' },  // Medium Purple
  { name: 'Sound', color: '#4169E1' },       // Royal Blue
  { name: 'Visual', color: '#FFD700' },      // Gold
];

export const SensoryWheel = ({ type, title }: SensoryWheelProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [levels, setLevels] = useState<number[]>(new Array(8).fill(0));

  useEffect(() => {
    if (!svgRef.current) {
      return;
    }

    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2 - 60;
    const innerRadius = 40;
    const numLevels = 5;
    const numSegments = 8;

    // Clear previous content
    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('style', 'max-width: 100%; height: auto;');

    const g = svg.append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    // Calculate angles for each segment
    const anglePerSegment = (2 * Math.PI) / numSegments;
    const radiusPerLevel = (radius - innerRadius) / numLevels;

    // Create segments for each sense and level
    senses.forEach((sense, senseIndex) => {
      const startAngle = senseIndex * anglePerSegment - Math.PI / 2;
      const endAngle = startAngle + anglePerSegment;

      // Draw each level for this sense
      for (let level = 1; level <= numLevels; level++) {
        const innerR = innerRadius + (level - 1) * radiusPerLevel;
        const outerR = innerRadius + level * radiusPerLevel;

        const arc = d3.arc()
          .innerRadius(innerR)
          .outerRadius(outerR)
          .startAngle(startAngle)
          .endAngle(endAngle)
          .padAngle(0.01);

        const isFilled = level <= levels[senseIndex];
        
        g.append('path')
          .attr('d', arc as any)
          .attr('fill', isFilled ? sense.color : '#f0f0f0')
          .attr('stroke', '#000000')
          .attr('stroke-width', 2)
          .attr('opacity', isFilled ? 0.8 : 0.3)
          .style('cursor', 'pointer')
          .on('click', function() {
            const newLevels = [...levels];
            newLevels[senseIndex] = level;
            setLevels(newLevels);
          })
          .on('mouseover', function() {
            d3.select(this)
              .attr('opacity', isFilled ? 1 : 0.5)
              .attr('stroke-width', 3);
          })
          .on('mouseout', function() {
            d3.select(this)
              .attr('opacity', isFilled ? 0.8 : 0.3)
              .attr('stroke-width', 2);
          });
      }

      // Add sense labels around the edge
      const labelAngle = startAngle + anglePerSegment / 2;
      const labelRadius = radius + 20;
      const x = Math.cos(labelAngle) * labelRadius;
      const y = Math.sin(labelAngle) * labelRadius;

      g.append('text')
        .attr('x', x)
        .attr('y', y)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '13px')
        .attr('font-weight', 'bold')
        .attr('fill', '#000000')
        .text(sense.name);
    });

    // Add center circle with level labels
    const centerCircle = g.append('circle')
      .attr('r', innerRadius)
      .attr('fill', '#ffffff')
      .attr('stroke', '#000000')
      .attr('stroke-width', 2);

    // Add level indicators in center
    for (let level = 1; level <= numLevels; level++) {
      const levelRadius = innerRadius + (level - 0.5) * radiusPerLevel;
      g.append('text')
        .attr('x', 0)
        .attr('y', -levelRadius)
        .attr('text-anchor', 'middle')
        .attr('font-size', '10px')
        .attr('fill', '#666666')
        .text(level.toString());
    }

  }, [levels]);

  const handleReset = () => {
    setLevels(new Array(8).fill(0));
  };

  const maxLevel = Math.max(...levels);
  const hasData = maxLevel > 0;

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
      <svg ref={svgRef}></svg>
      <div className="mt-4 space-y-2 w-full max-w-md">
        <div className="flex justify-between items-center">
          <button
            onClick={handleReset}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors text-sm"
          >
            Reset
          </button>
          {hasData && (
            <p className="text-sm text-gray-600">
              Highest level: <span className="font-bold">{maxLevel}</span>
            </p>
          )}
        </div>
        <div className="p-3 bg-blue-50 rounded border border-blue-200">
          <p className="text-xs text-gray-700">
            <strong>How to use:</strong> Click on any segment ring to set the intensity level (1-5) for that sense. 
            The filled rings show your current rating.
          </p>
        </div>
      </div>
    </div>
  );
};
