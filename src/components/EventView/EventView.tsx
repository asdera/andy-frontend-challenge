import workshopAvatar from "../../images/service.png";
import activityAvatar from "../../images/confetti.png";
import talkAvatar from "../../images/answer.png";
import { Divider, Popover, Typography } from "antd";
import defaultAvatar from "../../images/defaultAvatar.jpeg";
import Avatar from "antd/lib/avatar/avatar";
import React, { FC } from "react";
import { TEvent } from "../../generated/graphql";
import DateRange from "../DateRange/DateRange";
import { toTitleCase } from "../utils";
import styles from "./EventView.module.scss";

const { Title, Text, Paragraph, Link } = Typography;

const EventTypeToAvatar: { [name: string]: string } = {
  tech_talk: talkAvatar,
  workshop: workshopAvatar,
  activity: activityAvatar,
};

const IntroduceSpeaker: string[] = [
  "Give it up for",
  "Please welcome",
  "Give a round of applause to",
  "Meet",
];

interface EventViewProps {
  item: TEvent;
}

const EventView: FC<EventViewProps> = ({ item }) => (
  <div className={styles.container}>
    <Title level={4}>When is it?</Title>
    <Paragraph type="secondary">Mark your calendars for...</Paragraph>
    <DateRange
      startDate={new Date(item.start_time)}
      endDate={new Date(item.end_time)}
    />
    <Divider></Divider>
    <Title level={4}>What's it about?</Title>
    <Paragraph type="secondary">{item.description}</Paragraph>
    <Title level={4}>Who's running it?</Title>
    <Avatar
      size={70}
      className={styles.eventAvatar}
      src={EventTypeToAvatar[item.event_type]}
    />
    <Paragraph className={styles.speakerDescription} type="secondary">
      <Text type="secondary">
        This is a Hack the North {toTitleCase(item.event_type)} Event
      </Text>
    </Paragraph>
    {item.speakers.map(({ name, profile_pic }: any, index: number) => (
      <>
        <Avatar size={70} src={profile_pic || defaultAvatar} />
        <Paragraph className={styles.speakerDescription} type="secondary">
          <Text type="secondary">
            {IntroduceSpeaker[index % IntroduceSpeaker.length]} {name} !
          </Text>
        </Paragraph>
      </>
    ))}
    {item.related_events && (
      <>
        <Title level={4}>Are there any related events?</Title>

        {item.related_events.map((id: number) => (
          <Paragraph type="secondary">
            <Text type="secondary">{id}</Text>
          </Paragraph>
        ))}
      </>
    )}
  </div>
);

export default EventView;
