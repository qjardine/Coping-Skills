'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import * as d3 from 'd3';

interface SymptomWheelProps {
  onSectionClick?: ({ section }: { section: string }) => void;
  showButtonGrid?: boolean;
}

export const symptoms = [
  { name: 'Task Paralysis', color: '#FF6347', category: 'ADHD', path: '/pages/neurodivergent/symptom-quiz/task-paralysis' },
  { name: 'Object Permanence', color: '#FF7F50', category: 'ADHD', path: '/pages/neurodivergent/symptom-quiz/object-permanence' },
  { name: 'Impulsivity', color: '#FF9A76', category: 'ADHD', path: '/pages/neurodivergent/symptom-quiz/impulsivity' },
  { name: 'Time Blindness', color: '#FFA07A', category: 'ADHD', path: '/pages/neurodivergent/symptom-quiz/time-blindness' },
  { name: 'Dopamine Seeking', color: '#FF4500', category: 'ADHD', path: '/pages/neurodivergent/symptom-quiz/dopamine-seeking' },
  { name: 'Hyperactivity', color: '#FF6B6B', category: 'ADHD', path: '/pages/neurodivergent/symptom-quiz/hyperactivity' },
  { name: 'Executive Dysfunction', color: '#E85D75', category: 'ADHD', path: '/pages/neurodivergent/symptom-quiz/executive-dysfunction' },
  { name: 'Masking', color: '#C44569', category: 'AUTISM', path: '/pages/neurodivergent/symptom-quiz/masking' },
  { name: 'Stimming', color: '#A93F55', category: 'AUTISM', path: '/pages/neurodivergent/symptom-quiz/stimming' },
  { name: 'Emotional Dysregulation', color: '#8E44AD', category: 'OVERLAP', path: '/pages/neurodivergent/symptom-quiz/emotional-dysregulation' },
  { name: 'Sensory Sensitivities', color: '#9B59B6', category: 'OVERLAP', path: '/pages/neurodivergent/symptom-quiz/sensory-sensitivities' },
  { name: 'Hyperfixation', color: '#AF7AC5', category: 'OVERLAP', path: '/pages/neurodivergent/symptom-quiz/hyperfixation' },
  { name: 'Difficulty Processing', color: '#BB8FCE', category: 'OVERLAP', path: '/pages/neurodivergent/symptom-quiz/difficulty-processing' },
  { name: 'Interoception', color: '#D7BDE2', category: 'OVERLAP', path: '/pages/neurodivergent/symptom-quiz/interoception' },
  { name: 'Rejection Sensitivity', color: '#3498DB', category: 'OVERLAP', path: '/pages/neurodivergent/symptom-quiz/rejection-sensitivity' },
  { name: 'Routine', color: '#8B2E3F', category: 'AUTISM', path: '/pages/neurodivergent/symptom-quiz/routine' },
  { name: 'Sensory Overload', color: '#5DADE2', category: 'OVERLAP', path: '/pages/neurodivergent/symptom-quiz/sensory-overload' },
  { name: 'Seeking Familiarity', color: '#6D1F2E', category: 'AUTISM', path: '/pages/neurodivergent/symptom-quiz/seeking-familiarity' },
  { name: 'Difficulty with Social Cues', color: '#FF6B9D', category: 'AUTISM', path: '/pages/neurodivergent/symptom-quiz/social-cues' },
  { name: 'Repetitive Behavior', color: '#DC143C', category: 'AUTISM', path: '/pages/neurodivergent/symptom-quiz/repetitive-behavior' },
];

// Helper function to wrap text within segment bounds
function wrapText({ text, maxWidth }: { text: any; maxWidth: number }) {
  text.each(function(this: any) {
    const textElement = d3.select(this);
    const words = textElement.text().split(/\s+/).reverse();
    let word;
    let line: string[] = [];
    let lineNumber = 0;
    let tspan = textElement.text(null).append('tspan').attr('x', 0).attr('y', 0);
    
    while ((word = words.pop())) {
      line.push(word);
      tspan.text(line.join(' '));
      const tspanNode = tspan.node();
      if (tspanNode && tspanNode.getComputedTextLength() > maxWidth) {
        line.pop();
        tspan.text(line.join(' '));
        line = [word];
        lineNumber++;
        tspan = textElement.append('tspan')
          .attr('x', 0)
          .attr('y', 12)
          .text(word);
      }
    }
  });
}

