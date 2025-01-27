import React, { FormEvent, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { inviteUserToDocument } from "../../actions/actions";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import { useTransition } from "react";
import { Input } from "./ui/input";

function InviteUserButton() {
  const [showInviteDialog, setshowInviteDialog] = useState(false);
  const [isInviting, startInvitingTransition] = useTransition();
  const [emailInput, setEmailInput] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  // For Inviting user to  Doc
  const handleInviteClick = async (e: FormEvent) => {
    e.preventDefault();
    const roomId = pathname?.split("/").pop();
    if (!roomId) return;
    startInvitingTransition(async () => {
      const isEmailValid = await validateEmail(emailInput);
      if (isEmailValid) {
        const { success } = await inviteUserToDocument(roomId, emailInput);
        if (success) {
          router.replace("/dashboard");
          toast.success("Invited user successfully!");
        } else {
          toast.error("Invite users who signed up in our app");
        }
      } else {
        toast.error("Invalid Email Address");
      }
      setshowInviteDialog(false);
    });
  };

  const validateEmail = async (email: string) => {
    if (!checkEmailRegex(email)) return false;
    try {
      const res = await fetch(`/api/clerkApi?email=${email}`);
      if (!res.ok) {
        return false;
      } else {
        return true;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const checkEmailRegex = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return false;
    } else return true;
  };

  return (
    <Dialog open={showInviteDialog} onOpenChange={setshowInviteDialog}>
      <DialogTrigger asChild>
        <div className="p-[1px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-600 rounded-lg" />
          <button
            type="button"
            className="px-8 py-2 bg-white dark:bg-black rounded-[6px] relative group transition duration-200 text-gray-900 dark:text-white hover:text-white hover:bg-transparent w-full"
          >
            Invite
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Invite to collaborate with users</DialogTitle>
          <DialogDescription>
            Enter the email address of the user you want to invite to
            collaborate on this document.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleInviteClick} className="flex gap-2">
          <Input
            type="email"
            placeholder="abc@xyz.com"
            onChange={(e) => {
              setEmailInput(e.target.value);
            }}
          />
          <Button
            type="submit"
            disabled={
              isInviting || !checkEmailRegex(emailInput) || emailInput == ""
            }
            onClick={handleInviteClick}
            variant="outline"
          >
            {isInviting ? "Inviting..." : "Invite"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default InviteUserButton;
