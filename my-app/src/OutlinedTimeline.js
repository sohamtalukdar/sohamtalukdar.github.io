import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Tooltip from '@mui/material/Tooltip';

export default function OutlinedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <Tooltip title="Details about 2019" placement="top" arrow>
          <TimelineContent>2019</TimelineContent>
        </Tooltip>
      </TimelineItem>
      {/* Repeat for other TimelineItems with respective Tooltips and placement="top" */}
    </Timeline>
  );
}
