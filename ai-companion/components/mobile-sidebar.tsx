import { Menu } from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle
} from "@/components/ui/sheet";
import { Sidebar } from "@/components/sidebar";

export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger className="md:hidden pr-4">
                <Menu />
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-secondary pt-10 w-32">
                <div className="flex flex-col items-center">
                    <SheetTitle></SheetTitle>
                    <Sidebar />
                </div>
            </SheetContent>
        </Sheet>
    );
}