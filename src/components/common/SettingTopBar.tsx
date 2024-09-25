import { PiCaretLeftBold } from "react-icons/pi";

export interface Props {
  title: string;
  enableBack?: boolean;
}

export default function SettingTopBar({ title, enableBack }: Props) {
  return (
    <div className="relative flex w-full items-center justify-center border-b border-border py-[18px]">
      {enableBack && (
        <div
          className="absolute left-[10px] cursor-pointer text-24p text-accentBlue"
          onClick={(e) => {
            e.preventDefault();
            window.history.back();
          }}
        >
          <PiCaretLeftBold />
        </div>
      )}

      <span className="text-16p font-semibold leading-[22px] phone:text-20p">
        {title}
      </span>
    </div>
  );
}
