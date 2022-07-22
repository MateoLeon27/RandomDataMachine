import React, { Component } from "react";

import List from "./List";
import Mission from "../images/Mission.jpg";
import Newport from "../images/newport.jpg";
import Zion from "../images/Zion.jpg";
import candlelight from "../images/candlelight.jpg";

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          share: "https://sbrm.org/about-sbrm/volunteer",
          learn: "https://sbrm.org/programs",
          title: "Santa Barbara Mission",
          image: Mission,
          description:
            "The Santa Barbara Rescue Mission has served the county and city of Santa Barbara for over 50 years, providing emergency services and long-term recovery for the homeless and addicted.",
        },
        {
          share: "https://zionpark.org/impact-report/",
          learn: "https://zionpark.org/",
          title: "Zion Canyon",
          image: Zion,
          description: "Come and hike for charity with us!",
        },
        {
          share: "https://www.nba.com/lakers/community/lakers-youth-foundation",
          learn: "https://www.nba.com/lakers/community/giving",
          title: "Lakers Youth Foundation",
          image: "https://pbs.twimg.com/media/E9BEYKBWUAAqReN.jpg",
          description:
            "Come join us for a youth Fundraiser at the Staples Center!",
        },
        {
          share: "https://www.focusonthefamily.ca/covid-19",
          learn:
            "https://www.focusonthefamily.ca/content/how-to-have-a-christmas-eve-candlelight-service-at-home",
          title: "How to have a Candlelight Service at home",
          image: candlelight,
          description: "How to have a Candlelight Service at home",
        },
        {
          share: "https://encenter.org/volunteer-enc/",
          learn: "https://encenter.org/",
          title: "Newport Beach Charity Dinner",
          image: Newport,
          description:
            "If you’d like a productive, fun way to spend your free time we REALLY appreciate volunteers at the ENC!",
        },
      ],
      searchEvents: "",
    };
  }
// fizzBuzz = () => {
  //   for (let i = 1; i < 101; i++) {
  //         if (i % 15 == 0) console.log("FizzBuzz");
  //         else if (i % 3 == 0) console.log("Fizz");
  //         else if (i % 5 == 0) console.log("Buzz");
  //         else console.log(i);
  // };
  render() {
    return (
      <div classNameName="EventList">
        <List events={this.state.list} />
      </div>
    );
  }
}
export default EventList;
