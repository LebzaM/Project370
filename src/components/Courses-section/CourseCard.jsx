import React from "react";

const CourseCard = (props) => {
  const { imgUrl, title, lesson, students, rating, description, url } = props.item;
  // console.log(props.item)

  return (
    <div className="single__course__item">
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" onClick={() => window.open(url, '_blank')} style={{cursor:'pointer'}}/>
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>
        <p className="course__title mb-4">{description}</p>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="lesson d-flex align-items-center gap-1">
            <i class="ri-book-open-line"></i> {lesson}
          </p>

          <p className="students d-flex align-items-center gap-1">
            <i class="ri-user-line"></i> {students}K
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-1">
            
          </p>

          <p className="enroll d-flex align-items-center gap-1">
            <a onClick={()=> window.open('https://www.up.ac.za/online-registration', '_blank')} style={{color:'#17bf9e', cursor:'pointer'}}> Enroll Now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
