/**
 * Color theme utilities for DBT skill modules
 * 
 * Color themes:
 * - Mindfulness: blue
 * - Distress Tolerance: orange
 * - Emotional Regulation: purple
 * - Interpersonal Skills: green
 * - Crisis Skills: red
 * - Flowchart: white/gray
 */

export type ModuleType = 
  | 'mindfulness' 
  | 'distress-tolerance' 
  | 'emotional-regulation' 
  | 'interpersonal-skills' 
  | 'crisis-skills' 
  | 'flowchart';

export const moduleColors: Record<ModuleType, {
  bg: string;
  bgLight: string;
  border: string;
  text: string;
  button: string;
  buttonHover: string;
}> = {
  'mindfulness': {
    bg: 'bg-blue-50',
    bgLight: 'bg-blue-100',
    border: 'border-blue-200',
    text: 'text-blue-800',
    button: 'bg-blue-600',
    buttonHover: 'hover:bg-blue-700',
  },
  'distress-tolerance': {
    bg: 'bg-orange-50',
    bgLight: 'bg-orange-100',
    border: 'border-orange-200',
    text: 'text-orange-800',
    button: 'bg-orange-600',
    buttonHover: 'hover:bg-orange-700',
  },
  'emotional-regulation': {
    bg: 'bg-purple-50',
    bgLight: 'bg-purple-100',
    border: 'border-purple-200',
    text: 'text-purple-800',
    button: 'bg-purple-600',
    buttonHover: 'hover:bg-purple-700',
  },
  'interpersonal-skills': {
    bg: 'bg-green-50',
    bgLight: 'bg-green-100',
    border: 'border-green-200',
    text: 'text-green-800',
    button: 'bg-green-600',
    buttonHover: 'hover:bg-green-700',
  },
  'crisis-skills': {
    bg: 'bg-red-50',
    bgLight: 'bg-red-100',
    border: 'border-red-200',
    text: 'text-red-800',
    button: 'bg-red-600',
    buttonHover: 'hover:bg-red-700',
  },
  'flowchart': {
    bg: 'bg-white',
    bgLight: 'bg-gray-50',
    border: 'border-gray-200',
    text: 'text-gray-800',
    button: 'bg-blue-600',
    buttonHover: 'hover:bg-blue-700',
  },
};

/**
 * Get module type from file path
 */
export function getModuleFromPath(path: string): ModuleType {
  if (path.includes('/mindfulness/')) return 'mindfulness';
  if (path.includes('/distress-tolerance/')) return 'distress-tolerance';
  if (path.includes('/emotional-regulation/')) return 'emotional-regulation';
  if (path.includes('/interpersonal-skills/')) return 'interpersonal-skills';
  if (path.includes('/crisis')) return 'crisis-skills';
  if (path.includes('/flowchart/')) return 'flowchart';
  return 'flowchart'; // default
}

/**
 * Get color classes for a module
 */
export function getModuleColors(module: ModuleType) {
  return moduleColors[module];
}
