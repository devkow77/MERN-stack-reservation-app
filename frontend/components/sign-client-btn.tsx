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

const SignClientBtn = ({ name }: { name: string }) => {
  return (
    <Button className="bg-sky-500 hover:bg-sky-700">
      <Dialog>
        <DialogTrigger>{name}</DialogTrigger>
        <DialogContent>
          <DialogHeader className="flex flex-col items-center justify-center">
            <DialogTitle className="text-2xl">Zacznij korzystać</DialogTitle>
            <DialogDescription>
              Utwórz konto lub zaloguj się, aby wygodnie rezerwować wizyty.
            </DialogDescription>
          </DialogHeader>
          <Input placeholder="E-mail" />
          <Button className="bg-sky-500 hover:bg-sky-700">Dalej</Button>
        </DialogContent>
      </Dialog>
    </Button>
  );
};

export default SignClientBtn;
