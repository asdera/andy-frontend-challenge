import React, { FC } from "react";
import styles from "./DateRange.module.scss";

import { Divider, Space } from "antd";
import Text from "antd/lib/typography/Text";
import { ReactElement } from "react";

const simpleDateFormat = {
  day: "numeric",
  month: "long",
  year: "numeric",
} as const;

const timeFormat = {
  hour: "numeric",
  minute: "numeric",
} as const;

interface DateRangeProps {
  startDate: Date;
  endDate: Date;
}

const DateRange: FC<DateRangeProps> = ({ startDate, endDate }) => (
  <Divider style={{ margin: 0 }}>
    <Space size={0}>
      <Text type="success">
        {Intl.DateTimeFormat("en", simpleDateFormat).format(startDate)}
      </Text>
      <Divider type="vertical" />
      <Text type="secondary">{`${Intl.DateTimeFormat("en", timeFormat).format(
        startDate
      )} - ${Intl.DateTimeFormat("en", timeFormat).format(endDate)}`}</Text>
    </Space>
  </Divider>
);

export default DateRange;
