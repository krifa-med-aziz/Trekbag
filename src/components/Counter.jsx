export default function Counter({ totalNumberOfItems, numberOfItemsPacked }) {
  return (
    <p className="counter">
      <b>{numberOfItemsPacked}</b> / {totalNumberOfItems} items packed
    </p>
  );
}
