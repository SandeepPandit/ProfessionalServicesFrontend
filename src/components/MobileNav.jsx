import { CircleUserRound, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { useAuth } from "@/Authorization/useAuth";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-purple-600" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          {isLoggedIn ? (
            <span className="flex items-center font-bold gap-2 font-poppins">
              <CircleUserRound className="text-purple-600" />
              {user?.username}
            </span>
          ) : (
            <span className="font-poppins">
              {" "}
              Welcome to Professional Services!
            </span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          <MobileNavLinks />
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
