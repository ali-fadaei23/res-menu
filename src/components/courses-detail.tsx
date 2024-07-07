"use client";
import { usePathname } from "next/navigation";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { roboto_mono } from "@/app/page";

export default function CoursesDetail() {
  const pathname = usePathname();
  let tabs = [
    {
      id: "item1",
      href: "#",
      label: "item 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "item2",
      href: "#",
      label: "item 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "item3",
      href: "#",
      label: "item 3",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: "item4",
      href: "#",
      label: "item 4",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "item5",
      href: "#",
      label: "item 5",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "item6",
      href: "#",
      label: "item 6",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "item7",
      href: "#",
      label: "item 7",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "item8",
      href: "#",
      label: "item 8",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "item9",
      href: "#",
      label: "item 9",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "item10",
      href: "#",
      label: "item 10",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  return (
    <Tabs
      size='sm'
      className={`w-full`}
      classNames={{
        tabList: "w-full relative rounded-none p-4",
        cursor: "w-full bg-gray-800 font-semibold rounded-full",
        tab: "w-full py-4",
        tabContent: `group-data-[selected=true]:text-white text-neutral-400 ${roboto_mono.className}`,
      }}
      variant='light'
      color='default'
      aria-label='Dynamic tabs'
      items={tabs}
    >
      {(item) => (
        <Tab key={item.id} title={item.label}>
          <Card>
            <CardBody>{item.content}</CardBody>
          </Card>
        </Tab>
      )}
    </Tabs>
  );
}
