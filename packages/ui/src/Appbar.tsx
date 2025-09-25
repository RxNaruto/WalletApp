import { Button } from "./AddMoneyButton";

interface AppbarProps{
    user?: {
        name?: string | null;
    },
    onSignin: any,
    onLogout: any
}

export const Appbar=({user,onSignin,onLogout}: AppbarProps)=>{
    return <div className="flex justify-between border-b px-4 border-slate-300">
        <div className="text-lg flex flex-col justify-center">
            PayTM
        </div>
        <div className="flex flex-col justify-center pt-2">
            <Button onClick={user ? onLogout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
}