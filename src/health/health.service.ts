export interface HealthCheck {
    database: Boolean
    smpt: Boolean
}

export const getSystemHealth = async () => {
    return "OK"
}

export const getAdminSystemHealth = async (token: string): Promise<HealthCheck> => {
    if (!token) throw new Error("No token provided");

    return {
        database: false,
        smpt: false
    }
}