import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { getAccessToken } from "@/utils/_helper";
import { Menu, User } from "lucide-react";
import { useJwt } from "react-jwt";
import { Form, Link } from "react-router-dom";
import NavMenu from "./NavMenu";

const Header = () => {
  type jwtDecode = { exp: number; iat: number; sub: string };
  const token = getAccessToken();
  const { decodedToken, isExpired } = useJwt<jwtDecode>(token);
  return (
    <header className="flex h-14 items-center border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="md:hidden">
            <Menu className="size-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <NavMenu />
        </SheetContent>
      </Sheet>

      <div className="ml-auto">
        {token && (<DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full">
              <Avatar className="size-12">
                <AvatarFallback className="uppercase"> { `${decodedToken?.sub?.charAt(0)} ${decodedToken?.sub?.charAt(1)}` } </AvatarFallback>
              </Avatar>{" "}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuItem>My account</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Form action="/auth/logout" method="post">
                <button >Logout</button>  
              </Form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>)}

        {!token && (<Link to="/auth/login">Se connecter</Link>)}
      </div>
    </header>
  );
};

export default Header;
