import React, { useState, useEffect, FC } from "react";
import {
  useEventListQuery as getEventListQuery,
  TEvent,
  useEventProfileQuery as getEventProfileQuery,
} from "../../generated/graphql";
import EventList from "../EventList/EventList";
import { List, message, Avatar, Select } from "antd";
import VirtualList from "rc-virtual-list";
import { Option } from "antd/lib/mentions";

const EventListContainer = () => {
  const { data, error, loading } = getEventListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <EventList data={data} />;
};

const ContainerHeight = 400;

interface EventScrollContainerProps {
  // hello: number;
}

const EventScrollContainer: FC<EventScrollContainerProps> = () => {
  const [events, setData] = useState<TEvent[]>([]);
  const { data, error, loading, refetch } = getEventProfileQuery({
    variables: { id: 0 },
  });
  console.log(data);

  const appendData = () => {
    console.log(data);
    setData(events.concat(data?.sampleEvent as TEvent));
    message.success(`${events.length} more items loaded!`);
  };

  useEffect(() => {
    appendData();
    refetch({ id: Number(events.length) });
  }, [refetch, events.length]);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onScroll = (e: React.UIEvent<HTMLElement>) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      ContainerHeight
    ) {
      appendData();
    }
  };

  console.log("aoe", events);

  return (
    <>
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Select.Option value="jack">Jack</Select.Option>
        <Select.Option value="lucy">Lucy</Select.Option>
        <Select.Option value="disabled" disabled>
          Disabled
        </Select.Option>
        <Select.Option value="Yiminghe">yiminghe</Select.Option>
      </Select>
      <Select defaultValue="lucy" style={{ width: 120 }} disabled>
        <Select.Option value="lucy">Lucy</Select.Option>
      </Select>
      <Select defaultValue="lucy" style={{ width: 120 }} loading>
        <Select.Option value="lucy">Lucy</Select.Option>
      </Select>
      <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
        <Select.Option value="lucy">Lucy</Select.Option>
      </Select>
      <List>
        <VirtualList
          data={events}
          height={ContainerHeight}
          itemHeight={47}
          itemKey="id"
          onScroll={onScroll}
        >
          {(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Avatar src={(item.speakers[0] as any)?.profile_pic} />}
                title={<a href="https://ant.design">{item.name}</a>}
                description={item.description}
              />
              <div>Content</div>
            </List.Item>
          )}
        </VirtualList>
      </List>
    </>
  );
};

export default EventListContainer;
