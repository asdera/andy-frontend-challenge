import React, { FC } from "react";
import { List, Skeleton } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import Item from "antd/lib/list/Item";
import PageLayout from "../PageLayout/PageLayout";
import data from "./../../data.json";
import styles from "./EventList.module.scss";

interface EventListProps {}

const EventList: FC<EventListProps> = () => (
  <List
    className={styles.container}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item
        actions={[
          <a key="list-loadmore-edit">edit</a>,
          <a key="list-loadmore-more">more</a>,
        ]}
      >
        <List.Item.Meta
          avatar={<Avatar src={(item.speakers[0] as any)?.profile_pic} />}
          title={<a href="https://ant.design">{item.name}</a>}
          description={item.description}
        />
        {/* {item.speakers.map()} */}
      </List.Item>
    )}
  />
);

export default EventList;
