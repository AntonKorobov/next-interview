interface IToDoItemProps {
  name: string;
}

export function ToDoItem({ name }: IToDoItemProps) {
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
}
