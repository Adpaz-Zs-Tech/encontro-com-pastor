export function BaseButtton({ title }: { title: string }) {
  return (
    <div className="w-full ">
      <button
        className="bg-zs-yellow text-white w-full font-medium p-2 rounded-md"
        type="submit"
      >
        {title}
      </button>
    </div>
  );
}
