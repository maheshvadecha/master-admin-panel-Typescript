//** Third party imports */
import { LogOut, User, CreditCard, Bell, ArrowUpRight } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function ProfileDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="cursor-pointer"
        >
          M
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {/* Profile section */}
        <div className="flex items-center gap-3 p-3">
          <Button
            variant="ghost"
            className="overflow-hidden"
          >
            M
          </Button>
          <div className="space-y-0.5">
            <div className="font-semibold text-sm">JRHMSquare</div>
            <div className="text-xs text-gray-500">jrhmm@gamil.com</div>
          </div>
        </div>

        <DropdownMenuSeparator />

        {/* Menu Items */}
        <DropdownMenuItem className="flex items-center gap-2">
          <ArrowUpRight size={16} />
          <span className="text-sm font-medium">Upgrade to Pro</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-2">
          <User size={16} />
          <span className="text-sm">Account</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-2">
          <CreditCard size={16} />
          <span className="text-sm">Billing</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-2">
          <Bell size={16} />
          <span className="text-sm">Notifications</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="flex items-center gap-2">
          <LogOut size={16} />
          <span className="text-sm">Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
