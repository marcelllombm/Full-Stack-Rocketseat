import { Text } from "./components/Text";
import TashIcon from "./assets/icons/Trash.svg?react";
import CheckIcon from "./assets/icons/Check.svg?react";
import PencilIcon from "./assets/icons/Pencil.svg?react";
import SpinnerIcon from "./assets/icons/Spinner.svg?react";
import PlusIcon from "./assets/icons/Plus.svg?react";
import XIcon from "./assets/icons/X.svg?react";

import { Icon } from "./components/Icons";
import { Badge } from "./components/Badge";

export function App() {
  return (
    <div>
      <div className="flex  flex-col gap-2">
        <Text variant="body-md-bold" className="text-pink-base">
          {" "}
          Olá mundo!
        </Text>
        <Text className="text-green-base"> Olá mundo!</Text>
        <Text variant="body-md-bold"> Olá mundo!</Text>
        <Text> Levar o dog </Text>
      </div>

      <div className="flex gap-1">
        <Icon svg={TashIcon} className="fill-pink-base" />
        <Icon svg={CheckIcon} />
        <Icon svg={PlusIcon} />
        <Icon svg={SpinnerIcon} animate />
        <Icon svg={PencilIcon} />
        <Icon svg={XIcon} />
      </div>

      <div>
        <Badge variant={"secondary"}>5 </Badge>
        <Badge variant={"primary"}> 2 de 5</Badge>
      </div>
    </div>
  );
}
