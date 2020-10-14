import React from "react";
import PropTypes from "prop-types";
import "./City.scss";
import cities from "../../models/cities";

const City = ({ corona }) => {
  return (
      <div className="City">
        <div className="City_top">
          <select className="City_top_select">
            {cities.map((city,index) => 
              <option value={index}>{city}</option>
            )}
          </select>
        </div>
          <div className="City_text">
            <span className="City_text_span">{corona[15].area}의 코로나 정보를 표시합니다</span>
          </div>
        <div className="City_bottom">
          <div className="City_bottom_check">
            <div>
            <span className="City_bottom_check_name">확진자 수</span>
            <span className="City_bottom_check_person">{corona[15].check}명</span>
            </div>
          </div>
          <div className="City_bottom_death">
          <div>
            <span className="City_bottom_death_name">사망자 수</span>
            <span className="City_bottom_death_person">{corona[15].death}명</span>
            </div>
          </div>
          <div className="City_bottom_update">
          <div>
            <span className="City_bottom_update_name">전일대비 증가수</span>
            <span className="City_bottom_update_person">{corona[15].update}명</span>
            </div>
          </div>
        </div>
      </div>
  );
};

City.propTypes = {};

export default City;
