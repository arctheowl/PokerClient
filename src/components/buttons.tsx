import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function BasicButtonGroup() {
  return (
    <div className="self-center">
      <ButtonGroup
        variant="outlined"
        aria-label="outlined primary button group"
        size="large"
      >
        <Button>Bet</Button>
        <Button>Call</Button>
        <Button>Fold</Button>
      </ButtonGroup>
    </div>
  );
}
