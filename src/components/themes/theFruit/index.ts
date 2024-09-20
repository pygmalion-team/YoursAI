import Button from "./Button.tsx";
import TabNavigation from "./TabNavigation.tsx";
import EmptyPane from "./EmptyPane.tsx";
import { Theme } from "@/components/themes/models";
import MessageList from "@/components/themes/chocolate/MessageList.tsx";
import MessageRoom from "@/components/themes/chocolate/MessageRoom.tsx";
import MessageRoomSettings from "@/components/themes/chocolate/MessageRoomSettings.tsx";
import MessageRoomSettingsCustom from "@/components/themes/chocolate/MessageRoomSettingsCustom.tsx";

const theFruitTheme: Theme = {
  id: "theFruit",
  name: {
    en: '"The" fruit theme',
    ko: '"그" 과일 테마',
  },
  description: {
    en: "The most basic and clean feeling.",
    ko: "가장 기본적이고, 깔끔한 느낌.",
  },
  components: {
    Button,
    TabNavigation,
    EmptyPane,
    MessageList, // TODO: Change to theFruitMessageList
    MessageRoom, // TODO: Change to theFruitMessageRoom
    MessageRoomSettings, // TODO: Change to theFruitMessageRoomSettings
    MessageRoomSettingsCustom, // TODO: Change to theFruitMessageRoomSettingsCustom
  },
};

export default theFruitTheme;
