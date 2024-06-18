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
import { Link } from "react-router-dom";

const AdminMobileNav = () => {
  const { user } = useAuth();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-purple-600" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          <span className="flex items-center font-bold gap-2 font-poppins">
            <CircleUserRound className="text-purple-600" />
            Admin {user?.username}
          </span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          <Link
            to="/admin/users"
            className="font-poppins flex bg-white items-center font-bold hover:text-purple-600"
          >
            Users
          </Link>
          <Link
            to="/admin/contacts"
            className="font-poppins flex bg-white items-center font-bold hover:text-purple-600"
          >
            Messages
          </Link>
          <Link
            to="/"
            className="flex bg-white items-center font-bold hover:text-purple-600 font-poppins"
          >
            Return to Home
          </Link>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default AdminMobileNav;
