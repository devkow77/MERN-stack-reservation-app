import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "./ui/dialog";
import { Input } from "./ui/input";

const SignSpecialistBtn = () => {
  return (
    <Button className="bg-yellow-500 hover:bg-yellow-700">
      <Dialog>
        <DialogTrigger> Dodaj swój biznes 💼</DialogTrigger>
        <DialogContent>
          <DialogHeader className="flex flex-col items-center justify-center">
            <DialogTitle className="text-2xl">Zacznij zarabiać</DialogTitle>
            <DialogDescription>
              Utwórz konto lub zaloguj się, aby wygodnie rozwijać swój biznes.
            </DialogDescription>
          </DialogHeader>
          <Input placeholder="E-mail" />
          <Button className="bg-yellow-500 hover:bg-yellow-700">Dalej</Button>
        </DialogContent>
      </Dialog>
    </Button>
  );
};

export default SignSpecialistBtn;
