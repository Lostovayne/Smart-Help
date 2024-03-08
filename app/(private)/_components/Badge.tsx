interface BadgeProps {
  quantity: number;
}
function Badge({ quantity }: BadgeProps) {
  const badge: boolean = quantity >= 0 ? true : false;
  return (
    <>
      {badge ? (
        <div className="absolute right-0 rounded-sm top-0 px-4 py-2 bg-green-500 text-xs text-white font-extrabold">
          In Stock
        </div>
      ) : (
        <div className="absolute right-0 rounded-sm top-0 px-4 py-2 bg-red-500 text-xs text-white font-extrabold">
          Out Stock
        </div>
      )}
    </>
  );
}
;
export default Badge;
