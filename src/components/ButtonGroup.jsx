import { useItemStore } from "../stores/itemsStore";
import Button from "./Button";

export default function ButtonGroup() {
  const markAllAsComplete = useItemStore((state) => state.MarkAllAsComplete);
  const markAllAsInComplete = useItemStore(
    (state) => state.MarkAllAsInComplete
  );
  const resetToInitial = useItemStore((state) => state.ResetToInitial);
  const removeAllItems = useItemStore((state) => state.RemoveAllItems);
  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: markAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: markAllAsInComplete,
    },
    {
      text: "Reset to initial",
      onClick: resetToInitial,
    },
    {
      text: "Remove all items",
      onClick: removeAllItems,
    },
  ];
  return (
    <section className="button-group">
      {secondaryButtons.map(({ text, onClick }) => (
        <Button
          onClick={onClick}
          key={text + onClick.toString()}
          buttonType="secondary"
        >
          {text}
        </Button>
      ))}
    </section>
  );
}
