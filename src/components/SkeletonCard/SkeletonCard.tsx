import styles from "./SkeletonCard.module.scss";
import {
  Card,
  Divider,
  Popover,
  Space,
  Typography,
  Avatar,
  Skeleton,
} from "antd";
import { FC } from "react";
import { TEvent } from "../../generated/graphql";
import DateRange from "../DateRange/DateRange";
import { toTitleCase } from "../utils";
const { Text, Paragraph, Link } = Typography;

interface SkeletonCardProps {}

const SkeletonCard: FC<SkeletonCardProps> = () => (
  <Card
    className={styles.card}
    title={
      <Space direction="vertical" className={styles.cardHeader}>
        <Skeleton
          paragraph={false}
          title={{ width: 220 }}
          style={{ margin: "-8px 0" }}
        />
        <Skeleton
          paragraph={false}
          title={{ width: 220 }}
          style={{ margin: "-8px 0" }}
        />
      </Space>
    }
    actions={[<Skeleton.Input style={{ width: 60, height: 24 }} />]}
  >
    <Card.Meta
      description={<Skeleton title={false} className={styles.description} />}
    />
    <Divider style={{ margin: 0 }}>
      <Space size={10}>
        <Avatar.Group>
          <Skeleton.Avatar size={60} />
        </Avatar.Group>
      </Space>
    </Divider>
    {/* {item.speakers.map()} */}
  </Card>
);

export default SkeletonCard;
