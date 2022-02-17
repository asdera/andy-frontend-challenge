import workshopAvatar from "../../images/service.png";
import activityAvatar from "../../images/confetti.png";
import talkAvatar from "../../images/answer.png";
import { Button, Divider, Popover, Space, Typography } from "antd";
import defaultAvatar from "../../images/defaultAvatar.jpeg";
import Avatar from "antd/lib/avatar/avatar";
import React, { FC } from "react";
import { TEvent } from "../../generated/graphql";
import DateRange from "../DateRange/DateRange";
import { toTitleCase } from "../utils";
import styles from "./EventView.module.scss";
import EventProfile from "../EventProfile/EventProfile";
import EventRelatedView from "../EventRelatedView/EventRelatedView";

const { Title, Text, Paragraph, Link } = Typography;

const EventTypeToAvatar: { [name: string]: string } = {
  tech_talk: talkAvatar,
  workshop: workshopAvatar,
  activity: activityAvatar,
};

const IntroduceSpeaker: string[] = [
  "Give it up for",
  "Please welcome",
  "Give a round of applause for",
  "Meet",
];

const IntroduceDate: string[] = [
  "Mark you calendars for",
  "Don't miss the day",
  "We'd love to see you on",
  "Join us on",
];

interface EventViewProps {
  item: TEvent;
}

const EventView: FC<EventViewProps> = ({ item }) => (
  <div className={styles.container}>
    <Title level={4}>When is it?</Title>
    <Paragraph type="secondary">
      {IntroduceDate[item.id % IntroduceDate.length]}...
    </Paragraph>
    <Title level={5}>
      <DateRange
        startDate={new Date(item.start_time)}
        endDate={new Date(item.end_time)}
      />
    </Title>
    <Divider />
    <Title level={4}>What's it about?</Title>
    <Paragraph type="secondary">{item.description}</Paragraph>
    <Title level={4}>Who's running it?</Title>

    <Space>
      <Avatar
        size={70}
        className={styles.eventAvatar}
        src={EventTypeToAvatar[item.event_type]}
      />

      <Title level={5} className={styles.speakerDescription} type="secondary">
        This is a Hack the North {toTitleCase(item.event_type)} Event
      </Title>
    </Space>

    {item.speakers.map(({ name, profile_pic }: any, index: number) => (
      <div key={name}>
        <Space className={styles.speakerRow}>
          <Avatar size={70} src={profile_pic || defaultAvatar} />

          <Title
            level={5}
            className={styles.speakerDescription}
            type="secondary"
          >
            {IntroduceSpeaker[(item.id + index) % IntroduceSpeaker.length]}{" "}
            {name} !
          </Title>
        </Space>
      </div>
    ))}
    <Divider>
      <Space size={20}>
        <Button href={item.private_url} size="large">
          View
        </Button>
        <Button href={item.public_url || ""} size="large">
          Watch
        </Button>
      </Space>
    </Divider>
    {item.related_events && (
      <>
        <Title level={4}>Related Events</Title>

        {item.related_events.map((id: number) => (
          <div key={id}>
            <EventRelatedView oldId={id} id={id} />
          </div>
        ))}
      </>
    )}
  </div>
);

export default EventView;
