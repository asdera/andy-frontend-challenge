import { Card, Divider, Popover, Space, Typography } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { List } from "antd/lib/form/Form";
import React, { FC } from "react";
import { TEvent } from "../../generated/graphql";
import Item from "antd/lib/list/Item";
import styles from "./EventProfile.module.scss";
import DateRange from "../DateRange/DateRange";
const { Title, Text, Paragraph } = Typography;

interface EventProfileProps {
  item: TEvent;
}

const EventProfile: FC<EventProfileProps> = ({ item }) => (
  <Card
    className={styles.card}
    title={
      <Space direction="vertical">
        <Text>{item.name}</Text>
        <DateRange
          startDate={new Date(item.start_time)}
          endDate={new Date(item.end_time)}
        />
      </Space>
    }
    actions={[<a>edit</a>, <a>more</a>]}
  >
    <Card.Meta
      // avatar={<Avatar src={(item.speakers[0] as any)?.profile_pic} />}
      // title={
      //   <a href="https://ant.design">
      //     <DateRange startDate={new Date(item.start_time)} endDate={new Date(item.end_time)}/>
      //   </a>
      // }
      description={
        <Paragraph className={styles.description} type="secondary">
          {item.description}
        </Paragraph>
      }
    />
    <Divider style={{ margin: 0 }}>
      <Space size={10}>
        <Popover
          placement="rightTop"
          content={item.name}
          title={item.event_type}
        >
          <Avatar size={60} src="https://joeschmoe.io/api/v1/random" />
        </Popover>
      </Space>
    </Divider>
    {/* {item.speakers.map()} */}
  </Card>
);

export default EventProfile;
