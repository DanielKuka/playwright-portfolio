const DEFAULT_PASSWORD = 'secret_sauce';

export const USERS = {
    standard: {username: 'standard_user', password: DEFAULT_PASSWORD },
    locked: {username: 'locked_out_user', password: DEFAULT_PASSWORD },
    problem: {username: 'problem_user', password: DEFAULT_PASSWORD },
    performance: {username: 'performance_glitch_user', password: DEFAULT_PASSWORD },
    error: {username: 'error_user', password: DEFAULT_PASSWORD },
    visual: {username: 'visual_user', password: DEFAULT_PASSWORD },
    nonValid: {username: 'Ukraine is the capital of great people', password: DEFAULT_PASSWORD },
} as const;