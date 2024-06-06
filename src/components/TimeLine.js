import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const TimeLine = () => {
  return (
    <div className="timeline bg-[#0a192f] flex flex-col gap-10" name="timeline">
      <p className="text-4xl inline border-b-4 border-pink-600 font-bold text-gray-300 mx-auto">
        TimeLine
      </p>
      <VerticalTimeline className="z-0">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2018 - 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={}
        >
          <h3 className="vertical-timeline-element-title">Student</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Kathmandu, Nepal
          </h4>
          <p> Asian school of management and technology</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Organizer</h3>
          <h4 className="vertical-timeline-element-subtitle">Asian hackathon</h4>
          <p>
            Organizer and creative head of Asian hack 2022
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Kathmandu, Nepal
          </h4>
          <p>HTML, CSS, JS developer at Beehive technologies</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2023 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Lalitpur, Nepal
          </h4>
          <p>Full stack software engineer at Eight bit private limited</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default TimeLine;
