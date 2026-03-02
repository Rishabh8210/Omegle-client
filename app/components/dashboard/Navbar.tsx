import { Button } from "../common/Button";

export function Navbar() {
    return (
        <div className="h-16 w-full flex items-center justify-between border-white border-b">
            <div className="h-full w-56 flex px-2 items-center">
                <h1 className="text-2xl font-semibold bg-center uppercase">Omegle</h1>
            </div>
            <div className="px-2 h-full flex items-center">
                <Button title={"Login"} />
            </div>
        </div>
    )
}