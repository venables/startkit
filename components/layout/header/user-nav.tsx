"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { getInitials } from "@/lib/utils/string-fns/get-initials"
import type { User } from "next-auth"
import { signOut } from "next-auth/react"
import { useCallback, useState } from "react"

type UserNavProps = {
  user: User
}

export function UserNav({ user }: UserNavProps) {
  const [open, setOpen] = useState(false)
  const [isSigningOut, setIsSigningOut] = useState(false)

  const onSignOutClicked = useCallback(async () => {
    setIsSigningOut(true)
    try {
      await signOut()
    } finally {
      setIsSigningOut(false)
      setOpen(false)
    }
  }, [])

  return (
    <AlertDialog onOpenChange={setOpen} open={open}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="relative size-8 rounded-full transition-all"
            variant="ghost"
          >
            <Avatar className="size-8">
              <AvatarImage
                alt={user.name ?? user.email ?? undefined}
                referrerPolicy="no-referrer"
                src={user.image ?? undefined}
              />
              <AvatarFallback>
                {getInitials(user.name ?? user.email)}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user.name}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem disabled>Profile</DropdownMenuItem>
            <DropdownMenuItem disabled>Billing</DropdownMenuItem>
            <DropdownMenuItem disabled>Settings</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <AlertDialogTrigger asChild>
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </AlertDialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to sign out?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Just checking. You can always come back whenever you want.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={isSigningOut}
            onClick={(e) => {
              e.preventDefault()
              void onSignOutClicked()
            }}
          >
            Sign out
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
