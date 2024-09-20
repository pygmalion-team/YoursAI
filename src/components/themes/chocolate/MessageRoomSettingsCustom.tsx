import { MessageRoomProps } from "@/components/themes/models/MessageRoom.ts";
import TopBar from "@/components/themes/chocolate/TopBar.tsx";
import SettingItem from "@/components/themes/chocolate/SettingItem.tsx";
import SettingItemDivider from "@/components/themes/chocolate/SettingItemDivider.tsx";

export default function MessageRoomSettingsCustom({
  messageRoomId,
}: MessageRoomProps) {
  console.log(messageRoomId); // TODO <- 삭제
  return (
    <div
      className={`relative size-full border-l-[0.5px] border-[#C6C6C8] bg-white`}
    >
      {/* TODO: 동적으로 */}
      <TopBar
        title={"세나와 7월 11일 오전 6:48에 시작한 대화 - 대화 설정 커스텀"}
        backLink={`../${messageRoomId}/settings`}
        bgColor={"bg-white"}
      />
      <div className="flex-1 overflow-y-scroll">
        <div className="flex flex-col items-stretch py-5">
          <SettingItem title={"대화 스타일"} action={`소설형`} />
          {/* TODO: 아래의 daisy ui 없애고 커스텀 만들기*/}
          <SettingItem
            title={"이중 번역"}
            action={
              <input
                type="checkbox"
                className="toggle border-none bg-white [--tglbg:#FEE500] "
                defaultChecked
              />
            }
          />
          <SettingItem
            title={"타이핑 시뮬레이션"}
            action={
              <input
                type="checkbox"
                className="toggle border-none bg-white [--tglbg:#FEE500] "
                defaultChecked
              />
            }
          />
          <SettingItem title={"내 소개"} />
          <SettingItemDivider />
          <SettingItem title={"모두 기본값(캐릭터 설정)으로 설정하기"} />
        </div>
      </div>
    </div>
  );
}
