import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from '@/components/ui/select';

export function SelectGlobal() {
  return (
    <Select>
      <div className="flex flex-col space-y-1.5 py-6 px-1 pb-4 pt-2 sm:px-2">
        <SelectTrigger className="border-0 focus:border-0 focus:ring-offset-0 focus:ring-0">
          <span className="truncate text-base font-semibold sm:text-xl">
            Carlotta & Zhezhi
          </span>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </div>
    </Select>
  );
}
