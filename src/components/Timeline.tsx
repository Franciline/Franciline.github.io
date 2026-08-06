import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jul. 2026 - Present"
            iconStyle={{ background: '#0F4C75', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Research Intern NLP</h3>
            <h4 className="vertical-timeline-element-subtitle">Tsukuba University, Ibaraki, Japan</h4>
            <p>
              NLP, LLM, Emotion-Cause extraction from 
              Breast Cancer Narratives 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025 - 2026"
            iconStyle={{ background: '#0F4C75', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Master 1 MIND/DAC</h3>
            <h4 className="vertical-timeline-element-subtitle">Sorbonne University, Paris, France</h4>
            <p>
              AI, Machine Learning, Deep Learning, Natural Language Processing..
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul. 2025 - Aug. 2025"
            iconStyle={{ background: '#0F4C75', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Science Intern </h3>
            <h4 className="vertical-timeline-element-subtitle">LIP6 - SU, Paris, France</h4>
            <p>
              Prediction with Machine Learning of companies carbon footprint emission
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2025"
            iconStyle={{ background: '#0F4C75', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Sorbonne University, Paris, France</h4>
            <p>
              Automation, Data Governance, Statistical Analysis
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;