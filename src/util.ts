const RADIAN = Math.PI / 180;

/**
 * Transform angle to radian
 */
export function angleToRadian(angle: number): number {
  return RADIAN * angle;
}

export function findMoreOrEqualThan(nums: number[], target: number): number[] {
  return nums.reduce((prev, num) => {
    if (num >= target) {
      prev.push(num);
    }
    return prev;
  }, []);
}
