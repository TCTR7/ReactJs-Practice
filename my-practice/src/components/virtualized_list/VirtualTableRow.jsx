export default function VirtualTableRow({ index, style, data }) {
  const item = data[index];
  return (
    <div
      style={style}
      className={`grid grid-cols-4 px-4 py-2 items-center border-b hover:bg-gray-50 text-sm`}
    >
      <div>{item.id}</div>
      <div className="whitespace-nowrap truncate">{item.name}</div>
      <div className="whitespace-nowrap truncate">{item.email}</div>
      <div className="whitespace-nowrap truncate">{item.country}</div>
    </div>
  );
}