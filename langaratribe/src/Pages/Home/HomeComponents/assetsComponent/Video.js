import course from "../assets/course.mp4"

const Video = () => {
    <video src={course} controls="controls" width="100%" autoplay="true"/>
}

export default Video;