import Button from "./Button";

export default function ButtonGroup({
  handleRemoveAllItems,
  handleReset,
  handleMarkAllAsComplete,
  handleMarkAllAsInComplete,
}) {
  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: handleMarkAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: handleMarkAllAsInComplete,
    },
    {
      text: "Reset to initial",
      onClick: handleReset,
    },
    {
      text: "Remove all items",
      onClick: handleRemoveAllItems,
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
