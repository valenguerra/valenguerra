import { Card } from "../Card";
import { Divider } from "../Divider";
import { Expandable } from "../Expandable";
import { Link } from "../Link";
import { SubititleIcon } from "../SubtitleIcon";
import { Paragraph } from "../Text";
import { TitleIcon } from "../TitleIcon";

import about01 from "../../assets/images/about01.png";
import about02 from "../../assets/images/about02.png";
import about03 from "../../assets/images/about03.png";
import dinosaur from "../../assets/images/dinosaur.png";
import reading from "../../assets/images/reading.png";
import checkCalendar from "../../assets/images/check_calendar.png";
import notebook from "../../assets/images/notebook.png";
import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import { NOTION_COLLAGE, NOTION_NOTES } from "../../app/consts";
import { ImageZoom } from "../ImageZoom";

export const AboutMe = React.forwardRef<HTMLElement, {}>(({}, ref): JSX.Element => {
  const language = useContext(LanguageContext);
  const { aboutMe: texts } = language?.texts;
  const { expandable1, expandable2, expandable3 } = texts;

  return (
    <Card ref={ref}>
      <TitleIcon iconSrc={dinosaur} title={texts.title} />
      <div className="flex w-full flex-wrap justify-between gap-8">
        <ImageZoom src={about01} alt="Valentino Guerra on the beach" className="h-24 flex-1 rounded md:h-32" />
        <ImageZoom src={about02} alt="Valentino Guerra on a mountain" className="h-24 flex-1 rounded md:h-32" />
        <ImageZoom src={about03} alt="Valentino Guerra with friends" className="h-24 flex-1 rounded md:h-32" />
      </div>
      <div className="flex flex-col gap-4">
        <Paragraph>{texts.ph1}</Paragraph>
        <Paragraph>{texts.ph2}</Paragraph>
        <Paragraph>{texts.ph3}</Paragraph>
        <Paragraph>{texts.ph4}</Paragraph>
        <Divider />
        <Expandable title={<SubititleIcon iconSrc={reading} title={expandable1.title} />}>
          <Paragraph>{expandable1.ph1}</Paragraph>
          <Paragraph>
            {expandable1.ph2[0]} <Link to={NOTION_COLLAGE}>{expandable1.ph2[1]}</Link>
          </Paragraph>
          <Paragraph>{expandable1.ph3}</Paragraph>
        </Expandable>
        <Divider />
        <Expandable title={<SubititleIcon iconSrc={checkCalendar} title={expandable2.title} />}>
          <Paragraph>{expandable2.ph1} </Paragraph>
          <ul className="mt-2 flex list-disc flex-col gap-2 pl-6">
            <li>{expandable2.list[0]}</li>
            <li>{expandable2.list[1]}</li>
            <li>{expandable2.list[2]}</li>
            <li>{expandable2.list[3]}</li>
            <li>{expandable2.list[4]}</li>
          </ul>
        </Expandable>
        <Divider />
        <Expandable title={<SubititleIcon iconSrc={notebook} title={expandable3.title} />}>
          <Paragraph>{expandable3.ph1}</Paragraph>
          <Paragraph>
            {expandable3.ph2[0]} <Link to={NOTION_NOTES}>{expandable3.ph2[1]}</Link>
          </Paragraph>
        </Expandable>
      </div>
    </Card>
  );
});
