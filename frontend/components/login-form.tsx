import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const LoginForm = () => {
  return (
    <Dialog>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Zacznij korzystać</DialogTitle>
          <DialogDescription>
            Utwórz konto lub zaloguj się, aby wygodnie rezerwować wizyty.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LoginForm;
