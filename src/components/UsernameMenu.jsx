import { CircleUserRound } from "lucide-react";

import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";
import { useAuth } from "@/Authorization/useAuth";

const UsernameMenu = () => {
  const { user } = useAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-purple-600 gap-2">
        {<CircleUserRound className="text-purple-600" />}
        {user.username}
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem className="font-bold text-purple-600">
          {user.email}
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem className="flex-col">
          {user.isAdmin ? (
            <>
              <Link to="/admin" className="font-bold hover:text-purple-600">
                Admin
              </Link>

              <Link to="/logout" className="font-bold hover:text-purple-600">
                Log Out
              </Link>
            </>
          ) : (
            <Link to="/logout" className="font-bold hover:text-purple-600">
              Log Out
            </Link>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;
