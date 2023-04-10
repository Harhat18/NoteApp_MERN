import { Button } from "react-bootstrap";

interface NavBarLoggedOutViewProps {
  onSignUpClicked: () => void;
  onLoginClicked: () => void;
}

const NavBarLoggedOutView = ({
  onSignUpClicked,
  onLoginClicked,
}: NavBarLoggedOutViewProps) => {
  return (
    <>
      <Button onClick={onSignUpClicked}>KAYIT</Button>
      <Button onClick={onLoginClicked}>GİRİŞ</Button>
    </>
  );
};

export default NavBarLoggedOutView;
