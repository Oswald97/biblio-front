import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Plus } from "lucide-react";
import AdherentForm from "./AdherentForm";

const AdherentAdd = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          Ajouter un Adherent
          <Plus className="size-4 ml-2" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[90vw] md:w-[min(600px,80%)] max-h-screen flex flex-col">
        <SheetHeader className="border-b">
          <SheetTitle>Nouvel Adhérent</SheetTitle>
        </SheetHeader>
        <div className="overflow-y-auto flex-1 px-4">
          <AdherentForm />
        </div>

        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
};

export default AdherentAdd;
