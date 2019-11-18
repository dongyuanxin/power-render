const RADIAN = Math.PI / 180;
/**
 * Transform angle to radian
 */
export function angleToRadian(angle) {
    return RADIAN * angle;
}
export function findMoreOrEqualThan(nums, target) {
    return nums.reduce((prev, num) => {
        if (num >= target) {
            prev.push(num);
        }
        return prev;
    }, []);
}
