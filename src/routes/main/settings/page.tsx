import { Outlet, useOutletContext } from "react-router-dom";
import SplitViewPage from "@/routes/main/SplitViewPage.tsx";
import { useLeftPrimaryPage } from "@/routes/main/hooks.ts";
import TabTitle from "@/components/common/TabTitle.tsx";
import TabAction from "@/components/common/TabAction.tsx";
import { List, ListItem } from "konsta/react";
import NavLinkListItem from "@/components/common/NavLinkListItem.tsx";
import { useTranslation } from "react-i18next";
import DefaultErrorBoundary from "@/components/common/DefaultErrorBoundary.tsx";
import ListContainer from "@/components/common/ListContainer.tsx";
import { useEffect, useRef } from "react";
import { PWAInstallElement } from "@khmyznikov/pwa-install";
import { useIsPwa } from "@/hooks/useIsPwa.ts";
import { PwaInstallModal } from "@/components/common/PwaInstallModal.tsx";

export function Component() {
  const { t } = useTranslation("pages/settings");
  useLeftPrimaryPage("/main/settings");
  const outletContext = useOutletContext();
  const pwaInstallRef = useRef<PWAInstallElement>(null);
  const isPwa = useIsPwa();

  useEffect(() => {
    if (pwaInstallRef.current) {
      pwaInstallRef.current.hideDialog();
    }
  }, []);

  return (
    <SplitViewPage
      leftPane={
        <div className="h-full bg-emptyBackground">
          <TabAction action="none" />
          <TabTitle title={t("title")} />
          <div className="mt-[12px] flex flex-col gap-[36px] px-[15px] phone:px-8">
            <List strong inset dividers className="!m-0 bg-white">
              <NavLinkListItem
                link="language"
                title={t("language.title")}
                after="한국어"
              />
              <NavLinkListItem
                link="themes"
                title={t("themes.title")}
                after={t("themes.fruit.name")}
                isLast
              />
            </List>
            <List strong inset dividers className="!m-0 bg-white">
              <NavLinkListItem
                link="chat-customize"
                title={t("conversation.title")}
                after={t("conversation.options.style.choices")}
                isLast
              />
            </List>
            <List strong inset dividers className="!m-0 bg-white">
              <NavLinkListItem link="data" title={t("data.title")} isLast />
            </List>
            <List strong inset dividers className="!m-0 bg-white">
              <ListItem title={t("dev")} link />
              <ListItem title={t("discord")} link />
              <ListItem title={t("email")} link />
              <NavLinkListItem link="sponsor" title={t("sponsor")} isLast />
            </List>
            <List strong inset dividers className="!m-0 bg-white">
              <ListItem title={<p className="text-red">{t("reset")}</p>} link />
            </List>
            {!isPwa ? (
              <ListContainer>
                <ListItem
                  title="홈화면에 추가하기"
                  link
                  onClick={() => pwaInstallRef.current?.showDialog(true)}
                />
              </ListContainer>
            ) : null}
          </div>
          <PwaInstallModal ref={pwaInstallRef} />
        </div>
      }
      rightPane={<Outlet context={outletContext} />}
    />
  );
}

Component.displayName = "SettingsPage";

export const ErrorBoundary = DefaultErrorBoundary;
