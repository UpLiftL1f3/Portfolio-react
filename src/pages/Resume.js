import resume from '../components/assets/MyResume.pdf';
import resume1 from './images/myresume1.jpg';
import resume2 from './images/resume2.jpg';
import icon from '../components/assets/download.png';

export default function Resume() {
  return (
    <div
      className="pt-3 text-center"
      style={{
        display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'center',
        }}
      >
        <img
          src={icon}
          alt="download"
          style={{ marginLeft: 15, height: 50, width: 50 }}
        />
        <a className="" href={resume} download>
          DOWNLOAD
        </a>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 900,
        }}
      >
        <img
          src={resume1}
          alt="resume1"
          className="img-fluid img-thumbnail"
        ></img>
        <img
          src={resume2}
          alt="resume2"
          className="img-fluid img-thumbnail"
        ></img>
      </div>
    </div>
  );
}
