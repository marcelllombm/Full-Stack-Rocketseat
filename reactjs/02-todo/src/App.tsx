import { Text } from "./components/Text";
import TrashIcon from "./assets/icons/Trash.svg?react";
import CheckIcon from "./assets/icons/Check.svg?react";
import PencilIcon from "./assets/icons/Pencil.svg?react";
import SpinnerIcon from "./assets/icons/Spinner.svg?react";
import PlusIcon from "./assets/icons/Plus.svg?react";
import XIcon from "./assets/icons/X.svg?react";

import { Icon } from "./components/Icon";
import { Badge } from "./components/Badge";
import { Button } from "./components/Button";
import { ButtonIcon } from "./components/ButtonIcon";
import { InputText } from "./components/InputText";
import { InputCheckbox } from "./components/InputCheckbox";
import { Card } from "./components/Card";
import { Container } from "./components/Container";
import { Skeleton } from "./components/Skeleton";

export function App() {
  return (
    <Container>
      <div className="grid gap-10">
        <div className="flex  flex-col gap-1">
          <Text variant="body-md-bold" className="text-pink-base">
            {" "}
            Olá mundo!
          </Text>
          <Text className="text-green-base"> Olá mundo!</Text>
          <Text variant="body-md-bold"> Olá mundo!</Text>
          <Text> Levar o dog </Text>
        </div>

        <div className="flex gap-1">
          <Icon svg={TrashIcon} className="fill-pink-base" />
          <Icon svg={CheckIcon} />
          <Icon svg={PlusIcon} />
          <Icon svg={SpinnerIcon} animate />
          <Icon svg={PencilIcon} />
          <Icon svg={XIcon} />
        </div>

        <div className="flex gap-1">
          <Badge variant={"secondary"}>5 </Badge>
          <Badge variant={"primary"}> 2 de 5</Badge>
          <Badge loading>5</Badge>
        </div>

        <div>
          <Button icon={PlusIcon}>Nova Tarefa </Button>
        </div>

        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} variant="secondary" />
          <ButtonIcon icon={TrashIcon} variant="tertiary" />
          <ButtonIcon icon={TrashIcon} loading />
        </div>

        <div>
          <InputText />
        </div>

        <div>
          <InputCheckbox />
          <InputCheckbox loading />
        </div>

        <div>
          <Card size="md">Olá mundo</Card>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
          <Skeleton className="w-96 h-6" />
        </div>
      </div>
    </Container>
  );
}
