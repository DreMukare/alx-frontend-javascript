interface MajorCredits {
  credits: number;
  brand: string;
}

interface MinorCredits {
  credits: number;
  brand: string;
}

export function sumMajorCredits(subject1: number, subject2: number): number {
  return subject1 + subject2;
}

export function sumMinorCredits(subject1: number, subject2: number): number {
  return subject1 + subject2;
} 
