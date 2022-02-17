import defaultAvatar from "../../images/defaultAvatar.jpeg";
import workshopAvatar from "../../images/service.png";
import activityAvatar from "../../images/confetti.png";
import talkAvatar from "../../images/answer.png";

import {
  Card,
  Divider,
  Popover,
  Space,
  Typography,
  Avatar,
  Drawer,
  Button,
} from "antd";
import { FC, useState } from "react";
import { TEvent } from "../../generated/graphql";
import styles from "./EventProfile.module.scss";
import DateRange from "../DateRange/DateRange";
import { EventTypeToHeader, toTitleCase } from "../utils";
import SkeletonCard from "../SkeletonCard/SkeletonCard";
import EventView from "../EventView/EventView";

const { Title, Text, Paragraph, Link } = Typography;

const EventTypeToAvatar: { [name: string]: string } = {
  tech_talk: talkAvatar,
  workshop: workshopAvatar,
  activity: activityAvatar,
};

interface EventProfileProps {
  item: TEvent;
  loading: boolean;
  nested?: boolean;
}

const EventProfile: FC<EventProfileProps> = ({
  item,
  loading,
  nested = false,
}) => {
  // const [overfillBorder, setOverfillBorder] = useState(false)
  const [visible, setVisible] = useState(false);
  const showSideView = () => {
    setVisible(true);
  };

  const closeSideView = () => {
    setVisible(false);
  };

  if (loading) {
    return <SkeletonCard />;
  }

  return (
    <>
      <Card
        onClick={showSideView}
        className={styles.card}
        headStyle={{
          backgroundColor: EventTypeToHeader[item.event_type] || "white",
        }}
        title={
          <Space direction="vertical">
            <Text strong>{item.name}</Text>
            <DateRange
              startDate={new Date(item.start_time)}
              endDate={new Date(item.end_time)}
            />
          </Space>
        }
        actions={[
          <Link href={item.private_url}>
            <div className={`${styles.linkBox} ${styles[item.event_type]}`}>
              <Text type="secondary">View</Text>
            </div>
          </Link>,
          ...(item.public_url
            ? [
                <Link href={item.public_url}>
                  <div
                    className={`${styles.linkBox} ${styles[item.event_type]}`}
                  >
                    <Text type="secondary">Watch</Text>
                  </div>
                </Link>,
              ]
            : []),
        ]}
      >
        <Card.Meta
          description={
            <Paragraph className={styles.description} type="secondary">
              {item.description}
            </Paragraph>
          }
        />
        <Divider style={{ margin: 0 }}>
          <Space size={10}>
            <Avatar.Group size={60}>
              <Popover
                placement="leftTop"
                content={
                  <Text strong>{toTitleCase(item.event_type)} Event</Text>
                }
              >
                <Avatar
                  className={styles.eventAvatar}
                  src={EventTypeToAvatar[item.event_type]}
                />
              </Popover>
              {item.speakers.map(({ name, profile_pic }: any) => (
                <Popover
                  key={name}
                  placement="topRight"
                  content={<Text>Meet {name} !</Text>}
                >
                  <Avatar src={profile_pic || defaultAvatar} />
                </Popover>
              ))}
            </Avatar.Group>
          </Space>
        </Divider>
        {/* {item.speakers.map()} */}
      </Card>
      <Drawer
        width={600}
        title={<Text>{item.name}</Text>}
        placement="right"
        onClose={closeSideView}
        visible={visible}
        maskStyle={
          nested ? { opacity: 0, transition: "none", background: "none" } : {}
        }
      >
        <EventView item={item}></EventView>
      </Drawer>
    </>
  );
};

export default EventProfile;
