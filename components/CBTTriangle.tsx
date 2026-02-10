'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export const CBTTriangle = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const width = 500;
    const height = 450;
    const centerX = width / 2;
    const centerY = height / 2;

    // Define triangle vertices
    const triangleRadius = 120;
    const vertices = [
      { x: centerX, y: centerY - triangleRadius, label: 'Thoughts' }, // Top
      { x: centerX - triangleRadius * Math.cos(Math.PI / 6), y: centerY + triangleRadius * Math.sin(Math.PI / 6), label: 'Emotions' }, // Bottom left
      { x: centerX + triangleRadius * Math.cos(Math.PI / 6), y: centerY + triangleRadius * Math.sin(Math.PI / 6), label: 'Behaviors' }, // Bottom right
    ];

    const g = svg.append('g');

    // Draw triangle edges
    const trianglePoints = vertices.map(v => [v.x, v.y] as [number, number]);
    g.append('path')
      .attr('d', d3.line()(trianglePoints.concat([trianglePoints[0]])))
      .attr('fill', 'none')
      .attr('stroke', '#14b8a6')
      .attr('stroke-width', 3);

    // Arrow properties
    const arrowLength = 50;
    const arrowGap = 25; // Space between arrow end and label

    // Define arrow directions (pointing towards each vertex)
    const arrows = [
      {
        // Arrow to Thoughts (top)
        start: { x: centerX, y: centerY - arrowLength / 2 },
        end: { x: centerX, y: centerY - arrowLength / 2 - arrowLength },
        label: 'Thoughts',
        labelPos: { x: centerX, y: centerY - arrowLength / 2 - arrowLength - arrowGap }
      },
      {
        // Arrow to Emotions (bottom left)
        start: { 
          x: centerX - (arrowLength / 2) * Math.cos(Math.PI / 6), 
          y: centerY + (arrowLength / 2) * Math.sin(Math.PI / 6) 
        },
        end: { 
          x: centerX - (arrowLength / 2 + arrowLength) * Math.cos(Math.PI / 6), 
          y: centerY + (arrowLength / 2 + arrowLength) * Math.sin(Math.PI / 6) 
        },
        label: 'Emotions',
        labelPos: { 
          x: centerX - (arrowLength / 2 + arrowLength + arrowGap) * Math.cos(Math.PI / 6), 
          y: centerY + (arrowLength / 2 + arrowLength + arrowGap) * Math.sin(Math.PI / 6) 
        }
      },
      {
        // Arrow to Behaviors (bottom right)
        start: { 
          x: centerX + (arrowLength / 2) * Math.cos(Math.PI / 6), 
          y: centerY + (arrowLength / 2) * Math.sin(Math.PI / 6) 
        },
        end: { 
          x: centerX + (arrowLength / 2 + arrowLength) * Math.cos(Math.PI / 6), 
          y: centerY + (arrowLength / 2 + arrowLength) * Math.sin(Math.PI / 6) 
        },
        label: 'Behaviors',
        labelPos: { 
          x: centerX + (arrowLength / 2 + arrowLength + arrowGap) * Math.cos(Math.PI / 6), 
          y: centerY + (arrowLength / 2 + arrowLength + arrowGap) * Math.sin(Math.PI / 6) 
        }
      }
    ];

    // Define arrowhead marker
    svg.append('defs').append('marker')
      .attr('id', 'arrowhead')
      .attr('viewBox', '0 0 10 10')
      .attr('refX', 9)
      .attr('refY', 5)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .append('path')
      .attr('d', 'M 0 0 L 10 5 L 0 10 z')
      .attr('fill', '#0891b2');

    // Draw arrows
    arrows.forEach(arrow => {
      g.append('line')
        .attr('x1', arrow.start.x)
        .attr('y1', arrow.start.y)
        .attr('x2', arrow.end.x)
        .attr('y2', arrow.end.y)
        .attr('stroke', '#0891b2')
        .attr('stroke-width', 2.5)
        .attr('marker-end', 'url(#arrowhead)');
    });

    // Add labels
    arrows.forEach(arrow => {
      g.append('text')
        .attr('x', arrow.labelPos.x)
        .attr('y', arrow.labelPos.y)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '18px')
        .attr('font-weight', 'bold')
        .attr('fill', '#0f766e')
        .text(arrow.label);
    });

    // Add bidirectional arrows between vertices (curved)
    const connections = [
      { from: 0, to: 1 }, // Thoughts <-> Emotions
      { from: 1, to: 2 }, // Emotions <-> Behaviors
      { from: 2, to: 0 }, // Behaviors <-> Thoughts
    ];

    connections.forEach(conn => {
      const from = vertices[conn.from];
      const to = vertices[conn.to];
      
      // Calculate midpoint and control point for curve
      const midX = (from.x + to.x) / 2;
      const midY = (from.y + to.y) / 2;
      
      // Calculate perpendicular offset for curve
      const dx = to.x - from.x;
      const dy = to.y - from.y;
      const length = Math.sqrt(dx * dx + dy * dy);
      const perpX = -dy / length * 15; // 15 is curve offset
      const perpY = dx / length * 15;
      
      const controlX = midX + perpX;
      const controlY = midY + perpY;

      // Draw curved arrow
      const path = g.append('path')
        .attr('d', `M ${from.x} ${from.y} Q ${controlX} ${controlY} ${to.x} ${to.y}`)
        .attr('fill', 'none')
        .attr('stroke', '#6b7280')
        .attr('stroke-width', 1.5)
        .attr('stroke-dasharray', '5,3')
        .attr('opacity', 0.6);
    });

    // Add center text
    g.append('text')
      .attr('x', centerX)
      .attr('y', centerY)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('font-size', '14px')
      .attr('fill', '#6b7280')
      .attr('font-style', 'italic')
      .text('Change one,');
    
    g.append('text')
      .attr('x', centerX)
      .attr('y', centerY + 18)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('font-size', '14px')
      .attr('fill', '#6b7280')
      .attr('font-style', 'italic')
      .text('change all');

  }, []);

  return (
    <div className="flex justify-center my-6">
      <svg
        ref={svgRef}
        width="500"
        height="450"
        className="bg-white rounded-lg border border-teal-200"
      />
    </div>
  );
};
