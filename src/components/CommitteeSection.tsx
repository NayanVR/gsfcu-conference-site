import React from "react";
import {
  ADVISORY_COMMITTEE,
  CHIEF_PATRON,
  CO_CONVENORS,
  CONFERENCE_CHAIR,
  CONVENORS,
  EDITORIAL_TEAM,
  ORGANIZING_COMMITTEE,
  TECHNICAL_PROGRAM_COMMITTEE,
  WEB_COMMITTEE,
  type Member,
} from "@/lib/committees";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const CommitteeSection = () => {
  return (
    <section id="committee">
      <div className="max-w-7xl mx-auto mb-8 mt-24 px-6 md:px-12 xl:px-6">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white md:text-5xl text-center mb-12">
          Committee
        </h1>

        <Tabs defaultValue="chief-patron">
          <TabsList className="w-full h-max flex justify-center max-w-full flex-wrap no-scrollbar gap-2 bg-white">
            <TabsTrigger value="chief-patron" className="bg-black/10">
              <TabTitle title="Chief Patron" />
            </TabsTrigger>
            <TabsTrigger value="advisory-committee" className="bg-black/10">
              <TabTitle title="Advisory Committee" />
            </TabsTrigger>
            <TabsTrigger
              value="technical-program-committee"
              className="bg-black/10"
            >
              <TabTitle title="Technical Program Committee" />
            </TabsTrigger>
            <TabsTrigger value="conference-chair" className="bg-black/10">
              <TabTitle title="Conference Chair" />
            </TabsTrigger>
            <TabsTrigger value="convenors" className="bg-black/10">
              <TabTitle title="Convenors" />
            </TabsTrigger>
            <TabsTrigger value="organizing-committee" className="bg-black/10">
              <TabTitle title="Organizing Committee" />
            </TabsTrigger>
            <TabsTrigger value="editorial-team" className="bg-black/10">
              <TabTitle title="Editorial Team" />
            </TabsTrigger>
            <TabsTrigger value="web-committee" className="bg-black/10">
              <TabTitle title="Web Committee" />
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chief-patron">
            <CommitteeTitle title="Chief Patron" />
            <CommitteeList members={CHIEF_PATRON} />
          </TabsContent>
          <TabsContent value="advisory-committee">
            <CommitteeTitle title="Advisory Committee" />
            <CommitteeList members={ADVISORY_COMMITTEE} />
          </TabsContent>
          <TabsContent value="technical-program-committee">
            <CommitteeTitle title="Technical Program Committee" />
            <CommitteeList members={TECHNICAL_PROGRAM_COMMITTEE} />
          </TabsContent>
          <TabsContent value="conference-chair">
            <CommitteeTitle title="Conference Chair" />
            <CommitteeList members={CONFERENCE_CHAIR} />
          </TabsContent>
          <TabsContent value="convenors">
            <CommitteeTitle title="Convenors" />
            <CommitteeList members={CONVENORS} />
            <CommitteeTitle title="Co-Convenors" />
            <CommitteeList members={CO_CONVENORS} />
          </TabsContent>
          <TabsContent value="organizing-committee">
            <CommitteeTitle title="Organizing Committee" />
            <CommitteeList members={ORGANIZING_COMMITTEE} />
            <p className="text-center">
              (All the above are from GSFC Universty, Vadodara)
            </p>
          </TabsContent>
          <TabsContent value="editorial-team">
            <CommitteeTitle title="Editorial Team" />
            <CommitteeList members={EDITORIAL_TEAM} />
          </TabsContent>
          <TabsContent value="web-committee">
            <CommitteeTitle title="Web Committee" />
            <CommitteeList members={WEB_COMMITTEE} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const CommitteeList = ({ members }: { members: Array<Member> }) => {
  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {members.map(({ name, position }, i) => (
        <li key={i} className="py-3 sm:py-4">
          <div className="flex flex-col items-center">
            <p className="text-lg font-medium text-gray-900 dark:text-white">
              {name}
            </p>
            <p className="text-md text-gray-500 dark:text-gray-400">
              {position}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

const TabTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="text-md md:text-lg font-semibold md:px-4 md:py-2 px-1 transition-all">
      {title}
    </h2>
  );
};

const CommitteeTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="text-2xl font-bold p-4 mt-4 text-center text-info">
      {title}
    </h2>
  );
};
export default CommitteeSection;
