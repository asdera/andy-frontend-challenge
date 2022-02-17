import React, { FC } from "react";
import { Card, List, Skeleton } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import Item from "antd/lib/list/Item";
import PageLayout from "../PageLayout/PageLayout";
import styles from "./EventList.module.scss";
import { EventListQuery, TEvent } from "../../generated/graphql";
import EventProfile from "../EventProfile/EventProfile";
import _ from "lodash";

interface EventListProps {
  data: TEvent[];
  loading: boolean;
}

const EventList: FC<EventListProps> = ({ data, loading }) => (
  <List
    className={styles.container}
    // itemLayout="horizontal"
    grid={{
      gutter: 24,
      xs: 1,
      sm: 1,
      md: 1,
      lg: 2,
      xl: 2,
      xxl: 3,
    }}
    pagination={{
      showSizeChanger: true,
      defaultPageSize: 24,
      pageSizeOptions: ["6", "12", "24"],
      position: "bottom",
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item className={styles.item}>
        <EventProfile item={item} loading={loading} />
      </List.Item>
    )}
  />
);

export default EventList;
