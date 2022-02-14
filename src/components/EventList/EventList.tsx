import React, { FC } from "react";
import { Card, List, Skeleton } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import Item from "antd/lib/list/Item";
import PageLayout from "../PageLayout/PageLayout";
import styles from "./EventList.module.scss";
import { EventListQuery } from "../../generated/graphql";
import EventProfile from "../EventProfile/EventProfile";

interface EventListProps {
  data: EventListQuery;
}

const EventList: FC<EventListProps> = ({ data }) => (
  <List
    className={styles.container}
    // itemLayout="horizontal"
    grid={{
      gutter: 16,
      xs: 1,
      sm: 1,
      md: 1,
      lg: 2,
      xl: 2,
      xxl: 3,
    }}
    dataSource={data.sampleEvents}
    renderItem={(item) => (
      <List.Item className={styles.item}>
        <EventProfile item={item} />
      </List.Item>
    )}
  />
);

export default EventList;
