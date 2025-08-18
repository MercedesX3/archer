import { useState } from "react";

interface ScrollBarProps {
  items: string[];
  onSelect?: (item: string) => void;
}

export default function ScrollBar({ items, onSelect }: ScrollBarProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (item: string) => {
    setSelected(item);
    if (onSelect) onSelect(item);
  };

  return (
    <div className="overflow-x-auto py-2">
      <div className="flex gap-4">
        {items.map((item) => (
          <div
            key={item}
            className={`px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
              selected === item
                ? "bg-[#5270A3] text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
            onClick={() => handleClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}