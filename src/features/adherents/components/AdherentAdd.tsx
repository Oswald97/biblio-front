import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { toogleSheet } from "@/store/slices/adherent.slice";
import { Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import AdherentForm from "./AdherentForm";

const AdherentAdd = () => {
  const { sheetState } = useSelector((state: stateType) => state.adherent);
  
  const dispatch = useDispatch();
  const toogle = () => {
    dispatch(toogleSheet());
  };
  return (
    <Sheet open={sheetState} onOpenChange={toogle}>
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
