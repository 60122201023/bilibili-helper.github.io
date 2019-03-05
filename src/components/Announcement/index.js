/**
 * Author: DrowsyFlesh
 * Create: 2019/3/4
 * Description:
 */
import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';
import ANNOUNCEMENTS from 'JSON/announcement.json';

//import sliderImage1 from 'Static/slider/1.png';

const AnnouncementWrapper = styled.div`
  width: 800px;
  margin: 10px auto;
  h3 {
    margin: 15px 0 10px;
    font-size: 16px;
    color: #212121;
  }
  ul {
    padding: 5px 1px;
    border-radius: 3px;
    background-color: var(--pure-white);
    z-index: 101;
    li {
      padding: 7px 10px;
      font-size: 12px;
      list-style: none;
      //cursor: pointer;
      border-radius: 3px;
      border-bottom: 1px solid var(--border-color);
      transition: all 0.1s;
      &:last-of-type {
        border:none;
      }
      //&:hover, &.active {
      //  background-color: var(--bilibili-blue);
      //  color: var(--pure-white);
      //}
      &::after {
        content: ';';
        display: inline;
      }
      &:last-of-type::after {
        content: '。';
      }
      i {
        margin: 0 3px;
        font-style: normal;
      }
    }
  }
`;

export default class Announcement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AnnouncementWrapper id="announcement">
                <h3>重要公告 ~ ANNOUNCEMENTS</h3>
                {_.map(ANNOUNCEMENTS, (info, title) => (
                    title === '功能删除须知' && <div className="item" key={title}>
                        <ul className="content">{info.map((text, index) => <li key={index} dangerouslySetInnerHTML={{__html: text}}/>)}</ul>
                    </div>
                ))}
            </AnnouncementWrapper>
        );
    }
}