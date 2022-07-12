import { Button } from "@mui/material";
import Link from "next/link";

type Props = {
  areas: string[];
};

const AreaSelection = ({ areas }: Props) => {
  return (
    <div className="flex flex-row justify-center items-center gap-10">
      {areas.map((area) => {
        return (
          <div key={area}>
            <Link href={`/${area}`}>
              <Button
                variant="contained"
                className="h-10 p-20 flex justify-center items-center"
              >
                <a>{area}</a>
              </Button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AreaSelection;
