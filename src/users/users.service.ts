import { IUser, User } from "../apps/queue/queue.model";

export const userPing = async (userProp: IUser) => {
    try {
        const user = await User.findOne({ email: userProp.email });

        if (!user) {
            await User.create(userProp);
            return { message: "User created" };
        } else {
            return { message: "User already exists" };
        }
    } catch (error) {
        console.error("Error in userPing:", error);
        return { message: "An error occurred" };
    }
}
