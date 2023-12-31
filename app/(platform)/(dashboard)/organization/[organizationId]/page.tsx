import React from "react";
import { Info } from "./_components/info";
import { Separator } from "@/components/ui/separator";
import { BoardList } from "./_components/board-list";

const OrganizationPage = () => {
  return (
    <div className="w-full mb-20">
      <Info isPro={true} />
      <Separator className="my-4" />
      <div className="px-2 md:px-4">
        <BoardList />
      </div>
    </div>
  );
};

export default OrganizationPage;
