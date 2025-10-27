import { Button } from "@chakra-ui/react";
function MyButton({ text }) {
  return (
    <Button
      variant="plain"
      onClick={() => alert("Clicked!")}
      color={"white"}
      fontWeight={"semibold"}
      size={"2xl"}
    >
      {text}
    </Button>
  );
}

export default MyButton;