export const SymptomWheel = ({ onSectionClick, showButtonGrid = true }: SymptomWheelProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const router = useRouter();
  const [levels, setLevels] = useState<number[]>(new Array(symptoms.length).fill(0));

  useEffect(() => {
    if (!svgRef.current) {
      return;
    }

    const width = 1000;
    const height = 1000;
    const radius = Math.min(width, height) / 2 - 120;
    const innerRadius = 80;
    const numLevels = 5;
    const numSegments = symptoms.length;

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

    // Create segments for each symptom and level
    symptoms.forEach((symptom, symptomIndex) => {
      const startAngle = symptomIndex * anglePerSegment - Math.PI / 2;
      const endAngle = startAngle + anglePerSegment;

      // Draw each level for this symptom
      for (let level = 1; level <= numLevels; level++) {
        const innerR = innerRadius + (level - 1) * radiusPerLevel;
        const outerR = innerRadius + level * radiusPerLevel;

        const arc = d3.arc()
          .innerRadius(innerR)
          .outerRadius(outerR)
          .startAngle(startAngle)
          .endAngle(endAngle)
          .padAngle(0.01);

        const isFilled = level <= levels[symptomIndex];

        g.append('path')
          .attr('d', arc as any)
          .attr('fill', isFilled ? symptom.color : '#f0f0f0')
          .attr('stroke', '#000000')
          .attr('stroke-width', 1.5)
          .attr('opacity', isFilled ? 0.8 : 0.3)
          .style('cursor', 'pointer')
          .on('click', function() {
            const newLevels = [...levels];
            newLevels[symptomIndex] = level;
            setLevels(newLevels);
          })
          .on('mouseover', function() {
            d3.select(this)
              .attr('opacity', isFilled ? 1 : 0.5)
              .attr('stroke-width', 2.5);
          })
          .on('mouseout', function() {
            d3.select(this)
              .attr('opacity', isFilled ? 0.8 : 0.3)
              .attr('stroke-width', 1.5);
          });
      }

      // Add symptom labels outside the wheel
      const labelAngle = startAngle + anglePerSegment / 2;
      const labelRadius = radius + 50;
      const x = Math.cos(labelAngle) * labelRadius;
      const y = Math.sin(labelAngle) * labelRadius;

      // Calculate text rotation for better readability
      let textRotation = (labelAngle * 180 / Math.PI) + 90;
      if (textRotation > 90 && textRotation < 270) {
        textRotation += 180;
      }

      // Calculate max width for text based on arc length at label radius
      const arcLength = labelRadius * anglePerSegment;
      const maxWidth = arcLength * 0.8;

      const text = g.append('text')
        .attr('transform', `translate(${x},${y}) rotate(${textRotation})`)
        .attr('text-anchor', 'middle')
        .attr('font-size', '10px')
        .attr('font-weight', 'bold')
        .attr('fill', '#000000')
        .style('cursor', 'pointer')
        .style('pointer-events', 'all')
        .on('click', function() {
          if (onSectionClick) {
            onSectionClick({ section: symptom.name });
          }
          router.push(symptom.path);
        })
        .on('mouseover', function() {
          d3.select(this).selectAll('tspan')
            .attr('fill', '#0066CC');
        })
        .on('mouseout', function() {
          d3.select(this).selectAll('tspan')
            .attr('fill', '#000000');
        })
        .text(symptom.name);

      // Apply text wrapping
      wrapText({ text, maxWidth });
    });

    // Add center circle with title
    g.append('circle')
      .attr('r', innerRadius)
      .attr('fill', '#ffffff')
      .attr('stroke', '#000000')
      .attr('stroke-width', 2);

    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('font-size', '16px')
      .attr('font-weight', 'bold')
      .attr('fill', '#000000')
      .attr('y', -10)
      .text('Neurodivergent');
    
    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('y', 10)
      .attr('font-size', '14px')
      .attr('font-weight', 'bold')
      .attr('fill', '#000000')
      .text('Symptoms');

  }, [router, onSectionClick, levels]);

  const handleReset = () => {
    setLevels(new Array(symptoms.length).fill(0));
  };

  const maxLevel = Math.max(...levels);
  const hasData = maxLevel > 0;

  return (
    <div className="flex flex-col items-center">
      <svg ref={svgRef}></svg>
      <div className="mt-6 max-w-2xl space-y-4">
        <div className="flex justify-between items-center">
          <button
            onClick={handleReset}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors text-sm"
          >
            Reset Levels
          </button>
          {hasData && (
            <p className="text-sm text-gray-600">
              Highest level: <span className="font-bold">{maxLevel}</span>
            </p>
          )}
        </div>
        <div className="p-4 bg-blue-50 rounded border border-blue-200">
          <p className="text-sm text-gray-700 mb-2">
            <strong>How to use:</strong>
          </p>
          <ul className="text-sm text-gray-700 space-y-1 ml-4 list-disc">
            <li>Click on any <strong>ring level</strong> to rate how much you relate (1-5 scale)</li>
            <li>Click on a <strong>label name</strong> to explore detailed examples for that symptom</li>
            <li>Or use the <strong>button grid below</strong> to navigate to any symptom page</li>
          </ul>
          <p className="text-xs text-gray-600 mt-2">
            <strong>Rating levels:</strong> 1 = rarely/minimal, 5 = very often/significant impact
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
          <div className="p-2 bg-orange-50 rounded border border-orange-200">
            <strong>ADHD:</strong> Orange/Red tones
          </div>
          <div className="p-2 bg-red-50 rounded border border-red-200">
            <strong>AUTISM:</strong> Pink/Red tones
          </div>
          <div className="p-2 bg-purple-50 rounded border border-purple-200">
            <strong>OVERLAP:</strong> Purple/Blue tones
          </div>
        </div>

        {showButtonGrid && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 text-center">
              Check Your Symptoms
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {symptoms.map((symptom, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (onSectionClick) {
                      onSectionClick({ section: symptom.name });
                    }
                    router.push(symptom.path);
                  }}
                  className="p-3 rounded-lg border-2 transition-all hover:scale-105 hover:shadow-lg text-left"
                  style={{
                    backgroundColor: `${symptom.color}20`,
                    borderColor: symptom.color,
                    color: '#000000'
                  }}
                >
                  <div className="font-semibold text-sm">{symptom.name}</div>
                  <div className="text-xs mt-1 opacity-70">{symptom.category}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
